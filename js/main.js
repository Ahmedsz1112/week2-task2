
function insert(val){
    let myString = document.form.textview.value;
    let lastChar = myString.length - 1;
    if(myString.length < 30){
        if(!isNaN(lastChar) || lastChar == null || !isNaN(val)){
            document.form.textview.value = myString + val;
        }else if(val != lastChar){
            document.form.textview.value = myString.replace(lastChar, val)
        }
    }
}

function equal(){
    let sum = document.form.textview.value;
    if(true){
        document.form.textview.value = eval(sum);
    }
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1)
}


