import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { Router, useLocation } from "react-router-dom";

import * as S from "./styles";
import colors from "../../styles/colors";

const BottomNav = () => {
    const location = useLocation();

    const navHandler = (path) => {
        console.log(path);
        if (path === "/login" || path.includes("signup")) return null;
        else
            return (
                <S.BottomNav ref={navbar}>
                    <Nav className="nav-container">
                        <NavItem>
                            <NavLink to="/" className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}>
                                <S.HomeIcon color={location.pathname === "/" ? colors.red_80 : colors.black_80} />
                                <span>홈</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/map" className={`nav-link ${location.pathname === "/map" ? "active" : ""}`}>
                                <S.MapIcon color={location.pathname === "/map" ? colors.red_80 : colors.black_80} />
                                <span>지도</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/feed" className={`nav-link ${location.pathname === "/feed" ? "active" : ""}`}>
                                <S.FeedIcon color={location.pathname === "/feed" ? colors.red_80 : colors.black_80} />
                                <span>피드</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to="/review"
                                className={`nav-link ${location.pathname === "/review" ? "active" : ""}`}
                            >
                                <S.ReviewIcon
                                    color={location.pathname === "/review" ? colors.red_80 : colors.black_80}
                                />
                                <span>후기</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to="/mypage"
                                className={`nav-link ${location.pathname === "/mypage" ? "active" : ""}`}
                            >
                                <S.MyPageIcon
                                    color={location.pathname === "/mypage" ? colors.red_80 : colors.black_80}
                                />
                                <span>내정보</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </S.BottomNav>
            );
    };

    var navbar = useRef();

    return navHandler(location.pathname);
};

export default BottomNav;
