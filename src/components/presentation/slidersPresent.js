import React from 'react';
import { Slide } from './slide';



export const Sliders = (props) => {
    
    return (
        <>
            <div style={styles.sliderBox}>
                <Slide scaleUpdate={props.scaleUpdate} slider={'bright'} name={'Brightness'} />
                <Slide scaleUpdate={props.scaleUpdate} slider={'red'} name={'Red'} />
                <Slide scaleUpdate={props.scaleUpdate} slider={'green'} name={'Green'} />
                <Slide scaleUpdate={props.scaleUpdate} slider={'blue'} name={'Blue'} />
            </div>
        </>
    )
}

const styles = {
    sliderBox: {
        width: '90%',
        height: '350px'
    }
}