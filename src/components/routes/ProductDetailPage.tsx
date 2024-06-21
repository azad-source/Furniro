import Breadcrumbs from "components/shared/Breadcrumbs/Breadcrumbs";
import styled from "styled-components";
import Image1 from "assets/images/productDetail/ProdDetailImage1.png";
import Image2 from "assets/images/productDetail/ProdDetailImage2.png";
import Image3 from "assets/images/productDetail/ProdDetailImage3.png";
import Image4 from "assets/images/productDetail/ProdDetailImage4.png";
import Image5 from "assets/images/productDetail/ProdDetailImage5.png";
import DescriptionImage1 from "assets/images/productDetail/Description1.png";
import DescriptionImage2 from "assets/images/productDetail/Description2.png";
import {
  MAIN_BG_COLOR,
  MIN_CONTENT_WIDTH,
  SECONDARY_BORDER_COLOR,
  SECONDARY_TEXT_COLOR,
  SERVICE_COLOR,
} from "variables";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Button } from "components/shared/Button/Button";
import FacebookIcon from "assets/icons/facebook.svg?react";
import LinkedinIcon from "assets/icons/linkedin.svg?react";
import TwitterIcon from "assets/icons/twitter.svg?react";
import StarRating from "components/shared/StarRating/StarRating";
import { Link } from "components/shared/Link/Link";
import ProductMock from "mock/product.mock";
import ProductCard from "components/product/ProductCard/ProductCard";

const productMock = new ProductMock();
const relatedProducts = productMock.list().slice(0, 3);

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 0;
`;

const MainInfo = styled.div`
  width: ${MIN_CONTENT_WIDTH};
  display: flex;
  /* align-items: center; */
`;

const Photos = styled.div`
  display: flex;
  gap: 30px;
  height: 500px;

  .currentImage {
    width: 423px;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${MAIN_BG_COLOR.default};

    * {
      height: 100%;
    }

    .imageWrapper {
      flex-grow: 1;
      width: 423px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  .previewList {
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow-y: scroll;
    padding-right: 10px;

    &__item {
      width: 76px;
      min-height: 80px;
      flex-grow: 1;
      flex-shrink: 1;
      background-color: ${MAIN_BG_COLOR.default};
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &_active {
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.3);
      }

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }

    &:hover {
      &::-webkit-scrollbar {
        width: 1px;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid ${SECONDARY_TEXT_COLOR.default};
      }
    }

    &::-webkit-scrollbar {
      width: 1px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.05);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #eee;
      outline: 1px solid #eee;
    }
  }
