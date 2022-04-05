import { ReactNode, useState } from "react";

import Aside from "../Aside";

import Header from "components/Header";
import { Container, Content } from "./styles";

interface layoutProps {
  children: ReactNode;
}

function Layout({ children }: layoutProps) {
  const [toggled, setToggled] = useState(true);

  const handleToggleSidebar = () => {
    setToggled(false);
  };

  return (
    <Container>
      <Aside
        collapsed={true}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />

      <Content>
        <Header toggled={toggled} onClick={() => setToggled(!toggled)} />
        <div style={toggled ? { marginLeft: 154 } : { marginLeft: 0 }}>
          {children}
        </div>
      </Content>
    </Container>
  );
}

export default Layout;
