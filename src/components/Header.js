import React, { useEffect, useState } from "react";
import { Image, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import avatar from "../assets/avatar.png";
import logo from "../assets/logo.png";
import { logout } from "../redux/user/actions";

export default function Header() {
  const [navAvatar, setNavAvatar] = useState(false);

  const login = useSelector((state) => state.login);
  const { userInfo } = login || {};
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === "/dashboard" && userInfo) {
      setNavAvatar(true);
    }
  }, [pathname, setNavAvatar, userInfo]);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout);
    setNavAvatar(false);
  };
  return (
    <div
      style={{
        display: navAvatar ? "flex" : "",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="bg-slate-100 shadow-md"
        style={{
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
          <Link to="/">
            <Image
              className="h-10"
              src={logo}
              alt="Valley Hatghery"
              style={{ width: "300px", height: "100px" }}
            />
          </Link>
        </div>
      </div>
      {navAvatar && (
        <div style={{ paddingRight: "25px" }}>
          <Navbar>
            <NavDropdown
              title={
                <div className="mx-3">
                  <img
                    className="thumbnail-image"
                    src={avatar}
                    alt="user pic"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  Admin
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                <i className="fa fa-sign-out"></i> Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar>
        </div>
      )}
    </div>
  );
}
