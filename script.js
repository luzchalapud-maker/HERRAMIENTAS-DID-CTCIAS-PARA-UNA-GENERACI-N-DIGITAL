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

const lecturasPresentacion = [
  [
    "En la actualidad se destaca la creciente importancia de las herramientas digitales en la educación superior, y en los diferentes niveles de educación, enfatizando sus beneficios para el aprendizaje atractivo e inmediato (Mero-Ponce, 2021). La pandemia de COVID- 19 aceleró el cambio a la enseñanza virtual, lo que hizo necesario un mayor uso de herramientas tecnológicas (López et al., 2021). Las competencias digitales son cruciales para los educadores del siglo XXI, ya que permiten la instrucción personalizada y la creación de productos digitales innovadores por parte de los estudiantes (Jiménez at al., 2021). La evolución de las herramientas digitales ha optimizado los modelos pedagógicos en las aulas virtuales, aunque algunos educadores desconocen su clasificación y características (González-Zamar et al., 2020). Desde investigaciones actuales se subrayan el paradigma constructivista en la educación, destacando a los estudiantes como participantes activos y constructores autónomos de conocimiento, mientras que los docentes sirven como mediadores y guías en el proceso de aprendizaje (Holguín-Álvarez et al., 2021). La formación digital continua para educadores es esencial para lograr un aprendizaje estudiantil eficiente y de alta calidad en este panorama educativo impulsado por la tecnología, por tanto, se evidencia la importancia de la temática en el proceso formativo del especialista en Pedagogía de reconocer que y cuáles son las herramientas didácticas, la innovación educativa, los recursos educativos abiertos y recursos educativos digitales abiertos, creative commons entre otros, para una correcta aplicación de las actividades de aprendizaje."
  ],
  [
    "Las plataformas de aprendizaje en línea han ganado relevancia en los últimos años, especialmente durante la pandemia de COVID-19, transformando los modelos educativos tradicionales (Pérez, 2020). Estas plataformas ofrecen nuevas posibilidades para el manejo de información, pero su eficacia depende de la capacidad de comunicación de quienes las utilizan (Ledesma et al., 2022). La educación a distancia emerge como una respuesta a la creciente demanda educativa, requiriendo un conjunto",
    "de variables distintas en comparación con la enseñanza presencial (Viteri, 2023). La plataforma digital se considera un elemento principal en la gestión de esta modalidad educativa (Estrada et al., 2024). Sin embargo, el aprendizaje virtual también presenta desafíos, como la desigualdad social y la deserción escolar (Posada et al., 2024). Es crucial reflexionar sobre las implicaciones de este cambio y abordar los desafíos para garantizar una educación efectiva y equitativa en entornos virtuales."
  ],
  [
    "Las comunidades virtuales de práctica (VCOP, por sus siglas en inglés) son reconocidas como valiosas herramientas de gestión del conocimiento, con un comportamiento de",
    "intercambio de conocimiento (KSB, por sus siglas en inglés) influenciado por factores personales, interpersonales, contextuales y tecnológicos (Hernández-Soto et al., 2021). La colaboración docente en línea a través de redes profesionales ha mostrado efectos positivos en los procesos de instrucción y el desarrollo profesional (García-Martínez et al., 2020). Las herramientas de aprendizaje colaborativo en los programas de educación superior virtual en América Latina han demostrado beneficios cuando se acompañan de métodos didácticos y diseño instruccional apropiados, mejorando la educación y la construcción de conocimiento (Hernández-Sellés, 2021), por tanto, la naturaleza multifacética de la colaboración virtual presenta su potencial para mejorar los resultados educativos en entornos de educación básica, media y superior.",
    "El trabajo colaborativo mediado por las TIC se ha centrado en diversos aspectos de la educación, situación que se expandió durante la pandemia de COVID-19. Recientes estudios han examinado las percepciones, experiencias y competencias de los docentes en el uso de las TIC para la educación a distancia (Uuh y Aguilar, 2022). Se ha descubierto que las herramientas de visualización y virtualización apoyan las actividades colaborativas, promueven la participación y brindan información sobre las interacciones de los participantes (Vásquez-Bermúdez et al., 2023). Por lo anterior, la innovación social ha surgido como un campo de estudio multidisciplinario, con implicaciones para las iniciativas de participación social (Cadena & Ramos, 2023), que fomentan el trabajo en red y la proyección de soluciones prácticas a necesidades reales del contexto en donde se integran representantes de la cuádruple hélice de las sociedad, sin embargo, existe una notable falta de investigación y trabajos académicos que aborden específicamente las diferencias entre los contextos educativos urbanos y rurales en escenarios de aprendizaje remoto, y la mayoría de los estudios generalizan los desafíos que enfrentan los educadores independientemente del contexto socioeducativo."
  ]
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
      <section class="reading-section" aria-label="Lectura de presentación del tema">
        <span class="eyebrow dark">LECTURA ACADÉMICA · DISEÑO INSTRUCCIONAL 2024</span>
        <h4>Presentación del tema</h4>
        ${lecturasPresentacion[index].map(p=>`<p>${p}</p>`).join("")}
        <p class="reading-source">Fuente: diseño instruccional de la Electiva I (2024). Las citas se conservan como aparecen en el documento original.</p>
      </section>
      <div class="detail-columns">
        <div><h4>Contenidos temáticos</h4><ul>${u.topics.map(t=>`<li>${t}</li>`).join("")}</ul></div>
        <div><h4>Actividades de aprendizaje</h4><ol>${u.activities.map(a=>`<li>${a}</li>`).join("")}</ol></div>
      </div>
      <div class="detail-columns">
        <div><h4>Evidencia o producto</h4><p>${u.evidence}</p></div>
        <div><h4>Pregunta orientadora del foro</h4><p>${u.forum}</p></div>
      </div>
      <div class="unit-actions">
        <button class="btn btn-primary" id="unitForumLink" type="button">Responder el foro de esta unidad →</button>
        <button class="btn btn-outline-dark" id="unitQuizLink" type="button">Presentar cuestionario de esta unidad →</button>
        <a class="btn btn-outline-dark" href="#actividades">Ver actividades integradoras →</a>
        <a class="btn btn-outline-dark" href="#recursos">Consultar bibliografía →</a>
      </div>
    </div>`;
  document.getElementById("unitForumLink").addEventListener("click",()=>{
    forumSelect.value=String(index);loadForum();document.getElementById("foros").scrollIntoView({behavior:"smooth"});
  });
  document.getElementById("unitQuizLink").addEventListener("click",()=>{
    quizUnitSelect.value=String(index+1);renderQuiz();document.getElementById("cuestionario").scrollIntoView({behavior:"smooth"});
  });
  document.getElementById("unitDetail").scrollIntoView({behavior:"smooth",block:"start"});
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


/* Foros: borradores locales. Nunca se transmiten datos a un servidor. */
const forumKey = "electiva1_forums_v2";
function safeParse(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
const forumFields = ["forumAuthor","forumResponse","forumReply1","forumReply2"];
const forumSelect = document.getElementById("forumSelect");
let forumDrafts = safeParse(forumKey, {});
function getForumDraft() {
  return Object.fromEntries(forumFields.map(id => [id, document.getElementById(id).value.trim()]));
}
function forumWordCount() {
  const value = document.getElementById("forumResponse").value.trim();
  document.getElementById("forumCount").textContent = (value ? value.split(/\s+/).length : 0) + " palabras";
}
function loadForum() {
  const data = forumDrafts[forumSelect.value] || {};
  forumFields.forEach(id => document.getElementById(id).value = data[id] || "");
  forumWordCount();
  document.getElementById("forumStatus").textContent = "";
}
function saveForum() {
  forumDrafts[forumSelect.value] = getForumDraft();
  try {
    localStorage.setItem(forumKey, JSON.stringify(forumDrafts));
    document.getElementById("forumStatus").textContent = "Borrador guardado en este navegador. No se ha publicado ni enviado al docente.";
    return true;
  } catch {
    document.getElementById("forumStatus").textContent = "No se pudo guardar en este navegador. Descarga una copia.";
    return false;
  }
}
function forumText() {
  const d = getForumDraft();
  const name = forumSelect.options[forumSelect.selectedIndex].text;
  return `ELECTIVA I · PARTICIPACIÓN EN FORO\n${name}\nParticipante: ${d.forumAuthor || "Sin especificar"}\nFecha de descarga: ${new Date().toLocaleString("es-CO")}\n\nINTERVENCIÓN PRINCIPAL\n${d.forumResponse || "(Sin respuesta)"}\n\nRÉPLICA 1\n${d.forumReply1 || "(Sin respuesta)"}\n\nRÉPLICA 2\n${d.forumReply2 || "(Sin respuesta)"}\n\nEste archivo fue generado en el navegador del estudiante. No implica envío ni calificación.`;
}
function downloadText(filename, content) {
  const blob = new Blob(["\ufeff",content], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
forumSelect.addEventListener("change", loadForum);
document.getElementById("forumResponse").addEventListener("input", forumWordCount);
document.getElementById("forumSave").addEventListener("click", saveForum);
document.getElementById("forumExport").addEventListener("click", () => {
  saveForum(); downloadText(`foro-${Number(forumSelect.value)+1}-electiva-I.txt`, forumText());
});
document.getElementById("forumPrint").addEventListener("click", () => {
  saveForum();
  const w = window.open("", "_blank");
  if (!w) { document.getElementById("forumStatus").textContent = "Habilita las ventanas emergentes o usa Descargar participación."; return; }
  const pre = w.document.createElement("pre");
  pre.textContent = forumText(); pre.style.cssText = "white-space:pre-wrap;font:14px/1.6 Arial;padding:28px;max-width:850px;margin:auto";
  w.document.title = "Participación en foro"; w.document.body.appendChild(pre); w.focus(); w.print();
});
loadForum();

/* Cuestionarios por unidad con claves del documento fuente */
const letters = ["A","B","C","D"];
const quizKey = "electiva1_quiz_by_unit_v3";
const quizUnitSelect = document.getElementById("quizUnit");
const quizQuestions = document.getElementById("quizQuestions");
let quizSaved = safeParse(quizKey, {});
let quizLastResult = null;
function currentQuestions(){return quizData.filter(q => q.unit === Number(quizUnitSelect.value));}
function getQuizAnswers(){return currentQuestions().map((_,i) => document.querySelector(`input[name="question-${i}"]:checked`)?.value || "");}
function updateQuizCount(){document.getElementById("quizAnswered").textContent = `${getQuizAnswers().filter(Boolean).length} de ${currentQuestions().length} respondidas`;}
function renderQuiz(){
  quizQuestions.replaceChildren();quizLastResult=null;document.getElementById("quizResult").replaceChildren();
  currentQuestions().forEach((q,i)=>{
    const fs=document.createElement("fieldset");fs.className="quiz-question";
    const legend=document.createElement("legend");
    const small=document.createElement("span");small.className="question-index";small.textContent=`Pregunta ${i+1} · ${q.section}`;
    const strong=document.createElement("strong");strong.textContent=q.question;legend.append(small,strong);fs.appendChild(legend);
    const options=document.createElement("div");options.className="quiz-options";
    q.options.forEach((option,j)=>{
      const label=document.createElement("label");label.className="quiz-option";
      const input=document.createElement("input");input.type="radio";input.name=`question-${i}`;input.value=letters[j];
      const span=document.createElement("span");span.textContent=`${letters[j]}. ${option}`;label.append(input,span);options.appendChild(label);
    });
    const feedback=document.createElement("div");feedback.className="quiz-feedback";feedback.hidden=true;feedback.id=`feedback-${i}`;
    fs.append(options,feedback);quizQuestions.appendChild(fs);
  });
  const saved=quizSaved[quizUnitSelect.value] || [];
  saved.forEach((value,i)=>{const input=document.querySelector(`input[name="question-${i}"][value="${value}"]`);if(input)input.checked=true;});
  updateQuizCount();
}
quizUnitSelect.addEventListener("change",renderQuiz);
document.getElementById("quizForm").addEventListener("change",()=>{
  updateQuizCount();quizSaved[quizUnitSelect.value]=getQuizAnswers();
  try{localStorage.setItem(quizKey,JSON.stringify(quizSaved));}catch{}
});
document.getElementById("quizForm").addEventListener("submit",e=>{
  e.preventDefault();const questions=currentQuestions(),answers=getQuizAnswers(),missing=answers.findIndex(a=>!a);
  if(missing>=0){document.getElementById("quizResult").textContent=`Falta responder la pregunta ${missing+1}.`;quizQuestions.children[missing].scrollIntoView({behavior:"smooth",block:"center"});return;}
  const correct=questions.reduce((s,q,i)=>s+(q.answer===answers[i]?1:0),0);
  const score=(correct/questions.length*5).toFixed(2);
  quizLastResult={unit:quizUnitSelect.value,correct,score,answers,date:new Date().toLocaleString("es-CO")};
  questions.forEach((q,i)=>{
    const el=document.getElementById(`feedback-${i}`);el.hidden=false;
    el.className="quiz-feedback "+(answers[i]===q.answer?"right":"wrong");
    el.textContent=`${answers[i]===q.answer?"Respuesta correcta.":"Respuesta por revisar."} Respuesta del documento: ${q.answer}. ${q.explanation}`;
  });
  const result=document.getElementById("quizResult");result.replaceChildren();
  const heading=document.createElement("strong");heading.textContent=`Calificación: ${score} / 5,00`;
  const detail=document.createElement("p");detail.textContent=`${correct} aciertos de ${questions.length}. Referencia de aprobación: 3,50. Resultado de práctica, no oficial.`;
  result.append(heading,detail);result.focus();result.scrollIntoView({behavior:"smooth",block:"center"});
});
document.getElementById("quizReset").addEventListener("click",()=>{
  if(!confirm("¿Borrar las respuestas guardadas de esta unidad?"))return;
  delete quizSaved[quizUnitSelect.value];try{localStorage.setItem(quizKey,JSON.stringify(quizSaved));}catch{}
  renderQuiz();
});
document.getElementById("quizExport").addEventListener("click",()=>{
  if(!quizLastResult||quizLastResult.unit!==quizUnitSelect.value){document.getElementById("quizResult").textContent="Primero califica el cuestionario de esta unidad.";return;}
  const lines=[`ELECTIVA I · UNIDAD ${quizLastResult.unit}`,`Fecha: ${quizLastResult.date}`,`Aciertos: ${quizLastResult.correct}/${currentQuestions().length}`,`Nota orientativa: ${quizLastResult.score}/5,00`,`No es una calificación institucional.`,...currentQuestions().map((q,i)=>`\n${i+1}. ${q.question}\nRespuesta marcada: ${quizLastResult.answers[i]}\nRespuesta del diseño: ${q.answer}`)];
  downloadText(`evaluacion-unidad-${quizLastResult.unit}.txt`,lines.join("\n"));
});
renderQuiz();
