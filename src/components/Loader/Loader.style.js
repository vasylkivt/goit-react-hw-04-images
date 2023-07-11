import styled from 'styled-components';

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.black};
  opacity: 0.5;
`;
