import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { theme } from "styles/theme";
import {
  Button,
  Container,
  Profile,
  TitleName,
  TitleProfession,
  UserImg,
} from "./styles";

interface headerProps {
  toggled: boolean;
  onClick: () => void;
}

export default function Header({ toggled, onClick }: headerProps) {
  const [data, setData] = useState({
    name: "Thiago Gomez",
    profission: "Operador",
  });
  return (
    <Container toggled={toggled}>
      <Button toggled={toggled} onClick={onClick}>
        <FaBars size={25} color={theme.color.asideHeader} />
      </Button>
      <Profile>
        <div>
          <TitleName>{data.name}</TitleName>
          <TitleProfession>{data.profission}</TitleProfession>
        </div>
        <UserImg>
          <FaUser size={22} color={theme.color.asideHeader} />
        </UserImg>
      </Profile>
    </Container>
  );
}
