import React, {useEffect} from "react";
import { Link, Mail, MapPin, PhoneCall } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import Filter from "../../../layout/sidebarLayout/Filter";
import RecentlyAdded from "../../../layout/sidebarLayout/RecentlyAdded";
import GridView from "../../listing/gridView/grid/GridView";
import Img from "../../../utils/BackgroundImageRatio";
import { useSelector } from "react-redux";
import {allProperties} from '../../../redux-toolkit/actions/action'
import store from '../../../redux-toolkit/store'


const BodyContent = ({agent}) => {


  const {properties} = useSelector((state)=>state.properties);

  useEffect(() => {

    store.dispatch(allProperties());

  }, []);

  const userid = agent?.data?.user?.userid;
  const agentDetail = agent?.data?.user

  const idMatched = properties.find(property => property.userid.toString()) 
  const matchedProperty = idMatched?.userid == userid

  let firstImage = null;
    if (matchedProperty && idMatched?.media && idMatched.media.length > 0) {
        firstImage = idMatched.media[0];
        console.log(firstImage?.imageUrl);
    }

  const clientProperties = properties.filter((property) => property.userid.toString() === userid);
  console.log('Client properties:', clientProperties);




  return (
    <section className="agent-section property-section agent-profile-wrap">
      <Container>
        <Row className=" ratio_55">
          <Col xl="12" lg="8" className=" property-grid-2">
            <div className="our-agent theme-card">
              <Row>
                <Col sm="6" className=" ratio_landscape">
                  <div className="agent-image bg-size">
                    <Img src={firstImage?.imageUrl} className="img-fluid bg-img" alt=""/>
                    {/* <span className="label label-shadow">4 Properties</span> */}
                  </div>
                </Col>
                <Col sm="6">
                  <div className="our-agent-details">
                    <h3 className="f-w-600">{agentDetail?.firstname} {agentDetail?.lastname}</h3>
                    <h6>Real estate Property Agent</h6>
                    <ul>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <MapPin />
                          </div>
                          <div className="media-body">
                            <h6>{agentDetail?.address}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <PhoneCall />
                          </div>
                          <div className="media-body">
                            <h6>{agentDetail?.phoneno}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <Mail />
                          </div>
                          <div className="media-body">
                            <h6>{agentDetail?.email}</h6>
                          </div>
                        </div>
                      </li>
                      {/* <li className="with-link">
                        <div className="media">
                          <div className="icons-square">
                            <Link />
                          </div>
                          <div className="media-body">
                            <h6>
                              <a>https://www.sheltos.com</a>
                            </h6>
                          </div>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                  {/* <ul className="agent-social">
                    <li>
                      <a href="https://www.facebook.com/" className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://account.google.com" className="google">
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" className="linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul> */}
                </Col>
              </Row>
            </div>
            <div className="about-agent theme-card">
              <h3>About the agent</h3>
              <Row>
                <Col sm="12">
                  <p className="font-roboto">
                    {agentDetail?.description}
                  </p>
                </Col>
               
              </Row>
            </div>
            {/* <GridView size={2} gridType={"grid-view"} gridBar={true} properties={clientProperties}/> */}
          </Col>
          {/* <Sidebar>
            <Exploration />
            <Filter />
            <RecentlyAdded />
          </Sidebar> */}
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
