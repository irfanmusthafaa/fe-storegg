import Link from 'next/link'

interface FooterColumnProps{
    title: string;
    list1?: string;
    list2?: string;
    list3?: string;
    list4?: string;
}

export default function FooterColumn(props: FooterColumnProps) {
    const { title, list1, list2, list3, list4 } = props;
  return (
   <>
   <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
        <ul className="list-unstyled">
            <li className="mb-6">
                <Link href="/"><a href="" className="text-lg color-palette-1 text-decoration-none">{list1}</a></Link>
            </li>
            <li className="mb-6">
                <Link href="/"><a href="" className="text-lg color-palette-1 text-decoration-none">{list2}</a></Link>  
            </li>
            <li className="mb-6">
               <Link href="/"><a href="" className="text-lg color-palette-1 text-decoration-none">{list3}</a></Link> 
            </li>
            <li className="mb-6">
               <Link href="/"><a href="" className="text-lg color-palette-1 text-decoration-none">{list4}</a></Link> 
            </li>
        </ul>
   </>
  )
}
