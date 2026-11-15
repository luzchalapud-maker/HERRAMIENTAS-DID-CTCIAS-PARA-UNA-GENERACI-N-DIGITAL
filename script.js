const unitData = [
  {
    title: "Unidad 1. Conceptualización",
    intro: "Comprende los fundamentos de las competencias digitales, la innovación educativa, los recursos educativos abiertos y las licencias para el uso responsable de contenidos.",
    topics: ["Herramientas didácticas y competencias digitales en educación.", "Innovación educativa y aprendizaje relevante.", "Recursos Educativos Abiertos (REA) y Recursos Educativos Digitales Abiertos (REDA).", "Derechos de autor y licencias Creative Commons."],
    activities: ["Revisa los materiales bibliográficos y construye una postura fundamentada.", "En equipos de tres, seleccionen un tema vinculado principalmente con el ODS 4: Educación de calidad.", "Elaboren la conceptualización del recurso: introducción, estado del arte y diseño metodológico para desarrollar un prototipo funcional.", "Participa en el foro con argumentos sustentados en mínimo tres autores y réplicas a dos compañeros."],
    evidence: "Documento de conceptualización de 18 a 25 páginas, en Times New Roman 12, interlineado 1,5 y normas APA 7.ª edición. La rúbrica del documento solicita mínimo 20 citas relevantes.",
    forum: "¿Hasta qué punto las herramientas digitales transforman la interacción con el conocimiento y la preparación para el futuro laboral?"
  },
  {
    title: "Unidad 2. Plataformas de aprendizaje en línea",
    intro: "Analiza las plataformas virtuales, los recursos multimedia y las tecnologías educativas, considerando sus oportunidades y desafíos para el aprendizaje.",
    topics: ["Plataformas de aprendizaje en línea y educación a distancia.", "Recursos multimedia y tecnologías educativas.", "Recursos Educativos Digitales Abiertos y repositorios.", "Derechos de autor, propiedad intelectual y licencias de uso."],
    activities: ["Analiza las lecturas sobre desarrollo metodológico de REDA y herramientas digitales.", "Identifica qué tipo de recurso responde mejor al contexto y necesidad definidos en la Unidad 1.", "Desarrolla un prototipo funcional: material didáctico, contenido multimedia, herramienta/software educativo, recurso de formación profesional o recurso de investigación.", "Participa en el foro sobre la transformación de la enseñanza mediante REA y herramientas digitales."],
    evidence: "Prototipo funcional del REDA con objetivo, público destinatario, contexto de aplicación, recursos utilizados y definición de permisos/licencia. El documento establece que el tema y el contexto deben quedar definidos desde la actividad pedagógica del Tema 1.",
    forum: "¿Cómo pueden los recursos educativos abiertos y las herramientas digitales transformar los métodos tradicionales de enseñanza en tu contexto?"
  },
  {
    title: "Unidad 3. Colaboración virtual y comunidades de aprendizaje",
    intro: "Reconoce el valor de las comunidades virtuales de práctica, el intercambio de conocimiento y los laboratorios de innovación educativa para construir soluciones colaborativas.",
    topics: ["Comunidades virtuales de práctica y gestión del conocimiento.", "Colaboración docente y aprendizaje colaborativo mediado por TIC.", "Innovación social y construcción colectiva de soluciones.", "Laboratorios de innovación educativa: simuladores, juegos, realidad virtual y buenas prácticas."],
    activities: ["Sistematiza reuniones, acuerdos, comunicaciones y aportes de cada integrante en el cuaderno de laboratorio.", "Documenta el proceso de desarrollo y las decisiones tomadas para construir el REDA.", "Contrasta el prototipo con la necesidad educativa y recoge retroalimentación.", "Participa en el foro sobre escenarios disruptivos, innovación y construcción social del conocimiento."],
    evidence: "Cuaderno de laboratorio actualizado, evidencias de participación de todos los integrantes y presentación o video de sustentación del REDA.",
    forum: "¿Qué estrategias de innovación, recursos abiertos y escenarios disruptivos propondrías para mejorar una asignatura? ¿Qué obstáculos anticipas?"
  }
];

const progressKey = "electiva1_progress_v1";
const notebookKey = "electiva1_notebook_v1";
let completed = JSON.parse(localStorage.getItem(progressKey) || "[]");
let notebook = JSON.parse(localStorage.getItem(notebookKey) || "[]");

function renderProgress(){
  const count = completed.length;
  document.getElementById("progressText").textContent = `${count} de 3 unidades completadas`;
  document.getElementById("progressBar").style.width = `${count/3*100}%`;
  document.querySelectorAll(".unit-card").forEach((card,i)=>{
    const button=card.querySelector(".open-unit");
    button.textContent = completed.includes(i) ? "Unidad completada ✓" : "Explorar unidad →";
  });
}
function openUnit(index){
  const u=unitData[index], done=completed.includes(index);
  const detail=document.getElementById("unitDetail");
  detail.innerHTML=`
    <div class="detail-content">
      <div class="detail-head"><div><span class="eyebrow dark">CONTENIDO Y ACTIVIDADES</span><h3>${u.title}</h3><p>${u.intro}</p></div>
      <button class="complete-btn ${done?"done":""}" id="toggleComplete">${done?"✓ Completada":"Marcar como completada"}</button></div>
      <div class="detail-columns">
        <div><h4>Contenidos temáticos</h4><ul>${u.topics.map(t=>`<li>${t}</li>`).join("")}</ul></div>
        <div><h4>Actividades de aprendizaje</h4><ol>${u.activities.map(a=>`<li>${a}</li>`).join("")}</ol></div>
      </div>
      <div class="detail-columns">
        <div><h4>Evidencia o producto</h4><p>${u.evidence}</p></div>
        <div><h4>Pregunta orientadora del foro</h4><p>${u.forum}</p></div>
      </div>
    </div>`;
  document.getElementById("toggleComplete").addEventListener("click",()=>{
    if(completed.includes(index)) completed=completed.filter(x=>x!==index);
    else completed.push(index);
    localStorage.setItem(progressKey,JSON.stringify(completed));
    renderProgress(); openUnit(index);
  });
}
document.querySelectorAll(".open-unit").forEach(btn=>btn.addEventListener("click",()=>openUnit(Number(btn.dataset.unit))));
renderProgress();

const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.getElementById("labDate").valueAsDate=new Date();
document.getElementById("saveEntry").addEventListener("click",()=>{
  const date=document.getElementById("labDate").value;
  const entry=document.getElementById("labEntry").value.trim();
  const status=document.getElementById("labStatus");
  if(!date || !entry){status.textContent="Completa la fecha y la descripción antes de guardar.";return;}
  notebook.push({date,entry,createdAt:new Date().toISOString()});
  localStorage.setItem(notebookKey,JSON.stringify(notebook));
  document.getElementById("labEntry").value="";
  status.textContent=`Registro guardado en este dispositivo. Total de registros: ${notebook.length}.`;
});
document.getElementById("exportNotebook").addEventListener("click",()=>{
  if(!notebook.length){document.getElementById("labStatus").textContent="Aún no hay registros para descargar.";return;}
  const blob=new Blob([JSON.stringify({course:"Electiva I: Herramientas Didácticas para una Generación Digital",records:notebook},null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download="cuaderno-de-laboratorio-electiva-I.json";a.click();URL.revokeObjectURL(url);
});
