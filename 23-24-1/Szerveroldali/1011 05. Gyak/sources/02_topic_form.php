<x-guest-layout>
    <x-slot name="title">Új téma</x-slot>

    <h1>Új téma</h1>

    <form class="flex flex-col gap-4" action="{{ route('topics.store') }}" method="POST">
        @csrf
        <label for="shortname">Rövid név</label>
        <input type="text" name="shortname" id="shortname" class="thor-input-field" value="{{ old('shortname', '') }}" placeholder="food">
        @error('shortname')
            <div class="text-red-500">Rövid név hiba: {{ $message }}</div>
        @enderror

        <label for="fullname">Teljes név</label>
        <input name="fullname" id="fullname" cols="30" rows="10" class="thor-input-field" value="{{ old('fullname', '') }}" placeholder="Gasztronómia">
        @error('fullname')
            <div class="text-red-500">Teljes név hiba: {{ $message }}</div>
        @enderror

        <label for="color">Szín (tailwind class)</label>
        <input type="text" name="color" id="color" class="thor-input-field" value="{{ old('color', '') }}" placeholder="bg-red-200">
        @error('color')
            <div class="text-red-500">Szín hiba: {{ $message }}</div>
        @enderror

        <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">Küldés</button>
    </form>
</x-guest-layout>