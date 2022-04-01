import styled from "styled-components";
import { theme } from "styles/theme";

interface toggledButton {
  toggled: boolean;
}

export const Container = styled.div<toggledButton>`
  display: flex;
  width: 100%;
  min-width: ${({ toggled }) => (toggled ? "92.8VW" : "95vw")};
  height: 79px;
  margin-left: ${({ toggled }) => (toggled ? 0 : "-30px")};
  align-items: center;
  justify-content: space-between;
  background: ${theme.color.backgroundBody};
`;
export const Button = styled.button<toggledButton>`
  background: ${theme.color.asideHeader};
  margin-left: ${({ toggled }) => (toggled ? "154px" : "30px")};
  height: 40;
  width: 40;
  border: 0;
  outline: none;
  border-radius: 5;
  cursor: pointer;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`;
export const TitleName = styled.p`
  font-size: 16px;
  line-height: 19px;
`;
export const TitleProfession = styled.p`
  font-size: 14px;
  line-height: 16px;
  display: flex;
  justify-content: end;
  margin-top: -15px;
`;
export const UserImg = styled.div`
  background-color: #c4c4c4;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
