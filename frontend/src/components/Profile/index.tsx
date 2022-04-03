import NavBar from "components/NavBar";
import { ReactNode, useState } from "react";
import { Container, Content, Content2, Separador, Title } from "./styles";

export default function Profile({ children }: ReactNode | any) {
  const [profile, setProfile] = useState({
    name: "Alessandro Nassar Araujo",
    corrector: "Renan Deberaldinni",
    email: "alessandronassar@gmail.com",
    phone: "(11) 9-6561-0214",
    cpf: "338.478.987-07",
  });
  return (
    <Container>
      <Content>
        <Title>{profile.name} </Title>
        <Title>Corretor: {profile.corrector} </Title>

        <Title>
          <span className="divisor"></span>
          {profile.email}
        </Title>
      </Content>
      <Content2>
        <Title>CPF: {profile.cpf}</Title>
        <Title>Tel: {profile.phone}</Title>
      </Content2>
      <Separador />
      <NavBar />

      {children}
      <Separador />
    </Container>
  );
}
