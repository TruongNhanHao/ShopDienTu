import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { DarkModeContext } from "../context/darkModeContext";
export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <SideBarStyled>
      <Wrapper>
        <div>
          <h3>NHANHAO</h3>
          <ul>
            <NavLink to="/" className="link">
              <li>
                <LineStyle className="icon" />
                Home
              </li>
            </NavLink>
            <NavLink to="/analytics" className="link">
              <li>
                <Timeline className="icon" />
                Analytics
              </li>
            </NavLink>
            <li>
              <DashboardIcon className="icon" />
              Dashboard
            </li>
            <li>
              <TrendingUp className="icon" />
              Sales
            </li>
            <li>
              <AttachMoney className="icon" />
              Transactions
            </li>
            <li>
              <BarChart className="icon" />
              Reports
            </li>
          </ul>
        </div>
        <div>
          <h3>LISTS</h3>
          <ul>
            <NavLink to="/users" className="link">
              <li>
                <PermIdentity className="icon" />
                Users
              </li>
            </NavLink>
            <NavLink to="/products" className="link">
              <li>
                <StoreIcon className="icon" />
                Products
              </li>
            </NavLink>
            <NavLink to="/orders" className="link">
              <li>
                <CreditCardIcon className="icon" />
                Orders
              </li>
            </NavLink>

            <li>
              <LocalShippingIcon className="icon" />
              Delivery
            </li>
          </ul>
        </div>
        <div>
          <h3>Notifications</h3>
          <ul>
            <li>
              <MailOutline className="icon" />
              Mail
            </li>
            <li>
              <DynamicFeed className="icon" />
              Feedback
            </li>
            <li>
              <ChatBubbleOutline className="icon" />
              Messages
            </li>
          </ul>
        </div>
        <div>
          <h3>Staff</h3>
          <ul>
            <NavLink to="/" className="link">
              <li>
                <WorkOutline className="icon" />
                Manage
              </li>
            </NavLink>
            <li>
              <Timeline className="icon" />
              Analytics
            </li>
            <li>
              <Report className="icon" />
              Reports
            </li>
          </ul>
        </div>
        <div>
          <h3>SERVICE</h3>
          <ul>
            <NavLink to="/" className="link">
              <li>
                <PsychologyOutlinedIcon className="icon" />
                Logs
              </li>
            </NavLink>
            <li>
              <SettingsApplicationsIcon className="icon" />
              Settings
            </li>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              System Health
            </li>
          </ul>
        </div>
        <div>
          <h3>USER</h3>
          <ul>
            <NavLink to="/" className="link">
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                Profile
              </li>
            </NavLink>
            <li>
              <ExitToAppIcon className="icon" />
              Logout
            </li>
          </ul>
        </div>
      </Wrapper>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </SideBarStyled>
  );
};
const SideBarStyled = styled.div`
  top: 50px;
  border-right: 0.5px solid rgb(230, 227, 227);
  div {
    .colorOption {
      display: flex;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #7451f8;
      cursor: pointer;
      margin: 5px;
      &:nth-child(1) {
        background-color: whitesmoke;
      }
      &:nth-child(2) {
        background-color: #333;
      }
      &:nth-child(3) {
        background-color: darkblue;
      }
    }
  }
`;
const Wrapper = styled.div`
  /* background-color: white; */
  padding: 20px;
  color: #555;
  h3 {
    font-size: 13px;
    color: rgb(187, 186, 186);
  }
  ul {
    list-style: none;
    padding: 5px;
    .link {
      text-decoration: none;
      color: #555;
    }
    li {
      /* width: 200px; */
      padding: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      border-radius: 10px;
      .icon {
        font-size: 18px;
        color: teal;
      }
    }
    li:hover {
      background-color: rgb(240, 240, 255);
    }
    .icon {
      margin-right: 5px;
      font-size: 20px !important;
    }
  }
`;
