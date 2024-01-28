let questionHtml=document.querySelector('.question')
let answerHtml=document.querySelector('.answers')
let modal = document.querySelector('.modal')
let blockAnswer = true
let start = document.querySelector('.start')
let call = document.querySelector('.callFrend')
let callList = document.querySelector('.modal-call-list')
let blockBody = document.querySelector('.blockBody')
let change = document.querySelector('.change')
let fiftyfiftybutton = document.querySelector('.fiftyfifty')
let peopleHelpButton = document.querySelector('.peopleHelp')
let global_i = 0
let global_id
let global_q
let randomFiftyQuestion
let randomQuestion
let random
let answerArr=["a","b","c","d"]
let falseAnswer = [...answerArr]
let rightAnswerSound = document.querySelector('.rightAnswerSound')
let falseAnswerSound = document.querySelector('.falseAnswerSound')
let mute_control = true
let startSound = document.querySelector('.startSound')


let lavel=[
    {
        id:1,
        title:"500"
    }, {
        id:2,
        title:"1000"
    },
    {
        id:3,
        title:"4000"
    },
    {
        id:4,
        title:"8000"
    },
    {
        id:5,
        title:"16000"
    }, {
        id:6,
        title:"32000"
    }, {
        id:7,
        title:"64000"
    }, {
        id:8,
        title:"125000"
    }, {
        id:9,
        title:"250000"
    },{
        id:10,
        title:"500000"
    },{
        id:11,
        title:"1000000"
    },{
        id:12,
        title:"2000000"
    },{
        id:13,
        title:"3000000"
    },{
        id:14,
        title:"4000000"
    },
    {
        id:15,
        title:"5000000"
    },
]
const question = [
    {
        id: 1,
        level_id: 1,
        name: "Նշվածներից ո՞րն է Հայաստանի մայրաքաղաքը։",
        a: " A. Արարատ ",
        b: " B. Գյումրի ",
        c: " C. Գառնի ",
        d: " D. Երևան ",
        current: 'd',
    },
    {
        id: 2,
        level_id: 2,
        name: "Հետևյալ ֆիլմերից ո՞րում չի նկարահանվել Լեոնարդո Դի Կապրիոն:",
        a: " A. Տիտանիկ ",
        b: " B. Ուոլ Սթրիթի գայլը ",
        c: " C. Ֆոկուս ",
        d: " D. Բռնիր ինձ, թե կարող ես ",
        current: 'c',
    },
    {
        id: 3,
        level_id: 3,
        name: "Մարդու ուղեղը քանի՞ տոկոսով է բաղկացած ջրից:",
        a: " A. 40% ",
        b: " B. 80% ",
        c: " C. 60% ",
        d: " D. 20% ",
        current: 'b',
    },
    {
        id: 4,
        level_id: 4,
        name: "Որտե՞ղ է մեծացել հայտնի արվեստագետ Միքելանջելոն:",
        a: " A. Փարիզ ",
        b: " B. Հռոմ ",
        c: " C. Վիենա ",
        d: " D. Ֆլորենցիա ",
        current: 'd',
    },
    {
        id: 5,
        level_id: 5,
        name: "Որ երկիրն է արձակել երկրագնդի առաջին արհեստական արբանյակը։",
        a: " A. Ճապոնիա ",
        b: " B. Չինաստան ",
        c: " C. ԱՄՆ ",
        d: " D. ԽՍՀՄ ",
        current: 'd',
    },
    {
        id: 6,
        level_id: 6,
        name: "Ո՞ր քաղաքն է ամենախիտ բնակեցվածը աշխարհում:",
        a: " A. Լոնդոն ",
        b: " B. Տոկիո ",
        c: " C. Նյու Յորք ",
        d: " D. Փարիզ ",
        current: 'b',
    },
    {
        id: 7,
        level_id: 7,
        name: "Ո՞վ է Բիլ Գեյթսը։",
        a: " A. Microsoft-ի հիմնադիր ",
        b: " B. Apple-ի հիմնադիր ",
        c: " C. Google-ի հիմնադիր ",
        d: " D. Samsung-ի հիմնադիր ",
        current: 'a',
    },
    {
        id: 8,
        level_id: 8,
        name: "Եր՞բ է հիմնադրվել GOOGLE-ը։",
        a: " A. 2000 ",
        b: " B. 2004 ",
        c: " C. 1996 ",
        d: " D. 1998 ",
        current: 'c',
    },
    {
        id: 9,
        level_id: 9,
        name: "Որ շախմատի ֆիգուռը գոյություն չունի՞։",
        a: " A. Զինոր ",
        b: " B. Ձի ",
        c: " C. Թագավոր ",
        d: " D. Տանգ ",
        current: 'd',
    },
    {
        id: 10,
        level_id: 10,
        name: "Նշվածներից ո՞րը չի համարվում ծրագրավորման լեզու։",
        a: " A. JavaScript ",
        b: " B. HTML ",
        c: " C. PHP ",
        d: " D. Python ",
        current: 'b',
    },
    {
        id: 11,
        level_id: 11,
        name: "Ո՞ր երկիրն է առաջինն ընդունել Քրիստոնեությունը։",
        a: " A. Հռոմ ",
        b: " B. Ռուսաստան ",
        c: " C. Հայաստան ",
        d: " D. Իզրաել ",
        current: 'c',
    },
    {
        id: 12,
        level_id: 12,
        name: "Նշվածներից ո՞րը մոլորակ չէ։",
        a: " A. Վեներա ",
        b: " B. Մերկուրի ",
        c: " C. Մարս ",
        d: " D. Պլուտոն ",
        current: 'd',
    },
    {
        id: 13,
        level_id: 13,
        name: "Նշվածներից որն է աշխարհի ամենա բառձր կետը",
        a: " A. Արարատ",
        b: " B. Միսիսիպի",
        c: " C. Էվերեստ",
        d: " D. Ալպյան լեռներ",
        current: 'c',
    },
    {
        id: 14,
        level_id: 14,
        name: "ինչ կտպի հետևյալ կոդը? console.log(3>2>1)",
        a: " A. true",
        b: " B. 3",
        c: " C. false",
        d: " D. 1",
        current: 'c',
    },
    {
        id: 15,
        level_id: 15,
        name: "ինչ կտպի հետևյալ կոդը? console.log(typeof(false!=0)&&'Hello World'||undefined);",
        a: " A. undefined",
        b: " B. false",
        c: " C. true",
        d: " D. Hello World",
        current: 'd',
    },
    {
        id: 16,
        level_id: 1,
        name: "Հարց 1-ինչ կտպի հետևյալ կոդը? - console.log( 0 == [ ]) ",
        a: "Ա․ true",
        b: "Բ․ Error",
        c: "Գ․ false",
        d: "Դ․ undefined",
        current: 'a'
    },
    {
        id: 17,
        level_id: 2,
        name: "Հարց 2-ինչ կտպի հետևյալ կոդը?- eval('console.log('hello world')')",
        a: "Ա․ Error",
        b: "Բ․ hello world",
        c: "Գ․ console.log(hello world)",
        d: "Դ․ null",
        current: 'b'
    },
    {
        id: 18,
        level_id: 3,
        name: "const num=parseInt('1+2',10) console.log(num)",
        a: "Ա․ 1",
        b: "Բ․ hello world",
        c: "Գ․ NaN",
        d: "Դ․ 12",
        current: 'c'
    },
    {
        id: 19,
        level_id: 4,
        name: "Ով է Դանիել Համբարձումյանը ? ",
        a: "Ա․ Ա․ժ պատգամավոր",
        b: "Բ․ Հանրահայտ Պոկերիստ։)",
        c: "Գ․ Գրող-հրապարակախոս",
        d: "Դ․ Ծրագրավորող",
        current: 'd'
    },
    {
        id: 20,
        level_id: 5,
        name: "Հարց 5-ինչ կտպի հետևյալ կոդը?- console.log(typeof NaN)",
        a: "Ա․ number",
        b: "Բ․ undefined",
        c: "Գ․ object",
        d: "Դ․ string",
        current: 'a'
    },
    {
        id: 21,
        level_id: 2,
        name: "Հարց 6-ինչ կտպի հետևյալ կոդը?- const arr=[1,2,3,4,5] const otherArr=[1,2,3,4,5] console.log(arr == otherArr)",
        a: "Ա․ true",
        b: "Բ․ false",
        c: "Գ․ Error",
        d: "Դ․ arr == otherArr",
        current: 'b'
    },
    {
        id: 22,
        level_id: 2,
        name: "Հարց 7-ինչ կտպի հետևյալ կոդը?- let x=10    x==10 && console.log('hello world')",
        a: "Ա․ hello world",
        b: "Բ․ Error",
        c: "Գ․ undefined",
        d: "Դ․ false",
        current: 'a'
    },
    {
        id: 23,
        level_id: 1,
        name: "Հարց 8-ինչ կտպի հետևյալ կոդը?- console.log([] + [])",
        a: "Ա․ [Object,Object]",
        b: "Բ․ Error",
        c: "Գ․ '' ",
        d: "Դ․ ,[Object,Object][Object,Object]",
        current: 'c'
    },
    {
        id: 24,
        level_id: 1,
        name: "Հարց 9-ին`չ կտպի հետևյալ կոդը? - console.log({} == true) console.log(!{} == true) console.log(!!{} == true)",
        a: "Ա․ false,false,false",
        b: "Բ․ false,true,true",
        c: "Գ․ true,false,true",
        d: "Դ․ false,false,true",
        current: 'd'
    },
    {
        id: 25,
        level_id: 10,
        name: "Հարց 10-ինչ կտպի հետևյալ կոդը? - console.log( 3 > 2 > 3)",
        a: "Ա․ true",
        b: "Բ․ false",
        c: "Գ․ ReferenceError",
        d: "Դ․ 3 > 2 > 3",
        current: 'b'
    },
    {
        id: 26,
        level_id: 1,
        name: "Հարց 11-Քանի տեսակ Primitive թայփ կա JavaScript-ում",
        a: "Ա․ 7",
        b: "Բ․ 8",
        c: "Գ․ 9",
        d: "Դ․ 6",
        current: 'd'
    },
    {
        id: 27,
        level_id: 12,
        name: "Հարց 12-ինչ կտպի հետևյալ կոդը? - class Human {   }   console.log(typeof Human)",
        a: "Ա․ object",
        b: "Բ․ class",
        c: "Գ․ function",
        d: "Դ․ constructor",
        current: 'c'
    },
    {
        id: 28,
        level_id: 1,
        name: "Հարց 3-ինչ կտպի հետևյալ կոդը? - console.log(name)    var name='Barev Vahag'",
        a: "Ա․ ReferenceError",
        b: "Բ․ undefined",
        c: "Գ․ console.log(name)",
        d: "Դ․ Barev Vahag",
        current: 'd'
    },
    {
        id: 29,
        level_id: 14,
        name: "Հարց 14-Ինչ է Promise-ը",
        a: "Ա․ Խոստում է",
        b: "Բ․ տվյալների տարրա է",
        c: "Գ․ զանգվաց է",
        d: "Դ․ շղթայական աշխատող կոդ",
        current: 'a'
    },
    {
        id: 30,
        level_id: 15,
        name: "Հարց 15-Ինչպես օգնել հարևան տատիկին,երբ նա խնդրում է սարքել իր skype-ն ?",
        a: "Հարց 15-Ինչպես օգնել հարևան տատիկին,երբ նա խնդրում է սարքել իր",
        b: "Բ․ ցրել տատիկին",
        c: "Գ․ միացնել տատիկի տան wi-fi_ն",
        d: "Դ․ մեռած ձևանալ ։)",
        current: 'c'
    },
]
const qestionFifity = [
    {
        id: 1,
        level_id: 1,
        name: "Նշվածներից ո՞րն է Հայաստանի մայրաքաղաքը։",
        a: " A. Արարատ ",
        b: "",
        c: "",
        d: " D. Երևան ",
        current: 'd',
    },
    {
        id: 2,
        level_id: 2,
        name: "Հետևյալ ֆիլմերից ո՞րում չի նկարահանվել Լեոնարդո Դի Կապրիոն:",
        a: "",
        b: " B. Ուոլ Սթրիթի գայլը ",
        c: " C. Ֆոկուս ",
        d: "",
        current: 'c',
    },
    {
        id: 3,
        level_id: 3,
        name: "Մարդու ուղեղը քանի՞ տոկոսով է բաղկացած ջրից:",
        a: " A. 40% ",
        b: " B. 80% ",
        c: "",
        d: "",
        current: 'b',
    },
    {
        id: 4,
        level_id: 4,
        name: "Որտե՞ղ է մեծացել հայտնի արվեստագետ Միքելանջելոն:",
        a: "",
        b: " B. Հռոմ ",
        c: "",
        d: " D. Ֆլորենցիա ",
        current: 'd',
    },
    {
        id: 5,
        level_id: 5,
        name: "Որ երկիրն է արձակել երկրագնդի առաջին արհեստական արբանյակը։",
        a: "",
        b: "",
        c: " C. ԱՄՆ ",
        d: " D. ԽՍՀՄ ",
        current: 'd',
    },
    {
        id: 6,
        level_id: 6,
        name: "Ո՞ր քաղաքն է ամենախիտ բնակեցվածը աշխարհում:",
        a: "",
        b: " B. Տոկիո ",
        c: " C. Նյու Յորք ",
        d: "",
        current: 'b',
    },
    {
        id: 7,
        level_id: 7,
        name: "Ո՞վ է Բիլ Գեյթսը։",
        a: " A. Microsoft-ի հիմնադիր ",
        b: "",
        c: " C. Google-ի հիմնադիր ",
        d: "",
        current: 'a',
    },
    {
        id: 8,
        level_id: 8,
        name: "Եր՞բ է հիմնադրվել GOOGLE-ը։",
        a: "",
        b: "",
        c: " C. 1996 ",
        d: " D. 1998 ",
        current: 'c',
    },
    {
        id: 9,
        level_id: 9,
        name: "Որ շախմատի ֆիգուռը գոյություն չունի՞։",
        a: " A. Զինոր ",
        b: "",
        c: "",
        d: " D. Տանգ ",
        current: 'd',
    },
    {
        id: 10,
        level_id: 10,
        name: "Նշվածներից ո՞րը չի համարվում ծրագրավորման լեզու։",
        a: "",
        b: " B. HTML ",
        c: " C. PHP ",
        d: "",
        current: 'b',
    },
    {
        id: 11,
        level_id: 11,
        name: "Ո՞ր երկիրն է առաջինն ընդունել Քրիստոնեությունը։",
        a: " A. Հռոմ ",
        b: "",
        c: " C. Հայաստան ",
        d: "",
        current: 'c',
    },
    {
        id: 12,
        level_id: 12,
        name: "Նշվածներից ո՞րը մոլորակ չէ։",
        a: " A. Վեներա ",
        b: "",
        c: "",
        d: " D. Պլուտոն ",
        current: 'd',
    },
    {
        id: 13,
        level_id: 13,
        name: "Նշվածներից որն է աշխարհի ամենա բառձր կետը",
        a: "",
        b: " B. Միսիսիպի",
        c: " C. Էվերեստ",
        d: "",
        current: 'c',
    },
    {
        id: 14,
        level_id: 14,
        name: "",
        a: "",
        b: "",
        c: " C. ",
        d: " D. ",
        current: 'c',
    },
    {
        id: 15,
        level_id: 15,
        name: "",
        a: "",
        b: "",
        c: " C. ",
        d: " D. ",
        current: 'd',
    },
    {
        id: 16,
        level_id: 1,
        name: "Հարց 1-ինչ կտպի հետևյալ կոդը? - console.log( 0 == [ ]) ",
        a: "Ա․ true",
        b: "",
        c: "Գ․ false",
        d: "",
        current: 'a'
    },
    {
        id: 17,
        level_id: 2,
        name: "Հարց 2-ինչ կտպի հետևյալ կոդը?- eval('console.log('hello world')')",
        a: "Ա․ Error",
        b: "Բ․ hello world",
        c: "",
        d: "",
        current: 'b'
    },
    {
        id: 18,
        level_id: 3,
        name: "const num=parseInt('1+2',10) console.log(num)",
        a: "",
        b: "",
        c: "Գ․ NaN",
        d: "Դ․ 12",
        current: 'c'
    },
    {
        id: 19,
        level_id: 4,
        name: "Ով է Դանիել Համբարձումյանը ? ",
        a: "Ա․ Ա․ժ պատգամավոր",
        b: "",
        c: "",
        d: "Դ․ Ծրագրավորող",
        current: 'd'
    },
    {
        id: 20,
        level_id: 5,
        name: "Հարց 5-ինչ կտպի հետևյալ կոդը?- console.log(typeof NaN)",
        a: "Ա․ number",
        b: "",
        c: "",
        d: "Դ․ string",
        current: 'a'
    },
    {
        id: 21,
        level_id: 2,
        name: "Հարց 6-ինչ կտպի հետևյալ կոդը?- const arr=[1,2,3,4,5] const otherArr=[1,2,3,4,5] console.log(arr == otherArr)",
        a: "",
        b: "Բ․ false",
        c: "",
        d: "Դ․ arr == otherArr",
        current: 'b'
    },
    {
        id: 22,
        level_id: 2,
        name: "Հարց 7-ինչ կտպի հետևյալ կոդը?- let x=10    x==10 && console.log('hello world')",
        a: "Ա․ hello world",
        b: "Բ․ Error",
        c: "",
        d: "",
        current: 'a'
    },
    {
        id: 23,
        level_id: 1,
        name: "Հարց 8-ինչ կտպի հետևյալ կոդը?- console.log([] + [])",
        a: "",
        b: "",
        c: "Գ․ '' ",
        d: "Դ․ ,[Object,Object][Object,Object]",
        current: 'c'
    },
    {
        id: 24,
        level_id: 1,
        name: "Հարց 9-ին`չ կտպի հետևյալ կոդը? - console.log({} == true) console.log(!{} == true) console.log(!!{} == true)",
        a: "",
        b: "Բ․ false,true,true",
        c: "",
        d: "Դ․ false,false,true",
        current: 'd'
    },
    {
        id: 25,
        level_id: 10,
        name: "Հարց 10-ինչ կտպի հետևյալ կոդը? - console.log( 3 > 2 > 3)",
        a: "Ա․ true",
        b: "Բ․ false",
        c: "",
        d: "",
        current: 'b'
    },
    {
        id: 26,
        level_id: 1,
        name: "Հարց 11-Քանի տեսակ Primitive թայփ կա JavaScript-ում",
        a: "Ա․ 7",
        b: "",
        c: "",
        d: "Դ․ 6",
        current: 'd'
    },
    {
        id: 27,
        level_id: 12,
        name: "Հարց 12-ինչ կտպի հետևյալ կոդը? - class Human {   }   console.log(typeof Human)",
        a: "",
        b: "Բ․ class",
        c: "Գ․ function",
        d: "",
        current: 'c'
    },
    {
        id: 28,
        level_id: 1,
        name: "Հարց 3-ինչ կտպի հետևյալ կոդը? - console.log(name)    var name='Barev Vahag'",
        a: "",
        b: "",
        c: "Գ․ console.log(name)",
        d: "Դ․ Barev Vahag",
        current: 'd'
    },
    {
        id: 29,
        level_id: 14,
        name: "Հարց 14-Ինչ է Promise-ը",
        a: "Ա․ Խոստում է",
        b: "",
        c: "",
        d: "Դ․ շղթայական աշխատող կոդ",
        current: 'a'
    },
    {
        id: 30,
        level_id: 15,
        name: "Հարց 15-Ինչպես օգնել հարևան տատիկին,երբ նա խնդրում է սարքել իր skype-ն ?",
        a: "",
        b: "Բ․ ցրել տատիկին",
        c: "Գ․ միացնել տատիկի տան wi-fi_ն",
        d: "",
        current: 'c'
    },
]


