import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import {useState} from 'react'
import Jumbotron from "../components/cards/Jumbotron";
import { useNavigate } from "react-router-dom";
import UserCartSidebar from "../components/cards/UserCartSidebar";
import SubjectCardHorizontal from "../components/cards/SubjectCardHorizontal";
import {Select,Slider,Tooltip,Button,Modal } from "antd";
import {UploadOutlined} from "@ant-design/icons";
import CompareCourses from "../components/forms/CompareCourses"
import toast from "react-hot-toast";

const Cart=()=> {
  // context
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [visible,setVisible]=useState(false);
  // hooks
  const navigate = useNavigate();

  const handleClick=()=>{
    if(cart.length<2){
      toast.error('Please add at least two subjects in your short list for comparison');
      return;
    }
    if(cart.length>5){
      toast.error("Maximum 5 subjects is allowed for comparison");
      return;
    }
    setVisible(true)

  }

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.token && auth?.user?.firstName} ${auth?.token && auth?.user?.lastName}`}
        subTitle={
          cart?.length
            ? `You have ${cart.length} subject/subjects in your short list. ${
                auth?.token ? "" : "Please login to apply"
              }`
            : "Your have not added any subjects in your short list. Continue Exploring subjects through our search program"
        }
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 mt-2 mb-2 h4 bg-light text-center">
              {cart?.length ? (
                "My Short Listed Subjects"
              ) : (
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/")}
                  >
                    Continue Exploring Subjects
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {cart?.length && (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {cart?.map((s, index) => (
                  <SubjectCardHorizontal key={index} s={s} />
                ))}
              </div>
              <div className="d-flex justify-content-end">

              <Button
                // onClick={() => setVisible(true)}
                onClick={handleClick}
                // className="col-md-6 offset-md-3 text-center"
                className="col-md-12 mt-3 text-center"
                type="primary"
                shape="round"
                icon={<UploadOutlined />}
                size="large"
              >
                Compare Short Listed Subjects
              </Button>
        <Modal
              title="+ Compare Subjects"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
              style={{ top: 50 }}
            >
              <CompareCourses/>
            </Modal>           
              </div>
            </div>

            <UserCartSidebar />
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
