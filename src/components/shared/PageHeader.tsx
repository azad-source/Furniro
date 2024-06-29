import styled from "styled-components";
import HeaderBg from "assets/images/shop_header_bg.png";
import ArrowDownIcon from "assets/icons/arrow-right.svg?react";
import LogoMiniIcon from "assets/icons/logo-mini.svg?react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { getBreadCrumbs } from "domain/breadcrumbs";

interface IProps {}

const Header = styled.div`
  width: 100%;
  height: 20vw;
  background-image: url(${HeaderBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.titleLargeFontSize};
  font-weight: ${({ theme }) => theme.titleLargeFontWeight};
  line-height: ${({ theme }) => theme.titleLargeLineHeight};
  margin-top: -16px;
`;

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  :first-child {
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};
    font-weight: ${({ theme }) => theme.fontWeightMedium};
  }
`;

export default function PageHeader({}: IProps) {
  const location = useLocation();
  const crumbs = getBreadCrumbs(location?.pathname);
  const title = crumbs[crumbs.length - 1].title;

  const isFirst = (index: number) => index === 0;
  const isLast = (index: number) => index + 1 === crumbs.length;

  return (
    <Header>
      <LogoMiniIcon />
      <PageTitle>{title}</PageTitle>
      <Breadcrumbs>
        {crumbs.map((i, index) => (
          <React.Fragment key={index}>
            {isFirst(index) ? (
              <div>{i.caption}</div>
            ) : (
              <Link to={i.link}>{i.caption}</Link>
            )}
            {!isLast(index) && <ArrowDownIcon />}
          </React.Fragment>
        ))}
      </Breadcrumbs>
    </Header>
  );
}
