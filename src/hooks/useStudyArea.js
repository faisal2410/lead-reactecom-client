import { useState, useEffect } from "react";
import axios from "axios";

const useStudyArea=()=> {
  const [studyAreas, setStudyAreas] = useState([]);

  useEffect(() => {
    loadStudyAreas();
  }, []);

  const loadStudyAreas = async () => {
    try {
      const { data } = await axios.get("/studyAreas");
      setStudyAreas(data);
    } catch (err) {
      console.log(err);
    }
  };

  return studyAreas;
}

export default useStudyArea;
