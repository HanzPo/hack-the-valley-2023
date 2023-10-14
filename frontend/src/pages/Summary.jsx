import "./Summary.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Summary = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [summary, setSummary] = useState("");
  const url = searchParams.get("url");
  const poi = searchParams.get("poi");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/?url=${url}&poi=${poi}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        
      });
  }, []);

  return (
    <div>
      <h1>Summarization of Commits Since</h1>
      <p>{url}</p>
    </div>
  );
};

export default Summary;
