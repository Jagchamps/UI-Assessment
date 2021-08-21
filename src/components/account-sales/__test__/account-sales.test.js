import { render, screen } from '@testing-library/react';
import AccountSales from '../account-sales';
import { ThemeProvider } from 'styled-components';
import { theme } from "../../../theme";

const MockAccountSales = ({ mockSalesOverview }) => {
    return (
        <ThemeProvider theme={theme}>
            <AccountSales
                salesOverview={mockSalesOverview}
            />
        </ThemeProvider>
    )
}

const mockSalesOverviewMulti = {
    uploads: 10,
    successfulUploads: 5,
    linesAttempted: 20,
    linesSaved: 5,
    lastUploadDate: 1605001226079,
}

const mockSalesOverviewSingle = {
    uploads: 10,
    successfulUploads: 1,
    linesAttempted: 20,
    linesSaved: 1,
    lastUploadDate: 1605001226079,
}

const mockSalesOverviewZero = {
    uploads: 10,
    successfulUploads: 0,
    linesAttempted: 20,
    linesSaved: 0,
    lastUploadDate: 1605001226079,
}

describe("Should display expected elements", () => {
    it("Sales message should be visible", () => {
        render(
            <MockAccountSales mockSalesOverview={mockSalesOverviewZero} />
        );
        const nameElement = screen.getByTestId('sales-message-element');
        expect(nameElement).toBeVisible();
        expect(nameElement).toBeInTheDocument();
    });

    it("Should be two success panels", () => {
        render(
            <MockAccountSales mockSalesOverview={mockSalesOverviewZero} />
        );
        const panelElements = screen.getAllByTestId('success-panel');
        expect(panelElements.length).toBe(2);
    });    
})

describe("Shows correct sales information", () => {
    it("Should render the correct message for zero uploads/lines", () => {
        render(
            <MockAccountSales mockSalesOverview={mockSalesOverviewZero} />
        );
        const nameElement = screen.getByTestId('sales-message-element');
        expect(nameElement).toHaveTextContent('You had 0 uploads and 0 lines added.');
    });

    it("Should render the correct message for 1 upload/line", () => {
        render(
            <MockAccountSales mockSalesOverview={mockSalesOverviewSingle} />
        );
        const nameElement = screen.getByTestId('sales-message-element');
        expect(nameElement).toHaveTextContent('You had 1 upload and 1 line added.');
    });

    it("Should render the correct message for multiple uploads/lines", () => {
        render(
            <MockAccountSales mockSalesOverview={mockSalesOverviewMulti} />
        );
        const nameElement = screen.getByTestId('sales-message-element');
        expect(nameElement).toHaveTextContent('You had 5 uploads and 5 lines added.');
    });
})