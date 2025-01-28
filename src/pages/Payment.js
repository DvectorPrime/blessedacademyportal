import React, {useEffect, useState} from 'react'
import PaymentNavButtons from './Components/payment components/Nav Buttons'
import PaymentInstructions from './Components/payment components/PaymentInstructions'
import PendingPayments from './Components/payment components/PendingPayments'
import TransactionHistory from './Components/payment components/TransactionHistory'

function Payment(){
    
    const [pageReference, setPageReference] = useState(1)
    const [currentPage, setCurrentPage] = useState(PaymentInstructions)

    const paymentNavLabels = ["Payment Instructions", "Pending Payments", "Transaction History"]

    const paymentNavElements = paymentNavLabels.map((label, index) => (
        <PaymentNavButtons 
            key={index}
            pageReference = {index}
            setPageReference = {setPageReference}
        >{label}</PaymentNavButtons>))
    
    useEffect(() => {
        switch(pageReference) {
            default:
                setCurrentPage(PendingPayments)
                break
            case 0: 
                setCurrentPage(PaymentInstructions)
                break
            case 1: 
                setCurrentPage(PendingPayments)
                break
            case 2:
                setCurrentPage(TransactionHistory)
        }
    }, [pageReference])

    return(
        <main className="dashboard-main payments">
            <div>
                {paymentNavElements}
            </div>
            {currentPage}
        </main>
    )
}

export default Payment