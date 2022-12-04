import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import { Select } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";

const { Option } = Select;

const AdminSubject=()=> {
  // context
  const [auth, setAuth] = useAuth();
  // state
  // const [studyAreas, setStudyAreas] = useState([]);
  const [photo, setPhoto] = useState("");
  const [logo,setLogo]=useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [university, setUniversity] = useState("");
  const [address,setAddress] = useState("");
  const [webUrl,setWebUrl] = useState("");
  const [ranking,setRanking] = useState(""); 
  const [studyArea,setStudyArea]=useState("");
  const [englishProficiency,setEnglishProficiency]=useState("");
  const [programLevel,setProgramLevel]=useState("");
  const [yearlyTuitionFees,setYearlyTuitionFees]=useState(0);
  const [languageScore,setLanguageScore]=useState("");
  const [intakes,setIntakes]=useState("");
  const [duration,setDuration]=useState("");
  const [campus,setCampus]=useState("");
  const [subjectUrl,setSubjectUrl]=useState("");
  const [applicationDeadline,setApplicationDeadline]=useState("");
  const [applicationFees,setApplicationFees]=useState("");
  const [standardizedTest,setStandardizedTest]=useState("");
  const [entryRequirement,setEntryRequirement]=useState("");
  const [remarks,setRemarks]=useState("");
  const [country,setCountry]=useState("");
  
 
  // hook
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const subjectData = new FormData();
      subjectData.append("photo", photo);
      subjectData.append("logo", logo);
      subjectData.append("title", title);
      subjectData.append("description", description);    
      subjectData.append("university", university);    
      subjectData.append("address", address);    
      subjectData.append("webUrl", webUrl);    
      subjectData.append("ranking", ranking);    
      subjectData.append("studyArea", studyArea); 
      subjectData.append("englishProficiency", englishProficiency); 
      subjectData.append("programLevel", programLevel); 
      subjectData.append("yearlyTuitionFees", yearlyTuitionFees); 
      subjectData.append("intakes", intakes); 
      subjectData.append("duration", duration); 
      subjectData.append("campus", campus); 
      subjectData.append("subjectUrl", subjectUrl); 
      subjectData.append("applicationFees", applicationFees); 
      subjectData.append("standardizedTest", standardizedTest); 
      subjectData.append("entryRequirement", entryRequirement); 
      subjectData.append("remarks", remarks);      
      subjectData.append("languageScore", languageScore);      
      subjectData.append("country", country); 
      subjectData.append("applicationDeadline", applicationDeadline); 
           
      // console.log("form input======>",photo,logo);

      const { data } = await axios.post("/subject", subjectData);
      // console.log("testing data=====>",data)
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`"${data.title}" is created`);
        navigate("/dashboard/admin/subjects");
      }
    } catch (err) {
      console.log(err);
      toast.error("Subject create failed. Try again.");
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
            <div className="p-3 mt-2 mb-2 h4 bg-light">Create Subjects</div>

            {photo && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="subject"
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
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                  required
                />
              </label>
            </div>
            {logo && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(logo)}
                  alt="university logo"
                  className="img img-responsive"
                  height="200px"
                />
              </div>
            )}

            <div className="pt-2">
              <label className="btn btn-outline-secondary col-12 mb-3">
                {logo ? logo.name : "Upload Logo"}
                <input
                  type="file"
                  name="logo"
                  accept="image/*"
                  onChange={(e) => setLogo(e.target.files[0])}
                  hidden
                  required
                />
              </label>
            </div>


            <input
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Write Subject title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control p-2 mb-3"
              placeholder="Write University Name"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
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
           
            <div className=" p-1">
            <Select
              showSearch
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose Study Area"
              optionFilterProp="children"            
              allowClear
              required                                    
              onChange={(value)=>setStudyArea(value)}            
              filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
              options={[
      {
        value: 'law',
        label: 'law',
      },
      {
        value: 'arts',
        label: 'arts',
      },
      {
        value: 'business',
        label: 'business',
      },
      {
        value: 'marketing',
        label: 'marketing',
      },
      {
        value: 'health',
        label: 'health',
      },
      {
        value: 'engineering',
        label: 'engineering',
      },
      {
        value: 'physical science',
        label: 'physical science',
      },
      {
        value: 'applied science',
        label: 'applied science',
      },
      {
        value: 'humanities',
        label: 'humanities',
      },
    ]}
            />
            </div>
            <div className=" p-1">
            <Select
              showSearch
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose Program Level"
              optionFilterProp="children"            
              allowClear 
              required                                   
              onChange={(value)=>setProgramLevel(value)}            
              filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
              options={[
      {
        value: 'Foundation',
        label: 'Foundation',
      },
      {
        value: 'Under Graduate',
        label: 'Under Graduate',
      },
      {
        value: 'Post Graduate',
        label: 'Post Graduate',
      },
      {
        value: 'PHD',
        label: 'PHD',
      },
    ]}
            />
            <Select
              showSearch
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose Country"
              optionFilterProp="children"            
              allowClear 
              required                                   
              onChange={(value)=>setCountry(value)}            
              filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
              options={[
      {
        value: 'UK',
        label: 'UK',
      },
      {
        value: 'USA',
        label: 'USA',
      },
      {
        value: 'CANADA',
        label: 'CANADA',
      },
      {
        value: 'DENMARK',
        label: 'DENMARK',
      },
    ]}
            />
            </div>
            <div className=" p-1">
            <Select
              showSearch
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose English Proficiency"
              optionFilterProp="children"            
              allowClear
              required
              mode="multiple"                                    
              onChange={(value)=>setEnglishProficiency(value)}            
              filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
              options={[
      {
        value: 'IELTS',
        label: 'IELTS',
      },
      {
        value: 'OIETC',
        label: 'OIETC',
      },
      {
        value: 'TOEFL',
        label: 'TOEFL',
      },
      {
        value: 'GRE',
        label: 'GRE',
      },
      {
        value: 'GMAT',
        label: 'GMAT',
      },
      {
        value: 'SAT',
        label: 'SAT',
      },
      {
        value: 'PTE',
        label: 'PTE',
      }
    ]}
            />
            </div>
            <div className=" p-1">
            <input
            type="number"
            className="form-control p-2 mb-3"
            onChange={(e) => setYearlyTuitionFees(e.target.value)}
            value={yearlyTuitionFees}
            placeholder="yearly Tuition Fees"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setLanguageScore(e.target.value)}
            value={languageScore}
            placeholder="Language Score"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setIntakes(e.target.value)}
            value={intakes}
            placeholder="Intakes"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            placeholder="Duration"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setCampus(e.target.value)}
            value={campus}
            placeholder="Campus"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setSubjectUrl(e.target.value)}
            value={subjectUrl}
            placeholder="Subject Url"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setApplicationDeadline(e.target.value)}
            value={applicationDeadline}
            placeholder="Application Deadline"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setApplicationFees(e.target.value)}
            value={applicationFees}
            placeholder="Application Fees"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setStandardizedTest(e.target.value)}
            value={standardizedTest}
            placeholder="Standardized Test"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setEntryRequirement(e.target.value)}
            value={entryRequirement}
            placeholder="Entry Requirement"
            required 
          />
            </div>
            <div className=" p-1">
            <input
            type="text"
            className="form-control p-2 mb-3"
            onChange={(e) => setRemarks(e.target.value)}
            value={remarks}
            placeholder="Remarks"
            required 
          />
            </div>
           
            <button onClick={handleSubmit} className="btn btn-primary mb-5">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSubject;
