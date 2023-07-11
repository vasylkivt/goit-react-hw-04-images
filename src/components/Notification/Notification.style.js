import styled from 'styled-components';

export const Text = styled.p`
  max-width: 500px;
  margin: 50px auto;

  color: ${({ theme: { colors } }) => colors.titleColorDark};
  font-weight: 700;

  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
`;
