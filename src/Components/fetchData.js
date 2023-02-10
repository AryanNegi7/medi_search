const fetchData = async (setIssues,search,submitted,setSubmitted) => {
  console.log("asdasnfpinsafjnafsnjsafnsofsba",search,submitted);
    if (search.length == 0 && submitted) 
    {
      const response=await fetch(`http://localhost:8080/issue`);
      if (response.ok) {
        console.log('Data imported successfully');
      } else {
        console.error('Failed to import data');
      }
      const data=await response.json();
      setIssues(data);
    }
    else if(submitted)
    {
      console.log(search,"dfdfadffda");
      const response=await fetch(`http://localhost:8080/${search}`);
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