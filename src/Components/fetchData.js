const fetchData = async (setIssues,search,submitted,setSubmitted) => {
  console.log("Check 1",search,submitted);
    if (search.length == 0 && submitted) 
    {
      const response=await fetch(`http://localhost:8080/issues`);
      if (response.ok) {
        console.log('Data imported successfully');
      } else {
        console.error('Failed to import data');
      }
      const data=await response.json();
      // console.log(data);
      setIssues(data);
    }
    else if(submitted)
    {
      console.log(search,"Check2");
      const response=await fetch(`http://localhost:8080/issue/${search}`);
      if (response.ok) {
        console.log('Data imported successfully');
      } else {
        console.error('Failed to import data');
      }
      const data=await response.json();
      setIssues(data);
      // console.log(data);
      setSubmitted(false);
    }
    setSubmitted(false);
};
export default fetchData;