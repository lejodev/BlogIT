import { NextResponse } from "next/server"
import { databaseConnect } from "@/utils/db"
import Post from "@/models/Post"

export async function GET() {
    try {
        databaseConnect()
        console.log("")
        const posts = await Post.find()
        console.log(posts)
        if (posts) {
            return NextResponse.json(posts, { status: 200 })
        } else {
            return NextResponse.json({ "Message": "No posts available" })
        }
    } catch (error) {
        return NextResponse.json({ "Message": error })
    }s
}

export async function POST(req, { params }) {
    try {
        databaseConnect()
        const post = await req.json()
        const mongoosePost = new Post(post)
        const savePost = await mongoosePost.save();
        console.log(savePost)
        return NextResponse.json({ "message": "Post created succeessfully" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ "Message": error }, { status: 400 })
    }
}