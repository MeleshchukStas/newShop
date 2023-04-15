

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

    var reader1 = new FileReader();

    reader1.onload = function () {
        dataUrl1 = reader1.result
        output1.src = dataUrl1;
    };

    reader1.readAsDataURL(input1.files[0]);
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
//////////Смена фото по наведению
function change1() {
    pic1.src = "./img/chahka1.jpg";
};
function change2() {
    pic1.src = "./img/chahka.jpg";
};
function change3() {
    pic2.src = "img/chahka2.jpg";
};
function change4() {
    pic2.src = "img/chahka.jpg";
};
function change5() {
    pic3.src = "img/chahka3.jpg";
};
function change6() {
    pic3.src = "img/chahka.jpg";
};
function change7() {
    pic4.src = "img/chahka4.jpg";
};
function change8() {
    pic4.src = "img/chahka.jpg";
};
function change9() {
    pic5.src = "img/chahka5.jpg";
};
function change10() {
    pic5.src = "img/chahka.jpg";
};

hover1.onmouseover = change2;
hover1.onmouseout = change1;
hover2.onmouseover = change4;
hover2.onmouseout = change3;
hover3.onmouseover = change6;
hover3.onmouseout = change5;
hover4.onmouseover = change8;
hover4.onmouseout = change7;
hover5.onmouseover = change10;
hover5.onmouseout = change9;

///////////////Добовляем карточки в корзину
var arrayP = [];

var index = parseInt(localStorage.getItem('count'))
document.getElementsByClassName("boxs")[0].onclick = function (e) {
    product = e.target;
    if (e.target.localName == 'a' && e.target.className != "asdfrqw") {


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
        price2.className = "cena"

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

        var order = {
            "img": img.src,
            "name": name.innerText,
            "price": price.innerText,
        }

        arrayP[index++] = order;

        localStorage.setItem('order', JSON.stringify(arrayP));
        localStorage.setItem('count', JSON.stringify(index));
        document.getElementById("counter").innerText++

        if (document.getElementById("counter").innerText != 0) {
            document.getElementById("counter").style["display"] = "inline-block"

        } else {

            document.getElementById("counter").style["display"] = "none"
        }


        sumPrices()
        product.id = "";
    }
}

var c = document.createElement("p")
    c.className = "cupPrice"

function sumPrices() {
    var prices = document.getElementsByClassName("cena");
    var sum = 0;
    var skidka = 0;
    var x = document.getElementById("carzina")

    for (var i = 0; i < prices.length; i++) {
        sum += parseInt(prices[i].innerText);

        if (x.innerHTML != 0) {
            c.style["display"] = "block"
        } else {
            c.style["display"] = "none"
        }

    }
    if (sum > 450) {
        skidka = (sum * 0.10)
        c.innerText = ("Общая сумма с учётом скидки 10%: " + (sum - skidka));
    }else{
        c.innerText = ("Общая сумма " + sum)
    }
    

    qwer.appendChild(c)
    
    

    return sum;



}

///////////////Удаляем карточки из корзины
document.getElementsByClassName("delite")[0].onclick = function (z) {
    del = z.target;
    document.getElementById("counter").innerText--

    if (document.getElementById("counter").innerText != 0) {
        document.getElementById("counter").style["display"] = "inline-block"

    } else {

        document.getElementById("counter").style["display"] = "none"
    }

    if (z.target.className == 'del') {
        del = e.target
        del.id = "tt"
    }
    if (z.target.className == 'deltr') {
        carzina.removeChild(del.closest('.cartProd'))
    }
    sumPrices()
}

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
    for (var i = 0; i < newCups.length; i++) {
        str = '<div class="box"><div></div><img id="pic" src="' + newCups[i].img + '" alt="cup"><div></div><div class="description"><div></div><h3 class="name">' + newCups[i].name + '</h3><div></div><p class="opis">' + newCups[i].text + '</p><div></div><span class="price">' + newCups[i].price + ' &#8372 </span><a class="box_button" href="#">Купить</a></div></div>'

    }
    cupsAdds.innerHTML += str;
    localStorage.newCups = JSON.stringify(newCups)
    localStorage.getItem(newCups);
};

function openWindow() {
    var miniWindow = window.open("", "litlewindow", config = 'height=620, width=450, top=200, left=200');
    var str = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><link rel="stylesheet" href="style.css"><style>form {display: flex;flex-direction: column;align-items: center;justify-content: center}input {width: 90%;height: 40px;margin: 20px 0;font-size: 20px} #butCup{width: 70%; height: 55px; border-radius: 10px; background: #ffbcbc;} .imgCup{width: 70%;}.cupClose{position: absolute; top: 5px; right: 5px; padding:10px 15px; border-radius:50%; border:1px solid black; background: grey;text-align: center;font-weight: bold;color: #fff}.closes{margin: 20px 0;display: flex}</style></head><body style="text-align: center;"><h1>Новая чашка</h1><form action="" id="newCup"><img style="width: 105px; height: 120px;" id="addImgCup" src="img/cup.png" alt="cup"><input id="cupColor" type="text" placeholder="Чашка" class="colorCup"><input id="cupHeight" type="text" placeholder="Описание" class="heightCup"><input id="cupPrice" type="text" placeholder="Цена" class="priceCup"><div class="input__wrapper"><input class="addPhoto" type="file" name="images" id="fr"><label for="fr" class="input__file-button"><span class="input__file-icon-wrapper"><img class="input__file-icon" src="img/add.png"alt="Выбрать файл" width="25"></span><span class="input__file-button-text">Добавить фото</span></label></div><input id="butCup" type="button" value="Создать"><div class="closes"><a href="#" class="cupClose" onclick="self.close()">X</a></div></form></body></html>'
    miniWindow.document.write(str);

    var buttonAddCup = miniWindow.document.getElementById("fr").onchange = function (e) {
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
////
