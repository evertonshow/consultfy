import Layout from "components/Layout";
import Profile from "components/Profile";
import TableBrokerage from "components/TableBrokerage";
import { theme } from "styles/theme";

export default function Brokerage() {
  return (
    <Layout>
      <Profile>
        <div
          style={{
            background: theme.color.grayLight,
            height: 10,
            width: 233,
            margin: "10px 0 -1rem 15px",
          }}
        />
      </Profile>
      <TableBrokerage />
    </Layout>
  );
}
