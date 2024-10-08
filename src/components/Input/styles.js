import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.8rem 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.PURPLE}
  }

  > input {
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }
`