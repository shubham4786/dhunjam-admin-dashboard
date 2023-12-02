import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminDetails, updatePrice } from "../services/api";
import SongRequestForm from "./SongRequestForm";
import Graph from "./Graph";

const Dashboard = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState(null);
  const [customAmount, setCustomAmount] = useState(0);
  const [regularAmounts, setRegularAmounts] = useState({
    category_7: 0,
    category_8: 0,
    category_9: 0,
    category_10: 0,
  });
  const [isChargingCustomers, setIsChargingCustomers] = useState(false);

  const id = localStorage.getItem("adminId");

  const fetchAdminDetails = async () => {
    try {
      const response = await getAdminDetails(id);

      if (response.status === 200) {
        const data = response.data.data;
        setAdminData(data);
        setCustomAmount(data.amount.category_6);
        setRegularAmounts({
          category_7: data.amount.category_7,
          category_8: data.amount.category_8,
          category_9: data.amount.category_9,
          category_10: data.amount.category_10,
        });
        setIsChargingCustomers(data.charge_customers);
      } else {
        console.error("Failed to fetch admin details");
      }
    } catch (error) {
      console.error("An error occurred while fetching admin details", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAdminDetails();
    } else {
      navigate("/login");
    }
  }, [id, navigate]);

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value);
  };

  const handleRegularAmountChange = (category, value) => {
    setRegularAmounts((prevAmounts) => ({
      ...prevAmounts,
      [category]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const updatedAmounts = {
        category_6: customAmount,
        category_7: regularAmounts.category_7,
        category_8: regularAmounts.category_8,
        category_9: regularAmounts.category_9,
        category_10: regularAmounts.category_10,
      };

      const response = await updatePrice(id, { amount: updatedAmounts });

      if (response.status === 200) {
        console.log("Prices updated successfully");
        fetchAdminDetails();
      } else {
        console.error("Failed to update prices");
      }
    } catch (error) {
      console.error("An error occurred during price update", error);
    }
  };

  return (
    <div style={mainStyle}>
      <div
        style={{
          ...mainStyle,
          width: "600px",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        {adminData && (
          <>
            <h1 style={{ padding: "10px" }}>Social, Hebbal on Dhun Jam</h1>

            <SongRequestForm
              isChargingCustomers={isChargingCustomers}
              customAmount={customAmount}
              regularAmounts={regularAmounts}
              onCustomAmountChange={handleCustomAmountChange}
              onRegularAmountChange={handleRegularAmountChange}
            />
            {isChargingCustomers && (
              <Graph
                customAmount={customAmount}
                regularAmounts={regularAmounts}
              />
            )}
            <button
              style={btnStyle}
              onClick={handleSave}
              disabled={!isChargingCustomers}
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const btnStyle = {
  padding: "10px",
  width: "576px",
  borderRadius: "10px",
  fontSize: "16px",
  width: "600px",
  backgroundColor: "#6741D9",
  border: "1px solid #6741D9",
  cursor: "pointer",
  margin: "10px",
};
export default Dashboard;
