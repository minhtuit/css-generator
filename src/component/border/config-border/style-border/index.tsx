import React from 'react';
import style from '../style-border/styleBorder.module.css';

type TProps = {
    onChangeBorderStyle: ( layer: any) => void,
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
            <label>Posotion</label>
            <br />
            <div className={border}>
                <div
                    className={`${borderStyle} ${solid}`}
                >
                    <p>solid</p>
                </div>
                <div
                    className={`${borderStyle} ${dotted}`}
                >
                    <p>dotted</p>
                </div>
                <div
                    className={`${borderStyle} ${dashed}`}
                >
                    <p>dashed</p>
                </div>
                <div
                    className={`${borderStyle} ${double}`}
                >
                    <p>double</p>
                </div>
                <div
                    className={`${borderStyle} ${groove}`}
                >
                    <p>groove</p>
                </div>
                <div
                    className={`${borderStyle} ${ridge}`}
                >
                    <p>ridge</p>
                </div>
                <div
                    className={`${borderStyle} ${inset}`}
                >
                    <p>inset</p>
                </div>
                <div
                    className={`${borderStyle} ${outset}`}
                >
                    <p>outset</p>
                </div>
            </div>
        </div>
    );
}

export default StyleBorder;