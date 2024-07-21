import React from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "danger" | "link";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: css`
    background-color: #007bff;
    color: white;
    border: none;
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
    border: none;
  `,
  danger: css`
    background-color: #dc3545;
    color: white;
    border: none;
  `,
  link: css`
    background: none;
    color: #007bff;
    border: none;
    text-decoration: underline;
  `,
};

const buttonSizes = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${(props) => buttonVariants[props.variant || "primary"]}
  ${(props) => buttonSizes[props.size || "medium"]}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.65;
      pointer-events: none;
    `}
`;

const Button: React.FC<ButtonProps> = ({
  variant = "secondary",
  size = "medium",
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
