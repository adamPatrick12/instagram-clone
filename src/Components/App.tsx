import { SighUpComponent } from "./SignUpComponent";
import UserFeed from './UserFeedCoponent';
import NewPostComponent from "./NewPosComponent";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SighUpComponent />} />
            <Route path="/user-feed" element={<UserFeed />} />
            <Route path="/new-post" element={<NewPostComponent />} />
        </Routes>

    );
};

export default App;