`;

const ProductInfo = styled.div`
  margin-left: 80px;

  .title {
    font-size: ${({ theme }) => theme.titleMediumFontSize};
    line-height: ${({ theme }) => theme.titleMediumLineHeight};
    font-weight: 400;
  }
  .price {
    color: ${SECONDARY_TEXT_COLOR.default};
    font-size: ${({ theme }) => theme.textExtraLargeFontSize};
    line-height: ${({ theme }) => theme.textExtraLargeLineHeight};
    font-weight: 500;
  }
  .userInfo {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 18px;
    height: 30px;

    .rate {
    }
    .separator {
      width: 1px;
      height: 100%;
      background-color: ${SECONDARY_TEXT_COLOR.default};
    }
    .review {
      color: ${SECONDARY_TEXT_COLOR.default};
      font-size: ${({ theme }) => theme.textExtraSmallFontSize};
      line-height: ${({ theme }) => theme.textExtraSmallLineHeight};
    }
  }
  .description {
    margin-top: 12px;
    font-size: ${({ theme }) => theme.textExtraSmallFontSize};
    line-height: ${({ theme }) => theme.textExtraSmallLineHeight};
    font-weight: 400;
    max-width: 424px;
  }

  .size,
  .color {
    margin-top: 22px;

    &__title {
      font-size: ${({ theme }) => theme.textMediumFontSize};
      line-height: ${({ theme }) => theme.textMediumLineHeight};
      color: ${SECONDARY_TEXT_COLOR.default};
    }

    &__list {
      margin-top: 12px;
      display: flex;
      gap: 16px;

      .item {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }

  .size {
    &__list {
      .item {
        border-radius: 5px;
        background-color: ${MAIN_BG_COLOR.default};
        font-size: ${({ theme }) => theme.textExtraSmallFontSize};
        line-height: ${({ theme }) => theme.textExtraSmallLineHeight};
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;

        &_active {
          color: #fff;
          background-color: ${SERVICE_COLOR.default};
        }
      }
    }
  }

  .color {
    &__list {
      .item {
        border-radius: 50px;
        background-color: ${MAIN_BG_COLOR.default};
        font-size: ${({ theme }) => theme.textExtraSmallFontSize};
        line-height: ${({ theme }) => theme.textExtraSmallLineHeight};
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        &_active {
          box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
        }

        &_blue {
          background-color: #816dfa;
        }

        &_black {
          background-color: #000;
        }

        &_brown {
          background-color: #b88e2f;
        }
      }
    }
  }

  .actions {
    margin-top: 32px;
    display: flex;
    align-items: center;
    gap: 18px;

    .count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 123px;
      height: 64px;
      border-radius: 10px;
      border: 1px solid ${SECONDARY_TEXT_COLOR.default};
      box-sizing: border-box;
      user-select: none;

      &__minus,
      &__plus {
        padding: 15px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.5);
        font-size: 22px;

        &:hover {
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }

    Button {
      border-radius: 15px;
    }
  }

  .params {
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid ${SECONDARY_BORDER_COLOR.default};
    color: ${SECONDARY_TEXT_COLOR.default};
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};

    .paramsItem {
      display: flex;
      gap: 12px;

      &__title {
        width: 75px;
      }

      &__value {
        display: flex;
        align-items: center;
        gap: 25px;
      }
    }
  }
`;

const SecondaryInfo = styled.div`
  margin-top: 55px;
  width: ${MIN_CONTENT_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${SECONDARY_BORDER_COLOR.default};
  padding: 48px 0 65px;

  .tabContent {
    max-width: 1026px;
    color: ${SECONDARY_TEXT_COLOR.default};

    &__images {
      margin-top: 36px;
      display: flex;
      gap: 28px;

      img {
        width: 48%;
        display: block;
      }
    }
  }
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 52px;
  font-size: ${({ theme }) => theme.textExtraLargeFontSize};
  line-height: ${({ theme }) => theme.textExtraLargeLineHeight};
  margin-bottom: 36px;
`;

const Tab = styled.div<{ active?: boolean }>`
  font-weight: ${(props) => (props.active ? 600 : 400)};
  cursor: pointer;
`;

const RelatedProducts = styled.div`
  width: ${MIN_CONTENT_WIDTH};
  padding: 55px 0;
  border-top: 1px solid ${SECONDARY_BORDER_COLOR.default};
  display: flex;
  flex-direction: column;
  align-items: center;

  > .title {
    font-size: ${({ theme }) => theme.titleSmallFontSize};
    line-height: ${({ theme }) => theme.titleSmallLineHeight};
    font-weight: 500;
    text-align: center;
    margin-bottom: 26px;
  }

  .list {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-bottom: 44px;
  }
`;

const previewImages = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
];

enum TabEnum {
  Description = "Description",
  AdditInfo = "AdditInfo",
  Reviews = "Reviews",
}

enum SizeEnum {
  L = "L",
  XL = "XL",
  XS = "XS",
}

enum ColorEnum {
  Blue = "blue",
  Black = "black",
  Brown = "brown",
}

const TabCaption: Record<TabEnum, string> = {
  [TabEnum.Description]: "Description",
  [TabEnum.AdditInfo]: "Additional Information",
  [TabEnum.Reviews]: "Reviews [5]",
};

export default function ProductDetailPage() {
  const [currentPhoto, setCurrentPhoto] = useState(Image1);
  const [tab, setTab] = useState<TabEnum>(TabEnum.Description);
  const [size, setSize] = useState<SizeEnum>(SizeEnum.L);
  const [color, setColor] = useState<ColorEnum>(ColorEnum.Blue);
  const [count, setCount] = useState<number>(1);

  const handleSwitchPhoto = (link: string) => {
    setCurrentPhoto(link);
  };

  const isActivePhoto = (link: string) => {
    return link === currentPhoto;
  };

  const increaseCount = () => {
    setCount((p) => p + 1);
  };

  const decreaseCount = () => {
    setCount((p) => (p > 1 ? p - 1 : 1));
  };

  return (
    <>
      <Breadcrumbs />
      <Content>
        <MainInfo>
          <Photos>
            <div className="previewList">
              {previewImages.map((i) => (
                <div
                  key={i}
                  className={`previewList__item ${isActivePhoto(i) && "previewList__item_active"}`}
                  onClick={() => handleSwitchPhoto(i)}
                >
                  <img src={i} />
                </div>
              ))}
            </div>
            <div className="currentImage">
              <Zoom>
                <div className="imageWrapper">
                  <img src={currentPhoto} />
                </div>
              </Zoom>
            </div>
          </Photos>
          <ProductInfo>
            <div className="title">Asgaard sofa</div>
            <div className="price">$ 250,000.00</div>
            <div className="userInfo">
              <div className="rate">
                <StarRating rating={4.5} />
              </div>
              <div className="separator" />
              <div className="review">5 Customer Review</div>
            </div>
            <div className="description">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </div>
            <div className="size">
              <div className="size__title">Size</div>
              <div className="size__list">
                {Object.values(SizeEnum).map((i) => {
                  return (
                    <div
                      className={`item ${size === i && "item_active"}`}
                      onClick={() => setSize(i)}
                    >
                      {i}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="color">
              <div className="color__title">Color</div>
              <div className="color__list">
                {Object.values(ColorEnum).map((i) => {
                  return (
                    <div
                      key={i}
                      className={`item item_${i} ${color === i && "item_active"}`}
                      onClick={() => setColor(i)}
                    />
                  );
                })}
              </div>
            </div>
            <div className="actions">
              <div className="count">
                <span className="count__minus" onClick={decreaseCount}>
                  -
                </span>
                <span className="count__value">{count}</span>
                <span className="count__plus" onClick={increaseCount}>
                  +
                </span>
              </div>
              <Button btnSize="l" use="transparent">
                Add To Cart
              </Button>
              <Button use="transparent" btnSize="l">
                + Compare
              </Button>
            </div>
            <div className="separator" />
            <div className="params">
              <div className="paramsItem">
                <div className="paramsItem__title">SKU</div>
                <div>:</div>
                <div className="paramsItem__value">SS001</div>
              </div>
              <div className="paramsItem">
                <div className="paramsItem__title">Category</div>
                <div>:</div>
                <div className="paramsItem__value">Sofas</div>
              </div>
              <div className="paramsItem">
                <div className="paramsItem__title">Tags</div>
                <div>:</div>
                <div className="paramsItem__value">Sofa, Chair, Home, Shop</div>
              </div>
              <div className="paramsItem">
                <div className="paramsItem__title">Share</div>
                <div>:</div>
                <div className="paramsItem__value">
                  <Link href="/">
                    <FacebookIcon />
                  </Link>
                  <Link href="/">
                    <LinkedinIcon />
                  </Link>
                  <Link href="/">
                    <TwitterIcon />
                  </Link>
                </div>
              </div>
            </div>
          </ProductInfo>
        </MainInfo>
        <SecondaryInfo>
          <Tabs>
            {Object.values(TabEnum).map((key) => (
              <Tab active={key === tab} onClick={() => setTab(key)}>
                {TabCaption[key]}
              </Tab>
            ))}
          </Tabs>
          {tab === TabEnum.Description ? (
            <div className="tabContent">
              <div>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </div>
              <br />
              <div>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </div>
              <div className="tabContent__images">
                <img src={DescriptionImage1} alt="" />
                <img src={DescriptionImage2} alt="" />
              </div>
            </div>
          ) : tab === TabEnum.AdditInfo ? (
            <div className="tabContent">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                eos, ex odio exercitationem dolorum totam eaque iusto velit
                autem labore quis officia aspernatur officiis alias quod
                similique consequatur sunt dolor.
              </div>
              <br />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                eos, ex odio exercitationem dolorum totam eaque iusto velit
                autem labore quis officia aspernatur officiis alias quod
                similique consequatur sunt dolor.
              </div>
            </div>
          ) : (
            <div className="tabContent">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
                faucibus nisl tincidunt eget nullam non nisi est sit. Cum sociis
                natoque penatibus et. Aenean vel elit scelerisque mauris
                pellentesque pulvinar pellentesque habitant morbi. Justo donec
                enim diam vulputate ut. Vehicula ipsum a arcu cursus vitae
                congue mauris. Morbi tristique senectus et netus et malesuada
                fames. Nullam ac tortor vitae purus. Nunc vel risus commodo
                viverra. Volutpat lacus laoreet non curabitur gravida arcu ac
                tortor dignissim. Condimentum lacinia quis vel eros donec ac
                odio. Dis parturient montes nascetur ridiculus mus. Nunc eget
                lorem dolor sed viverra ipsum nunc. Faucibus purus in massa
                tempor nec feugiat nisl.
              </div>
              <br />
              <div>
                Nibh tellus molestie nunc non blandit massa. Pellentesque
                habitant morbi tristique senectus et netus et malesuada. Et
                malesuada fames ac turpis egestas integer eget. Facilisi morbi
                tempus iaculis urna id volutpat lacus laoreet non. Nisl rhoncus
                mattis rhoncus urna neque viverra justo nec ultrices.
                Scelerisque fermentum dui faucibus in ornare quam. Nulla
                facilisi cras fermentum odio eu feugiat. Sed nisi lacus sed
                viverra tellus in hac habitasse. Eget lorem dolor sed viverra
                ipsum. Purus faucibus ornare suspendisse sed nisi lacus sed
                viverra. Sapien faucibus et molestie ac feugiat sed lectus.
                Viverra ipsum nunc aliquet bibendum enim facilisis gravida
                neque. Auctor elit sed vulputate mi sit. In hac habitasse platea
                dictumst quisque sagittis purus sit.
              </div>
              <br />
              <div>
                Sit amet justo donec enim diam. Sed id semper risus in hendrerit
                gravida rutrum. Justo donec enim diam vulputate ut. Amet luctus
                venenatis lectus magna. Non enim praesent elementum facilisis
                leo vel. Sem viverra aliquet eget sit amet tellus. Commodo
                ullamcorper a lacus vestibulum sed. Porta lorem mollis aliquam
                ut porttitor leo. Ultricies tristique nulla aliquet enim tortor
                at auctor. Viverra justo nec ultrices dui sapien eget. Eget
                velit aliquet sagittis id consectetur purus ut faucibus
                pulvinar. At in tellus integer feugiat.
              </div>
            </div>
          )}
        </SecondaryInfo>
        <RelatedProducts>
          <div className="title">Related Products</div>
          <div className="list">
            {relatedProducts.map((i) => {
              return <ProductCard card={i} />;
            })}
          </div>
          <Button use="transparent" width={245}>
            Show More
          </Button>
        </RelatedProducts>
      </Content>
    </>
  );
}
