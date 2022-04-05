import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  display: flex;
  width: 1062px;
  height: 98px;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.asideBody};
  border-radius: 4px;
  margin-left: 15px;
  margin-top: 20px;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-left: 30px;
`;

export const ButtonDarf = styled.button`
  width: 130px;
  height: 30px;
  font-weight: 400;
  font-size: 15px;
  color: #fff;
  background: ${theme.color.asideHeader};
  border-radius: 4px;
  margin: 0 15px;
  border: none;
  text-align: center;
`;
