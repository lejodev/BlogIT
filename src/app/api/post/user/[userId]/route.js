import { NextResponse, NextRequest } from "next/server";
import { databaseConnect } from "@/utils/db"
import Post from "@/models/Post";

export async function GET(req, { params }) {
    try {
        databaseConnect()
        const { userId } = params // Destructring
        const userPosts = await Post.find({ author: userId })
        console.log(userPosts)
        if (userPosts) {
            return NextResponse.json({ userPosts }, { status: 200 })
        } else {
            return NextResponse.json({ "Message": "Error while getting user's post" }, { status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ "Error": error })
    }
}