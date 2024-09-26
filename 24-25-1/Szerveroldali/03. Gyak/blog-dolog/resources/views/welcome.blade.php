<x-guest-layout>
    <x-slot name="title">Főoldal</x-slot>

    <h1>Blog</h1>
    @php
        $posts = [
            (object)[
                'title' => 'My son, the dog',
                'desc' => 'This is an article about how adopting a dog transformed me into the father figure my friends knew I am, but I never thought I could become.',
                'author' => 'Bátori Gergő',
            ],
            (object)[
                'title' => 'How to train your dogon',
                'desc' => 'Are you unsure of what to do with your active and loud little friend? I\'m here to help you regulate your first puppy!',
                'author' => 'Pozmáni Bálint',
            ],
            (object)[
                'title' => 'Me, the dog',
                'desc' => 'Join me on my journey of self discovery, where you can learn more about the furry spirit inside you.',
                'author' => 'Etyke Áron',
            ],
            (object)[
                'title' => 'Cats > Dogs',
                'desc' => 'In this article we will give a theoretical proof for the absolute value of cats and dogs.',
                'author' => 'Miklósi Péter'
            ],
            (object)[
                'title' => 'Not food: the dog',
                'desc' => 'As a passionate food guru I travel the world to find unique culinary experiences. However, in this episode I have reached my limits.',
                'author' => 'Győrffy Rezső',
            ],
            (object)[
                'title' => 'Cats > Dogs: Practical testing',
                'desc' => 'Building on the research of Péter Miklósi et.al. we will demonstrate with extensive experimenting that practice and theory do align, and cats are indeed superior to dogs.',
                'author' => 'Pécsettes Míra'
            ],
            (object)[
                'title' => 'Oh no, this dog brumms',
                'desc' => 'How to differentiate a dog from a bear? Easy, poke it with a stick and see if you survive... or read this article, to learn some actual advice.',
                'author' => 'Debreczeny László'
            ],
        ];
    @endphp

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        @foreach ($posts as $post)
            <div class="p-6 thor-post-colors flex flex-col shadow-sm rounded-lg">
                <h2 class="text-xl font-bold">{{$post->title}}</h2>
                <p class="">{{$post->desc}}</p>
                <p class="text-right mt-auto">{{$post->author}}</p>
            </div>
        @endforeach
    </div>
</x-guest-layout>