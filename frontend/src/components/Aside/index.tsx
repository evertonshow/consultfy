import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  // SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  Logo,
  assitentVitual,
  stockExchange,
  myActives,
  offshore,
  resume,
  suport,
} from "./img";
import "react-pro-sidebar/dist/css/styles.css";
import { styles } from "./style";

interface asideProps {
  collapsed: boolean;
  toggled: boolean;
  handleToggleSidebar: (Parameters: boolean) => void;
}

const Aside = ({ collapsed, toggled, handleToggleSidebar }: asideProps) => {
  // const [toggled, setToggled] = useState(false);
  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      // breakPoint="md"
      onToggle={handleToggleSidebar}
      style={styles.container}
    >
      <SidebarHeader
        style={toggled ? styles.openHeaderAside : styles.closeHeaderAside}
      >
        <img src={Logo} alt="logo da consultfy" />
      </SidebarHeader>

      <SidebarContent style={toggled ? styles.openAside : styles.closeAside}>
        <Menu>
          <MenuItem
            style={
              toggled ? { marginTop: 10 } : { position: "absolute", top: 105 }
            }
          >
            <img src={assitentVitual} alt="Assitente virtual" />
          </MenuItem>
          <MenuItem
            style={
              toggled ? { marginTop: 10 } : { position: "absolute", top: 160 }
            }
          >
            <img src={resume} alt="Resumo" />
          </MenuItem>
          <MenuItem
            style={
              toggled ? { marginTop: 10 } : { position: "absolute", top: 220 }
            }
          >
            <img src={myActives} alt="Meus Ativos" />
          </MenuItem>
        </Menu>
        <Menu>
          <SubMenu
            style={toggled ? { marginTop: -10 } : { marginTop: 160 }}
            icon={
              <span style={styles.icon}>
                <img src={stockExchange} alt="Bolsa de valores" />
              </span>
            }
          >
            <MenuItem>primeira bolsa de valores</MenuItem>
            <MenuItem> 2</MenuItem>
            <MenuItem> 3</MenuItem>
          </SubMenu>
          <SubMenu
            style={toggled ? { marginTop: -10 } : { marginTop: 10 }}
            icon={
              <span style={styles.icon}>
                <img src={offshore} alt="offshore de valores" />
              </span>
            }
          >
            <MenuItem> 1</MenuItem>
            <MenuItem> 2</MenuItem>
            <MenuItem> 3</MenuItem>
          </SubMenu>
          <MenuItem>
            <div>
              <img
                src={suport}
                alt="suporte "
                style={toggled ? {} : { position: "absolute", marginTop: 10 }}
              />
            </div>
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
