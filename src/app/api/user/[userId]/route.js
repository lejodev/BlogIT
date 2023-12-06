import { NextResponse } from "next/server";
import { databaseConnect } from "@/utils/db";
import User from "@/models/User";

export async function GET(req, { params }) {
  try {
    databaseConnect();
    const userId = params.userId;
    const user = await User.findById(userId);
    console.log(user);
    if (user) {
      return NextResponse.json({ user }, { status: 200 });
    } else {
      return NextResponse.json({ Error: "No user found" }, { status: 204 });
    }
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}
