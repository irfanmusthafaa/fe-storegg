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
  
  
//private route  
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
        

  return{
    props: {}
  }
}
