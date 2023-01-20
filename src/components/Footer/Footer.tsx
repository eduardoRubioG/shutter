import React from "react";
import { Link } from "gatsby";
import "./Footer.scss";

export interface FooterProps {
  wrapperClassname?: string;
  wrapperInlineStyles?: React.CSSProperties;
  stickToBottom?: boolean;
}

const Footer = (props: FooterProps) => {
  const { wrapperClassname, wrapperInlineStyles, stickToBottom } = props;
  const positionStyle: React.CSSProperties = stickToBottom
    ? { marginTop: "auto" }
    : {};
  return (
    <footer
      className={`footer ${wrapperClassname || ""}`}
      style={{ ...wrapperInlineStyles, ...positionStyle }}
    >
      <div className="footer__contents-wrapper">
        <div className="footer__links-wrapper">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <Link to="/about" className="footer__link">
            The Story
          </Link>
          <Link to="/portfolio" className="footer__link">
            Pieces
          </Link>
          <Link to="/contact" className="footer__link">
            Reach Out
          </Link>
        </div>
        <div className="footer__subcontent">
          <span className="footer__year">{`co. ${new Date().getFullYear()}`}</span>
          {/* <StaticImage
          className="footer__logo"
          src="../../images/logo-wired.png"
          alt="logo image"
        /> */}
          <a
            className="footer__credits"
            href="https://www.webmusestudio.com/"
          >{`Made with <3 by Web Muse Studio`}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
