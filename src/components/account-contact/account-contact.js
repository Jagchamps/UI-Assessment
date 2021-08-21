import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { StyledAccountContact } from './account-contact.styled';
import { shape, string } from 'prop-types'

const AccountContact = ({ supportContact }) => {
  return (
    <StyledAccountContact className="account-contact col col-xs-6" data-testid="contact-panel">
      <div className="flex-container flex-container--start">
        <h3 className="col col-xs-12">YOUR FEEFO SUPPORT CONTACT</h3>
        <div className="col col-xs-3 col-ms-2">
          <div className="btn">
            <b className="btn-inner">S</b>
          </div>
        </div>
        <div className="col col-xs-9">
          <div className="flex-container flex-container--spaced">
            <div className="col col-xs-12">
              <b>{supportContact.name}</b>
            </div>
            <p className="col col-xs-12 col-sm-12 col-ms-7 email-text">
              <FontAwesomeIcon icon={faEnvelope} className="fa-envelope"/> {supportContact.email}
            </p>
            <p className="col col-xs-12 col-sm-12 col-ms-5 phone-text">020 3362 4208</p>
          </div>
        </div>
      </div>
    </StyledAccountContact>
  )
}
AccountContact.propTypes = {
    supportContact: shape({
        name: string.isRequired,
        email: string.isRequired
    }).isRequired
}

export default AccountContact;