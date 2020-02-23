import React from 'react';
import { Sliders } from '../presentation/slidersPresent'

export const SliderComponent = (props) => {

    return (
        <>
            <div style={styles.slidersContainer}>
                <Sliders  scaleUpdate={props.scaleUpdate}/>
            </div>
        </>
    )
}

const styles = {
    slidersContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '3px solid #4CE4CF',
        width: '100%',
        height: '99%',
    }
}