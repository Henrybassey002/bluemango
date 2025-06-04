//Menu Item card bootstrap design...

<div className="col-md-4 col-12 p-4">
  <div className="card" style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 /50%)" }}>
    <div className="card-body pt-2">
      <div className="row col-10 offset-1 p-4">
        <img
          src={"https://via.placeholder.com/150"}
          style={{ borderRadius: "50%" }}
          alt=""
          className="w-100 mt-5 image-box"
        />
      </div>

      <i
        className="bi bi-star btn btn-success"
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          padding: "5px 10px",
          borderRadius: "3px",
          outline: "none !important",
          cursor: "pointer",
        }}
      >
        &nbsp; SPECIAL
      </i>
      <i
        className="bi bi-card-plus btn btn-outline-danger"
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          padding: "5px 10px",
          borderRadius: "3px",
          outline: "none !important",
          cursor: "pointer",
        }}
      ></i>
      <div className="text-center">
        <p className="card-title m-0 text-success fs-3">name</p>
        <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
          category
        </p>
      </div>
      <p className="card-text" style={{ textAlign: "center" }}>
        Description
      </p>
      <div className="row text center">
        <h4>$10</h4>
      </div>
    </div>
  </div>
</div>;

//Menu Item Detail bootstrap design...

<div className="container pt-4 pt-md-5">
  <div className="row">
    <div className="col-7">
      <h2 className="text-success">NAME</h2>
      <span>
        <span
          className="badge text-bg-dark pt-2"
          style={{ height: "40px", fontSize: "20px" }}
        >
          CATEGORY
        </span>
      </span>
      <span>
        <span
          className="badge text-bg-light pt-2"
          style={{ height: "40px", fontSize: "20px" }}
        >
          SPECIAL TAG
        </span>
      </span>
      <p style={{ fontSize: "20px" }} className="pt-2">
        DESCRIPTION
      </p>
      <span className="h3">$10</span>&nbsp;&nbsp;&nbsp;
      <span
        className="pb-2 p-3"
        style={{ border: "1px solid #333,", borderRadius: "30px" }}
      >
        <i
          className="bi bi-dash p-1"
          style={{ fontSize: "25px", cursor: "pointer" }}
        ></i>
        <span className="h3 mt-3 px-3">XX</span>
        <i
          className="bi bi-plus p-1"
          style={{ fontSize: "25px", cursor: "pointer" }}
        ></i>
      </span>
      <div className="row pt-4">
        <div className="col-5">
          <button className="btn btn-success form-control">Add to Cart</button>
        </div>
        <div className="col-5">
          <button className="btn btn-secondary form-control">
            Back to Home
          </button>
        </div>
      </div>
    </div>
    <div className="col-5">
      <img
        src="https://via.placeholder.com/150"
        width="100%"
        style={{ borderRadius: "50%" }}
        alt="No Content"
      />
    </div>
  </div>
</div>;
