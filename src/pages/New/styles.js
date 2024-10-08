import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  max-width: 110rem;
  margin: 4rem auto;

  #link {
    display: flex;
    align-items: center;
    gap: .8rem;

    svg, a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > header {
    margin-top: 2.4rem;
    h1 {
      font-size: 3.6rem;
    }
  }

  #inputs {
    margin-top: 4rem;

    display: flex;
    gap: 4rem;
  }

  > textArea {
    margin-top: 4rem;
  }

  #movieItens {
    margin-top: 4rem;

    h2 {
      font-size: 2rem;
    }

    > div {
      margin-top: 2.4rem;
      padding: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      border-radius: .8rem;

      display: flex;
      flex-wrap: wrap;
      gap: 2.4rem;

    }

  }
  
  #buttons {
      margin-top: 4rem;

      display: flex;
      gap: 4rem;

      button:first-child {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
`