import React from 'react';
import style from '../position-border/positionBorder.module.css';

type TProps = {
    onChangeBorderPosition: ( layer: any ) => void
};

const PositionBorder: React.FC<TProps> = (props) =>{
    const { onChangeBorderPosition } = props;
    const { 
        border,
        borderPosition, 
        all,
        right,
        bottom,
        left,
    } = style;
    return (
        <div>
            <label>Position</label>
            <br />
            <div className={border}>
                <div
                    className={`${borderPosition} ${all}`}
                >
                    <p>All</p>
                </div>
                <div
                    className={`${borderPosition} ${top}`}
                >
                    <p>Top</p>
                </div>
                <div
                    className={`${borderPosition} ${right}`}
                >
                    <p>Right</p>
                </div>
                <div
                    className={`${borderPosition} ${bottom}`}
                >
                    <p>Bottom</p>
                </div>
                <div
                    className={`${borderPosition} ${left}`}
                >
                    <p>Left</p>
                </div>
            </div>
        </div>
    );
}

export default PositionBorder;