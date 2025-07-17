<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\inventario;

class InventarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $item = inventario::all();
        return response()->json($item);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request-> validate([
            'nombre' => 'required|string|max:255',
            'categoria' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'precio' => 'required|numeric|min:0',
            'disponible' => 'required|boolean',
            'fecha_creacion' => 'required|date',
            'cantidad' => 'required|integer|min:1',
        ]);
        $item = inventario::create($validate);

        return response()->json([
            'message' => 'Item created successfully',
            'item' => $item
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $item = inventario::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        } else {
            return response()->json($item);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = inventario::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        $item->delete();
        return response()->json(['message' => 'Item deleted']);
    }
}
