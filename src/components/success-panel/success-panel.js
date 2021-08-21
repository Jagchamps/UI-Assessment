import React from 'react';
import { StyledSuccessPanel } from './success-panel.styled';
import { number, string, bool } from 'prop-types'

const SuccessPanel = ({ success, total, message, endPanel }) => {
    const successPercentage = ((success / total) * 100).toFixed(0);

    return (
        <StyledSuccessPanel className="col col-xs-6" endPanel={endPanel} data-testid="success-panel">
            <b className="data-text">
                {successPercentage}%
            </b>
            <p>{message}</p>
        </StyledSuccessPanel>
    )
}
SuccessPanel.propType = {
    success: number.isRequired,
    total: number.isRequired,
    message: string.isRequired,
    endPanel: bool.isRequired
}

export default SuccessPanel;