import React from 'react';
import { TBorder, TBorderPosition, TBorderStyle } from '../../../../../pages/border';
import style from '../position-border/positionBorder.module.css';

type TProps = {
    onChangeBorderPosition: (borderPosition: TBorderPosition) => void,
};

const PositionBorder: React.FC<TProps> = (props) =>{
    const { onChangeBorderPosition } = props;
    const { 
        border,
        borderPosition,
        all,
        top,
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
                    onClick={() => onChangeBorderPosition('all')}
                >
                    <p>All</p>
                </div>
                <div
                    className={`${borderPosition} ${top}`}
                    onClick={() => onChangeBorderPosition('top')}
                >
                    <p>Top</p>
                </div>
                <div
                    className={`${borderPosition} ${right}`}
                    onClick={() => onChangeBorderPosition('right')}
                >
                <p>Right</p>
                </div>
                <div
                    className={`${borderPosition} ${bottom}`}
                    onClick={() => onChangeBorderPosition('bottom')}
                >
                    <p>Bottom</p>
                </div>
                <div
                    className={`${borderPosition} ${left}`}
                    onClick={() => onChangeBorderPosition('left')}
                >
                    <p>Left</p>
                </div>
            </div>
        </div>
    );
}

export default PositionBorder;
