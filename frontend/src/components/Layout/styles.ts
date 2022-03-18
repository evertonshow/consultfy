import { theme } from "styles/theme";

export const styles = {
  header: {
    width: 1245,
    height: 79,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },

  openToggled: {
    background: theme.color.asideHeader,
    marginLeft: 134,
    height: 40,
    width: 45,
    border: 0,
    outline: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
  closeToggled: {
    background: theme.color.asideHeader,
    marginLeft: -30,
    height: 40,
    width: 50,
    border: 0,
    outline: "none",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
  },
  headerC2: {
    display: "flex",
    justifyContent: "flex-end",
    width: "50%",
    alignItems: "center",
  },
  iconUser: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 28,
    height: 28,
    borderRadius: 15,
    background: "#ededed",
    border: 0,
    marginRight: 20,
  },
};
