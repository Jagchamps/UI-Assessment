import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";

const MockAccountOverview = () => {
    return(
        <ThemeProvider theme={theme}>
            <AccountOverview data={accountOverviewStub}/>
        </ThemeProvider>
    )
}

const accountOverviewStub = {
    supportContact: {
        name: 'John Smith',
        email: 'john.smith@feefo.com'
    },
    salesOverview: {
        uploads: 8,
        successfulUploads: 3,
        linesAttempted: 20,
        linesSaved: 4,
        lastUploadDate: 1605001226079,
    }
}

describe("Should display expected elements/components", () => {
    it('Renders overview component', () => {
        render(<MockAccountOverview />);
        const element = screen.getByTestId('overview-panel');
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
    });

    it('Renders one contact component', () => {
        render(<MockAccountOverview />);
        const elements = screen.getAllByTestId('contact-panel');
        expect(elements.length).toBe(1);

        expect(elements[0]).toBeInTheDocument();
        expect(elements[0]).toBeVisible();
    });

    it('Renders one sales component', () => {
        render(<MockAccountOverview />);
        const elements = screen.getAllByTestId('sales-panel');
        expect(elements.length).toBe(1);

        expect(elements[0]).toBeInTheDocument();
        expect(elements[0]).toBeVisible();
    });
});
