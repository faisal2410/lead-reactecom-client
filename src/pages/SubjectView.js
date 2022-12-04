import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Badge,Row,Col } from "antd";
import { useCart } from "../context/cart";
import SubjectCard from "../components/cards/SubjectCard";

const SubjectView=()=> {
  // context
  const [cart, setCart] = useCart();
  // state
  const [subject, setSubject] = useState({});  
  const [related, setRelated] = useState([]);
  // hooks
  const params = useParams();
  // console.log("subjects testing======>",university.subjects)

  useEffect(() => {
    if (params?.slug) loadSubject();
  }, [params?.slug]);

  const loadSubject = async (req, res) => {
    try {
      const { data } = await axios.get(`/subject/${params.slug}`);
      console.log("again testing related=====",data)
      setSubject(data);      
      console.log(data.studyArea)
      loadRelated(data._id,data.studyArea);  //studyArea is an array     
    } catch (err) {
      console.log(err);
    }
  };

  const loadRelated = async (subjectId,studyArea) => {
    try {
      const { data } = await axios.post(
        `/related-subjects/${subjectId}`,
        {
          studyArea
        }
      );
      console.log("new test=====",data)
      setRelated(data);
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className="container-fluid">   
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <Badge.Ribbon>            
                <img
                  className="card-img-top"
                  src={`${process.env.REACT_APP_API}/subject/photo/${subject._id}`}
                  alt={subject.title}
                  style={{ height: "500px", width: "100%", objectFit: "cover" }}
                />
              </Badge.Ribbon>
           

            <div className="card-body">
              <h1 className="fw-bold">{subject?.title}</h1>
              <p className="card-text lead">{subject?.description}</p>
              <p className="card-text lead"><span className="fw-bold">University Adress:</span> {subject?.address}</p>
              <p className="card-text lead"><span className="fw-bold">University Ranking:</span> {subject?.ranking}</p>
              <p className="card-text lead"><span className="fw-bold">University Website:</span> {subject?.webUrl}</p>
              <p className="card-text lead"><span className="fw-bold">Country</span> {subject?.country}</p>
              <p className="card-text lead"><span className="fw-bold">Campus</span> {subject?.campus}</p>
              <h2 className="fw-bold text-center">Subjects Details</h2>
              <Row>
                <Col span={24}>
               <SubjectCard key={subject._id} s={subject}></SubjectCard>
             
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-between lead p-5 bg-light fw-bold">          
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <h2>Related Subjects</h2>
          <hr />
          {related?.length < 1 && <p>Nothing found</p>}
          {related?.map((s) => (
            <SubjectCard s={s} key={s._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectView;
