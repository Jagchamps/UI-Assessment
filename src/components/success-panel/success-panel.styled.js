import styled, { css } from 'styled-components';
import { media } from '../../media';

export const StyledSuccessPanel = styled.div`
    padding: 0.5em;

    ${({ endPanel }) => !endPanel && css`
        border-right: 1px solid ${({ theme }) => theme.bg.main};
        margin-right: -1px;
    `}

    ${({ endPanel }) => endPanel && css`
        border-left: 1px solid ${({ theme }) => theme.bg.main};
        margin-left: -1px;
        border-radius: 0 0 .25rem 0;
    `}

    .data-text {
        color: ${({ theme }) => theme.colour.green};
        font-size: 1.5em;

        ${media.m`
            font-size: 2em;
        `};
    }

    p {
        font-weight: 700;
        color: ${({ theme }) => theme.syntax.light}; 
    }
`;