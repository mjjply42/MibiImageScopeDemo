const brightness = 1.35;
let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector(".colorImage");
canvas.width = img.width;
canvas.height = img.height;
ctx.drawImage(img, 10, 10);

function Click() 
{
    console.log("HELLO")
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData)
    changeToWhite(imageData.data);
    ctx.putImageData(imageData, 0, 0);
}

function changeToWhite(data) {
    
    for (let i = 0; i < data.length; i+=4) {
        data[i] = (data[i] + 1); //red
        data[i+1] = (data[i+1] + 1); //green
        data[i+2] = (data[i+2] + 1); //blue
        //data[i+3] = 255; //alpha
    }
    console.log(data)
}