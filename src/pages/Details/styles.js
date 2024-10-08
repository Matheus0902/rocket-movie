import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 4rem 12.3rem;
  }

  #link {
    display: flex;
    align-items: center;
    gap: .8rem;
  }

  #title {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    margin-top: 2.4rem;
  }

  #author {
    display: flex;
    align-items: center;
    gap: .8rem;

    margin-top: 1.6rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    } 
  }

  #tags {
    display: flex;
    gap: .8rem;

    margin-top: 4rem;
  }

  p {
    margin-top: 4rem;
    text-align: justify;
  }
`
export const Content = styled.div`

  margin: 0 auto;
`