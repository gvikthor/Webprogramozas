<x-guest-layout>
    <x-slot name="title">Új bejegyzés</x-slot>

    <h1>Új bejegyzés</h1>

    <form class="flex flex-col gap-4" action="{{ route('posts.store') }}" method="POST">
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

        <label for="author">Szerző</label>
        <input type="text" name="author" id="author" class="thor-input-field" value="{{ old('author', '') }}">
        @error('author')
            <div class="text-red-500">Szerző hiba: {{ $message }}</div>
        @enderror

        <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">Küldés</button>
    </form>
</x-guest-layout>