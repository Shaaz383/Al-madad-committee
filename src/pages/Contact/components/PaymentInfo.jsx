import React from 'react'

const PaymentInfo = () => {
  return (
    <div>
       <div className="bg-whiteColor rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-primaryGreen">
        Pay Here
      </h2>

      {/* QR Code Scanner */}
      <div className="mb-4">
        <img src='https://skynyxtech.com/wp-content/uploads/2024/09/phonepe.png'/>
      </div>

      <div className="mb-4">
        <p className="text-sm text-primaryGreen font-medium mb-2">Inform US After Payment</p>
      
        <p className="text-sm text-secondary">1. Send Screenshot To The Group</p>
        <p className="text-sm text-secondary">2. Discription Of Payment</p>
      </div>

    </div>
    </div>
  )
}

export default PaymentInfo