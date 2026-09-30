/*
  HG Studios project library
  ---------------------------
  Add: duplicate a project object and change its fields. Put the asset in /assets.
  Remove: delete the project object.
  Supported categories: still, motion, video-editing, 3d, uiux, front-end.
  Supported types: image, video, youtube.
*/
const PROJECTS = [
  {id:'still-01',title:'Wedding Anniversary Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-01.webp',description:'A social and event-focused visual composition.',tools:'Photoshop / CorelDRAW'},
  {id:'still-02',title:'Editorial Layout',category:'still',label:'Still / Design',type:'image',src:'assets/still-02.webp',description:'Editorial-style composition built for clear visual hierarchy.',tools:'Photoshop / CorelDRAW'},
  {id:'still-03',title:'Campaign Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-03.webp',description:'Promotional creative designed for social communication.',tools:'Photoshop / CorelDRAW'},
  {id:'still-04',title:'Social Media Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-04.webp',description:'Social-first visual design with a strong headline hierarchy.',tools:'Photoshop / CorelDRAW'},
  {id:'still-05',title:'Promotional Design',category:'still',label:'Still / Design',type:'image',src:'assets/still-05.webp',description:'A promotional composition built around product and message.',tools:'Photoshop'},
  {id:'still-06',title:'Social Campaign',category:'still',label:'Still / Design',type:'image',src:'assets/still-06.webp',description:'Campaign artwork for digital distribution.',tools:'Photoshop / CorelDRAW'},
  {id:'still-07',title:'Event Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-07.webp',description:'Event-focused visual communication.',tools:'Photoshop / CorelDRAW'},
  {id:'still-08',title:'Brand Communication',category:'still',label:'Still / Design',type:'image',src:'assets/still-08.webp',description:'Branded social content with a clear visual system.',tools:'Photoshop'},
  {id:'still-09',title:'Promotional Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-09.webp',description:'Promotional social media artwork.',tools:'Photoshop / CorelDRAW'},
  {id:'still-10',title:'Social Media Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-10.webp',description:'A concise social graphic focused on visual impact.',tools:'Photoshop'},
  {id:'still-11',title:'Campaign Design',category:'still',label:'Still / Design',type:'image',src:'assets/still-11.webp',description:'Campaign-oriented static design.',tools:'Photoshop / CorelDRAW'},
  {id:'still-12',title:'Anniversary Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-12.webp',description:'Celebratory social design.',tools:'Photoshop'},
  {id:'still-13',title:'Jumia Clone',category:'front-end',label:'Front-End',type:'image',src:'assets/still-13.webp',description:'A front-end recreation exploring e-commerce UI patterns.',tools:'HTML / CSS / JavaScript'},
  {id:'still-14',title:'UI / UX Exploration',category:'uiux',label:'UI / UX',type:'image',src:'assets/still-14.webp',description:'Interface exploration focused on hierarchy and usability.',tools:'Figma'},
  {id:'still-15',title:'HG Studios Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-15.webp',description:'Studio visual exploration.',tools:'Photoshop'},
  {id:'still-16',title:'HG Studios Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-16.webp',description:'Studio visual exploration.',tools:'Photoshop'},
  {id:'still-17',title:'HG Studios Creative',category:'still',label:'Still / Design',type:'image',src:'assets/still-17.webp',description:'Studio visual exploration.',tools:'Photoshop'},
  {id:'still-18',  title:'Birthday Celebration Creative',  category:'still',  label:'Graphic Design',  type:'image',  src:'assets/daystar-birthday-design-01.jpg',  description:'Birthday celebration artwork designed with a bold editorial composition and personalised visual treatment.',  tools:'Photoshop / CorelDRAW'  },
  {id:'still-19', title:'Birthday Portrait Design',  category:'still',  label:'Graphic Design', type:'image',  src:'assets/daystar-birthday-design-02.jpg',  description:'Premium birthday portrait artwork combining photography, typography and elegant visual styling.',  tools:'Photoshop / CorelDRAW'  },
  {id:'still-20',  title:'Wedding Anniversary Creative', category:'still', label:'Graphic Design', type:'image', src:'assets/daystar-wedding-anniversary-01.jpg', description:'Wedding anniversary social media artwork created for Daystar Christian Centre, Mowokekere.', tools:'Photoshop / CorelDRAW' },
  
  {id:'motion-01',title:'Church Advert',category:'motion',label:'Motion Graphics',type:'youtube',src:'ET58YflUUX8',thumbnail:'assets/motion/motion-1.png', url:'https://youtu.be/ET58YflUUX8',description:'Animated social content combining typography, timing and visual transitions.',tools:'Capcut / Premiere Pro'},
  {id:'motion-02',title:'ProEducArt',category:'motion',label:'Motion Graphics',type:'youtube',src:'PI5UREqa0-E', thumbnail:'assets/motion/motion-2.jpg', url:'https://youtu.be/PI5UREqa0-E', description:'Motion-led educational/promotional content.',tools:'Capcut / Premiere Pro'},
  

  {id:'3d-01',title:'Low-Poly House',category:'3d',label:'3D / Blender',type:'image',src:'assets/3d-01.webp',description:'3D environment study.',tools:'Blender'},
  {id:'3d-02',title:'3D Low-poly Room',category:'3d',label:'3D / Blender',type:'image',src:'assets/3d-02.webp',description:'Character modelling study.',tools:'Blender'},
  {id:'3d-03',title:'3D Low-poly Room',category:'3d',label:'3D / Blender',type:'image',src:'assets/3d-03.webp',description:'Environment and composition study.',tools:'Blender'},

  {id:'video-01',title:'Flash Race — Trailer',category:'video-editing',label:'Video Editing / VFX',type:'youtube',src:'Q1NSSibGbSc',url:'https://youtu.be/Q1NSSibGbSc',description:'A trailer edit combining pacing, effects and cinematic presentation.',tools:'Premiere Pro / After Effects'},
  {id:'video-02',title:'Do You Know? — Insects',category:'video-editing',label:'Video Editing / Social',type:'youtube',src:'VubP-G9_hWM',url:'https://youtu.be/VubP-G9_hWM',description:'Short-form educational content designed for social platforms.',tools:'Video Editing / Motion Graphics'},
  {id:'video-03',title:'Blender Basics for Beginners',category:'video-editing',label:'Video / Education',type:'youtube',src:'Mg5HOixIdls',url:'https://youtu.be/Mg5HOixIdls',description:'Educational video content introducing Blender fundamentals.',tools:'Blender / Video Editing'},
  

];