function startGame(){
    blockBody.style.opacity='0'
    modal.style.marginTop = '-100px'
    blockBody.style.zIndex = '-10'
    answerHtml.innerHTML=''
    global_id=lavel[global_i]
    randomQuestion = question.filter(res=>res.level_id===global_id.id)
    random = Math.floor(Math.random()*randomQuestion.length)
    global_q = randomQuestion[random]
    blockAnswer = null
    
    start.style.display = 'none'
    answerArr=["a","b","c","d"]
    if(global_i == 0){
        fiftyfiftybutton.style.display = 'block'
        call.style.display = 'block'
        change.style.display = 'block'
        peopleHelpButton.style.display = 'block'
        if(!mute_control){
            startSound.play()
            setTimeout(function(){
                document.querySelector('.background-Sound').play()

            },4000)
            

        }
        
    }else{
        if(!mute_control){
            document.querySelector('.background-Sound').play()

        }

    }
    console.log(global_i);
  
    
    answerPrinnt()
    
   
}

function fiftyfifty(){
    console.log(blockAnswer);
    if(!blockAnswer){
        document.querySelector('.fiftyfifty').style.display = 'none'
    randomFiftyQuestion = qestionFifity.filter(res=>res.level_id===global_id.id)
    console.log(randomFiftyQuestion);
    console.log(random);
    console.log(randomFiftyQuestion[random]);
    global_q = randomFiftyQuestion[random]
    console.log(global_q);
    falseAnswer = []
    if(global_q.a){
        falseAnswer.push('a')
    }
    if(global_q.b){
        falseAnswer.push('b')
    }
    if(global_q.c){
        falseAnswer.push('c')
    }
    if(global_q.d){
        falseAnswer.push('d')
    }
    answerPrinnt()
    }
    console.log(falseAnswer);
}

