// import React from "react";
// import "./../css/account.css";
// import {
//   AccountTableBrowserTd,
//   AccountTableTextTd,
//   CardHeader,
//   CheckboxInput,
//   CodeInput,
//   DashboardColumn,
//   FormInput,
//   NavbarColumn,
//   NotificationTableCheckboxThead,
//   NotificationTableCheckboxTr,
//   RadioBoxInput,
//   SaveChangesButton,
//   SelectInput,
// } from "./reset";
// import profileImg from "../assets/profile.jpg";
// import noProfileImg from "../assets/no-profile.jpg";
// import { useContext } from "react";
// import DashboardContext from "./dashboardContext";
// import { BraveIcon, ChromeIcon, ImageIcon, MozillaIcon } from "./icons";
// import { useState } from "react";
// function Account() {
//   const isLogin = localStorage.getItem("isLogin");
//   const context = useContext(DashboardContext);
//   const [focused, setfocused] = useState(false);
//   const [value, setvalue] = useState(["0", "0", "0", "0", "0", "0"]);
//   const removeAvatar = () => {
//     // context.avatarImg = noProfileImg;
//   };
//   const saveBasicInformation = () => {
//     console.log("saved");
//   };
//   const changeEmail = () => {
//     console.log("change email");
//   };
//   const changePassword = () => {
//     console.log("change password");
//   };
//   const handleKeyUp = (e, index) => {
//     if (e.key === "Backspace") {
//       value[index] = "0";
//       if (index != 0) {
//         document.getElementById(index - 1).focus();
//         value[index - 1] = "0";
//         document.getElementById(index - 1).value = "";
//       }
//       setvalue(value);
//     }
//   };
//   const notificationStates = [
//     [false, false, false],
//     [false, false, false],
//     [false, false, false],
//     [false, false, false],
//     [false, false, false],

//   ];
//   const handleChange = (index) => {
//     value[index] = document.getElementById(index).value;
//     if (index != 5) document.getElementById(Number(index) + 1).focus();
//     setvalue(value);
//   };
//   const handleNotificationChange = (itemNumber, groupNumber, groupSize) => {
//     console.log(itemNumber);
//     console.log(notificationStates);
//     let element = document.getElementById(
//       "checkbox-" + groupNumber + itemNumber
//     );
//     notificationStates[groupNumber - 1][itemNumber - 1] =
//       !notificationStates[groupNumber - 1][itemNumber - 1];
//     for (let index = 1; index <= groupSize; index++) {
//       console.log(index);
//       const item = document.getElementById("checkbox-" + groupNumber + index);
//       if (item != element) {
//         notificationStates[groupNumber - 1][index - 1] = false;
//         item.checked = false;
//       }
//     }
//   };
//   const removeFadeOut = () => {
//     const element = document.getElementById("notificationAlert");
//     element.style.transition = "opacity 0.4s ease";
//     element.style.opacity = 0;
//     setTimeout(function () {
//       element.remove();
//     }, 400);
//   };

//   return isLogin ? (
//     <>
//       <div className="row">
//         <DashboardColumn />
//         <div
//           className="col-12  col-lg-9"
//           style={{ backgroundColor: "#F4F6F8" }}
//         >
//           <NavbarColumn />
//           <div className="d-flex justify-content-between p-4 align-items-center">
//             <h4 className="account-header ">Account</h4>
//             <button className="btn account-btn">My Profile</button>
//           </div>
//           <hr className="gray-line mx-4" />

//           <div className="bg-white mt-4 mx-4 rounded p-4">
//             <CardHeader
//               header="General Settings"
//               description="Your current Primary email address is"
//               haveLink={true}
//             />

//             <div className="sub-setting py-4">
//               <h4 className="card-subheader " style={{ margin: "0px" }}>
//                 Avatar
//               </h4>
//               <div>
//                 <img src={profileImg} alt="" className="avatar-image" />
//                 <button className="btn avatar-btn ">Change</button>
//                 <button className="btn avatar-btn mx-2" onClick={removeAvatar}>
//                   Remove
//                 </button>
//               </div>
//             </div>

