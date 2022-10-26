import Image from 'next/image'
import Link from 'next/link'
import Auth from './Auth'

export default function Navbar() {
  return (
    <>
    <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image src="/icon/logo.png" width={60} height={60} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                        <li className="nav-item my-auto">
                         <Link href="/"><a className="nav-link active" aria-current="page" >Home</a></Link>   
                        </li>
                        <li className="nav-item my-auto">
                        <Link href="/#"><a className="nav-link">Games</a></Link> 
                        </li>
                        <li className="nav-item my-auto">
                        <Link href="/#"><a className="nav-link">Rewards</a></Link>  
                        </li>
                        <li className="nav-item my-auto">
                        <Link href="/#"><a className="nav-link">Discover</a></Link>    
                        </li>
                        <li className="nav-item my-auto me-lg-20">
                        <Link href="/#"><a className="nav-link">Global Rank</a></Link>
                        </li>
                        
                        <Auth isLogin />
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    </>
  )
}
