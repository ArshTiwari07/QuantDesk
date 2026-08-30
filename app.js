/* ══════════════ CONFIG — paste your Supabase project details here ══════════════ */
const SUPABASE = {
  url: "https://awqhwzpqfbwzimpjfxzs.supabase.co",
  anonKey: "sb_publishable_a1aEZqNG_EOXLI9FqaoA-Q_Mz6Ak6TD"
};
/* With both filled + this file hosted on the web, every user gets a cloud
   account (email + password) and one global leaderboard. Left empty, the
   tracker runs in local mode on this device. */

/* ────────────── RESOURCES ────────────── */
const R = {
  zeta:["Zetamac","https://arithmetic.zetamac.com"],
  ryb:["Rankyourbrain","https://www.rankyourbrain.com/mental-math/mental-math-test-difficult"],
  m6041:["MIT 6.041","https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/video_galleries/video-lectures/"],
  brain:["Brainstellar","https://brainstellar.com"],
  euler:["Project Euler","https://projecteuler.net/archives"],
  qg:["QuantGuide","https://www.quantguide.io"],
  kelly:["Kelly criterion","https://en.wikipedia.org/wiki/Kelly_criterion"],
  invOB:["Order book basics","https://www.investopedia.com/terms/o/order-book.asp"],
  cme:["CME Education","https://www.cmegroup.com/education.html"],
  khanF:["Khan Academy derivatives","https://www.khanacademy.org/economics-finance-domain/core-finance/derivative-securities"],
  yaleGT:["Yale ECON 159","https://oyc.yale.edu/economics/econ-159"],
  jsp:["Jane Street puzzles","https://www.janestreet.com/puzzles/"],
  imc:["IMC Prosperity","https://prosperity.imc.com"],
  sow:["StreetOfWalls","https://www.streetofwalls.com/finance-training-courses/quantitative-hedge-fund-training/brain-teasers/"],
  strang:["MIT 18.06 Strang","https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/video_galleries/video-lectures/"],
  b3b1:["3Blue1Brown LA","https://www.3blue1brown.com/topics/linear-algebra"],
  m18650:["MIT 18.650","https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/"],
  openintro:["OpenIntro Statistics","https://www.openintro.org/book/os/"],
  sq:["StatQuest","https://www.youtube.com/@statquest"],
  fpp3:["FPP3 (free book)","https://otexts.com/fpp3/"],
  cs229:["CS229 notes","https://cs229.stanford.edu/main_notes.pdf"],
  ng:["Andrew Ng ML","https://www.coursera.org/specializations/machine-learning-introduction"],
  wq:["WorldQuant BRAIN","https://platform.worldquantbrain.com"],
  alphas:["101 Formulaic Alphas","https://arxiv.org/abs/1601.00991"],
  kaggle:["Kaggle Optiver","https://www.kaggle.com/competitions?search=optiver"],
  qfin:["arXiv q-fin","https://arxiv.org/list/q-fin/recent"],
  lcpp:["learncpp.com","https://www.learncpp.com"],
  cppcon:["CppCon Back to Basics","https://www.youtube.com/@CppCon/search?query=back%20to%20basics"],
  cses:["CSES","https://cses.fi/problemset/"],
  cf:["Codeforces","https://codeforces.com"],
  cpalg:["cp-algorithms","https://cp-algorithms.com"],
  err:["Errichto DP","https://www.youtube.com/watch?v=YBSt1jYwVfU"],
  mem:["…About Memory (PDF)","https://people.freebsd.org/~lstewart/articles/cpumemory.pdf"],
  cook:["Carl Cook µs talk","https://www.youtube.com/watch?v=NH1Tta7purM"],
  gh:["GitHub","https://github.com"]
};

/* ────────────── CURRICULUM (compact spec → expands to daily fills) ──────────────
   item = [group label, resKeys, ptsEach, count, unitLabel, startNum]
   count > 1 expands into that many separate daily checkboxes.           */
