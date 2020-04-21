import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
`;
