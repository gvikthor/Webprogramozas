<x-guest-layout>
    <x-slot name="title">Homepage</x-slot>
    @php
        $single_friend = 'Gergő';
        $friends = ['Geregő', 'Péter', 'Áron'];
    @endphp

    <h2>Blade variables</h2>
    I have a friend named {{$single_friend}}.

    <h2>Blade if</h2>
    @if (count($friends) > 0)
        I have {{count($friends)}} friends.
    @else
        I have no friends.
    @endif

    <h2>Blade loop</h2>
    <ul>
    @foreach ($friends as $friend)
        <li>{{$friend}}</li>
    @endforeach
    </ul>

    @forelse ($friends as $friend)
        {{$friend}}
    @empty
        I had no friends.
    @endforelse

    <br>
    
    @foreach ($friends as $friend)
        {{--var_dump($loop)--}}
        @if ($loop->first)
            My first friend is {{$friend}}. <br>
        @elseif($loop->last) 
            My last friend is {{$friend}}. <br>
        @else
            My next friend is {{$friend}}. <br>
        @endif
    @endforeach

    @php
        $timetable = [
        (object)['line' => 1, 'depart' => '07:00', 'direction' => 'Vörösmarty tér'],
        (object)['line' => 1, 'depart' => '07:01', 'direction' => 'Mexikói út'],
        (object)['line' => 2, 'depart' => '07:02', 'direction' => 'Örs vezér tere'],
        (object)['line' => 3, 'depart' => '07:02', 'direction' => 'Kőbánya-Kispest'],
        (object)['line' => 3, 'depart' => '07:03', 'direction' => 'Újpest-Központ'],
        (object)['line' => 2, 'depart' => '07:03', 'direction' => 'Déli pályaudvar'],
        (object)['line' => 2, 'depart' => '07:05', 'direction' => 'Örs vezér tere'],
        (object)['line' => 3, 'depart' => '07:05', 'direction' => 'Kőbánya-Kispest'],
        (object)['line' => 1, 'depart' => '07:05', 'direction' => 'Vörösmarty tér'],
        (object)['line' => 3, 'depart' => '07:06', 'direction' => 'Újpest-Központ'],
        (object)['line' => 2, 'depart' => '07:06', 'direction' => 'Déli pályaudvar'],
        (object)['line' => 1, 'depart' => '07:06', 'direction' => 'Mexikói út'],
        (object)['line' => 2, 'depart' => '07:08', 'direction' => 'Örs vezér tere'],
        (object)['line' => 3, 'depart' => '07:09', 'direction' => 'Kőbánya-Kispest'],
        (object)['line' => 2, 'depart' => '07:09', 'direction' => 'Déli pályaudvar'],
        (object)['line' => 3, 'depart' => '07:10', 'direction' => 'Újpest-Központ'],
        (object)['line' => 1, 'depart' => '07:10', 'direction' => 'Vörösmarty tér']
    ];
    @endphp

    <table>
        <tr>
            <th>Departure</th>
            <th>Direction</th>
            <th>Line</th>
        </tr>
        @foreach ($timetable as $metro)
            <tr>
                <td>{{$metro->depart}}</td>
                <td>{{$metro->direction}}</td>
                <td>
                    @switch ($metro->line)
                    @case (1)
                        🟡
                        @break
                
                    @case (2)
                        🔴
                        @break
                    @case (3)
                        🔵
                        @break
                    @default
                        ❓
                    @endswitch
                </td>
            </tr>
        @endforeach
    </table>
</x-guest-layout>