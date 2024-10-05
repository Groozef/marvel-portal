import React, { Component } from 'react';

interface CharItemProps {
    // name: string,
    // imgUrl: string;
}

interface CharItemState {
    
}

class CharItem extends Component<CharItemProps, CharItemState> {
    constructor(props: CharItem) {
        super(props);

    }
    render() {
        
        return (
            <li className="char__item max-w-[200px] h-[320px] bg-custom-black text-white shadow-lg cursor-pointer mb-[25px]">
                <div className="char__item-img max-h-[200px]">
                    <img className="w-full h-full" src="https://s3-alpha-sig.figma.com/img/4db4/060c/705522e75137a595673875db5bc6bcde?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLbPo0f2WoL7-2e13RlTJhq3NhN1c67l39sKRNRSSYv824-mg~3iCR8ztgfE~RdEN9dC3C~~S4fq2usIXlYcR4vMTzpIL2o5lmuMbTIMLJgM-pLpDJv0TNKGuqNmrttqiJPYIXmdbXgwDtmnVzSwIPrkXel72VfXixyGkp96jzOlgeDc6zzcf70clvocuCuBOHK9DeEoaM-BugJemSEEpuqpA0yktcUggZW40gc1qNXZ~jINf~4nnQ24brnvmUEK~C6Bm1FZ6Calts-hlPUEbI1jRN20TmYoaVSe~2F2y00dRT~xHSwgM2NMugTUp43kcO0CuipQ6K59DPaEzkNvTQ__" alt="" />
                </div>
                <div className="char__item-name  bg-custom-black">
                    <p  className="text-white uppercase w-[170px] pl-7 pt-5 text-base font-bold">Loki</p>
                </div>
            </li>
        );
    }
}

export default CharItem;
