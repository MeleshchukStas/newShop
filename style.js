

var vuserCount = 0;
var vuserArray = [];
var Vstr = []
var Rstr = []

document.getElementById("avtor").onclick = avtorization;
document.getElementById("regis").onclick = regestration;

function avtorization() {
    var Vemail = document.getElementsByName("emailV")[0];
    var Vpass = document.getElementsByName("passV")[0];

    var okVemail = validationVemail(Vemail.value);
    var okVpass = validationVpass(Vpass.value);

    if (okVemail && okVpass) {
        var newVuser = new userv(Vemail.value, Vpass.value, vuserCount);
        var userV = newVuser.arrVuser();
        var userView = userVnum(userV);
        console.log(userView);
        vuserArray[vuserCount] = userView;
        console.log(vuserArray);
        vuserCount++;
        vclearRegForm()

    }
    proverohka(Rstr, Vstr);
    splitDataSends();
}


function splitDataSends() {
    var dataForms = document.getElementsByClassName("text2");
    var dataUserPlace = [];
    for (var i = 0; i < dataForms.length; i++) {
        dataUserPlace[i] = dataForms[i].placeholder;
    }
    console.log(dataUserPlace);
    splitDates(userArray, dataUserPlace)
}

function splitDates(arrU, arrP) {
    var table = document.getElementsByClassName("tableUser")[0];


    table.innerHTML = "";
    var tmp = "";
    var dataUser = [];

    var qwer = document.createElement("th")
    qwer.id = "images";
    var image = document.createElement('img');
    image.type = 'button';
    image.value = 'delite';
    image.className = "output2"
    qwer.appendChild(image);

    for (var i = 0; i < arrU.length; i++) {
        dataUser = arrU[i].join(",");
        dataTab = dataUser.split(",")

        tmp += "<table>";
        tmp += "<th>Пользователь " + (parseInt(dataTab[dataTab.length - 1]) + 1) +
            "</th>";
        for (var j = 0; j < dataTab.length - 1; j++) {
            tmp += "<tr><td>" + arrP[j] + "</td><td>" + dataTab[j] + "</td></tr>";
        }
        tmp += "</table>";
    }
    table.innerHTML = tmp;
}


function proverohka(Rstr, Vstr) {

    if ((Rstr[1] && Rstr[2]) == (Vstr[0] && Vstr[1])) {
        var textV1 = document.getElementsByName("vEmail")[0];
        var textV2 = document.getElementsByName("vPass")[0];
        console.log(true)
    } else {
        var textV1 = document.getElementsByName("vEmail")[0];
        var textV2 = document.getElementsByName("vPass")[0];

        document.ver.emailV.style.background = "red"
        textV1.style.color = "red";

        document.ver.passV.style.background = "red";
        textV2.style.color = "red";

        textV1.innerHTML = ("Неверный E-mail")
        textV2.innerHTML = ("Неверный пароль")

        console.log(false)
    }
}

function splitDataSend() {
    var dataForm = document.getElementsByClassName("data");
    var dataUserPlace = [];

    for (var i = 0; i < dataForm.length; i++) {
        dataUserPlace[i] = dataForm[i].placeholder;
    }
    console.log(dataUserPlace)
}

function userv(Vemail, Vpass, idVuser) {
    this.Vemail = Vemail;
    this.Vpass = Vpass;
    this.idVuser = idVuser;

    this.arrVuser = function arrVuser() {
        var Vtmp = [];
        Vtmp[0] = this.Vemail
        Vtmp[1] = this.Vpass
        Vtmp[2] = this.idVuser
        return Vtmp
    }
}

function userVnum(array) {
    var str = array.join(",");
    Vstr = str.split(",");

    return Vstr;

}
function vclearRegForm() {
    var input = document.getElementsByClassName("text1");

    for (var i = 0; i < input.length; i++) input[i].value = ""
}

