import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "domain/routPaths";
import { IProduct } from "models/product.models";
import { priceFormatter } from "utils/priceFormat";
import { Button } from "components/shared/Button/Button";
import ShareIcon from "assets/icons/share.svg?react";
import CompareIcon from "assets/icons/compare.svg?react";
import LikeIcon from "assets/icons/like.svg?react";

const Wrapper = styled.div`
  width: 285px;
  height: 446px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 100ms all ease;
  background-color: #f4f5f7;
  position: relative;

  .image {
    overflow: hidden;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;

    .title {
      font-size: 24px;
      font-weight: 600;
      line-height: 1.2;
    }

    .description {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #898989;
    }

    .prices {
      display: flex;
      align-items: center;
      gap: 16px;

      .price {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.5;
      }

      .oldPrice {
        font-size: 16px;
        line-height: 1.5;
        color: #b0b0b0;
        text-decoration: line-through;
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    opacity: 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
      opacity: 1;
    }

    .actions {
      display: flex;
      gap: 20px;

      .action {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  &:hover {
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
  }
`;

interface IProps {
  card: IProduct;
}

export default function ProductCard({ card }: IProps) {
  const navigate = useNavigate();

  const openProduct = () => {
    navigate(RoutePath.getProductDetailsPath(card.id));
  };

  return (
    <Wrapper onClick={openProduct}>
      <div className="image">
        <img src={card.imgPreview} alt={card.name} />
      </div>
      <div className="info">
        <div className="title">{card.name}</div>
        <div className="description">{card.shortDescription}</div>
        <div className="prices">
          <div className="price">{priceFormatter.format(card.price)}</div>
          {!!card?.oldPrice && (
            <div className="oldPrice">
              {priceFormatter.format(card.oldPrice)}
            </div>
          )}
        </div>
      </div>
      <div className="overlay">
        <Button use="transparent" width={202}>
          Add to cart
        </Button>
        <div className="actions">
          <div className="action">
            <ShareIcon />
            Share
          </div>
          <div className="action">
            <CompareIcon />
            Compare
          </div>
          <div className="action">
            <LikeIcon />
            Like
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