const SPEC = {
  trader:{ name:"TRADER", ticker:"TRD",
    note:"Mental-math speed + probability intuition + game sense. Highest-volume undergrad hiring: Optiver, Da Vinci, Tower, Graviton, NK Securities.",
    weeks:[
      {t:"Mental Math Bootcamp",items:[
        ["Zetamac session — post your score",["zeta"],2,7,"Day",1],
        ["Rankyourbrain difficult run",["ryb"],2,4,"Run",1],
        ["2-digit multiplication + squares drill (20 min)",["ryb"],2,3,"Drill",1],
      ]},
      {t:"Probability I — Foundations",items:[
        ["MIT 6.041 — counting & conditioning",["m6041"],4,6,"Lecture",1],
        ["Brainstellar easy — 3 puzzles on paper",["brain"],3,5,"Set",1],
        ["Zetamac — hold 40+",["zeta"],2,4,"Day",1],
      ]},
      {t:"Probability II — Bayes & Expectation",items:[
        ["MIT 6.041 — Bayes to expectation",["m6041"],4,6,"Lecture",7],
        ["Brainstellar medium — 3 puzzles, full reasoning",["brain"],4,5,"Set",1],
        ["Cold-redo every wrong puzzle (30 min)",["brain"],3,2,"Session",1],
      ]},
      {t:"Distributions & CLT",items:[
        ["MIT 6.041 — distributions & limit theorems",["m6041"],4,7,"Lecture",13],
        ["QuantGuide probability — 5 questions",["qg"],3,4,"Set",1],
        ["Zetamac — push to 50+",["zeta"],2,4,"Day",1],
      ]},
      {t:"Combinatorics & Counting",items:[
        ["Project Euler",["euler"],2,10,"Problem",1],
        ["Brainstellar hard — 2 puzzles",["brain"],4,5,"Set",1],
      ]},
      {t:"Markov Chains & Random Walks",items:[
        ["6.041 Markov chains + your own notes",["m6041"],5,2,"Lecture",16],
        ["Gambler's ruin — recursion / martingale / states",["brain"],5,3,"Method",1],
        ["Random-walk puzzles — 3 problems",["brain"],4,2,"Set",1],
      ]},
      {t:"EV Games & Betting",items:[
        ["Kelly criterion — read, then derive yourself",["kelly"],4,2,"Part",1],
        ["Market-making game with a friend — 5 rounds",["qg"],4,4,"Session",1],
        ["QuantGuide EV & betting — 5 questions",["qg"],3,3,"Set",1],
      ]},
      {t:"Market Microstructure",items:[
        ["Order books, bid-ask, market vs limit",["invOB"],3,3,"Part",1],
        ["CME Education module",["cme"],3,4,"Module",1],
        ["Explain adverse selection out loud, no notes",["invOB"],5,1],
      ]},
      {t:"Options & Futures Payoffs",items:[
        ["Khan Academy derivatives — video block",["khanF"],3,5,"Block",1],
        ["Payoff diagrams from memory",["khanF"],4,3,"Sheet",1],
        ["Put-call parity — derive + explain",["khanF"],5,1],
      ]},
      {t:"Game Theory",items:[
        ["Yale ECON 159 — dominance to Nash",["yaleGT"],4,5,"Lecture",1],
        ["Auctions & winner's curse",["yaleGT"],4,2,"Lecture",24],
      ]},
      {t:"Interview Simulation",items:[
        ["StreetOfWalls — timed set of 10",["sow"],4,4,"Set",1],
        ["Mock interview — solve out loud, get grilled",["qg"],8,3,"Mock",1],
        ["Zetamac final check — 55+",["zeta"],2,3,"Day",1],
      ]},
      {t:"Ship It — Competitions & Apps",items:[
        ["IMC Prosperity round (live or archive)",["imc"],8,3,"Round",1],
        ["Jane Street monthly puzzle attempt",["jsp"],6,1],
        ["Off-campus applications — batch of 3–4 firms",["gh"],5,3,"Batch",1],
      ]},
    ]},
  researcher:{ name:"RESEARCHER", ticker:"RES",
    note:"Stats depth + ML rigor + demonstrated alpha research. Hardest undergrad track — WorldQuant BRAIN is the open door from any college.",
    weeks:[
      {t:"Linear Algebra I",items:[
        ["3Blue1Brown Essence of LA",["b3b1"],2,8,"Chapter",1],
        ["Strang 18.06",["strang"],4,4,"Lecture",1],
      ]},
      {t:"Linear Algebra II — Eigen & SVD",items:[
        ["Strang — eigenvalues to SVD",["strang"],4,5,"Lecture",21],
        ["Hand-compute a 2×2 SVD; explain PCA from it",["strang"],5,2,"Part",1],
      ]},
      {t:"Probability Core",items:[
        ["MIT 6.041",["m6041"],4,8,"Lecture",1],
        ["Brainstellar medium — 3 puzzles",["brain"],4,3,"Set",1],
      ]},
      {t:"Statistical Inference",items:[
        ["OpenIntro Statistics — inference & testing",["openintro"],5,3,"Chapter",5],
        ["MIT 18.650",["m18650"],4,4,"Lecture",1],
      ]},
      {t:"Regression, Properly",items:[
        ["OLS assumptions + Gauss-Markov — derive it",["m18650"],5,3,"Session",1],
        ["StatQuest regression",["sq"],2,5,"Video",1],
        ["Explain R² and bias-variance out loud",["sq"],4,1],
      ]},
      {t:"Time Series",items:[
        ["FPP3 — decomposition & features",["fpp3"],4,5,"Chapter",1],
        ["FPP3 ch.9 ARIMA + stationarity",["fpp3"],4,3,"Part",1],
      ]},
      {t:"Machine Learning I",items:[
        ["Andrew Ng ML (audit)",["ng"],5,3,"Week",1],
        ["CS229 notes — linear models & regularization",["cs229"],4,3,"Part",1],
      ]},
      {t:"Machine Learning II",items:[
        ["StatQuest — trees, forests, boosting",["sq"],3,5,"Video",1],
        ["Time-series CV pitfalls note (leakage!)",["fpp3"],5,2,"Draft",1],
      ]},
      {t:"Alpha Research Onboarding",items:[
        ["WorldQuant BRAIN tutorial",["wq"],3,5,"Module",1],
        ["'101 Formulaic Alphas' read",["alphas"],4,2,"Half",1],
        ["Submit an alpha",["wq"],5,3,"Alpha",1],
      ]},
      {t:"BRAIN Grind",items:[
        ["Submit + iterate on IR/turnover",["wq"],5,5,"Alpha",1],
        ["Reverse-engineer paper alphas — batch of 3",["alphas"],5,3,"Batch",1],
      ]},
      {t:"Kaggle Finance",items:[
        ["Past Optiver comp notebook",["kaggle"],6,4,"Milestone",1],
        ["Feature-engineering writeup: worked / leaked",["kaggle"],6,2,"Draft",1],
      ]},
      {t:"Portfolio & Papers",items:[
        ["arXiv q-fin paper + 1-page summary",["qfin"],6,3,"Paper",1],
        ["GitHub writeups + resume pass",["gh"],6,2,"Pass",1],
        ["Applications — WQ consultant + research roles",["wq"],5,2,"Batch",1],
      ]},
    ]},
  developer:{ name:"DEVELOPER", ticker:"DEV",
    note:"C++ mastery + CF Expert (1600+) + one low-latency project you can defend line by line. The most realistic HFT entry from any college.",
    weeks:[
      {t:"C++ Core",items:[
        ["learncpp — types to functions",["lcpp"],3,8,"Chapter",1],
        ["CSES intro — 3 problems",["cses"],3,5,"Set",1],
      ]},
      {t:"C++ Memory & OOP",items:[
        ["learncpp — refs, pointers, classes, RAII",["lcpp"],3,7,"Chapter",9],
        ["Build a dynamic array + string class",["lcpp"],6,3,"Milestone",1],
      ]},
      {t:"Modern C++",items:[
        ["Move semantics / smart ptrs / templates",["lcpp"],4,4,"Topic",1],
        ["CppCon Back to Basics talk + notes",["cppcon"],4,3,"Talk",1],
      ]},
      {t:"DSA I — Sorting, Searching, STL",items:[
        ["CSES sorting & searching — 3 problems",["cses"],3,5,"Set",1],
        ["First rated contest (Div 3/4)",["cf"],6,1],
        ["Full upsolve of that contest",["cf"],4,1],
      ]},
      {t:"DSA II — Dynamic Programming",items:[
        ["Errichto DP lecture",["err"],3,2,"Part",1],
        ["CSES DP — 2 problems",["cses"],4,6,"Set",1],
        ["Rated contest #2",["cf"],6,1],
      ]},
      {t:"DSA III — Graphs",items:[
        ["cp-algorithms — BFS/DFS/paths/DSU",["cpalg"],3,4,"Topic",1],
        ["CSES graphs — 2 problems",["cses"],4,6,"Set",1],
      ]},
      {t:"Rating Grind",items:[
        ["4 problems at your rating +150",["cf"],4,5,"Set",1],
        ["Rated or virtual contest + upsolve",["cf"],6,3,"Contest",1],
      ]},
      {t:"Concurrency",items:[
        ["Threads / mutexes / atomics",["lcpp","cppcon"],4,3,"Topic",1],
        ["Thread-safe queue: build + benchmark",["gh"],6,3,"Milestone",1],
      ]},
      {t:"Low-Latency Mindset",items:[
        ["'…About Memory'",["mem"],4,4,"Section",1],
        ["Carl Cook talk + cache-friendly refactor",["cook"],5,2,"Part",1],
      ]},
      {t:"Project I — Order Book",items:[
        ["Limit order book / matching engine",["gh"],8,4,"Milestone",1],
        ["Benchmark + README with real numbers",["gh"],6,1],
      ]},
      {t:"Project II — Backtester / Feed Handler",items:[
        ["Build milestone",["gh"],8,4,"Milestone",1],
        ["Profile + optimize one bottleneck",["gh"],6,1],
        ["Rated contest — hold or gain",["cf"],6,1],
      ]},
      {t:"Interview Closeout",items:[
        ["Project defense run-through, out loud",["gh"],6,2,"Run",1],
        ["Mock timed round",["cf"],5,2,"Round",1],
        ["HFT dev applications — batch of 3",["gh"],5,3,"Batch",1],
      ]},
    ]}
};

