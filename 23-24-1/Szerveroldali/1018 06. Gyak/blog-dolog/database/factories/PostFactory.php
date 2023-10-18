<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'desc' => fake()->text(),
            'author' => fake()->name(),
            'topics' => json_encode(
                fake()->randomElements(['food', 'politics', 'menthe', 'family'], null)
            )
        ];
    }
}
