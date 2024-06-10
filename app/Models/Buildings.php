<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    use HasFactory;

    protected $fillable = ['building_name', 'longitude', 'latitude'];

    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
