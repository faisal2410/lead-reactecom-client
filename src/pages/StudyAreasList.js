import useStudyArea from "../hooks/useStudyArea";
import Jumbotron from "../components/cards/Jumbotron";
import { Link } from "react-router-dom";

const StudyAreasList=()=> {
  const studyAreas = useStudyArea();

  return (
    <>
      <Jumbotron title="Explore over 80,000+ courses" subTitle="List of all Subjects" />

      <div className="container overflow-hidden">
        <div className="row gx-5 gy-5 mt-3 mb-5">
          {studyAreas?.map((s) => (
            <div className="col-md-6" key={s._id}>
              <button className="btn btn-light col-12 text-dark p-3">
                <Link to={`/studyArea/${s.slug}`}>{s.name}</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StudyAreasList;
