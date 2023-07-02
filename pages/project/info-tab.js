/**
 * It takes a locale as an argument and returns a props object with the locale and the translations for
 * the common namespace
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/property/tabPanelPages";
import VideoSection from "../../components/property/tabPanelPages/Video";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarFive from "../../layout/headers/NavbarFive";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const InfoTab = () => {
  return (
    <>
      <NavbarFive />
      <BodyContent imgSection={true}>
        <VideoSection />
      </BodyContent>
      <FooterThree />
    </>
  );
};

export default InfoTab;
