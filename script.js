function showInput(shape) {
    const inputSections = document.querySelectorAll('.input-section');
    inputSections.forEach(section => {
        section.style.display = 'none';
    });

    const input = document.getElementById(`input${shape.charAt(0).toUpperCase() + shape.slice(1)}`);
    input.style.display = 'block';
    console.log(`You clicked ${shape.charAt(0).toUpperCase() + shape.slice(1)}`);
}


function calculation(shape){
    let inputValue;
    let base,height;
    let ans;
    if(shape==='square'){
        inputValue = parseFloat(document.getElementById('squareInput').value);
        ans=inputValue*inputValue;
        console.log(ans);
    }
    if(shape==='circle'){
        inputValue = parseFloat(document.getElementById('circleInput').value);
        ans=3.14*inputValue*inputValue;
        console.log(ans);
    }
    if(shape==='triangle'){
        base = parseFloat(document.getElementById('baseInput').value);
        height = parseFloat(document.getElementById('heightInput').value);
        ans=0.5*base*height;
        console.log(ans);
    }

    const anss=document.getElementById('ansButton');
    const areaOutput=document.getElementById('areaOutput');
    
    if(isNaN(ans)){
        areaOutput.textContent=`Area is : Enter a Value`;
    }
    else{
        areaOutput.textContent=`Area is : ${ans}`;
    }
    anss.style.display='block';

}
