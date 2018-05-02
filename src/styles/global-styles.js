import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: "Verdana Header";
    text-align: center;
    color: rgba(109, 95, 22, 1);
    font-size: 50px;
  }

  .opening-picture{
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 80%;
    width: 100%;
  }

  .dropdown{
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    font-family: "Open Sans";
    background: rgba(134, 184, 222, 1);
    border: 5px;
    border-color: rgba(0, 0, 0, 1) 1px solid;
  }

  .left{
    float: left;
    width: 50%;
    padding: 0  0  0 0;
  }

  p{
    font-family: "Lucida Console";
    padding: 30px;
  }
`