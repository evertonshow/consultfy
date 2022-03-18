import styled from "styled-components";
import { theme } from "styles/theme";

export const Form = styled.form`
  width: 1059px;
  height: 680px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 50px 20px;
`;
export const Input = styled.input`
  width: 365px;
  border: none;
  border-bottom: 1px solid #979797;
  outline: none;
  margin-bottom: 30px;
`;
export const FlexRowNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InputNumber = styled.input`
  width: 164px;
  border: none;
  border-bottom: 1px solid #979797;
  outline: none;
  margin: 0px 20px 30px 0;
`;
export const InputNumber2 = styled.input`
  width: 164px;
  border: none;
  border-bottom: 1px solid #979797;
  outline: none;
  margin-bottom: 30px;
  margin-left: 20px;
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: 15px;
  margin-top: 10px;
`;

export const LabelComplemente = styled.label`
  cursor: pointer;
  margin-right: 4.7rem;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: ${theme.color.asideHeader};
  width: 161px;
  height: 46px;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  position: absolute;
  bottom: 50px;
  right: 9rem;
`;