/* expand spec → flat task lists (stable order = stable keys) */
const TRACKS = {};
for(const tr in SPEC){
  TRACKS[tr] = {name:SPEC[tr].name, ticker:SPEC[tr].ticker, note:SPEC[tr].note, weeks:[]};
  SPEC[tr].weeks.forEach(wk=>{
    const groups=[];
    wk.items.forEach(it=>{
      const [label,res,pts,count=1,unit="Part",start=1]=it;
      const subs=[];
      if(count<=1) subs.push({name:label,pts});
      else for(let n=0;n<count;n++) subs.push({name:label+" — "+unit+" "+(start+n),pts});
      groups.push({label,res,subs});
    });
    TRACKS[tr].weeks.push({t:wk.t,groups});
  });
}

const RANKS=[[0,"Intern"],[150,"Jr Analyst"],[350,"Analyst"],[650,"Associate"],[1000,"Sr Trader"],[1450,"Desk Head"],[1900,"Partner"]];
const WEEK_BONUS=25;

/* ────────────── MODE & STORAGE ────────────── */
const cloudOn = !!(SUPABASE.url && SUPABASE.anonKey);
const hasStore = typeof window.storage !== "undefined";
let user=null, userId=null, token=null;
let state=blankState();
function blankState(){return {checked:{}, lastDay:"", streak:0, activity:{}}}
function hashPin(s){let h=5381;for(let i=0;i<s.length;i++){h=((h<<5)+h+s.charCodeAt(i))|0}return String(h)}
const $=id=>document.getElementById(id);
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

