/**
 * It's a function that returns a section with a container, a row, a column, a div, a slider, and a map
 * function that returns a div, a row, two columns, two divs, a link, a span, a h6, a h3, a span, a p,
 * and another link
 * @returns The AboutSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import { Eye, Heart, Mail } from "react-feather";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { Agent, Connect, MeetOurAgent, ViewPortfolio } from "../../../constValues/constValues";
import { about1 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import SocialAccounts from "../../elements/SocialAccounts";

const AboutSection = ({ value, data, properties }) => {


  



  return (
    <section className="about-section slick-between">
      <Container>
        <Row>
          <Col>
            <div className="title-1">
              <span className="label label-gradient">Agents</span>
              <h2>Meet Our Agents</h2>
              <hr />
            </div>
            <NoSsr>
            <Slider className="about-wrap arrow-white" {...about1}>
              {data &&
                data.map((data, i) => {
                  const idMatched = properties.find(property => property.userid.toString()) 
                  const matchedProperty = idMatched?.userid == data?.userid

                  let firstImage = null;
                  if (matchedProperty && idMatched.media && idMatched.media.length > 0) {
                    firstImage = idMatched.media[0];
                    console.log(firstImage?.imageUrl);
                  }

                  return (
                    <div key={i}>
                      <Row className="about-content">
                        <Col xl="6">
                          <div className="about-image">
                            <img src={firstImage?.imageUrl} className="img-fluid" alt="" />
                            {/* <div className="about-overlay"></div>
                            <div className="overlay-content">
                              <SocialAccounts />
                              <span>{Connect}</span>
                            </div> */}
                          </div>
                        </Col>
                        <Col xl="6">
                          <div className="our-details">
                            <Link href="/agent/agent-profile">
                              <h6 className="d-flex">
                                {data.firstname} {data.lastname}
                                <span className="label-heart ms-2">
                                  <Heart />
                                </span>
                              </h6>
                            </Link>
                            <h3>{data.work}</h3>
                            <span className="font-roboto">
                              <Mail className="me-1" />
                              {data.email}
                            </span>
                            <p className="font-roboto">{data.description && data.description.length > 120 ? `${data.description.slice(0, 110)}...` : data.description}</p>
                            <Link href="/agent/agent-profile" className="btn btn-gradient btn-pill mt-2">
                              <Eye />
                              {ViewPortfolio}
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
            </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
