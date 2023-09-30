import { HomePageContainer } from './HomePage.styled';

export default function HomePage() {
  return (
    <HomePageContainer>
      <h1>
        Welcome to your Phonebook
        <span role="img" aria-label="Greeting icon">
          🙂
        </span>
      </h1>
    </HomePageContainer>
  );
}