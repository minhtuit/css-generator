import React from 'react';

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
            />
            <input 
                type="color"
            />
            <br />
        </div>
    );
}

export default Preview;