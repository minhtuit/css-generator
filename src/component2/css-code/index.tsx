import React from 'react';

type TProps = {
    textShadowStyle: string,
};

const CssCode: React.FC<TProps> = (props) => {
    const { textShadowStyle } = props;
    return(
        <div>
            <h1>CSS code</h1>
            <pre>{textShadowStyle}</pre>
        </div>
    );
}

export default CssCode;