async function localGet(key,shared){ if(!hasStore) return null; try{const r=await window.storage.get(key,!!shared);return r?r.value:null}catch(e){return null} }
async function localSet(key,val,shared){ if(!hasStore) return; try{await window.storage.set(key,val,!!shared)}catch(e){} }

/* ────────────── SUPABASE (REST, no SDK needed) ────────────── */
async function sbAuth(path, body){
  const res=await fetch(SUPABASE.url+"/auth/v1/"+path,{
    method:"POST",
    headers:{"Content-Type":"application/json","apikey":SUPABASE.anonKey},
    body:JSON.stringify(body)
  });
  const data=await res.json();
  if(!res.ok) throw new Error(data.msg||data.error_description||data.message||"auth failed");
  return data;
}
async function sbRest(path, opts={}){
  const res=await fetch(SUPABASE.url+"/rest/v1/"+path,{
    method:opts.method||"GET",
    headers:Object.assign(
      token
        ? {"apikey":SUPABASE.anonKey,"Authorization":"Bearer "+token,
           "Content-Type":"application/json","Prefer":opts.prefer||"return=minimal"}
        : {"apikey":SUPABASE.anonKey,
           "Content-Type":"application/json","Prefer":opts.prefer||"return=minimal"},
      opts.headers||{}),
    body:opts.body?JSON.stringify(opts.body):undefined
  });
  if(!res.ok){const t=await res.text();throw new Error(t.slice(0,180))}
  const txt=await res.text();
  return txt?JSON.parse(txt):null;
}

