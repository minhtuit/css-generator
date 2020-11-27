import React from 'react';
import { TBorderStyle } from '../../../../../pages/border';
import style from '../style-border/styleBorder.module.css';

type TProps = {
    onChangeBorderStyle: (borderStyle: TBorderStyle) => void,
};

const StyleBorder: React.FC<TProps> = (props) =>{
    const { onChangeBorderStyle } = props; 
    const {
        border,
        borderStyle,
        solid,
        dotted,
        dashed,
        double,
        groove,
        ridge,
        inset,
        outset
    } = style;
    return (
        <div>
            <label>Style</label>
            <br />
            <div className={border}>
                <div
                    className={`${borderStyle} ${solid}`}
                    onClick={() => onChangeBorderStyle('solid')}
                >
                    <p>solid</p>
                </div>
                <div
                    className={`${borderStyle} ${dotted}`}
                    onClick={() => onChangeBorderStyle('dotted')}
                >
                    <p>dotted</p>
                </div>
                <div
                    className={`${borderStyle} ${dashed}`}
                    onClick={() => onChangeBorderStyle('dashed')}
                >
                    <p>dashed</p>
                </div>
                <div
                    className={`${borderStyle} ${double}`}
                    onClick={() => onChangeBorderStyle('double')}
                >
                    <p>double</p>
                </div>
                <div
                    className={`${borderStyle} ${groove}`}
                    onClick={() => onChangeBorderStyle('groove')}
                >
                    <p>groove</p>
                </div>
                <div
                    className={`${borderStyle} ${ridge}`}
                    onClick={() => onChangeBorderStyle('ridge')}
                >
                    <p>ridge</p>
                </div>
                <div
                    className={`${borderStyle} ${inset}`}
                    onClick={() => onChangeBorderStyle('inset')}
                >
                    <p>inset</p>
                </div>
                <div
                    className={`${borderStyle} ${outset}`}
                    onClick={() => onChangeBorderStyle('outset')}
                >
                    <p>outset</p>
                </div>
            </div>
        </div>
    );
}

export default StyleBorder;
