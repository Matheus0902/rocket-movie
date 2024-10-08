import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.4rem;

  padding: 2.4rem 12.3rem;
  border-bottom: 1px solid #3E3B47;

  > span {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: 700;
  }

  > div {

    input {
      min-width: 55rem;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`

export const Profile = styled(Link)`
  display: flex;
  gap: .9rem;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.4rem;
    }

    a {
      text-align: right;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`