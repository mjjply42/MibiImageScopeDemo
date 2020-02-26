import React from 'react';
import { Brightness, Red, Green, Blue } from '../styles/sliderStyle';

export const Slide = (props) => {
    if (props.slider === 'bright')
    {
        return (
            <>
                <Brightness onChange={(e, val) => props.scaleUpdate('bright', val)} valueLabelDisplay="auto" 
                    aria-label="pretto slider" defaultValue={0} max={50} />
            </>
        )
    }
    else if (props.slider === 'red')
    {
        return (
            <>
                <Red onChange={(e, val) => props.scaleUpdate('red', val)}  valueLabelDisplay="auto" 
                    aria-label="pretto slider" defaultValue={0}  max={200}/>
            </>
        )
    }
    else if (props.slider === 'green')
    {
        return (
            <>
                <Green onChange={(e, val) => props.scaleUpdate('green', val)}  valueLabelDisplay="auto" 
                    aria-label="pretto slider" defaultValue={0}  max={200}/>
            </>
        )
    }
    else if (props.slider === 'blue')
    {
        return (
            <>
                <Blue onChange={(e, val) => props.scaleUpdate('blue', val)}  valueLabelDisplay="auto" 
                    aria-label="pretto slider" defaultValue={0}  max={200}/>
            </>
        )
    }
}