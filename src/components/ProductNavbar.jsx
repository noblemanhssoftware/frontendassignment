import { Nav, Navbar } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProductNavbar = () => {
    return <Navbar fixed='top' bg="light" expand="lg" className="d-flex align-items-center px-3">
        <Link to='/'>
            <RxCaretLeft />
        </Link>

        <Nav className="d-flex flex-row justify-content-end">
            <Nav.Link className="px-2"><AiOutlineHeart /></Nav.Link>
            <Nav.Link className="px-2"><AiOutlineShareAlt /></Nav.Link>
            <Nav.Link className="px-2"><BsHandbag /></Nav.Link>
        </Nav>

    </Navbar>
}
export default ProductNavbar;