


function getReversedNum() {
    let n = document.querySelector(".input_a").value;
    n = n + "";
    let output = document.querySelector(".output_");
    output.innerHTML = n.split("").reverse().join("");;
  }


  function find_sim() {
    let array = document.querySelector(".input_b").value.split('');
    let result = {};
    for (let i = 0; i < array.length; i++) {
        var a = array[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    let resText = "";
    for (var key in result){
        var str = 'Число ' + key + ' == ' + result[key] + 'раз(а) <br>';
        resText += str
    }
    document.querySelector(".output_b").innerHTML += resText;

}

function calculateTheWords() {
    let arrays = document.querySelector(".input_c").value.split(' ')
    let wordsNumber = arrays.length;
    let output = document.querySelector(".output_c");
    output.innerHTML = wordsNumber;
 
 }

