import { createGlobalStyle } from 'styled-components'
import { media } from './media';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.bg.main};
    color: ${({ theme }) => theme.syntax.main};
    text-align: left;
  }

  h1 {
    color: ${({ theme }) => theme.syntax.dark};
    font-size: 1.2rem;

    ${media.s`
      font-size: 1.5rem;
    `};
  }

  h2 {
    font-size: 0.7rem;

    ${media.ms`
      font-size: 0.9rem;
    `};
  }

  b {
    color: ${({ theme }) => theme.syntax.bold};
  }

  b,
  p {
    font-size: 0.6em;

    ${media.s`
      font-size: 0.7em;
    `};

    ${media.l`
      font-size: 0.8em;
    `};

    b {
      font-size: 1em;
    }
  }

  .fa-envelope,
  .fa-upload {
    margin-right: 0.2em;
  }

  .account-overview {
    margin-top: 1em;
  }

  .section-inner {
    width: 100%;
    flex-basis: 100%;

    ${media.s`
      width: 83.33%;
      flex-basis: 83.33%;
    `};

    ${media.l`
      width: 66.67%;
      flex-basis: 66.67%;
    `};

    ${media.full`
      max-width: 900px;
    `};
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .flex-container--start {
    justify-content: flex-start;
  }

  .flex-container--spaced {
    justify-content: space-between;
    align-items: flex-end;
  }

  .col {
    flex: 0 0 auto;
    flex-grow: 1;
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }

  .col-xs-1 {
      max-width: 8.33%;
      flex-basis: 8.33%;
  }

  .col-xs-2 {
      max-width: 16.67%;
      flex-basis: 16.67%;
  }

  .col-xs-3 {
      max-width: 25%;
      flex-basis: 25%;
  }

  .col-xs-4 {
      max-width: 33.33%;
      flex-basis: 33.33%;
  }

  .col-xs-5 {
      max-width: 41.67%;
      flex-basis: 41.67%;
  }

  .col-xs-6 {
      max-width: 50%;
      flex-basis: 50%;
  }

  .col-xs-7 {
      max-width: 58.33%;
      flex-basis: 58.33%;
  }

  .col-xs-8 {
      max-width: 66.67%;
      flex-basis: 66.67%;
  }

  .col-xs-9 {
      max-width: 75%;
      flex-basis: 75%;
  }

  .col-xs-10 {
      max-width: 83.33%;
      flex-basis: 83.33%;
  }

  .col-xs-11 {
      max-width: 91.67%;
      flex-basis: 91.67%;
  }

  .col-xs-12 {
      max-width: 100%;
      flex-basis: 100%;
  }

  .col-sm-1 {
    ${media.s`
        max-width: 8.33%;
        flex-basis: 8.33%;
    `};
  }

  .col-sm-2 {
    ${media.s`
        max-width: 16.67%;
        flex-basis: 16.67%;
    `};
  }

  .col-sm-3 {
    ${media.s`
        max-width: 25%;
        flex-basis: 25%;
    `};
  }

  .col-sm-4 {
    ${media.s`
        max-width: 33.33%;
        flex-basis: 33.33%;
    `};
  }

  .col-sm-5 {
    ${media.s`
        max-width: 41.67%;
        flex-basis: 41.67%;
    `};
  }

  .col-sm-6 {
    ${media.s`
        max-width: 50%;
        flex-basis: 50%;
    `};
  }

  .col-sm-7 {
    ${media.s`
        max-width: 58.33%;
        flex-basis: 58.33%;
    `};
  }

  .col-sm-8 {
    ${media.s`
        max-width: 66.67%;
        flex-basis: 66.67%;
    `};
  }

  .col-sm-9 {
    ${media.s`
        max-width: 75%;
        flex-basis: 75%;
    `};
  }

  .col-sm-10 {
    ${media.s`
        max-width: 83.33%;
        flex-basis: 83.33%;
    `};
  }

  .col-sm-11 {
    ${media.s`
        max-width: 91.67%;
        flex-basis: 91.67%;
    `};
  }

  .col-sm-12 {
    ${media.s`
        max-width: 100%;
        flex-basis: 100%;
    `};
  }

  .col-ms-1 {
    ${media.ms`
        max-width: 8.33%;
        flex-basis: 8.33%;
    `};
  }

  .col-ms-2 {
    ${media.ms`
        max-width: 16.67%;
        flex-basis: 16.67%;
    `};
  }

  .col-ms-3 {
    ${media.ms`
        max-width: 25%;
        flex-basis: 25%;
    `};
  }

  .col-ms-4 {
    ${media.ms`
        max-width: 33.33%;
        flex-basis: 33.33%;
    `};
  }

  .col-ms-5 {
    ${media.ms`
        max-width: 41.67%;
        flex-basis: 41.67%;
    `};
  }

  .col-ms-6 {
    ${media.ms`
        max-width: 50%;
        flex-basis: 50%;
    `};
  }

  .col-ms-7 {
    ${media.ms`
        max-width: 58.33%;
        flex-basis: 58.33%;
    `};
  }

  .col-ms-8 {
    ${media.ms`
        max-width: 66.67%;
        flex-basis: 66.67%;
    `};
  }

  .col-ms-9 {
    ${media.ms`
        max-width: 75%;
        flex-basis: 75%;
    `};
  }

  .col-ms-10 {
    ${media.ms`
        max-width: 83.33%;
        flex-basis: 83.33%;
    `};
  }

  .col-ms-11 {
    ${media.ms`
        max-width: 91.67%;
        flex-basis: 91.67%;
    `};
  }

  .col-ms-12 {
    ${media.ms`
        max-width: 100%;
        flex-basis: 100%;
    `};
  }
`;