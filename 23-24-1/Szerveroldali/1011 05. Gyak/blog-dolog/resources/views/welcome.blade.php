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
        $posts = [
            (object)[
                'title' => 'My son, the dog',
                'desc' => 'This is an article about how adopting a dog transformed me into the father figure my friends knew I am, but I never thought I could become.',
                'author' => 'Bátori Gergő',
                'topics' => ['family', 'menthe'],
            ],
            (object)[
                'title' => 'How to train your dogon',
                'desc' => 'Are you unsure of what to do with your active and loud little friend? I\'m here to help you regulate your first puppy!',
                'author' => 'Pozmáni Bálint',
                'topics' => ['family', 'food'],
            ],
            (object)[
                'title' => 'Me, the dog',
                'desc' => 'Join me on my journey of self discovery, where you can learn more about the furry spirit inside you.',
                'author' => 'Etyke Áron',
                'topics' => ['menthe'],
            ],
            (object)[
                'title' => 'Cats > Dogs',
                'desc' => 'In this article we will give a theoretical proof for the absolute value of cats and dogs.',
                'author' => 'Miklósi Péter',
                'topics' => ['politics', 'family', 'food'],
            ],
            (object)[
                'title' => 'Not food: the dog',
                'desc' => 'As a passionate food guru I travel the world to find unique culinary experiences. However, in this episode I have reached my limits.',
                'author' => 'Győrffy Rezső',
                'topics' => ['food'],
            ],
            (object)[
                'title' => 'Cats > Dogs: Practical testing',
                'desc' => 'Building on the research of Péter Miklósi et.al. we will demonstrate with extensive experimenting that practice and theory do align, and cats are indeed superior to dogs.',
                'author' => 'Pécsettes Míra',
                'topics' => ['politics', 'family', 'food'],
            ],
            (object)[
                'title' => 'Oh no, this dog brumms',
                'desc' => 'How to differentiate a dog from a bear? Easy, poke it with a stick and see if you survive... or read this article, to learn some actual advice.',
                'author' => 'Debreczeny László',
                'topics' => ['family'],
            ],
        ];
    @endphp

    <h1>Blog</h1>
    
    <div class="py-6">
        <a
            href="{{ route('posts.create') }}"
            class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
        >Új bejegyzés</a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        @foreach ($posts as $post)
            <div class="p-6 thor-post-colors flex flex-col shadow-sm rounded-lg">
                <h2 class="text-xl font-bold">{{ $post->title }}</h2>
                <p class="">{{ $post->desc }}</p>
                <p class="text-right mt-auto">{{ $post->author }}</p>
                <div class="flex flex-wrap mt-auto">
                    @foreach ($post->topics as $topic)
                        <span class="text-xs {{ $topics->$topic->color }} rounded-full px-2 py-1 mr-1 mb-1">{{ $topics->$topic->name }}</span>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>

    
</x-guest-layout>