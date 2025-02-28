<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shoe extends Model
{
    use HasFactory;

    protected $table = "shoe";

    protected $fillable = [
        'name',
        "image",
        "description",
        "price",
        "color",
    ];
}
