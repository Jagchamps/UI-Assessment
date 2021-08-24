import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { StyledAccountSales } from './account-sales.styled';
import PropType from 'prop-types'
import SuccessPanel from '../success-panel/success-panel';

const AccountSales = ({ salesOverview }) => {
    return (
        <StyledAccountSales className="col col-xs-12" data-testid="sales-panel">
            <div className="account-sales-top col col-xs-12">
                <h2><FontAwesomeIcon icon={faUpload} className="fa-upload"/>Sales</h2>
                <p data-testid="sales-message-element">
                    You had <b>{salesOverview.successfulUploads} {salesOverview.successfulUploads === 1 ? 'upload' : 'uploads'}</b> and <b>{salesOverview.linesSaved} {salesOverview.linesSaved === 1 ? 'line' : 'lines'}</b> added.
                </p>
                <FontAwesomeIcon icon={faInfoCircle} className="fa-info"/>
            </div>
            <SuccessPanel success={salesOverview.successfulUploads} total={salesOverview.uploads} message={'UPLOAD SUCCESS'} endPanel={false}/>
            <SuccessPanel success={salesOverview.linesSaved} total={salesOverview.linesAttempted} message={'LINES SAVED'} endPanel={true}/>
        </StyledAccountSales>
    )
}
AccountSales.propType = {
    salesOverview: PropType.shape({
        uploads: PropType.number.isRequired,
        successfulUploads: PropType.number.isRequired,
        linesAttempted: PropType.number.isRequired,
        linesSaved: PropType.number.isRequired,
        lastUploadDate: PropType.instanceOf(Date).isRequired
    }).isRequired
}

export default AccountSales;