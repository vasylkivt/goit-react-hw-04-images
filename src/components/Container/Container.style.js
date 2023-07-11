import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: ${({ theme }) => theme.spacing(80)}; */
  max-width: ${({ theme }) => theme.spacing(342)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;

  /* @media screen and (min-width: 768px) {
    max-width: ${({ theme }) => theme.spacing(178)};
    padding-left: ${({ theme }) => theme.spacing(7)};
    padding-right: ${({ theme }) => theme.spacing(7)};
  } */

  /* @media screen and (min-width: 1440px) {
    max-width: ${({ theme }) => theme.spacing(342)};
    padding-left: ${({ theme }) => theme.spacing(9)};
    padding-right: ${({ theme }) => theme.spacing(9)};
  } */
`;
