import jwtDecode from "jwt-decode";
import TransactionsDetailContent from "../../../components/organism/TransactionsDetailContent";
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { getTransactionsDetail } from "../../../services/member";

interface TransactionsDetailProps{
  transactionsDetail: HistoryTransactionTypes
}

export default function TransactionsDetail(props: TransactionsDetailProps) {
  const { transactionsDetail } = props;
  console.log('detail', transactionsDetail)
    return (
      <>
      <section className="transactions-detail overflow-auto">
       <TransactionsDetailContent data={transactionsDetail}/>
    </section>
      </>
    )
  }

  interface GetServerSideProps {
    req: {
      cookies : {
        token: string;
      }
    },
    params: {
      idTrx: string;
    }
  } 

  export async function getServerSideProps({req, params} : GetServerSideProps) {
    console.log('params :', params)
    const {idTrx} = params;
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
    const response = await getTransactionsDetail(idTrx, jwtToken)
    console.log('jwtTOken' , jwtToken)
    console.log('data:', response)      
  
    return{
      props: {
        transactionsDetail: response.data, 
      }
    }
  }
  