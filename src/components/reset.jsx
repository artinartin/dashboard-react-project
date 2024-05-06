// import profileImg2 from "../assets/profile3.png";
// import profileImg3 from "../assets/profile2.jpg";
// import "./../css/dashboard.css";
// import "./../css/account.css";

// import { TdIcon } from "./icons";
// import { PiHouse } from "react-icons/pi";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { LiaBuffer } from "react-icons/lia";
// import { FiLock } from "react-icons/fi";
// import { BsTable } from "react-icons/bs";
// import { MDBCollapse } from "mdb-react-ui-kit";
// import { LayoutsIcon } from "./icons";
// import { useContext } from "react";
// import DashboardContext from "./dashboardContext";
// export let formTitle = "DashUI";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import {
//   EnvelopeOpenIcon,
//   PhoneIcon,
//   SlackIcon,
// } from "./icons";
// let context;
// const search = () => {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("searchbar");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("projectsTable");
//   tr = table.getElementsByTagName("tr");

//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) tr[i].style.display = "";
//       else tr[i].style.display = "none";
//     }
//   }
// };
// function Reset() {}
// export function ProfileImgs() {
//   context = useContext(DashboardContext);
//   return (
//     <td>
//       <div className="d-flex justify-content-center   align-items-center td-div">
//         <img
//           src={context.avatarImg}
//           alt=""
//           className="table-member-img"
//           style={{ left: "15px" }}
//         />
//         <img
//           src={profileImg2}
//           alt=""
//           className="table-member-img"
//           style={{ left: "5px" }}
//         />
//         <img
//           src={profileImg3}
//           alt=""
//           className="table-member-img"
//           style={{ left: "-5px" }}
//         />
//         <span
//           className="table-member-span d-flex align-item-center justify-content-center"
//           style={{ left: "-15px", padding: "5px" }}
//         >
//           +5
//         </span>
//       </div>
//     </td>
//   );
// }
// export function Priority({ color, level, backgroundColor }) {
//   return (
//     <td>
//       <div className="d-flex align-items-center td-div justify-content-center">
//         <h6
//           className="table-priority"
//           style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
//         >
//           {level}
//         </h6>
//       </div>
//     </td>
//   );
// }
// export function ProjectName({ title, element }) {
//   return (
//     <td>
//       <div className="d-flex align-items-center td-div">
//         {element}
//         <h5 className="table-project-name mx-2" style={{ margin: "0px" }}>
//           {title}
//         </h5>
//       </div>
//     </td>
//   );
// }

// export function Progressbar({ value, backgroundColor }) {
//   return (
//     <td>
//       <div className="row justify-content-center align-items-center td-div">
//         <div className="col-2 d-flex justify-content-center ">
//           <h6 className="table-progress-label">{value}%</h6>
//         </div>
//         <div className="col-10">
//           <div
//             className="progress"
//             role="progressbar"
//             aria-valuenow={value}
//             aria-valuemin="0"
//             aria-valuemax="100"
//             style={{ height: "4px" }}
//           >
//             <div
//               className="progress-bar rounded"
//               style={{
//                 width: `${value}%`,
//                 backgroundColor: `${backgroundColor}`,
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </td>
//   );
// }

