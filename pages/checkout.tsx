import Image from "next/image";
import CheckoutConfirmation from "../components/organism/CheckoutConfirmation";
import CheckoutDetail from "../components/organism/CheckoutDetail";
import CheckoutItem from "../components/organism/CheckoutItem";

export default function Checkout() {
  return (
    <>
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
            <div className="logo text-md-center text-start pb-50">
                <a className="" href="#">
                    <Image src="/icon/logo.svg" width={60} height={60}/>
                </a>
            </div>
            <CheckoutItem />
            <hr />
            <CheckoutDetail />
            <CheckoutConfirmation />
            
        </div>
    </section>
    </>
  )
}
