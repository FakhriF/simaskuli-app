<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $incrementing = false; // Disable auto-incrementing
    protected $primaryKey = null; // No primary key attribute

    protected $fillable = ['user_id', 'course_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    // Override the save method to handle composite keys
    public function save(array $options = [])
    {
        if (!$this->exists) {
            // Insert
            $query = $this->newQueryWithoutScopes();
            $attributes = $this->getAttributes();
            $query->insert($attributes);
            $this->exists = true;
        } else {
            // Update
            $this->isDirty() ? $this->performUpdate($this->newQueryWithoutScopes()) : true;
        }
        return true;
    }

    protected function performUpdate(\Illuminate\Database\Eloquent\Builder $query)
    {
        return $query->where('user_id', $this->user_id)
                     ->where('course_id', $this->course_id)
                     ->update($this->getDirty());
    }
}
