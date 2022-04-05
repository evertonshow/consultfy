import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 15px;
`;

export const TableTitle = styled.div`
  display: flex;
  width: 1063px;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: ${theme.color.asideHeader};
  border-radius: 4px 4px 0px 0px;
`;
export const Title = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
`;
