import styled from "styled-components";
import {
  FOOTER_BG_COLOR,
  MAIN_TEXT_COLOR,
  MIN_CONTENT_WIDTH,
  SECONDARY_TEXT_COLOR,
} from "variables";
import LogoImage from "assets/icons/Logo.svg?react";
import { RoutePath } from "domain/routPaths";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  background-color: ${FOOTER_BG_COLOR};
  color: ${MAIN_TEXT_COLOR.default};
  font-size: 16px;
  line-height: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.17);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${MIN_CONTENT_WIDTH};
  padding: 48px 0 38px;
`;

const FooterContent = styled.div`
  display: flex;

  > *:nth-child(2) {
    width: 200px;
  }

  > *:nth-child(3) {
    width: 240px;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  min-width: 450px;
`;

const ContactInfo = styled.div`
  display: flex;
  color: ${SECONDARY_TEXT_COLOR.default};
  width: 285px;
  line-height: 24px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 10px;
`;

const SectionName = styled.div`
  color: ${SECONDARY_TEXT_COLOR.default};
`;

const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SectionListItem = styled.div`
  a {
    text-decoration: none;
    color: ${MAIN_TEXT_COLOR.default};
    font-size: 16px;

    &:visited {
      color: ${MAIN_TEXT_COLOR};
    }

    &:active {
      color: ${MAIN_TEXT_COLOR.active};
    }

    &:hover {
      color: ${MAIN_TEXT_COLOR.hover};
      text-decoration: underline;
    }
  }
  input {
    border: none;
    padding: 4px;
    border-bottom: 1px solid #000;

    &::placeholder {
      color: ${SECONDARY_TEXT_COLOR.default};
    }
    &:focus {
      outline: none;
    }
  }
  button {
    background: unset;
    border: none;
    padding: 4px;
    border-bottom: 1px solid #000;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Copyright = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.17);
`;

interface IMenuItem {
  link: string;
  caption: string;
}

const linkList: IMenuItem[] = [
  { link: RoutePath.baseUrl, caption: "Home" },
  { link: RoutePath.shop, caption: "Shop" },
  { link: RoutePath.about, caption: "About" },
  { link: RoutePath.contact, caption: "Contact" },
];

const helpList: IMenuItem[] = [
  { link: RoutePath.paymentOptions, caption: "Payment Options" },
  { link: RoutePath.returns, caption: "Returns" },
  { link: RoutePath.privacyPolicies, caption: "Privacy Policies" },
];

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <FooterContent>
          <Info>
            <LogoImage />
            <ContactInfo>
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </ContactInfo>
          </Info>
          <Section>
            <SectionName>Links</SectionName>
            <SectionList>
              {linkList.map(({ link, caption }) => (
                <SectionListItem key={link}>
                  <Link to={link}>{caption}</Link>
                </SectionListItem>
              ))}
            </SectionList>
          </Section>
          <Section>
            <SectionName>Help</SectionName>
            <SectionList>
              {helpList.map(({ link, caption }) => (
                <SectionListItem key={link}>
                  <Link to={link}>{caption}</Link>
                </SectionListItem>
              ))}
            </SectionList>
          </Section>
          <Section>
            <SectionName>Newsletter</SectionName>
            <SectionList>
              <SectionListItem>
                <input type="email" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
              </SectionListItem>
            </SectionList>
          </Section>
        </FooterContent>
        <Copyright>
          {new Date().getFullYear()} furino. All rights reverved
        </Copyright>
      </Inner>
    </Wrapper>
  );
}