const CATEGORY_LABELS={all:'All',still:'Still / Design',motion:'Motion Graphics','video-editing':'Video Editing','3d':'3D / Blender',uiux:'UI / UX','front-end':'Front-End'};
const grid=document.getElementById('projectGrid');
const filters=document.getElementById('projectFilters');
const count=document.getElementById('projectCount');
let active=new URLSearchParams(location.search).get('category')||'all';
if(!CATEGORY_LABELS[active]) active='all';

Object.entries(CATEGORY_LABELS).forEach(([key,label])=>{
  const b=document.createElement('button');
  b.className='filter'+(key===active?' active':''); b.dataset.filter=key; b.textContent=label;
  b.addEventListener('click',()=>{active=key;history.replaceState(null,'',key==='all'?'projects.html':`projects.html?category=${encodeURIComponent(key)}`);document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderProjects();});
  filters.appendChild(b);
});

function mediaMarkup(p){
  if(p.type==='youtube') return `<button class="project-media media-button youtube-thumb" data-id="${p.id}" aria-label="Watch ${p.title}"><img src="${p.thumbnail || `https://img.youtube.com/vi/${p.src}/hqdefault.jpg`}" alt="${p.title} YouTube thumbnail" loading="lazy"><span class="youtube-overlay"><span class="youtube-play">▶</span><small>WATCH</small></span></button>`;
  if(p.type==='video') return `<button class="project-media media-button" data-id="${p.id}" aria-label="Open ${p.title}"><video muted playsinline preload="metadata" poster="${p.poster||''}"><source src="${p.src}" type="video/mp4"></video><span class="play-badge">▶</span></button>`;
  return `<button class="project-media media-button" data-id="${p.id}" aria-label="Open ${p.title}"><img src="${p.src}" alt="${p.title}" loading="lazy"></button>`;
}

