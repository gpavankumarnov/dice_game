import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';






const Sidebar = () => {
  const SidebarSection = styled.section`
    flex: 0.75;
    background-color: rgb(251, 251, 255);
    gap: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  `;

  const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
 & > ul li{
    list-style-type: none;
    padding: 5px;
    cursor:pointer;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border-radius: 10px;
 };

 & >ul li:hover {
background-color: rgb(228, 228, 250);
 }

  `


const Title = styled.h3`
font-size: 1rem;
color: rgb(187,186,186);
`

  return (
    <SidebarSection>
      <SidebarMenu>
        <Title>Dashboard</Title>
        <ul>
          <li>
            <LineStyleIcon /> Home
          </li>
          <li>
            <TimelineIcon /> Analytics
          </li>
          <li>
            <TrendingUpIcon /> Sales
          </li>
        </ul>
      </SidebarMenu>
      <SidebarMenu>
        <Title>Quick Menu</Title>
        <ul>
          <li >
            <PermIdentityIcon /> Users
          </li>
          <li>
            <StorefrontIcon /> Products
          </li>
          <li>
            <AttachMoneyIcon /> Transactions
          </li>
          <li>
            <BarChartIcon /> Reports
          </li>
        </ul>
      </SidebarMenu>
      <SidebarMenu>
        <Title>Notifications</Title>
        <ul>
          <li>
            <MailOutlineIcon /> Mail
          </li>
          <li>
            <DynamicFeedIcon /> Feedback
          </li>
          <li>
            <ChatBubbleOutlineIcon /> Messages
          </li>
        </ul>
      </SidebarMenu>
      <SidebarMenu>
        <Title>Staff</Title>
        <ul>
          <li>
            <WorkOutlineIcon /> Manage
          </li>
          <li>
            <TimelineIcon /> Analytics
          </li>
                 <li>
            <ReportIcon /> Reports
          </li>
        </ul>
      </SidebarMenu>
    </SidebarSection>
  );
};

export default Sidebar;
