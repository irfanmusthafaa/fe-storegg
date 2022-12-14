import Image from "next/image";
import CheckoutConfirmation from "../components/organism/CheckoutConfirmation";
import CheckoutDetail from "../components/organism/CheckoutDetail";
import CheckoutItem from "../components/organism/CheckoutItem";
import jwtDecode from 'jwt-decode'
import { JWTPayloadTypes, UserTypes } from "../services/data-types";

interface CheckoutProps {
  user: UserTypes
}
export default function Checkout(props: CheckoutProps) {
  const { user } = props;
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

interface GetServerSideProps {
  req: {
    cookies : {
      token: string;
    }
  }
}

export async function getServerSideProps({req} : GetServerSideProps) {
  const { token } = req.cookies;

  if(!token){
    return{
      redirect:{
        destination: '/sign-in',
        permanent: false,
      }
    }
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken)
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
        

  return{
    props: {
      user: userFromPayload, 
    }
  }
}
