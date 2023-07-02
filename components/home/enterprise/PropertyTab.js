/**
 * It returns a section with a container, a row, and a column. Inside the column, there's a title, a
 * nav, and a tab content
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useState } from "react";
import { Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { Discover, WhatAreYouLookingFor } from "../../../constValues/constValues";
import ModernTabSection from "./propertyTab/ModernTab";

const PropertyTabSection = ({ value, properties }) => {


  const [active, setActive] = useState("Family House");

  const propertyTypes = [...new Set(properties.map((property) => property.property_type))];


  console.log(propertyTypes);


  return (
    <section className='property-section bg-comman-2'>
      <Container>
        <Row className='ratio_55'>
          <Col>
            <div className='title-2 text-white'>
              <h2>{WhatAreYouLookingFor}</h2>
              <p>{Discover}</p>
            </div>
            <Nav tabs>
              {propertyTypes.map((propertyType) => (
                <NavItem key={propertyType}>
                  <NavLink
                    onClick={() => setActive(propertyType)}
                    active={active === propertyType}
                  >
                    {propertyType}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>

            <TabContent id='tabsContent' className='tab-content' activeTab={active}>
              {propertyTypes.map((propertyType) => (
                <TabPane key={propertyType} tabId={propertyType}>
                  <ModernTabSection
                    tabData={properties.filter((property) => property.property_type === propertyType)}
                  />
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyTabSection;
