import Search from "Assets/imgTable/search.png";
import PDF from "Assets/imgTable/pdf.png";
import Edit from "Assets/imgTable/edit.png";
import {
  Container,
  FlexEnd,
  FlexRow,
  Separador,
  Tbody,
  Theader,
  TitleBody,
  TitleHeader,
} from "./styles";

export default function TableBrokerage() {
  interface dataTable {
    numberNota: string;
    date: string;
    corretagem: string;
    buttonLoading: string;
    description: string;
  }
  const data: dataTable[] = [
    {
      numberNota: "028007",
      date: "11/01/2022",
      corretagem: "XP Investimentos",
      buttonLoading: "Processar Nota",
      description: "Enviado em 19/01/2022 por Renan Deberaldinni",
    },
    {
      numberNota: "028008",
      date: "11/01/2022",
      corretagem: "XP Investimentos",
      buttonLoading: "Aguardando",
      description: "Enviado em 19/01/2022 por Renan Deberaldinni",
    },
    {
      numberNota: "028009",
      date: "11/01/2022",
      corretagem: "XP Investimentos",
      buttonLoading: "Concluir",
      description: "Enviado em 19/01/2022 por Renan Deberaldinni",
    },
    {
      numberNota: "028010",
      date: "11/01/2022",
      corretagem: "XP Investimentos",
      buttonLoading: "Processar Nota",
      description: "Enviado em 19/01/2022 por Renan Deberaldinni",
    },
    {
      numberNota: "028011",
      date: "11/01/2022",
      corretagem: "XP Investimentos",
      buttonLoading: "Processar Nota",
      description: "Enviado em 19/01/2022 por Renan Deberaldinni",
    },
  ];
  return (
    <Container>
      <Theader>
        <TitleHeader style={{ marginLeft: "1rem" }}>N° Da Nota</TitleHeader>
        <TitleHeader style={{ marginLeft: 65 }}>Data</TitleHeader>
        <TitleHeader style={{ marginLeft: 40 }}>Corretora</TitleHeader>
        <TitleHeader style={{ margin: "0 -40px 0 50px" }}>
          Visualizar
        </TitleHeader>
        <TitleHeader style={{ marginRight: -40 }}>Download</TitleHeader>
        <TitleHeader style={{ marginRight: 230 }}>Editar</TitleHeader>
      </Theader>
      {data.map(
        (
          { numberNota, date, corretagem, buttonLoading, description },
          index
        ) => {
          return (
            <Tbody key={index}>
              <FlexRow>
                <TitleBody style={{ marginLeft: "1rem" }}>
                  {numberNota}
                </TitleBody>
                <TitleBody style={{ marginLeft: 65 }}>{date}</TitleBody>
                <TitleBody style={{ marginLeft: 20 }}>{corretagem}</TitleBody>
                <TitleBody style={{ marginLeft: 20 }}>
                  <img src={Search} alt="Buscar Informações" />
                </TitleBody>
                <TitleBody style={{ marginRight: -15 }}>
                  <img src={PDF} alt="Informações" />
                </TitleBody>
                <TitleBody style={{ marginRight: 10 }}>
                  <img src={Edit} alt="Editar Informações" />
                </TitleBody>
                <TitleBody style={{ marginRight: 15 }}>
                  <button>{buttonLoading}</button>
                </TitleBody>
              </FlexRow>
              <Separador />
              <FlexEnd>
                <div />
                <TitleBody style={{ marginRight: 15 }}>{description}</TitleBody>
              </FlexEnd>
            </Tbody>
          );
        }
      )}
    </Container>
  );
}
