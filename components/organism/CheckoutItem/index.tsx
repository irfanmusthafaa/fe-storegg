import { useEffect, useState } from "react"


export default function CheckoutItem() {
    const [dataItem, setDataItem] = useState({
        thumbnail: '',
        name: '',
        category:{
            name: ''
        }
    })
    useEffect(() => {
        const dataFromLocal = localStorage.getItem('data-item')
        const dataItemLocal = JSON.parse(dataFromLocal!)
        setDataItem(dataItemLocal)
    }, [])

    const API_IMG = process.env.NEXT_PUBLIC_IMG
  return (
    <>
    <div className="title-text pt-md-50 pt-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
            </div>
            <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
                <div className="pe-4">
                    <div className="cropped">
                        <img src={`${API_IMG}/${dataItem.thumbnail}`} className="img-fluid" alt="" />
                    </div>
                </div>
                <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">{dataItem.name}</p>
                    <p className="color-palette-2 m-0">Category: {dataItem.category.name}</p>
                </div>
            </div>
    </>
  )
}
