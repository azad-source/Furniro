import styled from "styled-components";
import HeaderBg from "assets/images/main_header_bg.png";
import { Button } from "components/shared/Button/Button";
import { HEADER_HEIGHT, MIN_CONTENT_WIDTH, SERVICE_COLOR } from "variables";
import BrowseRangeImage1 from "assets/images/Browse_The_Range/1.png";
import BrowseRangeImage2 from "assets/images/Browse_The_Range/2.png";
import BrowseRangeImage3 from "assets/images/Browse_The_Range/3.png";
import RoomImage1 from "assets/images/rooms/1.png";
import RoomImage2 from "assets/images/rooms/2.png";
import RoomImage3 from "assets/images/rooms/3.png";
import ProductMock from "mock/product.mock";
import ProductCard from "components/product/ProductCard/ProductCard";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});
  background-image: url(${HeaderBg});
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  padding: 8vw 4vw 0 0;
  box-sizing: border-box;
`;

const Banner = styled.div`
  width: 640px;
  height: 440px;
  background-color: #fff3e3;
  border-radius: 10px;
  padding: 62px 43px 37px 39px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const BannerTitle = styled.div`
  > *:nth-child(1) {
    font-size: 16px;
    letter-spacing: 3px;
    font-weight: 600;
  }
  > *:nth-child(2) {
    font-size: 52px;
    line-height: 65px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

const BannerContent = styled.div`
  margin-top: 16px;
  font-size: 16px;
`;

const BannerButton = styled.div`
  margin-top: auto;

  Button {
    padding: 25px 72px;
    font-weight: bold;
    border-radius: 0;
  }
`;

const Content = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;

  &.rooms {
    background-color: #fcf8f3;
    padding: 44px 0;

    > * {
      display: flex;
      align-items: center;
    }
  }
`;

const SectionInner = styled.div`
  min-width: ${MIN_CONTENT_WIDTH};

  .leftBlock {
    width: 422px;

    .title {
      font-size: 40px;
      font-weight: bold;
      line-height: 1.2;
    }

    .description {
      font-size: 16px;
      color: #616161;
      margin: 8px 0 24px;
    }
  }

  .rightBlock {
    margin-left: 42px;
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 510px;

    .slick-arrow {
      z-index: 100;

      &::before {
        display: block;
        color: ${SERVICE_COLOR.default} !important;
        font-size: 30px;
      }

      &.slick-next {
        right: 40px;
      }

      &.slick-prev {
        left: 10px;
      }
    }

    .slick-dots {
      display: flex !important;
      justify-content: center;
      bottom: -45px;

      li {
        border: none;
        width: 27px;
        height: 27px;
        border-radius: 50px !important;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          outline: none;
          background: none;
          color: transparent;
          padding: 0 !important;
          border: none;

          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background-color: #d8d8d8;
            border-radius: 50px;
          }
        }

        &.slick-active {
          border: 1px solid ${SERVICE_COLOR.default};

          button {
            &::before {
              background-color: ${SERVICE_COLOR.default};
            }
          }
        }
      }
    }
  }
`;

const SectionTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

const SectionSubTitle = styled.div`
  font-size: 20px;
  text-align: center;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;

  .browseRange {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;

    > * {
      align-self: center;
      justify-self: center;
      display: flex;
      flex-direction: column;

      .imageWrapper {
        width: 380px;
        height: 480px;
        overflow: hidden;
        border-radius: 10px;
      }

      .title {
        margin-top: 30px;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
      }
    }
  }

  .ourProducts {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
  }

  .showMoreBtn {
    margin-top: 32px;
    align-self: center;
  }
`;

const SliderItem = styled.div`
  width: 372px;
  height: 486px;
  overflow: hidden;
`;

const browseRangeList: { title: string; image: string }[] = [
  { title: "Dining", image: BrowseRangeImage1 },
  { title: "Living", image: BrowseRangeImage2 },
  { title: "Bedroom", image: BrowseRangeImage3 },
];

const roomsList: { title: string; image: string }[] = [
  { title: "1", image: RoomImage1 },
  { title: "2", image: RoomImage2 },
  { title: "3", image: RoomImage3 },
];

const ourProductsList = new ProductMock().list();

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
};

export default function HomePage() {
  return (
    <>
      <Header>
        <Banner>
          <BannerTitle>
            <div>New Arrival</div>
            <div>
              Discover Our <br />
              New Collection
            </div>
          </BannerTitle>
          <BannerContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </BannerContent>
          <BannerButton>
            <Button btnSize="xl">BUY Now</Button>
          </BannerButton>
        </Banner>
      </Header>
      <Content>
        <SectionWrapper>
          <SectionInner>
            <SectionTitle>Browse The Range</SectionTitle>
            <SectionSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SectionSubTitle>
            <SectionContent>
              <div className="browseRange">
                {browseRangeList.map((i) => (
                  <div key={i.title}>
                    <div className="imageWrapper">
                      <img src={i.image} alt="" />
                    </div>
                    <div className="title">{i.title}</div>
                  </div>
                ))}
              </div>
            </SectionContent>
          </SectionInner>
        </SectionWrapper>
        <SectionWrapper>
          <SectionInner>
            <SectionTitle>Our Products</SectionTitle>
            <SectionContent>
              <div className="ourProducts">
                {ourProductsList.map((product) => (
                  <ProductCard key={product.id} card={product} />
                ))}
              </div>
              <Button className="showMoreBtn" use="transparent" width={245}>
                Show More
              </Button>
            </SectionContent>
          </SectionInner>
        </SectionWrapper>
        <SectionWrapper className="rooms">
          <SectionInner>
            <div className="leftBlock">
              <div className="title">50+ Beautiful rooms inspiration</div>
              <div className="description">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </div>
              <Button width={176}>Explore More</Button>
            </div>
            <div className="rightBlock">
              <Slider {...settings}>
                {roomsList.map((i) => {
                  return (
                    <SliderItem key={i.title}>
                      <img src={i.image} alt={i.title} />
                    </SliderItem>
                  );
                })}
              </Slider>
            </div>
          </SectionInner>
        </SectionWrapper>
      </Content>
    </>
  );
}
