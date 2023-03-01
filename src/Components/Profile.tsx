
import NavBar from "./Navbar";
import { HomePageIconAtom, ProfilePageIconAtom } from "../Atoms/Navbar";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";


const UserProfile = () => {

    const setHomeIcon = useSetRecoilState(HomePageIconAtom);

    useEffect(() => {
        setHomeIcon(false);
    }, []);

    return (
        <div>
            <NavBar />
            <h1 style={{ padding: 100 }}>UserProfile</h1>
        </div>
    );
};

export default UserProfile;