import React from 'react';
import style from './transform.module.css';

type TProps = {
    transformShadow: string,
};

const Preview: React.FC<TProps> = (props) => {
    const [backgroundColor, setBackgroundColor] = React.useState('#FFFFFF');
    const [previewColor, setPreviewColor] = React.useState('#3D9DF6');
    const handleChangeBackgroundColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBackgroundColor(e.target.value);
    };
    const handleChangePreviewColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPreviewColor(e.target.value);
    };

    const { transformShadow } = props;

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
            <div className="colorPreView">
                <div className={ `${style.preview} preview` }/>
            </div>
            <style>
                {`
                .preview {
                    ${transformShadow};
                    background-color: ${previewColor}
                }
                .colorPreView {
                    display: flex;
                    background: ${backgroundColor}
                }
                `}
            </style>
        </div>
    );
};

export default Preview;