/* ────────────── SAVE (debounced, mode-aware) ────────────── */
let saveTimer=null;
function saveState(){
  clearTimeout(saveTimer);
  saveTimer=setTimeout(async ()=>{
    const pts=totals().pts;
    if(cloudOn && userId){
      try{
        await sbRest("profiles?id=eq."+userId,{method:"PATCH",body:{state,points:pts,updated_at:new Date().toISOString()}});
      }catch(e){toast("SYNC FAILED — RETRYING","err");setTimeout(saveState,3000)}
    }else if(user){
      localSet("qt-state:"+user, JSON.stringify(state));
    }
  },500);
}

/* ────────────── AUTH FLOW ────────────── */
let gateMode="signin";
function paintGate(){
  $("gateMode").textContent=cloudOn?"CLOUD MODE":"LOCAL MODE";
  $("gateMode").className="gate-mode "+(cloudOn?"cloud":"local");
  $("fEmailWrap").style.display=cloudOn?"block":"none";
  $("fUserWrap").style.display=(cloudOn&&gateMode==="signin")?"none":"block";
  $("gPinLbl").textContent=cloudOn?"Password (min 6 chars)":"PIN (4–6 digits)";
  $("gPin").placeholder=cloudOn?"••••••••":"••••";
  $("gateBtn").textContent=gateMode==="signin"?"SIGN IN":(cloudOn?"CREATE ACCOUNT":"CREATE DESK");
  $("gateSub").textContent=gateMode==="signin"
    ? "Sign in — your fills, points, streak and heatmap load from your account."
    : (cloudOn?"Create your account. Desk name shows on the global leaderboard.":"Pick a desk name and PIN for this device.");
  $("gateSwitch").innerHTML=gateMode==="signin"
    ? 'New here? <button id="gateToggle">Create an account</button>'
    : 'Already registered? <button id="gateToggle">Sign in</button>';
  $("gateToggle").onclick=()=>{gateMode=gateMode==="signin"?"create":"signin";$("gateErr").textContent="";paintGate()};
  $("gateFine").textContent=cloudOn
    ? "Accounts live in this site's Supabase project. Your desk name and points are public on the leaderboard; your email is not. Use a throwaway password, not one you use elsewhere."
    : "Local mode: profiles live on this device only. Configure Supabase (see instructions in the file header) to sync every user to one global board.";
}

