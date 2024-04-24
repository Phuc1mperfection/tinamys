import React from "react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Badge, Icon, Space, Dropdown } from "antd";
import "./Home.css";
import { BellOutlined } from "@ant-design/icons";
import logo from "../components/assets/icon/logo.svg";
import qmark from "../components/assets/icon/qmark.svg";
import guide from "../components/assets/icon/guide.svg";
import background from "../components/assets/icon/background.svg";
import axios from "axios";
import { DownOutlined } from "@ant-design/icons";
import { Header } from "../components/Header/Header";

export const Home = () => {
  const [value, setValue] = useState("");
  const [borderStyle, setBorderStyle] = useState("none");
  const [isExpanded, setIsExpanded] = useState(false);

  const [hasShownToast, setHasShownToast] = useState(
    localStorage.getItem("hasShownToast") === "true"
  );
  useEffect(() => {
    if (!hasShownToast) {
      toast.success("Login successful!");
      setHasShownToast(true);
      localStorage.setItem("hasShownToast", "true");
    }
  }, [hasShownToast]);

  return (
    <div>
      <ToastContainer />
      <Header />
      <div role="button" tabIndex="0">
        
      </div>
    </div>
  );
};
