import React from "react";
import { Col, Row } from "reactstrap";

const DetailsDeskBoxP = ({project}) => {


  const data = project?.project?.[0]

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
          Listing
          <a
            href='https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en'
            target='_blank'
            rel='noreferrer'>
            <i className='fa fa-map-marker-alt'></i> view on map
          </a>
        </h4>
        <Row>
        {data?.listing.map((item, i)=>(
          <Col md='6' xl='4'>
            <ul className='property-list-details' key={i}>
              <li>
                <span>Area :</span> {item?.area} SQ/F
              </li>
              <li>
                <span>Beds :</span> {item?.beds}
              </li>
              <li>
                <span>Baths :</span> {item?.baths}
              </li>
              <li>
                <span>Appartments no :</span> {item?.apartment}
              </li>
              <li>
                <span>Starting from :</span> $ {item?.price}
              </li>
            </ul>
          </Col>
          ))}
        </Row>
        {/* <h4 className='content-title mt-4'>Attachments</h4>
        <a className='attach-file'>
          <i className='far fa-file-pdf'></i>Demo Property Document{" "}
        </a> */}
      </div>
    </div>
  );
};

export default DetailsDeskBoxP;
