let button=document.getElementById('btn');
button.addEventListener('click', ()=>{
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
    const result=document.getElementById('output');
    const comment=document.getElementById('comment');
    let height_status=false , weight_status=false;

    if(height === '' || isNaN(height) || (height <=0 )){
        document.getElementById('height_error').innerHTML='Please provide a valid height';

    }else{
        document.getElementById('height_error').innerHTML='';
        height_status=true; //valid height
    }

    if(weight === '' || isNaN(weight) || ( weight <=0) ){
       document.getElementById('weight_error').innerHTML= 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML='';
        weight_status=true;  //valid weight
    }

    if(height_status && weight_status){
        const bmi=(weight / ( (height * height) / 10000 )).toFixed(2);

        if(bmi < 18.5){
            result.innerHTML = 'Your BMI is :  ' + bmi ;
            commebt.innerHTML=+ 'You are Under weight !';
        }
        else if(bmi >= 18.5 && bmi <=24.9){
            result.innerHTML= 'Your BMI is :  ' + bmi;
            comment.innerHTML= 'You are Healthy !';

        }
        else if(bmi >= 25.0 && bmi <=29.9){
            result.innerHTML = 'Your BMI is :  ' + bmi ;
            comment.innerHTML= 'You are Overweught !';
        }
        else{
            result.innerHTML = 'Your BMI is :  ' + bmi ;
            comment.innerHTML= 'You are Obese !';
        }
    }
});