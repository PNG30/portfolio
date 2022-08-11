//variables seleccion
let idMenu = document.getElementById('menuObject');

//validaciones
isNullOrUndefined();
validarDefinicion();



//funciones
function validarDefinicion() {
    if(typeof idMenu !== 'null') {
        console.log('isUndefined value = 0 '+ 'OK');
    }else{
        console.log('IsNull value = 1 Error 1 - null');

    }
}

function isNullOrUndefined() {

    if(typeof idMenu !== 'undefined') {
        console.log('OK');
    }else{
        console.log('Error 1 - Undefined')
    }

}

//Funciones generales

function pFunction() {
    //alert('Portfolio');
    console.log('Portfolio');
    window.location.href="/portfolio";

}

function projFunction(){
    //alert('Projects');
    console.log('Projects');
    window.location.href="/projects";
    
}

function DownFunction() {
    //alert('Downloads')
    console.log('Downloads');
    window.location.href="/downloads";
   
}

function Home() {
    console.log('Back to Home');
    window.location.href="/index.html";
}

function GeneralItem() {
    console.log('General Items');
    window.location.href="/generalKnowledge/general-knowledge.html";
}


//Funciones proyectos

function Web() {
    console.log('Projects/Web');
    window.location.href="/projects/web/web.html";
}

function Console() {
    console.log('Projects/Console');
    window.location.href="/projects/console/console.html";
}

function ConsoleJar() {
    console.log('Projects/Console/Jar');
    window.location.href="/projects/console/consoleJar.html";
}

function StockDB() {
    console.log('Projects/web/StockDB/index.html');
    window.location.href="/projects/web/stockdb/index.html";
}

//Funciones descargas

function Downloads(){
    let descarga1 = window.location.href = "/downloads/putty.exe";
}

//Funciones portfolio
function AccessPortGit() {
    let gitURL = window.open("https://github.com/PNG30?tab=repositories", "_blank");
}



function Certifications(){
    console.log('/portfolio/certfications');
    window.location.href="/portfolio/certifications/certifications.html";
}

//Funciones certifications
function impCertJava() {
       console.log('/portfolio/certifications/java');
       window.location.href="/portfolio/certifications/java/java.html";
}

function impCertPDFJava() {
    console.log('/downloads/certifications/java.pdf');
    let javaPDF = window.open("/downloads/certifications/javap.pdf", "_blank");
    //let objects = window.open("/downloads");
}

function impCertPDFObjects() {
    console.log('/downloads/certifications/objects.pdf');
    let javaPDF = window.open("/downloads/certifications/objects.pdf", "_blank");
    //let objects = window.open("/downloads");
}

function impCertPDFJ2SE() {
    console.log('/downloads/certifications/j2se.pdf');
    let javaPDF = window.open("/downloads/certifications/j2se.pdf", "_blank");
    //let objects = window.open("/downloads");
}

function impCertPDFHibernate() {
    console.log('Certification null');
    //let javaPDF = window.open("/downloads/certifications/j2se.pdf", "_blank");
    //let objects = window.open("/downloads");
    alert('Certification null');
}

function impCertHtml() {
    console.log('/portfolio/certifications/html');
    window.location.href="/portfolio/certifications/html/html-lang.html";
}

function impCertPDFhtml() {
    console.log('/downloads/certifications/html.pdf');
    let htmlPDF = window.open("/downloads/certifications/html.pdf", "_blank");
    //let objects = window.open("/downloads");
}

function impCertJS() {
    console.log('/portfolio/certifications/js');
    window.location.href="/portfolio/certifications/js/js.html";

}

function impCertPDFjs() {
    console.log('/downloads/certifications/js.pdf');
    let htmlPDF = window.open("/downloads/certifications/js.pdf", "_blank");
    //let objects = window.open("/downloads");

}

function impCertJSA() {
    alert('Certification null');
}

function impSQL() {
    console.log('/portfolio/certifications/sql');
    window.location.href="/portfolio/certifications/sql/mysql.html";
}

function impCertPDFsql() {
    console.log('/downloads/certifications/sql.pdf');
    let htmlPDF = window.open("/downloads/certifications/sql.pdf", "_blank");
    //let objects = window.open("/downloads");

}

//Contact form
function ContactMe(){
    console.log('/contact/contact.html');
    window.location.href='/contact/contact.html';
}

function showMail() {
    alert('pablogarciag21@gmail.com');
}

//Funciones ConocimientoGeneral

function Programming() {
    console.log('/generalKnowledge');
    window.location.href="/generalKnowledge/programming/index.html";
    //alert('Programming');
}

function Training() {
    console.log('/generalKnowledge');
    window.location.href="/generalKnowledge/training/index.html";
    //alert('Literature');
}

function Music() {
    console.log('/generalNowledge');
    window.location.href="/generalKnowledge/music/index.html";

}

function Computing() {
    console.log('/generalNowledge');
    window.location.href="/generalKnowledge/computing/index.html";

}

//Funciones Estudios

function showBookPython() {
    console.log('/downloads/books/Aprender Python.pdf');
    window.open("/downloads/books/Aprender Python.pdf");
}

function showSubjects() {
    console.log('/downloads/subjects/eduIT/index.html');
    window.location.href="/downloads/subjects/subjects.html";
    
}











