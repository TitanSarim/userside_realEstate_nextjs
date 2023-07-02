/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns an object with a property called props. The value of the props property is an object with a
 * property called props. The value of the props property is an object with a property called props.
 * The value of the props property is an object with a property called props. The value of the props
 * property is an object with a property called props. The value of the props property is an
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/property/tabPanelPages";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarFive from "../../layout/headers/NavbarFive";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const ModalDetails = () => {
  return (
    <>
      <NavbarFive />
      <BodyContent exploration={true} imgSection={false} />
      <FooterThree />
    </>
  );
};

export default ModalDetails;
