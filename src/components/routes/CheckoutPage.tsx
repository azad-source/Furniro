import PageHeader from "components/shared/PageHeader";
import { useState } from "react";
import styled from "styled-components";

interface IState {}

export const CheckoutPage = () => {
  const [state, setState] = useState<IState>({});

  return (
    <>
      <PageHeader />
    </>
  );
};
