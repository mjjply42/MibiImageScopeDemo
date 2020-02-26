import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Slide } from './slide';



export const Sliders = (props) => {

    const availableSliders = [
        {slider: "bright", name: "Brightness"},
        {slider: "red", name: "Red"},
        {slider: "green", name: "Green"},
        {slider: "blue", name: "Blue"}
    ]

    return (
        <>
            <div style={styles.sliderBox}>
                {availableSliders.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <Typography gutterBottom>{item.name}</Typography>
                            <Slide scaleUpdate={props.scaleUpdate} 
                                slider={item.slider} name={item.name}/>
                        </Fragment>
                    )
                })}
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