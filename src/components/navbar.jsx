import logo from "../assets/icons/logo.png"
import signIn from "../assets/icons/signIn.png"

const Navbar = () => {
	return( 
		<div className="flex bg-white w-full h-16 flex items-center">
        	<a className="btn btn-ghost normal-case text-xl hover:bg-white">
				<img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
			</a>
			<div className="flex-none">
    			<ul className="menu menu-horizontal px-1 text-black font-bold">
      				<li><a>Home</a></li>
					<li><a>About Us</a></li>
					<li><a>Offset</a></li>
				</ul>
			</div>
			<div className="signIn">
				<a className="btn btn-ghost normal-case text-xl">
					<img src={signIn} alt="sign in" style={{ width: '100px', height: 'auto' }} />
				</a>
			</div>
	    </div>
	)
}

export default Navbar