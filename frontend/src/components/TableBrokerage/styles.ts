import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Theader = styled.div`
  height: 40px;
  width: 1072px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.asideHeader};
  color: #fff;
  border-radius: 5px 5px 0 0;
`;
export const TitleHeader = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const Tbody = styled.div`
  height: 98px;
  width: 1072px;
  background-color: ${theme.color.asideBody};
  border-radius: 5px;
  margin-top: 2px;
`;
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBody = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  button {
    width: 130px;
    height: 30px;
    background: #5a5a5a;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Separador = styled.div`
  display: flex;
  height: 1px;
  width: 97%;
  margin-left: 15px;
  background-color: ${theme.color.grayLight};
`;
