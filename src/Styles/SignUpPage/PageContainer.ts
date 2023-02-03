import styled from "styled-components";
import { AlternateEmail } from "@styled-icons/material-outlined/AlternateEmail";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 20%;
`;

export const SignUpContainer = styled.div`
  width: 400px;
  height: 500px;
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
    margin: 48px 0 16px;
  }
`;

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  h6 {
    font-size: 11px;
    margin-left: 16px;
    font-family: Helvetica, sans-serif;
    color: #686868;
    font-weight: 100;
    align-self: left;
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
  top: 31%;
  right: 22%;
  width: 20px;
  height: 20px;
  color: #686868;
  padding-right: 6px;
  border-right: 1px solid #686868;
`;

export const LogInWithGoogleButton = styled.button`
  transition: background-color 0.3s, box-shadow 0.3s;

  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;
