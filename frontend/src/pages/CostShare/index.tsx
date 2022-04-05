import Layout from "components/Layout";
import Profile from "components/Profile";
import { theme } from "styles/theme";

export default function CostShare() {
  return (
    <Layout>
      <Profile>
        <div
          style={{
            background: theme.color.grayLight,
            height: 10,
            width: 154,
            margin: "10px 0rem -1rem 45rem",
          }}
        />
      </Profile>
    </Layout>
  );
}
