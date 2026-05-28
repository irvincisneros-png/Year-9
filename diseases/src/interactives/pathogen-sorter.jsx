/* Drag-and-drop pathogen / disease sorter */
function PathogenSorter() {
  const diseases = [
    { id: "measles", name: "Measles", cat: "infectious", why: "Caused by measles virus." },
    { id: "asthma", name: "Asthma", cat: "noninfectious", why: "Environmental + genetic, not a pathogen." },
    { id: "malaria", name: "Malaria", cat: "infectious", why: "Protozoan (Plasmodium) spread by mosquitoes." },
    { id: "diabetes2", name: "Type 2 diabetes", cat: "noninfectious", why: "Lifestyle + genetic risk factors." },
    { id: "chickenpox", name: "Chickenpox", cat: "infectious", why: "Varicella-zoster virus." },
    { id: "cancer", name: "Most cancers", cat: "noninfectious", why: "Genetic / environmental / lifestyle." },
    { id: "hiv", name: "HIV/AIDS", cat: "infectious", why: "Human immunodeficiency virus." },
    { id: "chd", name: "Coronary heart disease", cat: "noninfectious", why: "Chronic, lifestyle-related." },
    { id: "flu", name: "Influenza", cat: "infectious", why: "Influenza virus, droplet spread." },
    { id: "dementia", name: "Dementia", cat: "noninfectious", why: "Age / degenerative." },
  ];
  const [placed, setPlaced] = useState({}); // id -> "infectious" | "noninfectious"
  const [dragging, setDragging] = useState(null);
  const [feedback, setFeedback] = useState({}); // id -> correct?

  const unplaced = diseases.filter(d => !placed[d.id]);

  const drop = (cat) => {
    if (!dragging) return;
    const disease = diseases.find(d => d.id === dragging);
    const correct = disease.cat === cat;
    setPlaced(p => ({ ...p, [dragging]: cat }));
    setFeedback(f => ({ ...f, [dragging]: correct }));
    setDragging(null);
  };

  const reset = () => { setPlaced({}); setFeedback({}); };

  const score = Object.values(feedback).filter(Boolean).length;
  const total = Object.keys(placed).length;

  const Bucket = ({ cat, label, color }) => {
    const inBucket = diseases.filter(d => placed[d.id] === cat);
    return (
      <div
        onDragOver={e => e.preventDefault()}
        onDrop={() => drop(cat)}
        onClick={() => drop(cat)}
        style={{
          flex:1,
          minHeight:180,
          padding:14,
          background: dragging ? color + "22" : "var(--bg-elev)",
          border:`2px dashed ${dragging ? color : "var(--border-strong)"}`,
          borderRadius:"var(--radius)",
          transition:"all 0.15s",
        }}
      >
        <div style={{fontWeight:600,color,marginBottom:10,fontSize:14}}>{label}</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
          {inBucket.map(d => (
            <div key={d.id} style={{
              padding:"6px 10px",
              borderRadius:8,
              fontSize:13,
              background: feedback[d.id] ? "var(--emerald-soft)" : "#fef2f2",
              color: feedback[d.id] ? "var(--emerald-ink)" : "#7f1d1d",
              border:`1px solid ${feedback[d.id] ? "var(--emerald)" : "#dc2626"}`,
            }}>
              {feedback[d.id] ? "✓" : "✗"} {d.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:12,minHeight:40}}>
        {unplaced.map(d => (
          <div
            key={d.id}
            draggable
            onDragStart={() => setDragging(d.id)}
            onDragEnd={() => setDragging(null)}
            onClick={() => setDragging(dragging === d.id ? null : d.id)}
            style={{
              padding:"8px 12px",
              background: dragging === d.id ? "var(--accent)" : "var(--bg-elev)",
              color: dragging === d.id ? "white" : "var(--ink)",
              border:"1px solid var(--border-strong)",
              borderRadius:8,
              cursor:"grab",
              fontSize:13,
              fontWeight:500,
              userSelect:"none",
            }}
          >{d.name}</div>
        ))}
        {unplaced.length === 0 && (
          <div style={{fontSize:14,color:"var(--ink-muted)"}}>All sorted! Score: {score}/{total}. {score === total ? "🎉 Perfect." : "Reset to try again."}</div>
        )}
      </div>
      <div style={{display:"flex",gap:12}}>
        <Bucket cat="infectious" label="Infectious (caused by a pathogen)" color="var(--orange)" />
        <Bucket cat="noninfectious" label="Non-infectious (no pathogen)" color="var(--blue)" />
      </div>
      <div style={{marginTop:12,display:"flex",gap:8,alignItems:"center"}}>
        <button className="btn ghost" onClick={reset}>Reset</button>
        <span style={{fontSize:12,color:"var(--ink-muted)"}}>Drag a card into a bucket, or click a card then click a bucket. Mobile-friendly.</span>
      </div>
      {Object.keys(placed).length > 0 && (
        <details style={{marginTop:12}}>
          <summary style={{cursor:"pointer",fontSize:13,fontWeight:500}}>Why is each one in that group?</summary>
          <ul style={{fontSize:13,color:"var(--ink-soft)",paddingLeft:18}}>
            {diseases.map(d => <li key={d.id}><strong>{d.name}:</strong> {d.why}</li>)}
          </ul>
        </details>
      )}
    </div>
  );
}
window.PathogenSorter = PathogenSorter;
