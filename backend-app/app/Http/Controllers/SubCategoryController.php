<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use Illuminate\Support\Facades\Auth;
class SubCategoryController extends Controller
{
    public function index()
    {
        return response()->json([
            'response' => SubCategory::all(),
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
        
    }


    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|string',
            'category_id' => 'required|exists:sub_categories,id',
        ];
        try {
            $request->validate($rules);
            $slug = Str::slug($request->name);

            $subCategory = SubCategory::create([
                'name' => $request->name,
                'slug' => $slug,
                'category_id' => $request->category_id
            ]);
                
            return response()->json([
                'response' => $subCategory,
                'message' => 'SubCategory created successfully',
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
    public function show(SubCategory $subCategory)
    {

        try {
        
            return response()->json([
                'response' => $subCategory,
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'Category not found',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        }
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
