import { Table } from "react-bootstrap";
import { Container, TableTitle, Title } from "./styles";

export default function TableTax() {
  const data = [
    {
      action: "Ações",
      cia: "Gol",
      codigo: "Goll4",
      quant: "12.500",
      unity: "19,49",
      totaly: "243.643,23",
    },
    {
      action: "Ações",
      cia: "Carrefour",
      codigo: "BRFS3",
      quant: "25.000",
      unity: "20,00",
      totaly: "522.570,53",
    },
    {
      action: "Ações",
      cia: "CVC",
      codigo: "CVC83",
      quant: "3.000",
      unity: "20,45",
      totaly: "61.357,74",
    },
    {
      action: "Ações",
      cia: "Embraer",
      codigo: "EMBR3",
      quant: "50.000",
      unity: "7,86",
      totaly: "392.850,46",
    },
    {
      action: "",
      cia: "",
      codigo: "",
      quant: "",
      unity: "",
      totaly: "",
    },
    {
      action: "Fundo Imobilario",
      cia: "Indium",
      codigo: "IRDM11",
      quant: "3.000",
      unity: "101,35",
      totaly: "305.560,25",
    },
    {
      action: "Fundo Imobilario",
      cia: "CRSGRI",
      codigo: "HCSG11",
      quant: "1.120",
      unity: "101,35",
      totaly: "123.256,00",
    },
    {
      action: "Fundo Imobilario",
      cia: "MOgno",
      codigo: "MGR11",
      quant: "6.300",
      unity: "101,00",
      totaly: "636.505,00",
    },
  ];
  return (
    <Container>
      <TableTitle>
        <Title>RELATÓRIO DE BENS E DIREITO</Title>
      </TableTitle>
      <Table striped bordered hover style={{ width: 1063 }}>
        <thead style={{ background: "#c4c4c4" }}>
          <tr>
            <th>Tipo</th>
            <th>Cia.</th>
            <th>Cod. B3</th>
            <th>Quant.</th>
            <th>Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ cia, action, codigo, quant, unity, totaly }, index) => (
            <tr key={index}>
              <td>{action}</td>
              <td>{cia}</td>
              <td>{codigo}</td>
              <td>{quant}</td>
              <td>{unity}</td>
              <td>{totaly}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
