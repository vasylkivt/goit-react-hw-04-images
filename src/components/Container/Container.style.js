import styled from 'styled-components';
export const ContainerWrap = styled.div`
  max-width: 320px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 712px;
    padding-right: 28px;
    padding-left: 28px;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 36px;
    padding-left: 36px;
    max-width: 1368px;
  }
`;
