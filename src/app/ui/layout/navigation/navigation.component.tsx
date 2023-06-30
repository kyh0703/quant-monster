import { ReactComponent as MonsterLogo } from '@/assets/image/Vampire.svg';

import { NavigationContainer, LinkContainer, LogoWrapper, StyledLink } from './navigation.styles';

const Navigation = () => {
  return (
    <NavigationContainer>
      <LogoWrapper to="/">
        <MonsterLogo />
      </LogoWrapper>
      <LinkContainer open={false}>
        <StyledLink to="/">백테스트</StyledLink>
        <StyledLink to="/">자산배분</StyledLink>
        <StyledLink to="/">포트폴리오 추출</StyledLink>
        <StyledLink to="/">전략 예시</StyledLink>
        <StyledLink to="/">사용권 구매</StyledLink>
        <StyledLink to="/">고객지원</StyledLink>
      </LinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
