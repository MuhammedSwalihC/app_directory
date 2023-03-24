import React, { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Container } from "../Forms/FormContainers";
import "./pagination.scss";

interface Props {
  pageSelection?: any;
}

export const Pagination: React.FC<Props> = ({ pageSelection }) => {
  const { next, previous, total, current } = useAppSelector<any>(
    (state) => state.apps
  );
  const checkPage = (num: any) => {
    if (num > 0 && num <= total && num != current) {
      pageSelection(num);
    }
  };

  return (
    <Container
      className={"form-container width-full"}
      styles={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "20px",
      }}
    >
      <span
        onClick={() => checkPage(current - 1)}
        className={`page-number ${current === 1 ? "disabled" : ""}`}
      >
        First
      </span>
      {current < 2 ? (
        <span
          onClick={() => checkPage(0)}
          className={`page-number page-active`}
        >
          {current}
        </span>
      ) : (
        <span onClick={() => checkPage(current - 1)} className={`page-number`}>
          {current - 1}
        </span>
      )}
      {current > 1 && (
        <span
          onClick={() => checkPage(current)}
          className={`page-number page-active`}
        >
          {current}
        </span>
      )}

      {current + 1 <= total && (
        <span onClick={() => checkPage(current + 1)} className={`page-number`}>
          {current + 1}
        </span>
      )}
      {current + 2 <= total && (
        <span onClick={() => checkPage(current + 2)} className={`page-number`}>
          {current + 2}
        </span>
      )}
      {current + 3 <= total && (
        <span onClick={() => checkPage(current + 3)} className={`page-number`}>
          {current + 3}
        </span>
      )}
      {current + 4 <= total && (
        <span onClick={() => checkPage(current + 4)} className={`page-number`}>
          {current + 4}
        </span>
      )}
      {current + 5 <= total && (
        <span onClick={() => checkPage(current + 5)} className={`page-number`}>
          {current + 5}
        </span>
      )}
      {current + 6 <= total && (
        <span onClick={() => checkPage(current + 6)} className={`page-number`}>
          {current + 6}
        </span>
      )}
      {current + 7 < total && <span className="page-number">.......</span>}
      <span
        onClick={() => checkPage(total)}
        className={`${current === total ? "disabled" : ""}`}
      >
        Last
      </span>
    </Container>
  );
};
