
import NavBar from "./Navbar";
import { HomePageIconAtom, ProfilePageIconAtom } from "../Atoms/Navbar";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";


const UserProfile = () => {

    const setHomeIcon = useSetRecoilState(HomePageIconAtom);
    const setProfileIcon = useSetRecoilState(ProfilePageIconAtom);

    useEffect(() => {
        setHomeIcon(false);
        setProfileIcon(true);
    }, []);

    return (
        <div onMouseEnter={() => setProfileIcon(true)}>
            <NavBar />
            <h1 style={{ padding: 100 }}>UserProfile</h1>
        </div>
    );
};

export default UserProfile;