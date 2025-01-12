import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 62.5%; /*16px -> 100%   |   10px -> 62.5%   |   10px = 1rem*/
    line-height: 1.5;
    color: ${(props) => props.theme.text.default};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: ${(props) => props.theme.fontFamily.fontSans}
  }

  @media (min-width: 1600px) {
    html {
        font-size: 75%;
    }
  }
  @media (min-width: 1920px) {
    html {
        font-size: 87.5%;
    }
  }

  body {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.bg.default};
    width: 100%;
    height: 100%;
    font-weight: 400;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;

    &.hidden {
      overflow: hidden;
    }

  }

  #root {
    height: 100%;
    width: 100%;
  }

  p,a,b {
    font-size: ${(props) => props.theme.fontSize.md};
  }

  a {
    color: currentColor;
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    cursor: pointer;
  }

  ul {
    list-style: none
  }
`
