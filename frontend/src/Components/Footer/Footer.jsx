import "./Footer.css";
import logo from "../../assets/cover.png";
import { aboutus, advantages, jewellerys, services } from "../../utils";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      <section className="footer_grid">
        <div className="footer_logo">
          <img src={logo} alt="logo" />
          <div className="add">Andheri-(E), Mumbai-59</div>
          <div className="social_icons">
            <RiFacebookCircleFill className="icons" />
            <AiFillTwitterCircle className="icons" />
            <FaSquareInstagram className="icons" />
            <FaLinkedinIn className="icons" />
          </div>
        </div>
        <div>
          {jewellerys.map((item) => {
            return (
              <FooterContainer key={item?.id} title={item?.title}>
                {item?.links?.map((link) => {
                  return <p key={link?.id}>{link?.name}</p>;
                })}
              </FooterContainer>
            );
          })}
        </div>
        <div>
          {advantages.map((item) => {
            return (
              <FooterContainer key={item?.id} title={item?.title}>
                {item?.links?.map((link) => {
                  return <p key={link?.id}>{link?.name}</p>;
                })}
              </FooterContainer>
            );
          })}
        </div>
        <div>
          {services.map((item) => {
            return (
              <FooterContainer key={item?.id} title={item?.title}>
                {item?.links?.map((link) => {
                  return <p key={link?.id}>{link?.name}</p>;
                })}
              </FooterContainer>
            );
          })}
        </div>
        <div>
          {aboutus.map((item) => {
            return (
              <FooterContainer key={item?.id} title={item?.title}>
                {item?.links?.map((link) => {
                  return (
                    <p key={link?.id} className="footer_para">
                      {link?.name}
                    </p>
                  );
                })}
              </FooterContainer>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const FooterContainer = ({ title, children }) => {
  return (
    <div className="col">
      <h5 className="footer_title">{title}</h5>
      {children}
    </div>
  );
};

export default Footer;
