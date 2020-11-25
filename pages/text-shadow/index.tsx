import React from 'react';
import Generator from '../../src/component/text-shadow/generator';
import Preview from '../../src/component/text-shadow/preview';
import CssCode from '../../src/css-code';

type TState = {
    layer: TTextShadowLayer,
};
type TTextShadowLayer = {
    shiftRight: number,
    shiftDown: number,
    blur: number,
    opacity: number,
    color: string,
};

class TextShadow extends React.Component< {}, TState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            layer: {
                shiftRight: 0,
                shiftDown: 0,
                blur: 5,
                opacity: 20,
                color: '#000000'
            }
        }
    }

    render() {
        const { layer } = this.state;
        const { 
            shiftRight,
            shiftDown,
            blur,
            color,
        } = layer;
        const cssStr = `text-shadow: ${color} ${shiftRight}px ${shiftDown}px ${blur}px ;`
        return(
            <div>
                <Generator 
                    layer = {layer}
                    onChangeLayer={(layer: TTextShadowLayer) => this.setState({ layer:layer})}
                />
                <Preview textShadowStyle={cssStr} />
                <CssCode cssStr={cssStr} />
            </div>
        );
    }
}

export default TextShadow;
export type { TTextShadowLayer };
