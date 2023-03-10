import { SighUpComponent } from "./SignUpComponent";
import UserFeed from './UserFeedCoponent';
import NewPostComponent from "./NewPosComponent";
import { Route, Routes } from "react-router-dom";
import UserProfile from './ProfileComponent';
import UniqueUserPost from './UniqueUserPost';

const App = () => {
    return (
        <Routes>
            <Route path="/sign-up" element={<SighUpComponent />} />
            <Route path="/user-feed" element={<UserFeed />} />
            <Route path="/new-post" element={<NewPostComponent />} />
            <Route path="/user-profile/:profileID" element={<UserProfile />} />
            <Route path="/user-post/:postID" element={<UniqueUserPost />} />
        </Routes>

    );
};

export default App;