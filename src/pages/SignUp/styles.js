import styled from "styled-components";

import backgroundImage from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 13.6rem;

  > h1 {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: #CAC4CF;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 4.8rem;
  }

  > div:nth-child(4) {
    margin-top: 4.8rem;
  }

  > div:nth-child(5) {
    margin-top: .8rem;
  }

  > div:nth-child(6) {
    margin-top: .8rem;
  }

  > button:nth-child(7) {
    margin-top: 2.4rem;
  }

  > section {
    margin-top: 4.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    svg, a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`