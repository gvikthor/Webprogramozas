<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Http\Resources\TicketCollection;
use App\Http\Resources\TicketResource;
use App\Models\Comment;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ApiController extends Controller
{
      //////////////////////////////
     // Authentikációs végpontok //
    //////////////////////////////

    /**
     * Regisztrációs végpont, felhasználó létrehozása, token generálása
     */
    public function register(Request $request) {
        // Validálás
        // Jelszó validálásához használható a Password segédosztály (https://laravel.com/docs/11.x/validation#validating-passwords)
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string',
        ], [
            'required' => ':attribute mező megadása kötelező!',
            'string' => ':attribute mező kötelezően szöveges lehet csak!',
            'email' => ':attribute mező csak helyesen formázott email címet tartalmazhat!',
            'unique' => ':attribute cím már foglalt!'
        ], [
            'name' => 'A név',
            'email' => 'Az email',
            'password' => 'A jelszó',
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->messages()
            ], 400);
        }

        // Validáció kompaktabb verziója, automatikus validációs hiba dobással
        // $validated = $request->validate([
        //     'name' => 'required|string',
        //     'email' => 'required|string|email|unique:users,email',
        //     'password' => 'required|string',
        // ]);

        // A validált adatok kinyerése
        $validated = $validator->validated();

        // Felhasználó létrehozása
        $user = User::create($validated);

        // Token generálás
        $token = $user->createToken($user->email, $user->admin ? ['ticket:admin'] : []);

        return response()->json([
            'token' => $token->plainTextToken,
        ]);
    }

    /**
     * Bejelentkezés végpont, token generálása.
     * Az egyszerűség kedvéért email és jelszós bejelentkezés.
     */
    public function login(Request $request) {
        // Validálás
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ], [
            'required' => ':attribute mező megadása kötelező!',
            'string' => ':attribute mező kötelezően szöveges lehet csak!',
            'email' => ':attribute mező csak helyesen formázott email címet tartalmazhat!',
        ], [
            'email' => 'Az email',
            'password' => 'A jelszó',
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->messages()
            ], 400);
        }

        // A validált adatok kinyerése
        $validated = $validator->validated();

        // Felhasználó megkeresése
        $user = User::where('email', $validated['email'])->first(); // vagy firstOfFail() ==> itt be lehet mutatni, hogy hogyan lehet lekezelni az automatikus JSON response küldést ld.: bootstrap/app.php
        if(!$user) {
            return response()->json([
                'error' => 'Hibás email cím.'
            ], 404);
        }

        // Jelszó ellenőrzése
        if(Auth::attempt($validated)) {
            // Sikeres authentikáció
            // Token generálása
            // createToken(<token_name>, [<token_abilities>])
            $token = $user->createToken($user->email, $user->admin ? ['ticket:admin'] : []);

            return response()->json([
                'token' => $token->plainTextToken,
            ]);
        } else {
            return response()->json([
                'error' => 'Hibás jelszó.'
            ], 401);
        }
    }

    /**
     * Kijelentkezés végpont, token visszavonása
     */
    public function logout(Request $request) {
        $user = Auth::user();
        // Összes token törlése
        // $user->tokens()->delete();

        // A felhasználó egy bizonyos id-jú tokenjének törlése
        // $user->tokens()->where('id', $tokenId)->delete();

        // A jelenlegi authentikáció során használt token törlése
        $request->user()->currentAccessToken()->delete();

        return response()->json([], 204);
    }

    /**
     * A tokenhez tartozó user lekérdezése.
     */
    public function user(Request $request) {
        return $request->user();
    }

      ///////////////////////////
     // Ticket CRUD végpontok //
    ///////////////////////////

    /**
     * Az összes felhasználóhoz tartozó ticket lekérdezése. Ha meg van adva id, akkor az adott id-jú ticket lekérdezése.
     */
    public function getTickets(Request $request, string $id = null) {
        if(isset($id)) {
            // Token ability használata
            if($request->user()->tokenCan('ticket:admin')) {
                // return Ticket::findOrFail($id);
                return new TicketResource(Ticket::with('comments')->with('users')->with('owner')->findOrFail($id)); // A with metódushívásokkal kontrollálható, hogy miket kérdezzen le (továbbiakhoz ld.: TicketResource)
            }
            // return Auth::user()->tickets()->findOrFail($id);
            return new TicketResource(Auth::user()->tickets()->with('comments')->with('users')->with('owner')->findOrFail($id));
        }

        if($request->user()->tokenCan('ticket:admin')) {
            // return Ticket::all();
            return TicketResource::collection(Ticket::with('comments')->with('users')->with('owner')->get());
        }
        // return Auth::user()->tickets;
        return TicketResource::collection(Auth::user()->tickets()->with('comments')->with('users')->with('owner')->get());
    }

    /**
     * Ugyanaz, mint a getTickets metódus az id nélkül, de ez paginált.
     */
    public function getTicketsPaginated(Request $request) {
        if($request->user()->tokenCan('ticket:admin')) {
            // return Ticket::all();
            // return TicketResource::collection(Ticket::with('comments')->with('users')->with('owner')->get());
            return new TicketCollection(Ticket::with('comments')->with('users')->with('owner')->paginate(5));
        }
        // return Auth::user()->tickets;
        // return TicketResource::collection(Auth::user()->tickets()->with('comments')->with('users')->with('owner')->get());
        return new TicketCollection(Auth::user()->tickets()->with('comments')->with('users')->with('owner')->paginate(5));
    }

    /**
     * Új hibajegy készítése
     */
    public function store(StoreTicketRequest $request) {
        $validated = $request->validated();
        $ticket = Ticket::create($validated);
        $ticket->users()->attach(Auth::id(), ['owner' => true]);

        $ticket->comments()->create([
            'text' => $validated['text'],
            'user_id' => Auth::id(),
        ]);

        // return response()->json($ticket, 201);
        return response(new TicketResource($ticket), 201);
    }

    /**
     * Hibajegy módosítása
     */
    public function update(UpdateTicketRequest $request, $id) {
        // + authorizáció!

        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'priority' => 'required|integer|min:0|max:3',
        ]);
        $ticket = Ticket::findOrFail($id);
        $ticket->update($validated);

        // return response()->json($ticket);
        return (new TicketResource($ticket));
    }

    /**
     * Hibajegy törlése
     */
    public function destroy(Request $request, $id) {
        $ticket = Ticket::findOrFail($id);
        if(!$request->user()->tokenCan('ticket:admin') && !$ticket->users->contains(Auth::id())) {
            return response()->json([
                'error' => 'Nincs jogosultsága törölni a hibajegyet!'
            ], 403);
        }
        $ticket->delete();
        return response(status: 204);
    }

      ////////////////////////////
     // Összetettebb végpontok //
    ////////////////////////////

    /**
     * Felhasználók szinkronizálása a ticket-eken.
     */
    public function syncUsers(Request $request, $id) {
        $ticket = Ticket::findOrFail($id);

        if(!$request->user()->tokenCan('ticket:admin') && !$ticket->users->contains($request->user()->id)) {
            return response()->json([
                'error' => 'Nincs jogosultsága módosítani a hibajegyet!',
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'up' => 'array',
            'up.*' => 'integer|exists:users,id',
            'down' => 'array',
            'down.*' => 'integer|exists:users,id',
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->messages()
            ], 400);
        }
        $validated = $validator->validated();
        $users = $ticket->users;

        $output = [
            'successUp' => [],
            'successDown' => [],
            'alreadyUp' => [],
            'alreadyDown' => [],
        ];

        foreach ($validated['up'] as $userUp) {
            if($users->contains($userUp)) {
                $output['alreadyUp'][] = $userUp;
            } else {
                $ticket->users()->attach($userUp);
                $output['successUp'][] = $userUp;
            }
        }

        foreach ($validated['down'] as $userDown) {
            if($users->contains($userDown)) {
                $ticket->users()->detach($userDown);
                $output['successDown'][] = $userDown;
            } else {
                $output['alreadyDown'][] = $userDown;
            }
        }

        return response()->json($output);
    }


      ///////////////////
     // Fájlfeltöltés //
    ///////////////////
    public function fileUpload(Request $request, $ticketId, $commentId) {
        $ticket = Ticket::findOrFail($ticketId);
        $comment = Comment::findOrFail($commentId);

        if(!$request->user()->tokenCan('ticket:admin') && ($request->user()->id != $comment->user->id)) {
            return response()->json([
                'error' => 'Nincs jogosultsága feltölteni a csatolmányt!',
            ], 403);
        }

        $validated = $request->validate([
            'file' => 'required|file|max:5000',
        ]);

        // Ez igazából fölösleges, mert a validátornak el kell kapnia
        if(!$request->hasFile('file')) {
            return response()->json([
                'error' => 'Nem található feltöltött fájl!',
            ], 400);
        }

        // Van-e már fájl feltöltve? Ha igen, akkor a régit töröljük.
        if(isset($comment->filename) && isset($comment->filename_hash)) {
            Storage::delete($comment->filename_hash);
        }
        // Fájl eltárolása
        $filename = $request->file('file')->store();

        // A hozzászólás módosítása
        $comment->filename = $request->file('file')->getClientOriginalName();
        $comment->filename_hash = $filename;
        $comment->save();


        return new TicketResource(Ticket::with('comments')->find($ticketId));
    }
}
