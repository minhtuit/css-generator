import React from 'react';
import Generator from '../../src/component/text-shadow/generator';
import Layer from '../../src/component/text-shadow/layer';
import Preview from '../../src/component/text-shadow/preview';
import CssCode from '../../src/css-code';

type TState = {
    layers: TTextShadowLayer[],
    selectedLayer: number,
};
type TTextShadowLayer = {
    shiftRight: number,
    shiftDown: number,
    blur: number,
    opacity: number,
    color: string,
};
const DEFAULT_LAYER = {
    shiftRight: 0,
    shiftDown: 0,
    blur: 5,
    opacity: 20,
    color: '#000000',
};

class TextShadow extends React.Component< {}, TState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            layers: [DEFAULT_LAYER],
            selectedLayer: 0,
        };
    }

    handleChangeLayer = (layer: TTextShadowLayer) => {
        const { layers, selectedLayer } = this.state;
        const newLayers = layers.map((item, index) => {
            return index === selectedLayer ? layer : item;
        });
        this.setState({
            layers: newLayers,
        });
    };
    handleAddLayer = () => {
        const { layers } = this.state;
        const newLayers = layers.concat(DEFAULT_LAYER);
        this.setState({
            layers: newLayers,
        });
    };
    handleSelectLayer = (index: number) => {
        this.setState({
            selectedLayer: index,
        });
    };

    render() {
        const { layers,selectedLayer } = this.state;
        const layersStr = layers.map((item) => {
            const {
                shiftRight,
                shiftDown,
                blur,
                color
            } = item
            return `${color} ${shiftRight}px ${shiftDown}px ${blur}px`
        })
        const cssStr = `text-shadow: ${layersStr.join(', ')};`;
        return(
            <div>
                <Generator 
                    layer = {layers[selectedLayer]}
                    onChangeLayer={this.handleChangeLayer}

                />
                <Layer 
                    layers={layersStr}
                    onAddLayer={this.handleAddLayer}
                    onSelecLayer={this.handleSelectLayer}
                />
                <Preview textShadowStyle={cssStr} />
                <CssCode cssStr={cssStr} />
            </div>
        );
    }
}

export default TextShadow;
export type { TTextShadowLayer };
