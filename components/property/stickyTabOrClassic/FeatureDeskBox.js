import React from "react";
import { Col, Row } from "reactstrap";

const FeatureDeskBox = ({property}) => {

  const data = property?.properties?.[0]



  return (
    <div className='desc-box' id='feature'>
      <div className='page-section feature-dec'>
        <h4 className='content-title'>features</h4>
        <Row className='single-feature '>
            <div className="feature-label">
              {data?.additional_features?.map((feature, index) => (
                <span key={index} className="btn btn-dashed btn-pill">
                  {feature}
                </span>
              ))}
            </div>
        </Row>
      </div>
    </div>
  );
};

export default FeatureDeskBox;
