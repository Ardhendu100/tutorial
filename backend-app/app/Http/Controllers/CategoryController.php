<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $categories = Category::all();
        return response()->json(['categories' => $categories], 200);
        
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:categories',
        ]);

        $slug = Str::slug($request->name);

        $category = Category::create([
            'name' => $request->name,
            'slug' => $slug,
        ]);
        return response()->json(['category' => $category], 201);
    }

    // Display the specified resource.
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return response()->json(['category' => $category], 200);
    }

    // Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            'name' => 'required|string|unique:categories,name,' . $category->id,
        ]);

        // Update the slug if the name is changed
        if ($request->has('name') && $request->name !== $category->name) {
            $slug = Str::slug($request->name);
            $category->slug = $slug;
        }

        $category->update([
            'name' => $request->name,
        ]);
        return response()->json(['category' => $category], 200);
    }

    // Remove the specified resource from storage.
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json(['message' => 'Category deleted successfully'], 200);
    }
}