var userCount = 0;
var userArray = [];

function regestration() {
    var surname = document.getElementsByName("firstName")[0];
    var email = document.getElementsByName("emailY")[0];
    var pass = document.getElementsByName("passY")[0];

    var okName = validationFname(surname.value);
    var okEmail = validationEmail(email.value);
    var okPass = validationPass(pass.value);

    if (okName && okEmail && okPass == true) {
        newUser = new user(surname.value, email.value, pass.value, dataUrl1, userCount);
        var user0 = newUser.arrUser();
        var userView = userNum(user0);
        console.log(userView);
        userArray[userCount] = userView;
        numuser = userArray[userCount]
        UserStorage.users[userCount] = numuser.join(",");
        console.log(userArray);
        userCount++;
        clearRegForm()

        save()
    }
};

fr.onchange = function (e) {

    input1 = e.target
    input2 = e.target
    var output2 = '';
    var reader1 = new FileReader();
    var reader2 = new FileReader();

    reader1.onload = function () {
        dataUrl1 = reader1.result
        output1.src = dataUrl1;
    };
    reader2.onload = function () {
        var dataUrl2 = reader2.result
        output2.src = dataUrl2;
    }
    reader1.readAsDataURL(input1.files[0]);
    reader2.readAsDataURL(input2.files[0]);
};





UserStorage = {};
UserStorage.users = [];

function save() {
    UserStorage.users;
    localStorage.setItem("UserStorage", UserStorage.users)
    localStorage.setItem("UserStorage", JSON.stringify(UserStorage.users))
    document.body.onload = function () {
        userArray = JSON.parse(localStorage.getItem("UserStorage"))

    }
}
function userNum(array) {
    var str = array.join(",");
    Rstr = str.split(",");

    return Rstr;
}
function clearRegForm() {
    var input = document.getElementsByClassName("text2");
    for (var i = 0; i < input.length; i++) input[i].value = ""
}

function user(surname, email, pass, input1, idUser) {
    this.surname = surname;
    this.email = email;
    this.pass = pass;

    this.input1 = input1

    this.idUser = idUser;

    this.arrUser = function arrUser() {
        var tmp = [];
        tmp[0] = this.surname;
        tmp[1] = this.email;
        tmp[2] = this.pass;

        tmp[3] = this.input1

        tmp[4] = this.idUser;
        return tmp
    }
}

function validationFname(name) {
    var text = document.getElementsByName("pFname")[0];
    var p = /^\D{3}\D*$/gi;
    var ok = false;
    if (p.test(name)) {
        text.style.color = "green";
        document.reg.firstName.style.background = "green";
        ok = true;
    } else {
        text.style.color = "red";
        document.reg.firstName.style.background = "red";
    }
    return ok;
};

function validationEmail(email) {
    var text = document.getElementsByName("pEmail")[0];
    var p = /^(\w+\.)*\w+@\w+(\.\w+)*\.\D{2,5}$/gi
    var ok = false;
    if (p.test(email)) {
        text.style.color = "green";
        document.reg.emailY.style.background = "green"
        ok = true;
    } else {
        text.style.color = "red";
        document.reg.emailY.style.background = "red"
    }
    return ok;
}

function validationPass(pass) {
    var text = document.getElementsByName("pPass")[0];
    var p = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z!@#$%^&*].{5,16})$/g
    var ok = false;
    if (p.test(pass)) {
        text.style.color = "green";
        document.reg.passY.style.background = "green";
        ok = true;
    } else {
        text.style.color = "red";
        document.reg.passY.style.background = "red";
    }
    return ok;
}


////////////////////////Верификация

function validationVemail(emailV) {
    var textV = document.getElementsByName("vEmail")[0];
    var p = /^(\w+\.)*\w+@\w+(\.\w+)*\.\D{2,5}$/gi
    var ok = false;
    if (p.test(emailV)) {
        textV.style.color = "green";
        document.ver.emailV.style.background = "green"
        ok = true;
    } else {
        textV.style.color = "red";
        document.ver.emailV.style.background = "red"
    }
    return ok;
}

