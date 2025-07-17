<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InventarioController;
use App\Models\inventario;
use App\Http\Controllers\VentaController;

route::get('/productos', [InventarioController::class, 'index']);
route::post('/productos', [InventarioController::class, 'store']);
route::get('/productos/{id}', [InventarioController::class, 'show']);
route::delete('/productos/{id}', [InventarioController::class, 'destroy']);

route::get('ventas', [VentaController::class, 'index']);
route::post('/ventas', [VentaController::class, 'store']);
route::get('/ventas/{id}', [VentaController::class, 'show']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
