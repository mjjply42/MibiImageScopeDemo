import React from 'react';
import { Image } from '../presentation/imagePresent'

export const ImageComponent = (props) => {
    return (
        <>
            <div style={styles.imageContainer}>
                <Image scaleUpdate={props.scaleUpdate}/>
            </div>
        </>
    )
}

const styles = {
    imageContainer: {
        display: 'flex',
        aligntItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
}