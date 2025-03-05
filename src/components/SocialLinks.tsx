import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export function SocialLinks() {
  return (
    <Container>
      <Link href="https://github.com/br1ansouza" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </Link>
    </Container>
  );
}
