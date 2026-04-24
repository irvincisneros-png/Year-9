/* Vaccine / immune response — primary vs secondary response graph */
function VaccineResponse() {
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setPhase(p => p >= 120 ? 120 : p + 1), 80);
    return () => clearInterval(id);
  }, [playing]);

  const W = 540, H = 240, margin = 36;

  // First exposure (vaccine or infection) at t=10, second at t=70
  const primary = (x) => {
    if (x < 10) return 0;
    const t = x - 10;
    return t < 20 ? 25 * (1 - Math.exp(-t/8)) : 25 * Math.exp(-(t-20)/25);
  };
  const secondary = (x) => {
    if (x < 70) return 0;
    const t = x - 70;
    return t < 8 ? 90 * (1 - Math.exp(-t/3)) : 90 * Math.exp(-(t-8)/30);
  };
  const total = (x) => primary(x) + secondary(x);

  const y = (v) => H - margin - (v / 100) * (H - margin * 2);
  const xx = (t) => margin + (t / 120) * (W - margin * 2);

  const buildPath = (fn, upTo) => {
    let d = "";
    for (let t = 0; t <= upTo; t += 0.5) {
      d += (d ? "L" : "M") + " " + xx(t) + " " + y(fn(t)) + " ";
    }
    return d;
  };

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",maxHeight:280,background:"var(--bg-elev)",borderRadius:8,border:"1px solid var(--border)"}}>
        {/* axes */}
        <line x1={margin} x2={W-10} y1={H-margin} y2={H-margin} stroke="var(--ink-soft)" strokeWidth="1"/>
        <line x1={margin} x2={margin} y1={margin} y2={H-margin} stroke="var(--ink-soft)" strokeWidth="1"/>
        <text x={W/2} y={H-6} fontSize="11" fill="var(--ink-muted)" textAnchor="middle">Time →</text>
        <text x="10" y={H/2} fontSize="11" fill="var(--ink-muted)" textAnchor="middle" transform={`rotate(-90, 10, ${H/2})`}>Antibody level</text>

        {/* Exposure markers */}
        {phase >= 10 && <>
          <line x1={xx(10)} x2={xx(10)} y1={margin} y2={H-margin} stroke="var(--accent)" strokeDasharray="3 3" strokeWidth="1" opacity="0.5"/>
          <text x={xx(10)} y={margin-6} fontSize="10" fill="var(--accent)" textAnchor="middle" fontFamily="var(--font-mono)">1st exposure (vaccine)</text>
        </>}
        {phase >= 70 && <>
          <line x1={xx(70)} x2={xx(70)} y1={margin} y2={H-margin} stroke="#dc2626" strokeDasharray="3 3" strokeWidth="1" opacity="0.5"/>
          <text x={xx(70)} y={margin-6} fontSize="10" fill="#dc2626" textAnchor="middle" fontFamily="var(--font-mono)">2nd exposure (real pathogen)</text>
        </>}

        {/* Curve */}
        <path d={buildPath(total, phase)} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round"/>

        {/* Labels */}
        {phase > 30 && <text x={xx(25)} y={y(28)} fontSize="11" fill="var(--ink-soft)">Primary response (slow, small)</text>}
        {phase > 85 && <text x={xx(80)} y={y(92)} fontSize="11" fill="#dc2626" fontWeight="600">Secondary response (fast, large)</text>}
      </svg>
      <div style={{display:"flex",gap:8,marginTop:12}}>
        <button className="btn ghost" onClick={() => setPlaying(p => !p)}>{playing ? "Pause" : "Play"}</button>
        <button className="btn ghost" onClick={() => { setPhase(0); setPlaying(true); }}>Restart</button>
        <input type="range" min="0" max="120" value={phase} onChange={e => { setPhase(+e.target.value); setPlaying(false); }} style={{flex:1}}/>
      </div>
      <div style={{fontSize:12,color:"var(--ink-muted)",marginTop:10,padding:10,background:"var(--bg-elev)",border:"1px solid var(--border)",borderRadius:8}}>
        The first exposure (a vaccine, or an infection) triggers a slow, small <G term="b-cell">B-cell</G> response. Crucially, some B-cells become <G term="memory cell">memory cells</G>. If the real pathogen arrives later, the memory cells recognise it instantly — the second response is <strong>much bigger and faster</strong>, so the person either doesn't get sick or has only mild symptoms.
      </div>
    </div>
  );
}
window.VaccineResponse = VaccineResponse;
