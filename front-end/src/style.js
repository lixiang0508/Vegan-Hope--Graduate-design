import {createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face {
    font-family: "iconfont";
    src: url('./statics/iconfont/iconfont.eot?t=1528610804703'); /* IE9*/
    src: url('./statics/iconfont/iconfont.eot?t=1528610804703#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./statics/iconfont/iconfont.ttf?t=1528610804703') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./statics/iconfont/iconfont.svg?t=1528610804703#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`