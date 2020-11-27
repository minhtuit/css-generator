import React from 'react'
import Border from '../../src/component/border/config-border';
import Preview from '../../src/component/border/preview';
import CssCode from '../../src/css-code';

type TState = {
    layer: TBorderLayer,
};
type TBorderLayer = {
    width: number,
    all: number,
    topLeft: number,
    topRight: number,
    bottomRight: number,
    bottomLeft: number,
    color: string,
    borderStyle: string,
    borderPosition: string
};

class App extends React.Component< {}, TState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            layer: {
            width: 5,
            all: 1,
            topLeft: 1,
            topRight: 1,
            bottomRight: 1,
            bottomLeft: 1,
            color: '#1C6EA4',
            borderStyle: 'solid',
            borderPosition: '',
            }
        };
    }
    render() {
        const { layer } = this.state;
        const {
            width,
            topLeft,
            topRight,
            bottomRight,
            bottomLeft,
            color,
            borderStyle,
            borderPosition
        } = layer;
        const cssStr = (`
            border ${borderPosition}: ${width}px ${borderStyle} ${color};
            border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`)
        return(
            <div>
                <Border 
                    layer={layer}
                    onChangeLayer={(layer: TBorderLayer) => this.setState({ layer: layer})}
                />
                <Preview borderShadow={cssStr}/>
                <CssCode cssStr={cssStr} />
            </div>
        );
    }
}

export default App;
export type { TBorderLayer };
