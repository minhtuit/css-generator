import React from 'react';
import TransformGenerator from '../../src/component/transform/transform-generator';
import Preview from '../../src/component/transform/preview';
import CssCode from '../../src/css-code';

type TTransform = {
    scale: number,
    rotate: number,
    translateX: number,
    translateY: number,
    skewX: number,
    skewY: number,
    transformX: number,
    transformY: number,
}

class Transform extends React.Component< {}, TTransform > {
    constructor(props: {}) {
        super(props);
        this.state = {
            scale: 1,
            rotate:0,
            translateX: 0,
            translateY: 0,
            skewX: 0,
            skewY: 0,
            transformX: 50,
            transformY: 50,
        };
    }
    render() {
        const { 
            scale,
            rotate,
            transformX,
            transformY,
            skewX,
            skewY,
            translateX,
            translateY,        
        } = this.state;
        const cssStr = (`
            transform: scale(${scale}) rotate(${rotate}deg) translate(${translateX}px,${translateY}px) skew(${skewX}deg,${skewY}deg);
            transfrom-origin: ${transformX}% ${transformY}%
        `);

        return(
            <div>
                <TransformGenerator 
                    value={this.state}
                    onChange={(value: TTransform) => this.setState(value)}
                />
                <Preview 
                    transformShadow={cssStr}
                />
                <CssCode cssStr={cssStr} />
            </div>
        );
    }
}

export default Transform;
export type { TTransform };