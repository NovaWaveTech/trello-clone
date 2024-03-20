"use client";

import { createBoard } from "@/actions/create-board";

import { useAction } from "@/hooks/use-action";
import { FormInput } from "@/components/forms/form-input";
import { FormSubmit } from "@/components/forms/form-submit";


export const Form = () => {
    const {execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data, "SUCESSO!")
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get('title') as string;

        execute({ title });
    }

    return (
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">
               <FormInput 
                    label="Título"
                    id="title"
                    errors={fieldErrors}
                />
            </div>
            <FormSubmit>
                save
            </FormSubmit>
        </form>
    )
}