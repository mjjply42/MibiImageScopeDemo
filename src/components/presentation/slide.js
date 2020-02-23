import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Brightness, Red, Green, Blue } from '../styles/sliderStyle';

export const Slide = (props) => {
    if (props.slider === 'bright')
    {
        return (
            <>
                <Typography gutterBottom>{props.name}</Typography>
                <Brightness onChange={(e, val) => props.scaleUpdate('bright',val)} valueLabelDisplay="auto" 
                    aria-label="pretto slider" defaultValue={0} max={255} />
            </>
        )
    }
    else if (props.slider === 'red')
    {
        return (
            <>
                <Typography gutterBottom>{props.name}</Typography>
                <Red onChange={(e, val) => props.scaleUpdate('red',val)}  valueLabelDisplay="auto" 
                    aria-label="pretto slider" defaultValue={0}  max={255}/>
            </>
        )
    }
    else if (props.slider === 'green')
    {
        return (
            <>
                <Typography gutterBottom>{props.name}</Typography>
                <Green onChange={(e, val) => props.scaleUpdate('green',val)}  valueLabelDisplay="auto" 
                    aria-label="pretto slider" defaultValue={0}  max={255}/>
            </>
        )
    }
    else if (props.slider === 'blue')
    {
        return (
            <>
                <Typography gutterBottom>{props.name}</Typography>
                <Blue onChange={(e, val) => props.scaleUpdate('blue',val)}  valueLabelDisplay="auto" 
                    aria-label="pretto slider" defaultValue={0}  max={255}/>
            </>
        )
    }
}