import { useCallback, useEffect, useState } from "react"
import { getMemberOverview } from "../../../services/member";
import OverviewCategories from "./OverviewCategories"
import { toast } from "react-toastify";
import TableRow from "./TableRow"
import { HistoryTransactionTypes, TopUpCategoriesTypes } from "../../../services/data-types";



export default function OverviewContent() {
    const [count, setCount] = useState([]);
    const [data, setData] = useState([]);

    const getMemberOverviewAPI = useCallback( async () => {
        const response =  await getMemberOverview();
        
        if(response.error){
            toast.error(response.message)
        }else{
            console.log(response.data)
            setCount(response.data.count)
            setData(response.data.data)
        }
    }, [])

    useEffect(() => {
        getMemberOverviewAPI()
    }, [])

    const API_IMG = process.env.NEXT_PUBLIC_IMG
  return (
    <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            {count.map((item : TopUpCategoriesTypes) => {
                                return(
                                    <OverviewCategories key={item._id} icon="icon-desktop" total={item.value}>Game <br />{item.name}</OverviewCategories>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item : HistoryTransactionTypes) => {
                                    return(
                                        <TableRow 
                                        key={item._id}
                                        image={`${API_IMG}/${item.historyVoucherTopup.thumbnail}`}
                                        title={item.historyVoucherTopup.gameName} 
                                        category={item.historyVoucherTopup.category}  
                                        item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                                        price={item.value} 
                                        status={item.status} 
                                        />
                                    )

                                }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
  )
}
