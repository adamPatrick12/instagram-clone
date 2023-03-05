
import { NavbarContainer, InstagramLogo, InputContainer, NavbarIcons, UserIcon } from "../Styles/Navbar/NavbarStyles";
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, HomeOutlined, HomeFilled } from '@ant-design/icons';
import InstagramImg from "../Images/instagram-logo.png";
import { UserIconFilled } from "../Styles/Navbar/UserIcon";
import { useState } from "react";
import { HomePageIconAtom, ProfilePageIconAtom } from "../Atoms/Navbar";
import { useRecoilState } from "recoil";
import { RiUserLine, RiUserFill } from 'react-icons/ri';
import { useNavigate } from "react-router";



const NavBar: React.FC = () => {

    const navigate = useNavigate();
    const [homePageActive, setHomePageActive] = useRecoilState(HomePageIconAtom);
    const [profilePageActive, setprofilePageActive] = useRecoilState(ProfilePageIconAtom);



    return (
        <NavbarContainer>
            <InstagramLogo onClick={() => navigate('/user-feed')}>
                <img src={InstagramImg} alt="" />
                <h2>Instagram</h2>
            </InstagramLogo>
            <InputContainer>
                <Input
                    placeholder="Enter a username"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Enter a username to see their profile">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </InputContainer>
            <NavbarIcons>
                {homePageActive ? <HomeFilled onMouseLeave={() => setHomePageActive(false)} onClick={() => navigate("/user-feed")} className="homeIcon" /> : <HomeOutlined onMouseEnter={() => setHomePageActive(true)} className="homeIcon" />}
                {profilePageActive ? <RiUserFill onClick={() => navigate("/user-profile")} className="userIcon" onMouseLeave={() => setprofilePageActive(false)} /> :
                    <RiUserLine className="userIcon" onMouseEnter={() => setprofilePageActive(true)}

                    />}

            </NavbarIcons>
        </NavbarContainer>
    );
};

export default NavBar;