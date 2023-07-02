/**
 * It takes an array of data and returns a row of columns with the data
 * @returns An array of objects.
 */
import React from "react";
import { Col, Row } from "reactstrap";

const AboutDeskBox = ({property}) => {
  

  const data = property?.properties?.[0]

  return (
    <div className='about page-section' id='about'>
      <h4>Property Brief</h4>
      <Row>
          <Col sm='12'>
            <p>{data?.description}</p>
          </Col>
      </Row>
    </div>
  );
};

export default AboutDeskBox;
