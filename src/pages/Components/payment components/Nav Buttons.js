import React from "react";

function PaymentNavButtons({children, pageReference, setPageReference}){
    
    function handleClick(){
        setPageReference(pageReference)
    }
    
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default PaymentNavButtons