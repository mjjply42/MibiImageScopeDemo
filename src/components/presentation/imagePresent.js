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

    useEffect(() => {
        console.log(previous)
    },[previous])

    window.onload = function() {
        const canvas = canvasRef;
        const ctx = canvas.current.getContext("2d");
        const img = imageRef;
        canvas.current.width = img.current.width;
        canvas.current.height = img.current.height;
        ctx.drawImage(img.current, 10, 10);
        let imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
        updatePixelData(imageData)
        console.log("IMAGE DAT: ", imageData.data)
    }
    
    useEffect(() => {
        if (props.scaleUpdate)
            Click(props.scaleUpdate);
    },[props.scaleUpdate])

    const Click = (dataSet) => 
    {
        const canvas = canvasRef;
        let pixelData = null;
        const ctx = canvas.current.getContext("2d");
        let imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
        if (dataSet[0] === "bright")
        {
            //pixelData = new Uint8ClampedArray(initialPixelData.data);
            increaseBrightness(imageData.data, dataSet[1]);
            //imageData.data.set(pixelData);
            ctx.putImageData(imageData, 0, 0);
        }
        else if (dataSet[0] === "red")
        {
            //pixelData = new Uint8ClampedArray(initialPixelData.data);
            increaseRedChannel(imageData.data, dataSet[1]);
            //imageData.data.set(pixelData);
            ctx.putImageData(imageData, 0, 0);
        }
        else if (dataSet[0] === "green")
        {
            //pixelData = new Uint8ClampedArray(initialPixelData.data);
            increaseGreenChannel(imageData.data, dataSet[1]);
            //imageData.data.set(pixelData);
            ctx.putImageData(imageData, 0, 0);
        }
        else if (dataSet[0] === "blue")
        {
            //pixelData = new Uint8ClampedArray(initialPixelData.data);
            increaseBlueChannel(imageData.data, dataSet[1]);
            //imageData.data.set(pixelData);
            ctx.putImageData(imageData, 0, 0);
        }
    }

    const increaseBrightness = (data, val) => 
    {
        //console.log(data[0], data[1], data[2])
        if (val < previous.bright)
        {
            //console.log("MINUS: ", (previous.bright - val))
            updatePrev({...previous, bright : val });
            val = (previous.bright - val);
            val *= -1;
        }
        else
        {
            updatePrev({...previous, bright : val });
            val = (val - previous.bright);
        }
        console.log(data[0], data[1], val)
        console.log(initialPixelData.data[0], initialPixelData.data[1], val)
        for (let i = 0; i < data.length; i+=4) {
            if ((data[i] + val) >= initialPixelData.data[i])
                data[i] = (data[i] + val); //red
            else
                data[i] = initialPixelData.data[i]
            if ((data[i+1] + val) >= initialPixelData.data[i+1])
                data[i+1] = (data[i+1] + val); //green
            else
                data[i+1] = initialPixelData.data[i+1]
            if ((data[i+2] + val) >= initialPixelData.data[i+2])
                data[i+2] = (data[i+2] + val); //blue
            else
                data[i+2] = initialPixelData.data[i+2]
            //data[i+3] = 255; //alpha
        }
        console.log(data[0], data[1], data[2], data[4], data[5], data[6])
    }

    const increaseRedChannel = (data, val) => 
    {
        if (val < previous.red)
        {
            //console.log("MINUS: ", (previous.bright - val))
            updatePrev({...previous, red : val });
            val = (previous.red - val);
            val *= -1;
        }
        else
        {
            updatePrev({...previous, red : val });
            val = (val - previous.red);
        }
        for (let i = 0; i < data.length; i+=4) {
            if ((data[i] + val) >= initialPixelData.data[i])
                data[i] = (data[i] + val); //red
            else
                data[i] = initialPixelData.data[i]
        }
    }

    const increaseGreenChannel = (data, val) =>
    {
        if (val < previous.green)
        {
            //console.log("MINUS: ", (previous.bright - val))
            updatePrev({...previous, green : val });
            val = (previous.green - val);
            val *= -1;
        }
        else
        {
            updatePrev({...previous, green : val });
            val = (val - previous.green);
        }
        for (let i = 0; i < data.length; i+=4) {
            if ((data[i+1] + val) >= initialPixelData.data[i+1])
                data[i+1] = (data[i+1] + val); //green
            else
                data[i+1] = initialPixelData.data[i+1]
        }
    }

    const increaseBlueChannel = (data, val) =>
    {
        if (val < previous.blue)
        {
            //console.log("MINUS: ", (previous.bright - val))
            updatePrev({...previous, blue : val });
            val = (previous.blue - val);
            val *= -1;
        }
        else
        {
            updatePrev({...previous, blue : val });
            val = (val - previous.blue);
        }
        for (let i = 0; i < data.length; i+=4) {
            if ((data[i+2] + val) >= initialPixelData.data[i+2])
                data[i+2] = (data[i+2] + val); //blue
            else
                data[i+2] = initialPixelData.data[i+2]
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