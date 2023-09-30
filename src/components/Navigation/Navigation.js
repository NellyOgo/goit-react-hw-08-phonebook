// import { NavLink } from 'react-router-dom';
import { HomePageLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <HomePageLink to="/">Home</HomePageLink>
      {/* {isLoggedIn && (
//         <NavLink className={css.link} to="/tasks">
//           Tasks
//         </NavLink>
//       )} */}
    </nav>
  );
};

