// Graph.js

import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Graph = ({ customAmount, regularAmounts }) => {
  const totalRegularAmounts =
    regularAmounts.category_7 +
    regularAmounts.category_8 +
    regularAmounts.category_9 +
    regularAmounts.category_10;

  return (
    <div style={{ display: "flex", margin: "20px 10px" }}>
      <h2>
        <CurrencyRupeeIcon />
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "550px",
        }}
      >
        <div>
          <div
            style={{
              height: customAmount,
              width: "50px",
              backgroundColor: "#F0C3F1",
              margin: "0 10px",
            }}
          />
          <p>Custom</p>
        </div>
        <div>
          <div
            style={{
              height:
                (regularAmounts.category_7 / totalRegularAmounts) * 100 + "px",
              width: "50px",
              backgroundColor: "#F0C3F1",
              margin: "0 10px",
            }}
          />
          <p>Category1</p>
        </div>
        <div>
          <div
            style={{
              height:
                (regularAmounts.category_8 / totalRegularAmounts) * 100 + "px",
              width: "50px",
              backgroundColor: "#F0C3F1",
              margin: "0 10px",
            }}
          />
          <p>Category2</p>
        </div>
        <div>
          <div
            style={{
              height:
                (regularAmounts.category_9 / totalRegularAmounts) * 100 + "px",
              width: "50px",
              backgroundColor: "#F0C3F1",
              margin: "0 10px",
            }}
          />
          <p>Category3</p>
        </div>
        <div>
          <div
            style={{
              height:
                (regularAmounts.category_10 / totalRegularAmounts) * 100 + "px",
              width: "50px",
              backgroundColor: "#F0C3F1",
              margin: "0 10px",
            }}
          />
          <p>Category4</p>
        </div>
      </div>
    </div>
  );
};

export default Graph;
