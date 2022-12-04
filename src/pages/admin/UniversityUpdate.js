import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import { Select } from "antd";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const AdminUniversityUpdate=()=> {
  // context
  const [auth, setAuth] = useAuth();
  // state
  // const [studyAreas, setStudyAreas] = useState([]);
  const [photo, setPhoto] = useState("");
  const [logo,setLogo]=useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); 
  const [address,setAddress] = useState("");
  const [webUrl,setWebUrl] = useState("");
  const [ranking,setRanking] = useState("");  
  // const [studyArea, setStudyArea] = useState(""); 
  const [id, setId] = useState("");
  const [updatePhoto,setUpdatePhoto]= useState(true);
  const [updateLogo,setUpdateLogo]= useState(true);
  
  // hook
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    loadUniversity();
  }, []);

  // useEffect(() => {
  //   loadStudyAreas();
  // }, []);

  // const loadStudyAreas = async () => {
  //   try {
  //     const { data } = await axios.get("/studyAreas");
  //     setStudyAreas(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const loadUniversity = async () => {
    try {
      const { data } = await axios.get(`/university/${params.slug}`);
      console.log("data testinggggg=======>",data)
      setName(data.name);
      setDescription(data.description);
      setAddress(data.address);    
      setWebUrl(data.webUrl);    
      setRanking(data.ranking);    
      // setStudyArea(data.studyArea._id);     
      setId(data._id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    console.log(id)
    e.preventDefault();
    try {
      const universityData = new FormData();
      photo && universityData.append("photo", photo);
     logo && universityData.append("logo", logo);
      universityData.append("name", name);
      universityData.append("description", description);    
      // universityData.append("studyArea", studyArea);
      universityData.append("address", address);    
      universityData.append("webUrl", webUrl);    
      universityData.append("ranking", ranking);  
     

      const { data } = await axios.put(`/university/${id}`, universityData);      
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`"${data.name}" is updated`);
        navigate("/dashboard/admin/universities");
      }
    } catch (err) {
      console.log(err);
      toast.error("University update failed. Try again.");
    }
  };

  const handleDelete = async (req, res) => {
    try {
      let answer = window.confirm(
        "Are you sure you want to delete this university?"
      );
      if (!answer) return;
      const { data } = await axios.delete(`/university/${id}`);
      toast.success(`"${data.name}" is deleted`);
      navigate("/dashboard/admin/universities");
    } catch (err) {
      console.log(err);
      toast.error("Delete failed. Try again.");
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
            <div className="p-3 mt-2 mb-2 h4 bg-light">Update University</div>

            {photo ? (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="university"
                  className="img img-responsive"
                  height="200px"
                />
              </div>
            ) : (
              <div className="text-center">
                <img
                  src={`${
                    process.env.REACT_APP_API
                  }/university/photo/${id}?${new Date().getTime()}`}
                  alt="university "
                  className="img img-responsive"
                  height="200px"
                
                />
              </div>
            )}
            {logo ? (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(logo)}
                  alt="university logo"
                  className="img img-responsive"
                  height="200px"
                />
              </div>
            ) : (
              <div className="text-center">
                <img
                  src={`${
                    process.env.REACT_APP_API
                  }/university/logo/${id}?${new Date().getTime()}`}
                  alt="university "
                  className="img img-responsive"
                  height="200px"
                
                />
              </div>
            )}
            <div className="pt-2">
              <label className="btn btn-outline-secondary col-12 mb-3">
                {photo ? photo.name : "Upload photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => {
                    setPhoto(e.target.files[0])
                    setUpdatePhoto(false)                    
                    }}
                  hidden
                 
                />
              </label>
            </div>
            <div className="pt-2">
              <label className="btn btn-outline-secondary col-12 mb-3">
                {logo ? logo.name : "Upload logo"}
                <input
                  type="file"
                  name="logo"
                  accept="image/*"
                  onChange={(e) => {
                    setLogo(e.target.files[0])
                    setUpdateLogo(false)                    
                    }}
                  hidden
                 
                />
              </label>
            </div>

            <input
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Write a name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Write a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Write university Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
             <input
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Write university Website Address"
              value={webUrl}
              onChange={(e) => setWebUrl(e.target.value)}
            />
             <input
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Write university Ranking"
              value={ranking}
              onChange={(e) => setRanking(e.target.value)}
            />

            {/* <Select
              // showSearch
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose Study Area"
              onChange={(value) => setStudyArea(value)}
              value={studyArea}
            >
              {studyAreas?.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
            </Select> */}

           

            <div className="d-flex justify-content-between">
           
            <button disabled={updatePhoto && updateLogo} onClick={handleSubmit} className="btn btn-primary mb-5">
                Update
              </button>
          
              <button onClick={handleDelete} className="btn btn-danger mb-5">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUniversityUpdate;