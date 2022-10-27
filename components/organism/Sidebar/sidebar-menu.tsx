import Image from "next/image";
import cx from 'classnames';
import Link from "next/link";

interface SideBarMenuProps {
    title: string;
    icon: "icon-overview" | "icon-transaction" | "icon-message" | "icon-card" | "icon-reward" |"icon-setting" | "icon-logout" ;
    active?: boolean;
    href: string;
}

export default function SidebarMenu(props: Partial<SideBarMenuProps>) {
    const { title, icon, active, href} = props;
    const classItem = cx({
        item: true,
        'mb-30': true,
        active,
    })
  return (
    <div className="menus">
        <div className={classItem}>
            <div className="me-3">
                <Image src={`/icon/${icon}.svg`} width={25} height={25} />
            </div>
                <p className="item-title m-0">
                <Link href={href || '#'}>
                <a className="text-lg text-decoration-none">{title}</a>
                </Link>
                </p>
        </div>
                   
    </div>
  )
}
