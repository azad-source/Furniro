import Gapped from "components/shared/Gapped/Gapped";
import PageHeader from "components/shared/PageHeader";
import styled from "styled-components";
import { MIN_CONTENT_WIDTH, SECONDARY_TEXT_COLOR } from "variables";
import AddressIcon from "assets/icons/location-icon.svg?react";
import PhoneIcon from "assets/icons/phone-icon.svg?react";
import ClockIcon from "assets/icons/clock-icon.svg?react";
import Input from "components/shared/Input/Input";
import Textarea from "components/shared/Textarea/Textarea";
import { Button } from "components/shared/Button/Button";
import Advantages from "components/advantages/Advantages";

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ConntentInner = styled.div`
  min-width: ${MIN_CONTENT_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  box-sizing: border-box;

  .title {
    font-size: ${({ theme }) => theme.titleSmallFontSize};
    line-height: ${({ theme }) => theme.titleSmallLineHeight};
    font-weight: 600;
    text-align: center;
  }

  .subtitle {
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};
    font-weight: 400;
    color: ${SECONDARY_TEXT_COLOR.default};
    text-align: center;
    margin: 8px 0 120px;
  }

  .contactInfo {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};
    font-weight: 400;
    padding: 0 50px;

    .contactItem {
      display: flex;
      gap: 30px;
      align-items: flex-start;

      .info {
        display: flex;
        flex-direction: column;
        gap: 2px;

        &__title {
          font-size: ${({ theme }) => theme.textExtraLargeFontSize};
          line-height: ${({ theme }) => theme.textExtraLargeLineHeight};
          font-weight: 500;
        }
      }
    }
  }

  .feedback {
    &__form {
      display: flex;
      flex-direction: column;
      gap: 36px;
      width: 635px;
      padding: 0 52px;
      box-sizing: border-box;

      > *:not(Button) {
        width: 100%;
      }

      Button {
        border-radius: 5px;
      }
    }
  }
`;

export const ContactPage = () => {
  return (
    <>
      <PageHeader />
      <Content>
        <ConntentInner>
          <div className="title">Get In Touch With Us</div>
          <div className="subtitle">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </div>
          <Gapped spaceBetween width="100%">
            <div className="contactInfo">
              <div className="contactItem">
                <AddressIcon className="icon" />
                <div className="info">
                  <div className="info__title">Address</div>
                  <div className="info__value">
                    236 5th SE Avenue, New York NY10000, United States
                  </div>
                </div>
              </div>
              <div className="contactItem">
                <PhoneIcon className="icon" />
                <div className="info">
                  <div className="info__title">Phone</div>
                  <div className="info__value">
                    <div>Mobile: +(84) 546-6789</div>
                    <div>Hotline: +(84) 456-6789</div>
                  </div>
                </div>
              </div>
              <div className="contactItem">
                <ClockIcon className="icon" />
                <div className="info">
                  <div className="info__title">Working Time</div>
                  <div className="info__value">
                    <div>Monday-Friday: 9:00 - 22:00</div>
                    <div>Saturday-Sunday: 9:00 - 21:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feedback">
              <form action="" className="feedback__form">
                <Input label="Your name" placeholder="Abc" />
                <Input label="Email address" placeholder="Abc@def.com" />
                <Input label="Subject" placeholder="This is an optional" />
                <Textarea
                  label="Message"
                  placeholder="Hi! i’d like to ask about"
                />
                <Button width={237} btnSize="l">
                  Submit
                </Button>
              </form>
            </div>
          </Gapped>
        </ConntentInner>
      </Content>
      <Advantages />
    </>
  );
};
