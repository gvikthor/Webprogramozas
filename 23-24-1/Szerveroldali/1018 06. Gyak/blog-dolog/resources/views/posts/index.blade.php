<x-guest-layout>
    <x-slot name="title">Főoldal</x-slot>

    @php
        $topics = (object)[
            'food' => (object)[
                'name' => 'Gastronomy',
                'color' => 'bg-red-200',
            ],
            'family' => (object)[
                'name' => 'Family & home',
                'color' => 'bg-green-200',
            ],
            'politics' => (object)[
                'name' => 'Politics & economy',
                'color' => 'bg-blue-200',
            ],
            'menthe' => (object)[
                'name' => 'Mental health',
                'color' => 'bg-yellow-200',
            ],
        ];
    @endphp

    <h1>Blog</h1>
    
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

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        @foreach ($posts as $post)
            <div class="p-6 thor-post-colors flex flex-col shadow-sm rounded-lg">
                <h2 class="text-xl font-bold">{{ $post->title }}</h2>
                <p class="">{{ $post->desc }}</p>
                <p class="text-right mt-auto">{{ $post->author }}</p>
                <div class="flex flex-wrap mt-auto">
                    @foreach (json_decode($post->topics) as $topic)
                        <span class="text-xs {{ $topics->$topic->color }} rounded-full px-2 py-1 mr-1 mb-1">{{ $topics->$topic->name }}</span>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>

    
</x-guest-layout>