import NextAuth from "next-auth/next"
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import { databaseConnect } from "@/utils/db";

export async function POST(request, { params }) {
    try {
        databaseConnect()
        const user = await request.json()
        const mongoUser = new User(user);
        const saveUser = await mongoUser.save()
        return NextResponse.json({ "Correct": "well done" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ "Message": error }, { status: 400 })
    }
}