import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: 25px;
  left: 50%;
  display: block;
  min-width: 180px;
  padding: 12px 20px;

  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.backgroundColorButton};
  color: ${({ theme }) => theme.colors.backgroundColorDark};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme: { colors } }) =>
      colors.backgroundColorButtonHover};
  }
`;
