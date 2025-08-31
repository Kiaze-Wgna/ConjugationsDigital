const vowels=["a","e","i","o","u","é"]
const subjectLis=["Je","Tu","Il/Elle/On","Nous","Vous","Ils/Elles"]
const impsubjectLis=["Tu","Nous","Vous","Tu","Nous","Vous"]
const group1=["accepter","entrer","préparer","acheter","envoyer","présenter","aider","espérer","prier","aimer","essayer","prononcer","ajouter","exister","quitter","appeler","expliquer","raconter","apporter","exprimer","rappeler","approcher","fermer","refuser","appuyer","former","regarder","arrêter","frapper","rencontrer","arriver","gagner","rentrer","assurer","garder","répéter","avancer","glisser","ressembler","briller","jeter","rester","brûler","jouer","retourner","cacher","juger","retrouver","causer","lever","rêver","cesser","manger","rouler","changer","manquer","sauver","chanter","marcher","sembler","charger","monter","tirer"]
const group2=["agir","agrandir","aplatir","appauvrir","applaudir","approfondir","arrondir","assortir","atterrir","avertir","bannir","bâtir","bénir","choisir","convertir","définir","démolir","désobéir","durcir","éclaircir","élargir","embellir","enrichir","envahir","épaissir","établir","s’évanouir","finir","fleurir","fournir","garantir","gémir","grandir","grossir","guérir","investir","jaillir","jaunir","maigrir","mincir","moisir","mûrir","noircir","nourrir","obéir","pourrir","punir","raccourcir","rafraîchir","rajeunir","ralentir","ramollir","réagir","réfléchir","refroidir","réjouir","remplir","réunir","réussir","rôtir","rougir","salir","subir","surgir","trahir","unir","vieillir","vomir"]
const group3=["attendre","confondre","correspondre","défendre","dépendre","descendre","entendre","étendre","fondre","mordre","pendre","perdre","prétendre","rendre","répandre","répondre","suspendre","tordre","vendre","dormir","mentir","partir","sentir","servir","sortir","couvrir","cueillir","offrir","ouvrir","souffrir","abstenir","advenir","appartenir","contenir","convenir","détenir","devenir","entretenir","intervenir","maintenir","obtenir","parvenir","prévenir","provenir","retenir","revenir","soutenir","souvenir","tenir","venir","corrompre","interrompre","rompre","conduire","confire","construire","contredire","cuire","déduire","détruire","dire","éconduire","élire","enduire","frire","induire","instruire","interdire","introduire","lire","luire","médire","nuire","prédire","produire","reconduire","reconstruire","redire","réduire","reluire","reproduire","séduire","suffire","traduire","circonscrire","décrire","écrire","inscrire","prescrire","proscrire","récrire","souscrire","transcrire","adjoindre","astreindre","atteindre","ceindre","contraindre","craindre","dépeindre","déteindre","disjoindre","empreindre","enfreindre","enjoindre","épreindre","éteindre","étreindre","feindre","geindre","joindre","oindre","peindre","plaindre","rejoindre","repeindre","restreindre","reteindre","teindre","abattre","admettre","battre","combattre","commettre","compromettre","débattre","mettre","permettre","promettre","soumettre","transmettre","apprendre","comprendre","entreprendre","prendre","reprendre","surprendre","apparaître","comparaître","connaître","disparaître","méconnaître","paraître","reconnaître","reparaître","transparaître"]
const group3dre=["attendre","confondre","correspondre","défendre","dépendre","descendre","entendre","étendre","fondre","mordre","pendre","perdre","prétendre","rendre","répandre","répondre","suspendre","tordre","vendre"]
const group3mir=["dormir","mentir","partir","sentir","servir","sortir"]
const group3vrir=["couvrir","cueillir","offrir","ouvrir","souffrir"]
const group3enir=["abstenir","advenir","appartenir","contenir","convenir","détenir","devenir","entretenir","intervenir","maintenir","obtenir","parvenir","prévenir","provenir","retenir","revenir","soutenir","souvenir","tenir","venir"]
const group3rompre=["corrompre","interrompre","rompre"]
const group3uire=["conduire","confire","construire","contredire","cuire","déduire","détruire","dire","éconduire","élire","enduire","frire","induire","instruire","interdire","introduire","lire","luire","médire","nuire","prédire","produire","reconduire","reconstruire","redire","réduire","reluire","reproduire","séduire","suffire","traduire"]
const group3crire=["circonscrire","décrire","écrire","inscrire","prescrire","proscrire","récrire","souscrire","transcrire"]
const group3aindre=["adjoindre","astreindre","atteindre","ceindre","contraindre","craindre","dépeindre","déteindre","disjoindre","empreindre","enfreindre","enjoindre","épreindre","éteindre","étreindre","feindre","geindre","joindre","oindre","peindre","plaindre","rejoindre","repeindre","restreindre","reteindre","teindre"]
const group3ttre=["abattre","admettre","battre","combattre","commettre","compromettre","débattre","mettre","permettre","promettre","soumettre","transmettre"]
const group3prendre=["apprendre","comprendre","entreprendre","prendre","reprendre","surprendre"]
const group3aitre=["apparaître","comparaître","connaître","disparaître","méconnaître","paraître","reconnaître","reparaître","transparaître"]
const etreverbs = ["aller", "arriver", "descendre", "redescendre", "entrer", "rentrer", "monter", "remonter", "mourir", "naître", "renaître", "partir", "repartir", "passer", "rester", "retourner", "sortir", "ressortir", "tomber", "retomber", "venir", "devenir", "parvenir", "revenir"]
const passeverbs=["prendre", "apprendre", "comprendre", "construire", "décevoir", "devoir", "pouvoir", "recevoir", "voir", "savoir", "dire", "écrire", "lire", "tenir", "venir", "couvrir", "découvrir", "ouvrir", "atteindre", "peindre", "offrir", "souffrir", "instruire", "produire", "boire", "croire", "connaître", "paraître", "naître", "avoir", "être", "faire", "courir", "vouloir", "mettre", "craindre", "joindre", "suivre", "vivre", "mourir", "acquérir"]

