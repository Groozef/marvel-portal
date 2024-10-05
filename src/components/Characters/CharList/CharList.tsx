import React, { Component } from 'react';

import CharItem from '../CharItem/CharCard';
import Button from '../../Button/Button';


interface CharListProps {

}

interface CharListState {

}

class CharList extends Component<CharListProps, CharListState> {
    render() {
        return (
            <div className="char__list">
                <ul className='char__list-container grid grid-cols-3 w-[650px]'>
                    <CharItem />
                    <CharItem />
                    <CharItem />

                    <CharItem />
                    <CharItem />
                    <CharItem />

                    <CharItem />
                    <CharItem />
                    <CharItem />
                </ul>
                <div className="char__list-loadbtn flex justify-center mt-5">
                    <Button long={true} children="load more" variant='MAIN'/>
                </div>
                <br /><br />
            </div>
        );
    }
}

export default CharList;
