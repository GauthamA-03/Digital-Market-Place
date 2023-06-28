import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ScienceIcon from "@mui/icons-material/Science";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ForestIcon from "@mui/icons-material/Forest";
import HealthAndSafety from "@mui/icons-material/HealthAndSafety";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import WeekendIcon from "@mui/icons-material/Weekend";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SpaIcon from "@mui/icons-material/Spa";
import BusinessIcon from "@mui/icons-material/Business";
import LuggageIcon from "@mui/icons-material/Luggage";
import CheckroomIcon from "@mui/icons-material/Checkroom";

import logistic from "../../public/Images/logistic.png";

export const categoryData = [
  { name: "Consumer Electronics", icon: <HeadphonesOutlinedIcon /> },
  { name: "Logistics", icon: <img src={logistic} alt="Logistics" /> },
  { name: "Agriculture", icon: <AgricultureOutlinedIcon /> },

  { name: "Business Services", icon: <BusinessCenterIcon /> },
  { name: "Chemicals", icon: <ScienceIcon /> },
  { name: "Electrical Services", icon: <ElectricalServicesIcon /> },

  { name: "Envinorment", icon: <ForestIcon /> },
  { name: "HealthAndSafety", icon: <HealthAndSafety /> },
  { name: "Renewable Energy", icon: <SolarPowerIcon /> },

  { name: "Food and Beverage", icon: <FastfoodIcon /> },
  { name: "Sports", icon: <SportsCricketIcon /> },
  { name: "Furniture", icon: <WeekendIcon /> },

  { name: "Office & School", icon: <LocalLibraryIcon /> },
  { name: "Home Appliances", icon: <OndemandVideoIcon /> },
  { name: "Fashion accessories", icon: <SpaIcon /> },

  { name: "Facility Management", icon: <BusinessIcon /> },
  { name: "Luggage, Bags and Cases", icon: <LuggageIcon /> },
  { name: "Fabric and Textiles Services", icon: <CheckroomIcon /> }
];
