import styled from 'styled-components';

import palette from '@/lib/styles/palette.lib';

import { StyledButton } from '@/app/ui/button/button.styles';

export const SignUpFormContainer = styled.div`
  h3 {
    margin: 0;
    color: ${palette.cyan8};
    margin-bottom: 1rem;
    font-size: 1.125rem;
    text-align: center;
    font-weight: bold;
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.error};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const SignUpButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const SignUpButton = styled(StyledButton)`
  margin-top: 1rem;
  width: 100%;
`;

export const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray6};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray9};
    }
  }
`;
