import React from "react";
import { Button } from "@mui/material";
import { FilterStyle } from "./FilterContinents.styled";

export default function FilterContinents({ continent, setContinent }) {
  const ActiveButtonStyle = {
    background: "#1e1536",
    color: "#ebffeb",
    border: "1px solid #ebffeb",
    borderRadius: "20px",
  };

  const InactiveButtonStyle = {
    background: "#ebffeb",
    color: "#1e1536",
    border: "1px solid #1e1536",
    borderRadius: "20px",
  };

  return (
    <FilterStyle>
      <Button
        variant="outlined"
        onClick={() => setContinent("All")}
        style={continent === "All" ? ActiveButtonStyle : InactiveButtonStyle}
      >
        All
      </Button>
      <Button
        variant="outlined"
        onClick={() => setContinent("Europe")}
        style={continent === "Europe" ? ActiveButtonStyle : InactiveButtonStyle}
      >
        Europe
      </Button>
      <Button
        variant="outlined"
        onClick={() => setContinent("Asia")}
        style={continent === "Asia" ? ActiveButtonStyle : InactiveButtonStyle}
      >
        Asia
      </Button>
      <Button
        variant="outlined"
        onClick={() => setContinent("North America")}
        style={
          continent === "North America"
            ? ActiveButtonStyle
            : InactiveButtonStyle
        }
      >
        North America
      </Button>
      <Button
        variant="outlined"
        onClick={() => setContinent("South America")}
        style={
          continent === "South America"
            ? ActiveButtonStyle
            : InactiveButtonStyle
        }
      >
        South America
      </Button>
    </FilterStyle>
  );
}
