<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CategoryController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        return response()->json([
            'response' => Category::all(),
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|string|unique:categories',
        ];
        try {
            $request->validate($rules);
            $slug = Str::slug($request->name);

            $category = Category::create([
                'name' => $request->name,
                'slug' => $slug,
            ]);
            return response()->json([
                'response' => $category,
                'message' => 'Category created successfully',
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
                'code' => Response::HTTP_UNPROCESSABLE_ENTITY
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    // Display the specified resource.
    public function show($slug)
    {
        try {
            $category = Category::with('subCategories')->where('slug',$slug)->first();

            return response()->json([
                'response' => $category,
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'Category not found',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        }
    }

    // Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        $rules = [
            'name' => 'required|string|unique:categories,name,' . $id,
        ];

        try {
            $request->validate($rules);

            $category = Category::findOrFail($id);
            $category->name = $request->name;
            $category->slug = Str::slug($request->name); // You might want to update the slug as well.

            $category->save();

            return response()->json([
                'response' => $category,
                'message' => 'Category updated successfully',
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
                'code' => Response::HTTP_UNPROCESSABLE_ENTITY
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Category not found',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        }
    }


    // Remove the specified resource from storage.
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json(['message' => 'Category deleted successfully'], 200);
    }
}
