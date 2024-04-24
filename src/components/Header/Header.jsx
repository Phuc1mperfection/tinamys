import "./Header.css";
import React, { useState, useEffect } from "react";
import { Layout, Menu,Badge, Icon, Space, Dropdown, Avatar  } from "antd";
import { toast, ToastContainer } from "react-toastify";
import MenuItem from "antd/es/menu/MenuItem";
import { BellOutlined } from "@ant-design/icons";
import logo from "../../components/assets/icon/logo.svg";
import qmark from "../../components/assets/icon/qmark.svg";
import guide from "../../components/assets/icon/guide.svg";
import background from "../../components/assets/icon/background.svg";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";

import axios from "axios";
export  const  Header = () => {
    const [value, setValue] = useState("");
    const [borderStyle, setBorderStyle] = useState("none");
    const [isExpanded, setIsExpanded] = useState(false);
    const [user, setUser] = useState(null);
    const getUserData = () => {
      axios
        .get("https://dev.mys.tinasoft.com.vn/api/v1/users/me")
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => {
          console.log("Error",err);
  
        });
    };
    useEffect(() => {
      getUserData();
    }, []);
    const items = [
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
    ];
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
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <ToastContainer />
        <div role="button" tabIndex="0">
          <div>
            <div
              className="wrapper"
              style={{
                backgroundColor: "rbga(255,255,255)",
              }}
            >
              <div className="sticky">
                <div
                  className="navbar flex items-center"
                  style={{ background: "inherit" }}
                >
                  <div className="flex items-center navbar-left">
                    <a href="/">
                      <img src={logo} alt="Logo" />
                    </a>

                    <div className="flex ml-3 mr-9 content-theme-light">
                      <div className="ml-2">
                        <div className="ant-dropdown-trigger flex justify-center items-center cursor-pointer text-theme">
                          Không gian làm việc
                          <span
                            role="img"
                            aria-label="down"
                            className="anticon anticon-down mt-1 ml-2"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="down"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center rounded-md text-sm transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#1c7fff] p-1 font-light ml-5 px-2.5">
                      Tạo nhanh
                    </button>
                  </div>

                  <div className="flex items-center justify-center navbar-right gap-x-3">
                    <div
                      className="cursor-pointer transition-all"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="ant-input-affix-wrapper border-none bg-inherit"
                        style={{
                          height: "32px",
                          width: isExpanded ? "200px" : "32px",
                          transition: "width 0.3s",
                          border: borderStyle,
                          borderRadius: "5px",
                        }}
                      >
                        <span className="ant-input-prefix">
                          <span
                            role="img"
                            aria-label="search"
                            className="anticon anticon-search text-xl mb-[4px] ml-[6px]"
                            style={{ color: "rgb(36, 36, 36)" }}
                            onClick={() => {
                              setIsExpanded(!isExpanded);
                              setBorderStyle(
                                isExpanded ? "none" : "1px solid blue"
                              );
                            }}
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="search"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                            </svg>
                          </span>
                        </span>
                        <input
                          placeholder="Tìm kiếm"
                          className="ant-input"
                          type="text"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          style={{ display: isExpanded ? "block" : "none" }}
                        />
                      </span>
                    </div>
                    <button
                      type="button"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={guide} alt="guide" />
                    </button>
                    <span>
                      <Badge count={1}>
                        <BellOutlined
                          style={{ fontSize: "20px", paddingBottom: "10px" }}
                        />
                      </Badge>
                    </span>
                    <button
                      type="button"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={qmark} alt="qmark" />
                    </button>
                    <button
                      type="button"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={background} alt="background" />
                    </button>

                    <Dropdown overlay={menu}>
                      <Avatar src={user && user.avatar} />
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
