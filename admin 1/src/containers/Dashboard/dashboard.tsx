import React, { useState } from "react";
import { TableContainer } from "../../components/CustomComponents/Table/TableContainer";
import { Container, WorkArea } from "../../components/Forms/FormContainers";

interface Props {
  children?: React.ReactNode;
}

export const Dashboard: React.FC<Props> = ({ children }) => {
  return (
    <WorkArea
      className={"work-area width-full height-full col"}
      styles={{ padding: "10px" }}
    >
      <Container
        className={"form-container width-full"}
        styles={{
          height: "100px",
          background: "transparent",
          justifyContent: "space-evenly",
          minWidth: "1275px",
        }}
      >
        <Container
          className={"form-container width-x-small"}
          styles={{ width: "24%", minWidth: "200px" }}
        >
          <span
            style={{
              width: "75%",
              minWidth: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: "20px",
              flexDirection: "column",
            }}
          >
            <h1>6</h1>
            <p>Teacher</p>
          </span>
          <span
            style={{
              width: "24%",
              minWidth: "85px",
              display: "flex",
              paddingLeft: "20px",
              alignItems: "center",
            }}
          ></span>
        </Container>
        <Container
          className={"form-container width-x-small"}
          styles={{ width: "24%" }}
        >
          <span
            style={{
              width: "75%",
              minWidth: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: "20px",
              flexDirection: "column",
            }}
          >
            <h1>10</h1>
            <p>Subject</p>
          </span>
          <span
            style={{
              width: "25%",
              minWidth: "85px",
              display: "flex",
              paddingLeft: "20px",
              alignItems: "center",
            }}
          ></span>
        </Container>
        <Container
          className={"form-container width-x-small"}
          styles={{ width: "25%" }}
        >
          <span
            style={{
              width: "75%",
              minWidth: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: "20px",
              flexDirection: "column",
            }}
          >
            <h1>40</h1>
            <p>Students</p>
          </span>
          <span
            style={{
              width: "25%",
              minWidth: "85px",
              display: "flex",
              paddingLeft: "20px",
              alignItems: "center",
            }}
          ></span>
        </Container>
        <Container
          className={"form-container width-x-small"}
          styles={{ width: "25%" }}
        >
          {/* <span
            style={{
              width: "75%",
              minWidth: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: "20px",
              flexDirection: "column",
            }}
          >
            <h1>10</h1>
            <p>Live Users</p>
          </span>
          <span
            style={{
              width: "25%",
              minWidth: "85px",
              paddingLeft: "20px",
              display: "flex",
              alignItems: "center",
            }}
          ></span> */}
        </Container>
      </Container>

      <Container
        className={"form-container width-full"}
        styles={{
          background: "transparent",
          justifyContent: "space-evenly",
          marginTop: "10px",
          minWidth: "1275px",
        }}
      >
        <Container
          className={"form-container width-half"}
          styles={{ height: "400px" }}
        >
          <Container className={"form-container width-full height-full"}>
            {/* <StackedChart /> */}
          </Container>
        </Container>
        <Container
          className={"form-container width-half"}
          styles={{ height: "400px" }}
        >
          {/* <BarChart /> */}
        </Container>
      </Container>

      <Container
        className={"form-container width-full full-height"}
        styles={{
          background: "transparent",
          padding: "0px 13px",
          minWidth: "1275px",
        }}
      ></Container>
    </WorkArea>
  );
};
