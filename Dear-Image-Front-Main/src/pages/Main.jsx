import React from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return <Home />;
}
