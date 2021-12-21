import styled from 'styled-components';
import { secondaryColor } from '../../assets/stylesVariables';

export const Item = styled.li`
  padding: 20px;
  font-size: 16px;
  line-height: 1.71;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const Text = styled.span`
  display: block;
  color: ${secondaryColor};
`;
