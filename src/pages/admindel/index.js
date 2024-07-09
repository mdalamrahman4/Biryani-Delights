import React, { useEffect, useState } from "react";
import Custom404 from "../404";
import { useRouter } from "next/router";

const sidesPriceOption = { Single: "", Double: "" };
const kebabPriceOption = { "1pc": "", "2pc": "" };
const kormaPriceOption = { "250gm": "", "500gm": "" };
const biryaniPriceOption = { HALF_PLATE: "", FULL_PLATE: "" };

function Admin() {
  const [mounted, setMounted] = useState(false);
  const [foodData, setFoodData] = useState({
    name: "",
    category: "",
    foodType: "",
    price: "",
    description: "",
    img: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFoodData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
    if (e.target.name === "category") {
      if (e.target.value === "BIRYANI") {
        setFoodData((prevData) => {
          return { ...prevData, price: biryaniPriceOption };
        });
      } else if (e.target.value === "KEBAB") {
        setFoodData((prevData) => {
          return { ...prevData, price: kebabPriceOption };
        });
      } else if (e.target.value === "KORMA AND CURRIES") {
        setFoodData((prevData) => {
          return { ...prevData, price: kormaPriceOption };
        });
      } else if (e.target.value === "SIDES & BEVERAGES") {
        setFoodData((prevData) => {
          return { ...prevData, price: sidesPriceOption };
        });
      } else {
        setFoodData((prevData) => {
          return { ...prevData, price: e.target.value };
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("api/createFoodData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodData),
    });
    const result = await response.json();
    if (result.success) {
      alert("Food data created successfully");
    } else {
      alert("Failed to create");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      const response = await fetch(`/api/deleteFoodData?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        alert("Food data deleted successfully");
        router.reload(); // Reload the page or update state as needed
      } else {
        alert("Failed to delete");
      }
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isAdmin")) === true) {
      setMounted(true);
    }
  }, []);

  return (
    <>
      {mounted ? (
        <div
          style={{
            minHeight: "90vh",
            overflowY: "scroll",
            backgroundImage:
              'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize: "cover",
          }}
          className=" flex py-10 justify-center content-center items-center"
        >
          <div className=" container w-full max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
            >
              {/* Form fields here */}
            </form>
          </div>
        </div>
      ) : (
        <Custom404 />
      )}
    </>
  );
}

export default Admin;
