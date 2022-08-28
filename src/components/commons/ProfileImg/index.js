import { StyledProfile } from "./styles";
import ProfileDefault from "../../../assets/ProfileCircle.svg";

const ProfileImg = ({ img, onClick }) => {
    return <StyledProfile img={img ? img : ProfileDefault} onClick={onClick}></StyledProfile>;
};

export default ProfileImg;
