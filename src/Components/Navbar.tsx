
import {
    NavbarContainer, InstagramLogo, InputContainer, NavbarIcons, UserIcon,
    SearchResultsContainer, UserCardSearch, MenuItems
} from "../Styles/Navbar/NavbarStyles";
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, HomeOutlined, HomeFilled } from '@ant-design/icons';
import InstagramImg from "../Images/instagram-logo.png";
import { HomePageIconAtom, ProfilePageIconAtom } from "../Atoms/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { RiUserLine, RiUserFill, RiUserShared2Line, RiLogoutBoxRLine } from 'react-icons/ri';
import { useNavigate } from "react-router";
import { UserObjectIDAtom } from "../Atoms/AuthenticationAtom";
import { handleUsernameSearch } from "../Hooks/handleFuzzySearch";
import { fetchAllUsers } from "../api/fetchAllUsers";
import { useEffect, useState } from "react";
import { DisplaySearchResultsAtom } from "../Atoms/Navbar";
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { signOut, } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { authenticationAtom } from "../Atoms/AuthenticationAtom";



const NavBar: React.FC = () => {

    const navigate = useNavigate();
    const [homePageActive, setHomePageActive] = useRecoilState(HomePageIconAtom);
    const [profilePageActive, setprofilePageActive] = useRecoilState(ProfilePageIconAtom);
    const [allUsers, setAllUsers] = useState([]);
    const userObjectID = useRecoilValue(UserObjectIDAtom);
    const [searchValue, setSearchValue] = useState('');
    const [showSearchResults, setShowSearchResults] = useRecoilState(DisplaySearchResultsAtom);
    const [_, setAuthentication] = useRecoilState(authenticationAtom);


    const signOutOfGoogle = () => {
        signOut(auth)
            .then(() => {
                setAuthentication(false);
                localStorage.clear();
            })
            .catch((error) => {
                console.log(error);
            });
    };



    useEffect(() => {
        fetchAllUsers().then(result => setAllUsers(result));
    }, []);

    const items: MenuProps['items'] = [
        {
            label: <MenuItems onClick={() => navigate(`/user-profile/${userObjectID}`)}>
                <RiUserShared2Line style={{ height: "20px", width: "20px" }} /><p style={{ padding: '2px', marginLeft: '3px' }}>Profile</p>
            </MenuItems>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <MenuItems>
                <button onClick={signOutOfGoogle}>
                    <RiLogoutBoxRLine style={{ height: "20px", width: "20px" }} /><p style={{ padding: '2px', marginLeft: '3px' }}>Log Out</p>
                </button>
            </MenuItems>,
            key: '1',
        },
    ];

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

                <Dropdown menu={{ items }} placement="bottomRight" arrow trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            {profilePageActive ? <RiUserFill

                                className="userIcon" onMouseLeave={() => setprofilePageActive(false)} /> :
                                <RiUserLine className="userIcon" onMouseEnter={() => setprofilePageActive(true)}

                                />}
                        </Space>
                    </a>
                </Dropdown>
            </NavbarIcons>

        </NavbarContainer >
    );
};

export default NavBar;