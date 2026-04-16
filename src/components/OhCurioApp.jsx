import { useState } from "react";

const P = {
  page:    "#F9F6F2",
  card:    "#FFFFFF",
  inset:   "#F2EDE7",
  rule:    "#EAE4DC",
  ink:     "#1A1714",
  body:    "#524944",
  meta:    "#8C807A",
  ghost:   "#BFB8B2",
  terra:   "#D05A35",
  terraBg: "#FDF1EC",
  terraRg: "#ECCBBE",
  sage:    "#3D7845",
  sageBg:  "#EBF4EC",
  sageRg:  "#B5D4B9",
  amber:   "#9C7722",
};

const SPINE = {
  1:  ["#7B5EA7","#4A3875"],
  2:  ["#C47A3A","#8B5220"],
  3:  ["#4A7FA5","#2B5270"],
  4:  ["#3D8A5C","#1F5C38"],
  5:  ["#8B3A3A","#5C1F1F"],
  6:  ["#B5564A","#7A2D22"],
  7:  ["#4A5E8A","#2B3A5C"],
  8:  ["#5A8A6A","#305C40"],
  9:  ["#8A5A8A","#5C305C"],
  10: ["#7A6A4A","#5C4A2A"],
  101:["#3A6A8A","#1F455C"],
  102:["#6A8A3A","#3A5C1F"],
  103:["#8A4A6A","#5C1F40"],
  104:["#5A5A6A","#35353F"],
  105:["#7A4A3A","#5C2420"],
};

const TITLES = {
  1:"The Midnight\nLibrary", 2:"Lessons in\nChemistry", 3:"Spare",
  4:"FC 26", 5:"Dune:\nPart Two", 6:"Fourth Wing", 7:"Intermezzo",
  8:'Telescope\nKit', 9:"Becoming", 10:"The Women",
  101:"Atomic\nHabits", 102:"Mario\nKart 8", 103:"Hello\nBeautiful",
  104:"Oppenheimer", 105:"Demon\nCopperhead",
};

const Cover = ({ id, w=88, h=124, r=10 }) => {
  const g = SPINE[id] || ["#7A6A5A","#4A3A2A"];
  const title = TITLES[id] || "";
  const short = w < 70;
  return (
    <div style={{
      width:w, height:h, borderRadius:r, flexShrink:0,
      background:`linear-gradient(160deg, ${g[0]} 0%, ${g[1]} 100%)`,
      position:"relative", overflow:"hidden",
      boxShadow:`2px 4px 16px rgba(26,23,20,.28), 1px 0 0 rgba(0,0,0,.15) inset`,
    }}>
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:Math.max(5,w*.07),background:"rgba(0,0,0,.25)",borderRadius:`${r}px 0 0 ${r}px`}}/>
      <div style={{position:"absolute",top:0,left:Math.max(5,w*.07),right:0,height:"35%",background:"linear-gradient(180deg,rgba(255,255,255,.14) 0%,transparent 100%)",borderRadius:`0 ${r}px 0 0`}}/>
      {!short && (
        <div style={{position:"absolute",bottom:10,left:Math.max(5,w*.07)+7,right:7}}>
          <div style={{fontFamily:"'Lato',sans-serif",fontSize:Math.max(8,w*.09),fontWeight:900,color:"rgba(255,255,255,.92)",lineHeight:1.2,letterSpacing:"-.2px",whiteSpace:"pre-line"}}>{title}</div>
        </div>
      )}
    </div>
  );
};

const Ic = ({n,sz=20,c="#8C807A",sw=1.7}) => {
  const a = {fill:"none",stroke:c,strokeWidth:sw,strokeLinecap:"round",strokeLinejoin:"round"};
  const paths = {
    home:   <><path {...a} d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z"/><path {...a} d="M9 21V13h6v8"/></>,
    search: <><circle {...a} cx="11" cy="11" r="7"/><line {...a} x1="21" y1="21" x2="15.5" y2="15.5"/></>,
    shelf:  <><path {...a} d="M4 19V6a1 1 0 011-1h14a1 1 0 011 1v13"/><line {...a} x1="2" y1="19" x2="22" y2="19"/><line {...a} x1="9" y1="9" x2="9" y2="19"/><line {...a} x1="15" y1="7" x2="15" y2="19"/></>,
    cal:    <><rect {...a} x="3" y="4" width="18" height="18" rx="2"/><path {...a} d="M16 2v4M8 2v4M3 10h18"/></>,
    person: <><circle {...a} cx="12" cy="8" r="4"/><path {...a} d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/></>,
    check:  <><polyline {...a} points="20 6 9 17 4 12"/></>,
    x:      <><line {...a} x1="18" y1="6" x2="6" y2="18"/><line {...a} x1="6" y1="6" x2="18" y2="18"/></>,
    cR:     <><polyline {...a} points="9 18 15 12 9 6"/></>,
    cD:     <><polyline {...a} points="6 9 12 15 18 9"/></>,
    cU:     <><polyline {...a} points="18 15 12 9 6 15"/></>,
    warn:   <><path {...a} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line {...a} x1="12" y1="9" x2="12" y2="13"/><line {...a} x1="12" y1="17" x2="12.01" y2="17"/></>,
    arr:    <><line {...a} x1="5" y1="12" x2="19" y2="12"/><polyline {...a} points="12 5 19 12 12 19"/></>,
    bell:   <><path {...a} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path {...a} d="M13.73 21a2 2 0 01-3.46 0"/></>,
    scan:   <><path {...a} d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><line {...a} x1="4" y1="12" x2="20" y2="12"/></>,
    refresh:<><polyline {...a} points="23 4 23 10 17 10"/><path {...a} d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></>,
    card:   <><rect {...a} x="2" y="5" width="20" height="14" rx="2"/><line {...a} x1="2" y1="10" x2="22" y2="10"/></>,
    globe:  <><circle {...a} cx="12" cy="12" r="10"/><path {...a} d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>,
    eye:    <><path {...a} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle {...a} cx="12" cy="12" r="3"/></>,
    vol:    <><polygon {...a} points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path {...a} d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"/></>,
    team:   <><path {...a} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle {...a} cx="9" cy="7" r="4"/><path {...a} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
    trend:  <><polyline {...a} points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline {...a} points="16 7 22 7 22 13"/></>,
    gift:   <><path {...a} d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></>,
    heart:  <><path {...a} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></>,
    pin:    <><path {...a} d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle {...a} cx="12" cy="10" r="3"/></>,
    star:   <><polygon {...a} points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
    book:   <><path {...a} d="M4 4h7a4 4 0 014 4v13a3 3 0 00-3-3H4V4z"/><path {...a} d="M20 4h-7a4 4 0 00-4 4v13a3 3 0 013-3h8V4z"/></>,
  };
  return <svg viewBox="0 0 24 24" style={{width:sz,height:sz,display:"block",flexShrink:0}}>{paths[n]}</svg>;
};

const CATALOG = [
  {id:1, title:"The Midnight Library",  author:"Matt Haig",        type:"Book",      genre:"Fiction",    available:true},
  {id:2, title:"Lessons in Chemistry",  author:"Bonnie Garmus",    type:"Book",      genre:"Fiction",    available:false, due:"Mar 14", renewals:1, out:true},
  {id:3, title:"Spare",                 author:"Prince Harry",     type:"Book",      genre:"Memoir",     available:false, reserved:true, pickup:true},
  {id:4, title:"FC 26",                 author:"EA Sports",        type:"Game",      genre:"Sports",     available:false, due:"Mar 25", renewals:1, out:true, who:"Jake"},
  {id:5, title:"Dune: Part Two",        author:"Denis Villeneuve", type:"DVD",       genre:"Sci-Fi",     available:true},
  {id:6, title:"Fourth Wing",           author:"Rebecca Yarros",   type:"Book",      genre:"Fantasy",    available:false, waitlist:4},
  {id:7, title:"Intermezzo",            author:"Sally Rooney",     type:"Book",      genre:"Fiction",    available:false, due:"Mar 10", renewals:3, out:true, overdue:true, fine:1.50},
  {id:8, title:'Telescope Kit — 8"',    author:"Equipment Loan",   type:"Equipment", genre:"STEM",       available:true},
  {id:9, title:"Becoming",              author:"Michelle Obama",   type:"Audiobook", genre:"Memoir",     available:true},
  {id:10,title:"The Women",             author:"Kristin Hannah",   type:"Book",      genre:"Historical", available:true},
];
const NEW_ITEMS = [1,10,9,5,8].map(id => CATALOG.find(b=>b.id===id));

const GENRES = [
  {id:"fiction",   label:"Fiction",    emoji:"📖", bg:"#EEE8F5"},
  {id:"mystery",   label:"Mystery",    emoji:"🔍", bg:"#E8EEF5"},
  {id:"children",  label:"Children's", emoji:"🌟", bg:"#EBF5E8"},
  {id:"memoir",    label:"Memoir",     emoji:"✍️", bg:"#F5ECE8"},
  {id:"scifi",     label:"Sci-Fi",     emoji:"🚀", bg:"#E8EDF5"},
  {id:"fantasy",   label:"Fantasy",    emoji:"🐉", bg:"#EEE8F5"},
  {id:"history",   label:"History",    emoji:"🏛️", bg:"#F5F0E8"},
  {id:"selfhelp",  label:"Self-Help",  emoji:"💡", bg:"#EBF5EC"},
  {id:"kids",      label:"Kids",       emoji:"🧸", bg:"#F5EBF0"},
  {id:"biography", label:"Biography",  emoji:"👤", bg:"#F0F5E8"},
];

