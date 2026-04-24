/* Endemic / epidemic / pandemic animated case curves */
function EpidemicCurves() {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT(x => (x + 1) % 120), 80);
    return () => clearInterval(id);
  }, [playing]);

  const W = 520, H = 200, margin = 30;
  const curveW = W - margin * 2;
  const curveH = H - margin - 10;

  const endemic = (x) => 12 + Math.sin(x * 0.15) * 3 + Math.sin(x * 0.4) * 2;
  const epidemic = (x) => {
    const peak = 50;
    return 8 + 120 * Math.exp(-Math.pow((x - peak) / 14, 2));
  };
  const pandemic = (x) => {
    const peak = 55;
    return 5 + 180 * Math.exp(-Math.pow((x - peak) / 25, 2)) + (x > 80 ? 30 * Math.exp(-Math.pow((x - 95) / 10, 2)) : 0);
  };

  const buildPath = (fn, upTo) => {
    let d = "";
    for (let x = 0; x <= upTo; x++) {
      const px = margin + (x / 120) * curveW;
      const py = margin + curveH - (Math.min(fn(x), 200) / 200) * curveH;
      d += (x === 0 ? "M" : "L") + " " + px + " " + py + " ";
    }
    return d;
  };

  const Card = ({ fn, color, label, desc, example }) => {
    const d = buildPath(fn, t);
    const px = margin + (t / 120) * curveW;
    const py = margin + curveH - (Math.min(fn(t), 200) / 200) * curveH;
    return (
      <div style={{background:"var(--bg-elev)",border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:14}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
          <div style={{width:10,height:10,borderRadius:"50%",background:color}}></div>
          <strong style={{fontSize:14}}>{label}</strong>
        </div>
        <div style={{fontSize:12,color:"var(--ink-muted)",marginBottom:6,minHeight:32}}>{desc}</div>
        <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:120,background:"var(--bg-sunken)",borderRadius:6}}>
          <line x1={margin} x2={W-10} y1={margin+curveH} y2={margin+curveH} stroke="var(--border)" strokeWidth="1"/>
          <line x1={margin} x2={margin} y1={margin} y2={margin+curveH} stroke="var(--border)" strokeWidth="1"/>
          <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round"/>
          <circle cx={px} cy={py} r="4" fill={color}/>
          <text x={margin} y={H-4} fontSize="10" fill="var(--ink-muted)" fontFamily="var(--font-mono)">time →</text>
          <text x="4" y={margin+10} fontSize="10" fill="var(--ink-muted)" fontFamily="var(--font-mono)" transform={`rotate(-90, 8, ${margin+10})`}>cases</text>
        </svg>
        <div style={{fontSize:11,color:"var(--ink-muted)",marginTop:6}}><em>{example}</em></div>
      </div>
    );
  };

  return (
    <div>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <button className="btn ghost" onClick={() => setPlaying(p => !p)}>{playing ? "Pause" : "Play"}</button>
        <button className="btn ghost" onClick={() => setT(0)}>Restart</button>
        <input type="range" min="0" max="119" value={t} onChange={e => { setT(+e.target.value); setPlaying(false); }} style={{flex:1}}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12}}>
        <Card fn={endemic} color="var(--emerald)" label="Endemic" desc="Constantly present at a low, predictable level." example="Malaria in sub-Saharan Africa"/>
        <Card fn={epidemic} color="var(--orange)" label="Epidemic" desc="A sudden spike above expected levels in a region." example="Measles in Samoa, 2019"/>
        <Card fn={pandemic} color="#dc2626" label="Pandemic" desc="An epidemic across many countries / continents." example="COVID-19, 2020–23"/>
      </div>
    </div>
  );
}
window.EpidemicCurves = EpidemicCurves;
