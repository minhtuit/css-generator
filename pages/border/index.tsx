import React from 'react'
import ConfigBorder from '../../src/component/border/config-border';
import Preview from '../../src/component/border/preview';
import CssCode from '../../src/css-code';

type TBorderStyle = 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
type TBorderPosition = 'all' | 'top' | 'right' | 'bottom' | 'left';

type TBorder = {
    width: number,
    topLeft: number,
    topRight: number,
    bottomRight: number,
    bottomLeft: number,
    color: string,
    borderStyle: TBorderStyle,
    borderPosition: TBorderPosition,
};

class App extends React.Component< {}, TBorder> {
    constructor(props: {}) {
        super(props);
        this.state = {
            width: 5,
            topLeft: 1,
            topRight: 1,
            bottomRight: 1,
            bottomLeft: 1,
            color: '#1C6EA4',
            borderStyle: 'solid',
            borderPosition: 'all',
        };
    }
    render() {
        const {
            width,
            topLeft,
            topRight,
            bottomRight,
            bottomLeft,
            color,
            borderStyle,
            borderPosition,
        } = this.state;
        const cssStr = (`
            border${borderPosition === 'all' ? '' : `-${borderPosition}`}  : ${width}px ${borderStyle} ${color};
            border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
        );

        return(
            <div>
                <ConfigBorder 
                    value={this.state}
                    onChangeLayer={(value: TBorder) => this.setState(value)}
                />
                <Preview borderShadow={cssStr}/>
                <CssCode cssStr={cssStr} />
            </div>
        );
    }
}

export default App;
export type { TBorder, TBorderStyle, TBorderPosition };
