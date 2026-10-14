/* ============ FORUM ============
   Categories mirror the guide paths and stages (see TRACKS), so every question sits next to its guides.
   Seed threads below are example conversations; "guide" links a thread to its related guide. */
const STAGE_DESC = {
  before:"Visas, budgets, and planning your move.",
  first:"SIN, phones, banking, and healthcare in your first weeks.",
  stay:"Work permits, Express Entry, and the road to PR.",
  explore:"Industries, franchises, e-commerce, and business ideas.",
  plan:"Immigration streams, business plans, and funding.",
  setup:"Structures, registration, CRA accounts, banking, and licences.",
  money:"Business taxes, GST/HST, bookkeeping, and cash flow.",
  grow:"Marketing, sales, operations, hiring, and legal protection."
};
const FORUM_CATS = TRACKS.flatMap(t=>t.stages.map(st=>({id:st.id, name:st.name, track:t.id, trackName:t.name, desc:STAGE_DESC[st.id]||""})));
const catById = id => FORUM_CATS.find(c=>c.id===id) || {id, name:"General", trackName:"", desc:""};

const THREADS = [
  { id:"s-banking-sin", cat:"first", guide:"banking", author:"Priya K.", date:"October 9, 2026", views:142,
    title:"Opened a bank account in my first week, but they asked for my SIN after. Normal?",
    body:"Landed in Toronto on a work permit last week. The newcomer advisor at the bank opened my chequing account with just my passport and work permit, then told me to come back with my SIN within a few weeks. Is that normal or did I skip a step?",
    replies:[
      { author:"Daniel M.", date:"October 9, 2026", text:"Totally normal in my experience. Same thing happened to me in Mississauga last year. They need the SIN for tax reporting on interest, so they let you open the account first and update it later." },
      { author:"Aiko T.", date:"October 10, 2026", text:"Service Canada gave me my SIN same day when I went in person. Bring the original permit, not a copy. Then I just updated it in the bank app, no branch visit needed." }
    ]},
  { id:"s-incorporate-ontario", cat:"setup", guide:"business-structure", author:"Marco R.", date:"October 4, 2026", views:219,
    title:"Federal vs Ontario incorporation as a non-resident: what did you choose and why?",
    body:"I'm still living in Italy and want to set up a small software consultancy with Canadian clients. I don't have a Canadian co-founder. Federal looks nicer for name protection but I keep reading about the resident director rule. What did other non-residents do?",
    replies:[
      { author:"Samira H.", date:"October 4, 2026", text:"I went with Ontario for exactly that reason. No Canadian director needed. I only serve clients in Ontario for now so the provincial name protection was enough." },
      { author:"Jon P.", date:"October 5, 2026", text:"Same, Ontario. Don't forget you need an agent for service with an Ontario address. Our accountant's office does it for a yearly fee." },
      { author:"Marco R.", date:"October 6, 2026", text:"Thanks both. Going with Ontario and a numbered company for now to keep it fast. Will register a trade name later." }
    ]},
  { id:"s-gst-early", cat:"money", guide:"gst-hst", author:"Lina W.", date:"September 28, 2026", views:97,
    title:"Is it worth registering for GST/HST before I reach $30k in sales?",
    body:"Freelance graphic designer in Vancouver, sole proprietor. I'm nowhere near $30,000 yet, but I just spent a lot on a laptop and software. Did registering early actually help anyone?",
    replies:[
      { author:"Kwame A.", date:"September 29, 2026", text:"Registered voluntarily from day one and claimed the tax on my equipment back as input tax credits. The trade-off is you have to charge clients GST and file returns even when it's quiet." },
      { author:"Elena S.", date:"September 30, 2026", text:"Worth asking a CPA. For me most clients were businesses who could claim the GST back anyway, so charging it didn't hurt sales at all." }
    ]},
  { id:"s-pgwp-cec", cat:"stay", guide:"student-to-pr", author:"Arjun D.", date:"September 21, 2026", views:164,
    title:"PGWP to Express Entry: how long did the CEC route take you?",
    body:"Graduated from a college in Halifax in May and I'm on a PGWP now. Planning to apply through the Canadian Experience Class once I have a year of skilled work. Curious what timelines people actually saw from first job to PR.",
    replies:[
      { author:"Hana L.", date:"September 22, 2026", text:"For me it was about 12 months of work, then roughly another year from creating my profile to PR, mostly waiting for an invitation. Book your language test early, the slots in Halifax fill up fast." }
    ]}
];

/* ============ FORUM STORE ============
   On a static host (GitHub Pages) new threads/replies are saved in the visitor's browser only.
   "Creator" = the browser that posted (a random id in localStorage). With Firebase, use the signed-in or
   anonymous user id instead and enforce the same rule in the database security rules. */
const FORUM_KEY = "cg-forum-v2";
function loadForum(){ try{ return JSON.parse(localStorage.getItem(FORUM_KEY)) || {threads:[],replies:{}} }catch(e){ return {threads:[],replies:{}} } }
function saveForum(d){ try{ localStorage.setItem(FORUM_KEY, JSON.stringify(d)) }catch(e){} }
let FORUM = loadForum();
const MY_ID = (()=>{ let id; try{ id=localStorage.getItem("cg-uid"); if(!id){ id="v"+Math.random().toString(36).slice(2)+Date.now().toString(36); localStorage.setItem("cg-uid",id);} }catch(e){ id="v"+Math.random().toString(36).slice(2); } return id; })();
const isMine = x => !!x && x.owner === MY_ID;
function allThreads(){ return [...FORUM.threads, ...THREADS]; }
function repliesFor(t){ return [...(t.replies||[]), ...(FORUM.replies[t.id]||[])]; }
function replyCount(t){ return repliesFor(t).length; }
function catCount(c){ return allThreads().filter(t=>t.cat===c.id).length; }
function deleteThread(id){ FORUM.threads = FORUM.threads.filter(t=>!(t.id===id && isMine(t))); delete FORUM.replies[id]; saveForum(FORUM); }
function deleteReply(tid, rid){ FORUM.replies[tid] = (FORUM.replies[tid]||[]).filter(r=>!(r.id===rid && isMine(r))); saveForum(FORUM); }
const today = () => new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
let forumCat = "all", pendingCat = null;

