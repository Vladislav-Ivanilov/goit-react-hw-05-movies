import { Header, Container, BarList, BarLink } from './AppBar.styled';

const navItem = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <nav>
          <BarList>
            {navItem.map(({ href, text }) => (
              <li key={href}>
                <BarLink to={href}>{text}</BarLink>
              </li>
            ))}
          </BarList>
        </nav>
      </Container>
    </Header>
  );
};
