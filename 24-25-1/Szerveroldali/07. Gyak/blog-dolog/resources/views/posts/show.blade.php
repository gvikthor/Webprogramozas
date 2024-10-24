<x-guest-layout>
    <x-slot name="title">Cikkek</x-slot>

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

        $imgname = $post->image_hash_name ?? 'default.jpg';
        $imgpath = asset("storage/images/$imgname");

        // véletlen összekevrtük és a hash_name a file_name és fordítva is
        $filepath = asset("storage/files/$post->attachment_file_name");
    @endphp

    <h1>{{$post->title}}</h1>

    @auth
    Szia {{$email}}!
    @endauth

    <br>

    <div>
        <a href="{{$imgpath}}">
            <img src={{$imgpath}}>
        </a>
        @if($post->attachment_file_name)
            <a href="{{$filepath}}" download="{{$post->attachment_hash_name}}">⬇️ {{$post->attachment_hash_name}}</a>
        @endif
        <br><br>
        {!!nl2br(e($post->content))!!}
    </div>

    
</x-guest-layout>