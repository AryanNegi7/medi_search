import React, { useEffect } from "react";
import { ContentContainer } from "./Content.styles";

export default function Content({ data }) {
  const [obj, setObj] = React.useState("170");
  const [desc, setDesc] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchIssue = async () => {
      console.log('obj----->',obj);
      fetch(
        `http://localhost:8080/issue/${obj}`,
      ).then((res)=>{
        return res.json();
      }).then((json)=>{
        setDesc(json);
        setLoading(false);
        return;
      });
      // const json = await res.json();
      // setDesc(json);
    };
    fetchIssue();
  }, [obj]);
  // console.log(obj);

  const handleClick = (e) => {
    setLoading(true); //set loading to true
    setObj(e.target.value);
    console.log('handle click',e.target.value);
    // console.log(e);
  };
  return (
    <ContentContainer>
      <div className="leftPanel">
      {/* <button className="aryan" onClick={abc}>aryan</button> */}
        <ul>
          {/* {console.log("data --------"+ typeof data)} */}
          {data.map((item) => (
            <li key={item.id} value={item.id} onClick={handleClick}>
              {item.Name}
            </li>
          ))}
        </ul>
      
      </div>
      <div className="rightPanel">
        {/* Ternery operator */}
        {loading ? (
          <div className="loading">waiting...</div>
        ) : (
          <div className="wrapper">
            <div className="name">
              <h2>{desc.Name}</h2>
              <h3>({desc.ProfName})</h3>
            </div>
            <div className="description">
              <h4>Description </h4>
              <p>{desc.Description}</p>
              <p>{desc.DescriptionShort}</p>
            </div>
            <div className="MedicalCondition">
              <h4>Medical Condition</h4>
              <p>{desc.MedicalCondition}</p>
            </div>
            <div className="PossibleSymptoms">
              <h4>Possible Symptoms</h4>
              <p>{desc.PossibleSymptoms}</p>
            </div>
            <div className="Treatment">
              <h4>Treatment</h4>
              <p>{desc.TreatmentDescription}</p>
            </div>
          </div>
        )}
      </div>
    </ContentContainer>
  );
}