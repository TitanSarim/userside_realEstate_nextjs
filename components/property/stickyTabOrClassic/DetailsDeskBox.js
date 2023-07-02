import React from "react";
import { Col, Row } from "reactstrap";

const DetailsDeskBox = ({property}) => {


  const data = property?.properties?.[0]


  const dateString = data?.date;
  const date = new Date(dateString);
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
  const month = date.toLocaleDateString('en-US', { month: 'numeric' });
  const year = date.toLocaleDateString('en-US', { year: 'numeric' });
  const formattedOutput = `${weekday}-${month}-${year}`;


  return (
    <div className='desc-box' id='details'>
      <div className='page-section'>
        <h4 className='content-title'>
          Property Details
          <a
            href='https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en'
            target='_blank'
            rel='noreferrer'>
            <i className='fa fa-map-marker-alt'></i> view on map
          </a>
        </h4>
        <Row>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Property Type :</span> {data?.property_type}
              </li>
              <li>
                <span>Property status :</span> {data?.property_status}
              </li>
              <li>
                <span>Publish at :</span> {formattedOutput}
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Price :</span> $ {data?.price}
              </li>
              <li>
                <span>Property Size :</span> {data?.area} sq / ft
              </li>
              <li>
                <span>Total Rooms :</span> {data?.max_rooms}
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>City :</span> {data?.city}
              </li>
              <li>
                <span>Bedrooms :</span> {data?.beds}
              </li>
              <li>
                <span>Bathrooms :</span> {data?.baths}
              </li>
            </ul>
          </Col>
        </Row>
        {/* <h4 className='content-title mt-4'>Attachments</h4>
        <a className='attach-file'>
          <i className='far fa-file-pdf'></i>Demo Property Document{" "}
        </a> */}
      </div>
    </div>
  );
};

export default DetailsDeskBox;
