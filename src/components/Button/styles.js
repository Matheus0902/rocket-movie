import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 1.7rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: 500;
  border-radius: 1rem;
  border: none;
`