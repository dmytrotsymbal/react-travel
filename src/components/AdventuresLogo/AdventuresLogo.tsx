import adventures_logo from 'assets/adventures_logo.jpg'
import './adventures_logo.css'
type Props = {}
const AdventuresLogo = (props: Props) => {
    return (
        <img
            className="adventures_logo"
            src={adventures_logo}
            alt="fake shop"
        />
    )
}
export default AdventuresLogo
