import Layout from "components/Layout";
import Profile from "components/Profile";
import { theme } from "styles/theme";

export default function GainCapital() {
  return (
    <Layout>
      <Profile>
        <div
          style={{
            background: theme.color.grayLight,
            height: 10,
            width: 121,
            margin: "10px 0 -1rem 22.3rem",
          }}
        />
      </Profile>
    </Layout>
  );
}
