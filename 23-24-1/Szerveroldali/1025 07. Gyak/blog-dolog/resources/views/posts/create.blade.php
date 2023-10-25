<x-guest-layout>
    <x-slot name="title">Új bejegyzés</x-slot>

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

    <h1>Új bejegyzés</h1>

    <form class="flex flex-col gap-4" action="{{ route('posts.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <label for="title">Cím</label>
        <input type="text" name="title" id="title" class="thor-input-field" value="{{ old('title', '') }}">
        @error('title')
            <div class="text-red-500">Cím hiba: {{ $message }}</div>
        @enderror

        <label for="desc">Leírás</label>
        <textarea name="desc" id="desc" cols="30" rows="10" class="thor-input-field">{{ old('desc', '') }}</textarea>
        @error('desc')
            <div class="text-red-500">Leírás hiba: {{ $message }}</div>
        @enderror

        <!--label for="author">Szerző</label>
        <input type="text" name="author" id="author" class="thor-input-field" value="{ { old('author', '') }}">
        @ error('author')
            <div class="text-red-500">Szerző hiba: { { $message }}</div>
        @ enderror-->

        <label for="topics">Témák</label>
        @foreach ($topics as $index => $topic)
            <div class="flex items-center gap-2">
                <input type="checkbox" name="topics[]" id="topic-{{ $index }}" value="{{ $index }}" class="thor-input-field" @checked(in_array($index, old('topics') ?? []))>
                <label for="topic-{{ $index }}" class="text-sm text-gray-900 {{ $topic->color }} rounded-full px-2 py-1 mr-1 mb-1">{{ $topic->name }}</label>
            </div>
        @endforeach
        @error('topics')
            <div class="text-red-500">Téma hiba: {{ $message }}</div>            
        @enderror
        @error('topics.*')
            <div class="text-red-500">Téma hiba: {{ $message }}</div>            
        @enderror

        <label for="attach_file">Csatolmány</label>
        <input type="file" name="attach_file" id="attach_file" class="thor-input-field">
        @error('attach_file')
            <div class="text-red-500">Csatolmány hiba: {{ $message }}</div>
        @enderror
        
        <label for="attach_image">Borítókép</label>
        <input type="file" name="attach_image" id="attach_image" class="thor-input-field">
        @error('attach_image')
            <div class="text-red-500">Borítókép hiba: {{ $message }}</div>
        @enderror

        <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">Küldés</button>
    </form>
</x-guest-layout>