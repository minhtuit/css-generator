import React from 'react';

type TProps = {
    textShadowStyle: string,
};

const Preview: React.FC<TProps> = (props) => {
    const { textShadowStyle } = props;
    return(
        <div>
            <h1>CSS code</h1>
            <br />
            {textShadowStyle}
        </div>
    );
}

export default Preview;