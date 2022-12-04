import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

const AdminSubjects=()=> {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      const { data } = await axios.get("/subjects");
      setSubjects(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.firstName} ${auth?.user?.lastName}`}
        subTitle="Admin Dashboard"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Subjects</div>
            {/* <pre>{JSON.stringify(subjects,null,4)}</pre> */}

            {subjects?.map((s) => (
              <Link
                key={s._id}
                to={`/dashboard/admin/subject/${s.slug}`}
              >
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={`${process.env.REACT_APP_API}/subject/photo/${s._id}`}
                        alt={s.title}
                        className="img img-fluid rounded-start"
                      />
                    </div>

                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{s?.title}</h5>
                        <p className="card-text">
                          {s?.description?.substring(0, 160)}...
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            {moment(s.createdAt).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSubjects;
