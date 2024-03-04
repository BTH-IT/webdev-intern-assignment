<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreShoeRequest;
use App\Http\Resources\ShoeCollection;
use App\Http\Resources\ShoeResource;
use App\Models\Shoe;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ShoeController extends Controller
{
    protected $shoe;

    public function __construct(Shoe $shoe)
    {
        $this->shoe = $shoe;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shoes = $this->shoe->all();

        return $this->handleSuccessResponse($shoes, 'success', Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreShoeRequest $request)
    {
        $dataCreate = $request->all();
        $shoe = $this->shoe->create($dataCreate);

        $shoeResource = new ShoeResource($shoe);

        return $this->handleSuccessResponse($shoeResource, 'success', Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $shoe = $this->shoe->findOrFail($id);

        $shoeResource = new ShoeResource($shoe);

        return $this->handleSuccessResponse($shoeResource, 'success', Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $shoe = $this->shoe->findOrFail($id);

        $dataUpdate = $request->all();

        $shoe->update($dataUpdate);

        $shoeResource = new ShoeResource($shoe);

        return $this->handleSuccessResponse($shoeResource, 'success', Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $shoe = $this->shoe->findOrFail($id);

        $shoe->delete();

        $shoeResource = new ShoeResource($shoe);

        return $this->handleSuccessResponse($shoeResource, 'success', Response::HTTP_OK);
    }
}
