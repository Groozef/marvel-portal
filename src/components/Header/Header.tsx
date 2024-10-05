import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	render() {
		return (
			<header className="header h-10 flex justify-between font-bold text-xl pt-12 mb-[100px]">
				<div className="header__logo flex">
					<div className="header__logo-name text-custom-red cursor-pointer">Marvel</div>
					<div className="header__logo-description pl-3 cursor-pointer">Information Portal</div>
				</div>

				<div className="header__nav flex text-lg py-1">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`header__nav-characters pr-1 cursor-pointer hover:text-red-600 ${isActive ? "text-custom-red" : ""} transition-colors duration-300 ease-in-out`
						}

					>
						Characters
					</NavLink>
					/
					<NavLink
						to="/comics"
						className={({ isActive }) =>
							`header__nav-characters pl-1 cursor-pointer hover:text-red-600 ${isActive ? "text-custom-red" : ""} transition-colors duration-300 ease-in-out`
						}

					>
						Comics
					</NavLink>
				</div>
			</header>
		);
	}
}

export default Header;
