

function bmiyou(e) {
    e.preventDefault();
    var x = document.getElementById("vazn1").value;
    var y = document.getElementById("ghad1").value;
    var w = y * y;
    var z = x / w;
    document.getElementById("bmiu1").innerHTML+="</br>"
}


submit2 = document.querySelector('#submit2');

submit2.addEventListener('click', calc);

function calc(e) {
    e.preventDefault();
    var x = document.getElementById("vazn1").value;
    var y = document.getElementById("ghad1").value;

    console.log(x, y)

    var w = y * y;
    var z = x / w;

    var node = document.createElement('p');
    node.textContent = z;
    document.getElementById("bmiu1").appendChild(node);
}

