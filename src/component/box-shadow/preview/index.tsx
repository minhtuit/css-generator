import React from 'react';
import style from './boxshadow.module.css'

type TProps = {
    boxShadowStyle: string,
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

    const { boxShadowStyle } = props;

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
            <div className="colorPreview">
                <div className={ `${style.preview} preview` }/>
            </div>
            <style>
                {`
                .preview {
                    ${boxShadowStyle};
                    background-color: ${previewColor}
                }
                .colorPreview {
                    display: flex;
                    background-color: ${backgroundColor}
                }
                `}
            </style>
        </div>
    );
};

export default Preview;
