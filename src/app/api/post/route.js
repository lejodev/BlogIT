import { NextResponse } from "next/server";
import { databaseConnect } from "@/utils/db";
import Post from "@/models/Post";

export async function GET() {
  try {
    databaseConnect();
    const posts = await Post.find();
    if (posts) {
      return NextResponse.json(posts, { status: 200 });
    } else {
      return NextResponse.json(
        { Message: "No posts available" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function POST(req, { params }) {
  try {
    databaseConnect();
    const post = await req.json();
    const mongoosePost = new Post(post);
    const savePost = await mongoosePost.save();
    console.log(savePost);
    return NextResponse.json(
      { message: "Post created succeessfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Message: "CARECHIMBA" }, { status: 400 });
  }
}
