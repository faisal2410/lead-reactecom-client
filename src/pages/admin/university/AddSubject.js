import React from 'react';
import Jumbotron from '../../../components/cards/Jumbotron';
import AdminMenu from '../../../components/nav/AdminMenu';
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import { Select } from "antd";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Tooltip, Button, Modal, List } from "antd";

import AdvanceSearchForm from '../../../components/forms/AdvanceSearchForm';

import {
    EditOutlined,
    CheckOutlined,
    UploadOutlined,
    QuestionOutlined,
    CloseOutlined,
    UserSwitchOutlined,
  } from "@ant-design/icons";

const { Option } = Select;

const AddSubject = () => {
    const [subject, setSubject] = useState({});
    const [visible, setVisible] = useState(false);
    // const [englishProficiency,setEnglishProficiency] = useState([]);
    // const [studyArea, setStudyArea]=useState([]);   
    const [values, setValues] = useState({
        title: "",
        intakes:"",
        duration:"",
        programLevel:"",
        country:"",
        campus:"",
        subjectUrl:"",
        applicationDeadline:"",
        applicationFees:"",
        yearlyTuitionFees:"",           
        languageScore:"",
        standardizedTest:"",
        entryRequirement:"",
        remarks:"",  
        studyArea:[],
        englishProficiency:[]
         
      });
    // context
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  // FUNCTIONS FOR ADD LESSON
  // const handleCheck = (value, id) => {
  //   console.log(value, id);
  //   let all = [...englishProficiency];
  //   if (value) {
  //     all.push(id);
  //   } else {
  //     all = all.filter((s) => s !== id);
  //   }
  //   setEnglishProficiency(all);
  // };
  // const handleCheckStudyArea = (value, id) => {
  //   console.log(value, id);
  //   let all = [...studyArea];
  //   if (value) {
  //     all.push(id);
  //   } else {
  //     all = all.filter((s) => s !== id);
  //   }
  //   setStudyArea(all);
  // };
 

  const handleAddSubject = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const { data } = await axios.post(
        `/university/subject/${params.slug}`,
        values     
      );
      console.log(data)
      setValues({ ...values, 
        title: "",
        intakes:"" ,
        duration:"",
        programLevel:"",
        country:"",
        campus:"",
        subjectUrl:"",
        applicationDeadline:"",
        applicationFees:"",
        yearlyTuitionFees:"",
        languageScore:"",
        standardizedTest:"",
        entryRequirement:"",
        remarks:"",
        studyArea:[],
        englishProficiency:[]
        
    }); 
    // setEnglishProficiency([]);
    // setStudyArea([]);
      setVisible(false);
      setSubject(data);
      toast.success("Subject added");
    } catch (err) {
      console.log(err);
      toast.error("Subject add failed");
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
          <div className="row">
              <Button
                onClick={() => setVisible(true)}
                className="col-md-6 offset-md-3 text-center"
                type="primary"
                shape="round"
                icon={<UploadOutlined />}
                size="large"
              >
                Add Subject
              </Button>
            </div>

            <br />

            <Modal
              title="+ Add Subject"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <AdvanceSearchForm
                values={values}
                setValues={setValues}
                handleAddSubject={handleAddSubject} 
              />
            </Modal>


          </div>
         
        </div>
      </div>
    </>
    );
};

export default AddSubject;