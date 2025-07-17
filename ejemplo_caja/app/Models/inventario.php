<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class inventario extends Model
{
    use HasFactory;
    protected $table = 'productos';
    public $timestamps = false;
    protected $fillable = [
        'nombre',
        'categoria',
        'descripcion',
        'precio',
        'disponible',
        'fecha_creacion',
        'cantidad'
    ];
}
