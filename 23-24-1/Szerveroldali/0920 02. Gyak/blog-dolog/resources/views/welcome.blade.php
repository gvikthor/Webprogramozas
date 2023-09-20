<x-guest-layout>
    <x-slot name="title">Főoldal</x-slot>

    <h1>Blog</h1>
    Ez itt a welcome oldal.

    <h2>Sima PHP tag</h2>
    @php
        $one_friend = 'Gergő';
        $friends = ['Rezső', 'Péter', 'Áron'];
        echo 'Ez egy sima PHP tag';
    @endphp

    <h2>Behelyettesítés</h2>
    Van egy {{$one_friend}} nevű barátunk.

    <h2>Elágazáa</h2>
    @if (count($friends))
        Van {{count($friends)}} darab barátunk.
    @else
        Nincsenek barátaink:(
    @endif

    <h2>Foreach</h2>
    <ul>
    @foreach ($friends as $friend)
        <li>{{$friend}}</li>
    @endforeach
    </ul>

    @forelse ($friends as $friend)
        @if ($loop->first)
            Az első barátunk {{$friend}}.
        @elseif ($loop->last)
            Az utolsó barátunk {{$friend}}.
        @else
            A(z) {{$loop->index}}. barátunk {{$friend}}.
        @endif
    @empty
        Még mindig nincsenek barátaink:((
    @endforelse

    
    {{-- @switch($type)
        @case(1)
            
            @break
        @case(2)
            
            @break
        @default
            
    @endswitch --}}

    <div x-data="{ count: 0 }">
        <button x-on:click="count++">Increment</button>
     
        <span x-text="count"></span>
    </div>
</x-guest-layout>