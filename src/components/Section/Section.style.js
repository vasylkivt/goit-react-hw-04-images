import styled from 'styled-components';

export const SectionWrap = styled.section`
  position: relative;
  padding-top: 25px;
  padding-bottom: 75px;
  background-color: ${({ theme: { colors } }) => colors.backgroundColorLight};
`;
