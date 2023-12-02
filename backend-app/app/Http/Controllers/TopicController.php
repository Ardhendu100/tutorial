<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $topics = Topic::all();
        return response()->json(['topics' => $topics], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // You can return a JSON response or handle it based on your requirements
        return response()->json(['message' => 'Not supported for create method'], 405);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string|unique:topics',
            'sub_category_id' => 'required|exists:sub_categories,id',
            'contents' => 'required|string',
        ]);

        $topic = Topic::create($request->all());

        return response()->json(['topic' => $topic, 'message' => 'Topic created successfully.'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function show(Topic $topic)
    {
        return response()->json(['topic' => $topic], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function edit(Topic $topic)
    {
        // You can return a JSON response or handle it based on your requirements
        return response()->json(['message' => 'Not supported for edit method'], 405);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Topic $topic)
    {
        $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string|unique:topics,slug,' . $topic->id,
            'sub_category_id' => 'required|exists:sub_categories,id',
            'contents' => 'required|string',
        ]);

        $topic->update($request->all());

        return response()->json(['topic' => $topic, 'message' => 'Topic updated successfully.'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Topic $topic)
    {
        $topic->delete();

        return response()->json(['message' => 'Topic deleted successfully.'], 200);
    }
}
