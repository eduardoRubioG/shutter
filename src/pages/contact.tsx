import React, { useEffect } from "react";
import Nav from "../components/Nav/Nav";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";
const ContactPage = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <ContactSection wrapperStyles={{ paddingBottom: "0" }} />
      <Footer stickToBottom />
    </main>
  );
};

export default ContactPage;
export function Head() {
  return (
    <>
      <html lang="en" />
      <SEO />
    </>
  );
}
