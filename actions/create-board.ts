"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod"; 

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null; 
}

const CreateBoard = z.object({
    title: z.string().min(3, {
        message: "No minimo 3 letras"
    }),
});
export async function create(prevState: State, formData: FormData) {
    const validatedFields = CreateBoard.safeParse({
        title: formData.get("title"),
    });

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Preencha os campos."
        }
    }

    const { title } = validatedFields.data;

    try {
    await db.board.create({
        data: {
            title,
        }
    });
} catch(error) {
    return {
        message: "Erro no banco"
    }
}

    revalidatePath("/organization/org_2dhbMGYHyTXRi35BIU3naLyCajn");
    redirect("/organization/org_2dhbMGYHyTXRi35BIU3naLyCajn")
    
}
