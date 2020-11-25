import React from 'react';
import { TBoxShadowLayer } from '../../../../pages/box-shadow'

type TProps = {
    layer: TBoxShadowLayer,
    onChangeLayer: (layer: TBoxShadowLayer) => void
};

const Generator: React.FC<TProps> = (props) => {
    const { layer, onChangeLayer } = props;
    const { 
        shiftRight,
        shiftDown,
        spread,
        blur,
        opacity,
        inset,
    } = layer;
    
    const handleChangeShiftRight = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, shiftRight: +target.value })
    };
    const handleChangeShiftDown = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, shiftDown: +target.value })
    };
    const handleChangeSpread = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, spread: +target.value })
    };
    const handleChangeBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, blur: +target.value })
    };
    const handleChangeOpacity = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, opacity: +target.value })
    };
    const handleChangeInset = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, inset: target.checked})
    };
    const handleChangeColor = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, color: target.value})
    };

    return(
        <div>
            <h1>Box-Shadow CSS Generator</h1>
            <label>Shift right:</label>
            <br />
            <input 
                type="range" 
                value={shiftRight}
                max="50"
                min="-50"
                onChange={handleChangeShiftRight}
            />
            {shiftRight}
            <br />
            <label>Shift down:</label>
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
            <label>Spread:</label>
            <br />
            <input 
                type="range"
                value={spread}
                max="100"
                min="0"
                onChange={handleChangeSpread}
            />
            {spread}
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
                type="checkbox"
                onChange={handleChangeInset}
                checked={inset}
                
            />
            <label>inset</label>
            <br />
            <input 
                type="color"
                onChange={handleChangeColor}
            />
            
        </div>
    );
}

export default Generator;