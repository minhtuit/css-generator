import React from 'react';
import { TBorderLayer } from '../../../../pages/border';

import PositionBorder from '../config-border/position-border';
import StyleBorder from '../config-border/style-border';


type TProps = {
    layer: TBorderLayer,
    onChangeLayer: (layer: TBorderLayer) => void
};

const Border: React.FC<TProps> = (props) => {
    const { layer, onChangeLayer } = props;
    const {
        width,
        all,
        topLeft,
        topRight,
        bottomRight,
        bottomLeft,        
    } = layer;

    const handleChangeWidth = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, width: +target.value });
    };
    const handleChangeAll = ({ target }: React.ChangeEvent<HTMLInputElement>) =>{
        onChangeLayer({
            ...layer, 
                all: +target.value,
                topLeft: +target.value,
                topRight: +target.value,
                bottomLeft: +target.value,
                bottomRight: +target.value,
        });
    };
    const handleChangeTopLeft = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, topLeft: +target.value });
    };
    const handleChangeTopRight = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, topRight: +target.value });
    };
    const handleChangeBottomRight = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, bottomRight: +target.value });
    };
    const handleChangeBottomLeft = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, bottomLeft: +target.value });
    };
    const handleChangeColor = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...layer, color: target.value})
    };

    return (
        <div>
            <h1>Config custom border</h1>
            <label>Width</label>
            <br />
            <input 
                type="range"
                min="1"
                max="30"
                value={width}
                onChange={handleChangeWidth}
            />
            {width}
            <br />
            <label>Color</label>
            <br />
            <input 
                type="color"
                onChange={handleChangeColor}
            />
            <br />
            <StyleBorder onChangeBorderStyle={onChangeLayer} />
            <br />
            <PositionBorder onChangeBorderPosition={onChangeLayer} />
            <label>Border Radius</label>
            <br />
            <label>All corners</label>
            <br />
            <input 
                type="range"
                max="200"
                min="1"
                value={all}
                onChange={handleChangeAll}
            />
            {all}
            <br />
            <label>Top left</label>
            <br />
            <input 
                type="range"
                max="200"
                min="1"
                value={topLeft}
                onChange={handleChangeTopLeft}
            />
            {topLeft}
            <br />
            <label>Top right</label>
            <br />
            <input 
                type="range"
                max="200"
                min="1"
                value={topRight}
                onChange={handleChangeTopRight}
            />
            {topRight}
            <br />
            <label>Bottom right</label>
            <br />
            <input 
                type="range"
                max="200"
                min="1"
                value={bottomRight}
                onChange={handleChangeBottomRight}
            />
            {bottomRight}
            <br />
            <label>Bottom left</label>
            <br />
            <input 
                type="range"
                max="200"
                min="1"
                value={bottomLeft}
                onChange={handleChangeBottomLeft}
            />
            {bottomLeft}
        </div>
    );
}

export default Border;
