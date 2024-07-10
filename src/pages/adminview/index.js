import React, { useEffect, useState } from "react";

function Orders() {
  const [ordersData, setOrdersData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/getallFoodData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      console.log("Fetched orders data:", response); // Log fetched data
      setOrdersData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Orders data state:", ordersData); // Log state updates
  }, [ordersData]);

  return (
    <div className="container my-4 mx-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Food Name</th>
            <th className="py-2">Food Type</th>
            <th className="py-2">Category</th>
            <th className="py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.length > 0 ? (
            ordersData.map((data) => (
              <tr key={data._id} className="border-t">
                <td className="py-2 px-4">{data.name}</td>
                <td className="py-2 px-4">{data.foodType}</td>
                <td className="py-2 px-4">{data.category}</td>
                <td className="py-2 px-4">
                  {Object.entries(data.price).map(([size, price]) => (
                    <div key={size}>
                      {size}: ₹{price}/-
                    </div>
                  ))}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No previous Orders 😅
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
