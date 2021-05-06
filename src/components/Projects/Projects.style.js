import styled from 'styled-components';
import {
  accentColor,
  secondaryColor,
  timingFn,
  primaryColor,
  boxShadow,
} from '../../assets/stylesVariables';

export const Item = styled.li`
  max-width: 500px;

  @media (max-width: 1069px) {
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media (min-width: 1070px) {
    width: calc((100% - 2 * 30px) / 2);
    margin: 15px;
  }
`;

export const Preview = styled.div`
  overflow: hidden;
  box-shadow: ${boxShadow};
  border-radius: 4px;
`;

export const Img = styled.img`
  display: block;
`;

export const Wrapper = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  background-color: ${primaryColor};
  color: #fff;
`;

export const Content = styled.div`
  padding: 30px 10px;
`;

export const Info = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${secondaryColor};
`;

export const Tech = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TechItem = styled.li`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid ${secondaryColor};
  border-radius: 8px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Link = styled.a`
  color: ${secondaryColor};
  transition: color 250ms ${timingFn};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${accentColor};
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