const CONTACT_EMAIL = "bubble.youthimpact@gmail.com";
const PUBLIC_EMAIL = "hello@canadaguide.com";

/* ============ HELPERS ============ */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const icon = (n) => `<svg><use href="#i-${n}"/></svg>`;
const pad = n => String(n).padStart(2,"0");

/* ---- guide body renderer (see format notes at the top of the guide data) ---- */
function inline(t){
  return esc(t)
    .replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\[([^\]]+)\]\((#guide-[\w-]+)\)/g,'<a href="$2">$1</a>');
}
const LIST_RE = /^(\s*)(- |\d+\. |\[ \] )(.*)$/;
function renderBody(src, gid){
  const toc = []; let cb = 0, steps = 0;
  const isBlock = l => /^(#{2,3} |> |!> |\+ |\|)/.test(l) || LIST_RE.test(l);
  const box = () => `${gid}-c${cb++}`;

  function list(items){
    const root = {kids:[]}, stack = [{lvl:-1,node:root}];
    items.forEach(l=>{
      const m = l.match(LIST_RE), lvl = Math.floor(m[1].length/2);
      const type = m[2]==="- " ? "ul" : m[2]==="[ ] " ? "check" : "ol";
      const node = {type, text:m[3], kids:[]};
      while(stack.length>1 && stack[stack.length-1].lvl >= lvl) stack.pop();
      stack[stack.length-1].node.kids.push(node);
      stack.push({lvl,node});
    });
    return draw(root.kids);
  }
  function draw(nodes){
    let out = "", k = 0;
    while(k < nodes.length){
      const type = nodes[k].type, group = [];
      while(k < nodes.length && nodes[k].type===type) group.push(nodes[k++]);
      if(type==="check") out += `<ul class="checks">${group.map(n=>{const id=box();return `<li><label for="${id}"><input type="checkbox" id="${id}" data-track><span>${inline(n.text)}${n.kids.length?draw(n.kids):""}</span></label></li>`}).join("")}</ul>`;
      else out += `<${type}>${group.map(n=>`<li>${inline(n.text)}${n.kids.length?draw(n.kids):""}</li>`).join("")}</${type}>`;
    }
    return out;
  }
  function blocks(lines, nested){
    let html = "", i = 0;
    while(i < lines.length){
      const l = lines[i];
      if(!l.trim()){ i++; continue; }
      if(!nested && l.startsWith("## ")){ const id=`${gid}-s${toc.length}`; toc.push({id,text:l.slice(3)}); html+=`<h2 id="${id}">${inline(l.slice(3))}</h2>`; i++; continue; }
      if(l.startsWith("### ")){ html+=`<h3>${inline(l.slice(4))}</h3>`; i++; continue; }
      if(!nested && l.startsWith("+ ")){
        let out = "";
        while(i < lines.length && lines[i].startsWith("+ ")){
          const title = lines[i++].slice(2), body = [];
          while(i < lines.length && !lines[i].startsWith("+ ") && !lines[i].startsWith("## ")) body.push(lines[i++]);
          const n = ++steps, id = box();
          out += `<li class="step"><div class="step-n" aria-hidden="true"><span>${n}</span></div><div class="step-main"><h3>${inline(title)}</h3>${blocks(body,true)}<label class="mark" for="${id}"><input type="checkbox" id="${id}" data-track><span class="mark-off">Mark done</span><span class="mark-on">Done</span></label></div></li>`;
          while(i < lines.length && !lines[i].trim()) i++;
        }
        html += `<ol class="steps-list">${out}</ol>`; continue;
      }
      if(l.startsWith("> ") || l.startsWith("!> ")){
        const warn = l.startsWith("!> "), t=[];
        while(i<lines.length && lines[i].startsWith(warn?"!> ":"> ")) t.push(lines[i++].slice(warn?3:2));
        html+=`<div class="note${warn?" warn-note":""}"><span class="note-lbl">${warn?"Watch out":"Good to know"}</span>${t.map(inline).join("<br>")}</div>`; continue;
      }
      if(l.startsWith("|")){
        const rows=[]; while(i<lines.length && lines[i].startsWith("|")){ const r=lines[i++].trim(); if(/^\|[\s\-:|]+\|$/.test(r)) continue; rows.push(r.replace(/^\||\|$/g,"").split("|").map(c=>c.trim())); }
        const [head,...body]=rows;
        html+=`<div class="tbl"><table><thead><tr>${head.map(c=>`<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body.map(r=>`<tr>${r.map(c=>`<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
        continue;
      }
      if(LIST_RE.test(l)){ const items=[]; while(i<lines.length && LIST_RE.test(lines[i])) items.push(lines[i++]); html+=list(items); continue; }
      const t=[]; while(i<lines.length && lines[i].trim() && !isBlock(lines[i])) t.push(lines[i++].trim());
      html+=`<p>${inline(t.join(" "))}</p>`;
    }
    return html;
  }
  const html = blocks(String(src||"").replace(/\r/g,"").split("\n"), false);
  return {html, toc, checks:cb, steps};
}
const TYPE_LABEL = {howto:"How-to", explainer:"Explainer"};
function glanceHTML(g){
  const rows = [["who","Who it's for"],["time","Time"],["cost","Cost"],["where","Where"],["result","You'll get"]].filter(([k])=>g.glance && g.glance[k]);
  if(g.type==="explainer" && g.answer) return `<div class="answer"><span class="note-lbl">Short answer</span><p>${inline(g.answer)}</p></div>`;
  if(!rows.length) return "";
  return `<div class="glance"><span class="note-lbl">At a glance</span><dl>${rows.map(([k,l])=>`<div><dt>${l}</dt><dd>${inline(g.glance[k])}</dd></div>`).join("")}</dl></div>`;
}

const trackOf = g => TRACKS.find(t=>t.id===g.track);
const stageOf = g => trackOf(g).stages.find(st=>st.id===g.stage);
const stageNo = g => trackOf(g).stages.findIndex(st=>st.id===g.stage)+1;
const trackGuides = id => GUIDES.filter(g=>g.track===id);
const readMins = g => Math.max(2, Math.round(String(g.body).split(/\s+/).length/200));

function guideRow(g,n){
  return `<a class="grow" href="#guide-${g.id}"><span class="num">${pad(n)}</span><div><h3>${esc(g.title)}</h3><p>${esc(g.summary)}</p><div class="gmeta"><span class="type-tag">${TYPE_LABEL[g.type]||"Guide"}</span>${readMins(g)} min read</div></div><span class="link">Read guide ${icon("arrow")}</span></a>`;
}
function searchRow(g){
  return `<a class="grow" href="#guide-${g.id}"><span class="num">${pad(stageNo(g))}</span><div><div class="tag">${esc(trackOf(g).short)} · ${esc(stageOf(g).name)}</div><h3>${esc(g.title)}</h3><p>${esc(g.summary)}</p></div><span class="link">Read guide ${icon("arrow")}</span></a>`;
}
function guideCard(g){
  return `<a class="card" href="#guide-${g.id}"><div class="tag">${esc(stageOf(g).name)}</div><h3>${esc(g.title)}</h3><p>${esc(g.summary)}</p><span class="link">Read guide ${icon("arrow")}</span></a>`;
}
function trackHTML(t){
  let n=0;
  return `<div class="track" id="track-${t.id}">
    <div class="track-head"><div><div class="eyebrow">${esc(t.short)}</div><h2>${esc(t.name)}</h2><p>${esc(t.desc)}</p></div><span class="track-count">${trackGuides(t.id).length} guides · ${t.stages.length} stages</span></div>
    ${t.stages.map((st,i)=>{const gs=GUIDES.filter(g=>g.track===t.id&&g.stage===st.id);
      return `<div class="stage"><div class="stage-head"><span class="stage-no">Stage ${i+1}</span><h3>${esc(st.name)}</h3></div><div class="glist">${gs.map(g=>guideRow(g,++n)).join("")}</div></div>`}).join("")}
  </div>`;
}

/* ============ PAGES ============ */
const pages = {
  home(){
    return `
    <section class="hero"><div class="wrap hero-grid">
      <div>
        <div class="eyebrow">For newcomers &amp; founders in Canada</div>
        <h1>Canadian paperwork in <em>plain language.</em></h1>
        <p class="lede">CanadaGuide turns dense government instructions into clear, ordered steps, so you can apply, register, and settle without second-guessing every form.</p>
        <div class="actions">
          <a href="#guides" class="btn btn-dark">Browse all guides ${icon("arrow")}</a>
          <a href="#guides-newcomer" class="btn btn-ghost">Start with immigration</a>
        </div>
      </div>
      <div class="stats">
        <div class="stat"><b>40+</b><span>Step-by-step guides</span></div>
        <div class="stat"><b>12</b><span>Government agencies covered</span></div>
        <div class="stat"><b>100%</b><span>Free to read</span></div>
      </div>
    </div></section>

    <section class="alt"><div class="wrap">
      <div class="sec-head"><div><h2>Two paths. One country.</h2><p>Whether you're moving to Canada or building something here, we've mapped the route.</p></div></div>
      <div class="paths">
        <a class="path" href="#guides-newcomer"><div class="ic">${icon("compass")}</div><h3>Immigration &amp; settling in</h3><p>Express Entry, work permits, PR renewals, family sponsorship, citizenship. Every form, every fee, every deadline.</p><span class="link">Explore guides ${icon("arrow")}</span></a>
        <a class="path" href="#guides-founder"><div class="ic">${icon("building")}</div><h3>Starting &amp; running a business</h3><p>Federal vs provincial incorporation, GST/HST, payroll, hiring foreign workers, small-business taxes.</p><span class="link">Explore guides ${icon("arrow")}</span></a>
      </div>
    </div></section>

    <section><div class="wrap">
      <div class="sec-head"><h2>Most popular guides</h2><a href="#guides" class="link">All guides ${icon("arrow")}</a></div>
      <div class="cards">${["phones","banking","healthcare"].map(id=>guideCard(GUIDES.find(g=>g.id===id))).join("")}</div>
    </div></section>

    <section class="alt"><div class="wrap">
      <div class="sec-head"><h2>How CanadaGuide works</h2></div>
      <div class="how">
        <div>${icon("doc")}<h3>Plain-language steps</h3><p>Each guide is broken into ordered steps with the exact forms, fees, and timelines you need.</p></div>
        <div>${icon("shield")}<h3>Sourced from official channels</h3><p>Every guide cites IRCC, CRA, Service Canada, or provincial sources so you can verify everything.</p></div>
        <div>${icon("refresh")}<h3>Updated continuously</h3><p>Government rules change. We track updates and revise guides whenever a process changes.</p></div>
      </div>
    </div></section>

    <section class="band"><div class="wrap">
      <div><div class="eyebrow">Start your journey</div><h2>Find the right guide for where you are today.</h2></div>
      <a href="#guides" class="btn btn-red">Browse all guides ${icon("arrow")}</a>
    </div></section>`;
  },

  about(){
    return `<section class="about"><div class="wrap narrow">
      <div class="eyebrow">About</div>
      <h1>Paperwork shouldn't decide your future.</h1>
      <div class="prose">
        <p>CanadaGuide was built by people who've moved across borders and started companies in Canada. We know the feeling of staring at a 40-page government PDF, unsure which page actually applies to you.</p>
        <p>Every guide on this site is written in plain language, structured as ordered steps, and cross-referenced against the official source. We don't sell legal services. We don't take affiliate commissions on your immigration outcome. We just want the process to make sense.</p>
        <p>If a guide ever feels unclear, that's a bug. <a href="#contact" style="color:var(--red)">Tell us</a>, and we'll fix it.</p>
      </div>
    </div></section>`;
  },

  guides(track){
    const t = TRACKS.some(x=>x.id===track) ? track : "all";
    return `<div class="page-head"><div class="wrap">
      <div class="eyebrow">Guides</div>
      <h1>Every guide, in one place.</h1>
      <p class="lede">Pick your path. Guides are grouped into stages in the order you'll need them: what to gather, where to file, and how long to expect.</p>
    </div></div>
    <section class="alt" style="border-top:0"><div class="wrap">
      <div class="gtools">
        <div class="chips" role="tablist" aria-label="Choose a path">
          <button class="chip" data-tab="all" aria-pressed="${t==="all"}">All guides <span class="cnt">${GUIDES.length}</span></button>
          ${TRACKS.map(x=>`<button class="chip" data-tab="${x.id}" aria-pressed="${t===x.id}">${esc(x.name)} <span class="cnt">${trackGuides(x.id).length}</span></button>`).join("")}
        </div>
        <div class="search"><svg><use href="#i-search"/></svg><input id="gsearch" type="search" placeholder="Search guides" aria-label="Search guides"></div>
      </div>
      <div id="glist" data-tab="${t}"></div>
    </div></section>`;
  },

  guide(id){
    const g = GUIDES.find(x=>x.id===id);
    if(!g) return pages.notfound();
    const t = trackOf(g), list = trackGuides(t.id), k = list.indexOf(g);
    const prev = list[k-1], next = list[k+1];
    const doc = renderBody(g.body, g.id);
    const roadmap = t.stages.map((st,i)=>{const gs=list.filter(x=>x.stage===st.id);const cur=st.id===g.stage;
      return `<li class="${cur?"cur":""}"><span class="rs">Stage ${i+1} · ${esc(st.name)}</span>${cur?`<ul>${gs.map(x=>`<li><a href="#guide-${x.id}" ${x===g?'aria-current="page"':""}>${esc(x.title)}</a></li>`).join("")}</ul>`:""}</li>`}).join("");
    return `<div class="page-head"><div class="wrap">
      <div class="crumb"><a href="#guides-${t.id}">${icon("back")} ${esc(t.name)}</a><span class="sep">/</span><span class="eyebrow" style="letter-spacing:inherit">Stage ${stageNo(g)} · ${esc(stageOf(g).name)}</span></div>
      <h1 style="font-size:clamp(2.1rem,5vw,3.4rem);max-width:22ch">${esc(g.title)}</h1>
      <p class="lede">${esc(g.summary)}</p>
      <div class="meta" style="margin-top:1.25rem"><span class="type-tag">${TYPE_LABEL[g.type]||"Guide"}</span><span>${icon("clock")}${readMins(g)} min read</span><span>${icon("doc")}Guide ${k+1} of ${list.length}</span></div>
    </div></div>
    <section><div class="wrap detail">
      <article class="gbody">
        ${glanceHTML(g)}
        ${doc.html || `<div class="placeholder">Content coming soon.</div>`}
        <nav class="pager" aria-label="Guide navigation">
          ${prev?`<a class="next-guide" href="#guide-${prev.id}"><span class="lbl">Previous</span><span class="t">${esc(prev.title)}</span></a>`:"<span></span>"}
          ${next?`<a class="next-guide nx" href="#guide-${next.id}"><span class="lbl">Next${next.stage!==g.stage?` · Stage ${stageNo(next)}`:""}</span><span class="t">${esc(next.title)} ${icon("arrow")}</span></a>`
                :`<a class="next-guide nx" href="#guides"><span class="lbl">You've finished this path</span><span class="t">Browse all guides ${icon("arrow")}</span></a>`}
        </nav>
      </article>
      <aside class="aside">
        ${doc.checks ? `<div class="box"><h4>Your progress</h4><div class="meter"><i id="meter"></i></div><div class="meter-txt" id="meterTxt">0 of ${doc.checks} done</div></div>` : ""}
        ${doc.toc.length > 1 ? `<div class="box toc"><h4>On this page</h4><ol>${doc.toc.map(x=>`<li><button type="button" data-jump="${x.id}">${inline(x.text)}</button></li>`).join("")}</ol></div>` : ""}
        <div class="box roadmap"><h4>${esc(t.name)}</h4><ol>${roadmap}</ol><a href="#guides-${t.id}" class="link" style="margin-top:.75rem">See all stages ${icon("arrow")}</a></div>
        <div class="box warn"><h4>Important</h4><p>CanadaGuide provides information, not legal or immigration advice. For case-specific guidance, consult a licensed RCIC, lawyer, or CPA.</p></div>
        <div class="box"><h4>Something unclear?</h4><p style="margin-bottom:.75rem">Ask the community or tell us what to fix.</p><a href="#new-thread" class="link">Ask the forum ${icon("arrow")}</a></div>
      </aside>
    </div></section>`;
  },

  forum(){
    const threadRow = t => { const c=catById(t.cat);
      return `<a class="thread" href="#thread-${t.id}"><div><div class="tag">${esc(c.name)}${isMine(t)?'<span class="new-badge">Yours</span>':""}</div><h3>${esc(t.title)}</h3><div class="by">by ${esc(t.author)} · ${esc(t.date)}</div></div><div class="meta"><span>${icon("eye")}${t.views||0}</span><span>${icon("msg")}${replyCount(t)}</span></div></a>`; };
    const list = allThreads().filter(t=>forumCat==="all"||t.cat===forumCat);
    const cur = forumCat==="all" ? null : catById(forumCat);
    return `<div class="page-head"><div class="wrap">
      <div class="eyebrow">Community</div>
      <h1>Forums</h1>
      <p class="lede">Real questions from real newcomers and founders. Search the archive, share what worked for you, and get unstuck faster.</p>
    </div></div>
    <section><div class="wrap forum">
      <div style="display:flex;flex-direction:column;gap:3rem;min-width:0">
        <div><div class="sec-head" style="margin-bottom:1.25rem"><h2>Categories</h2></div>
          ${TRACKS.map(t=>`<div class="cat-group"><div class="cat-track">${esc(t.name)}</div><div class="cats">${FORUM_CATS.filter(c=>c.track===t.id).map(c=>`<button type="button" class="cat" data-fcat="${c.id}" aria-pressed="${forumCat===c.id}"><div><h3><span>/</span>${esc(c.name)}</h3><p>${esc(c.desc)}</p></div><div class="count"><b>${catCount(c)}</b>${catCount(c)===1?"Thread":"Threads"}</div></button>`).join("")}</div></div>`).join("")}
        </div>
        <div id="threads-top"><div class="sec-head" style="margin-bottom:1.25rem"><div><h2>${cur?esc(cur.name):"Recent threads"}</h2>${cur?`<p>${esc(cur.trackName)} · <button type="button" class="linkbtn" data-fcat="all">Show all threads</button></p>`:""}</div><a href="#new-thread" class="btn btn-dark">Start a thread ${icon("arrow")}</a></div>
          ${list.length?`<div class="threads">${list.map(threadRow).join("")}</div>`:`<div class="placeholder">No threads here yet. <a href="#new-thread" style="color:var(--red)">Start the first one.</a></div>`}
        </div>
      </div>
      <aside class="aside" style="top:calc(env(safe-area-inset-top,0px) + 96px)">
        <div class="box"><h4 style="font-size:1.35rem">Community guidelines</h4>
          <ul class="rules">
            <li><b>01</b><span>Be specific: share your province, status, and timeline.</span></li>
            <li><b>02</b><span>No legal or tax advice; share experience, not directives.</span></li>
            <li><b>03</b><span>Respect privacy. Never post personal documents.</span></li>
            <li><b>04</b><span>Search before posting. Your question may be answered.</span></li>
          </ul>
        </div>
        <div class="dark-box"><h4>Need a walkthrough?</h4><p>Browse step-by-step guides instead of waiting on replies.</p><a href="#guides" class="btn btn-red">Explore guides ${icon("arrow")}</a></div>
      </aside>
    </div></section>`;
  },

  newthread(){
    return `<div class="page-head"><div class="wrap">
      <div class="crumb"><a href="#forum">${icon("back")} Back</a><span class="sep">/</span><span class="eyebrow" style="letter-spacing:inherit">Forum</span></div>
      <h1 style="font-size:clamp(2.2rem,5vw,3.2rem)">Start a thread</h1>
      <p class="lede">Ask a question or share what worked for you. No account needed, just a display name.</p>
    </div></div>
    <section class="alt" style="border-top:0"><div class="wrap">
      <form class="newform form" id="threadForm" novalidate>
        <div class="form-row">
          <div class="field"><label for="t-name">Display name <i>*</i></label><input id="t-name" maxlength="40" autocomplete="nickname" required></div>
          <div class="field"><label for="t-cat">Category <i>*</i></label><select id="t-cat" required>${TRACKS.map(t=>`<optgroup label="${esc(t.name)}">${FORUM_CATS.filter(c=>c.track===t.id).map(c=>`<option value="${c.id}" ${forumCat===c.id?"selected":""}>${esc(c.name)}</option>`).join("")}</optgroup>`).join("")}</select></div>
        </div>
        <div class="field"><label for="t-title">Title <i>*</i></label><input id="t-title" maxlength="140" placeholder="e.g. How long did your PGWP take in BC?" required></div>
        <div class="field"><label for="t-body">Details <i>*</i></label><textarea id="t-body" placeholder="Share your province, status, and timeline so others can help." required></textarea></div>
        <p class="fine">Respect privacy. Never post personal documents, ID numbers, or application numbers. You can delete your thread later from this browser.</p>
        <div class="form-actions"><a href="#forum" class="btn btn-ghost">Cancel</a><button class="btn btn-dark" type="submit">Post thread ${icon("arrow")}</button></div>
        <div class="status" id="threadStatus" role="status" hidden></div>
      </form>
    </div></section>`;
  },

  thread(id){
    const t = allThreads().find(x=>x.id===id);
    if(!t) return `<section><div class="wrap narrow"><div class="eyebrow">Forum</div><h1 style="font-size:2.6rem;margin:1rem 0">This thread isn't available.</h1><p class="lede" style="margin-bottom:1.5rem">It may have been deleted by the person who posted it.</p><a href="#forum" class="link">Back to the forum ${icon("arrow")}</a></div></section>`;
    const c = catById(t.cat), rs = repliesFor(t), rc = rs.length;
    const g = t.guide && GUIDES.find(x=>x.id===t.guide);
    const confirmBox = (kind, rid="") => `<div class="confirm" data-confirm="${kind}${rid?"-"+rid:""}" hidden><span>${kind==="thread"?"Delete this thread and all its replies?":"Delete this reply?"} This can't be undone.</span><button type="button" class="btn btn-red btn-sm" data-do-delete="${kind}" data-rid="${rid}">Delete</button><button type="button" class="btn btn-ghost btn-sm" data-cancel>Cancel</button></div>`;
    return `<div class="page-head thread-head"><div class="wrap">
      <div class="crumb"><a href="#forum">${icon("back")} Back</a><span class="sep">/</span><button type="button" class="eyebrow linkbtn" data-goto-cat="${c.id}" style="letter-spacing:inherit;color:var(--red);text-decoration:none">${esc(c.name)}</button></div>
      <h1>${esc(t.title)}</h1>
      <p class="body">${esc(t.body)}</p>
      <div class="meta">
        <span>${icon("user")}${esc(t.author)}${isMine(t)?' <span class="new-badge" style="margin-left:.25rem">You</span>':""}</span>
        <span>${icon("clock")}${esc(t.date)}</span>
        <span>${icon("eye")}${t.views||0} views</span>
        <span>${icon("msg")}${rc} ${rc===1?"reply":"replies"}</span>
        ${isMine(t)?`<button type="button" class="del-btn" data-ask="thread">Delete thread</button>`:""}
      </div>
      ${isMine(t)?confirmBox("thread"):""}
      ${g?`<a class="related" href="#guide-${g.id}"><span class="lbl">Related guide</span><span>${esc(g.title)} ${icon("arrow")}</span></a>`:""}
    </div></div>
    <section><div class="wrap">
      <h2 style="font-size:1.8rem;margin-bottom:1.5rem">${rc} ${rc===1?"reply":"replies"}</h2>
      ${rc===0?`<p class="fine" style="margin-bottom:2rem">No replies yet. Be the first to share your experience.</p>`:""}
      ${rc?`<div class="replies">${rs.map(r=>`<div class="reply" ${r.id?`id="reply-${r.id}"`:""}><div class="reply-top"><div class="meta"><span>${icon("user")}${esc(r.author)}${isMine(r)?' <span class="new-badge" style="margin-left:.25rem">You</span>':""}</span><span>${icon("clock")}${esc(r.date)}</span></div>${isMine(r)?`<button type="button" class="del-btn" data-ask="reply-${r.id}">Delete</button>`:""}</div><p>${esc(r.text)}</p>${isMine(r)?confirmBox("reply",r.id):""}</div>`).join("")}</div>`:""}
      <form class="reply-box form" id="replyForm" novalidate>
        <div><h3>Add your reply</h3><p class="hint">Share experience, not legal advice. Be specific about your province and timeline.</p></div>
        <div class="field"><label for="r-name">Display name <i>*</i></label><input id="r-name" maxlength="40" autocomplete="nickname" required></div>
        <div class="field"><label for="r-text">Your reply <i>*</i></label><textarea id="r-text" required></textarea></div>
        <div class="reply-actions"><span class="fine">By posting you agree to the <a href="#forum" style="text-decoration:underline">community guidelines</a>.</span><button class="btn btn-dark" type="submit">Post reply</button></div>
        <div class="status" id="replyStatus" hidden></div>
      </form>
    </div></section>`;
  },

  contact(){
    return `<div class="page-head"><div class="wrap">
      <div class="eyebrow">Need help?</div>
      <h1>Contact us</h1>
      <p class="lede">Have questions, need to report a bug, or want to collaborate? Reach out to us.</p>
    </div></div>
    <section class="alt" style="border-top:0"><div class="wrap contact">
      <div class="panel">
        <h2>Send a message</h2>
        <form class="form" id="contactForm" novalidate>
          <div class="field"><label for="c-name">Name <i>*</i></label><input id="c-name" name="name" autocomplete="name" required></div>
          <div class="field"><label for="c-email">Email <i>*</i></label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="c-topic">Topic</label>
            <select id="c-topic" name="topic">
              <option value="" selected>Choose a topic</option>
              <option>General question</option><option>Report a bug</option><option>Guide correction</option><option>Partnership / collaboration</option><option>Other</option>
            </select></div>
          <div class="field"><label for="c-msg">Message <i>*</i></label><textarea id="c-msg" name="message" required></textarea></div>
          <input type="text" name="_honey" id="c-honey" tabindex="-1" autocomplete="off" style="display:none">
          <p class="fine">By sending, you agree to our friendly use policy. No legal advice provided.</p>
          <div><button class="btn btn-dark" type="submit" id="c-send">Send message ${icon("arrow")}</button></div>
          <div class="status" id="contactStatus" role="status" hidden></div>
        </form>
      </div>
      <div class="side">
        <div class="box"><div class="lbl">Email</div><div class="copy"><h4 id="pubEmail">${PUBLIC_EMAIL}</h4><button type="button" id="copyBtn">Copy</button></div><p>General questions, feedback, and partnership inquiries.</p></div>
        <a class="box" href="#forum"><div class="lbl">Community</div><h4>Try the forums first</h4><p>A lot of questions are already answered by other newcomers and founders.</p></a>
        <div class="box warn"><div class="lbl">Important</div><p style="margin-top:.5rem;color:var(--ink)">CanadaGuide provides information, not legal or immigration advice. For case-specific guidance, consult a licensed RCIC, lawyer, or CPA.</p></div>
      </div>
    </div></section>`;
  },

  login(){
    return `<div class="alt auth" style="border-top:0"><div class="wrap" style="width:100%;display:grid;place-items:center">
      <div class="panel">
        <h1>Login</h1>
        <form class="form" id="loginForm" novalidate>
          <div class="field"><label for="l-email">Email <i>*</i></label><input id="l-email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="l-pass">Password <i>*</i></label><input id="l-pass" type="password" autocomplete="current-password" required></div>
          <div class="row"><a href="#login">Forgot your password?</a></div>
          <button class="btn btn-red" type="submit">Login</button>
          <div class="status" id="loginStatus" hidden></div>
        </form>
        <p class="alt-link">Don't have an account? <a href="#login">Sign up</a></p>
      </div>
    </div></div>`;
  },

  notfound(){
    return `<section><div class="wrap narrow"><div class="eyebrow">404</div><h1 style="font-size:3rem;margin:1rem 0">Page not found.</h1><a href="#home" class="link">Back to home ${icon("arrow")}</a></div></section>`;
  }
};

/* ============ ROUTER ============ */
function render(){
  const h = (location.hash||"#home").slice(1) || "home";
  let html, nav = h;
  if(h.startsWith("guide-")){ html = pages.guide(h.slice(6)); nav="guides"; }
  else if(h.startsWith("thread-")){ html = pages.thread(h.slice(7)); nav="forum"; }
  else if(h==="new-thread"){ html = pages.newthread(); nav="forum"; }
  else if(h==="guides"||h.startsWith("guides-")){ html = pages.guides(h.slice(7)); nav="guides"; }
  else { if(h==="forum"){ forumCat = pendingCat || "all"; pendingCat = null; } html = (pages[h]||pages.notfound)(); }
  const app = $("#app");
  app.innerHTML = `<div class="view">${html}</div>`;
  document.querySelectorAll("[data-nav]").forEach(a=>a.classList.toggle("active", a.dataset.nav===nav));
  setMenu(false);
  window.scrollTo(0,0);
  bind();
}

function bind(){
  // guides page: path tabs + search
  const gl = $("#glist");
  if(gl){
    let tab = gl.dataset.tab || "all";
    const draw = ()=>{
      const q = $("#gsearch").value.trim().toLowerCase();
      if(q){
        const hits = GUIDES.filter(g=>(tab==="all"||g.track===tab) && (g.title+" "+g.summary+" "+g.body).toLowerCase().includes(q));
        gl.innerHTML = hits.length ? `<p class="results">${hits.length} ${hits.length===1?"guide":"guides"} found</p><div class="glist">${hits.map(searchRow).join("")}</div>`
          : `<p class="empty">No guides match "${esc(q)}". Try another word or <a href="#new-thread" style="color:var(--red)">ask the forum</a>.</p>`;
      } else {
        gl.innerHTML = TRACKS.filter(t=>tab==="all"||t.id===tab).map(trackHTML).join("");
      }
    };
    document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{
      tab=b.dataset.tab; document.querySelectorAll("[data-tab]").forEach(x=>x.setAttribute("aria-pressed",x===b));
      try{history.replaceState(null,"",tab==="all"?"#guides":"#guides-"+tab)}catch(e){}
      draw();
    });
    $("#gsearch").oninput = draw;
    draw();
  }
  // "On this page" jump links
  document.querySelectorAll("[data-jump]").forEach(b=>b.onclick=()=>{
    const el=document.getElementById(b.dataset.jump);
    if(el) window.scrollTo({top:el.getBoundingClientRect().top+scrollY-90,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
  });
  // progress tracker on guide pages
  const boxes = [...document.querySelectorAll("[data-track]")];
  if(boxes.length){
    const upd=()=>{const d=boxes.filter(b=>b.checked).length;$("#meter").style.width=(d/boxes.length*100)+"%";$("#meterTxt").textContent=`${d} of ${boxes.length} done`;
      try{localStorage.setItem("cg-"+location.hash,JSON.stringify(boxes.map(b=>b.checked)))}catch(e){}};
    try{const s=JSON.parse(localStorage.getItem("cg-"+location.hash)||"[]");boxes.forEach((b,i)=>b.checked=!!s[i])}catch(e){}
    boxes.forEach(b=>b.onchange=upd); upd();
  }

  // contact form → FormSubmit
  const cf = $("#contactForm");
  if(cf) cf.onsubmit = async e=>{
    e.preventDefault();
    const st=$("#contactStatus"), btn=$("#c-send");
    const name=$("#c-name").value.trim(), email=$("#c-email").value.trim(), msg=$("#c-msg").value.trim();
    const show=(t,ok)=>{st.hidden=false;st.className="status "+(ok?"ok":"err");st.textContent=t};
    if(!name||!email||!msg) return show("Please fill in your name, email, and message.",false);
    if(!/^\S+@\S+\.\S+$/.test(email)) return show("Please enter a valid email address, like name@example.com.",false);
    if($("#c-honey").value) return;
    btn.disabled=true; btn.firstChild.textContent="Sending… ";
    try{
      const r = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`,{
        method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({name,email,topic:$("#c-topic").value||"Not specified",message:msg,
          _subject:`CanadaGuide contact: ${$("#c-topic").value||"New message"}`,_template:"table",_captcha:"false",_replyto:email})
      });
      const j = await r.json().catch(()=>({}));
      if(r.ok && String(j.success)!=="false"){ cf.reset(); show("Thanks! Your message was sent. We'll reply by email.",true); }
      else throw new Error(j.message||"send failed");
    }catch(err){
      show(`Your message couldn't be sent from here. Please email ${PUBLIC_EMAIL} directly, or try again once the site is live.`,false);
    }finally{ btn.disabled=false; btn.firstChild.textContent="Send message "; }
  };

  const cb = $("#copyBtn");
  if(cb) cb.onclick=()=>{
    const done=()=>{cb.textContent="Copied";setTimeout(()=>cb.textContent="Copy",1500)};
    try{navigator.clipboard.writeText(PUBLIC_EMAIL).then(done,()=>{getSelection().selectAllChildren($("#pubEmail"))})}catch(e){getSelection().selectAllChildren($("#pubEmail"))}
  };

  // remember display name between posts
  let savedName=""; try{savedName=localStorage.getItem("cg-name")||""}catch(e){}
  ["#r-name","#t-name"].forEach(s=>{const el=$(s); if(el&&!el.value) el.value=savedName;});
  const rememberName=n=>{try{localStorage.setItem("cg-name",n)}catch(e){}};

  const tf=$("#threadForm");
  if(tf) tf.onsubmit=e=>{
    e.preventDefault();
    const s=$("#threadStatus"), name=$("#t-name").value.trim(), title=$("#t-title").value.trim(), body=$("#t-body").value.trim();
    if(!name||!title||!body){s.hidden=false;s.className="status err";s.textContent="Add a display name, a title, and some details to post your thread.";return}
    const id="u"+Date.now().toString(36);
    FORUM.threads.unshift({id,owner:MY_ID,cat:$("#t-cat").value,title,body,author:name,date:today(),views:0});
    saveForum(FORUM); rememberName(name);
    location.hash="thread-"+id;
  };

  const rf=$("#replyForm");
  if(rf) rf.onsubmit=e=>{
    e.preventDefault();
    const s=$("#replyStatus"), name=$("#r-name").value.trim(), text=$("#r-text").value.trim();
    if(!name||!text){s.hidden=false;s.className="status err";s.textContent="Add a display name and your reply to post.";return}
    const id=location.hash.slice(8);
    (FORUM.replies[id] ||= []).push({id:"r"+Date.now().toString(36),owner:MY_ID,author:name,text,date:today()});
    saveForum(FORUM); rememberName(name);
    render();
    setTimeout(()=>{const r=document.querySelectorAll(".reply");r.length&&r[r.length-1].scrollIntoView({block:"center"})},50);
  };
  // forum: category filter
  document.querySelectorAll("[data-fcat]").forEach(b=>b.onclick=()=>{
    forumCat = forumCat===b.dataset.fcat ? "all" : b.dataset.fcat;
    $("#app").innerHTML=`<div class="view">${pages.forum()}</div>`; bind();
    const top=$("#threads-top"); if(top && forumCat!=="all") window.scrollTo({top:top.getBoundingClientRect().top+scrollY-90});
  });
  document.querySelectorAll("[data-goto-cat]").forEach(b=>b.onclick=()=>{ pendingCat=b.dataset.gotoCat; location.hash="forum"; });

  // forum: delete your own thread or reply (inline confirmation)
  document.querySelectorAll("[data-ask]").forEach(b=>b.onclick=()=>{
    document.querySelectorAll("[data-confirm]").forEach(c=>c.hidden=true);
    const box=document.querySelector(`[data-confirm="${b.dataset.ask}"]`); if(box){ box.hidden=false; box.querySelector("[data-do-delete]").focus(); }
  });
  document.querySelectorAll("[data-cancel]").forEach(b=>b.onclick=()=>{ b.closest("[data-confirm]").hidden=true; });
  document.querySelectorAll("[data-do-delete]").forEach(b=>b.onclick=()=>{
    const tid=location.hash.slice(8);
    if(b.dataset.doDelete==="thread"){ deleteThread(tid); location.hash="forum"; }
    else { deleteReply(tid,b.dataset.rid); render(); }
  });

  const lf=$("#loginForm");
  if(lf) lf.onsubmit=e=>{e.preventDefault();const s=$("#loginStatus");s.hidden=false;
    if(!$("#l-email").value||!$("#l-pass").value){s.className="status err";s.textContent="Enter your email and password to log in.";return}
    s.className="status err";s.textContent="Accounts are coming soon. For now, all guides are free to read without logging in."};
}

function setMenu(open){
  $("#hdr").classList.toggle("open",open);
  document.body.classList.toggle("lock",open);
  $("#burger").setAttribute("aria-expanded",open);
  $("#burger").setAttribute("aria-label",open?"Close menu":"Open menu");
}
$("#burger").onclick=()=>setMenu(!$("#hdr").classList.contains("open"));
$("#mmenu").addEventListener("click",e=>{ if(e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown",e=>{ if(e.key==="Escape") setMenu(false); });
window.addEventListener("resize",()=>{ if(innerWidth>820) setMenu(false); });
$("#yr").textContent=new Date().getFullYear();
window.addEventListener("hashchange",render);
render();
