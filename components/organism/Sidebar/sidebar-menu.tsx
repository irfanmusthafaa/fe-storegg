import Image from "next/image";
import cx from 'classnames';
import Link from "next/link";

interface SideBarMenuProps {
    title: string;
    icon: "icon-overview" | "icon-transaction" | "icon-message" | "icon-card" | "icon-reward" |"icon-setting" | "icon-logout" ;
    active?: boolean;
    href?: string;
    onClick?: () => void;
}

export default function SidebarMenu(props: Partial<SideBarMenuProps>) {
    const { title, icon, active, href, onClick} = props;
    const classItem = cx({
        item: true,
        'mb-30': true,
        active,
    })
  return (
    <div className="menus">
        <div className={classItem} onClick={onClick}>
            <div className="me-3">
                <Image src={`/icon/${icon}.svg`} width={25} height={25} />
            </div>
                <p className="item-title m-0">
                {onClick ? (
                    <a className="text-lg text-decoration-none">{title}</a>
                ) : (
                <Link href={href || '#'}>
                <a className="text-lg text-decoration-none">{title}</a>
                </Link>
                )}
                
                </p>
        </div>
                   
    </div>
  )
}
