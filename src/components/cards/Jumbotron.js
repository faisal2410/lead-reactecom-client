const Jumbotron=({
  title,
  subTitle="Welcome to Lead Ecommerce"
})=> {
  return (
    <div
      className="container-fluid jumbotron"
      style={{ marginTop: "-8px", height: "250px" }}
    >
      <div className="row">
        <div className="col text-center p-5">
          <h1 className="fw-bold text-white">{title}</h1>
          <p className="lead">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
