/* Australian medical innovations explorer */
function InnovationsExplorer() {
  const items = [
    { id:"cochlear", name:"Cochlear implant ('bionic ear')", dev:"Prof. Graeme Clark, University of Melbourne", year:1978, color:"var(--blue)", summary:"Electronic device that bypasses damaged hair cells in the inner ear and stimulates the auditory nerve directly.", impact:"Restores hearing to over 700,000 profoundly deaf people worldwide.", problem:"Sensorineural deafness — when hair cells in the cochlea are damaged, sound can't reach the brain.", next:"Better music/speech-in-noise clarity; fully implantable versions.", icon:"🦻" },
    { id:"recell", name:"Spray-on skin (ReCell®)", dev:"Prof. Fiona Wood & Marie Stoner, Perth", year:1987, color:"#dc2626", summary:"Patient's healthy skin is processed into a cell suspension and sprayed onto burn wounds.", impact:"Dramatically cuts healing time and scarring vs traditional skin grafts. Widely used after the 2002 Bali bombings.", problem:"Severe burns — traditional skin grafts take weeks to culture and leave significant scars.", next:"Treating other skin conditions; 3D-printed skin.", icon:"🧴" },
    { id:"gardasil", name:"Gardasil (HPV vaccine)", dev:"Prof. Ian Frazer & Dr Jian Zhou, UQ", year:2006, color:"var(--emerald)", summary:"Subunit vaccine against human papillomavirus — the cause of almost all cervical cancers.", impact:"Australia's HPV program led the world; cervical cancer in young Australian women has fallen dramatically.", problem:"Cervical cancer — caused by HPV, previously killed hundreds of Australian women each year.", next:"Single-dose programs in low-income countries; elimination of cervical cancer.", icon:"💉" },
    { id:"bioniceye", name:"Bionic eye prototype", dev:"Bionic Vision Australia consortium", year:2012, color:"var(--violet)", summary:"Device implanted behind the retina receives signals from camera glasses and stimulates remaining retinal cells.", impact:"Early prototypes restored partial vision to patients with retinitis pigmentosa.", problem:"Degenerative retinal diseases — photoreceptors die but the optic nerve is intact.", next:"Higher-resolution arrays; colour vision.", icon:"👁️" },
    { id:"rfds", name:"Royal Flying Doctor Service", dev:"Founded by Rev. John Flynn, 1928", year:1928, color:"var(--orange)", summary:"Aeromedical service delivering emergency and routine health care across remote Australia.", impact:"Over 300,000 patient contacts per year across the country.", problem:"Access to medical care in remote Australia — distances of hundreds to thousands of km.", next:"Telehealth expansion; more aircraft and remote clinics.", icon:"✈️" },
    { id:"hpylori", name:"H. pylori as the cause of ulcers", dev:"Robin Warren & Barry Marshall, Perth", year:1982, color:"#0891b2", summary:"Discovered that most stomach ulcers are caused by Helicobacter pylori bacteria, not stress.", impact:"Ulcers now cured with a course of antibiotics. 2005 Nobel Prize in Medicine.", problem:"Stomach ulcers were thought to be caused by stress and treated with lifelong medication.", next:"Understanding links to stomach cancer.", icon:"🦠" },
  ];
  const [sel, setSel] = useState(items[0].id);
  const cur = items.find(i => i.id === sel);
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:8,marginBottom:12}}>
        {items.map(it => (
          <button key={it.id} onClick={() => setSel(it.id)} style={{
            padding:12,
            border:"1.5px solid " + (sel===it.id ? it.color : "var(--border)"),
            background: sel===it.id ? "var(--bg-elev)" : "var(--bg-sunken)",
            borderRadius:"var(--radius)",
            cursor:"pointer", fontFamily:"inherit", textAlign:"left",
            transform: sel===it.id ? "translateY(-2px)" : "none",
            transition:"all 0.15s", boxShadow: sel===it.id ? "var(--shadow)" : "none",
          }}>
            <div style={{fontSize:22,marginBottom:4}}>{it.icon}</div>
            <div style={{fontSize:12,fontWeight:600,lineHeight:1.3}}>{it.name.split(" (")[0]}</div>
            <div style={{fontSize:10,color:"var(--ink-muted)",fontFamily:"var(--font-mono)",marginTop:2}}>{it.year}</div>
          </button>
        ))}
      </div>
      <div style={{padding:20,background:"var(--bg-elev)",border:`2px solid ${cur.color}`,borderRadius:"var(--radius)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
          <div style={{fontSize:32}}>{cur.icon}</div>
          <div>
            <h4 style={{margin:0,fontSize:18}}>{cur.name}</h4>
            <div style={{fontSize:12,color:cur.color,fontWeight:600}}>{cur.dev} · {cur.year}</div>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,fontSize:13}}>
          <div><strong style={{display:"block",fontSize:10,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--ink-muted)",marginBottom:2}}>Problem addressed</strong>{cur.problem}</div>
          <div><strong style={{display:"block",fontSize:10,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--ink-muted)",marginBottom:2}}>How it works</strong>{cur.summary}</div>
          <div><strong style={{display:"block",fontSize:10,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--ink-muted)",marginBottom:2}}>Impact</strong>{cur.impact}</div>
          <div><strong style={{display:"block",fontSize:10,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--ink-muted)",marginBottom:2}}>What's next</strong>{cur.next}</div>
        </div>
      </div>
    </div>
  );
}
window.InnovationsExplorer = InnovationsExplorer;
window.AusInnovations = InnovationsExplorer;
