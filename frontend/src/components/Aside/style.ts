import { theme } from "../../styles/theme";

export const styles = {
  container: {
    height: 2040,
    display: "flex",
  },
  openHeaderAside: {
    width: 220,
    height: 61,
    background: theme.color.asideHeader,
    paddingTop: 20,
    paddingLeft: 20,
    marginRight: -20,
  },
  closeHeaderAside: {
    width: 45,
    height: 61,
    background: theme.color.asideHeader,
    paddingTop: 20,
    paddingLeft: 5,
  },
  openAside: {
    width: 220,
    height: 1965,
    background: theme.color.asideBody,
  },
  closeAside: {
    width: 50,
    height: 1965,
    background: theme.color.asideBody,
  },
  icon: {
    width: "100%",
  },
  imgIcon: {
    paddingLeft: 30,
    background: "red",
  },
};
