import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import palette, { buttonColorMap } from '@/lib/styles/palette.lib';

export type ButtonColor =
  | 'none'
  | 'teal'
  | 'gray'
  | 'red'
  | 'cyan'
  | 'blue'
  | 'orange'
  | 'violet'
  | 'indigo';

export type ButtonSize = 'small' | 'medium' | 'large' | 'large-full';

type ButtonProps = {
  color: ButtonColor;
  size: ButtonSize;
  disabled: boolean;
};

const ButtonSizeStyles = ({ size = 'medium' }: { size: ButtonSize }) => {
  switch (size) {
    case 'small':
      return css`
        height: 1.5rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `;
    case 'large':
      return css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
      `;
    case 'large-full':
      return css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
        width: 100%;
      `;
    case 'medium':
      return css`
        height: 2rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `;
  }
};

export const buttonStyle = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;

  color: ${(props) => buttonColorMap[props.color].color};
  background: ${(props) => buttonColorMap[props.color].background};
  &:hover,
  &:focus {
    color: ${(props) => buttonColorMap[props.color].hoverBackground};
  }

  ${ButtonSizeStyles}

  ${(props) =>
    props.disabled &&
    css`
      background: ${palette.gray3};
      color: ${palette.gray5};
      cursor: not-allowed;
    `}
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonStyle}
`;

export const StyledLink = styled(Link)<ButtonProps>`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  ${buttonStyle};
`;
