/* Chain of infection — click to break links */
function ChainOfInfection() {
  const links = [
    { id: "pathogen", name: "Pathogen", desc: "The organism that causes disease.", break: "Antibiotics, disinfectants, pasteurising milk." },
    { id: "reservoir", name: "Reservoir", desc: "Where the pathogen lives — sick humans, animals, water.", break: "Isolate patients, control mosquito populations." },
    { id: "exit", name: "Portal of exit", desc: "How pathogen leaves the host — coughs, blood, faeces.", break: "Cover coughs, safe waste disposal." },
    { id: "transmission", name: "Transmission", desc: "How pathogen travels — droplet, contact, vector.", break: "Masks, handwashing, mosquito nets." },
    { id: "entry", name: "Portal of entry", desc: "How pathogen enters new host — mouth, wounds, eyes.", break: "Gloves, bandages, safe food handling." },
    { id: "host", name: "Susceptible host", desc: "A person who can be infected.", break: "Vaccination, good nutrition, rest." },
  ];
  const [broken, setBroken] = useState({});
  const toggle = (id) => setBroken(b => ({...b, [id]: !b[id]}));
  const breakCount = Object.values(broken).filter(Boolean).length;

  return (
    <div>
      <div style={{padding:12,background:"var(--bg-elev)",border:"1px solid var(--border)",borderRadius:8,marginBottom:12,fontSize:13,color:"var(--ink-soft)"}}>
        <strong>Click any link to break it.</strong> Breaking <em>any one</em> stops the chain — that's the core idea.
        &nbsp;Links broken: <strong style={{color:"var(--accent)"}}>{breakCount}/6</strong>
        {breakCount > 0 && <span style={{color:"var(--emerald)",fontWeight:600}}> — chain stopped ✓</span>}
      </div>
      <div style={{display:"flex",flexWrap:"wrap",gap:0,justifyContent:"center",alignItems:"center"}}>
        {links.map((link, i) => (
          <React.Fragment key={link.id}>
            <button
              onClick={() => toggle(link.id)}
              style={{
                background: broken[link.id] ? "var(--bg-sunken)" : "var(--accent)",
                color: broken[link.id] ? "var(--ink-faint)" : "white",
                border:"2px solid " + (broken[link.id] ? "var(--border-strong)" : "var(--accent)"),
                borderRadius:"50%",
                width:90,
                height:90,
                cursor:"pointer",
                fontFamily:"inherit",
                fontSize:11,
                fontWeight:600,
                padding:4,
                textAlign:"center",
                transition:"all 0.2s",
                opacity: broken[link.id] ? 0.5 : 1,
                textDecoration: broken[link.id] ? "line-through" : "none",
                lineHeight:1.2,
              }}
            >{link.name}</button>
            {i < links.length - 1 && (
              <div style={{
                width:30,
                height:4,
                background: (broken[links[i].id] || broken[links[i+1].id]) ? "transparent" : "var(--accent)",
                position:"relative",
                borderTop: (broken[links[i].id] || broken[links[i+1].id]) ? "2px dashed var(--border-strong)" : "none",
              }}/>
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{marginTop:16,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:8}}>
        {links.map(link => (
          <div key={link.id} style={{
            padding:10,
            background: broken[link.id] ? "var(--accent-soft)" : "var(--bg-elev)",
            border:`1px solid ${broken[link.id] ? "var(--accent)" : "var(--border)"}`,
            borderRadius:8,
            fontSize:12,
          }}>
            <strong>{link.name}</strong>
            <div style={{color:"var(--ink-muted)",marginTop:2}}>{link.desc}</div>
            <div style={{color:"var(--accent-ink)",marginTop:4,fontWeight:500}}>Break with: {link.break}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.ChainOfInfection = ChainOfInfection;
