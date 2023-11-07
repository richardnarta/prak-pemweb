//by Richard Arya Winarta - 121140035
//Praktikum Pemrograman Web RB - Tugas 5

var num_list_1 = []
var num_list_2 = []

function editArrayScreen(array, fill, type){
    array.push(fill)
    var temp = Number(array.join(''))
    if(type == "normal"){
        document.getElementById("screen").innerHTML = temp
        return temp
    }else{
        document.getElementById("screen").innerHTML = `${temp}.`
        return `${temp}.0`
    }
}

function addnumber(num){
    if(sessionStorage.getItem("num_list_1") != null || num_list_1.length == 0){
        sessionStorage.setItem("num_list_1", editArrayScreen(num_list_1, num, "normal"))
    }else if(sessionStorage.getItem("num_list_2") != null || num_list_2.length == 0){
        sessionStorage.setItem("num_list_2", editArrayScreen(num_list_2, num, "normal"))
    }
}

function addcomma(){
    if(sessionStorage.getItem("comma") == null && num_list_1[0] != "done" && sessionStorage.getItem("num_list_1") != null){
        sessionStorage.setItem("num_list_1", editArrayScreen(num_list_1, '.'))
        sessionStorage.setItem("comma",true)
    }else if(sessionStorage.getItem("comma") == null && num_list_1[0] == "done" && sessionStorage.getItem("num_list_2") != null){
        sessionStorage.setItem("num_list_2", editArrayScreen(num_list_2, '.'))
        sessionStorage.setItem("comma",true)
    }
}

function setoperation(op){
    if(sessionStorage.getItem("operator") == null && 
    (sessionStorage.getItem("value1") != null || sessionStorage.getItem("num_list_1") != null)){
        sessionStorage.setItem("operator",op)
        document.getElementById("screen").innerHTML = ""
        document.getElementById("screen-op").innerHTML = op

        var temp = Number(num_list_1.join(''))
        sessionStorage.setItem("value1",temp)
        sessionStorage.removeItem("num_list_1")
        sessionStorage.removeItem("comma")
        num_list_1 = ["done"]
    }
}

function result(){
    if(sessionStorage.getItem("operator") != null && num_list_2.length != 0){
        value1 = Number(sessionStorage.getItem("value1"))
        value2 = Number(num_list_2.join(''))
        op = sessionStorage.getItem("operator")
        var result

        if(op == "+"){
            result = value1 + value2
        }else if(op == "-"){
            result = value1 - value2
        }else if(op == "x"){
            result = value1 * value2
        }else if(op == "/"){
            result = value1 / value2
        }

        document.getElementById("screen-op").innerHTML = "="
        document.getElementById("screen").innerHTML = Math.round((result)*100)/100
        sessionStorage.removeItem("operator")
        num_list_1=[String(Math.round((result)*100)/100)]
        sessionStorage.setItem("value1", Math.round((result)*100)/100)
        num_list_2 = []
    }
}

function del(){
    if(sessionStorage.getItem("num_list_1") != null){
        num_list_1.pop()
        sessionStorage.setItem("num_list_1", Number(num_list_1.join('')))
        if(num_list_1[num_list_1.length - 1]=="."){
            sessionStorage.removeItem("comma")
            document.getElementById("screen").innerHTML = `${Number(num_list_1.join(''))}.0`
        }else{
            document.getElementById("screen").innerHTML = Number(num_list_1.join(''))
        }
    }else if(sessionStorage.getItem("num_list_2") != null){
        num_list_2.pop()
        sessionStorage.setItem("num_list_2", Number(num_list_2.join('')))
        if(num_list_2[num_list_2.length - 1]=="."){
            sessionStorage.removeItem("comma")
            document.getElementById("screen").innerHTML = `${Number(num_list_2.join(''))}.0`
        }else{
            document.getElementById("screen").innerHTML = Number(num_list_2.join(''))
        }
    }
}

function clears(){
    sessionStorage.clear()
    num_list_1 = []
    num_list_2 = []
    document.getElementById("screen-op").innerHTML = ""
    document.getElementById("screen").innerHTML = ""
}