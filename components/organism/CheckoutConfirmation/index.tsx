import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { setCheckout } from '../../../services/player'

export default function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false)

  const router = useRouter();

  const onSubmit = async () => {
    const dataLocalItem = localStorage.getItem('data-item')
    const dataLocalTopup = localStorage.getItem('data-topup')
    const dataItem = JSON.parse(dataLocalItem!)
    const dataTopup = JSON.parse(dataLocalTopup!)

    if(!checkbox){
      toast.error('Pastikan anda telah melakukan pembayaran')
    }else{
      const data = {
        voucher : dataItem._id,
        nominal : dataTopup.nominalItem._id,
        payment : dataTopup.paymentItem.payment._id,
        bank: dataTopup.paymentItem.bank._id,
        name :  dataTopup.bankAccountName,
        accountUser : dataTopup.verifyID
      }
      const response = await setCheckout(data);
      console.log(response)
      if(response.error){
          toast.error(response.message)
      }else{
          toast.success('Checkout Berhasil')
          router.push('/complete-checkout')
      }
    }
    
  }
  return (
    <>
    <label className="checkbox-label text-lg color-palette-1">I have transferred the money
                <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                <span className="checkmark"></span>
            </label>
            <div className="d-md-block d-flex flex-column w-100 pt-50">
                <button className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
                  type='button'
                  role="button"
                  onClick={onSubmit}
                  >Confirm Payment</button>
            </div>
    </>
  )
}
