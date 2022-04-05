import Layout from "components/Layout";
import Profile from "components/Profile";
import TableTax from "components/TableTax";
import { theme } from "styles/theme";

export default function TaxIncome() {
  return (
    <Layout>
      <Profile>
        <div
          style={{
            background: theme.color.grayLight,
            height: 10,
            width: 170,
            margin: "10px 0 -1rem 32.1rem",
          }}
        />
      </Profile>
      <TableTax />
    </Layout>
  );
}
