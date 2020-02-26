import React, {useState, useEffect, createRef } from 'react';
import Mibi  from '../../mibi.png';


export const Image = (props) => {
    const canvasRef = createRef();
    const imageRef = createRef();
    const [ initialPixelData, updatePixelData ] = useState()
    const [ previous, updatePrev ] = useState({
        bright: 0,
        red: 0,
        green: 0,
        blue: 0,
    })

    const pixelObj = {
        bright: [0,1,2],
        red: [0],
        green: [1],
        blue: [2],
    }

    window.onload = function() {
        const canvas = canvasRef;
        const ctx = canvas.current.getContext("2d");
        const img = imageRef;
        canvas.current.width = img.current.width;
        canvas.current.height = img.current.height;
        ctx.drawImage(img.current, 0, 0);
        let imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
        updatePixelData(imageData)
    }
    
    useEffect(() => {
        if (props.scaleUpdate)
            dispatchToChannel(props.scaleUpdate);
    },[props.scaleUpdate])

    const dispatchToChannel = (dataSet) => 
    {
        const canvas = canvasRef;
        const ctx = canvas.current.getContext("2d");
        let imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
        updateChannel(imageData.data, dataSet[1], dataSet[0]);
        ctx.putImageData(imageData, 0, 0);
    }

    const updateChannel = (data, val, name) =>
    {
        let newPrevious = JSON.parse(JSON.stringify(previous))
        if (val < previous[name])
        {
            newPrevious[name] = val
            updatePrev(newPrevious)
            val = (previous[name] - val);
            val *= -1;
        }
        else
        {
            
            newPrevious[name] = val
            updatePrev(newPrevious)
            val = (val - previous[name]);
        }
        for (let i = 0; i < data.length; i+=4) {
            pixelObj[name].forEach((item) => {
                if ((data[i+item] + val) > initialPixelData.data[i+item])
                {
                    data[i+item] = (data[i+item] + val);
                }
                else
                    data[i+item] = initialPixelData.data[i+item]
            })
        }
    }

    return (
        <>
            <canvas style={{width: '600px'}} ref={canvasRef} className="canvas"/>
            <img style={styles.imageStyle} ref={imageRef} src={Mibi} alt="mibi"/>
        </>
    )
}

const styles = {
    imageStyle: {
        width: '100%',
        display: 'none',
    }
}