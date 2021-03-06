import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin-left: -20px;
  @media (min-width: 1500px) {
    width: 58%;
  }
`;
export const Title = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;

  .divisor {
    border: 1px solid #c4c4c4;
    transform: rotate(90deg);
    margin-right: 1.5rem;
    padding-bottom: 30px;
  }
`;
export const Content2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 58%;
  margin-left: 20px;
  @media (min-width: 1500px) {
    width: 48.3%;
  }
`;

export const Separador = styled.div`
  height: 1px;
  width: 1062px;
  background-color: #c4c4c4;
  display: flex;
  margin-left: 15px;
  margin-top: 16px;
`;
