/**
 * It takes an array of data and returns a row of columns with the data
 * @returns An array of objects.
 */
import React from "react";
import { Col, Row } from "reactstrap";

const AboutDeskBoxP = ({project}) => {
  
  const data = project?.project?.[0]

  return (
    <div className='about page-section' id='about'>
      <h4>Project Brief</h4>
      <Row>
          <Col sm='12'>
            <p dangerouslySetInnerHTML={{__html: data?.description}}></p>
          </Col>
      </Row>
    </div>
  );
};

export default AboutDeskBoxP;
