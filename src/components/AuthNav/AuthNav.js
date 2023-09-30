import { AuthNavLink, AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavLink to="">Register</AuthNavLink>
      <AuthNavLink to="">Log In</AuthNavLink>
    </AuthNavContainer>
  );
};