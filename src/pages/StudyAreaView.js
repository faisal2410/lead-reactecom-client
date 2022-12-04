import { useState, useEffect } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import UniversityCard from "../components/cards/SubjectViewCard";

const StudyAreaView=()=> {
  // state
  const [universities, setUniversities] = useState([]);
  const [studyArea, setStudyArea] = useState({});
  // hooks
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params?.slug) loadProductsByStudyArea();
  }, [params?.slug]);

  const loadProductsByStudyArea = async () => {
    try {
      const { data } = await axios.get(`/universities-by-studyArea/${params.slug}`);
      setStudyArea(data.studyArea);
      setUniversities(data.universities);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron
        title={studyArea?.name}
        subTitle={`${universities?.length} subjects found in "${studyArea?.name}"`}
      />

      <div className="container-fluid">
        <div className="row mt-3">
          {universities?.map((u) => (
            <div key={u._id} className="col-md-4">
              <UniversityCard u={u} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StudyAreaView;
