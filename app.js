function encripitTexto(){
    let saidatexto = document.querySelector("textarea").value;
    if (removeLetras(saidatexto.trim()) != "")
        {
            let encriptografado = removeLetras(saidatexto.toLowerCase())
                                .replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
            conteudoTexto("h2", encriptografado);
            paginaSeguinte();
            document.querySelector("textarea").value = ""; 
                            }
}
function descriptTexto(){
    let textoCrip = document.querySelector("textarea").value;
    
    if (removeLetras(textoCrip.trim()) != "")
        {
            let descriptografar = removeLetras(textoCrip.toLowerCase())
                                .replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
            conteudoTexto("h2", descriptografar );
            paginaSeguinte();
            document.querySelector("textarea").value = "";
        }
}
function removeLetras(conteudoEscrito){
    return conteudoEscrito
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/[^a-zA-Z\s]/g, ""); 
}
function conteudoTexto(tag, text) {
    let userOutput = document.querySelector(tag);
    userOutput.innerHTML = text;       
}
function paginaSeguinte(){
    conteudoTexto("h3", "");
    conteudoTexto("h4", "");
    conteudoTexto("span", "");
    document.getElementById("mascara-anon").style.display = "none";
    document.getElementById("palavras").style.visibility = "hidden";

    let copiarBotao = document.getElementById("copiarBotao");
    copiarBotao.style.visibility = "visible";
    copiarBotao.style.pointerEvents = "auto";
}

//botao extra
function copiarTexto(){
    let copia = document.getElementById("mensagem-secreta").innerText;
    navigator.clipboard.writeText(copia);
    document.getElementById("copiarBotao").innerText = "Copiado";
}
// efeito typewriter
!function(){const e=1500,t=2e3,n=1e3,i=1e3;let o,d,r=!0;
    function s(e,t){const n=e.textContent.length;n>0&&r&&(e.textContent=e.textContent.slice(0,n-1),setTimeout((()=>{s(e,t)}),t))}
    function c(o){return{typingSpeed:t/o,eraseSpeed:n/o,waitingTime:t+e+i}}
    function l({word:e,element:t,typingSpeed:n,waitingTime:i,eraseSpeed:d}){
    !function(e,t,n){
        let i=0;
        const d=()=>{r&&(i<e.length?(t.textContent+=e.charAt(i),i+=1,o=setTimeout(d,n)):t.classList.add("efeito-escrita-pronta"))};
    d()}(e,t,n),setTimeout((()=>{t.classList.remove("efeito-escrita-pronta"),s(t,d)}),i)}
    function a(){
        var o;
        const s=document.querySelectorAll(".efeito-escrita");
        let a=0;
        if(!s.length)return;
        const g=null!==(o=s[0]?.dataset?.words.split(","))&&void 0!==o?o:[];
        if(!g.length)return;
        const u=t+n+e+i+500,{typingSpeed:m,waitingTime:p,eraseSpeed:f}=c(g[a].length);
    l({element:s[0],typingSpeed:m,waitingTime:p,eraseSpeed:f,word:g[a].trim()}),g.length>1&&(a+=1),d=setInterval((()=>{
        if(!r)return;
        const e=g[a].trim(),{typingSpeed:t,waitingTime:n,eraseSpeed:i}=c(e.length);s[0].textContent="",l({element:s[0],typingSpeed:t,eraseSpeed:i,waitingTime:n,word:e}),a<g.length-1?a+=1:a=0}),u)}
        function g(){clearTimeout(o),clearInterval(d),r=!1}document.addEventListener("DOMContentLoaded",a),document.addEventListener("visibilitychange",(function(){document.hidden?g():(g(),r=!0,a())}))}();