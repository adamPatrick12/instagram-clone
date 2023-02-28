import styled from "styled-components";
import { AlternateEmail } from "@styled-icons/material-outlined/AlternateEmail";

interface DisabledProp {
  isDisabled?: boolean;
}

interface colorProp {
  color?: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 5%;
`;

export const SignUpContainer = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  border-radius: 5%;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 16px 1px rgb(0 0 0 / 10%);
`;

export const SignUpHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: Helvetica, sans-serif;
  color: #686868;
  font-weight: bold;
  font-size: 1.5em;

  img {
    height: 64px;
    width: 64px;
    align-self: center;
    margin: 0px 0 16px;
  }
`;

export const SignUpFormContainer = styled.div<DisabledProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;

  h6 {
    font-size: 11px;
    margin-left: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: 100;
    align-self: left;
  }

  h4 {
    font-size: 13px;
    margin: 8px 0;
    color: #686868;
    font-weight: 400;
  }

  img {
    width: 24px;
    height: 24px;
    position: relative;
    top: 34%;
    right: 20%;
    filter: ${(props) =>
      props.isDisabled ? "grayscale(100%)" : "grayscale(0%)"};
  }
`;

export const UserNameInput = styled.input`
  height: 32px;
  width: 45%;
  font-family: Helvetica, sans-serif;
  outline: none;
  border: 1px solid #686868;
  border-radius: 16px;
  padding-left: 40px;
  margin: 0 0 4px 0;
`;

export const UserNameSymbol = styled(AlternateEmail)`
  position: relative;
  top: 11.5%;
  right: 22%;
  width: 20px;
  height: 20px;
  color: #686868;
  padding-right: 6px;
  border-right: 1px solid #686868;
`;

export const SignUpWithGoogleButton = styled.button<DisabledProp>`
  transition: background-color 0.3s, box-shadow 0.3s;
  margin: 48px 0 24px;
  padding: 12px 16px 12px 42px;
  border: none;
  width: 55%;
  border-radius: 16px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => (props.isDisabled ? "#ebebeb" : "white")};
  color: #686868;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }
`;

export const UserNameCheck = styled.h6<colorProp>`
  color: ${(props) => props.color};
`;

export const LoginButton = styled.button`
  font-size: 14px;
  font-family: Helvetica, sans-serif;
  padding: 0 32px;
  height: 32px;
  width: 208px;
  font-size: 14px;
  border: none;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  align-self: center;
  color: #686868;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 0.5s;

  p {
    color: #686868;
  }

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);

    p {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    filter: grayscale(25%);
  }
`;
