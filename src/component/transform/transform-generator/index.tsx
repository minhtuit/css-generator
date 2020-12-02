import React from 'react';
import { TTransform } from '../../../../pages/transform';

type TProps = {
    value: TTransform,
    onChange: (value: TTransform) => void,
};

const Generator: React.FC<TProps> = (props) => {
    const { value, onChange } = props;
    const {
        scale,
        rotate,
        transformX,
        transformY,
        skewX,
        skewY,
        translateX,
        translateY, 
    } = value;

    const onChangeScale = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, scale: +target.value});
    };
    const onChangeRotate = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, rotate: +target.value});
    };
    const onChangeTranslateX = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, translateX: +target.value});
    };
    const onChangeTranslateY = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, translateY: +target.value});
    };
    const onChangeSkewX = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, skewX: +target.value});
    };
    const onChangeSkewY = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, skewY: +target.value});
    };
    const onChangeTransformX = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, transformX: +target.value});
    };
    const onChangeTransformY = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, transformY: +target.value});
    };
    return(
        <div>
            <h1>Transform CSS Generator</h1>
            <br />
            <label>Scale (X)</label>
            <br />
            <input 
                type="range"
                max="2"
                min="0"
                step="0.1"
                value={scale}
                onChange={onChangeScale}
            />
            {scale}
            <br />
            <label>Rotate (deg)</label>
            <br />
            <input
                type="range"
                max="360"
                min="0"
                value={rotate}
                onChange={onChangeRotate}
            />
            {rotate}
            <br />
            <label>TranslateX (px)</label>
            <br />
            <input 
                type="range"
                max="100"
                min="-100"
                value={translateX}
                onChange={onChangeTranslateX}
            />
            {translateX}
            <br />
            <label>TranslateY (px)</label>
            <br />
            <input 
                type="range"
                max="100"
                min="-100"
                value={translateY}
                onChange={onChangeTranslateY}
            />
            {translateY}
            <br />
            <label>SkewX (deg)</label>
            <br />
            <input 
                type="range"
                max="90"
                min="-90"
                value={skewX}
                onChange={onChangeSkewX}
            />
            {skewX}
            <br />
            <label>SkewY (deg)</label>
            <br />
            <input 
                type="range"
                max="90"
                min="-90"
                value={skewY}
                onChange={onChangeSkewY}
            />
            {skewY}
            <br />
            <label>Transform origin X (%)</label>
            <br />
            <input 
                type="range"
                max="150"
                min="-50"
                value={transformX}
                onChange={onChangeTransformX}
            />
            {transformX}
            <br />
            <label>Transform origin Y (%)</label>
            <br />
            <input 
                type="range"
                max="150"
                min="-50"
                value={transformY}
                onChange={onChangeTransformY}
            />
            {transformY}
            <br />
            <button 
                type="button"

            >
                Reset origin
            </button>

        </div>
    );
}

export default Generator;