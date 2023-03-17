
import './AccurateHome.css';
import Header from "../components/Headerbar/Headerbar";
import InnovationShort from '../components/InnovationShort/InnovationShort';
import Imgdesc from '../components/Imgdesc/Imgdesc';


export default function Homepage() {
    return (
        <div className="Homepage">
            <div className="Homepage_header">
                <Header></Header>
            </div >
            <div className="Homepage_Innov">
                <InnovationShort></InnovationShort>
            </div>
            <div className="Homepage_Imgdesc">
                <Imgdesc></Imgdesc>
            </div>
        </div>
    )
}