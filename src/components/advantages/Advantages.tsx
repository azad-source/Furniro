import styled from "styled-components";
import { MAIN_BG_COLOR, MIN_CONTENT_WIDTH_2 } from "variables";
import TrophyIcon from "assets/icons/trophy.svg?react";
import GuaranteeIcon from "assets/icons/guarantee.svg?react";
import ShippingIcon from "assets/icons/shipping.svg?react";
import CustomerSupportIcon from "assets/icons/customer-support.svg?react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${MAIN_BG_COLOR.default};
`;

const Inner = styled.div`
  width: ${MIN_CONTENT_WIDTH_2};
  padding: 100px 0;
  display: flex;
  align-items: center;

  .list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      display: flex;
      gap: 10px;

      .info {
        display: flex;
        flex-direction: column;
        gap: 2px;

        &__title {
          font-size: ${(props) => props.theme.textExtraLargeFontSize};
          line-height: ${(props) => props.theme.textExtraLargeLineHeight};
          font-weight: 600;
        }

        &__description {
          font-size: ${(props) => props.theme.textLargeFontSize};
          line-height: ${(props) => props.theme.textLargeLineHeight};
          font-weight: 500;
          color: #898989;
        }
      }
    }
  }
`;

interface IAdvantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const advantagesList: IAdvantage[] = [
  {
    icon: <TrophyIcon />,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: <GuaranteeIcon />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: <ShippingIcon />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: <CustomerSupportIcon />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

interface IProps {
  className?: string;
}

export default function Advantages({ className }: IProps) {
  return (
    <Wrapper className={className}>
      <Inner>
        <div className="list">
          {advantagesList.map((i) => (
            <div key={i.title} className="item">
              <div className="icon">{i.icon}</div>
              <div className="info">
                <div className="info__title">{i.title}</div>
                <div className="info__description">{i.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Inner>
    </Wrapper>
  );
}
