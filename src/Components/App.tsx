import SighUpComponent from "./SignUpComponent";
import UserFeed from './UserFeedCoponent';
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SighUpComponent />} />
            <Route path="/user-feed" element={<UserFeed />} />
        </Routes>

    );
};

export default App;