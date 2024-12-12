<?php

namespace App\Http\Resources;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'text' => $this->text,
            'filename' => $this->filename,
            'filename_hash' => $this->filename_hash,
            'filename_download_url' => $this->when(isset($this->filename_hash), Storage::url($this->filename_hash)),
            'ticket' => new TicketResource(Ticket::find($this->ticket_id)),
            'user' => new UserResource(User::find($this->user_id)),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
