import React from 'react';
import Generator from '../../src/component/generator';
import Preview from '../../src/component/preview';
import CssCode from '../../src/component/css-code';

type TState = {
    layer: TBoxShadowLayer,
};

type TBoxShadowLayer = {
    shiftRight: number,
    shiftDown: number,
    spread: number,
    blur: number,
    opacity: number,
    inset: boolean,
    color: string,
};

class BoxShadow extends React.Component< {}, TState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            layer: {
                shiftRight: 0,
                shiftDown: 0,
                spread: 3,
                blur: 5,
                opacity: 20,
                inset: false,
                color: "#e31616"
            }
        }
    }

    render() {
        const { layer } = this.state;
        const {
            shiftRight,
            shiftDown,
            spread,
            blur,
            inset,
            color,
            // opacity
        } = layer;
        const cssStr =  `box-shadow: ${color} ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px ${inset ? 'inset' : ''};`
        return(
            <div>
                <Generator  
                    layer={layer} 
                    onChangeLayer={(layer: TBoxShadowLayer) => this.setState({ layer: layer }) }
                />
                <Preview boxShadowStyle={cssStr} />
                <CssCode boxShadowStyle={cssStr} />
            </div>
        );
    }
}

export default BoxShadow;
export type { TBoxShadowLayer };
