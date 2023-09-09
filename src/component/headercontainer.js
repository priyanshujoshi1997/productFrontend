import { Button } from "react-bootstrap";
import './/css/headercontainer.css'
function HeaderContainer(){
    return (
    <div className="btn_container">
    <Button>Latest</Button>
    <Button>Trending</Button>
    <Button>Most Popular</Button>
    </div>
    )
}
export default HeaderContainer