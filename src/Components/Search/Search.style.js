import styled from "styled-components";

export const SearchContainer = styled.section`
  background: #336AA9;
  display: flex;
  height: 7rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 45px;
  body {
    background: #f2f2f2;
    font-family: "Open Sans", sans-serif;
  }
  .title{
    font-size: 2rem;
    // font-weight: 120px;
    // font-stretch: ultra-expanded;
  }
  .search {
    width: 100%;
    // background-color: red;
    height: 80%;
    position: relative;
    display: flex;
    margin-top: 30px;
  }
  
  .searchTerm {
    width: 100%;
    border: 1px solid #0C488E;
    border-right: none;
    padding: 5px;
    // height: 31px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;
  }
  
  .searchTerm:focus {
    color: black;
  }
  .searchButton:hover {
    background-color: #0C488E;
  }
  
  .searchButton {
    // height: 44px;
    width: 100px;
    border: 1px solid #0C488E;
    background: #6096BA;
    text-align: center;
    color: white;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
  
  /*Resize the wrap to see the search bar change!*/
  .wrap {
    width: 25%;
    /* position: absolute;
    top: 10%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
  }
`;
