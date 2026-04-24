/* Herd immunity simulator */
function HerdImmunity() {
  const [cov, setCov] = useState(60);
  const [disease, setDisease] = useState("measles");
  const N = 200;
  const diseases = {
    measles: { name: "Measles", r0: 15, thresh: 95 },
    covid: { name: "COVID-19", r0: 3, thresh: 75 },
    flu: { name: "Influenza", r0: 1.5, thresh: 40 },
    polio: { name: "Polio", r0: 6, thresh: 85 },
  };
  const d = diseases[disease];
  const protected_ = cov >= d.thresh;

  const people = useMemo(() => {
    const arr = Array.from({length: N}, (_, i) => {
      const vax = i < Math.floor(N * cov / 100);
      return { vax, x: Math.random()*380+10, y: Math.random()*180+10 };
    });
    return arr.sort(() => Math.random() - 0.5);
  }, [cov]);

  return (
    <div>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center",marginBottom:12}}>
        <label style={{fontSize:13}}>Disease:
          <select value={disease} onChange={e=>setDisease(e.target.value)} style={{marginLeft:6,padding:"4px 8px",borderRadius:6,border:"1px solid var(--border)",background:"var(--bg-elev)",fontFamily:"inherit"}}>
            {Object.entries(diseases).map(([k,v]) => <option key={k} value={k}>{v.name} (R₀ ≈ {v.r0}, needs {v.thresh}%)</option>)}
          </select>
        </label>
      </div>
      <label style={{fontSize:13,fontWeight:500,display:"block",marginBottom:4}}>Vaccination coverage: <strong>{cov}%</strong> — {d.name} needs <strong>{d.thresh}%</strong> for herd immunity</label>
      <input type="range" min="0" max="100" value={cov} onChange={e=>setCov(+e.target.value)} style={{width:"100%"}}/>
      <svg viewBox="0 0 400 200" style={{width:"100%",background:"var(--bg-elev)",border:"1px solid var(--border)",borderRadius:8,marginTop:12}}>
        {people.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="5" fill={p.vax ? "#059669" : "#f59e0b"} opacity={p.vax ? 1 : 0.9}/>
        ))}
      </svg>
      <div style={{marginTop:12,padding:12,borderRadius:8,background: protected_ ? "var(--emerald-soft)" : "#fef3c7",color: protected_ ? "var(--emerald-ink)" : "#78350f",fontSize:13}}>
        {protected_
          ? <><strong>✓ Herd immunity achieved.</strong> The pathogen cannot find enough hosts to spread — even unvaccinated people (orange) are indirectly protected. This is why vaccination programs protect newborns, chemo patients, and people with severe allergies who can't be vaccinated.</>
          : <><strong>⚠ Below threshold.</strong> An outbreak is possible. Unvaccinated people (orange) are at risk, and so are vulnerable people who can't be vaccinated. Slide up to {d.thresh}%.</>}
      </div>
      <div style={{fontSize:11,color:"var(--ink-muted)",marginTop:8}}>R₀ = the average number of people one infected person would infect in a fully susceptible population. Higher R₀ needs higher coverage for herd immunity.</div>
    </div>
  );
}
window.HerdImmunity = HerdImmunity;
