import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "../../components/CustomComponents/Button/Buttons";
import TextBox from "../../components/CustomComponents/TextBoxes/TextBoxes";
import { Container, WorkArea } from "../../components/Forms/FormContainers";
import { useAppSelector } from "../../redux/hooks";
import { Apps } from "../../redux/reducers/apps.thunks";
import { loginValue } from "../../utils/initializers";

export const Login = () => {
  const { authToken } = useAppSelector<any>((state) => state.apps);
  const [state, setState] = useState<any>(loginValue);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(e,"eeee")
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      Apps({
        data: state,
        method: "POST",
        module: "loginPost",
        fields: ["authToken"],
      })
    );
  };

  useEffect(() => {
    if (authToken) {
      localStorage.setItem("token", authToken);
      navigate("/");
    }
  }, [authToken]);
  return (
    <WorkArea className={"work-area width-full height-full"}>
      <Container className={"form-container width-medium full-height"}>
        <span className="image-container"></span>
      </Container>
      <Container
        className={"form-container width-small full-height"}
        styles={{ padding: "20px", alignItems: "center" }}
      >
        <Container className={"form-container width-full col"}>
          <TextBox
            Placeholder={"Email"}
            name="email"
            value={state.email}
            handleInputChange={handleInputChange}
          />
          {/* <TextBox
            Placeholder={"Password"}
            type="password"
            name="password"
            value={state.password}
            handleInputChange={handleInputChange}
          /> */}
          <Container
            className={"form-container width-fulls"}
            styles={{ justifyContent: "flex-end", paddingRight: "20px" }}
          >
            <Button
              value="Login"
              className="btn-success"
              handleSubmit={onSubmit}
            />
          </Container>
        </Container>
      </Container>
    </WorkArea>
  );
};
