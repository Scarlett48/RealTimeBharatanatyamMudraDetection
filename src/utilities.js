// Define our labelmap
const labelMap = {
    1:{name:'Pataka', color:'red'}, 
    2:{name:'Tripataka', color:'red'}, 
    3:{name:'Ardhapataka', color:'red'}, 
    4:{name:'Katharimukha', color:'red'}, 
    5:{name:'Mayura', color:'red'},
    6:{name:'Ardhachandra', color:'red'},
    7:{name:'Arala', color:'red'},
    8:{name:'Shukatunda', color:'red'},
    9:{name:'Mushti', color:'red'},
    10:{name:'Shikhara', color:'red'},
    11:{name:'Kapitta', color:'red'},
    12:{name:'Katakamukha', color:'red'},
    13:{name:'Suchi', color:'red'},
    14:{name:'Chandrakala', color:'red'},
    15:{name:'Padmakosha', color:'red'},
    16:{name:'Sarpashirsha', color:'red'},
    17:{name:'Mrugashirisha', color:'red'},
    18:{name:'Simhamukha', color:'red'},
    19:{name:'Kangula', color:'red'},
    20:{name:'Alapadma', color:'red'},
    21:{name:'Chatura', color:'red'},
    22:{name:'Bhramara', color:'red'},
    23:{name:'Hamsassya', color:'red'},
    24:{name:'Hamsapakshika', color:'red'},
    25:{name:'Samdamsha', color:'red'},
    26:{name:'Mukula', color:'red'},
    27:{name:'Tamrachuda', color:'red'},
    28:{name:'Trishula', color:'red'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 13
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}