<?php

namespace Database\Seeders;

use App\Models\Topic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Topic::create([
            'short_key' => 'food',
            'name' => 'Gastronomy',
            'color' => 'bg-red-200'
        ]);
        Topic::create([
            'short_key' => 'family',
            'name' => 'Family & home',
            'color' => 'bg-green-200'
        ]);
        Topic::create([
            'short_key' => 'politics',
            'name' => 'Politics & economy',
            'color' => 'bg-blue-200'
        ]);
        Topic::create([
            'short_key' => 'menthe',
            'name' => 'Mental health',
            'color' => 'bg-yellow-200'
        ]);
    }
}
