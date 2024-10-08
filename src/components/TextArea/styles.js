import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27rem;
  padding: 1.9rem 1.6rem;
  resize: none;
  border: none;

  border-radius: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }
`