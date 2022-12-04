import { useSearch } from "../context/search";
import SubjectViewCard from "../components/cards/SubjectViewCard";
import Jumbotron from "../components/cards/Jumbotron";

const Search=()=> {
  const [values, setValues] = useSearch();

  return (
    <>
      <Jumbotron
        title="Search results"
        subTitle={
          values?.results?.length < 1
            ? "No subjects found"
            : `Found ${values?.results?.length} subjects`
        }
      />

      <div className="container mt-3">
        <div className="row">
          {values?.results?.map((s) => (
            <div key={s._id} className="col-md-4">
              <SubjectViewCard s={s} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;