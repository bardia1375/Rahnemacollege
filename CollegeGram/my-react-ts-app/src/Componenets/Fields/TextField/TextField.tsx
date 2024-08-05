import React, { useState } from "react";
import { Container, Input, Label } from "../FiledsStyle";
import Controller from "../../Modal/Controller/Controller";
import Typography from "../../Typography/Typography";
import { uppercaseFunction } from "../../../Utils/uppercaseFunction";
import EditableLabel from "../EditableLabel/EditableLabel";
import { FaUser } from "react-icons/fa";

interface TextFieldProps {
  type: "text" | "number" | "email" | "password";
  name?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  value?: string | number;
  index?: number;
  required?: boolean;
  prefixIcon?: React.ReactNode; // Added for icon
}

const TextField: React.FC<TextFieldProps> = ({
  type,
  name,
  onClick,
  onChange,
  onChangeTitle,
  placeholder,
  className,
  value,
  index,
  required,
  prefixIcon, // Added for icon
}) => {
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
            className={`${prefixIcon ? "pl-10" : ""} ${className}`}
            name={name}
            onClick={onClick}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            required={required}
            value={value as string | number}
          />
        </div>
      </Label>
    </Container>
  );
};

export default TextField;
