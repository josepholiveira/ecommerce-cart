import styled from 'styled-components';
import { shade } from 'polished';

export const ProductContainer = styled.div`
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  p {
    color: #000;
    font-size: 32px;
    font-weight: 400;
  }

  span {
    color: #000;
    font-size: 24px;
  }

  img {
    width: 250px;
    align-self: center;
  }

  button {
    background: #1e2023;
    color: #fff;
    border-radius: 5px;
    border: 0;
    display: block;
    padding: 20px 40px;
    transition: background-color 0.2s ease;
    margin-top: 15px;

    &:hover {
      background: ${shade(0.4, '#1E2023')};
    }
  }
`;
