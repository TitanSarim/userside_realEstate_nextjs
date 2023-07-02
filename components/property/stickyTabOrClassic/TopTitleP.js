import React, { useState } from "react";
import { Facebook, Instagram, Printer, Twitter } from "react-feather";
import { Container } from "reactstrap";
import ReviewStarr from "../../elements/ReviewStarr";

const TopTitleP = ({ singleData }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="single-property-section">
      <Container>
        <div className="single-title">
          <div className="left-single">
            <div className="d-flex">
              <h2 className="mb-0">
              {singleData?.project?.[0]?.title ?? ''}
              </h2>
              <span>
                <span className="label label-shadow ms-2">{singleData?.project?.[0]?.project_type ?? ''}</span>
              </span>
            </div>
            <p className="mt-1">{singleData?.project?.[0]?.country ?? ''} {singleData?.project?.[0]?.city ?? ''}</p>
            <ul>
              
                <div className="feature-label">
                {singleData?.project?.[0]?.tags?.map((feature, index) => (
                  <span key={index} className="btn btn-dashed btn-pill">
                    {feature}
                  </span>
                ))}
              </div>
              
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
              ${singleData?.project?.[0]?.starting_price ?? ''} <span>/ start From</span>
            </h2>
            <div className="feature-label">
              {singleData?.project?.[0]?.features?.map((feature, index) => (
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

export default TopTitleP;
