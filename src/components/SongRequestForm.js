import React from "react";

const SongRequestForm = ({
  isChargingCustomers,
  customAmount,
  regularAmounts,
  onCustomAmountChange,
  onRegularAmountChange,
}) => {
  return (
    <div>
      <div style={{ display: "flex", padding: "10px" }}>
        <label style={subHeadStyle}>
          Do you want to charge your customers for requesting songs?
        </label>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ padding: "10px" }}>
            <input
              style={{ margin: "10px" }}
              type="radio"
              value="true"
              checked={isChargingCustomers}
              onChange={() => {}}
            />
            Yes
          </label>
          <label style={{ padding: "10px" }}>
            <input
              style={{ margin: "10px" }}
              type="radio"
              value="false"
              checked={!isChargingCustomers}
              onChange={() => {}}
            />
            No
          </label>
        </div>
      </div>
      {isChargingCustomers && (
        <>
          <div style={{ display: "flex", padding: "10px" }}>
            <label style={subHeadStyle}>Custom Song Request Amount:</label>
            <input
              style={{ ...inputStyle, width: "50%" }}
              type="number"
              value={customAmount}
              onChange={(e) => onCustomAmountChange(e.target.value)}
              min={99}
            />
          </div>
          <div style={{ display: "flex", padding: "10px" }}>
            <label style={subHeadStyle}>Regular Song Request Amounts:</label>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input
                style={{ ...inputStyle, width: "20%" }}
                type="number"
                value={regularAmounts.category_7}
                onChange={(e) =>
                  onRegularAmountChange("category_7", e.target.value)
                }
                min={79}
              />

              <input
                style={{ ...inputStyle, width: "20%" }}
                type="number"
                value={regularAmounts.category_8}
                onChange={(e) =>
                  onRegularAmountChange("category_8", e.target.value)
                }
                min={59}
              />

              <input
                style={{ ...inputStyle, width: "20%" }}
                type="number"
                value={regularAmounts.category_9}
                onChange={(e) =>
                  onRegularAmountChange("category_9", e.target.value)
                }
                min={39}
              />

              <input
                style={{ ...inputStyle, width: "20%" }}
                type="number"
                value={regularAmounts.category_10}
                onChange={(e) =>
                  onRegularAmountChange("category_10", e.target.value)
                }
                min={19}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const inputStyle = {
  padding: "5px 3px",
  borderRadius: "10px",
  border: "1px solid #ffffff",
  fontSize: "16px",
  textAlign: "center",
};

const subHeadStyle = { width: "50%", display: "flex", alignItems: "center" };

export default SongRequestForm;
