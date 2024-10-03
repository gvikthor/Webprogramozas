<x-guest-layout>
    <x-slot name="title">Új bejegyzés</x-slot>

    <h1>Új bejegyzés</h1>

    <form class="flex flex-col gap-4" method="POST" action="{{ route('posts.store') }}">
        @csrf
        <label for="title">Cím</label>
        <input type="text" name="title" id="title" class="thor-input-field" value="{{ old('title', '') }}">
        @error('title')
            <div>{{$message}}</div>
        @enderror
 
        <label for="desc">Leírás</label>
        <textarea name="desc" id="desc" cols="30" rows="10" class="thor-input-field"></textarea>

        <label for="author">Szerző</label>
        <input type="text" name="author" id="author" class="thor-input-field">

        <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">Küldés</button>
    </form>
</x-guest-layout>