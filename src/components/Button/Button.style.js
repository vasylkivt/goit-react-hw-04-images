import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 25px;
  margin: 0 auto;
  padding: 12px 20px;
  border-radius: 2px;
  background-color: ${({ theme: { colors } }) => colors.backgroundColorButton};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: ${({ theme: { colors } }) => colors.backgroundColorDark};
  border: 0;
  border-radius: 25px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.accent};
    box-shadow: 0 0 10px 0 ${({ theme: { colors } }) => colors.accent};
    background-color: ${({ theme: { colors } }) =>
      colors.backgroundColorButtonHover};
  }
`;
