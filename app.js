/* CAMBIAR PANTALLA */
function cambiar(id){
    document.querySelectorAll('.pantalla').forEach(p=>p.style.display='none');
    document.getElementById(id).style.display='block';
}

/* QUIZ */
function seleccionar(el, tipo){
    el.classList.add(tipo);

    if(tipo==="correcto"){
        localStorage.setItem("quiz","ok");
    }
}

/* MEMORIA */
let valores=["V","V","A","A","Ω","Ω","W","W"];
valores.sort(()=>0.5-Math.random());

let memoria=document.getElementById("memoria");
let seleccion=[];

valores.forEach(v=>{
    let d=document.createElement("div");
    d.className="carta";
    d.innerText="?";

    d.onclick=()=>{
        d.innerText=v;
        seleccion.push({el:d,val:v});

        if(seleccion.length==2){
            if(seleccion[0].val!==seleccion[1].val){
                setTimeout(()=>{
                    seleccion[0].el.innerText="?";
                    seleccion[1].el.innerText="?";
                },500);
            }
            seleccion=[];
        }
    };

    memoria.appendChild(d);
});

/* SOPA */
let letras="ELECTR";
let sopa=document.getElementById("sopa");

for(let i=0;i<36;i++){
    let d=document.createElement("div");
    d.className="cell";
    d.innerText=letras[Math.floor(Math.random()*letras.length)];
    sopa.appendChild(d);
}

/* PDF */
function abrirPDF(){
    document.getElementById("pdfContainer").style.display="flex";
}
function cerrarPDF(){
    document.getElementById("pdfContainer").style.display="none";
}

/* BLOQUEOS */
document.addEventListener("contextmenu", e=>e.preventDefault());
document.addEventListener("keydown", function(e){
if(e.ctrlKey && (e.key==='s'||e.key==='p'||e.key==='u')){
e.preventDefault();
}
});