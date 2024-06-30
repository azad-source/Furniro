import PageHeader from "components/shared/PageHeader";
import BlogMock from "mock/blog.mock";
import styled from "styled-components";
import { MIN_CONTENT_WIDTH, SECONDARY_TEXT_COLOR } from "variables";
import UserIcon from "assets/icons/user-icon.svg?react";
import CalendarIcon from "assets/icons/calendar-icon.svg?react";
import TagIcon from "assets/icons/price-tag-icon.svg?react";
import LoupeIcon from "assets/icons/loupe-icon.svg?react";
import { Link } from "components/shared/Link/Link";
import Pagination from "components/shared/Pagination/Pagination";
import { useState } from "react";
import Input from "components/shared/Input/Input";
import RecentBlogMock from "mock/recentBlog.mock";
import Advantages from "components/advantages/Advantages";

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentInner = styled.div`
  width: ${MIN_CONTENT_WIDTH};
  box-sizing: border-box;
  padding: 100px 0;
  display: flex;
  justify-content: space-between;

  .blogsWrapper {
    width: 817px;
    display: flex;
    flex-direction: column;

    .blogList {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 54px;

      .blog {
        &__image {
          overflow: hidden;
          border-radius: 10px;
        }

        &__info {
          margin-top: 12px;
          display: flex;
          gap: 35px;

          > * {
            display: flex;
            gap: 8px;
          }
        }

        &__title {
          margin-top: 15px;
          font-size: ${({ theme }) => theme.titleExtraSmallFontSize};
          line-height: ${({ theme }) => theme.titleExtraSmallLineHeight};
          font-weight: 500;
        }

        &__description {
          margin-top: 12px;
          font-size: ${({ theme }) => theme.textMediumFontSize};
          line-height: ${({ theme }) => theme.textMediumLineHeight};
          font-weight: 400;
          color: ${SECONDARY_TEXT_COLOR.default};
        }

        .readMoreLink {
          display: block;
          margin-top: 10px;
        }
      }
    }

    .pagination {
      margin-top: 100px;
      margin-left: auto;
    }
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;

    .categories {
      width: 100%;
      padding: 42px 35px;
      box-sizing: border-box;

      &__title {
        font-size: ${({ theme }) => theme.textExtraLargeFontSize};
        line-height: ${({ theme }) => theme.textExtraLargeLineHeight};
        font-weight: 500;
      }

      &__list {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        gap: 35px;
        font-size: ${({ theme }) => theme.textMediumFontSize};
        line-height: ${({ theme }) => theme.textMediumLineHeight};
        font-weight: 400;

        .categoryItem {
          color: ${SECONDARY_TEXT_COLOR.default};
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .recentPosts {
      width: 100%;
      margin-top: 14px;
      padding: 42px 35px;
      box-sizing: border-box;

      &__title {
        font-size: ${({ theme }) => theme.textExtraLargeFontSize};
        line-height: ${({ theme }) => theme.textExtraLargeLineHeight};
        font-weight: 500;
      }

      &__list {
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        gap: 38px;
        box-sizing: border-box;

        .recentPost {
          display: flex;
          gap: 12px;
          align-items: center;
          box-sizing: border-box;

          &__img {
            display: flex;
            min-width: 80px;
            min-height: 80px;
            border-radius: 10px;
            overflow: hidden;
            box-sizing: border-box;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              box-sizing: border-box;
            }
          }

          &__info {
            .postTitle {
              font-size: ${({ theme }) => theme.textMediumFontSize};
              line-height: ${({ theme }) => theme.textMediumLineHeight};
              font-weight: 400;
            }

            .postDate {
              margin-top: 4px;
              font-size: ${({ theme }) => theme.textExtraSmallFontSize};
              line-height: ${({ theme }) => theme.textExtraSmallLineHeight};
              font-weight: 400;
              color: ${SECONDARY_TEXT_COLOR.default};
            }
          }
        }
      }
    }
  }
`;

const blogs = new BlogMock().list();
const recentBlogs = new RecentBlogMock().list();

export const BlogPage = () => {
  const [page, setPage] = useState(1);

  const handleSwitchPage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <PageHeader />
      <Content>
        <ContentInner>
          <div className="blogsWrapper">
            <div className="blogList">
              {blogs.map((i) => {
                return (
                  <div key={i.id} className="blog">
                    <div className="blog__image">
                      <img src={i.img} />
                    </div>
                    <div className="blog__info">
                      <div className="blogUser">
                        <UserIcon />
                        <span>{i.userName}</span>
                      </div>
                      <div className="blogDate">
                        <CalendarIcon />
                        <span>{i.createdAt}</span>
                      </div>
                      <div className="blogCategory">
                        <TagIcon />
                        <span>{i.category}</span>
                      </div>
                    </div>
                    <div className="blog__title">{i.name}</div>
                    <div className="blog__description">{i.description}</div>
                    <Link className="readMoreLink" href="/">
                      Read more
                    </Link>
                  </div>
                );
              })}
            </div>
            <Pagination
              pageCount={3}
              pageNumber={page}
              switchPage={handleSwitchPage}
              className="pagination"
            />
          </div>
          <div className="sidebar">
            <Input
              rightIcon={<LoupeIcon />}
              size="l"
              width={310}
              placeholder="search"
            />
            <div className="categories">
              <div className="categories__title">Categories</div>
              <div className="categories__list">
                <div className="categoryItem">
                  <div>Crafts</div>
                  <div>2</div>
                </div>
                <div className="categoryItem">
                  <div>Design</div>
                  <div>8</div>
                </div>
                <div className="categoryItem">
                  <div>Handmade</div>
                  <div>7</div>
                </div>
                <div className="categoryItem">
                  <div>Interior</div>
                  <div>1</div>
                </div>
                <div className="categoryItem">
                  <div>Wood</div>
                  <div>6</div>
                </div>
              </div>
            </div>
            <div className="recentPosts">
              <div className="recentPosts__title">Recent Posts</div>
              <div className="recentPosts__list">
                {recentBlogs.map((i) => {
                  return (
                    <div key={i.id} className="recentPost">
                      <div className="recentPost__img">
                        <img src={i.img} />
                      </div>
                      <div className="recentPost__info">
                        <div className="postTitle">{i.name}</div>
                        <div className="postDate">{i.createdAt}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ContentInner>
      </Content>
      <Advantages />
    </>
  );
};
