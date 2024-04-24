import React, { useEffect, useState } from "react";
import { Form, Input, Button, Flex, Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./LoginSignup.css";



export const Login = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    emailOrUsername: "",
    password: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  function handleSubmit(values) {
    console.log(values);
    axios
    .post("https://dev.mys.tinasoft.com.vn/api/v1/auth/login", post)
    .then((res) => {
      if (res.data.success) {
        navigate("/home");
        console.log(res);
        } else {
             toast.error("Login failed."); // Display error toast
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred."); // Display error toast
      });
  }
  function handleLoginResponse(response) {
    // Extract the token from the response. The exact path will depend on the response structure.
    const token = response.data.token;
  
    // Save the token to localStorage.
    localStorage.setItem("token", token);
  }


  return (
    <div role="button" tabIndex="0">
      <div className="container-login relative">
        <div className="form-container">
          <div className="form">
            <div className="container-login">
              <div className="flex justify-evenly gap-x-32">
                <Form className="container-form-login" onFinish={handleSubmit}>
                  <div className="header-wrapper">
                    <div className="login-text">Đăng nhập</div>
                    <p className="login-description">
                      Hoàn thành các thông tin chi tiết dưới đây
                    </p>
                  </div>
                  <Form.Item className="form-item-custom">
                    <div className="title">Email hoặc tên tài khoản </div>
                    <Input
                      style={{ fontSize: "16px", height: "50px" }} // Tùy chỉnh kích thước của input bằng cách thay đổi fontSize và height
                      placeholder="Email hoặc tên tài khoản "
                      name="emailOrUsername"
                      onChange={handleInput}
                    />
                  </Form.Item>
                  <Form.Item className="form-item-custom">
                    <div className="title">Mật khẩu</div>
                    <Input
                      style={{ fontSize: "16px", height: "50px" }} // Tùy chỉnh kích thước của input bằng cách thay đổi fontSize và height
                      placeholder="Mật khẩu"
                      type="password"
                      name="password"
                      onChange={handleInput}
                    />
                  </Form.Item>
                  <div className="flex items-center justify-between float-right">
                    <Button type="link" className="forgot-pass">
                      Quên mật khẩu?
                    </Button>
                  </div>
                  
                  <Button
                    type="primary"
                    style={{
                      fontSize: "16px",
                      height: "50px",
                      fontWeight: "bold",
                      backgroundColor: "blue",
                    }}
                    className="font-semibold text-base h-11 w-full mb-1.2"
                    block
                    htmlType="submit"
                    
                  >
                    Đăng nhập
                  </Button>
                  <Button type="button" className="btn-login-social">
                    <img
                      alt="google"
                      srcSet="https://tinamys.com/img/login/login/iconGoogle.svg 1x, https://tinamys.com/img/login/login/iconGoogle.svg 2x"
                      src="https://tinamys.com/img/login/login/iconGoogle.svg"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{
                        color: "transparent",
                      }}
                    />
                    <div className="ml-2">Đăng nhập với Google</div>
                  </Button>
                  <Button type="button" className="btn-login-social">
                    <img
                      alt="google"
                      srcSet="https://tinamys.com/img/login/login/iconFaceBook.svg 1x, https://tinamys.com/img/login/login/iconFaceBook.svg 2x"
                      src="https://tinamys.com/img/login/login/iconFaceBook.svg"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{
                        color: "transparent",
                      }}
                    />
                    <div className="ml-2">Đăng nhập với Facebook</div>
                  </Button>
                  <Flex
                    className="flex justify-center mt-4"
                    style={{ textAlign: "center" }}
                  >
                    <div className="text-res"> Bạn chưa có tài khoản? </div>
                    <Link to="/signup" className="text-router-register">
                      Đăng ký ngay
                    </Link>{" "}
                  </Flex>
                  <ToastContainer />
                </Form>
                <div className="text-title">
                  Mapping Your
                  <br />
                  Success
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
