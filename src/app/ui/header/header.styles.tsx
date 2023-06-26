import styled from 'styled-components';

import Link from '@/app/ui/link/link.component';

import palette from '@/lib/styles/palette.lib';

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-size: 1.25rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${palette.gray2};
`;

export const LogoWrapper = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 1rem;
`;

export const LinkContainer = styled.nav<{
  open: boolean;
}>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  // 브라우저 768px < current
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background: none;
    left: initial;
    height: initial;
    top: initial;
    width: 100%;
    position: relative;
    border-bottom: none;
    border-bottom-right-radius: none;
    border-bottom-left-radius: none;

    > * {
      margin-right: 1.5rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: inherit;

  &.active {
    color: ${(props) => props.theme.color};
  }
`;

export const ThemeLogoWrapper = styled.div`
  cursor: pointer;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px 15px;

  &:hover {
    background-color: ${(props) => props.theme.headerColor};
  }
  &:active {
    outline: 0;
  }
`;
