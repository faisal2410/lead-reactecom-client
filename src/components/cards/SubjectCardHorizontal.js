import moment from "moment";
import { useCart } from "../../context/cart";

const SubjectCardHorizontal=({ s, remove = true })=> {
  // context
  const [cart, setCart] = useCart();

  const removeFromCart = (subjectId) => {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item._id === subjectId);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
  };

  return (
    <div
      className="card mb-3"      
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`${process.env.REACT_APP_API}/subject/photo/${s._id}`}
            alt={s.name}
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              marginLeft: "-12px",
              borderRopRightRadius: "0px",
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {s.title}{" "}
              {s?.yearlyTuitionFees?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h5>
            <p className="card-text">{`${s?.description?.substring(
              0,
              50
            )}..`}</p>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <p className="card-text">
            <small className="text-muted">
              Listed {moment(s.createdAt).fromNow()}
            </small>
          </p>
          {remove && (
            <p
              className="text-danger mb-2 pointer"
              onClick={() => removeFromCart(s._id)}
            >
              Remove
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectCardHorizontal;
