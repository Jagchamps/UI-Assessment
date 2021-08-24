import styled from 'styled-components';
import { media } from '../../media';

export const StyledAccountSales = styled.section`
    background-color: ${({ theme }) => theme.bg.light};
    border-radius: 0.25rem;
    margin: 0.5em;
    margin-top: 0px;
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;

    div {
        margin-bottom: 0;
    }

    .account-sales-top {
        padding: 0.5em;
        border-bottom: 2px solid ${({ theme }) => theme.bg.main};
        margin-bottom: 0;
        position: relative;

        h2 {
            color: ${({ theme }) => theme.syntax.dark};
            font-size: 1rem;
            margin-bottom: 1em;

            ${media.ms`
                font-size: 1.2rem;
            `};
        }

        p {
            margin-bottom: 1em;
        }
    }

    .fa-upload {
        color: ${({ theme }) => theme.colour.blue};
    }

    .fa-info {
        color: ${({ theme }) => theme.syntax.light};
        position: absolute;
        top: 0.5em;
        right: 0.5em;
    }

    .flex-container {
        flex-wrap: nowrap;
    }
`;