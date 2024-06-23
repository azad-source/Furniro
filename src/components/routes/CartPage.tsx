import PageHeader from "components/shared/PageHeader";
import ProductMock from "mock/product.mock";
import { IProduct } from "models/product.models";
import { useState } from "react";
import styled from "styled-components";
import { priceFormatter } from "utils/priceFormat";
import { getRandomInt } from "utils/randomInteger";
import {
  MAIN_BG_COLOR,
  MIN_CONTENT_WIDTH,
  SECONDARY_TEXT_COLOR,
  SERVICE_COLOR,
} from "variables";
import CartRemoveIcon from "assets/icons/cart-remove-icon.svg?react";
import { Button } from "components/shared/Button/Button";
import Advantages from "components/advantages/Advantages";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "domain/routPaths";

interface ICartItem {
  count: number;
  product: IProduct;
}

const productMock = new ProductMock();

const cartList: ICartItem[] = productMock
  .list()
  .map((i) => {
    return { product: i, count: getRandomInt(1, 10) };
  })
  .slice(0, 3);

const Content = styled.div`
  position: relative;
  padding: 72px 0 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartInner = styled.div`
  width: ${MIN_CONTENT_WIDTH};
  display: flex;
  gap: 30px;
`;

const TableWrapper = styled.div`
  width: 817px;

  table {
    min-width: 100%;

    thead {
      font-size: ${({ theme }) => theme.textMediumFontSize};
      line-height: ${({ theme }) => theme.textMediumLineHeight};
      font-weight: 500;

      background-color: ${MAIN_BG_COLOR.default};
      tr {
        th {
          text-align: left;
          padding: 10px 20px;
          box-sizing: border-box;
        }
      }
    }
    tbody {
      font-size: ${({ theme }) => theme.textMediumFontSize};
      line-height: ${({ theme }) => theme.textMediumLineHeight};
      font-weight: 400;

      tr {
        td {
          box-sizing: border-box;
          vertical-align: middle;
          padding: 10px 0;

          &:not(:first-child) {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        &:first-child {
          td {
            padding-top: 55px;
          }
        }
      }
    }

    td {
      .itemImage {
        overflow: hidden;
        height: 105px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .itemName,
      .itemPrice {
        color: ${SECONDARY_TEXT_COLOR.default};
      }

      .itemRemove {
        text-align: center;
        cursor: pointer;
      }
    }

    .itemImage {
      width: 105px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .itemName {
      width: 180px;
    }

    .itemPrice {
      width: 100px;
    }

    .itemCount {
      width: 80px;

      input {
        max-width: 62px;
        height: 32px;
        border-radius: 5px;
        box-sizing: border-box;
        border: 1px solid ${SECONDARY_TEXT_COLOR.default};
        text-align: center;
        padding-left: 12px;
      }
    }

    .itemSubtotal {
      width: 100px;
    }
  }
`;

const CartTotals = styled.div`
  background-color: ${MAIN_BG_COLOR.default};
  flex-grow: 1;
  height: min-content;
  padding: 15px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.textMediumFontSize};
  line-height: ${({ theme }) => theme.textMediumLineHeight};
  font-weight: 500;

  .title {
    font-size: ${({ theme }) => theme.titleExtraSmallFontSize};
    line-height: ${({ theme }) => theme.titleExtraSmallLineHeight};
    font-weight: 600;
    margin-bottom: 60px;
  }

  .subtotal {
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    &__value {
      font-weight: 400;
    }
  }

  .total {
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    &__value {
      font-size: ${({ theme }) => theme.textLargeFontSize};
      line-height: ${({ theme }) => theme.textLargeLineHeight};
      font-weight: 500;
      color: ${SERVICE_COLOR.default};
    }
  }

  .checkOutBtn {
    border-radius: 15px;
  }
`;

interface IState {
  items: ICartItem[];
}

export const CartPage = () => {
  const navigate = useNavigate();

  const [state, setState] = useState<IState>({ items: cartList });

  const totalAmount = state.items.reduce((acc, curr) => {
    return acc + curr.product.price * curr.count;
  }, 0);

  const handleChangeCount = (productId: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      let count = +e.target.value;
      count = count < 1 ? 1 : count;
      setState((prev) => {
        const updatedItems = prev.items.map((i) =>
          productId === i.product.id ? { ...i, count } : i
        );
        return { ...prev, items: updatedItems };
      });
    };
  };

  const handleRemoveItem = (id: string) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.product.id !== id),
    }));
  };

  const openCheckoutPage = () => {
    navigate(RoutePath.pages.checkout);
  };

  return (
    <>
      <PageHeader />
      <Content>
        <CartInner>
          <TableWrapper>
            <table>
              <thead>
                <tr>
                  <th className="itemImage" />
                  <th className="itemName">Product</th>
                  <th className="itemPrice">Price</th>
                  <th className="itemCount">Quantity</th>
                  <th className="itemSubtotal">Subtotal</th>
                  <th className="itemRemove" />
                </tr>
              </thead>
              <tbody>
                {state.items.map((i) => {
                  return (
                    <tr key={i.product.id}>
                      <td>
                        <div className="itemImage">
                          <img src={i.product.imgPreview} />
                        </div>
                      </td>
                      <td>
                        <div className="itemName">{i.product.name}</div>
                      </td>
                      <td>
                        <div className="itemPrice">
                          {priceFormatter.format(i.product.price)}
                        </div>
                      </td>
                      <td>
                        <div className="itemCount">
                          <input
                            type="number"
                            value={i.count}
                            min={1}
                            onChange={handleChangeCount(i.product.id)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="itemSubtotal">
                          {priceFormatter.format(i.product.price * i.count)}
                        </div>
                      </td>
                      <td>
                        <div
                          className="itemRemove"
                          onClick={() => handleRemoveItem(i.product.id)}
                        >
                          <CartRemoveIcon />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableWrapper>
          <CartTotals>
            <div className="title">Cart Totals</div>
            <div className="subtotal">
              <div className="subtotal__title">Subtotal</div>
              <div className="subtotal__value">
                {priceFormatter.format(totalAmount)}
              </div>
            </div>
            <div className="total">
              <div className="total__title">Total</div>
              <div className="total__value">
                {priceFormatter.format(totalAmount)}
              </div>
            </div>
            <Button
              use="transparent"
              btnSize="l"
              className="checkOutBtn"
              width={200}
              onClick={openCheckoutPage}
            >
              Check Out
            </Button>
          </CartTotals>
        </CartInner>
      </Content>
      <Advantages />
    </>
  );
};