function renderProjects(){
  const visible=PROJECTS.filter(p=>active==='all'||p.category===active);
  count.textContent=`${visible.length} ${visible.length===1?'project':'projects'}`;
  grid.innerHTML=visible.map(p=>`<article class="project-card reveal"><div>${mediaMarkup(p)}</div><div class="work-meta"><span>${p.label}</span><strong>${p.title}</strong><button class="details-link" data-details="${p.id}">View project ↗</button></div></article>`).join('');
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  document.querySelectorAll('.media-button').forEach(btn=>btn.addEventListener('click',()=>openMedia(PROJECTS.find(p=>p.id===btn.dataset.id))));
  document.querySelectorAll('.details-link').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();openProjectDetails(PROJECTS.find(p=>p.id===btn.dataset.details));}));
}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
function openMedia(p){
  const box=document.getElementById('lightbox'),content=document.getElementById('lightboxContent');
  if(p.type==='youtube'){
    const box=document.getElementById('detailModal');
    openProjectDetails(p);
    return;
  }
  content.innerHTML=p.type==='video'?`<div class="viewer-shell"><video class="lightbox-video" controls autoplay poster="${p.poster||''}"><source src="${p.src}" type="video/mp4"></video><div class="viewer-caption"><b>${p.title}</b><span>${p.label}</span></div></div>`:`<div class="viewer-shell"><img src="${p.src}" alt="${p.title}"><div class="viewer-caption"><b>${p.title}</b><span>${p.label}</span></div></div>`;
  box.classList.add('open');box.setAttribute('aria-hidden','false');
}
function openProjectDetails(p){
  const box=document.getElementById('detailModal'),content=document.getElementById('detailContent');
  content.innerHTML=`<div class="detail-media">${p.type==='video'?`<video controls poster="${p.poster||''}"><source src="${p.src}" type="video/mp4"></video>`:p.type==='youtube'?`<div class="yt-wrap"><iframe src="https://www.youtube.com/embed/${p.src}?rel=0&modestbranding=1" title="${p.title}" allowfullscreen></iframe></div>`:`<img src="${p.src}" alt="${p.title}">`}</div><div class="detail-copy"><div class="section-kicker">${p.label}</div><h2>${p.title}</h2><p>${p.description||''}</p><p class="detail-tools"><strong>Tools</strong>${p.tools||'—'}</p>${p.url?`<a class="button primary" href="${p.url}" target="_blank" rel="noopener">Watch on YouTube ↗</a>`:''}</div>`;
  box.classList.add('open');box.setAttribute('aria-hidden','false');
}
function closeLayer(id){const box=document.getElementById(id);box.classList.remove('open');box.setAttribute('aria-hidden','true');box.querySelector('[id$="Content"]')?.replaceChildren();}

document.querySelector('.lightbox-close')?.addEventListener('click',()=>closeLayer('lightbox'));
document.querySelector('.detail-close')?.addEventListener('click',()=>closeLayer('detailModal'));
document.getElementById('lightbox')?.addEventListener('click',e=>{if(e.target.id==='lightbox')closeLayer('lightbox')});
document.getElementById('detailModal')?.addEventListener('click',e=>{if(e.target.id==='detailModal')closeLayer('detailModal')});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLayer('lightbox');closeLayer('detailModal')}});
renderProjects();
