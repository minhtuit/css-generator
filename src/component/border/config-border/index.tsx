import React from 'react';
import { TBorder, TBorderPosition, TBorderStyle } from '../../../../pages/border';

import PositionBorder from '../config-border/position-border';
import StyleBorder from '../config-border/style-border';


type TProps = {
    value: TBorder,
    onChangeLayer: (layer: TBorder) => void,
};

const Border: React.FC<TProps> = (props) => {
    const { value, onChangeLayer } = props;
    const {
        width,
        topLeft,
        topRight,
        bottomRight,
        bottomLeft,        
    } = value;

    const handleChangeWidth = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...value, width: +target.value });
    };
    const handleChangeAll = ({ target }: React.ChangeEvent<HTMLInputElement>) =>{
        onChangeLayer({
            ...value, 
                topLeft: +target.value,
                topRight: +target.value,
                bottomLeft: +target.value,
                bottomRight: +target.value,
        });
    };
    const handleChangeTopLeft = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...value, topLeft: +target.value });
    };
    const handleChangeTopRight = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...value, topRight: +target.value });
    };
    const handleChangeBottomRight = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...value, bottomRight: +target.value });
    };
    const handleChangeBottomLeft = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...value, bottomLeft: +target.value });
    };
    const handleChangeColor = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLayer({ ...value, color: target.value});
    };

    const handleChangeBorderStyle = (borderStyle: TBorderStyle) => {
        onChangeLayer({ ...value, borderStyle: borderStyle });
    };
    const handleChangeBorderPosition = (borderPosition: TBorderPosition) => {
        onChangeLayer({ ...value, borderPosition: borderPosition});
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
            <StyleBorder onChangeBorderStyle={handleChangeBorderStyle} />
            <br />
            <PositionBorder onChangeBorderPosition={handleChangeBorderPosition} />
            <label>Border Radius</label>
            <br />
            <label>All corners</label>
            <br />
            <input 
                type="range"
                max="200"
                min="1"
                onChange={handleChangeAll}
            />
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

