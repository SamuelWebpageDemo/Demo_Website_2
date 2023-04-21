import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const DonationAlert = () => {

  const navigate = useNavigate()

  return (
    <Alert variant="warning">
        <Alert.Heading>
        <div className="flex flex-row lg:h-4 xs:h-7">
            <p className="pr-1 hover:underline cursor-pointer" onClick={(e)=>navigate("/donation")}>
              <strong>
                <FormattedMessage id="app.urgent"  defaultMessage="Urgent"/>
              </strong>
              <FormattedMessage id="app.donationNotice"  defaultMessage="Church only have money to maintain 9 months operation!"/>
            </p>
            <span class="hidden md:flex relative  h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
        </div> 
        </Alert.Heading>
    </Alert>
  )
}

export default DonationAlert