const menu =document.querySelector("#mobile-menu")
const menuLinks =document.querySelector(".navmenu")
menu.addEventListener("click",function (){
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

function showcollapseLis(object,object_container){
    if ((object.style.display==="none")||(object.style.display==="")){
        object.style.display="flex"
        object_container.style.flexDirection="row"
    } else {
        object.style.display="none"
        object_container.style.flexDirection="column"
    }
}

const indicatifContainer=document.getElementById("indicatifContainer");
const indicatifButton=document.getElementById("indicatifButton");
const indicatif=document.getElementById("indicatif");
indicatifButton.addEventListener("click",()=>{showcollapseLis(indicatif,indicatifContainer)});
const subjonctifContainer=document.getElementById("subjonctifContainer");
const subjonctifButton=document.getElementById("subjonctifButton");
const subjonctif=document.getElementById("subjonctif");
subjonctifButton.addEventListener("click",()=>{showcollapseLis(subjonctif,subjonctifContainer)});
const conditionnelContainer=document.getElementById("conditionnelContainer");
const conditionnelButton=document.getElementById("conditionnelButton");
const conditionnel=document.getElementById("conditionnel");
conditionnelButton.addEventListener("click",()=>{showcollapseLis(conditionnel,conditionnelContainer)});
const imperatifContainer=document.getElementById("imperatifContainer");
const imperatifButton=document.getElementById("imperatifButton");
const imperatif=document.getElementById("imperatif");
imperatifButton.addEventListener("click",()=>{showcollapseLis(imperatif,imperatifContainer)});
const participeContainer=document.getElementById("participeContainer");
const participeButton=document.getElementById("participeButton");
const participe=document.getElementById("participe");
participeButton.addEventListener("click",()=>{showcollapseLis(participe,participeContainer)});

function store_data(index,value){
    localStorage.setItem(index, JSON.stringify(value))
}
function retrieve_data(index,type="[]"){
    return JSON.parse(localStorage.getItem(index)||type)
}

//Actual coding part
const unavailableTenseLis=["Plus-que-parfait de l'indicatif","Passé antérieur de l'indicatif","Imparfait de l'indicatif","Passé simple de l'indicatif","Passé composé de l'indicatif","Futur proche de l'indicatif","Futur antérieur de l'indicatif","Futur simple de l'indicatif","Plus-que-parfait du subjonctif","Imparfait du subjonctif","Passé du subjonctif","Présent du subjonctif","Passé du conditionnel","Présent du conditionnel","Passé de l'impératif","Participe passé","Participe présent"];

var tenseLis=new Array();
var selectedTenseLis=new Array();
var verbselectLis=new Array();
var verbLis=new Array();
var negation=false;

window.addEventListener("load",function(){
    tenseLis = retrieve_data("settings");
    selectedTenseLis = retrieve_data("selectedSettings");
    if (tenseLis==null){
        tenseLis=new Array();
    }
    if (selectedTenseLis==null){
        selectedTenseLis=new Array();
    } else {
        selectedTenseLis.forEach(id=>{
            if (id=="indicatifButton"){
                showcollapseLis(indicatif,indicatifContainer)
            } else if(id=="subjonctifButton"){
                showcollapseLis(subjonctif,subjonctifContainer)
            } else if(id=="conditionnelButton"){
                showcollapseLis(conditionnel,conditionnelContainer)
            } else if(id=="imperatifButton"){
                showcollapseLis(imperatif,imperatifContainer)
            } else if(id=="participeButton"){
                showcollapseLis(participe,participeContainer)
            }
            document.getElementById(id).classList.toggle('active');
        })
    }
})

document.querySelectorAll('.select-button').forEach(button => {
    button.addEventListener('click', (event) => {
        if (selectedTenseLis.includes(event.currentTarget.id)){
            selectedTenseLis.splice(selectedTenseLis.indexOf(event.currentTarget.id),1);
        } else{
            selectedTenseLis.push(event.currentTarget.id);
        }
        event.currentTarget.classList.toggle('active');
        if ((event.currentTarget.id==="g1")||(event.currentTarget.id==="g2")||(event.currentTarget.id==="g3")){
            if (verbselectLis.includes(event.currentTarget.id)){
                verbselectLis.splice(verbselectLis.indexOf(event.currentTarget.id),1);
            } else{
                verbselectLis.push(event.currentTarget.id);
            }
        } else if ((event.currentTarget.id==="negation")){
            if (negation){
                negation=false
                event.currentTarget.innerHTML="<span>off</span>"
            } else {
                negation=true
                event.currentTarget.innerHTML="<span>on</span>"
            }
        }else if ((event.currentTarget.id!="indicatifButton")&&(event.currentTarget.id!="subjonctifButton")&&(event.currentTarget.id!="conditionnelButton")&&(event.currentTarget.id!="imperatifButton")&&(event.currentTarget.id!="participeButton")){
            if (tenseLis.includes(event.currentTarget.id)){
                tenseLis.splice(tenseLis.indexOf(event.currentTarget.id),1);
            } else{
                if (!(unavailableTenseLis.includes(event.currentTarget.id))){
                    tenseLis.push(event.currentTarget.id);
                }
            };
        }
    });
});

//Actual Generation
function chooseList(lis){
    return lis[Math.floor(Math.random()*lis.length)]
}
var tense="";
var subject="";
var verb="";
var neg="";
var screwed=false;
function generate_question(){
    if (tenseLis.length===0){
        screwed=true
        return "Your currently selected tense(s) is currently unavailable."
    }
    if (verbLis.length===0){
        screwed=true
        return "Please choose a verb group."
    }
    tense=chooseList(tenseLis);
    if ((tense==="Présent de l'impératif")&&(tense==="Passé de l'impératif")){
        subject=chooseList(impsubjectLis)
    } else{
        subject=chooseList(subjectLis)
        if (subject==="Il/Elle/On"){
            subject=chooseList(["Il","Elle","On"])
        }
        if (subject==="Ils/Elles"){
            subject=chooseList(["Ils","Elles"])
        }
    }
    verb=chooseList(verbLis);
    if (negation){
        if (chooseList([true,false])){
            neg=""
        }else{
            neg=chooseList([" (ne...pas)"," (ne...plus)"," (ne...jamais)"])
        }
    }
    return "Conjugate "+verb+" ("+subject+")"+neg+" in "+tense
}
function generate_answer(){
    var ending=""
    var root_offset=0
    //endings
    if ((tense==="Présent de l'indicatif")||(tense==="Présent de l'impératif")){
        if ((group1.includes(verb))||(group3vrir.includes(verb))) {
            if ((subject==="Je")||(subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending="e"
            } else if (subject==="Tu"){
                if (tense==="Présent de l'indicatif"){
                    ending="es"
                } else if(tense==="Présent de l'impératif"){
                    if (group1.includes(verb)){
                        ending="e"
                    } else if (group3vrir.includes(verb)){
                        ending="es"
                    }
                }
            } else if (subject==="Nous"){
                ending="ons"
            } else if (subject==="Vous"){
                ending="ez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="ent"
            }
        } else if (group2.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                ending="is"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending="it"
            } else if (subject==="Nous"){
                ending="issons"
            } else if (subject==="Vous"){
                ending="issez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="issent"
            }
        } else if (group3dre.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                ending="s"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending=""
            } else if (subject==="Nous"){
                ending="ons"
            } else if (subject==="Vous"){
                ending="ez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="ent"
            }
        } else if (group3mir.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                ending="s"
                root_offset=1
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending="t"
                root_offset=1
            } else if (subject==="Nous"){
                ending="ons"
            } else if (subject==="Vous"){
                ending="ez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="ent"
            }
        } else if (group3enir.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                ending="iens"
                root_offset=2
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending="ient"
                root_offset=2
            } else if (subject==="Nous"){
                ending="ons"
            } else if (subject==="Vous"){
                ending="ez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="iennent"
                root_offset=2
            }
        } else if (group3rompre.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                ending="s"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending="t"
            } else if (subject==="Nous"){
                ending="ons"
            } else if (subject==="Vous"){
                ending="ez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="ent"
            }
        } else if (group3uire.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                ending="s"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending="t"
            } else if (subject==="Nous"){
                ending="sons"
            } else if (subject==="Vous"){
                if ((verb==="dire")||(verb==="redire")){
                    ending="tes"
                } else{
                    ending="sez"
                }
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="sent"
            }
        } else if (group3crire.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                ending="s"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending="t"
            } else if (subject==="Nous"){
                ending="vons"
            } else if (subject==="Vous"){
                ending="vez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="vent"
            }
        } else if (group3aindre.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                root_offset=1
                ending="s"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                root_offset=1
                ending="t"
            } else if (subject==="Nous"){
                root_offset=2
                ending="gnons"
            } else if (subject==="Vous"){
                root_offset=2
                ending="gnez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                root_offset=2
                ending="gnent"
            }
        } else if (group3ttre.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                root_offset=1
                ending="s"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                root_offset=1
                ending=""
            } else if (subject==="Nous"){
                ending="ons"
            } else if (subject==="Vous"){
                ending="ez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="ent"
            }
        } else if (group3prendre.includes(verb)){
            if ((subject==="Je")||(subject==="Tu")){
                ending="s"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending=""
            } else if (subject==="Nous"){
                root_offset=1
                ending="ons"
            } else if (subject==="Vous"){
                root_offset=1
                ending="ez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                root_offset=1
                ending="ent"
            }
        } else if (group3aitre.includes(verb)){
            root_offset=2
            if ((subject==="Je")||(subject==="Tu")){
                ending="is"
            } else if ((subject==="Il")||(subject==="Elle")||(subject==="On")){
                ending="it"
            } else if (subject==="Nous"){
                ending="issons"
            } else if (subject==="Vous"){
                ending="issez"
            } else if ((subject==="Ils")||(subject==="Elles")){
                ending="issent"
            }
        }
    }
    //final assembly
    if (vowels.includes(verb.charAt(0))){
        if (neg===""){
            if (subject==="Je"){
                return subject.slice(0,-1)+"'"+verb.slice(0,-2-root_offset)+ending
            } else{
                return subject+" "+verb.slice(0,-2-root_offset)+ending
            }
        }else{
            return subject+" n'"+verb.slice(0,-2-root_offset)+ending+" "+neg.slice(7,-1)
        }
    } else{
        if (neg===""){
            return subject+" "+verb.slice(0,-2-root_offset)+ending
        }else{
            return subject+" ne "+verb.slice(0,-2-root_offset)+ending+" "+neg.slice(7,-1)
        }
    }
}
var button_cooldown=false;
const negationContainer=document.getElementById("negationContainer");
const begin_button=document.getElementById("beginButton");
const set_button=document.getElementById("setButton");
const question_text=document.getElementById("practice-question");
const response_text=document.getElementById("practice-response");
const response_submit=document.getElementById("responseSubmit");
const answer_text=document.getElementById("practice-answer");
const titles=document.querySelectorAll(".mtv-title")
const verb_containers=document.querySelectorAll(".verb-container")
function showresult(correct,answer){
    answer_text.style.display="flex";
    if (correct){
        answer_text.style.color="green";
    } else{
        answer_text.style.color="red";
    }
    answer_text.innerHTML=answer;
    answer_text.style.opacity=1;
    setTimeout(function(){
        answer_text.style.opacity=0;
        answer_text.style.display="none";
        button_cooldown=false;
        question_text.innerHTML=generate_question();
    },3000)
}
function clean_string(string){
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"").toLowerCase();
}
begin_button.addEventListener("click", function(){
    if (verbselectLis.includes("g1")){
        verbLis.push.apply(verbLis,group1);
    }
    if (verbselectLis.includes("g2")){
        verbLis.push.apply(verbLis,group2);
    }
    if (verbselectLis.includes("g3")){
        verbLis.push.apply(verbLis,group3);
    }
    indicatifContainer.style.display="none";
    subjonctifContainer.style.display="none";
    conditionnelContainer.style.display="none";
    imperatifContainer.style.display="none";
    participeContainer.style.display="none";
    negationContainer.style.display="none";
    titles.forEach(title=>{
        title.style.display="none";
    });
    verb_containers.forEach(verb_container=>{
        verb_container.style.display="none";
    });
    begin_button.style.display="none";
    set_button.style.display="flex";
    question_text.style.display="flex";
    response_text.style.display="flex";
    response_submit.style.display="flex";
    question_text.innerHTML=generate_question();
    store_data("settings", tenseLis)
    store_data("selectedSettings", selectedTenseLis)
});
set_button.addEventListener("click", function(){
    screwed=false
    verbLis=[]
    indicatifContainer.style.display="flex";
    subjonctifContainer.style.display="flex";
    conditionnelContainer.style.display="flex";
    imperatifContainer.style.display="flex";
    participeContainer.style.display="flex";
    begin_button.style.display="flex";
    negationContainer.style.display="flex";
    titles.forEach(title=>{
        title.style.display="flex";
    });
    verb_containers.forEach(verb_container=>{
        verb_container.style.display="flex";
    });
    set_button.style.display="none";
    question_text.style.display="none";
    response_text.style.display="none";
    response_submit.style.display="none";
    answer_text.style.opacity=0;
    answer_text.style.display="none";
});
var real_ans=""
response_submit.addEventListener("click", function(){
    if (!button_cooldown){
        real_ans=generate_answer()
        if (screwed){
            showresult(false,"Your current configuration is unavailable!")
        } else if (clean_string(response_text.value)===clean_string(real_ans)){
            showresult(true,"Correct! The answer is most likely: "+real_ans)
        } else{
            showresult(false,"Incorrect! The answer is most likely: "+real_ans)
        }
        button_cooldown=true;
    }
})
