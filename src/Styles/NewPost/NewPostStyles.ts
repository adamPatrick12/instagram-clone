import styled from "styled-components";
import { Close } from "@styled-icons/evil/Close";
import { CloudUpload } from "@styled-icons/bootstrap/CloudUpload";
import { CloudCheckFill } from "styled-icons/bootstrap";

interface fileProp {
  isFileUploaded?: boolean;
}

export const NewPostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  border: 1px solid gray;
  width: 400px;
  height: 550px;
  border-radius: 1em;
  background-color: var(--primary-background-color);
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 16px 1px rgb(0 0 0 / 10%);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NewPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  border-bottom: 1px solid #888888;
  align-self: center;
  padding: 10px 0px;
  margin-bottom: 10px;

  h3 {
    color: #888888;
  }
`;

export const CloseModelIcon = styled(Close)`
  height: 22px;
  width: 22px;
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: red;
  }
`;

export const FileUploadIcon = styled(CloudUpload)`
  width: 130px;
  height: 130px;
  padding-bottom: 10px;
  color: #888888;
`;

export const FileSuccess = styled(CloudCheckFill)`
  width: 130px;
  height: 130px;
  padding-bottom: 10px;
  color: #888888;
`;

export const InputBox = styled.input`
  padding: 0 0 45px 10px;
  border: 1px solid hsla(0, 0%, 48.6%, 0.281);
  border-radius: 0.5rem;
  height: 5rem;
  width: 250px;
  box-sizing: border-box;
  resize: none;
  text-align: top;
  margin: 1.5em;

  ::placeholder {
    position: relative;
    top: 0px;
    left: 2px;
  }
`;

export const PostButton = styled.button<fileProp>`
  padding: 0 32px;
  height: 40px;
  font-size: 17px;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 700;
  color: #888888;
  border: 1px solid #888888;
  justify-self: center;
  background-color: white;
  cursor: ${(props) => (props.isFileUploaded ? "pointer" : "not-allowed")};
`;
