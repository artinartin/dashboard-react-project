import React from "react";
import "./../css/dashboard.css";
import Chart from "react-apexcharts";

import { BsBriefcase } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import {
  ProfileImgs,
  Priority,
  ProjectName,
  Progressbar,
  Td_Hours,
  NameTd,
  RoleTd,
  LastActivityTd,
  DashboardColumn,
  NavbarColumn
} from "./reset";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  ThreePointIcon,
  DevelopmentIcon,
  TicIcon,
  RegressIcon,
} from "./icons";
import avatar1 from "../assets/avatars/avatar1.jpg";
import avatar2 from "../assets/avatars/avatar2.jpg";
import avatar3 from "../assets/avatars/avatar3.jpg";
import avatar4 from "../assets/avatars/avatar4.jpg";
import avatar5 from "../assets/avatars/avatar5.jpg";
function Dashboard() { 
  const isLogin = localStorage.getItem("isLogin");
  
  return isLogin ? (
    <>
      <div className="row">
        <DashboardColumn />
        <div
          className="col-12  col-lg-9"
          style={{ backgroundColor: "#F4F6F8" }}
        >
          <NavbarColumn />
          <div className="projectsbar">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="p-4"
            >
              <h2 className="project-title">Projects</h2>
              <button className="btn project-btn">Create New Project</button>
            </div>
          </div>

          <div className="row p-3 cardbar">
            <div className="col project-card  mx-2">
              <div className="d-flex justify-content-between">
                <h5>Projects</h5>
                <BsBriefcase className="cardIcon" />
              </div>
              <h4 className="card-number mt-2">18</h4>
              <div className="d-flex mt-3">
                <h6 className="card-completed-number">2</h6>
                <h6 className="card-completed-text mx-2">completed</h6>
              </div>
            </div>

            <div className="col project-card  mx-2">
              <div className="d-flex justify-content-between">
                <h5>Active Task</h5>
                <BsListTask
                  className="cardIcon"
                  style={{
                    color: "#0DCAF0",
                    backgroundColor: "#E7FAFE",
                  }}
                />
              </div>
              <h4 className="card-number mt-2">132</h4>
              <div className="d-flex mt-3">
                <h6 className="card-completed-number">28</h6>
                <h6 className="card-completed-text mx-2">completed</h6>
              </div>
            </div>

            <div className="col project-card  mx-2">
              <div className="d-flex justify-content-between">
                <h5>Teams</h5>
                <IoPeopleOutline
                  className="cardIcon"
                  style={{
                    color: "#DC3545",
                    backgroundColor: "#FBEBEC",
                  }}
                />
              </div>
              <h4 className="card-number mt-2">12</h4>
              <div className="d-flex mt-3">
                <h6 className="card-completed-number">1</h6>
                <h6 className="card-completed-text mx-2">completed</h6>
              </div>
            </div>

            <div className="col project-card  mx-2">
              <div className="d-flex justify-content-between">
                <h5>Productivity</h5>
                <FiTarget
                  className="cardIcon"
                  style={{
                    color: "#28A745",
                    backgroundColor: "#EAF6EC",
                  }}
                />
              </div>
              <h4 className="card-number mt-2">76%</h4>
              <div className="d-flex mt-3">
                <h6
                  className="card-completed-number"
                  style={{ color: "#28A745" }}
                >
                  5%
                </h6>
                <h6 className="card-completed-text mx-2">completed</h6>
              </div>
            </div>
          </div>

          <div className="active-projects bg-white mt-4 mx-4 rounded">
            <h5 className="active-projects-title px-3 pt-3">Active Projects</h5>
            <div className="table-responsive">
              <table className="table table-borderless" id="projectsTable">
                <thead>
                  <tr>
                    <th className="col-4 th-1 table-head">Project name</th>
                    <th className="col-2 table-head">Hours</th>
                    <th className="col-1 table-head">Priority</th>
                    <th className="col-1 table-head">Members</th>
                    <th className="col-4 table-head">Progress</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <ProjectName
                      title="File Management App"
                      element={<Icon1 />}
                    />

                    <Td_Hours />

                    <Priority
                      color="black"
                      level="Medium"
                      backgroundColor="#F59E0B"
                    />

                    <ProfileImgs />

                    <Progressbar value="15" />
                  </tr>
                  <tr>
                    <ProjectName
                      title="Slack Team UI Design"
                      element={<Icon2 />}
                    />

                    <Td_Hours />

                    <Priority
                      color="white"
                      level="Medium"
                      backgroundColor="#624BFF"
                    />

                    <ProfileImgs />

                    <Progressbar value="25" backgroundColor="#28A745" />
                  </tr>

                  <tr>
                    <ProjectName title="GitHub Satellite" element={<Icon3 />} />

                    <Td_Hours />

                    <Priority
                      color="white"
                      level="Medium"
                      backgroundColor="#28A745"
                    />

                    <ProfileImgs />

                    <Progressbar value="15" backgroundColor="#DC3545" />
                  </tr>

                  <tr>
                    <ProjectName
                      title="3D Character Modelling"
                      element={<Icon4 />}
                    />

                    <Td_Hours />

                    <Priority
                      color="white"
                      level="High"
                      backgroundColor="#DC3545"
                    />

                    <ProfileImgs />

                    <Progressbar value="15" backgroundColor="#F59E0B" />
                  </tr>

                  <tr>
                    <ProjectName
                      title="Webapp Design System"
                      element={<Icon5 />}
                    />
                    <Td_Hours />

                    <Priority
                      color="white"
                      level="High"
                      backgroundColor="#DC3545"
                    />

                    <ProfileImgs />

                    <Progressbar value="15" backgroundColor="#F59E0B" />
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center p-3">
              <a
                className="more-tr py-3"
                style={{ margin: "0px", textDecoration: "none" }}
                href="#"
              >
                View All Projects
              </a>
            </div>
          </div>

          <div className="row mx-4 mb-5">
            <div className="col-12 col-md-5 pt-3">
              <div className="bg-white rounded py-4 px-2">
                <div className="d-flex justify-content-between px-3">
                  <h5 className="chart-title">Task Performance</h5>
                  <ThreePointIcon className="" />
                </div>
                <div className="d-flex justify-content-center">
                  <Chart
                    options={{
                      colors: ["#28A745", "#F59E0B", "#DC3545"],
                      labels: ["Completed", "In-progress", "Behind"],
                    }}
                    series={[76, 78, 87]}
                    type="radialBar"
                    width="500"
                    height="280"
                  />
                </div>
                <div className="d-flex">
                  <div className="text-center" style={{ width: "33%" }}>
                    <TicIcon />
                    <h4 className="chart-percent mt-2">76%</h4>
                    <h6 className="chart-description">Completed</h6>
                  </div>
                  <div className="text-center mx-5" style={{ width: "33%" }}>
                    <DevelopmentIcon />
                    <h4 className="chart-percent mt-2">32%</h4>
                    <h6 className="chart-description">In-Progress</h6>
                  </div>
                  <div className="text-center" style={{ width: "33%" }}>
                    <RegressIcon />
                    <h4 className="chart-percent mt-2">13%</h4>
                    <h6 className="chart-description">Behind</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-7 pt-3"
              style={{ paddingLeft: "1.3rem" }}
            >
              <div className="bg-white rounded">
                <h5 className="teams-title px-4 py-4" style={{ margin: "0px" }}>
                  Teams
                </h5>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="th-1 table-head">Name</th>
                        <th className="th-1 table-head">Role</th>
                        <th className="th-1 table-head">Last Activity</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <NameTd
                          name="Jitu Chauhan"
                          email="jitu@example.com"
                          avatarSrc={avatar1}
                        />
                        <RoleTd role="Front End Developer" />
                        <LastActivityTd time="Today" />
                      </tr>
                      <tr>
                        <NameTd
                          name="Sandeep Chauhan"
                          email="sandeep@example.com"
                          avatarSrc={avatar2}
                        />
                        <RoleTd role="Project Director" />
                        <LastActivityTd time="Today" />
                      </tr>
                      <tr>
                        <NameTd
                          name="Amanda Darnell"
                          email="amanda@example.com"
                          avatarSrc={avatar3}
                        />
                        <RoleTd role="Full- Stack Developer" />
                        <LastActivityTd time="Today" />
                      </tr>
                      <tr>
                        <NameTd
                          name="Jitu Chauhan"
                          email="jitu@example.com"
                          avatarSrc={avatar4}
                        />
                        <RoleTd role="Digital Marketer" />
                        <LastActivityTd time="Yesterday" />
                      </tr>
                      <tr>
                        <NameTd
                          name="Patricia Murrill"
                          email="patricia@example.com"
                          avatarSrc={avatar5}
                        />
                        <RoleTd role="Account Manager" />
                        <LastActivityTd time="3 May, 2022" />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    window.open("/login")
  );
}

export default Dashboard;
