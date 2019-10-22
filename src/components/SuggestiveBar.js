import React from 'react';

export function SuggestiveBar(props)
{
    return (
            <div className="suggestive_bar">
                <span><h5>{props.suggestiveText}</h5></span>
            </div>
    );
}

export default SuggestiveBar;