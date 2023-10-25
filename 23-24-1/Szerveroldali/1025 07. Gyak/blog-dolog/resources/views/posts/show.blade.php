<x-guest-layout>
    <x-slot name="title">Cikk: {{ $post->title }}</x-slot> 

    <h1>{{ $post->title }}</h1>
    @if(Session::has('created_just_now'))
        <h2 class="text-green-500">✅ Létrehozva</h2>
    @endif
    <div class="text-gray-900 flex flex-wrap mt-auto">
        @foreach ($topics as $topic)
            <span class="text-xs {{ $topic->color }} rounded-full px-2 py-1 mr-1 mb-1">{{ $topic->fullname }}</span>
        @endforeach
    </div>
    <img class="rounded-lg" src="{{ asset("storage/images/$image_name") }}" alt="Cover image">
    <div class="my-5">{{ $post->desc }}</div>
    <div>
    {!! nl2br(e($post->content)) !!}
    </div>

    @if ($post->attachment_file_name)
        <div class="my-5">
            <p>Csatolt fájl: 
                <a  class="text-blue-500"
                    href="{{ asset("storage/files/$post->attachment_hash_name") }}"
                    download="{{$post->attachment_file_name}}"
                    target="_blank"
                >⬇️ {{$post->attachment_file_name}}</a>
            </p>
        </div>
    @endif
</x-guest-layout>