function validationVpass(passV) {
    var textV = document.getElementsByName("vPass")[0];
    var p = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z!@#$%^&*].{5,16})$/g
    var ok = false;
    if (p.test(passV)) {
        textV.style.color = "green";
        document.ver.passV.style.background = "green";
        ok = true;
    } else {
        textV.style.color = "red";
        document.ver.passV.style.background = "red";
    }
    return ok;
}
////////////Смена фото по наведению
// function change1() {
//     pic1.src = "img/chahka1.jpg";
// };
// function change2() {
//     pic1.src = "img/chahka.jpg";
// };
// function change3() {
//     pic2.src = "img/chahka2.jpg";
// };
// function change4() {
//     pic2.src = "img/chahka.jpg";
// };
// function change5() {
//     pic3.src = "img/chahka3.jpg";
// };
// function change6() {
//     pic3.src = "img/chahka.jpg";
// };
// function change7() {
//     pic4.src = "img/chahka4.jpg";
// };
// function change8() {
//     pic4.src = "img/chahka.jpg";
// };
// function change9() {
//     pic5.src = "img/chahka5.jpg";
// };
// function change10() {
//     pic5.src = "img/chahka.jpg";
// };

// hover1.onmouseover = change2;
// hover1.onmouseout = change1;
// hover2.onmouseover = change4;
// hover2.onmouseout = change3;
// hover3.onmouseover = change6;
// hover3.onmouseout = change5;
// hover4.onmouseover = change8;
// hover4.onmouseout = change7;
// hover5.onmouseover = change10;
// hover5.onmouseout = change9;

///////////////Добовляем карточки в корзину

document.getElementsByClassName("boxs")[0].onclick = function (e)  {

    if (e.target.localName == 'a' && e.target.className != "asdfrqw") {

        product = e.target;
        product.id = "tt";


        var cartProd = document.createElement("div")
        cartProd.className = "cartProd";

        var img2 = document.createElement("img")
        img = tt.closest(".box").childNodes[1].src
        img2.src = img;
        img2.style.width = "100px"

        var name = document.createElement("h3")
        text1 = tt.closest(".box").childNodes[3].childNodes[1].innerText;
        name.innerText = text1;

        var name2 = document.createElement("p")
        text2 = tt.closest(".box").childNodes[3].childNodes[3].innerText;
        name2.innerText = text2;

        var price2 = document.createElement("span")
        price = tt.closest(".box").childNodes[3].childNodes[5].innerText;
        price2.innerText = price;

        document.getElementById("carzina").appendChild(cartProd);
        cartProd.appendChild(img2);
        cartProd.appendChild(name);
        cartProd.appendChild(name2);
        cartProd.appendChild(price2);

        var deltr = document.createElement("input");
        deltr.type = "button";
        deltr.value = "delite";
        deltr.className = "deltr"
        cartProd.appendChild(deltr);

        product.id = "";
    }


};

///////////////Удаляем карточки из корзины
document.getElementsByClassName("delite")[0].onclick = function (z) {
    del = z.target;

    if (z.target.className == 'del') {
        del = z.target
        del.id = "tt2"
    }
    if (z.target.className == 'deltr') {
        carzina.removeChild(del.closest('.cartProd'))
    }
}
/////////////////////////////////////////



var newCups = [];
var cupsAdds = document.getElementById("cupsAdds");

function newCup(name, text, price, img) {
    this.name = name,
    this.text = text,
    this.price = price,
    this.img = img
};

