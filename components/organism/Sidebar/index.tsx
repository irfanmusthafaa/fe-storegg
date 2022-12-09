import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SidebarFooter from "./sidebar-footer"
import SidebarMenu from "./sidebar-menu"
import SidebarProfile from "./sidebar-profile"

interface SideBarProps{
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token')
    router.push('/sign-in')

  }
  return (

    <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <SidebarProfile />
                <SidebarMenu title="Overview" icon="icon-overview" active={activeMenu === "overview"}  href="/member" />
                <SidebarMenu title="Transactions" icon="icon-transaction" active={activeMenu === "transactions"} href="/member/transactions" />
                <SidebarMenu title="Messages" icon="icon-message" />
                <SidebarMenu title="Card" icon="icon-card" />
                <SidebarMenu title="Rewards" icon="icon-reward" />
                <SidebarMenu title="Settings" icon="icon-setting" active={activeMenu === "settings"} href="/member/edit-profile" />
                <SidebarMenu title="Logout" icon="icon-logout" onClick={onLogout} />
                <SidebarFooter />
            </div>
        </section>
  )
}