let callAnswers

function callFrend(){
    if(!blockAnswer){
        document.querySelector('.blockBodyf').style.cssText=`
        opacity: 1;
        z-index: 100;
        `
        callList.style.cssText=`
        margin-top: 50px;
        `
        
        console.log(falseAnswer);
        falseAnswer = falseAnswer.filter(value=>{
            return value!==global_q.current
        })   
        
        callAnswers = [`True question is ${global_q.current}`, `I think true question is ${falseAnswer[Math.floor(Math.random()*falseAnswer.length)]}`,`I'm sure that ${falseAnswer[Math.floor(Math.random()*falseAnswer.length)]} is false`]
    }
    
}

function callHelp(e){
    console.log(callAnswers);
    callList.innerHTML = `<img style='margin: 0 auto;' src="${e.currentTarget.src}" alt="">
    <span>${callAnswers[Math.floor(Math.random()*callAnswers.length)]}</span>
    <span class="close">x</span>
    `
    document.querySelector('.close').addEventListener('click',()=>{
        callList.innerHTML =`
        <div class="friend">
                <img onclick="callHelp(event)" src="./img/230724-elon-musk-ac-1041p-bc05fb.webp" alt="">
                <span>Elon Musk</span>
            </div>
            <div class="friend">
                <img onclick="callHelp(event)" src="./img/mark-zuckerberg-crazy-mcdonalds-order-080223-tout-7e8b1b47927c411783cffb62cd034022.jpg" alt="">
                <span>Mark Zuckerberg</span>
            </div>
            <div class="friend">
                <img onclick="callHelp(event)" src="./img/skynews-jeff-bezos-amazon_5437859.jpg" alt="">
                <span>Jeff Bezos</span>
            </div>
        `
        callList.style.cssText=`
        margin-top: -50px;
        `
        document.querySelector('.blockBodyf').style.cssText=`
        opacity: 0;
        z-index: -100;
        `
        call.style.display = 'none'
    })
    
}

