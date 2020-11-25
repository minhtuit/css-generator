import React from 'react';

type TProps = {
    boxShadowStyle: string,
};

const CssCode: React.FC<TProps> = (props) => {
    const { boxShadowStyle } = props;
    return(
        <div>
            <h1>CSS code</h1>
            <pre>{boxShadowStyle}</pre>
        </div>
    );
}

export default CssCode;