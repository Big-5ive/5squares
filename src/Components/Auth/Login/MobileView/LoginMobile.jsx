import Button from "../../../Container/Buttons";
import Container, { Wrapper } from "../../../Container/Container";
import InputField from "../../../Container/Input";
import Typography from "../../../Container/Typography.jsx";
import { IoCloseOutline } from "react-icons/io5";
import LoginIcon from "./LoginIcon.jsx";
import "./LoginMobile.css";
import { PiWarningCircleFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export function LoginMobile() {
  const nav = useNavigate();
  return (
    <Container>
      <Wrapper>
        <div className="mb-20 w-full flex flex-col space-y-3">
          <div className="flex-btw justify-between w-full">
            <button className="flex-center space-x-3">
              <IoCloseOutline style={{ fontSize: "2rem", color: "#858585" }} />
              <Typography type={"text2"}>Sign In</Typography>
            </button>
            <Link to="feedback">
              <FiEdit style={{ fontSize: "1.4rem", color: "#858585" }} />
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <PiWarningCircleFill className="text-red-500 text-[1.5em]" />
            <p className="text-red-500 text-sm">
              Your account name or password is incorrect
            </p>
          </div>
        </div>
        <div className="w-full space-y-4">
          <InputField
            type={"name"}
            placeholder={"Email address or member ID"}
          />
          <InputField type={"password"} placeholder={"Password"} />
        </div>
        <div className="fp-cont my-3">
          <Typography type={"text1"}>Forgot password</Typography>
        </div>
        <div className="w-full mb-4">
          <Button
            type={"login"}
            l
            title={"Sign In"}
            ms={{ backgroundColor: "#ff7e25" }}
          />
        </div>
        <Typography type={"text1"}>or sign in with</Typography>
        <LoginIcon />
        <Link to={"/register"}>
          <Typography type={"text1"}>
            Don't have an account?{" "}
            <Typography type={"text1"} ms={{ color: "#ff81a5" }}>
              Register
            </Typography>{" "}
          </Typography>
        </Link>
      </Wrapper>
    </Container>
  );
}
