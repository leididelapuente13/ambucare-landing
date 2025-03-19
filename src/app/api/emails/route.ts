import { connectdb } from "@/lib/database/mongodb";
import EmailModel from "@/models/Email.model";
import { NextRequest, NextResponse } from "next/server";

const getByEmail = async (email: string) => {
    try {
        const found_user = await EmailModel.findOne({ email });
        return found_user;
    } catch (error) {
        console.error("Error getting user by email", error);
        return null;
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await connectdb();

        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const found_user = await getByEmail(email);
        if (found_user) {
            return NextResponse.json({ message: `El email ${email} ya está en nuestra lista.`}, { status: 409 });
        }

        const new_email = new EmailModel({ email });
        await new_email.save();
        return NextResponse.json({ message: "Email guardado exitosamente" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
