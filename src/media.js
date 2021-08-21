import { css } from 'styled-components'

const size = {
    widthXS: 'only screen and (max-width: 479px)',
    widthS: 'only screen and (min-width: 480px)',
    widthMS: 'only screen and (min-width: 624px)',
    widthM: 'only screen and (min-width: 768px)',
    widthL: 'only screen and (min-width: 1024px)',
    widthXL: 'only screen and (min-width: 1280px)',
    widthFull: 'only screen and (min-width: 1600px)'
}

export const media = {
    xs: (...args) => css`
        @media ${size.widthXS} {
            ${css(...args)};
        }
    `,
    s: (...args) => css`
        @media ${size.widthS} {
            ${css(...args)};
        }
    `,
    ms: (...args) => css`
        @media ${size.widthMS} {
            ${css(...args)};
        }
    `,
    m: (...args) => css`
        @media ${size.widthM} {
            ${css(...args)};
        }
    `,
    l: (...args) => css`
        @media ${size.widthL} {
            ${css(...args)};
        }
    `,
    xl: (...args) => css`
        @media ${size.widthXL} {
            ${css(...args)};
        }
    `,
    full: (...args) => css`
        @media ${size.widthFull} {
            ${css(...args)};
        }
    `,
}