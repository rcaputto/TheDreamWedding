import ImagePortrait1 from '../Images/Galeria WEB/Copia de Pedidomano-041.jpg'
import ImagePortrait2 from '../Images/Galeria WEB/Copia de TDW-33.jpg'
import ImagePortrait3 from '../Images/Galeria WEB/Copia de TDW-57.jpg'
import ImageVertical1 from '../Images/Galeria WEB/Copia de TDW-71.jpg'
import ImageVertical2 from '../Images/Galeria WEB/Copia de TDW-35.jpg'
import ImageVertical3 from '../Images/Galeria WEB/Copia de TDW-36.jpg'
import GaleriaImagenes from './GaleriaImagenes'
export const images = [
    {
    key: 1,
    src: {ImagePortrait1},
    alt: 'img'
    },
    {
        key: 2,
        src: {ImageVertical1},
        alt: 'img'
        },
        {
            key: 3,
            src: {ImagePortrait2},
            alt: 'img'
            },
            {
                key: 4,
                src: {ImageVertical2},
                alt: 'img'
                },
                {
                    key: 5,
                    src: {ImagePortrait3},
                    alt: 'img'
                    },
                    {
                        key: 6,
                        src: {ImageVertical3},
                        alt: 'img'
                        }

   
]

export default function Images (){
    return(
        <GaleriaImagenes
        images = {images}
        />
    )
}