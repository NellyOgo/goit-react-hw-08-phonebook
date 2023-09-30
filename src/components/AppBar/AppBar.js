import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { HeaderContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </HeaderContainer>
  );
};

