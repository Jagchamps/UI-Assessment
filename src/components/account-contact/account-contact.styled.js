import styled from 'styled-components';
import { media } from '../../media';

export const StyledAccountContact = styled.section`
    h3 {
        color:  ${({ theme }) => theme.syntax.light}; 
        margin-bottom: 0.5em;
    }

    div {
        margin-bottom: 0.5em;
    }

    .btn {
        background-color: ${({ theme }) => theme.colour.yellow}; 
        border-radius: .25rem;
        color:  ${({ theme }) => theme.syntax.dark}; 
        padding: 0.5em;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        width: 36px;

        ${media.s`
            height: 42px;
            width: 42px;
        `};

        ${media.m`
            height: 48px;
            width: 48px;
        `};


        b {
            font-size: 0.9em;

            ${media.s`
                font-size: 1.1em;
            `};
        }
    }

    .fa-envelope: {
        margin-right: 0.2em;
    }
`;