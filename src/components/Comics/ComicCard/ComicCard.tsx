import React, { Component } from 'react';

interface ComicCardProps {
    
}

interface ComicCardState {
    
}

class ComicCard extends Component<ComicCardProps, ComicCardState> {
    render() {
        return (
            <li className="comics__item max-w-[225px] max-h-[415px]">
                <div className="comics__item-img max-w-full h-[345px] shadow-base">
                    <img className="w-full h-full" alt="comics-img" src="https://s3-alpha-sig.figma.com/img/e011/bb2c/a5a9574ff967e990e3eefec6921831d0?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KEB8fhySGWbolUj2kgMoUbUHR2sw7vccm26VPldMcEDqsSopW-FB0Y2VkO9VM6Rk8-vF0rvjyqP~Vdjw~MiK0r4ZdO7T95Z54FFOF68f3BTekQHcfTDiCQz9Fb92-4vfr3ZV~xAs8JI15H5Lx8R2beIaBmWYLhGHWtqg~dZjCJOsvXuBEiUeM5Jh8doMr~R3pJfR2Q5hcO5w5VOe6W0VT4YqupF8cQHWK018ycLF4FURLNUnKfEsJJtkX7-24wB42D7b5kIOZvoaoKnxvagLHJ5bsmrBYW-2JVXbJkRlwCLXj6WD7X5xVVlhmL2M2DlPz1aAUoa44CaLQhGbOBeLig__"/>
                </div>

                <div className="comics__item-name font-bold text-sm mt-[10px]">
                    <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                </div>

                <div className="comics__item-price text-custom-grey font-bold text-sm mt-[5px]">
                    <p>9.99$</p>
                </div>
            </li>
        );
    }
}

export default ComicCard;
