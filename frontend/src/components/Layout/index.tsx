import { ReactChild, ReactFragment, ReactPortal, useState } from "react";

import Aside from "../Aside";
import { SignThePrize } from "../SignThePrize";
import { IoMdNotifications } from "react-icons/io";
import { FaBars, FaUser } from "react-icons/fa";

import { styles } from "./styles";

function Layout(props: {
  Children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const [name, setNAme] = useState("Roger Guedes");
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = () => {
    setToggled(false);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        maxWidth: 1440,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Aside
        collapsed={true}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />

      <div style={styles.header}>
        <button
          style={toggled ? styles.openToggled : styles.closeToggled}
          onClick={() => setToggled(!toggled)}
        >
          <FaBars size={25} color={"#fff"} />
        </button>

        <div style={styles.headerC2}>
          <div style={{ marginRight: 20 }}>
            <SignThePrize />
          </div>
          <IoMdNotifications size={25} />

          <div
            style={{
              border: "1px solid gray",
              height: 28,
              marginLeft: 20,
            }}
          />
          <h3 style={{ margin: "0 20px" }}>{name}</h3>
          <div style={styles.iconUser}>
            <FaUser size={20} />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 70,
          left: toggled ? 255 : 170,
          width: toggled ? 1070 : 1175,
          height: "100%",
        }}
      >
        {props.Children}
      </div>
    </div>
  );
}

export default Layout;
