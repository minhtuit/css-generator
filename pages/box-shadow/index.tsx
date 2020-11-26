import React from 'react';
import Generator from '../../src/component/box-shadow/generator';
import Layer from '../../src/component/box-shadow/layer';
import Preview from '../../src/component/box-shadow/preview';
import CssCode from '../../src/css-code';

type TState = {
    layers: TBoxShadowLayer[],
    selectedLayer: number,
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

const DEFAULT_LAYER = {
    shiftRight: 0,
    shiftDown: 0,
    spread: 3,
    blur: 5,
    opacity: 20,
    inset: false,
    color: "#000000",
};

class BoxShadow extends React.Component< {}, TState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            layers: [DEFAULT_LAYER],
            selectedLayer: 0,
        };
    }

    handleChanageLayer = (layer: TBoxShadowLayer) => {
        const { layers, selectedLayer } = this.state;
        const newLayers = layers.map((item, index) => {
            return index === selectedLayer ? layer : item;
        });
        this.setState({
            layers: newLayers,
        });
    };


    /**
     * nối 1 phần tử vào 1 mảng và không thay đổi mảng cũ
     */
    handleAddLayer = () => {
        const { layers } = this.state;
        const newLayers = layers.concat(DEFAULT_LAYER);
        this.setState({
            layers: newLayers,
        });
    };
    
    handleSelectLayer = (index: number) => {
        this.setState({
            selectedLayer: index
        });
    };

    render() {
        const { layers, selectedLayer } = this.state;
        
        const layersStr = layers.map((item) => {
            const {
                shiftRight,
                shiftDown,
                spread,
                blur,
                color,
                inset,
            } = item;
            return  ` ${color} ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px ${inset ? 'inset' : ''}`;
        });

        const cssStr =  `box-shadow: ${layersStr.join(', ')};`;

        return(
            <div>
                <Generator  
                    layer={layers[selectedLayer]} 
                    onChangeLayer={this.handleChanageLayer}
                />
                <Layer
                    layers={layersStr}
                    onAddLayer={this.handleAddLayer}
                    onSelecLayer={this.handleSelectLayer}
                />
                <Preview boxShadowStyle={cssStr} />
                <CssCode cssStr={cssStr} />
            </div>
        );
    }
}

export default BoxShadow;
export type { TBoxShadowLayer };
