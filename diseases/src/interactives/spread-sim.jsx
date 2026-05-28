/* Disease spread simulation (based on NaOH cup practical) */
function SpreadSim() {
  const GRID = 12;
  const total = GRID * GRID;
  const [vaxRate, setVaxRate] = useState(0);
  const [hygiene, setHygiene] = useState(0);
  const [step, setStep] = useState(0);
  const [people, setPeople] = useState(null);
  const [running, setRunning] = useState(false);

  const init = () => {
    const vaxN = Math.floor(total * (vaxRate/100));
    const arr = Array.from({length: total}, () => ({state:"s", vax:false}));
    const shuffled = [...Array(total).keys()].sort(() => Math.random()-0.5);
    for (let i = 0; i < vaxN; i++) arr[shuffled[i]].vax = true;
    // patient zero - random unvaxed
    const unvaxed = arr.map((p,i) => !p.vax ? i : -1).filter(i => i >= 0);
    if (unvaxed.length) arr[unvaxed[Math.floor(Math.random()*unvaxed.length)]].state = "i";
    setPeople(arr);
    setStep(0);
  };

  useEffect(() => { init(); }, []);

  const doStep = useCallback(() => {
    setPeople(prev => {
      if (!prev) return prev;
      const next = prev.map(p => ({...p}));
      // each infected person contacts a random neighbor-ish
      prev.forEach((p, i) => {
        if (p.state !== "i") return;
        // pick a random partner
        const partnerI = Math.floor(Math.random() * total);
        if (partnerI === i) return;
        const partner = next[partnerI];
        if (partner.state !== "s") return;
        if (partner.vax) return;
        // hygiene reduces transmission
        if (Math.random() < hygiene/100) return;
        partner.state = "i";
      });
      return next;
    });
    setStep(s => s + 1);
  }, [hygiene]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => doStep(), 600);
    return () => clearInterval(id);
  }, [running, doStep]);

  useEffect(() => { if (step >= 8) setRunning(false); }, [step]);

  const infected = people?.filter(p => p.state === "i").length || 0;
  const vaxCount = people?.filter(p => p.vax).length || 0;
  const pctInfected = people ? (infected/total*100).toFixed(0) : 0;

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
        <div>
          <label style={{fontSize:13,fontWeight:500,display:"block",marginBottom:4}}>Vaccination rate: <strong>{vaxRate}%</strong></label>
          <input type="range" min="0" max="100" step="5" value={vaxRate} onChange={e => setVaxRate(+e.target.value)} style={{width:"100%"}}/>
          <label style={{fontSize:13,fontWeight:500,display:"block",margin:"12px 0 4px"}}>Handwashing effectiveness: <strong>{hygiene}%</strong></label>
          <input type="range" min="0" max="100" step="5" value={hygiene} onChange={e => setHygiene(+e.target.value)} style={{width:"100%"}}/>
          <div style={{display:"flex",gap:8,marginTop:14}}>
            <button className="btn accent" onClick={() => { init(); setRunning(true); }}>Reset & run</button>
            <button className="btn ghost" onClick={() => setRunning(r => !r)} disabled={step >= 8}>{running ? "Pause" : "Play"}</button>
            <button className="btn ghost" onClick={doStep} disabled={step >= 8 || running}>Step</button>
          </div>
          <div style={{marginTop:14,fontSize:13,display:"grid",gap:4}}>
            <div>Round: <strong>{step}/8</strong></div>
            <div style={{color:"#dc2626"}}>Infected: <strong>{infected}</strong> ({pctInfected}%)</div>
            <div style={{color:"var(--emerald)"}}>Vaccinated: <strong>{vaxCount}</strong></div>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:`repeat(${GRID},1fr)`,gap:3,background:"var(--bg-elev)",padding:8,borderRadius:8,border:"1px solid var(--border)"}}>
          {people?.map((p, i) => {
            let bg = "#d6d3cc";
            if (p.vax) bg = "#059669";
            if (p.state === "i") bg = "#dc2626";
            return <div key={i} style={{aspectRatio:"1",background:bg,borderRadius:3,transition:"background 0.3s"}}/>;
          })}
        </div>
      </div>
      <div style={{fontSize:12,color:"var(--ink-muted)",marginTop:10,display:"flex",gap:16,flexWrap:"wrap"}}>
        <span><span style={{display:"inline-block",width:10,height:10,background:"#d6d3cc",borderRadius:2,marginRight:4,verticalAlign:"middle"}}></span>Susceptible</span>
        <span><span style={{display:"inline-block",width:10,height:10,background:"#dc2626",borderRadius:2,marginRight:4,verticalAlign:"middle"}}></span>Infected</span>
        <span><span style={{display:"inline-block",width:10,height:10,background:"#059669",borderRadius:2,marginRight:4,verticalAlign:"middle"}}></span>Vaccinated</span>
      </div>
      <div style={{fontSize:12,color:"var(--ink-muted)",marginTop:10,padding:10,background:"var(--bg-elev)",border:"1px solid var(--border)",borderRadius:8}}>
        <strong>Try it:</strong> run the sim at 0% vax, then at 70%, then at 95%. Notice how even unvaccinated people are protected at high vax rates — that's <G term="herd immunity">herd immunity</G>. This is the same idea as the NaOH cup practical, but we can run it many times.
      </div>
    </div>
  );
}
window.SpreadSim = SpreadSim;