const EVENTS = [
  {id:1, title:"Story Time for Toddlers",  date:"Mar 12", time:"10:00 AM", cat:"Kids",  spots:8,  reg:false, price:0,  isNew:true},
  {id:2, title:"Adult Book Club",           date:"Mar 15", time:"6:30 PM",  cat:"Adult", spots:3,  reg:true,  price:0,  isNew:false},
  {id:3, title:"Teen Writing Workshop",     date:"Mar 18", time:"4:00 PM",  cat:"Teen",  spots:12, reg:false, price:0,  isNew:true},
  {id:4, title:"Author Talk: Jane Doe",     date:"Mar 22", time:"2:00 PM",  cat:"Adult", spots:40, reg:false, price:5,  isNew:false},
  {id:5, title:"LEGO & Literacy Night",     date:"Mar 25", time:"11:00 AM", cat:"Kids",  spots:0,  reg:false, price:0,  isNew:false},
];

const HISTORY_DATA = [
  {id:101, title:"Atomic Habits",    author:"James Clear",    type:"Book",  returned:"Feb 20", rating:5, review:"Changed how I think about routines."},
  {id:102, title:"Mario Kart 8",     author:"Nintendo",       type:"Game",  returned:"Feb 10", rating:5, review:"Kids loved every minute."},
  {id:103, title:"Hello Beautiful",  author:"Ann Napolitano", type:"Book",  returned:"Jan 18", rating:5, review:"Stunning multigenerational story."},
  {id:104, title:"Oppenheimer",      author:"C. Nolan",       type:"DVD",   returned:"Jan 5",  rating:4, review:""},
  {id:105, title:"Demon Copperhead", author:"B. Kingsolver",  type:"Book",  returned:"Dec 28", rating:4, review:""},
];

const FAMILY = [
  {id:1, name:"Sarah", init:"S", role:"Account holder", fine:1.50},
  {id:2, name:"Emma",  init:"E", role:"Child · 8"},
  {id:3, name:"Jake",  init:"J", role:"Teen · 14"},
];

const LANGS = {en:{n:"English",f:"🇺🇸"},es:{n:"Español",f:"🇪🇸"},fr:{n:"Français",f:"🇫🇷"},zh:{n:"中文",f:"🇨🇳"},ar:{n:"العربية",f:"🇸🇦"}};
const NAV = [{k:"home",l:"Home",i:"home"},{k:"browse",l:"Browse",i:"search"},{k:"shelf",l:"Shelf",i:"shelf"},{k:"events",l:"Events",i:"cal"},{k:"account",l:"Account",i:"person"}];

