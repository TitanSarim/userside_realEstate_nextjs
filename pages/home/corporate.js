/**
 * It takes a locale as an argument and returns an object with the props key and the value of the props
 * key is an object with the key of ...(await serverSideTranslations(locale, ['common']))
 * @returns The return value of the function is an object with a props property.
 */
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import NavbarTwo from "../../layout/headers/NavbarTwo";
import FooterTwo from "../../layout/footers/FooterTwo";
import BodyContent from "../../components/home/corporate";
import { ConfigDB } from "../../config/themeCustomizerConfig";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
const Corporate = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#5eac12");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#5eac12");
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarTwo />
      <BodyContent />
      <FooterTwo />
    </>
  );
};

export default Corporate;
