import { Table } from "react-bootstrap";
import { Container, TableTitle, Title } from "./styles";

export default function TableCostShare() {
  const data = [
    {
      cia: "Gol",
      type: "Ações",
      Cod: "GOLL4",
      brokeragem: "Itaú",
      number: "-",
      operation: "Saldo Inicial",
      date: "30/06/2021",
      title: "-",
      quanty: "12.500",
      value: "",
      totaly: "230.935,42",
      vrMedio: "18,47",
    },
    {
      cia: "",
      type: "",
      cod: "",
      brokeragem: "",
      number: "",
      operation: "",
      date: "",
      title: "",
      quanty: "",
      value: "",
      totaly: "",
      vrMedio: "",
    },
    {
      cia: "",
      type: "",
      cod: "",
      brokeragem: "",
      number: "",
      operation: "",
      date: "",
      title: "",
      quanty: "",
      value: "",
      totaly: "",
      vrMedio: "",
    },
    {
      cia: "",
      type: "",
      cod: "",
      brokeragem: "",
      number: "",
      operation: "",
      date: "",
      title: "",
      quanty: "",
      value: "",
      totaly: "",
      vrMedio: "",
    },
    {
      cia: "",
      type: "",
      cod: "",
      brokeragem: "",
      number: "",
      operation: "",
      date: "",
      title: "",
      quanty: "",
      value: "",
      totaly: "",
      vrMedio: "",
    },
    {
      cia: "",
      type: "",
      cod: "",
      brokeragem: "",
      number: "",
      operation: "",
      date: "",
      title: "",
      quanty: "",
      value: "",
      totaly: "",
      vrMedio: "",
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
            <th>Cia.</th>
            <th>Tipo</th>
            <th>Cod. B3</th>
            <th>Corretora</th>
            <th>Número</th>
            <th>Operação</th>
            <th>Data</th>
            <th>Especif.Título</th>
            <th>Quant</th>
            <th>Valor</th>
            <th>Vr.Médio</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              {
                cia,
                type,
                cod,
                brokeragem,
                operation,
                date,
                title,
                quanty,
                value,
                totaly,
                vrMedio,
              },
              index
            ) => (
              <tr key={index} style={{ height: 35 }}>
                <td>{cia}</td>
                <td>{type}</td>
                <td>{cod}</td>
                <td>{brokeragem}</td>
                <td>{operation}</td>
                <td>{date}</td>
                <td>{title}</td>
                <td>{quanty}</td>
                <td>{value}</td>
                <td>{totaly}</td>
                <td>{vrMedio}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
}