//             <div className="sub-setting py-4 align-items-start">
//               <h4 className="card-subheader " style={{ margin: "0px" }}>
//                 Cover photo
//               </h4>
//               <div className="d-block">
//                 <div className="drag-image-box py-4">
//                   <ImageIcon />
//                   <div className="drag-image-box-text pt-2">
//                     Drag image here. or{" "}
//                     <a className="drag-image-box-link" href="#">
//                       Browse Files
//                     </a>
//                   </div>
//                 </div>
//                 <button className="btn avatar-btn mt-3">Change</button>
//               </div>
//             </div>
//             <CardHeader
//               header="Basic information"
//               description="Update some personal information. Your address will never be
//               publicly available."
//               haveLink={false}
//             />

//             <div className="sub-setting mt-4">
//               <h4 className="card-subheader " style={{ margin: "0px" }}>
//                 Full name
//               </h4>
//               <div className="d-flex">
//                 <input
//                   type="text"
//                   className="form-control py-2 px-3 "
//                   placeholder="First Name"
//                   id="firstName"
//                   style={{ width: "18.5rem" }}
//                 />
//                 <input
//                   type="text"
//                   className="form-control py-2 px-3"
//                   placeholder="Last Name"
//                   id="lastName"
//                   style={{ width: "18.5rem", marginLeft: "1rem" }}
//                 />
//               </div>
//             </div>

//             <FormInput
//               id="email"
//               label="Email"
//               placeholder="Email"
//               optional={false}
//             />

//             <FormInput
//               id="phone"
//               label="Phone"
//               placeholder="Phone"
//               optional={true}
//             />

//             <div className="sub-setting mt-4 align-items-start">
//               <h4 className="card-subheader " style={{ margin: "0px" }}>
//                 Location
//               </h4>

//               <div className="d-block">
//                 <SelectInput
//                   id="locationSelect"
//                   placeholder="Select Country"
//                   options={["USA", "United Kingdom", "Italy"]}
//                   justInput={true}
//                   width="38rem"
//                 />

//                 <FormInput
//                   id="city"
//                   placeholder="City"
//                   justInput={true}
//                   marginTop="1rem"
//                 />
//                 <FormInput
//                   id="state"
//                   placeholder="State"
//                   justInput={true}
//                   marginTop="1rem"
//                 />
//               </div>
//             </div>
//             <FormInput
//               id="address1"
//               label="Address line 1"
//               placeholder="Address Line 1"
//               optional={false}
//             />

//             <FormInput
//               id="address2"
//               label="Address line 2"
//               placeholder="Address Line 2"
//               optional={true}
//             />
//             <FormInput
//               id="zipCode"
//               label="Zip code"
//               placeholder="Zip Code"
//               optional={false}
//             />

//             <SaveChangesButton onClick={saveBasicInformation} />
//           </div>

//           <div className="bg-white mt-4 mx-4 rounded p-4">
//             <CardHeader
//               header="Email"
//               description="Your current Primary email address is"
//               haveLink={true}
//             />

//             <FormInput
//               id="newEmail"
//               label="New email address"
//               placeholder="Enter your email address"
//             />

//             <SaveChangesButton onClick={changeEmail} />
//           </div>

//           <div className="bg-white mt-4 mx-4 rounded p-4">
//             <CardHeader
//               header="Change your password"
//               description="Your current Primary email address is"
//               haveLink={true}
//             />

//             <FormInput
//               id="currentPassword"
//               label="Current password"
//               placeholder="Enter Current password"
//             />

//             <FormInput
//               id="newPassword"
//               label="New password"
//               placeholder="Enter New password"
//             />

//             <FormInput
//               id="confirmPassword"
//               label="Confirm new password"
//               placeholder="Confirm new password"
//             />

