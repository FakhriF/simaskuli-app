<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ThreadController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ThreadPostController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\GradesController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('users', [UserController::class, 'index']);
// Route::post('users', [UserController::class, 'store']);
Route::get('users/{id}', [UserController::class, 'show']);

//Get a user
Route::get('user', [UserController::class, 'getUser']);
Route::get('user/session', [UserController::class, 'getAllSession']);
Route::get('user/session/{token}', [UserController::class, 'checkSession']);
Route::put('user', [UserController::class, 'editUser']);
Route::put('user/password', [UserController::class, 'changePassword']);
Route::delete('user/session', [UserController::class, 'deleteAllSessions']);
Route::delete('user', [UserController::class, 'deleteUser']);


//Auth
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::delete('logout', [AuthController::class, 'logout']);

// Thread
Route::get('forum', [ThreadController::class, 'index']);
Route::get('forum/search', [ThreadController::class, 'search']);
Route::get('forum/{id}', [ThreadController::class, 'getForumThread']);
Route::post('forum', [ThreadController::class, 'store']);
Route::delete('forum/{id}', [ThreadController::class, 'destroy']);

// Thread Post
Route::get('forum/posts', [ThreadPostController::class, 'index']);
Route::get('forum/{id}/posts', [ThreadPostController::class, 'getPostsByThreadId']);
Route::get('/forum/{forumid}/posts/{postid}', [ThreadPostController::class, 'showPost']);
Route::post('forum/{id}/posts', [ThreadPostController::class, 'store']);
Route::delete('forum/{id}/posts/', [ThreadPostController::class, 'destroy']);
Route::delete('forum/{id}/posts/{postid}', [ThreadPostController::class, 'destroySinglePost']);


// Course
Route::get('course', [CourseController::class, 'view']);

//Grades
Route::get('course/{course_id}/grades', [GradesController::class, 'getGradesByCourseId']);
Route::get('course/{course_id}/grades/{student_id}', [GradesController::class, 'showUserGradesOnCourse']);
Route::get('course/{id}', [CourseController::class, 'getById']);

