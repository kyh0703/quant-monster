import { useState, MouseEvent } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useAppDispatch } from '@/app/store';
import storage from '@/lib/storage/storage.lib';
import { themeActions } from '@/app/theme/services/theme.slice';

import { ReactComponent as MonsterLogo } from '@/assets/image/Vampire.svg';

import {
  HeaderContainer,
  LogoWrapper,
  LinkContainer,
  StyledLink,
  ThemeLogoWrapper,
} from './header.styles';

type HeaderProps = {
  onLogout?: () => void;
};

const Header = ({ onLogout }: HeaderProps) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 임시코드
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  const theme = storage.getItem('theme');
  const dispatch = useAppDispatch();

  // On toggle theme button event
  const onToggleTheme = (e: MouseEvent<HTMLOrSVGElement>) => {
    if (theme === 'dark') {
      dispatch(themeActions.enableLightMode());
    } else {
      dispatch(themeActions.enableDarkMode());
    }
  };

  const onToggleMenu = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <>
      <HeaderContainer>
        <LogoWrapper to="/">
          <MonsterLogo />
        </LogoWrapper>
        <LinkContainer open={menuOpen}>
          <StyledLink to="/posts">포스트</StyledLink>
          <StyledLink to="/auth/signin">로그인</StyledLink>
          <StyledLink to="/auth/signup">SIGN UP</StyledLink>
          <ThemeLogoWrapper>
            {theme === 'dark' ? (
              <FaMoon onClick={onToggleTheme} />
            ) : (
              <FaSun onClick={onToggleTheme} />
            )}
          </ThemeLogoWrapper>
        </LinkContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