//             <div style={{ marginLeft: "12.5rem" }} className="mt-4">
//               <h4 className="password-requirements-header">
//                 Password requirements:
//               </h4>
//               <h6 className="password-requirements-text">
//                 Ensure that these requirements are met:
//               </h6>
//               <ul className="password-requirements-text">
//                 <li>Minimum 8 characters long - the more, the better</li>
//                 <li>At least one lowercase character</li>
//                 <li> At least one uppercase character</li>
//                 <li> At least one number, symbol, or whitespace character</li>
//               </ul>
//             </div>
//             <SaveChangesButton onClick={changePassword} />
//           </div>

//           <div className="bg-white mt-4 mx-4 rounded p-4">
//             <CardHeader
//               header="Preferences"
//               description="Preferences settings affect your view of the entire application."
//               haveLink={false}
//             />
//             <SelectInput
//               id="languageSelect"
//               placeholder="Select Language"
//               options={["English", "Persian", "Arabic", "Spanish"]}
//               label="Language"
//               width="38rem"
//             />
//             <SelectInput
//               id="timeZoneSelect"
//               placeholder="Select Your Time Zone"
//               options={[
//                 "GMT -9:00",
//                 "GMT -7:00",
//                 "GMT -5:00",
//                 "GMT +3:00",
//                 "GMT +5:00",
//                 "GMT +10:00",
//                 "GMT +13:00",
//               ]}
//               label="Time Zone"
//               width="38rem"
//             />

//             <SelectInput
//               id="dateFormat"
//               placeholder="No Preference"
//               options={[
//                 "Month, day, year",
//                 "Day, month, year",
//                 "Year, Month, Day",
//                 "yy/ddd",
//                 "YYYY-MM-DD",
//                 "MM/DD/YYYY",
//                 "DD. MM. YYYY",
//               ]}
//               label="Date Format"
//               width="38rem"
//             />
//             <RadioBoxInput
//               label="Default"
//               items={[
//                 { id: "onInput", text: "On" },
//                 { id: "offInput", text: "Off" },
//               ]}
//               name="defaultRadioBox"
//             />

//             <CheckboxInput
//               label="Choose option default"
//               items={[
//                 { id: "checkbox1", text: "Tell me" },
//                 { id: "checkbox2", text: "Open e-mail" },
//                 { id: "checkbox3", text: "Show default" },
//               ]}
//               name="defaultRadioBox"
//             />
//             <SaveChangesButton />
//           </div>

