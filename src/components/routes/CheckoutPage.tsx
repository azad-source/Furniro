import Advantages from "components/advantages/Advantages";
import { Button } from "components/shared/Button/Button";
import Gapped from "components/shared/Gapped/Gapped";
import Input from "components/shared/Input/Input";
import PageHeader from "components/shared/PageHeader";
import Select from "components/shared/Select/Select";
// import { useState } from "react";
import styled from "styled-components";
import {
  MAIN_TEXT_COLOR,
  MIN_CONTENT_WIDTH,
  SECONDARY_BORDER_COLOR,
  SECONDARY_TEXT_COLOR,
  SERVICE_COLOR,
} from "variables";

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

const Inner = styled.div`
  width: ${MIN_CONTENT_WIDTH};
  display: flex;
  justify-content: space-between;
`;

const BillingDetails = styled.div`
  padding: 35px 75px;

  .title {
    font-size: ${({ theme }) => theme.titleSmallFontSize};
    line-height: ${({ theme }) => theme.titleSmallLineHeight};
    font-weight: 600;
    margin-bottom: 36px;
  }

  .form {
    width: 453px;
    display: flex;
    flex-direction: column;
    gap: 36px;

    > * {
      width: 100%;
    }
  }
`;

const Summary = styled.div`
  padding: 85px 40px;
  width: 535px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  .amount {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;

    .amountHead,
    .subtotal,
    .total {
      display: flex;
      justify-content: space-between;
    }

    .amountHead {
      font-size: ${({ theme }) => theme.textExtraLargeFontSize};
      line-height: ${({ theme }) => theme.textExtraLargeLineHeight};
      font-weight: 500;
    }

    .cartItems {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .cartItem {
        display: flex;
        gap: 10px;

        &__name {
          color: ${SECONDARY_TEXT_COLOR.default};
        }

        &__price {
          margin-left: auto;
        }
      }
    }

    .total {
      &__value {
        font-size: ${({ theme }) => theme.textExtraLargeFontSize};
        line-height: ${({ theme }) => theme.textExtraLargeLineHeight};
        font-weight: 700;
        color: ${SERVICE_COLOR.default};
      }
    }
  }

  .separator {
    width: 100%;
    height: 1px;
    background: ${SECONDARY_BORDER_COLOR.default};
    margin: 30px 0 22px;
  }

  .payment {
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};

    strong {
      font-weight: 600;
    }

    .paymentMethods {
      label {
        display: flex;
        align-items: center;
        gap: 15px;
        color: ${SECONDARY_TEXT_COLOR.default};
        padding: 8px 0;

        &:has(input:checked) {
          color: ${MAIN_TEXT_COLOR.default};
        }
      }
    }
  }

  .placeOrderBtn {
    margin-top: 40px;
    border-radius: 15px;
  }
`;

// interface IState {}

const regions = [
  { value: "usa", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "mexico", label: "Mexico" },
  { value: "brazil", label: "Brazil" },
  { value: "argentina", label: "Argentina" },
  { value: "united_kingdom", label: "United Kingdom" },
  { value: "france", label: "France" },
  { value: "germany", label: "Germany" },
  { value: "japan", label: "Japan" },
  { value: "australia", label: "Australia" },
];

const provinces = [
  { value: "ontario", label: "Ontario" },
  { value: "quebec", label: "Quebec" },
  { value: "british_columbia", label: "British Columbia" },
  { value: "alberta", label: "Alberta" },
  { value: "manitoba", label: "Manitoba" },
  { value: "saskatchewan", label: "Saskatchewan" },
  { value: "nova_scotia", label: "Nova Scotia" },
  { value: "new_brunswick", label: "New Brunswick" },
  { value: "newfoundland_and_labrador", label: "Newfoundland and Labrador" },
  { value: "prince_edward_island", label: "Prince Edward Island" },
];

export const CheckoutPage = () => {
  // const [state, setState] = useState<IState>({});

  return (
    <>
      <PageHeader />
      <Content>
        <Inner>
          <BillingDetails>
            <div className="title">Billing details</div>
            <div className="form">
              <Gapped gap={30} grow>
                <Input label="First Name" />
                <Input label="Last Name" />
              </Gapped>
              <Input label="Company Name (Optional)" />
              <Select label="Country / Region" items={regions} />
              <Input label="Street address" />
              <Input label="Town / City" />
              <Select label="Province" items={provinces} />
              <Input label="ZIP code" />
              <Input label="Phone" />
              <Input label="Email address" />
              <Input placeholder="Additional information" />
            </div>
          </BillingDetails>
          <Summary>
            <div className="amount">
              <div className="amountHead">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="cartItems">
                <div className="cartItem">
                  <span className="cartItem__name">Asgaard sofa</span>
                  <span>X</span>
                  <span className="cartItem__count">1</span>
                  <span className="cartItem__price">$ 250,000.00</span>
                </div>
              </div>
              <div className="subtotal">
                <span className="subtotal__title">Subtotal</span>
                <span className="subtotal__value">$ 250,000.00</span>
              </div>
              <div className="total">
                <span className="total__title">Total</span>
                <span className="total__value">$ 250,000.00</span>
              </div>
            </div>
            <div className="separator" />
            <div className="payment">
              <div className="paymentMethods">
                <div>
                  <label htmlFor="directBank">
                    <input
                      type="radio"
                      name="payment_method"
                      id="directBank"
                      defaultChecked
                    />
                    <span>Direct Bank Transfer</span>
                  </label>
                  <div>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>
                <div>
                  <label htmlFor="digitalWallets">
                    <input
                      type="radio"
                      name="payment_method"
                      id="digitalWallets"
                    />
                    <span>Digital Wallets</span>
                    Transfer
                  </label>
                </div>
                <div>
                  <label htmlFor="cashOnDelivery">
                    <input
                      type="radio"
                      name="payment_method"
                      id="cashOnDelivery"
                    />
                    <span>Cash On Delivery</span>
                  </label>
                </div>
                <div>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <strong>privacy policy</strong>.
                </div>
              </div>
            </div>
            <Button
              btnSize="l"
              width={318}
              use="transparent"
              className="placeOrderBtn"
            >
              Place order
            </Button>
          </Summary>
        </Inner>
      </Content>
      <Advantages />
    </>
  );
};
