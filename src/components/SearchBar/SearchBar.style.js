import styled from 'styled-components';
import { RiSearch2Line } from 'react-icons/ri';
import { Field, Form } from 'formik';

export const SearchIcon = styled(RiSearch2Line)`
  width: 20px;
  height: 20px;
  fill: ${({ theme: { colors } }) => colors.backgroundColorDark};

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const SearchForm = styled(Form)`
  position: absolute;
  display: flex;
  width: 100%;
  max-width: 335px;
  border-radius: 25px;
  overflow: hidden;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: 0 0 5px 0 ${({ theme: { colors } }) => colors.backgroundColorDark};
  &:hover,
  &:focus-within {
    box-shadow: 0 0 10px 0 ${({ theme: { colors } }) => colors.accent};
  }

  @media screen and (min-width: 768px) {
    max-width: 600px;
    border-radius: 25px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 75px;
  height: 40px;
  border: 0;

  background-color: ${({ theme: { colors } }) => colors.backgroundColorButton};

  cursor: pointer;
  outline: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 0 5px 0
      ${({ theme: { colors } }) => colors.backgroundColorButtonHover};
    background-color: ${({ theme: { colors } }) =>
      colors.backgroundColorButtonHover};
  }
  &:hover svg {
    fill: ${({ theme: { colors } }) => colors.accent};
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 50px;
  }
`;

export const Input = styled(Field)`
  display: flex;
  align-items: center;
  width: 100%;
  font: inherit;
  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-size: 14px;
  border: none;
  outline: none;
  padding-left: 16px;
  padding-right: 16px;

  background-color: ${({ theme: { colors } }) => colors.backgroundColorLight};

  &::placeholder {
    font: inherit;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const ErrorsMessage = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  color: ${({ theme: { colors } }) => colors.red};

  font: inherit;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
