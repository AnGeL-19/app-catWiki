

export const imgsRandom = (array) => {

    const newArray = [];

    for (let index = 0; index < 4; index++) {
        
        let num = parseInt(parseFloat(Math.random().toFixed(2))*100);
        if(num < array.length){

            if(newArray.includes(array[num])){
                index--;
            }else{
                newArray[index] = array[num];
            }
        }else{
            index--;
        }
    }
    return newArray;

}


