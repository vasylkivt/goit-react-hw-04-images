import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing(342)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;
`;
