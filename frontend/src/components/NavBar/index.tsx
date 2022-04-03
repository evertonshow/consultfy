import { Container, Link } from "./styles";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Link onClick={() => navigate("/")}>notas de corretagem e extrato</Link>
      <Link onClick={() => navigate("/Darf")}>darf</Link>
      <Link onClick={() => navigate("/GainCapital")}>ganho de capital</Link>
      <Link onClick={() => navigate("/TaxIncome")}>imposto de renda Anual</Link>
      <Link onClick={() => navigate("/CostShare")}>custo médio de ações</Link>
      <Link onClick={() => navigate("/Offshore")}>contabilidade offshore</Link>
    </Container>
  );
}
