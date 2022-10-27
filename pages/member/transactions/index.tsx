import SideBar from "../../../components/organism/Sidebar";
import TransactionContens from "../../../components/organism/TransactionContens";

export default function Transactions() {
    return (
      <>
      <SideBar activeMenu="transactions" />
      <TransactionContens />
      </>
    )
  }
  