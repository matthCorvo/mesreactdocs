import  {useState, useEffect} from "react";

function UseCatCall() {
    
const [response, setResponse] = useState(null);

useEffect(() => {
fetch('https://api.thecatapi.com/v1/images/search')
.then((response) => response.json())
.then((data) => {
  //  console.log(data);
    setResponse(data[0].url)
})
}, [])
    return response;
}

export default UseCatCall
