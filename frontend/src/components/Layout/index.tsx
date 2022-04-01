import { ReactNode, useState } from "react";

import Aside from "../Aside";

import Header from "components/Header";
import { Container, Content } from "./styles";

function Layout({ Children }: ReactNode | any) {
  const [toggled, setToggled] = useState(false);

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
          <h1>teste</h1>
          {Children}
        </div>
      </Content>
    </Container>
  );
}

export default Layout;
