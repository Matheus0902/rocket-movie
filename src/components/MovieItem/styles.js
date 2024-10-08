import styled from "styled-components";

export const Container = styled.div`

  max-width: 20rem;
  background-color: ${({ theme, isNew }) => isNew ? 'none' : `${theme.COLORS.BACKGROUND_700}`};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.PURPLE}` : 'none'};
  border-radius: 1rem;
  padding-right: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > input {
    width: 100%;
    padding: 1.6rem;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE };
    border: none;
  }

  > button {
    background: transparent;
    border: none;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`