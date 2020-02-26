import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export const Brightness = withStyles({
    root: {
        color: '#92928F',
        height: 10,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#4CE4CF',
        border: '2px solid none',
        marginTop: -8,
        marginLeft: -12,
            '&:focus,&:hover,&$active': {
                boxShadow: 'inherit',
    },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: 'black',
        display: 'none',
    },
    track: {
        height: 10,
        borderRadius: 4,
        color: 'yellow',
    },
    rail: {
        height: 10,
        borderRadius: 4,
    },
})(Slider);

export const Red = withStyles({
    root: {
        color: '#92928F',
        height: 10,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#4CE4CF',
        border: '2px solid none',
        marginTop: -8,
        marginLeft: -12,
            '&:focus,&:hover,&$active': {
                boxShadow: 'inherit',
    },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: 'black',
        display: 'none',
    },
    track: {
        height: 10,
        borderRadius: 4,
        color: 'red',
    },
    rail: {
        height: 10,
        borderRadius: 4,
    },
})(Slider);

export const Green = withStyles({
    root: {
        color: '#92928F',
        height: 10,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#4CE4CF',
        border: '2px solid none',
        marginTop: -8,
        marginLeft: -12,
            '&:focus,&:hover,&$active': {
                boxShadow: 'inherit',
    },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: 'black',
        display: 'none',
    },
    track: {
        height: 10,
        borderRadius: 4,
        color: 'green',
    },
    rail: {
        height: 10,
        borderRadius: 4,
    },
})(Slider);

export const Blue = withStyles({
    root: {
        color: '#92928F',
        height: 10,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#4CE4CF',
        border: '2px solid none',
        marginTop: -8,
        marginLeft: -12,
            '&:focus,&:hover,&$active': {
                boxShadow: 'inherit',
    },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: 'black',
        display: 'none',
    },
    track: {
        height: 10,
        borderRadius: 4,
        color: 'blue',
    },
    rail: {
        height: 10,
        borderRadius: 4,
    },
})(Slider);