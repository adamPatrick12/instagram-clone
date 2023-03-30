
import {
    NavbarContainer, InstagramLogo, InputContainer, NavbarIcons, UserIcon,
    SearchResultsContainer, UserCardSearch
} from "../Styles/Navbar/NavbarStyles";
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, HomeOutlined, HomeFilled } from '@ant-design/icons';
import InstagramImg from "../Images/instagram-logo.png";
import { HomePageIconAtom, ProfilePageIconAtom } from "../Atoms/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { RiUserLine, RiUserFill } from 'react-icons/ri';
import { useNavigate } from "react-router";
import { UserObjectIDAtom } from "../Atoms/AuthenticationAtom";
import { handleUsernameSearch } from "../Hooks/handleFuzzySearch";
import { fetchAllUsers } from "../api/fetchAllUsers";
import { useEffect, useState } from "react";
import { DisplaySearchResultsAtom } from "../Atoms/Navbar";


const NavBar: React.FC = () => {

    const navigate = useNavigate();
    const [homePageActive, setHomePageActive] = useRecoilState(HomePageIconAtom);
    const [profilePageActive, setprofilePageActive] = useRecoilState(ProfilePageIconAtom);
    const [allUsers, setAllUsers] = useState([]);
    const userObjectID = useRecoilValue(UserObjectIDAtom);
    const [searchValue, setSearchValue] = useState('');
    const [showSearchResults, setShowSearchResults] = useRecoilState(DisplaySearchResultsAtom);



    useEffect(() => {
        fetchAllUsers().then(result => setAllUsers(result));
    }, []);




    return (
        <NavbarContainer >
            <InstagramLogo onClick={() => navigate('/user-feed')}>
                <img src={InstagramImg} alt="" />
                <h2>Instagram</h2>
            </InstagramLogo>
            <InputContainer>
                <Input
                    onClick={() => setShowSearchResults(true)}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Enter a username"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Enter a username to see their profile">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                {showSearchResults ? <SearchResultsContainer display={searchValue}>
                    {handleUsernameSearch(allUsers, searchValue).map((userData: any) => {
                        return (
                            <UserCardSearch onClick={() => navigate(`/user-profile/${userData._id}`)}>
                                <img src={userData.profilePicture} alt="" />
                                <h6>{userData.displayName}</h6>
                                <h5>@{userData.userName}</h5>
                            </UserCardSearch>

                        );
                    })}

                </SearchResultsContainer> : <div></div>}

            </InputContainer>
            <NavbarIcons>
                {homePageActive ? <HomeFilled onMouseLeave={() => setHomePageActive(false)} onClick={() => navigate("/user-feed")} className="homeIcon" /> : <HomeOutlined onMouseEnter={() => setHomePageActive(true)} className="homeIcon" />}
                {profilePageActive ? <RiUserFill onClick={() => navigate(`/user-profile/${userObjectID}`)} className="userIcon" onMouseLeave={() => setprofilePageActive(false)} /> :
                    <RiUserLine className="userIcon" onMouseEnter={() => setprofilePageActive(true)}

                    />}

            </NavbarIcons>

        </NavbarContainer >
    );
};

export default NavBar;