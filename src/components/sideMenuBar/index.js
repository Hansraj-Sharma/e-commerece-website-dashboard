import React from "react";
import styles from "./style.module.css";
import NavItem from "../navItem";
import HomeIcon from "../../icons/homeIcon";
// import SettingIcon from "../../icons/listIcon";
import FinanceIcon from "../../icons/financeIcon";
import FolderIcon from "../../icons/folderIcon";
import UserIcon from "../../icons/userIcon";
import StatisticsIcon from "../../icons/statisticsIcon";
import StarIcon from "../../icons/starIcon";
import ChatIcon from "../../icons/chatIcon";
import QuestionIcon from "../../icons/questionIcon";
import PersonIcon from "../../icons/personIcon";
import RibbonIcon from "../../icons/ribbonIcon";
import SettingIcon from "../../icons/settingIcon";
import ListIcon from "../../icons/listIcon";

const NavigationData1 = [
  { icon: <HomeIcon />, title: "Dashboard", path: "/dashboard" },
  { icon: <ListIcon />, title: "Orders", path: "/orders" },
  { icon: <FinanceIcon />, title: "Products", path: "/products" },
  { icon: <FolderIcon />, title: "Categories", path: "/categories" },
  { icon: <UserIcon />, title: "Customers", path: "/customers" },
  { icon: <StatisticsIcon />, title: "Reports" },
  { icon: <StarIcon />, title: "Coupons" },
  { icon: <ChatIcon />, title: "Inbox" },
];
const NavigationData2 = [
  { icon: <QuestionIcon />, title: "Knowledge Base" },
  { icon: <RibbonIcon />, title: "Product Updates" },
];
const NavigationData3 = [
  { icon: <PersonIcon />, title: "Personal Settings" },
  { icon: <SettingIcon />, title: "Global Settings" },
];

const SideMenuBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_top}>
        <div className={styles.navigation_top}>
          {NavigationData1.map((value, index) => (
            <div className={styles.navigation} key={index}>
              <NavItem title={value.title} icon={value.icon} to={value.path} />
            </div>
          ))}
        </div>
        <div className={styles.navigation_miduem}>
          <div className={styles.navigation_title}>Other Information</div>
          {NavigationData2.map((value, index) => (
            <div className={styles.navigation} key={index}>
              <NavItem title={value.title} icon={value.icon} />
            </div>
          ))}
        </div>

        <div className={styles.navigation_miduem}>
          <div className={styles.navigation_title}>Settings</div>
          {NavigationData3.map((value, index) => (
            <div className={styles.navigation} key={index}>
              <NavItem title={value.title} icon={value.icon} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sidebar_bottom}>
        <div className={styles.sb_box}>
          <div className={styles.sb_title}>Grow Business</div>
          <div className={styles.sb_description}>
            Explore our marketing solutions
          </div>
          <button className={styles.readMore_btn}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