export default function OhCurio() {
  const [tab,      setTab]    = useState("home");
  const [catalog,  setCat]    = useState(CATALOG);
  const [evList,   setEv]     = useState(EVENTS);
  const [wish,     setWish]   = useState([]);
  const [ratings,  setRat]    = useState({});
  const [q,        setQ]      = useState("");
  const [tFilter,  setTF]     = useState("all");
  const [evCat,    setEvCat]  = useState("All");
  const [fam,      setFam]    = useState(0);
  const [modal,    setModal]  = useState(null);
  const [paid,     setPaid]   = useState(false);
  const [pro,      setPro]    = useState(false);
  const [staff,    setStaff]  = useState(false);
  const [queue,    setQueue]  = useState([
    {id:"Q1",patron:"Maria G.",item:"FC 26",action:"Pickup Ready"},
    {id:"Q2",patron:"Tom R.",  item:"Intermezzo",action:"Return"},
    {id:"Q3",patron:"Lily K.", item:"Telescope Kit",action:"Checkout"},
  ]);
  const [toast,    setToast]  = useState(null);
  const [scan,     setScan]   = useState(false);
  const [hit,      setHit]    = useState(null);
  const [lang,     setLang]   = useState("en");
  const [fsz,      setFsz]    = useState("md");
  const [tts,      setTts]    = useState(false);
  const [hc,       setHc]     = useState(false);
  const [notif,    setNotif]  = useState({urgent:"sms",headsup:"push",fyi:"push"});
  const [dnd,      setDnd]    = useState(true);
  const [langOpen,   setLO]        = useState(false);
  const [nOpen,      setNO]        = useState(null);
  const [genre,      setGenre]     = useState(null);
  const [fineFree,   setFineFree]  = useState(false);
  const [histConsent,setHConsent]  = useState(false);
  const [wishOptIn,  setWishOptIn] = useState(true);
  const [privacyOpen,setPrivOpen]  = useState(false);
  const [adminTab,   setAdminTab]  = useState("overview");
  const [ilsStatus,  setIlsStatus] = useState("connected");
  const [isOffline,  setIsOffline] = useState(false);
  const [setupStep,  setSetupStep] = useState(3);

  const FS = fsz==="sm"?{xs:9,body:12,md:13,lg:15,h2:18,h1:22,hero:26}
           : fsz==="lg"?{xs:11,body:16,md:18,lg:21,h2:25,h1:31,hero:38}
           : fsz==="xl"?{xs:13,body:18,md:21,lg:24,h2:29,h1:36,hero:44}
           :            {xs:10,body:13,md:15,lg:17,h2:20,h1:25,hero:30};

  const isRTL = lang==="ar";

  const bg   = hc?"#000":P.page;
  const sf   = hc?"#111":P.card;
  const br   = hc?"#2a2a2a":P.rule;
  const ink_ = hc?"#fff":P.ink;
  const body_= hc?"#aaa":P.body;
  const meta_= hc?"#666":P.meta;
  const ins  = hc?"#1a1a1a":P.inset;
  const ac   = hc?"#FFD060":P.terra;

  const pop  = msg => { setToast(msg); setTimeout(()=>setToast(null),2400); };
  const say  = txt => { if(!tts||!window.speechSynthesis) return; window.speechSynthesis.cancel(); window.speechSynthesis.speak(Object.assign(new SpeechSynthesisUtterance(txt),{lang})); };

  const renew   = id => setCat(c=>c.map(b=>{ if(b.id!==id)return b; if(b.renewals>=3){pop("Max renewals reached.");return b;} pop("Renewed."); return{...b,renewals:b.renewals+1}; }));
  const reserve = id => { setCat(c=>c.map(b=>b.id===id?{...b,reserved:true}:b)); pop("Reserved — we'll notify you."); setModal(null); };
  const checkout= it => { setCat(c=>c.map(b=>b.id===it.id?{...b,available:false,out:true,due:"Mar 29",renewals:0}:b)); setScan(false); setHit(null); pop("Checked out. Due March 29."); };
  const saveW   = it => { if(wish.find(w=>w.id===it.id)){pop("Already saved.");return;} setWish(w=>[...w,it]); pop("Saved to wishlist."); setModal(null); };
  const regEv   = ev => { setEv(e=>e.map(x=>x.id===ev.id?{...x,reg:true,spots:Math.max(0,x.spots-1)}:x)); pop("Registered!"); setModal(null); };

  const myItems = catalog.filter(b=>b.out||b.reserved);
  const filtered= catalog.filter(b=>
    (b.title.toLowerCase().includes(q.toLowerCase())||b.author.toLowerCase().includes(q.toLowerCase()))
    &&(tFilter==="all"||b.type.toLowerCase()===tFilter)
  );

  const SeeAll = ({onClick}) => (
    <button onClick={onClick} style={{display:"flex",alignItems:"center",gap:3,background:"none",border:"none",color:ac,fontSize:FS.xs,fontWeight:700,fontFamily:"'Lato',sans-serif",cursor:"pointer",padding:0,letterSpacing:".2px"}}>
      See all <Ic n="arr" sz={12} c={ac}/>
    </button>
  );

  const SecHead = ({eyebrow,title,onAll}) => (
    <div style={{marginBottom:13,display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
      <div>
        {eyebrow && <p style={{fontSize:FS.xs-1,fontWeight:700,color:hc?ac:P.amber,letterSpacing:"1.1px",textTransform:"uppercase",marginBottom:3,fontFamily:"'Lato',sans-serif"}}>{eyebrow}</p>}
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h2,fontWeight:700,color:ink_,lineHeight:1,margin:0}}>{title}</h2>
      </div>
      {onAll && <SeeAll onClick={onAll}/>}
    </div>
  );

  const Row = ({children,px=22}) => (
    <div style={{display:"flex",gap:14,overflowX:"auto",paddingBottom:6,paddingLeft:px,paddingRight:px,marginLeft:-px,marginRight:-px}}>
      {children}
    </div>
  );

  const BookTile = ({item, w=86, h=120, onClick, badge}) => (
    <div onClick={onClick} style={{flexShrink:0,cursor:onClick?"pointer":"default",width:w}}>
      <div style={{position:"relative"}}>
        <Cover id={item.id} w={w} h={h}/>
        {badge && <div style={{position:"absolute",top:7,left:7,background:ac,color:"#fff",fontSize:8,fontWeight:900,padding:"2px 6px",borderRadius:4,fontFamily:"'Lato',sans-serif",letterSpacing:".6px"}}>{badge}</div>}
        {item.overdue && <div style={{position:"absolute",top:7,right:7,width:8,height:8,borderRadius:"50%",background:P.terra,border:"2px solid #fff"}}/>}
        {item.pickup  && <div style={{position:"absolute",top:7,right:7,width:8,height:8,borderRadius:"50%",background:P.sage, border:"2px solid #fff"}}/>}
      </div>
      <div style={{marginTop:7}}>
        <div style={{fontSize:FS.xs,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif",lineHeight:1.25,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{item.title}</div>
        <div style={{fontSize:FS.xs-1,color:meta_,marginTop:2,fontFamily:"'Lato',sans-serif",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{item.author}</div>
      </div>
    </div>
  );

  const Pill = ({label,active,onClick}) => (
    <button onClick={onClick} style={{padding:"7px 16px",borderRadius:50,border:`1.5px solid ${active?(hc?ac:P.ink):br}`,background:active?(hc?ac:P.ink):"transparent",color:active?(hc?"#000":"#fff"):meta_,fontSize:FS.xs,fontFamily:"'Lato',sans-serif",fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s",letterSpacing:".2px"}}>
      {label}
    </button>
  );

  const Tag = ({ch}) => (
    <span style={{display:"inline-flex",padding:"3px 9px",borderRadius:4,background:ins,color:meta_,fontSize:FS.xs,fontFamily:"'Lato',sans-serif",fontWeight:600,border:`1px solid ${br}`}}>{ch}</span>
  );

  const StatusLine = ({type,label}) => {
    const c = type==="ok"?(hc?ac:P.sage):type==="alert"?(hc?ac:P.terra):meta_;
    return <span style={{display:"inline-flex",alignItems:"center",gap:5}}><span style={{width:6,height:6,borderRadius:"50%",background:c,flexShrink:0}}/><span style={{fontSize:FS.xs,fontWeight:600,color:c,fontFamily:"'Lato',sans-serif"}}>{label}</span></span>;
  };

  const Btn = ({label,onClick,v="dark",s={}}) => {
    const st = v==="terra"?{bg:hc?ac:P.terra,fg:"#fff"} : v==="outline"?{bg:"transparent",fg:hc?ac:P.ink,bd:`1.5px solid ${hc?ac:br}`} : {bg:hc?ac:P.ink,fg:hc?"#000":"#fff"};
    return <button onClick={onClick} style={{background:st.bg,color:st.fg,border:st.bd||"none",borderRadius:50,padding:"11px 22px",fontFamily:"'Lato',sans-serif",fontSize:FS.body,fontWeight:700,cursor:"pointer",transition:"opacity .15s",letterSpacing:".2px",...s}} onMouseEnter={e=>e.currentTarget.style.opacity=".8"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>{label}</button>;
  };

  const Toggle = ({on,set}) => (
    <button onClick={()=>set(p=>!p)} style={{width:46,height:26,borderRadius:13,border:"none",background:on?(hc?ac:P.ink):br,cursor:"pointer",position:"relative",transition:"background .2s",padding:0,flexShrink:0}}>
      <span style={{position:"absolute",top:3,left:on?"23px":"3px",width:20,height:20,borderRadius:"50%",background:on?(hc?"#000":sf):meta_,transition:"left .2s",boxShadow:"0 1px 4px rgba(0,0,0,.12)"}}/>
    </button>
  );

  const Card = ({children,onClick,style={}}) => (
    <div onClick={onClick} style={{background:sf,borderRadius:16,border:`1px solid ${br}`,marginBottom:10,overflow:"hidden",cursor:onClick?"pointer":"default",boxShadow:"0 1px 4px rgba(26,23,20,.04)",transition:"box-shadow .15s,transform .12s",...style}}
      onMouseEnter={e=>{if(onClick){e.currentTarget.style.boxShadow="0 6px 24px rgba(26,23,20,.09)";e.currentTarget.style.transform="translateY(-1px)";}}}
      onMouseLeave={e=>{if(onClick){e.currentTarget.style.boxShadow="0 1px 4px rgba(26,23,20,.04)";e.currentTarget.style.transform="none";}}}>
      {children}
    </div>
  );

  const SettingsGroup = ({label,children}) => (
    <div style={{background:sf,borderRadius:16,border:`1px solid ${br}`,padding:"16px 18px",marginBottom:12,boxShadow:"0 1px 4px rgba(26,23,20,.04)"}}>
      <p style={{fontSize:FS.xs-1,fontWeight:700,color:hc?ac:P.amber,letterSpacing:"1.1px",textTransform:"uppercase",marginBottom:13,fontFamily:"'Lato',sans-serif"}}>{label}</p>
      {children}
    </div>
  );

  const HR = () => <div style={{height:1,background:br,margin:"2px 0"}}/>;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700;900&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    ::-webkit-scrollbar{display:none;}
    input{font-family:'Lato',sans-serif;}
    input::placeholder{color:${meta_};opacity:1;}
    input:focus{outline:none;}
    .up{animation:slideUp .26s cubic-bezier(.4,0,.2,1) both;}
    .fd{animation:fadeIn .2s ease both;}
    @keyframes slideUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes beamAnim{0%{top:10%}100%{top:86%}}
    .beam{position:absolute;left:14px;right:14px;height:1px;background:${P.terra};animation:beamAnim 1.5s ease-in-out infinite alternate;box-shadow:0 0 10px ${P.terra}99;}
    .nb{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 2px 4px;background:none;border:none;cursor:pointer;}
    .sr{background:none;border:none;cursor:pointer;padding:1px;transition:transform .1s;}
    .sr:hover{transform:scale(1.15);}
    .mo{position:fixed;inset:0;background:rgba(26,23,20,.42);z-index:100;display:flex;align-items:flex-end;justify-content:center;}
    .ms{background:${hc?"#0a0a0a":P.page};border-radius:28px 28px 0 0;padding:24px 22px 54px;width:100%;max-width:430px;max-height:90vh;overflow-y:auto;}
    .mh{width:36px;height:3px;background:${br};border-radius:2px;margin:0 auto 22px;}
    .star{background:none;border:none;cursor:pointer;padding:1px;transition:transform .1s;}
    .star:hover{transform:scale(1.2);}
  `;

  return (
    <div dir={isRTL?"rtl":"ltr"} style={{background:bg,minHeight:"100vh",maxWidth:430,margin:"0 auto",position:"relative",overflowX:"hidden"}}>
      <style>{css}</style>

      {/* HEADER */}
      <header style={{background:sf,borderBottom:`1px solid ${br}`,padding:"14px 22px 12px",position:"sticky",top:0,zIndex:50,boxShadow:"0 1px 8px rgba(26,23,20,.06)"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:9}}>
            <div style={{width:30,height:30,borderRadius:8,background:`linear-gradient(145deg,${P.amber},${P.terra})`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:700,color:"#fff",lineHeight:1}}>F</span>
            </div>
            <div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.lg+1,fontWeight:700,color:ink_,lineHeight:1,letterSpacing:"-.3px"}}>Oh Curio!</div>
              <div style={{fontSize:FS.xs-2,color:meta_,fontFamily:"'Lato',sans-serif",fontWeight:400,marginTop:1,letterSpacing:".2px"}}>Maplewood Library</div>
            </div>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            {!paid && catalog.find(b=>b.fine) && (
              <button onClick={()=>setModal({t:"pay"})} style={{background:P.terraBg,border:`1px solid ${P.terraRg}`,color:P.terra,borderRadius:50,padding:"5px 13px",fontSize:FS.xs,fontFamily:"'Lato',sans-serif",fontWeight:700,cursor:"pointer"}}>
                $1.50 fine
              </button>
            )}
            {pro && <span style={{background:ins,borderRadius:6,padding:"3px 9px",fontSize:FS.xs-1,fontWeight:900,color:meta_,letterSpacing:"1px",fontFamily:"'Lato',sans-serif"}}>PRO</span>}
            <button onClick={()=>setStaff(p=>!p)} style={{background:ins,border:`1px solid ${br}`,borderRadius:9,padding:"7px 9px",cursor:"pointer",display:"flex",alignItems:"center"}}>
              <Ic n={staff?"person":"team"} sz={16} c={meta_}/>
            </button>
          </div>
        </div>
      </header>

      {/* STAFF DASHBOARD */}
      {staff && (
        <div style={{padding:"20px 22px 110px"}} className="up">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_}}>Staff</h1>
            <Tag ch="Librarian"/>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:20,overflowX:"auto"}}>
            {[["overview","Overview"],["queue","Queue"],["admin","Admin"]].map(([k,l])=>(
              <Pill key={k} label={l} active={adminTab===k} onClick={()=>setAdminTab(k)}/>
            ))}
          </div>

          {adminTab==="overview" && (<>
            <div style={{background: ilsStatus==="connected"?P.sageBg : ilsStatus==="degraded"?"#FFF8E8":P.terraBg, border:`1px solid ${ilsStatus==="connected"?P.sageRg:ilsStatus==="degraded"?"#F0D890":P.terraRg}`, borderRadius:12, padding:"11px 14px", marginBottom:16, display:"flex", alignItems:"center", gap:10}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:ilsStatus==="connected"?P.sage:ilsStatus==="degraded"?"#C8A000":P.terra,flexShrink:0}}/>
              <div style={{flex:1}}>
                <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>
                  ILS · {ilsStatus==="connected"?"Koha connected":ilsStatus==="degraded"?"Sync delayed":"Connection lost"}
                </div>
                <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>
                  {ilsStatus==="connected"?"Last sync: 2 mins ago · All data current":"Last sync: 47 mins ago · Showing cached data"}
                </div>
              </div>
              <button onClick={()=>setIlsStatus(s=>s==="connected"?"degraded":s==="degraded"?"offline":"connected")} style={{background:"none",border:`1px solid ${meta_}33`,borderRadius:7,padding:"5px 9px",fontSize:FS.xs,color:meta_,cursor:"pointer",fontFamily:"'Lato',sans-serif"}}>Demo</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:18}}>
              {[{l:"Checkouts",v:"47"},{l:"Returns",v:"31"},{l:"Queue",v:queue.length},{l:"Patrons",v:"1,204"}].map(k=>(
                <div key={k.l} style={{background:sf,borderRadius:14,padding:"14px 6px",textAlign:"center",border:`1px solid ${br}`,boxShadow:"0 1px 4px rgba(26,23,20,.04)"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_,lineHeight:1}}>{k.v}</div>
                  <div style={{fontSize:FS.xs-1,color:meta_,fontWeight:700,marginTop:4,fontFamily:"'Lato',sans-serif",letterSpacing:".3px"}}>{k.l}</div>
                </div>
              ))}
            </div>
            <div style={{background:P.inset,borderRadius:18,padding:22,marginBottom:18,border:`1px solid ${br}`}}>
              <p style={{fontSize:FS.xs-1,fontWeight:700,color:hc?ac:P.amber,letterSpacing:"1.1px",textTransform:"uppercase",marginBottom:10,fontFamily:"'Lato',sans-serif"}}>Revenue · March 2026</p>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.hero,fontWeight:700,color:ink_,marginBottom:3,lineHeight:1}}>{fineFree?"$2,500":"$2,840"}</div>
              <div style={{fontSize:FS.xs,color:meta_,marginBottom:16,fontFamily:"'Lato',sans-serif"}}>{fineFree?"Fine-free mode · fines not collected":"Total this month"}</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                {(fineFree
                  ? [["Return reminders","—"],["Tickets","$1,200"],["Pro subs","$1,300"]]
                  : [["Fine fees","$340"],["Tickets","$1,200"],["Pro subs","$1,300"]]
                ).map(([l,v])=>(
                  <div key={l} style={{background:sf,borderRadius:10,padding:"12px 10px",border:`1px solid ${br}`}}>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h2,fontWeight:700,color:ink_}}>{v}</div>
                    <div style={{fontSize:FS.xs-1,color:meta_,marginTop:3,fontFamily:"'Lato',sans-serif"}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </>)}

          {adminTab==="queue" && (<>
            <p style={{fontSize:FS.xs-1,fontWeight:700,color:hc?ac:P.amber,letterSpacing:"1.1px",textTransform:"uppercase",marginBottom:12,fontFamily:"'Lato',sans-serif"}}>Today's Queue · {queue.length} pending</p>
            {queue.length===0
              ? <div style={{textAlign:"center",padding:"36px 0"}}>
                  <Ic n="check" sz={36} c={P.ghost} sw={1.2}/>
                  <p style={{fontSize:FS.body,color:meta_,fontFamily:"'Lato',sans-serif",marginTop:12}}>All clear — queue is empty</p>
                </div>
              : queue.map(item=>(
                <Card key={item.id}>
                  <div style={{display:"flex",alignItems:"center",gap:13,padding:"14px 16px"}}>
                    <Ic n={item.action==="Return"?"refresh":item.action==="Checkout"?"book":"check"} sz={19} c={meta_}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:FS.md,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>{item.patron}</div>
                      <div style={{fontSize:FS.xs,color:meta_,marginTop:1,fontFamily:"'Lato',sans-serif"}}>{item.item} · {item.action}</div>
                    </div>
                    <Btn label="Done" v="outline" s={{padding:"7px 13px",fontSize:FS.xs}} onClick={()=>{setQueue(p=>p.filter(x=>x.id!==item.id));pop("Done.");}}/>
                  </div>
                </Card>
              ))
            }
          </>)}

          {adminTab==="admin" && (<>
            <Card style={{marginBottom:12}}>
              <div style={{padding:"15px 16px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                  <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Setup Checklist</div>
                  <div style={{fontSize:FS.xs,color:hc?ac:P.sage,fontWeight:700,fontFamily:"'Lato',sans-serif"}}>{setupStep}/5 complete</div>
                </div>
                <div style={{background:P.inset,borderRadius:50,height:6,marginBottom:14}}>
                  <div style={{width:`${(setupStep/5)*100}%`,background:hc?ac:P.sage,borderRadius:50,height:"100%",transition:"width .3s"}}/>
                </div>
                {[
                  {label:"Connect ILS (Koha / Polaris / Sierra)", done:true},
                  {label:"Import patron roster",                  done:true},
                  {label:"Configure catalog sync",                done:true},
                  {label:"Set notification defaults",             done:false},
                  {label:"Publish to App Store",                  done:false},
                ].map((s,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:11,padding:"9px 0",borderTop:i>0?`1px solid ${br}`:"none"}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:s.done?(hc?ac:P.sage):ins,border:`1.5px solid ${s.done?(hc?ac:P.sage):br}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      {s.done && <Ic n="check" sz={11} c="#fff" sw={2.5}/>}
                    </div>
                    <span style={{fontSize:FS.xs,fontWeight:s.done?400:700,color:s.done?meta_:ink_,fontFamily:"'Lato',sans-serif",textDecoration:s.done?"line-through":"none"}}>{s.label}</span>
                  </div>
                ))}
              </div>
            </Card>
            <SettingsGroup label="Library Configuration">
              <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
                <Ic n="warn" sz={17} c={meta_}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Fine-Free Mode</div>
                  <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>Replace overdue alerts with return reminders</div>
                </div>
                <Toggle on={fineFree} set={setFineFree}/>
              </div>
              <HR/>
              <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
                <Ic n="globe" sz={17} c={meta_}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>ILS System</div>
                  <div style={{fontSize:FS.xs,color:hc?ac:P.sage,fontFamily:"'Lato',sans-serif"}}>Koha 22.11 · REST API · Active</div>
                </div>
                <Ic n="cR" sz={13} c={meta_}/>
              </div>
              <HR/>
              <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
                <Ic n="refresh" sz={17} c={meta_}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Sync Frequency</div>
                  <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>Every 5 minutes</div>
                </div>
                <Ic n="cR" sz={13} c={meta_}/>
              </div>
            </SettingsGroup>
            <div style={{background:hc?"#111":"#F0F4FF",border:`1px solid #C8D8F5`,borderRadius:12,padding:"12px 14px",marginBottom:12}}>
              <div style={{fontSize:FS.body,fontWeight:700,color:"#2A4A8A",fontFamily:"'Lato',sans-serif",marginBottom:3}}>WCAG 2.1 AA Compliance</div>
              <div style={{fontSize:FS.xs,color:"#4A6AAA",fontFamily:"'Lato',sans-serif",lineHeight:1.5}}>Oh Curio! meets WCAG 2.1 Level AA standards required for ADA compliance at public institutions. High contrast mode, screen reader support, and scalable text are built in for all patrons.</div>
            </div>
            <SettingsGroup label="Data & Privacy">
              <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
                <Ic n="eye" sz={17} c={meta_}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Patron Data Residency</div>
                  <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>US-East (Virginia) · Data never sold</div>
                </div>
              </div>
              <HR/>
              <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
                <Ic n="trend" sz={17} c={meta_}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Export Patron Data</div>
                  <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>CSV export for ILS migration or audit</div>
                </div>
                <Btn label="Export" v="outline" s={{padding:"6px 12px",fontSize:FS.xs}} onClick={()=>pop("Export started — ready in 5 mins.")}/>
              </div>
            </SettingsGroup>
          </>)}
        </div>
      )}

      {/* PATRON VIEWS */}
      {!staff && (
        <>
          <div style={{padding:"10px 22px 0"}}>
            {isOffline && (
              <div style={{background:"#FFF8E8",border:`1px solid #F0D890`,borderRadius:12,padding:"9px 14px",marginBottom:8,display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:7,height:7,borderRadius:"50%",background:"#C8A000",flexShrink:0}}/>
                <div style={{flex:1}}>
                  <span style={{fontSize:FS.xs,fontWeight:700,color:"#7A6000",fontFamily:"'Lato',sans-serif"}}>Offline — showing cached data </span>
                  <span style={{fontSize:FS.xs,color:"#A08040",fontFamily:"'Lato',sans-serif"}}>· Last sync 12 mins ago</span>
                </div>
                <button onClick={()=>setIsOffline(false)} style={{background:"none",border:"none",cursor:"pointer"}}><Ic n="x" sz={13} c="#A08040"/></button>
              </div>
            )}
            <div style={{display:"flex",justifyContent:"flex-end",marginBottom:4}}>
              <button onClick={()=>setIsOffline(p=>!p)} style={{background:"none",border:"none",fontSize:FS.xs-1,color:meta_,cursor:"pointer",fontFamily:"'Lato',sans-serif"}}>
                {isOffline?"Go online":"Demo offline"}
              </button>
            </div>
            {!paid && catalog.find(b=>b.overdue) && (
              <div style={{background:fineFree?"#FFF8E8":P.terraBg,border:`1px solid ${fineFree?"#F0D890":P.terraRg}`,borderRadius:14,padding:"12px 14px",marginBottom:8,display:"flex",alignItems:"center",gap:12}}>
                <Ic n="warn" sz={17} c={fineFree?"#C8A000":(hc?ac:P.terra)}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:FS.body,fontWeight:700,color:fineFree?"#7A6000":(hc?ac:P.terra),fontFamily:"'Lato',sans-serif"}}>{fineFree?"Return reminder":"Overdue item"}</div>
                  <div style={{fontSize:FS.xs,color:fineFree?"#A08040":(hc?ac:P.terra),opacity:.9,marginTop:1,fontFamily:"'Lato',sans-serif"}}>{fineFree?"Intermezzo · please return when you can":"Intermezzo · due Mar 10 · $1.50 fine"}</div>
                </div>
                {!fineFree && <Btn label="Pay" v="terra" s={{padding:"7px 14px",fontSize:FS.xs}} onClick={()=>setModal({t:"pay"})}/>}
              </div>
            )}
            {catalog.find(b=>b.pickup) && (
              <div style={{background:P.sageBg,border:`1px solid ${P.sageRg}`,borderRadius:14,padding:"12px 14px",marginBottom:8,display:"flex",alignItems:"center",gap:12}}>
                <Ic n="check" sz={17} c={hc?ac:P.sage}/>
                <div>
                  <div style={{fontSize:FS.body,fontWeight:700,color:hc?ac:P.sage,fontFamily:"'Lato',sans-serif"}}>Ready for pickup</div>
                  <div style={{fontSize:FS.xs,color:hc?ac:P.sage,opacity:.8,marginTop:1,fontFamily:"'Lato',sans-serif"}}>Spare · Collect by Mar 15</div>
                </div>
              </div>
            )}
          </div>

          <div style={{padding:"20px 22px",paddingBottom:110}}>

            {/* HOME */}
            {tab==="home" && (
              <div className="up">
                <div style={{background:sf,border:`1.5px solid ${br}`,borderRadius:50,padding:"13px 18px",display:"flex",alignItems:"center",gap:12,marginBottom:28,boxShadow:"0 2px 12px rgba(26,23,20,.07)",cursor:"text"}} onClick={()=>setTab("browse")}>
                  <Ic n="search" sz={18} c={meta_}/>
                  <span style={{fontSize:FS.md,color:meta_,fontFamily:"'Lato',sans-serif",fontWeight:400}}>Search books, genres, events…</span>
                </div>
                <p style={{fontSize:FS.xs-1,fontWeight:700,color:meta_,letterSpacing:".9px",textTransform:"uppercase",marginBottom:5,fontFamily:"'Lato',sans-serif"}}>Sunday, March 8</p>
                <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.hero+4,fontWeight:700,color:ink_,lineHeight:1.05,marginBottom:28}}>Good morning,<br/>Sarah.</h1>
                {myItems.length>0 && (
                  <section style={{marginBottom:30}}>
                    <SecHead eyebrow="Your Shelf" title="Continue Reading" onAll={()=>setTab("shelf")}/>
                    <Row>
                      {myItems.map(item=>(
                        <BookTile key={item.id} item={item} w={88} h={124}
                          onClick={()=>setModal({t:"item",d:item})}
                          badge={item.overdue?"OVERDUE":item.pickup?"PICKUP":null}/>
                      ))}
                    </Row>
                  </section>
                )}
                <section style={{marginBottom:30}}>
                  <SecHead eyebrow="Just Arrived" title="New in Your Library" onAll={()=>setTab("browse")}/>
                  <Row>
                    {NEW_ITEMS.filter(Boolean).map(item=>(
                      <BookTile key={item.id} item={item} w={88} h={124}
                        onClick={()=>setModal({t:"item",d:item})}
                        badge="NEW"/>
                    ))}
                  </Row>
                </section>
                <section style={{marginBottom:30}}>
                  <SecHead title="Browse by Genre"/>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                    {GENRES.map(g=>(
                      <div key={g.id} onClick={()=>{setGenre(g.id);setTab("browse");}}
                        style={{background:hc?ins:g.bg,borderRadius:14,padding:"14px 16px",display:"flex",alignItems:"center",gap:12,cursor:"pointer",border:`1px solid ${br}`,transition:"box-shadow .15s"}}
                        onMouseEnter={e=>e.currentTarget.style.boxShadow="0 4px 16px rgba(26,23,20,.09)"}
                        onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}>
                        <span style={{fontSize:22,lineHeight:1}}>{g.emoji}</span>
                        <span style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>{g.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
                <section style={{marginBottom:30}}>
                  <SecHead eyebrow="What's On" title="New Events" onAll={()=>setTab("events")}/>
                  {evList.filter(e=>e.isNew).map(ev=>(
                    <Card key={ev.id} onClick={()=>setModal({t:"event",d:ev})}>
                      <div style={{display:"flex",gap:14,padding:"14px 16px",alignItems:"center"}}>
                        <div style={{width:50,height:50,borderRadius:12,background:`linear-gradient(145deg,${P.amber}30,${P.amber}10)`,border:`1px solid ${P.amber}25`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                          <span style={{fontSize:22}}>{ev.cat==="Kids"?"🧸":ev.cat==="Teen"?"✏️":"📚"}</span>
                        </div>
                        <div style={{flex:1}}>
                          <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:3}}>
                            <span style={{fontSize:FS.md,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>{ev.title}</span>
                            <span style={{background:P.terraBg,border:`1px solid ${P.terraRg}`,borderRadius:4,padding:"1px 6px",fontSize:8,fontWeight:900,color:P.terra,fontFamily:"'Lato',sans-serif",letterSpacing:".5px",flexShrink:0}}>NEW</span>
                          </div>
                          <div style={{fontSize:FS.xs,color:meta_,marginBottom:6,fontFamily:"'Lato',sans-serif"}}>{ev.date} · {ev.time} · {ev.cat}</div>
                          <div style={{display:"flex",gap:7,alignItems:"center"}}>
                            <Tag ch={ev.price>0?`$${ev.price}`:"Free"}/>
                            <span style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>{ev.spots} spots left</span>
                          </div>
                        </div>
                        <Ic n="cR" sz={15} c={meta_}/>
                      </div>
                    </Card>
                  ))}
                </section>
                <section style={{marginBottom:30}}>
                  <SecHead title="Family Cards"/>
                  <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:4}}>
                    {FAMILY.map((f,i)=>(
                      <div key={f.id} onClick={()=>setFam(i)}
                        style={{background:fam===i?(hc?ins:P.ink):(sf),borderRadius:16,padding:"15px 14px",minWidth:96,border:`1px solid ${fam===i?P.ink:br}`,cursor:"pointer",transition:"all .18s",flexShrink:0,boxShadow:fam===i?"none":"0 1px 4px rgba(26,23,20,.04)"}}>
                        <div style={{width:38,height:38,borderRadius:"50%",background:fam===i?"rgba(255,255,255,.12)":ins,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:9,border:`1px solid ${fam===i?"rgba(255,255,255,.1)":br}`}}>
                          <span style={{fontSize:FS.body,fontWeight:900,color:fam===i?"#fff":body_,fontFamily:"'Lato',sans-serif"}}>{f.init}</span>
                        </div>
                        <div style={{fontSize:FS.body,fontWeight:700,color:fam===i?"#fff":ink_,fontFamily:"'Lato',sans-serif"}}>{f.name}</div>
                        <div style={{fontSize:FS.xs,color:fam===i?"rgba(255,255,255,.45)":meta_,marginTop:2,fontFamily:"'Lato',sans-serif"}}>{f.role}</div>
                        {f.fine && <div style={{fontSize:FS.xs,fontWeight:700,color:fam===i?"#ff9985":(hc?ac:P.terra),marginTop:4,fontFamily:"'Lato',sans-serif"}}>${f.fine.toFixed(2)} fine</div>}
                      </div>
                    ))}
                  </div>
                </section>
                {!pro && (
                  <div onClick={()=>setModal({t:"upgrade"})} style={{background:sf,border:`1px solid ${br}`,borderRadius:16,padding:"14px 16px",display:"flex",alignItems:"center",gap:13,cursor:"pointer",boxShadow:"0 1px 4px rgba(26,23,20,.04)"}}>
                    <Ic n="gift" sz={18} c={hc?ac:P.amber}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Upgrade to Oh Curio! Pro</div>
                      <div style={{fontSize:FS.xs,color:meta_,marginTop:1,fontFamily:"'Lato',sans-serif"}}>Insights, early events & more · $2.99/mo</div>
                    </div>
                    <Ic n="cR" sz={15} c={meta_}/>
                  </div>
                )}
              </div>
            )}

            {/* BROWSE */}
            {tab==="browse" && (
              <div className="up">
                <div style={{position:"relative",marginBottom:16}}>
                  <div style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}><Ic n="search" sz={17} c={meta_}/></div>
                  <input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search title, author, genre…"
                    style={{width:"100%",background:sf,border:`1.5px solid ${br}`,borderRadius:50,padding:"13px 14px 13px 44px",fontSize:FS.body,color:ink_,boxShadow:"0 2px 12px rgba(26,23,20,.06)"}}/>
                </div>
                <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:4,marginBottom:14}}>
                  {[["all","All"],["book","Books"],["game","Games"],["dvd","DVD"],["audiobook","Audio"],["equipment","Equipment"]].map(([k,l])=>(
                    <Pill key={k} label={l} active={tFilter===k} onClick={()=>setTF(k)}/>
                  ))}
                </div>
                <div style={{marginBottom:20}}>
                  <p style={{fontSize:FS.xs-1,fontWeight:700,color:hc?ac:P.amber,letterSpacing:"1.1px",textTransform:"uppercase",marginBottom:10,fontFamily:"'Lato',sans-serif"}}>Genre</p>
                  <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:4}}>
                    <Pill label="All" active={!genre} onClick={()=>setGenre(null)}/>
                    {GENRES.map(g=><Pill key={g.id} label={`${g.emoji} ${g.label}`} active={genre===g.id} onClick={()=>setGenre(genre===g.id?null:g.id)}/>)}
                  </div>
                </div>
                {!scan ? (
                  <div onClick={()=>{setScan(true);setHit(null);}} style={{border:`1.5px dashed ${br}`,borderRadius:16,height:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,background:sf,cursor:"pointer",marginBottom:18}}>
                    <Ic n="scan" sz={22} c={meta_} sw={1.4}/>
                    <span style={{fontSize:FS.body,fontWeight:700,color:meta_,fontFamily:"'Lato',sans-serif"}}>Self-Checkout — Tap to Scan</span>
                  </div>
                ) : (
                  <Card style={{marginBottom:16}}>
                    <div style={{padding:"14px 16px"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                        <div style={{display:"flex",alignItems:"center",gap:8}}><Ic n="scan" sz={16} c={hc?ac:P.terra}/><span style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Scanner Active</span></div>
                        <button onClick={()=>{setScan(false);setHit(null);}} style={{background:"none",border:"none",cursor:"pointer"}}><Ic n="x" sz={16} c={meta_}/></button>
                      </div>
                      <div style={{background:"#1A1714",borderRadius:12,height:86,position:"relative",overflow:"hidden",marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <div style={{position:"absolute",left:14,right:14,top:"50%",transform:"translateY(-50%)",height:30,border:"1px solid rgba(255,255,255,.07)",borderRadius:4}}/>
                        <div className="beam"/>
                        <span style={{fontSize:FS.xs,color:"rgba(255,255,255,.07)",fontFamily:"'Lato',sans-serif"}}>Camera feed</span>
                      </div>
                      <div style={{fontSize:FS.xs,color:meta_,marginBottom:8,fontFamily:"'Lato',sans-serif"}}>Demo — tap to simulate scan:</div>
                      <div style={{display:"flex",gap:7,flexWrap:"wrap"}}>
                        {catalog.filter(b=>b.available).slice(0,4).map(b=>(
                          <Pill key={b.id} label={b.title.split(" ")[0]+"…"} active={false} onClick={()=>setHit(b)}/>
                        ))}
                      </div>
                    </div>
                  </Card>
                )}
                {hit && (
                  <Card style={{border:`1px solid ${P.sageRg}`,marginBottom:16}}>
                    <div style={{padding:"14px 16px"}}>
                      <div style={{display:"flex",gap:14,alignItems:"center",marginBottom:13}}>
                        <Cover id={hit.id} w={56} h={78} r={8}/>
                        <div>
                          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h2,fontWeight:700,color:ink_,lineHeight:1.2}}>{hit.title}</div>
                          <div style={{fontSize:FS.xs,color:meta_,marginTop:2,fontFamily:"'Lato',sans-serif"}}>{hit.author}</div>
                          <div style={{marginTop:6}}><StatusLine type="ok" label="Available"/></div>
                        </div>
                      </div>
                      <Btn label="Check Out Now" s={{width:"100%",padding:12}} onClick={()=>checkout(hit)}/>
                    </div>
                  </Card>
                )}
                <p style={{fontSize:FS.xs-1,fontWeight:700,color:hc?ac:P.amber,letterSpacing:"1.1px",textTransform:"uppercase",marginBottom:12,fontFamily:"'Lato',sans-serif"}}>Catalog · {filtered.length} titles</p>
                {filtered.map(item=>(
                  <Card key={item.id} onClick={()=>{setModal({t:"item",d:item});say(item.title);}}>
                    <div style={{display:"flex",gap:14,padding:"14px 16px",alignItems:"flex-start"}}>
                      <Cover id={item.id} w={58} h={82} r={9}/>
                      <div style={{flex:1,minWidth:0,paddingTop:2}}>
                        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h2,fontWeight:700,color:ink_,lineHeight:1.2,marginBottom:2}}>{item.title}</div>
                        <div style={{fontSize:FS.xs,color:meta_,marginBottom:8,fontFamily:"'Lato',sans-serif"}}>{item.author} · {item.type}</div>
                        <div style={{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center"}}>
                          {item.genre && <Tag ch={item.genre}/>}
                          {item.available && <StatusLine type="ok" label="Available"/>}
                          {item.out&&!item.overdue && <StatusLine type="neutral" label={`Due ${item.due}`}/>}
                          {item.overdue && <StatusLine type="alert" label="Overdue"/>}
                          {item.pickup  && <StatusLine type="ok"    label="Ready for Pickup"/>}
                          {item.waitlist && <span style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>{item.waitlist} ahead</span>}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* SHELF */}
            {tab==="shelf" && (
              <div className="up">
                <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_,marginBottom:16}}>My Shelf</h1>
                <div style={{display:"flex",gap:8,marginBottom:20,overflowX:"auto"}}>
                  {FAMILY.map((f,i)=><Pill key={f.id} label={f.name} active={fam===i} onClick={()=>setFam(i)}/>)}
                </div>
                {myItems.length===0 ? (
                  <div style={{textAlign:"center",padding:"52px 16px"}}>
                    <Ic n="shelf" sz={40} c={P.ghost} sw={1.2}/>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h2,fontWeight:700,color:ink_,marginTop:14}}>Nothing checked out</div>
                    <Btn label="Browse Catalog" s={{marginTop:18}} onClick={()=>setTab("browse")}/>
                  </div>
                ) : (
                  <>
                    <Row>
                      {myItems.map(item=>(
                        <BookTile key={item.id} item={item} w={92} h={130}
                          onClick={()=>setModal({t:"item",d:item})}
                          badge={item.overdue?"OVERDUE":item.pickup?"PICKUP":null}/>
                      ))}
                    </Row>
                    <div style={{height:22}}/>
                    {myItems.map(item=>(
                      <Card key={item.id}>
                        <div style={{display:"flex",gap:14,padding:"14px 16px",alignItems:"center"}}>
                          <Cover id={item.id} w={48} h={68} r={8}/>
                          <div style={{flex:1}}>
                            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.lg,fontWeight:700,color:ink_,lineHeight:1.2}}>{item.title}</div>
                            <div style={{fontSize:FS.xs,color:meta_,marginTop:2,marginBottom:5,fontFamily:"'Lato',sans-serif"}}>{item.author}</div>
                            {item.overdue && <StatusLine type="alert" label={`Overdue since ${item.due}`}/>}
                            {item.out&&!item.overdue && <StatusLine type="neutral" label={`Due ${item.due}${item.who?` · ${item.who}`:""}`}/>}
                            {item.pickup && <StatusLine type="ok" label="Ready for Pickup"/>}
                          </div>
                        </div>
                        <div style={{padding:"0 16px 14px",display:"flex",gap:8}}>
                          {item.out&&item.renewals<3&&<Btn label={`Renew (${item.renewals}/3)`} s={{flex:1,padding:10,fontSize:FS.xs}} onClick={()=>renew(item.id)}/>}
                          {item.overdue&&!paid&&<Btn label="Pay Fine" v="terra" s={{flex:1,padding:10,fontSize:FS.xs}} onClick={()=>setModal({t:"pay"})}/>}
                          {item.renewals>=3&&<div style={{flex:1,fontSize:FS.xs,color:hc?ac:P.terra,fontWeight:700,padding:"10px 0",fontFamily:"'Lato',sans-serif"}}>Please return this item</div>}
                        </div>
                      </Card>
                    ))}
                  </>
                )}
              </div>
            )}

            {/* EVENTS */}
            {tab==="events" && (
              <div className="up">
                <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_,marginBottom:16}}>Events</h1>
                <div style={{display:"flex",gap:8,marginBottom:18,overflowX:"auto"}}>
                  {["All","Kids","Teen","Adult"].map(c=><Pill key={c} label={c} active={evCat===c} onClick={()=>setEvCat(c)}/>)}
                </div>
                {(evCat==="All"?evList:evList.filter(e=>e.cat===evCat)).map(ev=>(
                  <Card key={ev.id} onClick={()=>setModal({t:"event",d:ev})}>
                    <div style={{display:"flex",gap:14,padding:"15px 16px",alignItems:"center"}}>
                      <div style={{width:50,height:50,borderRadius:12,background:`linear-gradient(145deg,${P.amber}25,${P.amber}08)`,border:`1px solid ${P.amber}20`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:22}}>
                        {ev.cat==="Kids"?"🧸":ev.cat==="Teen"?"✏️":"📚"}
                      </div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:3}}>
                          <span style={{fontSize:FS.md,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>{ev.title}</span>
                          {ev.isNew && <span style={{background:P.terraBg,border:`1px solid ${P.terraRg}`,borderRadius:4,padding:"1px 6px",fontSize:8,fontWeight:900,color:P.terra,fontFamily:"'Lato',sans-serif",letterSpacing:".5px",flexShrink:0}}>NEW</span>}
                        </div>
                        <div style={{fontSize:FS.xs,color:meta_,marginBottom:6,fontFamily:"'Lato',sans-serif"}}>{ev.date} · {ev.time} · {ev.cat}</div>
                        <div style={{display:"flex",gap:7,alignItems:"center"}}>
                          <Tag ch={ev.price>0?`$${ev.price}`:"Free"}/>
                          {ev.spots===0?<StatusLine type="alert" label="Full"/>:<span style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>{ev.spots} spots</span>}
                        </div>
                      </div>
                      {ev.reg?<Ic n="check" sz={16} c={hc?ac:P.sage}/>:<Ic n="cR" sz={15} c={meta_}/>}
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* ACCOUNT */}
            {tab==="account" && (
              <div className="up">
                <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_,marginBottom:20}}>Account</h1>
                <div style={{background:P.inset,borderRadius:20,padding:22,marginBottom:18,border:`1px solid ${br}`,position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",top:-20,right:-20,width:100,height:100,borderRadius:"50%",background:"rgba(156,119,34,.06)"}}/>
                  <p style={{fontSize:FS.xs-2,color:meta_,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8,fontFamily:"'Lato',sans-serif",fontWeight:700}}>Maplewood Public Library</p>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_}}>Sarah Johnson</div>
                  <div style={{fontSize:FS.md,letterSpacing:5,marginTop:16,color:meta_,fontFamily:"'Lato',sans-serif",fontWeight:300}}>4521 ···· ···· 8834</div>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:14,color:P.ghost,fontSize:FS.xs,fontFamily:"'Lato',sans-serif"}}>
                    <span>Valid Dec 2027</span><span>Adult · 3 family cards</span>
                  </div>
                </div>
                <Card style={{marginBottom:12}}>
                  <div style={{padding:"16px 18px"}}>
                    <p style={{fontSize:FS.xs-1,fontWeight:700,color:hc?ac:P.amber,letterSpacing:"1.1px",textTransform:"uppercase",marginBottom:14,fontFamily:"'Lato',sans-serif"}}>Your 2026 Reading</p>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:16}}>
                      {[{v:HISTORY_DATA.length,l:"Borrowed"},{v:"4.6",l:"Avg Rating"},{v:"Fiction",l:"Top Genre"}].map(s=>(
                        <div key={s.l}>
                          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.hero-2,fontWeight:700,color:ink_,lineHeight:1}}>{s.v}</div>
                          <div style={{fontSize:FS.xs,color:meta_,marginTop:3,fontFamily:"'Lato',sans-serif"}}>{s.l}</div>
                        </div>
                      ))}
                    </div>
                    <p style={{fontSize:FS.xs,color:meta_,marginBottom:10,fontFamily:"'Lato',sans-serif"}}>Recent reads</p>
                    <Row px={0}>
                      {HISTORY_DATA.map(item=>(
                        <div key={item.id} style={{flexShrink:0,cursor:"pointer"}}>
                          <Cover id={item.id} w={54} h={76} r={8}/>
                        </div>
                      ))}
                    </Row>
                  </div>
                </Card>
                <SettingsGroup label="Language">
                  <div onClick={()=>setLO(p=>!p)} style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer"}}>
                    <Ic n="globe" sz={18} c={meta_}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Display Language</div>
                      <div style={{fontSize:FS.xs,color:meta_,marginTop:1,fontFamily:"'Lato',sans-serif"}}>{LANGS[lang].f} {LANGS[lang].n}</div>
                    </div>
                    <Ic n={langOpen?"cU":"cD"} sz={14} c={meta_}/>
                  </div>
                  {langOpen && (
                    <div style={{marginTop:10}} className="fd">
                      {Object.entries(LANGS).map(([code,info])=>(
                        <div key={code} onClick={()=>{setLang(code);setLO(false);}} style={{display:"flex",alignItems:"center",gap:11,padding:"10px 12px",borderRadius:10,background:lang===code?ins:"transparent",cursor:"pointer",marginBottom:2}}>
                          <span style={{fontSize:18}}>{info.f}</span>
                          <span style={{fontSize:FS.body,fontWeight:700,color:ink_,flex:1,fontFamily:"'Lato',sans-serif"}}>{info.n}</span>
                          {lang===code && <Ic n="check" sz={14} c={hc?ac:P.sage}/>}
                        </div>
                      ))}
                    </div>
                  )}
                </SettingsGroup>
                <SettingsGroup label="Text Size">
                  <div style={{display:"flex",gap:8}}>
                    {[["sm","S"],["md","M"],["lg","L"],["xl","XL"]].map(([k,l])=>(
                      <button key={k} onClick={()=>setFsz(k)} style={{flex:1,padding:"12px 4px",border:`1px solid ${fsz===k?(hc?ac:P.ink):br}`,borderRadius:10,background:fsz===k?(hc?ac:P.ink):"transparent",cursor:"pointer",transition:"all .15s"}}>
                        <div style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,color:fsz===k?(hc?"#000":"#fff"):meta_,fontSize:k==="sm"?14:k==="md"?18:k==="lg"?22:26,lineHeight:1}}>A</div>
                        <div style={{fontSize:9,color:fsz===k?(hc?"#000":"rgba(255,255,255,.55)"):meta_,marginTop:4,fontFamily:"'Lato',sans-serif"}}>{l}</div>
                      </button>
                    ))}
                  </div>
                </SettingsGroup>
                <SettingsGroup label="Accessibility">
                  {[{i:"vol",l:"Text to Speech",s:"Reads titles & alerts aloud",on:tts,set:setTts},{i:"eye",l:"High Contrast",s:"Maximum contrast for low vision",on:hc,set:setHc}].map((r,idx)=>(
                    <div key={r.l}>
                      {idx>0&&<HR/>}
                      <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
                        <Ic n={r.i} sz={18} c={meta_}/>
                        <div style={{flex:1}}>
                          <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>{r.l}</div>
                          <div style={{fontSize:FS.xs,color:meta_,marginTop:1,fontFamily:"'Lato',sans-serif"}}>{r.s}</div>
                        </div>
                        <Toggle on={r.on} set={r.set}/>
                      </div>
                    </div>
                  ))}
                </SettingsGroup>
                <SettingsGroup label="Notifications">
                  {[{k:"urgent",l:"Urgent",s:"Overdue · Fine added",i:"warn"},{k:"headsup",l:"Heads Up",s:"Due soon · Pickup ready",i:"bell"},{k:"fyi",l:"FYI",s:"Events · Wishlist",i:"trend"}].map((lvl,i)=>(
                    <div key={lvl.k}>
                      {i>0&&<HR/>}
                      <div onClick={()=>setNO(nOpen===lvl.k?null:lvl.k)} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 0",cursor:"pointer"}}>
                        <Ic n={lvl.i} sz={17} c={meta_}/>
                        <div style={{flex:1}}>
                          <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>{lvl.l}</div>
                          <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>{lvl.s}</div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:6}}>
                          <Tag ch={notif[lvl.k]==="sms"?"Text":notif[lvl.k]==="push"?"Push":notif[lvl.k]==="call"?"Call":"Off"}/>
                          <Ic n={nOpen===lvl.k?"cU":"cD"} sz={13} c={meta_}/>
                        </div>
                      </div>
                      {nOpen===lvl.k && (
                        <div style={{display:"flex",gap:7,paddingBottom:10}} className="fd">
                          {[{k:"sms",l:"Text"},{k:"push",l:"Push"},{k:"call",l:"Call"},{k:"none",l:"Off"}].map(ch=>(
                            <button key={ch.k} onClick={()=>setNotif(p=>({...p,[lvl.k]:ch.k}))} style={{flex:1,padding:"10px 4px",border:`1px solid ${notif[lvl.k]===ch.k?(hc?ac:P.ink):br}`,borderRadius:10,background:notif[lvl.k]===ch.k?(hc?ac:P.ink):"transparent",cursor:"pointer",transition:"all .15s",display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
                              <Ic n={ch.k==="call"?"vol":"bell"} sz={15} c={notif[lvl.k]===ch.k?(hc?"#000":"#fff"):meta_}/>
                              <span style={{fontSize:FS.xs,fontWeight:700,color:notif[lvl.k]===ch.k?(hc?"#000":"#fff"):meta_,fontFamily:"'Lato',sans-serif"}}>{ch.l}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <HR/>
                  <div style={{display:"flex",alignItems:"center",gap:12,paddingTop:10}}>
                    <Ic n="bell" sz={17} c={meta_}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Do Not Disturb</div>
                      <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>Pause non-urgent 9pm–8am</div>
                    </div>
                    <Toggle on={dnd} set={setDnd}/>
                  </div>
                </SettingsGroup>
                <SettingsGroup label="Privacy Center">
                  <div onClick={()=>setPrivOpen(p=>!p)} style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer",paddingBottom:privacyOpen?10:0}}>
                    <Ic n="eye" sz={17} c={meta_}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Your Data & Privacy</div>
                      <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>Library records are protected by state law</div>
                    </div>
                    <Ic n={privacyOpen?"cU":"cD"} sz={13} c={meta_}/>
                  </div>
                  {privacyOpen && (<div className="fd">
                    <HR/>
                    <div style={{background:"#F0F4FF",border:`1px solid #C8D8F5`,borderRadius:10,padding:"11px 12px",margin:"10px 0",fontSize:FS.xs,color:"#3A5A9A",fontFamily:"'Lato',sans-serif",lineHeight:1.5}}>
                      Under state library privacy law, your circulation records are confidential and cannot be disclosed without your consent. Oh Curio! stores your data on US servers only and never sells patron information.
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
                      <div style={{flex:1}}>
                        <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Reading History</div>
                        <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>Store your borrowing history in Oh Curio!</div>
                      </div>
                      <Toggle on={histConsent} set={setHConsent}/>
                    </div>
                    <HR/>
                    <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0"}}>
                      <div style={{flex:1}}>
                        <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Wishlist</div>
                        <div style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>Save titles you want to borrow</div>
                      </div>
                      <Toggle on={wishOptIn} set={setWishOptIn}/>
                    </div>
                    <HR/>
                    <button onClick={()=>pop("Data deletion request sent.")} style={{background:"none",border:"none",color:hc?ac:P.terra,fontSize:FS.xs,fontWeight:700,fontFamily:"'Lato',sans-serif",cursor:"pointer",padding:"10px 0",textAlign:"left",width:"100%"}}>
                      Request deletion of my data →
                    </button>
                  </div>)}
                </SettingsGroup>
                <div style={{background:sf,borderRadius:16,border:`1px solid ${br}`,padding:"16px 18px",boxShadow:"0 1px 4px rgba(26,23,20,.04)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h2,fontWeight:700,color:ink_}}>{pro?"Oh Curio! Pro":"Oh Curio!"}</div>
                      <div style={{fontSize:FS.xs,color:meta_,marginTop:3,fontFamily:"'Lato',sans-serif"}}>{pro?"All features active · $2.99/mo":"Upgrade for insights & early access"}</div>
                    </div>
                    {!pro&&<Btn label="Upgrade" s={{padding:"9px 15px",fontSize:FS.xs}} onClick={()=>setModal({t:"upgrade"})}/>}
                    {pro&&<Ic n="star" sz={20} c={P.amber}/>}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* BOTTOM NAV */}
          <nav style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:sf,borderTop:`1px solid ${br}`,display:"flex",padding:"8px 0 22px",zIndex:50,boxShadow:"0 -2px 14px rgba(26,23,20,.07)"}}>
            {NAV.map(n=>(
              <button key={n.k} className="nb" onClick={()=>setTab(n.k)}>
                <Ic n={n.i} sz={22} c={tab===n.k?(hc?ac:P.terra):P.ghost} sw={tab===n.k?2:1.6}/>
                <span style={{fontSize:FS.xs-1,fontWeight:tab===n.k?900:400,color:tab===n.k?(hc?ac:P.terra):meta_,fontFamily:"'Lato',sans-serif",letterSpacing:".2px"}}>{n.l}</span>
              </button>
            ))}
          </nav>
        </>
      )}

      {/* MODALS */}
      {modal?.t==="item" && (()=>{ const d=modal.d; return (
        <div className="mo" onClick={()=>setModal(null)}>
          <div className="ms up" onClick={e=>e.stopPropagation()}>
            <div className="mh"/>
            <div style={{display:"flex",gap:18,marginBottom:22}}>
              <Cover id={d.id} w={96} h={136} r={12}/>
              <div style={{flex:1,paddingTop:2}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h2+2,fontWeight:700,color:ink_,lineHeight:1.2,marginBottom:5}}>{d.title}</div>
                <div style={{fontSize:FS.body,color:meta_,marginBottom:11,fontFamily:"'Lato',sans-serif"}}>{d.author}</div>
                <div style={{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10}}>
                  <Tag ch={d.type}/>
                  {d.genre&&<Tag ch={d.genre}/>}
                </div>
                {d.available&&<StatusLine type="ok" label="Available now"/>}
                {d.waitlist&&<StatusLine type="neutral" label={`${d.waitlist} in queue`}/>}
              </div>
            </div>
            <div style={{display:"flex",gap:10}}>
              {d.available
                ?<Btn label="Reserve" s={{flex:1,padding:13}} onClick={()=>reserve(d.id)}/>
                :<Btn label="Join Waitlist" v="outline" s={{flex:1,padding:13}} onClick={()=>reserve(d.id)}/>
              }
              <Btn label="Save" v="outline" s={{flex:1,padding:13}} onClick={()=>saveW(d)}/>
            </div>
          </div>
        </div>
      ); })()}

      {modal?.t==="event" && (()=>{ const d=modal.d; return (
        <div className="mo" onClick={()=>setModal(null)}>
          <div className="ms up" onClick={e=>e.stopPropagation()}>
            <div className="mh"/>
            <div style={{width:54,height:54,borderRadius:14,background:`${P.amber}18`,border:`1px solid ${P.amber}20`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16,fontSize:26}}>
              {d.cat==="Kids"?"🧸":d.cat==="Teen"?"✏️":"📚"}
            </div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_,marginBottom:4}}>{d.title}</div>
            <div style={{fontSize:FS.xs,color:meta_,marginBottom:2,fontFamily:"'Lato',sans-serif"}}>{d.date} · {d.time}</div>
            <div style={{fontSize:FS.xs,color:meta_,marginBottom:16,display:"flex",alignItems:"center",gap:4,fontFamily:"'Lato',sans-serif"}}><Ic n="pin" sz={11} c={meta_}/>Maplewood Library</div>
            <div style={{display:"flex",gap:8,marginBottom:22,alignItems:"center"}}>
              <Tag ch={d.cat}/>
              <Tag ch={d.price>0?`$${d.price} + $${(d.price*.04).toFixed(2)} fee`:"Free"}/>
              {d.spots===0?<StatusLine type="alert" label="Full"/>:<span style={{fontSize:FS.xs,color:meta_,fontFamily:"'Lato',sans-serif"}}>{d.spots} spots left</span>}
            </div>
            {d.reg
              ?<div style={{background:P.sageBg,borderRadius:12,padding:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                <Ic n="check" sz={15} c={hc?ac:P.sage}/><span style={{fontSize:FS.body,color:hc?ac:P.sage,fontWeight:700,fontFamily:"'Lato',sans-serif"}}>You're registered</span>
               </div>
              :<Btn label={d.price>0?`Register & Pay $${(d.price*1.04).toFixed(2)}`:"Register — Free"} s={{width:"100%",padding:14}} onClick={()=>regEv(d)}/>
            }
          </div>
        </div>
      ); })()}

      {modal?.t==="pay" && (
        <div className="mo" onClick={()=>setModal(null)}>
          <div className="ms up" onClick={e=>e.stopPropagation()}>
            <div className="mh"/>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_,marginBottom:4}}>Pay Fine</div>
            <div style={{fontSize:FS.body,color:meta_,marginBottom:22,fontFamily:"'Lato',sans-serif"}}>Intermezzo · Overdue since March 10</div>
            <div style={{background:ins,borderRadius:14,padding:18,marginBottom:20}}>
              {[["Overdue fine","$1.50"],["Processing fee","$0.00"]].map(([l,v])=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0"}}>
                  <span style={{fontSize:FS.body,color:meta_,fontFamily:"'Lato',sans-serif"}}>{l}</span>
                  <span style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>{v}</span>
                </div>
              ))}
              <HR/>
              <div style={{display:"flex",justifyContent:"space-between",paddingTop:12}}>
                <span style={{fontSize:FS.md,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>Total</span>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:hc?ac:P.terra}}>$1.50</span>
              </div>
            </div>
            {["Card ending in 4242","Apple Pay","Google Pay"].map((m,i)=>(
              <div key={i} style={{padding:"12px 15px",background:i===0?ins:sf,borderRadius:12,marginBottom:8,border:`1px solid ${i===0?(hc?ac:P.amber):br}`,fontSize:FS.body,color:ink_,cursor:"pointer",display:"flex",alignItems:"center",gap:12,fontFamily:"'Lato',sans-serif"}}>
                <Ic n="card" sz={16} c={meta_}/>{m}
                {i===0&&<div style={{marginLeft:"auto"}}><Ic n="check" sz={13} c={hc?ac:P.sage}/></div>}
              </div>
            ))}
            <Btn label="Pay $1.50" v="terra" s={{width:"100%",padding:14,marginTop:10}} onClick={()=>{setPaid(true);setModal(null);pop("Fine paid — thank you.");}}/>
          </div>
        </div>
      )}

      {modal?.t==="upgrade" && (
        <div className="mo" onClick={()=>setModal(null)}>
          <div className="ms up" onClick={e=>e.stopPropagation()}>
            <div className="mh"/>
            <div style={{textAlign:"center",marginBottom:24}}>
              <div style={{width:64,height:64,borderRadius:18,background:P.inset,border:`1px solid ${br}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:40,fontWeight:700,color:ink_,lineHeight:1}}>F</span>
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:FS.h1,fontWeight:700,color:ink_}}>Oh Curio! Pro</div>
              <div style={{fontSize:FS.body,color:meta_,marginTop:4,fontFamily:"'Lato',sans-serif"}}>Everything for your whole family</div>
            </div>
            {[["trend","Reading insights & yearly stats"],["cal","Early event access — 48 hrs early"],["bell","Smart, non-intrusive notifications"],["team","Unlimited family cards"],["book","Full borrowing history — all types"]].map(([ico,lbl])=>(
              <div key={lbl} style={{display:"flex",gap:13,alignItems:"center",padding:"13px 0",borderBottom:`1px solid ${br}`}}>
                <Ic n={ico} sz={18} c={meta_} sw={1.5}/>
                <div style={{fontSize:FS.body,fontWeight:700,color:ink_,fontFamily:"'Lato',sans-serif"}}>{lbl}</div>
              </div>
            ))}
            <Btn label="Start for $2.99/month" s={{width:"100%",padding:14,marginTop:22}} onClick={()=>{setPro(true);setModal(null);pop("Welcome to Oh Curio! Pro.");}}/>
            <p style={{textAlign:"center",fontSize:FS.xs,color:meta_,marginTop:10,fontFamily:"'Lato',sans-serif"}}>Cancel anytime · All family cards included</p>
          </div>
        </div>
      )}

      {toast && (
        <div style={{position:"fixed",top:72,left:"50%",transform:"translateX(-50%)",background:P.ink,color:"#fff",borderRadius:50,padding:"11px 22px",fontSize:FS.body,fontWeight:700,zIndex:200,whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(26,23,20,.2)",animation:"slideUp .22s ease",fontFamily:"'Lato',sans-serif",letterSpacing:".2px"}}>
          {toast}
        </div>
      )}
    </div>
  );
}
