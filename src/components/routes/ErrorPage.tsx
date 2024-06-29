import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import MainLayout from "components/shared/Layout/MainLayout";
import styled from "styled-components";
import { MIN_CONTENT_WIDTH, SERVICE_COLOR } from "variables";

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentInner = styled.div`
  width: ${MIN_CONTENT_WIDTH};
  padding: 100px 0;
  box-sizing: border-box;
  min-height: 40vh;
  text-align: center;

  .title {
    font-size: ${({ theme }) => theme.titleLargeFontSize};
    line-height: ${({ theme }) => theme.titleLargeLineHeight};
    font-weight: 700;
    color: ${SERVICE_COLOR.default};
  }

  .description {
    margin-top: 20px;
    font-size: ${({ theme }) => theme.textLargeFontSize};
    line-height: ${({ theme }) => theme.textLargeLineHeight};
    font-weight: 500;
  }
`;

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <MainLayout>
      <Content>
        <ContentInner>
          <h1 className="title">{errorMessage(error)}</h1>
          <p className="description">{errorDescription(error)}</p>
        </ContentInner>
      </Content>
    </MainLayout>
  );
}

function errorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    console.error(error);
    return "Unknown error";
  }
}

function errorDescription(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return errorText(error.status);
  } else if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    console.error(error);
    return "Unknown error";
  }
}

function errorText(errorCode?: number): string {
  switch (errorCode) {
    case 404:
      return "We couldn't find this page";
    default:
      return "Oops! Something went wrong!";
  }
}
