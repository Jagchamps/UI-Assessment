import React from 'react';
import AccountContact from './components/account-contact/account-contact';
import AccountSales from './components/account-sales/account-sales';
import { StyledAccountOverview } from './account-overview.styled';
import PropType from 'prop-types'

const AccountOverview = ({ data }) => {
  return (
    <StyledAccountOverview className="account-overview flex-container" data-testid="overview-panel">
      <div className="section-inner">
        <div className="flex-container">
        <h1 className="col col-xs-6">Account Overview</h1>
        <AccountContact supportContact={data.supportContact} />
        <AccountSales salesOverview={data.salesOverview} />
        </div>
      </div>
    </StyledAccountOverview>
  )
}
AccountOverview.propType = {
  data: PropType.shape({
    supportContact: PropType.shape({
      name: PropType.string.isRequired,
      email: PropType.string.isRequired
    }).isRequired,
    salesOverview: PropType.shape({
        uploads: PropType.number.isRequired,
        successfulUploads: PropType.number.isRequired,
        linesAttempted: PropType.number.isRequired,
        linesSaved: PropType.number.isRequired,
        lastUploadDate: PropType.instanceOf(Date).isRequired
    }).isRequired
  }).isRequired
}

export default AccountOverview;