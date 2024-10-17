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
    @endphp

    <h1>:)</h1>

    
</x-guest-layout>