function peopleHelp(){
    if(!blockAnswer){
        peopleHelpButton.style.display = 'none'
        blockBody.style.cssText = `
        opacity: 1;
        z-index: 100;
        `
        modal.style.marginTop = '20px'

        modal.innerHTML = `<div  class="peopleAnswers">
       
        </div>
        <span  class='modal-close'>x</span>`
        
        console.log(falseAnswer);
        falseAnswer.forEach(value=>{
            document.querySelector('.peopleAnswers').innerHTML+=`<div data-id='${value}' class="answer-a allAnswers">
            <span  class="percent">0</span>
            <div class="heigth"></div>
            <span>${value}</span>
        </div>`
        })
    
    
        
    document.querySelector('.modal-close').onclick=function(){
        blockBody.style.opacity='0'
        modal.style.marginTop = '-20px'
        blockBody.style.zIndex = '-10'
    }
    
    for(let i = 0; i<100; i++){
        let randomPercent = Math.floor(Math.random()*falseAnswer.length)
            document.querySelectorAll('.allAnswers>.percent')[randomPercent].innerHTML=+document.querySelectorAll('.allAnswers>.percent')[randomPercent].innerHTML+1
    }
    document.querySelectorAll('.allAnswers>.percent').forEach(value=>{
        value.innerHTML+='%'
    })
    document.querySelectorAll('.heigth').forEach((value, id)=>{
        value.style.height = `${document.querySelectorAll('.allAnswers>.percent')[id].innerHTML}`})
    }
}

