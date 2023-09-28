
var disText = document.getElementById("disText");
var image = document.getElementById("image");
var text1 = document.getElementById("text1");
var str = document.getElementById("start");
var rst = document.getElementById("restart");
var nxt = document.getElementById("next");
var prv = document.getElementById("prev");
var audio = document.getElementById("audio");
var source = document.getElementById("src1");
var audioR = document.getElementById("audioR");
var sourceR = document.getElementById("src1R");
var audioS = document.getElementById("audioS");
var sourceS = document.getElementById("src1S");

var i = 0;
var j = 0;
var k = 0;

var arr = [
    "url(/images/A.jpg)","url(/images/B.jpg)","url(/images/C.png)","url(/images/D.jpg)","url(/images/E.jpg)","url(/images/F.jpg)","url(/images/G.jpeg)","url(/images/H.jpg)","url(/images/I.jpeg)","url(/images/J.jpeg)","url(/images/K.jpg)","url(/images/L.jpg)","url(/images/M.jpeg)","url(/images/N.jpg)","url(/images/O.jpg)","url(/images/P.jpeg)","url(/images/Q.jpeg)","url(/images/R.jpeg)","url(/images/S.jpeg)","url(/images/T.jpeg)","url(/images/U.jpeg)","url(/images/V.jpeg)","url(/images/W.jpg)","url(/images/X.jpeg)","url(/images/Y.jpeg)","url(/images/Z.jpeg)"
]

var sound = [
    "/My rec/A rec.aac","/My rec/B rec.aac","/My rec/C rec.aac","/My rec/D rec.aac","/My rec/E rec.aac","/My rec/F rec.aac","/My rec/G rec.aac","/My rec/H rec.aac","/My rec/I rec.aac","/My rec/J rec.aac","/My rec/K rec.aac","/My rec/L rec.aac","/My rec/M rec.aac","/My rec/N rec.aac","/My rec/O rec.aac","/My rec/P rec.aac","/My rec/Q rec.aac","/My rec/R rec.aac","/My rec/S rec.aac","/My rec/T rec.aac","/My rec/U rec.aac","/My rec/V rec.aac","/My rec/W rec.aac","/My rec/X rec.aac","/My rec/Y rec.aac","/My rec/Z rec.aac"
]

var arrText = [
    "A for Apple","B for Ball","C for Cat","D for Dog","E for Egg","F for Fish","G for Goat","H for House","I for Ice Cream","J for Jug","K for Kangaroo","L for Lion","M for Mouse","N for Nest","O for Orange","P for Pig","Q for Queen","R for Rabbit","S for Sun","T for Tiger","U for Unbrella","V for Van","W for Window","X for Xylophone","Y for Yacht","Z for Zip"
]

function menu(){
    document.getElementById("menuX").style.display="block";
    document.getElementById("menu").style.display="none";
    document.getElementById("navItem").style.display="block";
}

function menuX(){
    document.getElementById("menu").style.display="block";
    document.getElementById("menuX").style.display="none";
    document.getElementById("navItem").style.display="none";
}

start=()=>{
    sourceR.src ="/My rec/repeat rec.aac";   
    audioR.load();
    audioR.play;
    disText.style.display="none";
    str.style.display="none";
    nxt.style.display="block";
    prv.style.display="block";
}

restart=()=>{   
    sourceR.src ="/My rec/restart rec.aac";   
    audioR.load();
    audioR.play;
    
    setTimeout(rel, 2000)
        function rel(){
            location.reload()
    }
}

next=()=>{
    disText.style.display="none";
    if(i >= 25){
        nxt.style.display="none";
        rst.style.display="block";
        image.style.backgroundImage = arr[25];
        text1.innerText = arrText[25];
    }else{
        audio.load();
        audio.play();
        source.src = sound[k++];
        text1.style.display="block";
        prv.style.display="block";
        rst.style.display="none";
        nxt.style.display="block";
        image.style.backgroundImage = arr[i++];
        text1.innerText = arrText[j++];
    }
}

prev=()=>{
    if(j < 1){
        prv.style.display="none";
        disText.style.display="Block";
        image.style.backgroundImage = "url(/images/back.jpg)";
        text1.style.display="none";
    }else{   
        audio.load();
        audio.play();
        source.src = sound[k--];
        image.style.backgroundImage = arr[i--
        ];
        text1.innerText = arrText[j--];
    }
}