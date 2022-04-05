import { theme } from "../../styles/theme";

export const styles = {
  container: {
    height: 2040,
    display: "flex",
  },
  openHeaderAside: {
    width: 220,
    height: 79,
    background: theme.color.asideHeader,
    paddingTop: 17,
    paddingLeft: 10,
    marginRight: -10,
  },
  closeHeaderAside: {
    width: 50,
    height: 79,
    background: theme.color.asideHeader,
    paddingTop: 17,
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
};
