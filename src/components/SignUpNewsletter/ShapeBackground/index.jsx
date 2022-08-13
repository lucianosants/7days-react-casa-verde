import { Image } from './styled';

import shapeImage from '../../../assets/shape-image.svg';

export default function ShapeBackground() {
    return (
        <figure>
            <Image src={shapeImage} alt="" />
        </figure>
    )
};