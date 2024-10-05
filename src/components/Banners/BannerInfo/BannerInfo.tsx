import React, { Component } from 'react';

import Button from '../../Button/Button';


interface BannerInfoProps {

}

interface BannerInfoState {

}

class BannerInfo extends Component<BannerInfoProps, BannerInfoState> {

    render() {
        return (
            <div className="container w-full my-16 shadow-lg">
                <div className="banner grid grid-cols-2 gap-4">
                    <div className="banner__info p-10 grid grid-cols-2 gap-4 mr-12">
                        <div className="banner__info-img w-44 h-44">
                            <img className="w-full h-full" alt="Thor" src="https://s3-alpha-sig.figma.com/img/6448/d03f/96a5f0674cdd7cb710b0691e627219fa?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VryhobdMdasOA84hj70wbviZ4teI53SY2PRTpGghP~gEnW768KnedERDg-WnQbaniRSWcCjiJFZW0uL5tRTn4FEgVB5k5FYuUyIwCIeyzrZeK3Xjp4FCuFPTLvhY3xWqiY3QFIiFbkTLsXqOXIcE~qQsltlJYJChIuKDA8-IrBtr9jWFfPti6aJblwsQLmbfr6z74SNtU05EkXD43KA-aG0h5QzkIk4i-V20h-DHHIWXecmxeMQil3rKsaEvAgec~OHWyOBc0LUwgPBdpuuQkb8kTLfWCs5WNqRISV3i~paKmKjR7B~QZ6xHhypGKNb8GSDl03ZZChunSxjuyOk8Xw__" />
                        </div>

                        <div className="banner__info-char min-w-[265px] min-h-[95px]">
                            <div className="banner__info-char__name font-bold text-base">Thor</div>
                            <div className="banner__info-char__description text-sm">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</div>
                            <div className="banner__info-char__btns mt-2 flex">
                                <Button long={false} variant="MAIN" children="home page" />
                                <div className='mx-3'></div>
                                <Button long={false} variant="SECONDARY" children="wiki" />
                            </div>
                        </div>
                    </div>

                    <div className="banner__random relative bg-custom-black text-white text-lg p-10">
                        <div className="banner__random-first__text w-[375px] font-bold z-10">
                            Random character for today!<br />
                            Do you want to get to know him better?
                        </div>
                        <div className="banner__random-first__text mt-6 mb-4 font-bold">
                            Or choose another one
                        </div>

                        <Button long={false} variant="MAIN" children="try it"/>
                        <img className="absolute bottom-[14px] right-[-37px] z-[0]" alt="MjolnerShield" src="https://github.com/yankovalenko94/JS_task_answers/blob/master/React_Redux_step_10/src/resources/img/mjolnir.png?raw=true" />
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerInfo;
