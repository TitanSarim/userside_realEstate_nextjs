/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns an object with a property called props.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/property/tabPanelPages";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarFive from "../../layout/headers/NavbarFive";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";

const TemplateBreadcrumb = () => {
  return (
    <>
      <NavbarFive />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default TemplateBreadcrumb;
