import styled from "styled-components";

export const ContentContainer = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  margin: 1rem auto;
  height: 85vh;
  // max-height: 3500px;
  width: 90%;
  // background-color: red;
  padding: 5rem;
  display:flex;
  justify-content: center;
  align-items: start;
  .leftPanel {
    height: 100%;
    background-color: #336AA9;
    width: 30%;
    max-width: 550px;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem;
    font-size: 15px;
    // margin: 1rem;
    .aryan{
      background: grey;
      padding: 1rem;
      margin: 1rem 1rem;
    }
    ul {
      background: #336AA9;
      height: 100%;
      width:90%;
      // float: center;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      padding: 1rem;
      // margin: 1rem 1rem;
      list-style: none;
      overflow: auto;

      li {
        // display: flex;
        // flex-direction: row;
        // align-items: center;
        // justify-content: center;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 1rem 0;
        background: #fff;
        color: teal;
        margin: 0.5rem;
        font-weight: bold;
        font-size: 1.2rem;
        width: 90%;
        // float:center;
        // max-width: 24rem;
        transition: all 0.3s ease-in-out;
        :not(:first-child) {
          margin-top: 1rem;
        }
        :hover {
          cursor: pointer;
          background: coral;
          color: white;
        }
      }
    }
  }

  .rightPanel {
    // width: 70vw;
    // height: 75vh;
    border: 1px solid #2e7d32;
    border-radius: 5px;
    padding: 29px;
    background-color: #6096BA;
    height: 100%;
    width: 70%;
    background: #fff;
    color: #2e7d32;
    // margin-top: 1rem;
    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      font-size: 1.5em;
      color: #2e7d32;
      font-weight: bold;
      background: #fff;
    }
    
    .wrapper {
      // background-color: #6096BA;
      div {
        margin-top: 1rem;
        h4 {
          padding: 10px 0;
          /* text-transformation: uppercase; */
        }
        p {
          color: #2e7d20;
        }
      }
    }
  }
`;
