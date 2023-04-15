import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.103);
  overflow: hidden;
  border-radius: 16px;
  width: 400px;
  height: 672px;
`;

export const EditProfileHeader = styled.h3`
  padding: 20px;
`;

export const ProfileHeaderImagePreview = styled.div`
  width: 400px;
  height: 144px;

  img {
    width: inherit;
    height: inherit;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  position: absolute;
  top: 190px;
  border-radius: 100%;
  width: 112px;
  height: 112px;
  background: red;

  img {
    width: inherit;
    height: inherit;
    border-radius: 100%;
  }
`;

export const DisplayNameInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 100%;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;

  input {
    display: flex;
    width: 60%;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    border-radius: 16px;
    height: 32px;
    border: 1px solid #888;
    padding-left: 10px;
  }

  p {
    color: #888;
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 11px;
    align-self: start;
    margin-left: 100px;
  }
`;

export const BioInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 25px;
  width: 100%;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;

  input {
    display: flex;
    justify-content: flex-end;
    width: 60%;
    border-radius: 16px;
    height: 40px;
    border: 1px solid #888;
    padding-bottom: 80px;
    padding-left: 10px;
    text-align: top;
  }

  p {
    color: #888;
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 11px;
    align-self: start;
    margin-left: 100px;
  }
`;

export const SaveButton = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  padding: 0 32px;
  height: 40px;
  font-size: 17px;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 700;
  border: 1px solid #888;
  justify-self: center;
  transition: box-shadow 0.25s, -webkit-transform 0.25s;
  transition: box-shadow 0.25s, transform 0.25s;
  transition: box-shadow 0.25s, transform 0.25s, -webkit-transform 0.25s;
  margin-top: 16px;

  &:hover {
    box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
`;

export const ViewProfileButton = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  color: #888;
  padding: 0 32px;
  height: 40px;
  font-size: 17px;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 700;
  border: 1px solid #cecece;
  justify-self: center;
  margin-top: 16px;
`;
