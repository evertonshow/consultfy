import { Table } from "react-bootstrap";
import { Container, TableTitle, Title } from "./styles";

export default function TableGainCapiatl() {
  const data = [
    {
      description: "Rendimento Bruto do Mês",
      action: "4.200,00",
      trade: "12.901,17",
      imobil: "9.756,82",
      option: "-",
      totaly: "26.857,99",
    },
    {
      description: "Prejuizo de Meses AN=nterior",
      action: "4.025,00",
      trade: "-",
      imobil: "23.065,00",
      option: "-",
      totaly: "27.110,00",
    },
    {
      description: "Base de Calculo do IR",
      action: "174,68",
      trade: "12.901,17",
      imobil: "-",
      option: "-",
      totaly: "-252,33",
    },
    {
      description: "Aliquota",
      action: "15,00%",
      trade: "20,00%",
      imobil: "20,00%",
      option: "15,00%",
      totaly: "",
    },
    {
      description: "Imposto Devido",
      action: "26,20",
      trade: "2.583,26",
      imobil: "-",
      option: "-",
      totaly: "2.606,44",
    },
    {
      description: "IRRF do Mês",
      action: "56,03",
      trade: "119,45",
      imobil: "-",
      option: "-",
      totaly: "175,48",
    },
    {
      description: "IRRF Meses Anterior",
      action: "176,02",
      trade: "-",
      imobil: "1,032,00",
      option: "-",
      totaly: "1.208,02",
    },
    {
      description: "Total de IRRF a Compensar",
      action: "232,05",
      trade: "119,45",
      imobil: "1302,00",
      option: "-",
      totaly: "1.208,45",
    },
    {
      description: "IRRF Compensado do Mês",
      action: "240,65",
      trade: "120,87",
      imobil: "",
      option: "-",
      totaly: "146,23",
    },
    {
      description: "Imposto a Pagar",
      action: "0,00",
      trade: "2.468,07",
      imobil: "-",
      option: "-",
      totaly: "2.468,09",
    },
    {
      description: "Prejuizo a Compensar em Meses Futuro",
      action: "-",
      trade: "-",
      imobil: "13.208,43",
      option: "-",
      totaly: "13.208,43",
    },
  ];
  return (
    <Container>
      <TableTitle>
        <Title>Renda Variável</Title>
      </TableTitle>
      <Table striped bordered hover style={{ width: 1063 }}>
        <thead style={{ background: "#c4c4c4" }}>
          <tr>
            <th>Descrição</th>
            <th>Ações</th>
            <th>Day Trade</th>
            <th>Fdo. Imobil</th>
            <th>Opções</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({ description, action, trade, imobil, option, totaly }, index) => (
              <tr key={index}>
                <td>{description}</td>
                <td>{action}</td>
                <td>{trade}</td>
                <td>{imobil}</td>
                <td>{option}</td>
                <td>{totaly}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
}
