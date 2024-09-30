import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="header h-10 flex justify-between font-bold text-xl py-12">
				<div className="header__logo flex">
					<div className="header__logo-name text-custom-red cursor-pointer">Marvel</div>
					<div className="header__logo-description pl-3 cursor-pointer">Information Portal</div>
				</div>

				<div className="header__nav flex text-lg py-1">
					<div className="header__nav-characters pr-1 text-custom-red cursor-pointer">Characters</div>
					/
					<div className="header__nav-comics pl-1 cursor-pointer">Comics</div>
				</div>
			</header>
		);
	}
}

export default Header;
