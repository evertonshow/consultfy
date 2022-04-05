import CardDarf from "components/CardDarf";
import Layout from "components/Layout";
import Profile from "components/Profile";
import { theme } from "styles/theme";

export default function Darf() {
  return (
    <Layout>
      <Profile>
        <div
          style={{
            background: theme.color.grayLight,
            height: 10,
            width: 34,
            margin: "10px 0 -1rem 17.8rem",
          }}
        />
      </Profile>
      <CardDarf />
    </Layout>
  );
}
