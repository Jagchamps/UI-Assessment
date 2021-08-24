import { render, screen } from '@testing-library/react';
import SuccessPanel from '../success-panel';
import { ThemeProvider } from 'styled-components';
import { theme } from "../../../theme";

const MockSuccessPanel = ({ success, total, message, endPanel }) => {
    return (
        <ThemeProvider theme={theme}>
            <SuccessPanel
                success={success}
                total={total}
                message={message}
                endPanel={endPanel}
            />
        </ThemeProvider>
    )
}

describe("Shows correct sales information", () => {
    it("Should render the correct successful upload percentage", () => {
        render(
            <MockSuccessPanel success={5} total={10} message={'UPLOAD SUCCESS'} endPanel={false}/>
        );
        const dataTextElement = screen.getByText('50%');
        expect(dataTextElement).toBeInTheDocument();
        expect(dataTextElement).toBeVisible();
    });

    it("Should render the correct message", () => {
        render(
            <MockSuccessPanel success={5} total={10} message={'UPLOAD SUCCESS'} endPanel={false}/>
        );
        const messageElement = screen.getByText('UPLOAD SUCCESS');
        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toBeVisible();
    });
})

describe("Panel should have correct styling", () => {
    it("Should render a border on the right when not the end panel", () => {
        render(
            <MockSuccessPanel success={5} total={10} message={'UPLOAD SUCCESS'} endPanel={false}/>
        );
        const panelElement = screen.getByTestId('success-panel');
        expect(panelElement).toBeVisible();
        expect(panelElement).toHaveStyle('border-right: 1px solid #F5F5F5;');
    });

    it("Should render a border on the left when the end panel", () => {
        render(
            <MockSuccessPanel success={5} total={10} message={'UPLOAD SUCCESS'} endPanel={true}/>
        );
        const panelElement = screen.getByTestId('success-panel');
        expect(panelElement).toBeVisible();
        expect(panelElement).toHaveStyle('border-left: 1px solid #F5F5F5;');
    });
})