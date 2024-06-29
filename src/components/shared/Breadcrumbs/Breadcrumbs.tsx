import { getBreadCrumbs } from "domain/breadcrumbs";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  MAIN_BG_COLOR,
  MIN_CONTENT_WIDTH,
  SECONDARY_TEXT_COLOR,
} from "variables";
import ArrowDownIcon from "assets/icons/arrow-right.svg?react";

interface IProps {}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${MAIN_BG_COLOR.default};
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: ${MIN_CONTENT_WIDTH};
  display: flex;
  align-items: center;
  gap: 14px;

  .item,
  .item a {
    color: ${SECONDARY_TEXT_COLOR.default};
    text-decoration: none;
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};
    font-weight: 400;
  }

  .separator {
    width: 2px;
    height: 36px;
    background-color: ${SECONDARY_TEXT_COLOR.default};
    margin: 0 30px;
  }

  .productName {
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};
    font-weight: 400;
  }
`;

export default function Breadcrumbs({}: IProps) {
  const location = useLocation();
  const crumbs = getBreadCrumbs(location?.pathname);

  const isLast = (index: number) => index + 1 === crumbs.length;

  const productName = "Asgaard sofa" || "...";

  return (
    <Wrapper>
      <Inner>
        {crumbs.map((i, index) => (
          <React.Fragment key={index}>
            <div className="item">
              <Link to={i.link}>{i?.caption}</Link>
            </div>
            {!isLast(index) && <ArrowDownIcon />}
          </React.Fragment>
        ))}
        <div className="separator" />
        <div className="productName">{productName}</div>
      </Inner>
    </Wrapper>
  );
}