//           <div className="bg-white mt-4 mx-4 rounded p-4">
//             <CardHeader
//               header="Two-step verification"
//               description="You must setup a two factor authentication to go nline with our security guidelines."
//               haveLink={false}
//             />
//             <h5 className="card-bold-subheader mb-4">Add Phone Number</h5>
//             <div className="d-flex align-items-center">
//               <SelectInput
//                 id="countrySelect"
//                 placeholder="Select Country"
//                 options={["India", "USA", "United Kingdom", "Italy"]}
//                 justInput={true}
//                 width="12.5rem"
//               />
//               <FormInput
//                 id="phoneNumber"
//                 placeholder="Phone number"
//                 justInput={true}
//                 marginLeft="1rem"
//               />
//             </div>
//             <button className="btn blue-btn mt-4 py-2 px-3">Next</button>
//             <hr className="gray-line my-4" />
//             <h5 className="card-bold-subheader mb-4">2 Step Verification</h5>
//             <div>
//               <CodeInput
//                 number="0"
//                 handleChange={handleChange}
//                 handleKeyUp={handleKeyUp}
//               />
//               <CodeInput
//                 number="1"
//                 handleChange={handleChange}
//                 handleKeyUp={handleKeyUp}
//               />
//               <CodeInput
//                 number="2"
//                 handleChange={handleChange}
//                 handleKeyUp={handleKeyUp}
//               />
//               <CodeInput
//                 number="3"
//                 handleChange={handleChange}
//                 handleKeyUp={handleKeyUp}
//               />
//               <CodeInput
//                 number="4"
//                 handleChange={handleChange}
//                 handleKeyUp={handleKeyUp}
//               />
//               <CodeInput
//                 number="5"
//                 handleChange={handleChange}
//                 handleKeyUp={handleKeyUp}
//               />
//               <div
//                 className="form-check mt-3 mb-0"
//                 style={{ color: "#637381" }}
//               >
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   name="rememberCheckbox"
//                   id="rememberCheckbox"
//                 />
//                 <label
//                   className="form-check-label"
//                   htmlFor="rememberCheckbox"
//                   style={{ marginBottom: "1rem", marginRight: "1.5rem" }}
//                 >
//                   Remember me for 30 days
//                 </label>
//               </div>
//               <div className="d-flex">
//                 <button className="btn blue-btn mt-2 py-2 px-3">Verify</button>
//                 <button className="btn cancel-btn mt-2 py-2 px-3 mx-3">
//                   Cancel
//                 </button>
//               </div>
//               <div className="mt-2">
//                 <a className="need-help-link" href="#">
//                   I need help getting my verification code.
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white mt-4 mx-4 rounded p-4">
//             <CardHeader
//               header="Session and Login History"
//               description="Your current Primary email address is"
//               haveLink={true}
//             />
//             <h5 className="card-bold-subheader mb-4">Active Sessions</h5>
//             <table className="table table-borderless">
//               <thead>
//                 <tr>
//                   <th className="table-head left-th">BROWSER</th>
//                   <th className="table-head">DATE/TIME</th>
//                   <th className="table-head">DEVICE</th>
//                   <th className="table-head">LOCATION</th>
//                   <th className="table-head right-th">IP ADDRESS</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr>
//                   <AccountTableBrowserTd
//                     title="Chrome on iMacPro"
//                     element={<ChromeIcon />}
//                   />
//                   <AccountTableTextTd title="2021-12-02 07:50:28" />
//                   <AccountTableTextTd title="iMacPro" />
//                   <AccountTableTextTd title="INDIA" />
//                   <AccountTableTextTd title="123.45.678.321" />
//                 </tr>
//               </tbody>
//             </table>

