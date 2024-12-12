
//event listener 事件監聽

/* function handle_click(element){
    //alart("叫你按就按阿");
    console.log(element);
    element.innerText = "按屁阿";
    element.style.color = "red";
}

var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    //alart("按屁阿");
    this.innerText = "按屁阿";
    this.style.color = "red";
})


var img = document.getElementById("img");

img.addEventListener("mouseover",function(){
    this.src = "img/no_hi.gif";
})


img.addEventListener("mouseout",function(){
    this.src = "img/HI.gif"
})

//取得html元素

var h1 = document.getElementById("header");
console.log(h1);
h1.innerText = "noooo";
h1.style.backgroundColor = "blue";

var link = document.getElementById("link");
console.log(link);

link.href =  "https://www.amazon.com/-/zh_TW/";


//window
window.document.write("123");
window.prompt("123"); 


//class

class Phone {
    constructor(number,year,is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;

    }
    phone_age(){
        return 2021 - this.year;
    }
}

var phone1 = new Phone("123",2020,false);
var phone2 = new Phone("100",2018,false);

document.write(phone1.is_waterproof);
//document.write(phone2.phone_age());


//2維陣列、巢狀迴圈

var number= [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];
//document.write(number[0][0]);


for(var i=0;i<number.length;i++){
    for(var j=0;j<number[i].length;j++){
        document.write(number[i][j]);
        
    }
    document.write("<br/>");
}


for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        document.write("i:"+i+",j:"+j);
        document.write("<br/>");
    }
} 

//問答程式

var question = [
    {
        prompt:"香蕉是甚麼顏色?(a)藍色(b)黃色(c)紅色",
        answer:"b"
    },
    {
        prompt:"草莓是甚麼顏色?(a)藍色(b)黃色(c)紅色",
        answer:"c"
    },
    {
        prompt:"一公尺等於幾公分?(a)10(b)100(c)1000",
        answer:"b"
    }
]

var score = 0;
for(var i = 0; i<question.length; i++){
    var input = prompt(question[i].prompt);
    if (input==question[i].answer){
        score++;
        alert("你答對了");
    }
    else {
        alert("你答錯了");
    }
    
}

//for迴圈

var friends = ["小黑","小藍","小綠"];

for(var i = 0 ;i < friends.length ; i++ ){
    document.write(friends[i]);
    document.write("<br/>");
    
}

// 密碼檢驗程式
var password = 123456;
var input;
var entry_count = 0;
var out_of_limit = false;

while(input != password && !out_of_limit){
    entry_count++;
    if(entry_count <= 3){
        input = prompt("請輸入密碼");
    }   
    else out_of_limit = true;
}

if(out_of_limit){
    alert("超出輸入次數")
}
else {
    alart("登入成功");
}

/* while(input != password){
    input = prompt("請輸入密碼");
}

alart("登入成功"); 


//while
var i = 1;
while(i<=3){
    document.write(i);
    document.write("<br/>");
    i++;
}

do{
    document.write(i);
    document.write("<br/>");
    i++;
}while(i<=3)

//真實物件 object
var movie ={
    title:"刻在你心底的名子",
    maker:"氧氣電影",
    duration:114,
    actors:[
        {
            name:"陳昊森",
            age:24,
            is_male:true
        },
        {
            name:"曾敬驊",
            age:23,
            is_male:true
        }
    ]
};

document.write(movie.actors[1].is_male);

//物件 object
//key
//value

var person = {
    name : "Lyon",
    age : 23,
    is_male : "ture",
    print_name:function(){
        document.write(this.name);
    }
};

document.write(person.name);
person.print_name();


//if判斷
var rainy = true;

if(rainy){
    document.write("開車");
}
else{
    document.write("騎車");
}

document.write("<br/>");

var score = 100;
if(score == 100){
    document.write("1000");
}
else if(score >= 95){
    document.write("500");
}
else{
    document.write("no money");
}

document.write("<br/>");

//maxnum

function maxnum(a,b,c){
    if(a >= b && a >= c){
        return a;
    }
    else if(b >= a && b >= c){
        return b;
    }
    else {
        return c;
    }
}


document.write(maxnum(4,9,9));


//函式 function
function hello(name){
    document.write("你好," + name);
}
function add( a, b){
    //document.write(a + b);
    return a + b;
}
    
hello("小白");

//add( 3, 5);
document.write(add( 3, 5));  

//陣列 array
var scores = [80,60,20,30,50];
var score = ["小黑",math, 80];
scores[0] = 90;
var score1 = 80;
var score2 = 60;
var score3 = 20;
var score4 = 30;
var score5 = 50;
document.write(scores[0]);

 //計算機
var num1 = prompt("請輸入數字1");
var num2 = prompt("請輸入數字2");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
document.write(num1+num2);

var my_name = prompt("請輸入名字");
var phase = "Welcome!";
var num = 31.6;

document.write("hello!"+ my_name);
document.write("<br/>");
document.write("<h1>HIHI</h1>");
document.write("<br/>");
document.write("<h2>這裡是"+ my_name + "的部落格</h2>");
document.write("<br/>");
document.write("<h2>" + phase.toUpperCase() + "</h2>");
document.write(phase.length);
document.write("<br/>");
document.write(phase.charAt(3));
document.write("<br/>");
document.write(phase.indexOf("l"));
document.write("<br/>");
document.write(phase.substring(3,6));
document.write("<br/>"); 
document.write(6);
document.write("<br/>");
document.write(Math.max(2,6,8,55,42,77,30,11,num));
document.write("<br/>");
document.write(Math.round(num));
document.write("<br/>");
document.write(Math.pow(3,4));
document.write("<br/>");
document.write(Math.sqrt(4));
document.write("<br/>");
document.write(Math.round(Math.random()*100));

 var num = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];

for(var i=0; i<4; i++){
    for(var j=0; j<3; j++){
        document.write("i:" + i + ",j:" + j);
        document.write("<br/>")
    }
} 
*/