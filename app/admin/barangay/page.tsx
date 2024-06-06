// pages/report.tsx
"use client";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import React, { useEffect, useState } from "react";
import NavLinksBarangay from "@/app/components/navlinks-barangay";
import Editbarangay from "./editbarangay";
import Editsocioeconomic from "./socioeconomic";
import EditPhysicalinfo from "./physicalinfo";
import Editfiscal from "./fiscal";
import Editpoliticalinfo from "./political";
import { fetchAccessLevel } from "@/app/util/fetch-access-level";
import { isLocalStorageKeyEmptyOrExpired, getWithExpiry } from "@/app/util/session";
import router from "next/router";
import { fetchBarangayNoByUserName } from "@/app/util/fetch-barangay";

function Barangay() {
  const [selectedTab, setSelectedTab] = useState("Barangay");
  const [barangayNo, setBarangayNo] = useState<number | null>();

  useEffect(() => {
    const checkUserAndFetchData = async () => {
      if (isLocalStorageKeyEmptyOrExpired('username')) {
        router.push('http://localhost:3000/');
      } else {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel == 3) {
          const bgNo = await fetchBarangayNoByUserName(username);
          setBarangayNo(bgNo);
        } else if (accessLevel == 1 || accessLevel == 4 || accessLevel == 2) {
          router.push('http://localhost:3000/');
        }
      }
    };

    checkUserAndFetchData();
  }, [router]);

  const renderContent = () => {
    switch (selectedTab) {
      case 'Barangay':
        return <Editbarangay barangayNo={barangayNo}/>;
      case "Socio Economic info":
        return <Editsocioeconomic barangayNo={barangayNo}/>;
      case "Physical Info":
        return <EditPhysicalinfo barangayNo={barangayNo}/>;
      case "Fiscal Info":
        return <Editfiscal barangayNo={barangayNo}/>;
        case "Political Info":
            return <Editpoliticalinfo barangayNo={barangayNo}/>;
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
