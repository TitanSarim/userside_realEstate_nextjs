import React from "react";

const FloorPlanDeskBoxP = ({project}) => {

  const data = project?.project?.[0]


  return (
    <div className='desc-box' id='floor_plan'>
      <div className='page-section'>
        <h4 className='content-title'>Floor plans</h4>

          {data?.blue_prints.map((item, i)=>(
            <div className="mb-4 relative">
              <img src={item.imageUrl} alt='' className='img-fluid' />
              <div>
              <ul className="blue_prints">
                <li>
                  <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                  <span>Bed : {item.beds || 5}</span>
                </li>
                <li>
                  <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                  <span>Baths : {item.bath || 5}</span>
                </li>
                <li>
                  <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                  <span>Sq Ft : {item.area || 5}</span>
                </li>
                <li>
                  <img src="/assets/images/svg/icon/2.png" className="img-fluid ruler-tool" alt="" />
                  <span>Price {item.price || 5}</span>
                </li>
            </ul>
              </div>
            </div>  
          ))}
      </div>
    </div>
  );
};

export default FloorPlanDeskBoxP;
