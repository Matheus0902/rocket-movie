import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`

  width: 100%;

  > header {
    padding: 6.5rem 14rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};

    display: flex;
    align-items: center;
    gap: .8rem;

    svg, a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

`

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  > div:nth-child(3), div:nth-child(5) {
    margin-bottom: 2.4rem;
  }

`

export const Avatar = styled.div`
  position: relative;
  margin: -10rem auto 6.4rem;

  width: 18rem;
  height: 18rem;
  
  > img {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    
    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`