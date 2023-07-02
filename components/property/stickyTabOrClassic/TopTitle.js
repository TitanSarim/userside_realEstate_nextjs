import React, { useState } from "react";
import { Facebook, Instagram, Printer, Twitter } from "react-feather";
import { Container } from "reactstrap";
import ReviewStarr from "../../elements/ReviewStarr";

const TopTitle = ({ singleData }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="single-property-section">
      <Container>
        <div className="single-title">
          <div className="left-single">
            <div className="d-flex">
              <h2 className="mb-0">
              {singleData?.properties?.[0]?.property_type ?? ''} {singleData?.properties?.[0]?.property_status ?? ''} {singleData?.properties?.[0]?.city ?? ''}
              </h2>
              <span>
                <span className="label label-shadow ms-2">{singleData?.properties?.[0]?.property_status ?? ''}</span>
              </span>
            </div>
            <p className="mt-1">{singleData?.properties?.[0]?.address ?? ''} {singleData?.properties?.[0]?.country ?? ''}</p>
            <ul>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                  <span>{singleData?.properties?.[0]?.beds ?? ''} Bedrooms</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                  <span>{singleData?.properties?.[0]?.baths ?? ''} Bathrooms</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/sofa.svg" className="img-fluid" alt="" />
                  <span>{singleData?.properties?.[0]?.max_rooms ?? ''} Rooms</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                  <span>{singleData?.properties?.[0]?.area ?? ''} Sq ft</span>
                </div>
              </li>
              
            </ul>
            <div className="share-buttons">
              {/* <div className="d-inline-block">
                <a className="btn btn-gradient btn-pill">
                  <i className="fas fa-share-square"></i>
                  share
                </a>
                <div className="share-hover">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" className="icon-facebook" target="_blank" rel="noreferrer">
                        <Facebook></Facebook>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="icon-twitter" target="_blank" rel="noreferrer">
                        <Twitter></Twitter>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" className="icon-instagram" rel="noreferrer">
                        <Instagram></Instagram>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a className="btn btn-dashed btn-pill ms-md-2 ms-1 save-btn" onClick={() => setLike(!like)}>
                <i className={`${like ? "fas" : "far"} fa-heart`}></i>
                Save
              </a> */}
              {/* <a className="btn btn-dashed btn-pill ms-md-2 ms-1" onClick={() => window.print()}>
                <Printer />
                Print
              </a> */}
            </div>
          </div>
          <div className="right-single">
            {/* <ReviewStarr rating={4} /> */}
            <h2 className="price">
              ${singleData?.properties?.[0]?.price ?? ''} <span>/ start From</span>
            </h2>
            <div className="feature-label">
              {singleData?.properties?.[0]?.additional_features?.map((feature, index) => (
                <span key={index} className="btn btn-dashed btn-pill">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopTitle;
