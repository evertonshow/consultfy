import { ButtonDarf, Container, Title } from "./styles";

export default function CardDarf() {
  return (
    <Container>
      <Title>
        Clique em GERAR DARF para fechar a competência do mês anterior.
      </Title>
      <div>
        <ButtonDarf>GERAR DARF</ButtonDarf>
        <ButtonDarf>Visualizar DARF</ButtonDarf>
      </div>
    </Container>
  );
}
