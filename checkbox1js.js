//alert('fvdhj');
//single checkboxname display code starts

function Checkname() {
    var checkbox = document.getElementsByTagName('input');
    var message = '';
    let result = document.querySelector('label');
    //console.log(checkbox);
    let count = 0;
    // debugger;
    for (var i = 1; i < checkbox.length; i++) {
        //console.log(checkbox[i], checkbox[i].checked);
        if (checkbox[i].checked === true) {
            var row = checkbox[i].parentNode.parentNode;
            message += row.cells[1].innerHTML;
            message += "   " + row.cells[2].innerHTML;
            message += "   " + row.cells[3].innerHTML;
            message += "   " + row.cells[4].innerHTML;
            message += "   " + row.cells[5].innerHTML;
            message += "\n";
            count++;
            //document.getElementById("lbldisplay").innerHTML = a.value;
        }

        result.innerText = message;

        //console.log(result)
        // else {
        //     for (var i = 1; i < checkbox.length; i++) {
        //         if (checkbox[i].type = 'checkbox') {
        //             checkbox[i].checked = false;
        //             document.getElementById('lbldisplay').innerHTML = "";
        //         }
        //     }
        //     //document.getElementById("lbldisplay").style.display ="none";
        // }
    }
    if (count === 5) {
        checkbox[0].checked = true;
    } else {
        checkbox[0].checked = false;
    }
}

function Checkage() {
    var a = document.getElementById("age");
    if (a.checked == true) {
        document.getElementById("lbldisplay").innerHTML = a.value;
    } else {
        document.getElementById("lbldisplay").style.display = "none";
    }
    return false;
}

//single checkboxname display code ends


function GetSelected() {
    var checkboxes = document.getElementsByTagName('input');
    let result = document.querySelector('label');
    var message = '';

    //console.log()
    if (!checkboxes[0].checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            //console.log(i)
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
                var row = checkboxes[i].parentNode.parentNode;

                message += row.cells[1].innerHTML;
                message += "   " + row.cells[2].innerHTML;
                message += "   " + row.cells[3].innerHTML;
                message += "   " + row.cells[4].innerHTML;
                message += "   " + row.cells[5].innerHTML;
                message += "\n";
                // document.getElementById('lbldisplay').innerHTML = "";
            }

            result.innerText = message;
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            //console.log(i)
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
                document.getElementById('lbldisplay').innerHTML = "";
            }
        }
    }
}

function checkAll(ele) {
    var checkboxes = document.getElementsByTagName('input');
    var message = '';
    if (ele.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
                var row = checkboxes[i].parentNode.parentNode;
                let result = document.querySelector('label');

                message += row.cells[1].innerHTML;
                message += "   " + row.cells[2].innerHTML;
                message += "   " + row.cells[3].innerHTML;
                message += "   " + row.cells[4].innerHTML;
                message += "   " + row.cells[5].innerHTML;
                message += "\n";
                result.innerText = message;
                //document.getElementById('lbldisplay').innerHTML = Srnum.value +","+ sname.value +","+ age.value +","+ city.value +","+ country.value;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            //console.log(i)
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
                document.getElementById('lbldisplay').innerHTML = "";
            }
        }
    }
}