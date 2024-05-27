// pages/report.tsx
"use client";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import React, { useState } from "react";
import NavLinksBarangay from "@/app/components/navlinks-barangay";
import Editbarangay from "./all";
import Editsocioeconomic from "./socioeconomic";
import EditPhysicalinfo from "./physicalinfo";
import Editfiscal from "./fiscal";
import Editpoliticalinfo from "./political";

function Barangay() {
  const [selectedTab, setSelectedTab] = useState("Barangay");
  const [bloodTypeData, setBloodTypeData] = useState([]);

  const renderContent = () => {
    switch (selectedTab) {
      case 'Barangay':
        return <Editbarangay/>;
      case "Socio Economic info":
        return <Editsocioeconomic/>;
      case "Physical Info":
        return <EditPhysicalinfo/>;
      case "Fiscal Info":
        return <Editfiscal/>;
        case "Political Info":
            return <Editpoliticalinfo/>;
      default:
        return <div>All Content</div>;
    }
  };

  return (
    <div>
      <NavBar />
      <div
        style={{ display: "flex", justifyContent: "center", height: "100vh" }}
      >
        <div className="gap-1 mt-28 pb-10 mr-12">
          <NavLinksBarangay onSelect={setSelectedTab} />
        </div>

        <div className="mr-16">{renderContent()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Barangay;
