import OverviewContent from "../../components/organism/OverviewContent";
import SideBar from "../../components/organism/Sidebar";

export default function MemberOverview() {
  return (
    <>
    <section className="overview overflow-auto">
        <SideBar activeMenu="overview" />
        <main className="main-wrapper">
        <OverviewContent />
        </main>
    </section>
    </>
  )
}