//             <h5 className="card-bold-subheader mb-4">Login History</h5>
//             <table
//               className="table table-borderless"
//               style={{ marginBottom: "0px" }}
//             >
//               <thead>
//                 <tr>
//                   <th className="table-head left-th">BROWSER</th>
//                   <th className="table-head">DATE/TIME</th>
//                   <th className="table-head">DEVICE</th>
//                   <th className="table-head">LOCATION</th>
//                   <th className="table-head right-th">IP ADDRESS</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr>
//                   <AccountTableBrowserTd
//                     title="Chrome on iPhone"
//                     element={<ChromeIcon />}
//                   />
//                   <AccountTableTextTd title="2021-12-02 07:50:28" />
//                   <AccountTableTextTd title="iPhone X" />
//                   <AccountTableTextTd title="INDIA" />
//                   <AccountTableTextTd title="123.45.678.321" />
//                 </tr>
//                 <tr>
//                   <AccountTableBrowserTd
//                     title="Chrome on iMacPro"
//                     element={<ChromeIcon />}
//                   />
//                   <AccountTableTextTd title="2021-12-02 07:50:28" />
//                   <AccountTableTextTd title="iMacPro" />
//                   <AccountTableTextTd title="USA" />
//                   <AccountTableTextTd title="123.45.678.321" />
//                 </tr>
//                 <tr>
//                   <AccountTableBrowserTd
//                     title="Mozilla on iMac"
//                     element={<MozillaIcon />}
//                   />
//                   <AccountTableTextTd title="2021-12-02 07:50:28" />
//                   <AccountTableTextTd title="iPhone X" />
//                   <AccountTableTextTd title="UK" />
//                   <AccountTableTextTd title="123.45.678.321" />
//                 </tr>
//                 <tr>
//                   <AccountTableBrowserTd
//                     title="Brave on iMacPro"
//                     element={<BraveIcon />}
//                   />
//                   <AccountTableTextTd title="2021-12-02 07:50:28" />
//                   <AccountTableTextTd title="iMacPro" />
//                   <AccountTableTextTd title="AU" />
//                   <AccountTableTextTd title="123.45.678.321" />
//                 </tr>
//                 <tr>
//                   <AccountTableBrowserTd
//                     title="Chrome on iMacPro"
//                     element={<ChromeIcon />}
//                   />
//                   <AccountTableTextTd title="2021-12-02 07:50:28" />
//                   <AccountTableTextTd title="iMacPro" />
//                   <AccountTableTextTd title="EU" />
//                   <AccountTableTextTd title="123.45.678.321" />
//                 </tr>
//                 <tr>
//                   <AccountTableBrowserTd
//                     title="Chrome on iMacPro"
//                     element={<ChromeIcon />}
//                   />
//                   <AccountTableTextTd title="2021-12-02 07:50:28" />
//                   <AccountTableTextTd title="iMacPro" />
//                   <AccountTableTextTd title="INDIA" />
//                   <AccountTableTextTd title="123.45.678.321" />
//                 </tr>
//                 <tr>
//                   <AccountTableBrowserTd
//                     title="Chrome on iMacPro"
//                     element={<ChromeIcon />}
//                   />
//                   <AccountTableTextTd title="2021-12-02 07:50:28" />
//                   <AccountTableTextTd title="iMacPro" />
//                   <AccountTableTextTd title="INDIA" />
//                   <AccountTableTextTd title="123.45.678.321" />
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="bg-white mt-4 mx-4 rounded p-4">
//             <CardHeader
//               header="Notification for email, mobile & Slack"
//               description="Select your preferences for the notification that are the most common for all users."
//               haveLink={false}
//             />

//             <div
//               className="alert alert-warning alert-dismissible"
//               role="alert"
//               id="notificationAlert"
//               style={{ border: "1px solid #FFECB5" }}
//             >
//               To start using Slack for personal notifications, you should first
//               connect Slack.
//               <button
//                 type="button"
//                 className="btn-close"
//                 onClick={removeFadeOut}
//               ></button>
//             </div>

//             <table className="table table-borderless">
//               <NotificationTableCheckboxThead title="Activity & Conversation" />

//               <tbody>
//                 <NotificationTableCheckboxTr
//                   title="When a Files is shared with a team"
//                   handleChange={handleNotificationChange}
//                   groupNumber="1"
//                   groupSize="3"
//                   states={[1, 1, 1]}
//                 />
//                 <NotificationTableCheckboxTr
//                   title="When a Files is shared with a team"
//                   handleChange={handleNotificationChange}
//                   groupNumber="2"
//                   groupSize="3"
//                   states={[1, 1, 1]}
//                 />

//                 <NotificationTableCheckboxTr
//                   title="When someone comments in threads I’m following"
//                   handleChange={handleNotificationChange}
//                   groupNumber="3"
//                   groupSize="3"
//                   states={[1, 1, 1]}
//                 />

//                 <NotificationTableCheckboxTr
//                   title="When someone @mentions me in any comments"
//                   handleChange={handleNotificationChange}
//                   groupNumber="4"
//                   groupSize="1"
//                   states={[1, 0, 0]}
//                 />
//               </tbody>
//             </table>

//             <table className="table table-borderless">
//               <NotificationTableCheckboxThead title="Project activity" />

//               <tbody>
//                 <NotificationTableCheckboxTr
//                   title="When someone adds me to a project"
//                   handleChange={handleNotificationChange}
//                   groupNumber="5"
//                   groupSize="2"
//                   states={[1, 0, 1]}
//                 />
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   ) : (
//     window.open("/login")
//   );
// }

// export default Account;
