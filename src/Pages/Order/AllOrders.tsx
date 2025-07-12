import { withAdminAuth } from "../../HOC";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import OrderList from "../../Components/Page/Order/OrderList";
import { MainLoader } from "../../Components/Page/Common";
import React, { useState } from "react";
import SD_Status from "../../Utility/SD";
import { inputHelper } from "../../Helper";

const filterOptions = [
  "All",
  SD_Status.CONFIRMED,
  SD_Status.BEING_COOKED,
  SD_Status.READY_FOR_PICKUP,
  SD_Status.CANCELLED,
];

function AllOrders() {
  const { data, isLoading } = useGetAllOrdersQuery("");
  const [filters, setFilters] = useState({ searchString: "", status: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempValue = inputHelper(e, filters);
    setFilters(tempValue);
  };

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <>
          <div className="d-flex align-items-center justify-content-between mt-5 mx-5">
            <h1 className="text-success">All Orders List</h1>
            <div className="d-flex" style={{ width: "40%" }}>
              <input
                type="text"
                className="form-control mx-2"
                placeholder="Search Name, Email or Mobile"
                name="searchString"
                onChange={handleChange}
              />
              <select
                className="form-select w-50 mx-3"
                onChange={handleChange}
                name="status"
              >
                {filterOptions.map((item) => (
                  <option value={item === "All" ? "" : item}>{item}</option>
                ))}
              </select>
              <button className="btn btn-outline-success">Filter</button>
            </div>
          </div>
          <OrderList isLoading={isLoading} orderData={data.result} />
        </>
      )}
    </>
  );
}

export default withAdminAuth(AllOrders);
