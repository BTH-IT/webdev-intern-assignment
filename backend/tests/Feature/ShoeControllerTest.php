<?php

namespace Tests\Feature;

use App\Models\Shoe;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;

class ShoeControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_correct_response()
    {
        $response = $this->get('/api/shoes');

        $response->assertStatus(Response::HTTP_OK);
    }

    public function test_index_returns_shoes()
    {
        Shoe::factory()->count(5)->create();

        $response = $this->get('/api/shoes');

        $response->assertJsonCount(5, 'data');
    }

    public function test_store_creates_new_shoe()
    {
        $shoeData = [
            'name' => 'Test Shoe',
            'image' => 'test-image.jpg',
            'description' => 'Test description',
            'price' => 99.99,
            'color' => '#ffffff',
        ];

        $response = $this->post('/api/shoes', $shoeData);

        $response->assertStatus(Response::HTTP_OK);
        $this->assertDatabaseHas('shoes', $shoeData);
    }

    public function test_show_returns_correct_shoe()
    {
        $shoe = Shoe::factory()->create();

        $response = $this->get("/api/shoes/{$shoe->id}");

        $response->assertStatus(Response::HTTP_OK)
            ->assertJson(['data' => $shoe->toArray()]);
    }

    public function test_update_updates_shoe()
    {
        $shoe = Shoe::factory()->create();
        $updatedData = [
            'name' => 'Updated Shoe',
            'price' => 129.99,
        ];

        $response = $this->put("/api/shoes/{$shoe->id}", $updatedData);

        $response->assertStatus(Response::HTTP_OK);
        $this->assertDatabaseHas('shoes', array_merge(['id' => $shoe->id], $updatedData));
    }

    public function test_destroy_deletes_shoe()
    {
        $shoe = Shoe::factory()->create();

        $response = $this->delete("/api/shoes/{$shoe->id}");

        $response->assertStatus(Response::HTTP_OK);
        $this->assertDatabaseMissing('shoes', ['id' => $shoe->id]);
    }
}
