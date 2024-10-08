import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 4rem;
  padding: 3.2rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  > div {
    margin-top: .8rem;
  }

  > p {
    padding: 1.5rem 0;
    color: ${({ theme }) => theme.COLORS.PURPLE};
    
    
    span {
      display: none;
    }
  }

  > footer {
    margin-top: 1.5rem;
    display: flex;
    gap: .8rem;

    span {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`