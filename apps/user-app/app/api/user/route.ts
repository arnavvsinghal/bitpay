import { NextResponse } from "next/server"
import {PrismaClient} from "@bitpay/db/client"

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "abc",
            name: "abc"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}
