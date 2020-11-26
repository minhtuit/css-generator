import React from 'react';

type TProps = {
    layers: string[],
    onAddLayer: () => void,
    onSelecLayer: (index: number) => void,
};

const Layer: React.FC<TProps> = (props) => {
    const { layers, onAddLayer, onSelecLayer } = props;
    return(
        <div>
            <button
                type="button"
                onClick={onAddLayer}
            >
                Add Layer
            </button>
            <div>
                {layers.map((item, index) => (
                    <div onClick={() => onSelecLayer(index)}>{item}</div>
                ))}
            </div>
        </div>
    );
};

export default Layer;
