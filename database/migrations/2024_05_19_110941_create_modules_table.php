<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('course_id');
            $table->string('title');
            $table->text('learning_achievements');
            $table->text('learning_materials');
            $table->string('title_youtube');
            $table->string('description_youtube');
            $table->string('additional_material_title');
            $table->string('additional_material_description');
            $table->string('description');
            $table->string('video_link');
            $table->string('note_link');
            $table->timestamps();

            // Foreign
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modules');
    }
};
