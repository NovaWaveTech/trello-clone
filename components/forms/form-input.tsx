"use client";

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { FormErrors } from "./form-errors";

interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[]| undefined>;
    classname?: string;
    defalutValue?: string;
    onBlur?: () => void;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    id,
    label,
    type,
    placeholder,
    required,
    disabled,
    errors,
    classname,
    defalutValue = "",
    onBlur
}, ref) => {
    const { pending } = useFormStatus();

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                {label ? (
                    <Label htmlFor={id}
                        className="text-xm font-semibold text-neutral-700"
                        
                    >
                        {label}
                    </Label>
                ) : null}
                <Input 
                    onBlur={onBlur}
                    defaultValue={defalutValue}
                    ref={ref}
                    required={required}
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled || pending}
                    className={cn(
                        "text-sm px-2 py-1 h-7",
                        classname
                    )}
                    arial-describedby={`${id}-error`}
                />
            </div>
            <FormErrors
                id={id}
                errors={errors}
            />
        </div>
    )
});

FormInput.displayName = "FormInput";