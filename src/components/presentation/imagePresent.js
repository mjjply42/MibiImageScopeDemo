import React, {useState, useEffect, createRef } from 'react';
import Mibi  from '../../mibi.png';


export const Image = (props) => {
    const canvasRef = createRef();
    const imageRef = createRef();
    const [ initialPixelData, updatePixelData ] = useState()
    const [ bright, updateBright ] = useState()

    window.onload = function() {
        const canvas = canvasRef;
        const ctx = canvas.current.getContext("2d");
        const img = imageRef;
        canvas.current.width = img.current.width;
        canvas.current.height = img.current.height;
        ctx.drawImage(img.current, 10, 10);
        let imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
        let imageD = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
        updatePixelData(imageData)
    }
    
    useEffect(() => {
        if (props.scaleUpdate)
            Click(props.scaleUpdate);
    },[props.scaleUpdate])

    const Click = (dataSet) => 
    {
        const canvas = canvasRef;
        const ctx = canvas.current.getContext("2d");
        let imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
        if (dataSet[0] === "bright")
        {
            var pixelData = new Uint8ClampedArray(initialPixelData.data);
            increaseBrightness(pixelData, dataSet[1]);
            imageData.data.set(pixelData);
            ctx.putImageData(imageData, 0, 0);
        }
        else if (dataSet[0] === "red")
        {
            var pixelData = new Uint8ClampedArray(initialPixelData.data);
            increaseRedChannel(pixelData, dataSet[1]);
            imageData.data.set(pixelData);
            ctx.putImageData(imageData, 0, 0);
        }
        else if (dataSet[0] === "green")
        {
            var pixelData = new Uint8ClampedArray(initialPixelData.data);
            increaseGreenChannel(pixelData, dataSet[1]);
            imageData.data.set(pixelData);
            ctx.putImageData(imageData, 0, 0);
        }
        else if (dataSet[0] === "blue")
        {
            var pixelData = new Uint8ClampedArray(initialPixelData.data);
            increaseBlueChannel(pixelData, dataSet[1]);
            imageData.data.set(pixelData);
            ctx.putImageData(imageData, 0, 0);
        }
    }

    const increaseBrightness = (data, val) => 
    {
    
        for (let i = 0; i < data.length; i+=4) {
            data[i] = (data[i] + val); //red
            data[i+1] = (data[i+1] + val); //green
            data[i+2] = (data[i+2] + val); //blue
            //data[i+3] = 255; //alpha
        }
    }

    const increaseRedChannel = (data, val) => 
    {
    
        for (let i = 0; i < data.length; i+=4) {
            data[i] = (data[i] + val); //red
        }
    }

    const increaseGreenChannel = (data, val) =>
    {
    
        for (let i = 0; i < data.length; i+=4) {
            data[i+1] = (data[i+1] + val); //green
        }
    }

    const increaseBlueChannel = (data, val) =>
    {
    
        for (let i = 0; i < data.length; i+=4) {
            data[i+2] = (data[i+2] + val); //blue
        }
    }

    const Revert = () => {
        const canvas = canvasRef;
        const ctx = canvas.current.getContext("2d");
        let imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
        for (let i = 0; i < imageData.data.length; i+=4) {
            imageData.data[i] = initialPixelData.data[i]; //red
            imageData.data[i+1] = initialPixelData.data[i+1]; //green
            imageData.data[i+2] = initialPixelData.data[i+2]; //blue
        }
        ctx.putImageData(imageData, 0, 0);
    }

    return (
        <>
            <canvas onClick={() => Click()} style={{width: '600px'}} ref={canvasRef} className="canvas"/>
            <img style={styles.imageStyle} ref={imageRef} src={Mibi} alt="mibi"/>
            {/*<button onClick={()=>Revert()}>Revert</button>*/}
        </>
    )
}

const styles = {
    imageStyle: {
        width: '100%',
        display: 'none',
    }
}