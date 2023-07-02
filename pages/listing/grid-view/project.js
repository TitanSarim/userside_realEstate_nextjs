/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns A function that returns a React element.
 */
import React, {useEffect} from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterThree from "../../../layout/footers/FooterThree";
import BreadCrumb2 from "../../../layout/Breadcrumb/BreadCrumb2";
import GridView from "../../../components/listing/gridView/grid/GridView";
import {getProjects} from '../../../redux-toolkit/actions/action'
import store from '../../../redux-toolkit/store'
import { useSelector } from "react-redux";
import GridViewP from "../../../components/listing/gridView/grid/GridViewP";


const Project = () => {


  const {projects} = useSelector((state)=>state.projects);


  useEffect(() => {

    store.dispatch(getProjects());

  }, []);



  return (
    <>
      <NavbarThree />
      <BreadCrumb2 />
      <GridViewP side={false} size={3} listSize={2} gridType={"grid-view"} gridBar={true} projects={projects}/>
      <FooterThree />
    </>
  );
};

export default Project;
