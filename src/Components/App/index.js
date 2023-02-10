import React, { useEffect, useState } from "react";
import Content from "../Content";
import { Wrapper } from "./App.styles";
import Search from "../Search";
import info from './info.json';
import fetchData from "../fetchData";
// import fs from 'fs';


function App() {
  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [issues, setIssues] = useState([]);
  //API link
  // const API = `https://sandbox-healthservice.priaid.ch`;

  // TO get list of all symptoms
  // useEffect(() => {
  //   const fetchSymptoms = async () => {
  //     const res = await fetch(
  //       `${API}/symptoms?token=${token}&language=en-gb&format=json`
  //     );
  //     const data = await res.json();
  //     setSymptoms(data);
  //     console.log(data);
  //   };
  //   fetchSymptoms();
  // }, [API]);

  // TO get list of all issues
  // const iss=[];
  // useEffect(() => {
  //   const fetchIssue = async () => {
  //     const res = await fetch(
  //       `${API}/issues?token=${token}&language=en-gb&format=json`
  //     );
  //     const data = await res.json();
  //     // fs.writeFileSync('./../../../info.json', data);
  //     setIssues(data);
  //     // await data.forEach((item) => {
  //     //   fetch(
  //     //     `${API}/issues/${item.ID}/info?token=${token}&language=en-gb&format=json`
  //     //   ).then((res)=>{
  //     //     return res.json();
  //     //   }).then((json)=>{
  //     //     json.id=item.ID;
  //     //     iss.push(json);
  //     //   });
  //   // });
  //   // const abc=iss.toString();
  //   // console.log(iss);
  //   };
  //   fetchIssue();
  // }, []);
  useEffect(() => {
    const fetchIssue = async () => {
      info.forEach(async(item)=>{
        const response=await fetch('http://localhost:8080/import',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
          mode: 'cors',
        });
        if (response.ok) {
          console.log('Data imported successfully');
        } else {
          console.error('Failed to import data');
        }
        console.log(response);
      }
      
      );
    };
    console.log("length---------------------",info.length);
    fetchData(setIssues,search,true,setSubmitted);
    // dataLoader();
    // fetchIssue();
    // setIssues(info);
    
  }, []);

  useEffect(() => {
    fetchData(setIssues,search,submitted,setSubmitted);
  }, [submitted]);


  return (
    <Wrapper>
      <div className="search">
        <Search
          search={search}
          setSearch={setSearch}
          setSubmitted={setSubmitted}
          submitted={submitted}
        />
      </div>
      <Content data={issues} />
    </Wrapper>
  );
}

export default App;
