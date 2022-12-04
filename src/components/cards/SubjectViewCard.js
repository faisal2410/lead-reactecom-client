import { Badge } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
import { Tooltip } from 'antd';
const SubjectViewCard=({ s })=> { 
  // context
  const [cart, setCart] = useCart();
  // hooks
  const navigate = useNavigate();

  return (
    <div className="card mb-3 hoverable">
     <Tooltip placement="topLeft" title={`Ranking: ${s?.ranking}`}>
      <Badge.Ribbon text={`Yearly Tuition Fees:
       ${s?.yearlyTuitionFees?.toLocaleString(
        "en-US", {
            style: "currency",
            currency: "GBP",
            currencyDisplay:"code",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }
       )}`} 
       color="red">
     
        <Badge.Ribbon         
          text={`${
           s.ranking.substring(0,50)
          }`}
          placement="start"
          color="green"
        >
        
        
          <img
            className="card-img-top"
            src={`${process.env.REACT_APP_API}/subject/photo/${s._id}`}
            alt={s.title}
            style={{ height: "300px", objectFit: "cover" }}
          />
          
         
        </Badge.Ribbon>
        
      </Badge.Ribbon>

      <div className="card-body">
        <h5>{s?.title}</h5>
        <h4 className="">{s?.university}</h4>
        <p className="card-text">{s?.description?.substring(0, 60)}...</p>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
          onClick={() => navigate(`/subject/${s.slug}`)}
        >
          View Details
        </button>

        <button
          className="btn btn-outline-primary col card-button"
          style={{ borderBottomRightRadius: "5px" }}
          onClick={() => {
            setCart([...cart, s]);
            localStorage.setItem("cart", JSON.stringify([...cart, s]));
            toast.success("Added to Favorite");
          }}
        >
         Add to Short List
        </button>
      </div>
      </Tooltip>
    </div>
  );
}

export default SubjectViewCard;
