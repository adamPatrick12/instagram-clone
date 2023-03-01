import { SighUpComponent } from "./SignUpComponent";
import UserFeed from './UserFeedCoponent';
import NewPostComponent from "./NewPosComponent";
import { Route, Routes } from "react-router-dom";
import UserProfile from './Profile';

const App = () => {
    return (
        <Routes>
            <Route path="/sign-up" element={<SighUpComponent />} />
            <Route path="/user-feed" element={<UserFeed />} />
            <Route path="/new-post" element={<NewPostComponent />} />
            <Route path="/user-profile" element={<UserProfile />} />
        </Routes>

    );
};

export default App;