// export function Td_Hours() {
//   return (
//     <td>
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{
//           height: "50px",
//         }}
//       >
//         <h6 style={{ margin: "0px" }}>34</h6>
//       </div>
//     </td>
//   );
// }

// export function NameTd({ name, email, avatarSrc }) {
//   return (
//     <td>
//       <div className="d-flex align-items-center">
//         <img className="teams-table-avatar" src={avatarSrc} />
//         <div style={{ marginLeft: "0.8rem" }}>
//           <h6 className="teams-table-name">{name}</h6>
//           <h6 className="teams-table-email">{email}</h6>
//         </div>
//       </div>
//     </td>
//   );
// }
// export function RoleTd({ role }) {
//   return (
//     <td>
//       <div
//         className="d-flex  align-items-center"
//         style={{
//           height: "50px",
//         }}
//       >
//         <h4 className="teams-table-text" style={{ margin: "0px" }}>
//           {role}
//         </h4>
//       </div>
//     </td>
//   );
// }
// export function LastActivityTd({ time }) {
//   return (
//     <td>
//       <div
//         className="d-flex justify-content-between align-items-center"
//         style={{
//           height: "50px",
//         }}
//       >
//         <h4 className="teams-table-text" style={{ margin: "0px" }}>
//           {time}
//         </h4>
//         <TdIcon />
//       </div>
//     </td>
//   );
// }
// export function DashboardColumn() {
//   context = useContext(DashboardContext);

//   return (
//     <>
//       <div className="col-12 col-lg-3  left-side">
//         <h2 className="header m-4 mb-5">Dash UI</h2>

//         <div>
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <PiHouse className="homeIcon" />
//               <h4 className="dashboardTitle" style={{ color: "white" }}>
//                 Dashboard
//               </h4>
//             </div>
//             <RiArrowDropDownLine
//               className="dropdown"
//               onClick={context.toggleOpenA}
//             />
//           </div>
//           <MDBCollapse open={context.isOpenA} className="w-100 mx-4">
//             <h4 className="dashboardSubtitle">
//               <span>&#8226;&#160;&#160;</span>Projects
//             </h4>
//           </MDBCollapse>
//         </div>

//         <h2 className="dashboardHeader">Layouts & Pages</h2>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <LiaBuffer className="bufferIcon" />
//               <h4 className="dashboardTitle">Pages</h4>
//             </div>
//             <RiArrowDropDownLine
//               className="dropdown"
//               onClick={context.toggleOpenB}
//             />
//           </div>
//           <MDBCollapse open={context.isOpenB} className="w-100 mx-4">
//             <h4 className="dashboardSubtitle">
//               <span>&#8226;&#160;&#160;</span>Profile
//             </h4>
//             <h4 className="dashboardSubtitle">
//               <span>&#8226;&#160;&#160;</span>Accounts
//             </h4>
//             <h4 className="dashboardSubtitle">
//               <span>&#8226;&#160;&#160;</span>Invoice
//             </h4>
//           </MDBCollapse>
//         </div>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <FiLock className="homeIcon" />
//               <h4 className="dashboardTitle">Authentication</h4>
//             </div>
//             <RiArrowDropDownLine className="dropdown" />
//           </div>
//         </div>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <LayoutsIcon />
//               <h4 className="dashboardTitle">Layouts</h4>
//             </div>
//             <RiArrowDropDownLine className="dropdown" />
//           </div>
//         </div>

//         <h2 className="dashboardHeader">UI Components</h2>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <LiaBuffer className="bufferIcon" />
//               <h4 className="dashboardTitle">Cards</h4>
//             </div>
//           </div>
//         </div>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <BsTable className="tableIcon" />
//               <h4 className="dashboardTitle">Tables</h4>
//             </div>
//           </div>
//         </div>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <LiaBuffer className="bufferIcon" />
//               <h4 className="dashboardTitle">Components</h4>
//             </div>
//             <RiArrowDropDownLine className="dropdown" />
//           </div>
//         </div>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <LiaBuffer className="bufferIcon" />
//               <h4 className="dashboardTitle">Tables</h4>
//             </div>
//             <RiArrowDropDownLine className="dropdown" />
//           </div>
//         </div>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <LiaBuffer className="bufferIcon" />
//               <h4 className="dashboardTitle">Utilities</h4>
//             </div>
//             <RiArrowDropDownLine className="dropdown" />
//           </div>
//         </div>

//         <div className="mt-3">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <LiaBuffer className="bufferIcon" />
//               <h4 className="dashboardTitle">Components</h4>
//             </div>
//             <RiArrowDropDownLine className="dropdown" />
//           </div>
//         </div>

//         <div className="mt-3 mb-4">
//           <div className="d-flex align-items-center mx-4 justify-content-between">
//             <div className="d-flex align-items-center">
//               <PiHouse className="homeIcon" />
//               <h4 className="dashboardTitle">
//                 Documentation
//                 <span className="mx-2 cBadge">new</span>
//               </h4>
//             </div>
//             <RiArrowDropDownLine className="dropdown" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export function NavbarColumn() {
//   context = useContext(DashboardContext);
//   return (
//     <>
//       <div className="navbar d-flex bg-white">
//         <input
//           id="searchbar"
//           type="text"
//           className="searchbar"
//           placeholder="Search"
//           onKeyUp={search}
//         />
//         <div>
//           <IoMdNotificationsOutline className="notificationIcon" />
//           <span className="counter p-2">4</span>
//           <img src={context.avatarImg} alt="" className="profile-image" />
//         </div>
//       </div>
//     </>
//   );
// }

// export function CardHeader({ header, description, haveLink }) {
//   return (
//     <>
//       <h4 className="card-header">{header}</h4>
//       <h6 className="card-description mt-3">
//         {description + " "}
//         {haveLink && (
//           <span style={{ color: "#624BFF" }}>dashprops@example.com</span>
//         )}
//       </h6>
//       <hr className="gray-line" />
//     </>
//   );
// }

// export function FormInput({
//   label,
//   placeholder,
//   id,
//   optional,
//   justInput,
//   marginTop,
//   marginLeft,
// }) {
//   return !justInput ? (
//     <>
//       <div className="sub-setting mt-4">
//         <h4 className="card-subheader " style={{ margin: "0px" }}>
//           {label + " "}{" "}
//           {optional && <span style={{ color: "#919EAB" }}>(Optional)</span>}
//         </h4>
//         <input
//           className="form-control py-2 px-3 "
//           placeholder={placeholder}
//           id={id}
//           style={{ width: "38rem" }}
//           autoComplete="on"
//         />
//       </div>
//     </>
//   ) : (
//     <input
//       className="form-control py-2 px-3"
//       placeholder={placeholder}
//       id={id}
//       style={{
//         width: "38rem",
//         marginTop: `${marginTop}`,
//         marginLeft: `${marginLeft}`,
//       }}
//       autoComplete="on"
//     />
//   );
// }
// export function SelectInput({
//   id,
//   placeholder,
//   options,
//   justInput,
//   label,
//   width,
// }) {
//   const selectLocation = (event) => {
//     let selectElement = event.target;
//     selectElement.style.color = "black";
//   };
//   return !justInput ? (
//     <>
//       <div className="sub-setting mt-4">
//         <h4 className="card-subheader " style={{ margin: "0px" }}>
//           {label}
//         </h4>
//         <select
//           className="form-select py-2 px-3"
//           id={id}
//           onChange={(event) => {
//             selectLocation(event);
//           }}
//           style={{ width: `${width}`, color: "#919EAB" }}
//           defaultValue="default"
//         >
//           <option disabled value="default">
//             {placeholder}
//           </option>
//           {options.map((item, key) => (
//             <option value={key} className="gray-option" key={key}>
//               {item}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   ) : (
//     <select
//       className="form-select py-2 px-3"
//       id={id}
//       onChange={(event) => {
//         selectLocation(event);
//       }}
//       style={{ width: `${width}`, color: "#919EAB" }}
//       defaultValue="default"
//     >
//       <option disabled value="default">
//         {placeholder}
//       </option>
//       {options.map((item, key) => (
//         <option value={key} className="gray-option" key={key}>
//           {item}
//         </option>
//       ))}
//     </select>
//   );
// }
// export function RadioBoxInput({ label, name, items }) {
//   context = useContext(DashboardContext);
//   return (
//     <>
//       <div className="sub-setting mt-4">
//         <h4 className="card-subheader " style={{ margin: "0px" }}>
//           {label}
//         </h4>
//         {items.map((item, key) => (
//           <div className="form-check" key={key}>
//             <input
//               className="form-check-input"
//               type="radio"
//               name={name}
//               id={item.id}
//               onChange={context.changeDefault}
//             />
//             <label
//               className="form-check-label"
//               htmlFor={item.id}
//               style={{ marginLeft: "0.5rem", marginRight: "1.5rem" }}
//             >
//               {item.text}
//             </label>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// export function CheckboxInput({ label, name, items }) {
//   return (
//     <>
//       <div className="sub-setting mt-4 align-items-start">
//         <h4 className="card-subheader " style={{ margin: "0px" }}>
//           {label}
//         </h4>
//         <div className="d-block">
//           {items.map((item, key) => (
//             <div className="form-check" key={key}>
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 name={name}
//                 id={item.id}
//               />
//               <label
//                 className="form-check-label"
//                 htmlFor={item.id}
//                 style={{ marginBottom: "1rem", marginRight: "1.5rem" }}
//               >
//                 {item.text}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
// export function SaveChangesButton({ onClick }) {
//   return (
//     <button className="btn save-changes-btn mt-4 py-2 px-3" onClick={onClick}>
//       Save Changes
//     </button>
//   );
// }
// export function CodeInput({ number, handleChange, handleKeyUp }) {
//   return (
//     <input
//       id={number}
//       className="code-input"
//       onChange={() => {
//         handleChange(number);
//       }}
//       onKeyUp={(e) => {
//         handleKeyUp(e, number);
//       }}
//       maxLength="1"
//     />
//   );
// }
// export function AccountTableBrowserTd({ element, title }) {
//   return (
//     <>
//       <td>
//         <div className="d-flex align-itmes-center">
//           {element}
//           <h4
//             className="account-table-browser-name mx-2"
//             style={{ margin: "0px" }}
//           >
//             {title}
//           </h4>
//         </div>
//       </td>
//     </>
//   );
// }

// export function AccountTableTextTd({ title }) {
//   return (
//     <td>
//       <h4 className="account-table-browser-name">{title}</h4>
//     </td>
//   );
// }

// export function NotificationTableCheckboxTr({
//   title,
//   handleChange,
//   groupSize,
//   groupNumber,
//   states,
// }) {
//   const ids = [];
//   let counter=1;
//   for (let index = 1; index <= 3; index++) {
//     if (states[index - 1] == 0) ids[index] = "empty";
//     else {
//       ids[index] = "checkbox-" + groupNumber + counter;
//       counter++;
//   }
// }
//   return (
//     <>
//       <tr>
//         <td>
//           <h4 className="notification-table-activity mt-2">{title}</h4>
//         </td>
//         {ids.map((id, index) =>
//           id == "empty" ? (
//             <td key={index}>
//               <hr className="empty-td" />
//             </td>
//           ) : (
//             <td key={index}>
//               <input
//                 id={id}
//                 className="form-check-input mt-2"
//                 type="checkbox"
//                 onChange={() => {
//                   handleChange(index, groupNumber, groupSize);
//                 }}
//               />
//             </td>
//           )
//         )}
//       </tr>
//     </>
//   );
// }
// export function NotificationTableCheckboxThead({ title }) {
//   return (
//     <thead>
//       <tr>
//         <th className="table-head2 col-8 left-th">{title}</th>
//         <th className="table-head2 col-1">
//           <PhoneIcon />
//         </th>
//         <th className="table-head2 col-1">
//           <SlackIcon />
//         </th>
//         <th className="table-head2 col-2 right-th">
//           <EnvelopeOpenIcon />
//         </th>
//       </tr>
//     </thead>
//   );
// }
// export default Reset;
