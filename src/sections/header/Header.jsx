import Container from "../../component/Container"
import logo from '../../images/logo.png';
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  return (
    <div className=" py-4 border-b">
        <Container className="flex justify-between items-center">
            <img src={logo} alt="" />
            <MdOutlineLightMode className=" text-xl cursor-pointer" />
        </Container>
    </div>
  )
}

export default Header