<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
class SubCategoryController extends Controller
{
    public function index()
    {
        $subCategories = SubCategory::all();
        return response()->json(['subCategories' => $subCategories], 200);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $slug = Str::slug($request->name);

        $subCategory = SubCategory::create([
            'name' => $request->name,
            'slug' => $slug,
            'category_id' => $request->category_id
        ]);

        return response()->json(['subCategory' => $subCategory, 'message' => 'SubCategory created successfully.'], 200);

    }
    public function show(SubCategory $subCategory)
    {
        return response()->json(['subCategory' => $subCategory], 200);
    }

    public function update(Request $request, SubCategory $sub_category)
    {
        // dd($request);
        $rules = [
            'name' => 'required|string',
            'category_id' => 'required|exists:categories,id',
        ];
        try {
            $this->validate($request, $rules);
            
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
                'code' => Response::HTTP_UNPROCESSABLE_ENTITY
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response()->json(['subCategory' => $sub_category, 'message' => 'SubCategory updated successfully.'], 200);
    }

    public function destroy(SubCategory $subCategory)
    {
        $subCategory->delete();

        return response()->json(['message' => 'SubCategory deleted successfully.'], 200);
    }
}
