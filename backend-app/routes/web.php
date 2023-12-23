<?php

use App\Http\Controllers\PaymentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// })->name('welcome');

// Route::get('phonepe',[PaymentController::class,'phonePe']);
// Route::any('phonepe-response',[PaymentController::class,'response'])->name('response');



Route::get('/', [PaymentController::class, 'index']);
//++++++++++++++++++++++++++++++++++++++++++++++
//The Payment Route For The Product
//+++++++++++++++++++++++++++++++++++++++++++++
Route::get('pay', [PaymentController::class, 'payment_init']);
Route::get('pay-refund-view', [PaymentController::class, 'refund']);
Route::get('pay-refund', [PaymentController::class, 'payment_refund']);
Route::any('pay-return-url', [PaymentController::class, 'payment_return'])->name('pay-return-url');
Route::post('pay-callback-url', [PaymentController::class, 'payment_callback'])->name('pay-callback-url');
Route::any('pay-refund-callback', [PaymentController::class, 'payment_refund_callback'])->name('pay-refund-callback');