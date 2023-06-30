import styled, { css } from 'styled-components';

import { ButtonSizes, ButtonVariants } from '@/app/ui/button/button.component';

const getVariantStyles = ({ variant = 'primary' }) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: #0000ffa0;
        color: white;
      `;
    case 'inverse':
      return css`
        background-color: white;
        color: #0000ffa0;
      `;
    case 'danger':
      return css`
        background-color: #ff00009b;
        color: #fff;
      `;
  }
};

const getSizeStyles = ({ size = 'medium' }) => {
  switch (size) {
    case 'sm':
      return css`
        height: 1.5rem;
        padding: 10px 16px;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `;
    case 'medium':
      return css`
        height: 2rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `;
    case 'lg':
      return css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
      `;
  }
};

type ButtonProps = {
  variant: ButtonVariants;
  size: ButtonSizes;
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
`;

// export const StyledLink = styled(Link)<ButtonProps>`
//   text-decoration: none;
//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
//   ${buttonStyle};
// `;
