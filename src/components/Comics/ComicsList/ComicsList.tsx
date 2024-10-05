import React, { Component } from 'react';

import BannerPromo from '../../Banners/BannerPromo/BannerPromo';
import ComicCard from '../ComicCard/ComicCard';
import Button from '../../Button/Button';

interface ComicsListProps {
    
}

interface ComicsListState {
    
}

class ComicsList extends Component<ComicsListProps, ComicsListState> {
    render() {
        return (
            <div className="comics">
                <BannerPromo />
                <div className="comics__content mt-[75px]">
                    <ul className="comics__content-list grid grid-cols-custom-comics-4 justify-between gap-[55px]">
                        <ComicCard />
                        <ComicCard />
                        <ComicCard />
                        <ComicCard />

                        <ComicCard />
                        <ComicCard />
                        <ComicCard />
                        <ComicCard />
                    </ul>

                    <div className="comics__content-btn flex justify-center mt-[55px]">
                        <Button long={true} children="Load more" variant="MAIN"/>
                    </div>
                    <br/><br />
                </div>
            </div>
        );
    }
}

export default ComicsList;
