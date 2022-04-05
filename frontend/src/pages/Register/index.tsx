import Layout from "components/Layout";
import { useState } from "react";
import { theme } from "styles/theme";
import {
  Button,
  FlexColumn,
  FlexRow,
  FlexRowNumber,
  Form,
  Input,
  InputNumber,
  InputNumber2,
  Label,
  LabelComplemente,
} from "./styles";

export default function Register() {
  interface dataProps {
    name: string;
  }

  const [data, setData] = useState<dataProps>({
    name: "",
  });
  return (
    <Layout>
      <div>
        <h2
          style={{
            marginBottom: 40,
            marginTop: 45,
            fontSize: 24,
            color: theme.color.asideHeader,
          }}
        >
          Perfil
        </h2>

        <Form>
          <FlexRow>
            <FlexColumn>
              <h3 style={{ marginBottom: 30, marginTop: -10 }}>
                Dados Pessoais
              </h3>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={data.name}
                onChange={e => setData({ name: e.target.value })}
              />
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" />
              <Label htmlFor="birthDate">Data de Nascimento</Label>
              <Input id="birthDate" />
              <Label htmlFor="email">Email</Label>
              <Input id="email" />
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" />
              <Label htmlFor="gender">Genero</Label>
              <Input id="gender" />
            </FlexColumn>
            <FlexColumn>
              <h3 style={{ marginBottom: 30, marginTop: -10 }}>
                Endereço Residencial
              </h3>

              <Label htmlFor="TypeAdress">Tipo de endereço</Label>
              <Input id="TypeAdress" />
              <Label htmlFor="zipCode">CEP</Label>
              <Input id="zipCode" />
              <Label htmlFor="street">Rua</Label>
              <Input id="street" />

              <FlexRowNumber>
                <Label htmlFor="number">Numero</Label>
                <LabelComplemente htmlFor="complemento">
                  Complemento
                </LabelComplemente>
              </FlexRowNumber>

              <FlexRowNumber>
                <InputNumber id="number" />
                <InputNumber2 id="complemento" />
              </FlexRowNumber>

              <Label htmlFor="city">Cidade</Label>
              <Input id="city" />
              <Label htmlFor="state">Estado</Label>
              <Input id="state" />
            </FlexColumn>
          </FlexRow>
          <Button>Salvar</Button>
        </Form>
      </div>
    </Layout>
  );
}
