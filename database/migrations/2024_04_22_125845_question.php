<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * 
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('quiz_id');
            $table->string('question_text');
            $table->json('options'); // Store options as JSON array
            $table->unsignedInteger('correct_option_index'); // Store index of correct option
            $table->timestamps();

            $table->foreign('quiz_id')->references('id')->on('quiz')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * 
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
};