async function submitGate(){
  const err=$("gateErr"); err.textContent="";
  const btn=$("gateBtn"); btn.disabled=true;
  try{
    if(cloudOn){
      const email=$("gEmail").value.trim();
      const pass=$("gPin").value;
      if(!/^\S+@\S+\.\S+$/.test(email)) throw new Error("valid email required");
      if(pass.length<6) throw new Error("password: 6+ characters");
      if(gateMode==="create"){
        const uname=$("gName").value.trim().replace(/[\s/\\'"]/g,"_").slice(0,16);
        if(uname.length<2) throw new Error("desk name: 2–16 characters");
        const d=await sbAuth("signup",{email,password:pass});
        token=d.access_token; userId=(d.user&&d.user.id)||d.id;
        if(!token) throw new Error("check Supabase: disable 'Confirm email' in Auth settings, then sign in");
        await sbRest("profiles",{method:"POST",body:{id:userId,username:uname,points:0,state:blankState()}});
        user=uname; state=blankState();
      }else{
        const d=await sbAuth("token?grant_type=password",{email,password:pass});
        token=d.access_token; userId=d.user.id;
        const rows=await sbRest("profiles?id=eq."+userId+"&select=username,points,state",{prefer:"return=representation"});
        if(!rows||!rows.length) throw new Error("profile missing — sign up again");
        user=rows[0].username;
        state=Object.assign(blankState(),rows[0].state||{});
      }
    }else{
      const name=$("gName").value.trim().replace(/[\s/\\'"]/g,"_").slice(0,16);
      const pin=$("gPin").value.trim();
      if(!name) throw new Error("desk name required");
      if(!/^\d{4,6}$/.test(pin)) throw new Error("PIN must be 4–6 digits");
      const profRaw=await localGet("qt-profiles");
      const profiles=profRaw?JSON.parse(profRaw):{};
      if(gateMode==="create"){
        if(profiles[name]) throw new Error("desk name taken on this device — sign in");
        profiles[name]={pin:hashPin(pin)};
        await localSet("qt-profiles",JSON.stringify(profiles));
        state=blankState();
        await localSet("qt-state:"+name,JSON.stringify(state));
      }else{
        if(!profiles[name]) throw new Error("no such desk here — create one");
        if(profiles[name].pin!==hashPin(pin)) throw new Error("wrong PIN");
        const raw=await localGet("qt-state:"+name);
        state=raw?Object.assign(blankState(),JSON.parse(raw)):blankState();
      }
      user=name;
      await localSet("qt-session",name);
    }
    enterDesk();
  }catch(e){err.textContent="ERR: "+e.message}
  btn.disabled=false;
}

function enterDesk(){
  $("gate").classList.add("hidden");
  $("whoami").innerHTML='LOGGED IN AS <b>'+escapeHtml(user)+'</b> <span class="mode">['+(cloudOn?"CLOUD":"LOCAL")+']</span><button id="logoutBtn">LOG OUT</button>';
  $("logoutBtn").onclick=logout;
  renderAll(); schedulePush();
}
async function logout(){
  if(!cloudOn && hasStore) await localSet("qt-session","");
  user=null;userId=null;token=null;state=blankState();
  $("gName").value="";$("gPin").value="";if($("gEmail"))$("gEmail").value="";
  gateMode="signin";paintGate();
  $("gate").classList.remove("hidden");
}

/* ────────────── POINTS ────────────── */
function taskKey(tr,w,g,i){return tr+":"+w+":"+g+":"+i}
function weekPoints(tr,w){
  const wk=TRACKS[tr].weeks[w];
  let pts=0,done=0,total=0;
  wk.groups.forEach((grp,g)=>grp.subs.forEach((s,i)=>{
    total++;
    if(state.checked[taskKey(tr,w,g,i)]){pts+=s.pts;done++}
  }));
  const bonus=done===total?WEEK_BONUS:0;
  return {pts:pts+bonus,done,total,bonus};
}
function trackStats(tr){
  let pts=0,done=0,total=0;
  TRACKS[tr].weeks.forEach((_,w)=>{const s=weekPoints(tr,w);pts+=s.pts;done+=s.done;total+=s.total});
  return {pts,done,total,pct:total?Math.round(100*done/total):0};
}
function totals(){
  let pts=0,done=0,total=0;
  for(const tr in TRACKS){const s=trackStats(tr);pts+=s.pts;done+=s.done;total+=s.total}
  return {pts,done,total};
}
function rankFor(pts){let r=RANKS[0][1];for(const [m,n] of RANKS) if(pts>=m) r=n;return r}
function nextRankGap(pts){for(const [m] of RANKS) if(pts<m) return m-pts;return 0}
function todayKey(){return new Date().toISOString().slice(0,10)}

/* ────────────── RENDER ────────────── */
let activeTrack="trader";
function renderTabs(){
  $("tabs").innerHTML=Object.keys(TRACKS).map(tr=>{
    const s=trackStats(tr);
    return '<button class="tab '+(tr===activeTrack?'active':'')+'" role="tab" aria-selected="'+(tr===activeTrack)+'" data-tr="'+tr+'">'+TRACKS[tr].name+' <span class="pct">'+s.pct+'%</span></button>';
  }).join("");
  $("tabs").querySelectorAll(".tab").forEach(b=>b.onclick=()=>{activeTrack=b.dataset.tr;renderAll()});
  $("trackNote").textContent=TRACKS[activeTrack].note;
  const n=state.activity[todayKey()]||0;
  $("todayLine").innerHTML="TODAY: <b>"+n+" fill"+(n===1?"":"s")+"</b> booked — every fill paints the heatmap. Aim for 2–3 a day, not 15 on Sunday.";
}

function renderWeeks(){
  const tr=activeTrack, openStates={};
  document.querySelectorAll("details.week").forEach((d,i)=>openStates[i]=d.open);
  $("weeks").innerHTML=TRACKS[tr].weeks.map((wk,w)=>{
    const s=weekPoints(tr,w);
    const pct=s.total?Math.round(100*s.done/s.total):0;
    const groupsHtml=wk.groups.map((grp,g)=>{
      const links=grp.res.map(r=>'<a href="'+R[r][1]+'" target="_blank" rel="noopener">'+R[r][0]+' ↗</a>').join("");
      const rows=grp.subs.map((sub,i)=>{
        const k=taskKey(tr,w,g,i), filled=!!state.checked[k];
        return '<div class="task '+(filled?'filled':'')+'">'
          +'<button class="fill-btn" data-k="'+k+'" data-p="'+sub.pts+'" aria-pressed="'+filled+'">'+(filled?'FILLED':'FILL')+'</button>'
          +'<div class="task-name">'+escapeHtml(sub.name)+'</div>'
          +'<div class="task-pts">+'+sub.pts+'</div></div>';
      }).join("");
      return '<div class="tgroup">'+escapeHtml(grp.label)+' '+links+'</div>'+rows;
    }).join("");
    return '<details class="week '+(s.done===s.total?'done':'')+'" '+(openStates[w]?'open':'')+'>'
      +'<summary><span class="wk-tag">W'+String(w+1).padStart(2,"0")+'</span>'
      +'<span class="wk-title">'+escapeHtml(wk.t)+'</span>'
      +'<span class="depth"><i style="width:'+pct+'%"></i></span>'
      +'<span class="wk-pts">'+s.pts+' pts</span></summary>'
      +'<div class="tasks">'+groupsHtml
      +'<div class="bonus '+(s.bonus?'won':'')+'">'+(s.bonus?'✓ WEEK CLEARED — BONUS +'+WEEK_BONUS+' BOOKED':'Clear all '+s.total+' fills → BONUS +'+WEEK_BONUS)+'</div></div></details>';
  }).join("");
  $("weeks").querySelectorAll(".fill-btn").forEach(b=>b.onclick=()=>toggle(b.dataset.k,+b.dataset.p));
}

function renderStats(){
  const t=totals();
  $("stPts").textContent="+"+t.pts;
  $("stRank").textContent=rankFor(t.pts);
  $("stToday").textContent=state.activity[todayKey()]||0;
  $("stStreak").innerHTML=state.streak+'<small> days</small>';
  $("ladder").innerHTML=RANKS.map(([min,name])=>{
    const cls=name===rankFor(t.pts)?"me":(t.pts>=min?"past":"");
    return '<div class="row '+cls+'"><span>'+name+'</span><span>'+min+'+</span></div>';
  }).join("");
  const parts=['<b>QUANT/DESK</b>','P&amp;L <span class="up">+'+t.pts+'</span>','RANK <b>'+rankFor(t.pts).toUpperCase()+'</b>'];
  for(const tr in TRACKS){
    const s=trackStats(tr);
    parts.push(TRACKS[tr].ticker+' <span class="'+(s.pct>=50?'up':'dn')+'">'+s.pct+'% '+(s.pct>=50?'▲':'▼')+'</span>');
  }
  parts.push('STREAK <span class="'+(state.streak>0?'up':'dn')+'">'+state.streak+'D</span>','NEXT RANK IN <b>'+nextRankGap(t.pts)+'</b> PTS');
  $("tape").innerHTML=(parts.join("<span></span>")+"<span></span>").repeat(2);
}

/* ────────────── HEATMAP (fill-linked, 5 levels) ────────────── */
function lvlFor(n){return n===0?0 : n<=2?1 : n<=5?2 : n<=9?3 : 4}
function renderHeatmap(){
  const days=126, today=new Date(); today.setHours(0,0,0,0);
  const tKey=todayKey();
  const start=new Date(today.getTime()-(days-1)*864e5);
  start.setDate(start.getDate()-start.getDay());
  const cells=[]; let total=0;
  for(let d=new Date(start); d<=today; d.setDate(d.getDate()+1)){
    const key=d.toISOString().slice(0,10);
    const n=state.activity[key]||0; total+=n;
    cells.push('<i class="l'+lvlFor(n)+(key===tKey?' today':'')+'" title="'+key+': '+n+' fill'+(n===1?'':'s')+'"></i>');
  }
  $("heatmap").innerHTML=cells.join("");
  $("hmTotal").textContent=total+' fill'+(total===1?'':'s')+' in 18 weeks';
}

function renderAll(){renderTabs();renderWeeks();renderStats();renderHeatmap();renderLeaderboard()}

/* ────────────── INTERACTION ────────────── */
function toggle(k,p){
  const was=!!state.checked[k], today=todayKey();
  if(was){
    delete state.checked[k];
    if(state.activity[today]>0) state.activity[today]--;
  }else{
    state.checked[k]=1;
    state.activity[today]=(state.activity[today]||0)+1;
    touchStreak(today);
  }
  saveState(); renderAll(); schedulePush();
  if(!was){
    const n=state.activity[today];
    toast('ORDER FILLED · +'+p+' PTS · '+n+' TODAY');
  }
}
function touchStreak(today){
  if(state.lastDay===today) return;
  const y=new Date(Date.now()-864e5).toISOString().slice(0,10);
  state.streak=state.lastDay===y?state.streak+1:1;
  state.lastDay=today;
}
let toastTimer=null;
function toast(msg,cls){
  const el=$("toast");el.textContent=msg;el.className="toast show"+(cls?" "+cls:"");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),1900);
}

/* ────────────── LEADERBOARD ────────────── */
let pushTimer=null;
function schedulePush(){clearTimeout(pushTimer);pushTimer=setTimeout(pushBoard,1200)}
async function pushBoard(){
  if(cloudOn){renderLeaderboard();return} // cloud: PATCH in saveState already carries points
  if(hasStore&&user){
    await localSet("lb:"+user, JSON.stringify({n:user,p:totals().pts,u:Date.now()}), true);
  }
  renderLeaderboard();
}
async function renderLeaderboard(){
  const box=$("lbList"), my=$("lbMyPos");
  try{
    let rows=[];
    if(cloudOn){
      $("lbFine").textContent="Global board — every registered user, live from Supabase.";
      rows=await sbRest("profiles?select=username,points&order=points.desc&limit=50",{prefer:"return=representation"})||[];
      rows=rows.map(r=>({n:r.username,p:r.points}));
    }else if(hasStore){
      const res=await window.storage.list("lb:",true);
      const keys=(res&&res.keys)?res.keys:[];
      for(const k of keys.slice(0,60)){
        try{const r=await window.storage.get(k,true); if(r&&r.value) rows.push(JSON.parse(r.value));}catch(e){}
      }
      rows.sort((a,b)=>b.p-a.p);
    }else{
      box.className="lb-empty";box.textContent="Configure Supabase (see file header) for the global leaderboard.";my.textContent="";return;
    }
    if(!rows.length){box.className="lb-empty";box.textContent="No traders on the board yet. Book your first fill.";my.textContent="";return}
    box.className="";
    const medals=["①","②","③"];
    box.innerHTML=rows.slice(0,10).map((r,i)=>
      '<div class="lb-row '+(r.n===user?'me':'')+'">'
      +'<span class="lb-pos">'+(i<3?medals[i]:String(i+1).padStart(2,"0"))+'</span>'
      +'<span class="lb-nm">'+escapeHtml(r.n)+'</span>'
      +'<span class="lb-pts">+'+r.p+'</span></div>').join("");
    const myIdx=rows.findIndex(r=>r.n===user);
    my.textContent=myIdx>=0?'YOUR POSITION: #'+(myIdx+1)+' of '+rows.length:'';
  }catch(e){box.className="lb-empty";box.textContent="Board unavailable right now.";}
}

/* ────────────── RESET / WIRING ────────────── */
$("resetBtn").onclick=async ()=>{
  if(!confirm("Wipe all fills, points, streak and heatmap for this account? This can't be undone."))return;
  state=blankState(); saveState(); schedulePush(); renderAll(); toast("BOOK FLATTENED");
};
$("gateBtn").onclick=submitGate;
$("gPin").addEventListener("keydown",e=>{if(e.key==="Enter")submitGate()});
$("lbRefresh").onclick=renderLeaderboard;

/* ────────────── BOOT ────────────── */
paintGate();
(async function(){
  if(!cloudOn && hasStore){
    const sess=await localGet("qt-session");
    if(sess){
      const raw=await localGet("qt-state:"+sess);
      if(raw!==null){
        user=sess; state=Object.assign(blankState(),JSON.parse(raw));
        enterDesk(); return;
      }
    }
  }
  renderLeaderboard();
})();
