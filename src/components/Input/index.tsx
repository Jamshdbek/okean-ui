import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva([
  "w-full",
  "border",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
  "border-inherit",
  "border-blue-400",
]);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder || "Placeholder"}
        autoComplete="off"
        className={cn(inputStyles({ className }))}
        {...props}
      />
    );
  }
);
