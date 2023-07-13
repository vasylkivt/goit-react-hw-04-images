import styled from 'styled-components';

export const Notification = styled.p`
  max-width: 500px;
  margin: 50px auto;

  color: ${({ theme: { colors } }) => colors.titleColorDark};
  font-weight: 700;

  font-size: 36px;
  text-align: center;
`;
