<x-guest-layout>
    <x-slot name="title">Cikkek</x-slot>

    @php
    function get_topic($short_key, $topics){
        foreach($topics as $topic) {
            if($topic->short_key == $short_key) return $topic;
        }
    }
    @endphp

    <h1>Blog</h1>
    
    @auth
    <div class="py-6">
        <a
            href="{{ route('posts.create') }}"
            class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
        >Új bejegyzés</a>
    </div>
    @else
    <div>
        Jelentkezz be bejegyzés hozzáadásához!
    </div>
    @endauth

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        @foreach ($posts as $post)
            <div class="p-6 thor-post-colors flex flex-col shadow-sm rounded-lg">
                <h2 class="text-xl font-bold">
                    <a href="{{ route("posts.show", $post->id) }}">
                    {{ $post->title }}
                    </a>
                </h2>
                <p class="">{{ $post->desc }}</p>
                <p class="text-right mt-auto">{{ $post->author }}</p>
                <div class="flex flex-wrap mt-auto">
                    @foreach (json_decode($post->topics) as $short_key)
                        <span class="text-xs {{ get_topic($short_key, $topics)->color }} rounded-full px-2 py-1 mr-1 mb-1">{{  get_topic($short_key, $topics)->name }}</span>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>

    
</x-guest-layout>