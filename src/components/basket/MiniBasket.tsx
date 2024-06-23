import styled from "styled-components";
import CloseIcon from "assets/icons/close-icon.svg?react";
import RemoveIcon from "assets/icons/remove-icon.svg?react";
import { useAppStore } from "store";
import { SECONDARY_BORDER_COLOR, SERVICE_COLOR } from "variables";
import { useEffect, useState } from "react";
import ProductMock from "mock/product.mock";
import { getRandomInt } from "utils/randomInteger";
import { priceFormatter } from "utils/priceFormat";
import { GlobalStylesForModal } from "globalStyles";
import { Button } from "components/shared/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "domain/routPaths";

const productMock = new ProductMock();

const cartList = productMock
  .list()
  .map((i) => {
    return { product: i, count: getRandomInt(1, 10) };
  })
  .slice(0, 20);

const totalAmount = cartList.reduce((acc, curr) => {
  return acc + curr.product.price * curr.count;
}, 0);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100000;
  display: none;
`;

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  width: 417px;
  height: 100vh;
  box-sizing: border-box;
  background: #fff;
  z-index: 1000000;
  padding: 0 40px 28px 30px;
  transition: all 200ms ease;
  overflow-y: scroll;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 26px 0;
  border-bottom: 1px solid ${SECONDARY_BORDER_COLOR.default};

  .title {
    font-size: ${({ theme }) => theme.textExtraLargeFontSize};
    line-height: ${({ theme }) => theme.textExtraLargeLineHeight};
    font-weight: 600;
  }

  .closeIcon {
    position: absolute;
    top: 35px;
    right: 0;
    cursor: pointer;
  }
`;

const Body = styled.div`
  box-sizing: border-box;
  height: calc(100% - 85px);
  padding-top: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  padding-bottom: 200px;
`;

const CartRow = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  .productImage {
    width: 108px;
    height: 105px;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .title {
      font-size: ${({ theme }) => theme.textMediumFontSize};
      line-height: ${({ theme }) => theme.textMediumLineHeight};
      font-weight: 400;
    }

    .summ {
      display: flex;
      gap: 15px;
      align-items: center;

      &__count {
        font-size: ${({ theme }) => theme.textMediumFontSize};
        line-height: ${({ theme }) => theme.textMediumLineHeight};
        font-weight: 300;
      }

      &__amount {
        font-size: ${({ theme }) => theme.textExtraSmallFontSize};
        line-height: ${({ theme }) => theme.textExtraSmallLineHeight};
        font-weight: 500;
        color: ${SERVICE_COLOR.default};
      }

      .multipleIcon {
        font-size: ${({ theme }) => theme.textExtraSmallFontSize};
        line-height: ${({ theme }) => theme.textExtraSmallLineHeight};
        font-weight: 300;
      }
    }
  }

  .removeIcon {
    cursor: pointer;
    margin-left: auto;
  }
`;

const Total = styled.div`
  display: flex;
  gap: 100px;
  font-size: ${({ theme }) => theme.textMediumFontSize};
  line-height: ${({ theme }) => theme.textMediumLineHeight};
  padding: 15px 0;

  .title {
    font-weight: 400;
  }

  .amount {
    font-weight: 600;
    color: ${SERVICE_COLOR.default};
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 14px;
  border-top: 1px solid ${SECONDARY_BORDER_COLOR.default};
  padding: 26px 0;

  Button {
    border-radius: 50px;
  }
`;

export default function MiniBasket() {
  const navigate = useNavigate();

  const { toggleShowMiniBasket } = useAppStore();
  const [basketStyles, setBasketStyles] = useState({
    cart: { right: "-100%" },
    overlay: { display: "none" },
  });

  useEffect(() => {
    setTimeout(() => {
      setBasketStyles({ cart: { right: "0" }, overlay: { display: "block" } });
    }, 0);
  }, []);

  const handleRemoveItem = () => {
    alert("item removed");
  };

  const openCartPage = () => {
    toggleShowMiniBasket();
    navigate(RoutePath.pages.cart);
  };

  return (
    <>
      <GlobalStylesForModal />
      <Overlay style={basketStyles.overlay} onClick={toggleShowMiniBasket} />
      <CartWrapper style={basketStyles.cart}>
        <Header>
          <div className="title">Shopping Cart</div>
          <CloseIcon className="closeIcon" onClick={toggleShowMiniBasket} />
        </Header>
        <Body>
          <CartList>
            {cartList.map(({ product, count }, index) => (
              <CartRow key={index}>
                <div className="productImage">
                  <img src={product.imgPreview} />
                </div>
                <div className="productInfo">
                  <div className="title">{product.name}</div>
                  <div className="summ">
                    <div className="summ__count">{count}</div>
                    <div className="multipleIcon">X</div>
                    <div className="summ__amount">
                      {priceFormatter.format(product.price)}
                    </div>
                  </div>
                </div>
                <RemoveIcon className="removeIcon" onClick={handleRemoveItem} />
              </CartRow>
            ))}
          </CartList>
        </Body>
        <Footer>
          <Total>
            <div className="title">Subtotal</div>
            <div className="amount">{priceFormatter.format(totalAmount)}</div>
          </Total>
          <ButtonsWrapper>
            <Button use="transparent" btnSize="s" onClick={openCartPage}>
              Cart
            </Button>
            <Button use="transparent" btnSize="s">
              Checkout
            </Button>
            <Button use="transparent" btnSize="s">
              Comparison
            </Button>
          </ButtonsWrapper>
        </Footer>
      </CartWrapper>
    </>
  );
}
