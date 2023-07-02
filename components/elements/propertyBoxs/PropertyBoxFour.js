/**
 * It's a function that returns a div with a bunch of other divs and spans inside it
 * @returns A React component
 */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import Img from "../../../utils/BackgroundImageRatio";
import SocialAccounts from "../SocialAccounts";
import {getProjects, allProperties} from '../../../redux-toolkit/actions/action'
import { useSelector } from "react-redux";
import store from '../../../redux-toolkit/store'


const PropertyBoxFour = ({ data }) => {

  const {projects} = useSelector((state)=>state.projects);
  const {properties} = useSelector((state)=>state.properties);

  useEffect(() => {

    store.dispatch(allProperties());

  }, []);
  useEffect(() => {

    store.dispatch(getProjects());

  }, []);

  const [load, setLoad] = useState(true);
  const [show, setShow] = useState();


  const idMatched = properties.find(property => property.userid.toString()) 
  const matchedProperty = idMatched?.userid == data?.userid


  let firstImage = null;
    if (matchedProperty && idMatched.media && idMatched.media.length > 0) {
        firstImage = idMatched.media[0];
        console.log(firstImage?.imageUrl);
    }


  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="agent-image">
            <div>
              <Img src={firstImage?.imageUrl} className="bg-img" alt="" />
              {/* <span className="label label-shadow">{matchedProperty?.properties?.length} properties</span> */}
              <div className="agent-overlay"></div>
              <div className="overlay-content">
                <SocialAccounts />
                <span>Connect</span>
              </div>
            </div>
          </div>
          <div className="agent-content">
            <h3>
              <Link href="/pages/agency/agency-profile">{data?.firstname}{data?.lastname}</Link>
            </h3>
            <p className="font-roboto">{`${data.description.substring(0, 66)}`}. . . </p>
            <ul className="agent-contact">
              <li>
                <i className="fas fa-phone-alt"></i>
                <span className="character">{data?.phoneno === show ? data?.phoneno : data?.phoneno.slice(0, 5) + "*****"}</span>
                <span
                  className="label label-light label-flat"
                  onClick={() => {
                    setShow(data?.phoneno);
                    data?.phoneno === show && setShow();
                  }}>
                  {show === data?.phoneno ? "show" : "hide"}
                </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i> {data?.email}
              </li>
              <li>
                <i className="fas fa-fax"></i> {data?.zipCode}
              </li>
            </ul>
            <Link href={`/agent/agent-profile/${data.userid}`}>
              View profile <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      ) : (
        <ContentLoader className="skeleton-svg">
          {setTimeout(() => {
            setLoad(false);
          }, 2000)}
          <rect className="skeleton-img" />
          <rect className="skeleton-c1" />
          <rect className="skeleton-c2" />
          <rect className="skeleton-c3" />
        </ContentLoader>
      )}
    </>
  );
};

export default PropertyBoxFour;