function printCup() {
    var str = "";
    for (var i = 0; i < newCups.length; ++i) {
        str = '<div class="box box1"><img id="pic" src="' + newCups[i].img + '" alt="cup"><div class="description"><h3 class="name">' + newCups[i].name + '</h3><p class="opis">' + newCups[i].text + '</p class="price"><span class="price">Цена-' + newCups[i].price + ' &#8372 </span><a class="box_button" href="#">Купить</a></div></div>'
    }

    cupsAdds.innerHTML += str;


    document.getElementsByClassName("boxs")[0].onclick = function (f)  {

    if (f.target.localName == 'a' && f.target.className != "asdfrqw") {

        product = f.target;
        product.id = "ff";

        var cartProd = document.createElement("div")
        cartProd.className = "cartProd";

        var img3 = document.createElement("img")
        img1 = ff.closest(".box1").childNodes[0].src
        img3.src = img1;
        img3.style.width = "100px"

        var name1 = document.createElement("h3")
        text2 = ff.closest(".box1").childNodes[3].childNodes[2].innerText;
        name1.innerText = text2;

        var name3 = document.createElement("p")
        text3 = ff.closest(".box1").childNodes[3].childNodes[1].innerText;
        name3.innerText = text3;

        var price3 = document.createElement("span")
        price = ff.closest(".box1").childNodes[3].childNodes[2].innerText;
        price3.innerText = price;

        document.getElementsByClassName("delite")[0].appendChild(cartProd);
        cartProd.appendChild(img3);
        cartProd.appendChild(name1);
        cartProd.appendChild(name3);
        cartProd.appendChild(price3);

        var deltr = document.createElement("input");
        deltr.type = "button";
        deltr.value = "delite";
        deltr.className = "deltr"
        cartProd.appendChild(deltr);
        var order = {
			"img": img3.src,
			"name": name3.innerText,
			"price": price.innerText,
		}
        array[index++] = order;
		localStorage.setItem('order', JSON.stringify(array));

        product.id = "";
    }


};


}


function openWindow() {
    var miniWindow = window.open("", "litlewindow", config = 'height=550, width=350, top=200, left=200');
    var str = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><link rel="stylesheet" href="style.css"><style>form {display: flex;flex-direction: column;align-items: center;justify-content: center}input {width: 90%;height: 40px;margin: 20px 0;font-size: 20px} #butCup{width: 70%;} .imgCup{width: 70%;}.cupClose{padding:10px; border-radius:50%; border:1px solid black; background: grey;text-align: center;font-weight: bold;color: #fff}.closes{margin: 20px 0;display: flex}</style></head><body style="text-align: center;"><h1>Заявка</h1><form action="" id="newCup" style="height: 91vh;"><img style="width: 20px; height: 20px;" id="addImgCup" src="img/human.png" alt="cup"><input id="cupColor" type="text" placeholder="Цвет" class="colorCup"><input id="cupHeight" type="text" placeholder="Обьем" class="heightCup"><input id="cupPrice" type="text" placeholder="Цена" class="priceCup"><input id="imgCup" type="file" value="Добавить фото"><input id="butCup" type="button" value="Создать"><div class="closes"><a href="#" class="cupClose" onclick="self.close()">X</a></div></form></body></html>'
    miniWindow.document.write(str);

    var buttonAddCup = miniWindow.document.getElementById("imgCup").onchange = function (e) {
        var input = e.target;

        var readCup = new FileReader();
        readCup.onload = function () {
            var dataUrls = readCup.result;
            var outputs = miniWindow.document.getElementById("addImgCup");
            outputs.src = dataUrls;
        };
        readCup.readAsDataURL(input.files[0]);
    };

    var butCups = miniWindow.document.getElementById("butCup").onclick = function (e) {
        var img = miniWindow.document.getElementById("addImgCup").src;
        newCups.push(new newCup(miniWindow.cupColor.value, miniWindow.cupHeight.value, miniWindow.cupPrice.value, img));
        printCup();
        miniWindow.close();
        localStorage.cupsAdds = JSON.stringify(newCups);
    };

    miniWindow.document.close();
}

//