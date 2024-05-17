import Button from "../../../Container/Buttons";
import Container, { Wrapper } from "../../../Container/Container";
import InputField from "../../../Container/Input";
import Typography from "../../../Container/Typography.jsx";
import { IoClose } from "react-icons/io5";
import LoginIcon from "./LoginIcon.jsx";
import "./LoginMobile.css";
import { FiEdit } from "react-icons/fi";

export function LoginMobile() {
  return (
    <Container>
      <Wrapper>
        <div className="flex-btw w-max">
          <button className="flex-center gap1">
            <IoClose style={{fontSize:"40px",color:"#858585"}} />
           <Typography type={"text2"}>Sign In</Typography>
          </button>
          <FiEdit style={{fontSize:"30px",color:"#858585"}} />
        </div>
        <InputField type={"name"} placeholder={"Email address or member ID"} />
        <InputField type={"password"} placeholder={"Password"} />
        <div className="fp-cont">
          <Typography type={"text1"}>Forgot password</Typography>
        </div>
        <Button
          type={"login"}l
          title={"Sign In"}
          ms={{ backgroundColor: "#ff7e25" }}
        />
        <Typography type={"text1"}>or sign in with</Typography>
        <LoginIcon />
        <Typography type={"text1"}>Don't have an account? <Typography type={"text1"} ms={{color:"#ff81a5"}}>Register</Typography> </Typography>
      </Wrapper>
    </Container>
  );
}
