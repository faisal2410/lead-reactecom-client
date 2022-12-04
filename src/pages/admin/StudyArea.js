import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import StudyAreaForm from "../../components/forms/StudyAreaForm";
import { Modal } from "antd";

const AdminStudyArea=()=> {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");
  const [studyAreas, setStudyAreas] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatingName, setUpdatingName] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/studyArea", { name });
      if (data?.error) {
        toast.error(data.error);
      } else {
        loadStudyAreas();
        setName("");
        toast.success(`"${data.name}" is created`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Create Study Area failed. Try again.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/studyArea/${selected._id}`, {
        name: updatingName,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`"${data.name}" is updated`);
        setSelected(null);
        setUpdatingName("");
        loadStudyAreas();
        setVisible(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Study Area may already exist. Try again.");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(`/studyArea/${selected._id}`);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`"${data.name}" is deleted`);
        setSelected(null);
        loadStudyAreas();
        setVisible(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Study Area may already exist. Try again.");
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
            <div className="p-3 mt-2 mb-2 h4 bg-light">Create Study Areas</div>

            <StudyAreaForm
              value={name}
              setValue={setName}
              handleSubmit={handleSubmit}
            />

            <hr />

            <div className="col">
              {studyAreas?.map((s) => (
                <button
                  key={s._id}
                  className="btn btn-outline-primary m-3"
                  onClick={() => {
                    setVisible(true);
                    setSelected(s);
                    setUpdatingName(s.name);
                  }}
                >
                  {s.name}
                </button>
              ))}
            </div>

            <Modal
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <StudyAreaForm
                value={updatingName}
                setValue={setUpdatingName}
                handleSubmit={handleUpdate}
                buttonText="Update"
                handleDelete={handleDelete}
              />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminStudyArea;
