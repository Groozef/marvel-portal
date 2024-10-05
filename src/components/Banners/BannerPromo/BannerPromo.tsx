import React, { Component } from 'react';

interface BannerPromoProps {

}

interface BannerPromoState {

}

class BannerPromo extends Component<BannerPromoProps, BannerPromoState> {
    render() {
        return (
            <div className='banner__promo min-h-[100px] bg-custom-black grid grid-cols-custom-banner-3 pl-[45px] pr-[25px] mt-[]'>
                <div className="banner__promo-img w-[155px] h-full">
                    <img className="w-full h-full" alt="promo-img" src="https://s3-alpha-sig.figma.com/img/1521/18f2/9bcf361088bafb1971f4b91b2dea4b6f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PloaYBYDle7Zl1h1SJxI8XaBKe3PSJEPZ5U2m4u7yUzifCZ1~UCI~GGjOKZRFXo6pahsEipqzoJf7QzVOLwTTPt7NXGN86ewGJ-v4ODavr-dK2KfXl9fjUZQzovTYB7XniJD8b1lmZILUJzkE1RvMfXeu20Upf3IMVvMoEswJ~MXvCT5inNX14g15Ld2fcA2Vv6FgZA7JtjVgp~GIf8pdHX7~LU2DfoXl6Xp0YJq~zFtCMHdloUMSZlyobiTrmLF8ZBY6I1YBOG1iFzefriNnDEaU5yxPl9GnBTY09nmU192VY1ML4NMThMPA5V0MSllUPEYTBL3peCHiyatClnzRw__" />
                </div>

                <div className="banner__promo-text font-bold text-lg text-white flex items-center pl-[85px]">
                    <p>
                        New comics every week! <br />
                        Stay tuned!
                    </p>
                </div>

                <div className="banner__promo-img w-[135px] h-full">
                    <img alt="avengers" src="https://s3-alpha-sig.figma.com/img/890b/e48b/8130971a3b939fb561f01d386fc42078?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cjDw6zwa2Ydn1avOwZA9Pn3KATxd9-ATajyad4QtVB0uS4GXeEBVoGhGRf8JbfjQYtVX6CbGvTAXxqsjeOLaozsO1ybX9vaMvkYkQj6-b-R6ZwXtHsMJO-Vuw9sb6AZpR4S7NW81ooVuX95mXVhdsPLGjboao~txrqBVfIG86-LapDYUaYzJw1Uhrinqa5JsMcM1WW0zx52AI1sRO7ugnOdN-wrX-ZXNRs~vyoXQlGW9VWjaeBYc1x~EvDvxR6AOYV6VEDAAB~QIHCuhnJi3QQMiJIgUIjUdlFycnxY~G0vbpLeyJHhM9QTmh1di5rz5wHpp0HvH1hvZE4cRP2LGFA__" />
                </div>
            </div>
        );
    }
}

export default BannerPromo;
