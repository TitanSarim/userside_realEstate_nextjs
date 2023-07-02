/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import { AppPropertyData } from "../../../data/appPropertyData";
import AboutSection from "./About";
import BannerSection from "./Banner";
import BrandSection from "./Brand";
import CitiesWisePropertySection from "./CitiesWiseProperty";
import FeatureSection from "./Feature";
import HomeBannerSection from "./HomeBanner";
import OfferSection from "./Offer";
import PropertySection from "./Property";
import SalePropertySection from "./SaleProperty";
import TestimonialSection from "./Testimonial";
import { useSelector } from "react-redux";
import store from '../../../redux-toolkit/store'
import {allProperties, allAgent} from '../../../redux-toolkit/actions/action'


const BodyContent = () => {

  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);


  const {properties} = useSelector((state)=>state.properties);
  const {agents} = useSelector((state)=>state.agents);


  useEffect(() => {

    store.dispatch(allProperties());

  }, []);

  useEffect(() => {

    store.dispatch(allAgent());

  }, []);



  return (
    <>
      <HomeBannerSection />
      <SalePropertySection value={value?.LatestForSalePropertyData} properties={properties}/>
      <FeatureSection value={value?.FeaturedProperty} properties={properties}/>
      <PropertySection value={value?.LatestPropertyData} properties={properties}/>
      <OfferSection value={AppPropertyData.OurNewOffer} properties={properties}/>
      {/* <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} /> */}
      {/* <BannerSection /> */}
      <AboutSection value={clientData?.MeetOurAgent} data={agents} properties={properties}/>
      {/* <TestimonialSection value={clientData?.HappyClient} normal={true} /> */}
      <BrandSection />
    </>
  );
};

export default BodyContent;
