import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div` 
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    width: 100%;
    grid-area: "content";
  }
`

export const Content = styled.div` 
  max-width: 112rem;
  height: 100vh;

  display: grid;
  grid-template-rows: 10rem auto;
  grid-area: 
  "header-content"
  "section-content";

  margin: 5rem auto;

  > header {
    grid-area: "header-content";
    display: flex;
    justify-content: space-between;

  }

  div:last-child{
    margin-bottom: 0;
  }

  > section {
    grid-area: "section-content";
    overflow-y: auto;

  }

  > section::-webkit-scrollbar {
    width: 8px;      
  }

  > section::-webkit-scrollbar-track {
    background: none;
  }

  > section::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};    
    border-radius: .8rem;       
    border: none;
  }
`

export const NewMovie = styled(Link)`
  
  width: 20rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: .8rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  > svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
      
`