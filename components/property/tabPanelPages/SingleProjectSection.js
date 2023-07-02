/**
 * It renders a tabbed box with 6 tabs
 * @returns The SinglePropertySection component is being returned.
 */
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import LocationMapDeskBoxP from "../stickyTabOrClassic/LocationMapDeskBoxP";
import AboutDeskBoxP from "../stickyTabOrClassic/AboutDeskBoxP";
import FeatureDeskBoxP from "../stickyTabOrClassic/FeatureDeskBoxP";
import VideoDeskBoxP from "../stickyTabOrClassic/VideoDeskBoxP";
import DetailsDeskBoxP from "../stickyTabOrClassic/DetailsDeskBoxP";
import FloorPlanDeskBoxP from "../stickyTabOrClassic/FloorPlanDeskBoxP";

const SingleProjectSection = ({project}) => {

  const [active, setActive] = useState("About");
  console.log('about', project);

  return (
    <div className="desc-box">
      <Nav tabs className="line-tab">
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("About");
            }}
            active={active === "About" && true}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Features");
            }}
            active={active === "Features" && true}>
            Features
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Video");
            }}
            active={active === "Video" && true}>
            Video
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Details");
            }}
            active={active === "Details" && true}>
            Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Floor Plan");
            }}
            active={active === "Floor Plan" && true}>
            Floor Plan
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Office");
            }}
            active={active === "Office" && true}>
            Location
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent id="tabsContent" className="tab-content" activeTab={active}>
        <TabPane tabId="About">
          <AboutDeskBoxP project={project}/>
        </TabPane>
        <TabPane tabId="Features">
          <FeatureDeskBoxP project={project}/>
        </TabPane>
        <TabPane tabId="Video">
          <VideoDeskBoxP project={project}/>
        </TabPane>
        <TabPane tabId="Details">
          <DetailsDeskBoxP project={project}/>
        </TabPane>
        <TabPane tabId="Floor Plan">
          <FloorPlanDeskBoxP project={project}/>
        </TabPane>
        <TabPane tabId="Office">
          <LocationMapDeskBoxP project={project}/>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default SingleProjectSection;
