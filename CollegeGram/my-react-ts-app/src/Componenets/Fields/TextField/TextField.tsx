// components/TextField.jsx
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { Container, Input, Label } from "../FiledsStyle";

interface TextFieldProps {
  control: any;
  name: string;
  rules?: any;
  type: "text" | "number" | "email" | "password";
  onClick?: () => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  prefixIcon?: React.ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({
  control,
  name,
  rules,
  type = "text",
  onClick,
  placeholder = "",
  className = "",
  required = false,
  prefixIcon,
}) => {
  const { field, fieldState: { error } } = useController({
    name,
    control,
    rules,
  });

  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Container
      onMouseOver={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <Label className={className}>
        <div className="relative">
          {prefixIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {prefixIcon}
            </div>
          )}
          <Input
            {...field}
            className={`${prefixIcon ? "pl-10" : ""} ${className}`}
            onClick={onClick}
            type={type}
            placeholder={placeholder}
            required={required}
          />
        </div>
        {error && <div className="text-red-600 text-sm mt-1">{error.message}</div>}
      </Label>
    </Container>
  );
};

export default TextField;
