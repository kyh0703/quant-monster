import React from 'react';

import {
  StyledLink,
  StyledButton,
  ButtonColor,
  ButtonSize,
} from './button.styles';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  to?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ref,
  to,
  color = 'teal',
  size = 'medium',
  disabled = false,
  ...rest
}) => {
  const htmlProps = rest as any;
  return to ? (
    <StyledLink
      to={to}
      color={color}
      size={size}
      disabled={disabled}
      {...htmlProps}
      onClick={(event) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(event);
        }
        (event.target as HTMLAnchorElement).blur();
      }}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledButton
      color={color}
      size={size}
      disabled={disabled}
      {...htmlProps}
      onClick={(event) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(event);
        }
        (event.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
