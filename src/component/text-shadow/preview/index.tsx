import React from 'react';
import style from './textshadow.module.css';

type TProps = {
    textShadowStyle: string,
};

const Preview: React.FC<TProps> = (props) => {
    const [backgroundColor, setBackgroundColor] = React.useState('#FFFFFF');
    const [previewColor, setPreviewColor] = React.useState('#3D9DF6');
    const handleChangeBackgroundColor = (e) => {
        setBackgroundColor(e.target.value);
    };
    const handleChangePreviewColor = (e) => {
        setPreviewColor(e.target.value);
    };
    const { textShadowStyle } = props;
    return(
        <div>
            <h1>Preview</h1>
            <br />
            <input 
                type="color"
                value={backgroundColor}
                onChange={handleChangeBackgroundColor}
            />
            <input 
                type="color"
                value={previewColor}
                onChange={handleChangePreviewColor}
            />
            <br />
            <div className="textPreview">
                <div className={`${style.textPreview} preview`}>Hello Tu</div>
            </div>
            <style>
                {`
                    .preview {
                        ${textShadowStyle};
                        color: ${previewColor}
                    }
                    .textPreview {
                        display: flex;
                        background-color: ${backgroundColor}
                    }
                `}
            </style>
        </div>
    );
}

export default Preview;