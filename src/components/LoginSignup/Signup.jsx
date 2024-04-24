import React from 'react'
import { Form, Input, Button, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./LoginSignup.css";

export const Signup = () => {
  return (
    <div role="button" tabIndex="0">
      <div className="container-login relative">
        <div className="form-container">
          <div className="form">
            <div className="container-login">
              <div className="flex justify-evenly gap-x-32">
                <Form className="container-form-login" >
                  <div className="header-wrapper">
                    <div className="login-text">ĐĂNG KÝ</div>
                  </div>
                  <Form.Item className="form-item-custom">
                    <div className="title">Họ và tên </div>
                    <Input
                      style={{ fontSize: "16px", height: "50px" }} // Tùy chỉnh kích thước của input bằng cách thay đổi fontSize và height
                      placeholder="Họ và tên "
                      name="emailOrUsername"
                    />
                  </Form.Item>
                  <Form.Item className="form-item-custom">
                    <div className="title">Tên tài khoản</div>
                    <Input
                      style={{ fontSize: "16px", height: "50px" }} // Tùy chỉnh kích thước của input bằng cách thay đổi fontSize và height
                      placeholder="Tên tài khoản "
                      name="username"
                    />
                  </Form.Item> 
                  <Form.Item className="form-item-custom">
                    <div className="title">Email</div>
                    <Input
                      style={{ fontSize: "16px", height: "50px" }} // Tùy chỉnh kích thước của input bằng cách thay đổi fontSize và height
                      placeholder="Email "
                      name="username"
                    />
                  </Form.Item>
                  <Form.Item className="form-item-custom">
                    <div className="title">Mật khẩu</div>
                    <Input
                      style={{ fontSize: "16px", height: "50px" }} // Tùy chỉnh kích thước của input bằng cách thay đổi fontSize và height
                      placeholder="Mật khẩu"
                      type="password"
                      name="password"
                    />
                  </Form.Item>
                  <Form.Item className="form-item-custom">
                    <div className="title">Nhập lại mật khẩu</div>
                    <Input
                      style={{ fontSize: "16px", height: "50px" }} // Tùy chỉnh kích thước của input bằng cách thay đổi fontSize và height
                      placeholder="Mật khẩu"
                      type="password"
                      name="password"
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    style={{
                      fontSize: "16px",
                      height: "50px",
                      fontWeight: "bold",
                    }}
                    className="font-semibold text-base h-11 w-full mb-1.2"
                    block
                    htmlType="submit"
                  >
                    Đăng ký
                  </Button>
                  <Flex
                    className="flex justify-center mt-4"
                    style={{ textAlign: "center" }}
                  >
                    <div className="text-res"> Bạn đã có tài khoản? </div>
                    <Link to="/login" className="text-router-register">
                      Đăng nhập ngay
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
}
