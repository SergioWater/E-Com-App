import {Link} from 'react-router-dom'
function Nav(){
    return (  
        <nav>
        <Link to="/">Home</Link>
        <Link to="/users/jose">Jose</Link>
        <Link to="/users/jesus">Jesus</Link>
        </nav>
        )

}
export default Nav