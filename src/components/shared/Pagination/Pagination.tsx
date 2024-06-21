import styled from "styled-components";
import { MAIN_BG_COLOR, SERVICE_COLOR } from "variables";

interface IProps {
  pageCount: number;
  pageNumber: number;
  className?: string;
  switchPage: (page: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  gap: 38px;

  .item {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${MAIN_BG_COLOR.default};
    cursor: pointer;

    &__prev,
    &__next {
      width: 98px;
    }

    &_active {
      color: #fff;
      background-color: ${SERVICE_COLOR.default};
      cursor: default;
    }

    &:hover:not(&_active) {
      background-color: #f5e8d9;
    }
  }

  .delimeter {
    display: flex;
    align-items: end;
    padding: 5px 0;
  }
`;

const MAX_PAGE_COUNT = 5;
const VISIBLE_PAGE_COUNT = 2;
const DELLIMETER = "...";

export default function Pagination({
  pageCount,
  pageNumber,
  className,
  switchPage,
}: IProps) {
  let items = [...Array(pageCount).keys()].map((i) => `${i + 1}`);

  if (items.length > MAX_PAGE_COUNT) {
    items = items.reduce((acc, cur) => {
      if (
        Math.abs(pageNumber - +cur) <= VISIBLE_PAGE_COUNT ||
        +cur === 1 ||
        +cur === pageCount
      ) {
        acc.push(cur);
      } else if (acc[acc.length - 1] !== DELLIMETER) {
        acc.push(DELLIMETER);
      }
      return acc;
    }, [] as string[]);
  }

  const hasNext = pageNumber < pageCount;
  const hasPrev = pageNumber > 1;

  const handleClickPrev = () => switchPage(pageNumber - 1);
  const handleClickNext = () => switchPage(pageNumber + 1);

  return (
    <Wrapper className={className}>
      {hasPrev && (
        <div className="item item__prev" onClick={handleClickPrev}>
          Prev
        </div>
      )}
      {items.map((i) => {
        if (i === DELLIMETER) {
          return <div className="delimeter">{i}</div>;
        }

        return (
          <div
            onClick={() => switchPage(+i)}
            className={`item ${+i === pageNumber && "item_active"}`}
            key={i}
          >
            {i}
          </div>
        );
      })}
      {hasNext && (
        <div className="item item__next" onClick={handleClickNext}>
          Next
        </div>
      )}
    </Wrapper>
  );
}
