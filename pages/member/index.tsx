import OverviewContent from "../../components/organism/OverviewContent";
import jwtDecode from "jwt-decode";
import SideBar from "../../components/organism/Sidebar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";

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
  const payload:  JWTPayloadTypes = jwtDecode(jwtToken)
  const userFromPayload:  UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
        

  return{
    props: {
      user: userFromPayload, 
    }
  }
}
