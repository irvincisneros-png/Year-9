/* Three lines of defence — clickable body diagram */
function ThreeLines() {
  const [line, setLine] = useState(1);
  const info = {
    1: {
      title: "First line: physical & chemical barriers",
      color: "var(--emerald)",
      desc: "Stops pathogens getting in. Most pathogens never get past this line.",
      items: [
        { name: "Skin", detail: "Waterproof, multi-layered physical barrier." },
        { name: "Mucus & cilia", detail: "Line airways; trap and sweep out pathogens." },
        { name: "Stomach acid", detail: "Kills most bacteria in swallowed food." },
        { name: "Tears & saliva", detail: "Contain lysozyme, which destroys bacterial cell walls." },
        { name: "Sweat", detail: "Slightly acidic — slows bacterial growth." },
        { name: "Good bacteria", detail: "Out-compete pathogens in gut, skin, mouth." },
      ]
    },
    2: {
      title: "Second line: non-specific (innate) immune response",
      color: "var(--orange)",
      desc: "Works the same way for every pathogen. Fast but not targeted.",
      items: [
        { name: "Inflammation", detail: "Blood vessels widen; area goes red, warm, swollen — packed with immune cells." },
        { name: "Phagocytosis", detail: "White blood cells (macrophages, neutrophils) engulf and digest pathogens." },
        { name: "Fever", detail: "Hypothalamus raises body temp to slow bacterial growth." },
        { name: "Natural killer cells", detail: "Destroy virus-infected and cancerous body cells." },
      ]
    },
    3: {
      title: "Third line: specific (adaptive) immune response",
      color: "#dc2626",
      desc: "Specifically targets that one pathogen — and remembers it.",
      items: [
        { name: "B-cells", detail: "Produce antibodies that bind to a specific antigen." },
        { name: "Helper T-cells", detail: "Activate other immune cells." },
        { name: "Killer T-cells", detail: "Destroy body cells infected with a virus." },
        { name: "Memory cells", detail: "Persist for years — why you only get chickenpox once." },
      ]
    }
  };

  const cur = info[line];

  return (
    <div style={{display:"grid",gridTemplateColumns:"200px 1fr",gap:16}}>
      <div>
        <svg viewBox="0 0 120 220" style={{width:"100%"}}>
          {/* body silhouette */}
          <ellipse cx="60" cy="25" rx="18" ry="22" fill="var(--bg-elev)" stroke="var(--ink-soft)" strokeWidth="1.5"/>
          <path d="M 30 50 Q 30 45 42 45 L 78 45 Q 90 45 90 50 L 95 120 Q 95 140 85 145 L 85 200 L 75 200 L 70 150 L 60 150 L 50 150 L 45 200 L 35 200 L 35 145 Q 25 140 25 120 Z" fill="var(--bg-elev)" stroke="var(--ink-soft)" strokeWidth="1.5"/>
          {/* line 1 outer glow */}
          <path d="M 30 50 Q 30 45 42 45 L 78 45 Q 90 45 90 50 L 95 120 Q 95 140 85 145 L 85 200 L 75 200 L 70 150 L 60 150 L 50 150 L 45 200 L 35 200 L 35 145 Q 25 140 25 120 Z"
                fill="none" stroke={line>=1?info[1].color:"transparent"} strokeWidth="3" opacity={line===1?0.8:0.3} className="pulse"/>
          {line>=2 && <circle cx="60" cy="95" r="8" fill="none" stroke={info[2].color} strokeWidth="2" opacity={line===2?0.9:0.3}/>}
          {line>=2 && <circle cx="45" cy="110" r="5" fill="none" stroke={info[2].color} strokeWidth="2" opacity={line===2?0.9:0.3}/>}
          {line>=2 && <circle cx="75" cy="108" r="5" fill="none" stroke={info[2].color} strokeWidth="2" opacity={line===2?0.9:0.3}/>}
          {line>=3 && <path d="M 50 95 L 55 100 L 65 90 L 70 95" fill="none" stroke={info[3].color} strokeWidth="2" opacity={line===3?0.9:0.3}/>}
          {line>=3 && <circle cx="60" cy="125" r="3" fill={info[3].color} opacity={line===3?0.9:0.3}/>}
          {line>=3 && <circle cx="50" cy="135" r="3" fill={info[3].color} opacity={line===3?0.9:0.3}/>}
          {line>=3 && <circle cx="70" cy="130" r="3" fill={info[3].color} opacity={line===3?0.9:0.3}/>}
        </svg>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginTop:8}}>
          {[1,2,3].map(n => (
            <button key={n} onClick={() => setLine(n)}
              style={{
                padding:"8px 12px",
                border:"1.5px solid " + (line===n ? info[n].color : "var(--border)"),
                background: line===n ? info[n].color : "var(--bg-elev)",
                color: line===n ? "white" : "var(--ink)",
                borderRadius:8,
                fontFamily:"inherit",
                fontSize:13,
                fontWeight:500,
                cursor:"pointer",
                textAlign:"left",
              }}>Line {n}</button>
          ))}
        </div>
      </div>
      <div>
        <div style={{padding:16,background:"var(--bg-elev)",border:`2px solid ${cur.color}`,borderRadius:"var(--radius)"}}>
          <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.08em",color:cur.color,fontWeight:600,marginBottom:4}}>Line {line}</div>
          <h4 style={{margin:"0 0 6px",fontSize:16}}>{cur.title}</h4>
          <p style={{fontSize:13,color:"var(--ink-muted)",margin:"0 0 12px"}}>{cur.desc}</p>
          <div style={{display:"grid",gap:8}}>
            {cur.items.map(it => (
              <div key={it.name} style={{padding:10,background:"var(--bg-sunken)",borderRadius:6}}>
                <strong style={{fontSize:13}}>{it.name}</strong>
                <div style={{fontSize:12,color:"var(--ink-muted)",marginTop:2}}>{it.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
window.ThreeLines = ThreeLines;
