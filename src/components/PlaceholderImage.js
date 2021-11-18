import React from 'react';
import {Placeholder} from "semantic-ui-react";



function PlaceholderImage(props) {
    const {count} = props;
    const rows = [];

    for (let i = 0; i < count; i++){
        rows.push(<Placeholder key={i}><Placeholder.Image square /></Placeholder>)
    }

    return (
        <div>
            {rows}
        </div>
    );
}

export default PlaceholderImage;