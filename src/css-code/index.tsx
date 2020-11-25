import React from 'react';

type TProps = {
    cssStr: string,
};

const CssCode: React.FC<TProps> = (props) => {
    const { cssStr } = props;
    return(
        <div>
            <h1>CSS code</h1>
            <pre>{cssStr}</pre>
        </div>
    );
}

export default CssCode;