<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VentasDetalle extends Model
{
    protected $table = 'venta_detalles';
    public $timestamps = false;
    protected $fillable = ['venta_id','producto_id','cantidad','precio_unitario'];

    public function venta()
    {
        return $this->belongsTo(Ventas::class, 'venta_id');
    }
}
