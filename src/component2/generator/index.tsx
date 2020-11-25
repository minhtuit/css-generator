import React from 'react';
import { TTextShadowLayer } from '../../../pages/text-shadow';

type TProps = {
    layer : TTextShadowLayer,
    onChangeLayer: ( layer: TTextShadowLayer ) => void

}

const Generator: React.FC<TProps> = (props) => {
    const { layer, onChangeLayer } = props;
    const {
        shiftRight,
        shiftDown,
        blur,
        opacity
    } = layer;

    const handleChangeShiftRight = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, shiftRight: +target.value })
    };
    const handleChangeShiftDown = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, shiftDown: +target.value })
    };
    const handleChangeBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, blur: +target.value })
    };
    const handleChangeOpacity = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, opacity: +target.value })
    }
    const handleChangeColor = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, color: target.value })
    };

    return(
        <div>
            <h1>Text-Shadow CSS Generator</h1>
            <label>Shift right:</label>
            <br />
            <input 
                type="range"
                value={shiftRight}
                max="60"
                min="-50"
                onChange={handleChangeShiftRight}
            />
            {shiftRight}
            <br />
            <label>Shift dowmn:</label>
            <br />
            <input
                type="range"
                value={shiftDown}
                max="50"
                min="-50"
                onChange={handleChangeShiftDown}
            />
            {shiftDown}
            <br />
            <label>Blur:</label>
            <br />
            <input 
                type="range"
                value={blur}
                max="100"
                min="0"
                onChange={handleChangeBlur}
            />
            {blur}
            <br />
            <label>Opacity:</label>
            <br />
            <input 
                type="range"
                value={opacity}
                max="100"
                min="0"
                onChange={handleChangeOpacity}
            />
            {opacity}
            <br />
            <input 
                type="color"
                onChange={handleChangeColor}
            />            
        </div>
    );
}

export default Generator;