function changeQuestion(){
    if(!blockAnswer){
        let pervRandom = global_q
        for(let i = 0; i<1; ){
            random = Math.floor(Math.random()*randomQuestion.length)
            global_q = randomQuestion[random]
            if(global_q.id != pervRandom.id){
                i++
            }
        }
        change.style.display = 'none'
        answerPrinnt()
    }
}


function answerPrinnt(){
    answerArr=["a","b","c","d"]
    questionHtml.innerHTML=global_q.name
    answerHtml.innerHTML=''
    answerArr.forEach(res=>{
        answerHtml.innerHTML+=`
            <div data-id="${res}" class="answer"> ${global_q[res]}</div>
        `
    })
    let anserQuestionDiv=document.querySelectorAll('.answer')
    anserQuestionDiv.forEach(val=>{
        val.addEventListener('click',function (){
            if(!blockAnswer){
                if(this.dataset.id===global_q.current){
                    this.style.backgroundColor='green'
                    if(!mute_control){
                        document.querySelector('.background-Sound').pause()
                        rightAnswerSound.play()

                    }
                    if(global_id.title == 5000000){
                        myFunction()
                        global_i = 0
                        if(!mute_control){
                            document.querySelector('.winGame').play()
                
                        }
                        blockBody.style.opacity='1'
                        modal.style.marginTop = '20px'
                        blockBody.style.zIndex = '10'
                        modal.innerHTML=`Shnorhavorem em <br> duq haxteciq xaxy ev vastakeciq <br>
                        5000000 dram
                        cankanum eq xaxal noric <br>
                        <button onclick='startGame()'>Ayo</button>
                        <button onclick='cancel()'>voch</button>
                        `
                        answerHtml.innerHTML=''
                
                    for(let i = 0; i<4; i++){
                        answerHtml.innerHTML+=`
                        <div class="answer"></div>
                    `
                    }
                    questionHtml.innerHTML=''
                        return false
                    }
                    document.querySelector('.check').innerHTML+=`<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
                    setTimeout(function(){
                        global_i++
                        startGame()
                    },4000)
                    blockAnswer = true
                    }else{
                        myFunction()
                        global_i = 0
                            if(!mute_control){
                                document.querySelector('.background-Sound').pause()
                                falseAnswerSound.play()
                            }
                        this.style.backgroundColor='red'
                        
                        blockAnswer = true
                        anserQuestionDiv.forEach(value=>{
                            if(value.dataset.id===global_q.current){
                                value.style.backgroundColor='green'
                            }
                        })
                        
                            if(global_id.title>8000 && global_id.title<=250000){
                                blockBody.style.opacity='1'
                                modal.style.marginTop = '20px'
                                blockBody.style.zIndex = '10'
                                modal.innerHTML=`Xaxy avartvec <br> duq shahel eq 8.000 dram
                                cankanum eq xaxal noric <br>
                                <button onclick='startGame()'>Ayo</button>
                                <button onclick='cancel()'>voch</button>
                                `
                            }else if(global_id.title>250000){
                                blockBody.style.opacity='1'
                                modal.style.marginTop = '20px'
                                blockBody.style.zIndex = '10'
                                modal.innerHTML=`Xaxy avartvec <br> duq shahel eq 250.000 dram 
                                cankanum eq xaxal noric <br>
                                <button onclick='startGame()'>Ayo</button>
                                <button onclick='cancel()'>voch</button>
                                `
                            }else{
                                blockBody.style.opacity='1'
                                modal.style.marginTop = '20px'
                                blockBody.style.zIndex = '10'
                                modal.innerHTML=`Xaxy avartvec <br> duq shahel eq 0 dram( <br>
                                    cankanum eq xaxal noric <br>
                                    <button onclick='startGame()'>Ayo</button>
                                    <button onclick='cancel()'>voch</button>
    
                                    `
                            }

                            return
                            
                    }
            }
                
            
        })
        
    })
}

function cancel(){
    blockBody.style.opacity='0'
    modal.style.marginTop = '-20px'
    blockBody.style.zIndex = '-10'
    start.style.display='block'
    answerHtml.innerHTML=''

    for(let i = 0; i<4; i++){
        answerHtml.innerHTML+=`
        <div class="answer"></div>
    `
    }
    questionHtml.innerHTML=''
    call.style.display = 'block'


}


function mute(){
    if(mute_control){
        mute_control = null
        if(!blockAnswer){
                    document.querySelector('.background-Sound').play()
        }


        document.querySelector('.soundButton').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>`
    }else{
        mute_control = true
        
        document.querySelector('.background-Sound').pause()

        document.querySelector('.soundButton').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"   height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>`
    }
}


function myFunction(){
    document.querySelector('.id').innerHTML = ''
    document.querySelector('.moneys').innerHTML = ''
    document.querySelector('.check').innerHTML = ''

    for(let i = 15; i>0; i--){
        if(i == 4 || i == 9){
            document.querySelector('.id').innerHTML +=  `<span style='color: black;'>${i}</span>`
        }else{
            document.querySelector('.id').innerHTML +=  `<span>${i}</span>`
        }
    }
   
    for(let i = 14; i>=0; i--){
        if(i == 3 || i == 8){
            document.querySelector('.moneys').innerHTML+=`<span style='color: black;'>${lavel[i].title}</span>`
            i--
        }
        document.querySelector('.moneys').innerHTML+=`<span>${lavel[i].title}</span>`
        
    }
}


