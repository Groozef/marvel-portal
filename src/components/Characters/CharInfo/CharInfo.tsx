import React, { Component } from 'react';

import Button from '../../Button/Button';


interface CharInfoProps {

}

interface CharInfoState {

}

class CharInfo extends Component<CharInfoProps, CharInfoState> {
    render() {
        return (
            <div className='char__info max-w-[425px] h-auto shadow-lg'>
                <div className="container p-[25px]">
                    <div className="char__info-block flex">
                        <div className="char__info-block__img w-[150px] h-[150px]">
                            <img className="w-full h-full" alt="image of character" src="https://s3-alpha-sig.figma.com/img/4db4/060c/705522e75137a595673875db5bc6bcde?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLbPo0f2WoL7-2e13RlTJhq3NhN1c67l39sKRNRSSYv824-mg~3iCR8ztgfE~RdEN9dC3C~~S4fq2usIXlYcR4vMTzpIL2o5lmuMbTIMLJgM-pLpDJv0TNKGuqNmrttqiJPYIXmdbXgwDtmnVzSwIPrkXel72VfXixyGkp96jzOlgeDc6zzcf70clvocuCuBOHK9DeEoaM-BugJemSEEpuqpA0yktcUggZW40gc1qNXZ~jINf~4nnQ24brnvmUEK~C6Bm1FZ6Calts-hlPUEbI1jRN20TmYoaVSe~2F2y00dRT~xHSwgM2NMugTUp43kcO0CuipQ6K59DPaEzkNvTQ__" />
                        </div>

                        <div className="char__info-block__name ml-[35px] grid grid-flow-row">
                            <p className='uppercase font-bold text-base'>loki</p>
                            <div className="char__info-block__btns grid grid-flow-row">
                                <Button variant="MAIN" long={false} children="HOMEPAGE" />
                                <Button variant="SECONDARY" long={false} children="WIKI" />
                            </div>
                        </div>
                    </div>

                    <div className="char__info-description">
                        <p className='text-sm mt-3'>In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</p>
                    </div>

                    <div className="char__info-comics mt-1">
                        <p className='char__info-comic-title text-[18px] font-bold'>Comics:</p>

                        <ul className='char__info-comics__list text-sm'>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>All-Winners Squad: Band of Heroes (2011) #3</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>Alpha Flight (1983) #50</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>Amazing Spider-Man (1999) #503</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>Amazing Spider-Man (1999) #504</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>Vengeance (2011) #4</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>Avengers (1963) #1</li>
                            <li className='char__info-comics__item w-375 shadow-sm mb-[10px] p-[5px]'>Avengers (1996) #1</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharInfo;
