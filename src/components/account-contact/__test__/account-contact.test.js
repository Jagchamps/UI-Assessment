import { render, screen } from '@testing-library/react';
import AccountContact from '../account-contact';
import { ThemeProvider } from 'styled-components';
import { theme } from "../../../theme";

const MockAccountContact = () => {
    return (
        <ThemeProvider theme={theme}>
            <AccountContact
                supportContact={mockSupportContact}
            />
        </ThemeProvider>
    )
}

const mockSupportContact = {
    name: 'Harold',
    email: 'foobar@feefo.com'
}

describe("Shows correct contact information", () => {
    it("Should render the supplied name", () => {
        render(
            <MockAccountContact />
        );
        const nameElement = screen.getByText('Harold');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toBeVisible();
    });

    it("Should render the supplied email address", () => {
        render(
            <MockAccountContact />
        );
        const emailElement = screen.getByText('foobar@feefo.com');
        expect(emailElement).toBeInTheDocument();
        expect(emailElement).toBeVisible();
    });
})