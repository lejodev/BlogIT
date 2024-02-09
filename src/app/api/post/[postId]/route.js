import { databaseConnect } from "@/utils/db"
import Post from "@/models/Post";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req, { params }) {
    try {
        databaseConnect()
        const postId = params.postId;
        console.log(postId)
        const deletePost = await Post.findByIdAndDelete(postId)
        if (deletePost) {
            console.log(deletePost)
            return NextResponse.json({ "Message": "Post deleted successfuly" })
        } else {
            return NextResponse.json({ "Error": "Problem deleteing post" })
        }
    } catch (error) {
        return NextResponse.json({ "Error": error })
    }
}

export async function PATCH(req, { params }) {
    try {
        databaseConnect()
        const postId = params.postId;
        const newPost = await req.json()
        const updatePost = await Post.findByIdAndUpdate(postId, newPost, { new: true })
        // console.log(updatePost)
        if (updatePost) {
            return NextResponse.json({
                Message: "Post updated successfully",
                "UpdatedPost": updatePost,
            }, {
                status: 200
            })
        } else {
            return NextResponse.json({ "Error": "error updating post" })
        }
    } catch (error) {
        return NextResponse.json({ "Error": error })
    }
}

export async function GET(req, { params }) {
    try {
        databaseConnect()
        const postId = params.postId
        const post = await Post.findById(postId)
        if (post) {
            return NextResponse.json({ post }, { status: 200 })
        } else {
            return NextResponse.json({ "Error": "Problem getting this post" }, { status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ "Error": error }, { status: 400 })
    }
}