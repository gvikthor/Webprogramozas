<x-guest-layout>
    <x-slot name="title">Főoldal</x-slot>

    <h1>Blog</h1>
    
    @auth
    <div class="py-6">
        <a
            href="{{ route('posts.create') }}"
            class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
        >Új bejegyzés</a>
        
        <a
            href="{{ route('topics.create') }}"
            class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
        >Új téma</a>
    </div>
    @endauth

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        @foreach ($posts as $post)
            <a href="{{ route('posts.show', $post) }}" class="p-6 thor-post-colors flex flex-col shadow-sm rounded-lg">
                <h2 class="text-xl font-bold">{{ $post->title }}</h2>
                <p class="">{{ $post->desc }}</p>
                <p class="text-right mt-auto">{{ $post->author }}</p>
                <div class="flex flex-wrap mt-auto">
                    @foreach ($topics as $topic)
                        @if (in_array($topic->shortname, json_decode($post->topics)))
                            <span class="text-xs {{ $topic->color }} rounded-full px-2 py-1 mr-1 mb-1">{{ $topic->fullname }}</span>
                        @endif
                    @endforeach
                </div>
            </a>
        @endforeach
    </div>

    
</x-guest-layout>