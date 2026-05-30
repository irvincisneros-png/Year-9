/* global React, DotPoint, Callout, Figure, Term, MCQ, WrittenQ, QGroup, Interactive,
   Slider, SegToggle, Stat, Reveal, FlipCard, MatchBuckets, Ring, mountTopicApp */
const { useState, useEffect, useRef, useMemo } = React;

/* ============================================================
   SECTION 3.1 RESOURCES -- Custom Interactive: Resource Explorer
   ============================================================ */
function ResourceExplorer() {
  const resources = [
    { name: "Iron ore", location: "Pilbara, WA", product: "Steel", prod: 895, unit: "Mt/yr", colour: "#b45309", fact: "Australia exports more iron ore than any other nation on Earth." },
    { name: "Bauxite", location: "Qld, NT, WA", product: "Aluminium", prod: 101, unit: "Mt/yr", colour: "#92400e", fact: "Bauxite must be refined twice before it becomes aluminium metal." },
    { name: "Coal", location: "NSW, Qld", product: "Electricity + steel", prod: 480, unit: "Mt/yr", colour: "#374151", fact: "Coal is a finite fossil resource formed over 300 million years." },
    { name: "Copper", location: "SA, Qld", product: "Wiring + pipes", prod: 0.96, unit: "Mt/yr", colour: "#b45309", fact: "Copper has been used by humans for over 10,000 years." },
    { name: "Lithium", location: "WA", product: "EV batteries", prod: 0.31, unit: "Mt/yr", colour: "#6d28d9", fact: "Lithium demand is surging due to electric vehicles and phones." },
    { name: "Gold", location: "WA, Vic, NSW", product: "Electronics + jewellery", prod: 0.32, unit: "Mt/yr", colour: "#d97706", fact: "Gold is one of the best electrical conductors and never corrodes." },
  ];
  const [sel, setSel] = useState(0);
  const r = resources[sel];
  const maxProd = 895;
  return (
    <Interactive title="Australian Resource Explorer" subtitle="Tap a resource to see where it comes from, what it makes, and how much is produced." takeaway="Australia's mineral resources are finite: each deposit formed over millions of years and cannot be replaced on a human timescale, making responsible use and recycling essential.">
      <div className="row" style={{ flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {resources.map((res, i) => (
          <button key={res.name} onClick={() => setSel(i)}
            className={`chip${i === sel ? " accent" : ""}`}
            style={{ cursor: "pointer" }}>{res.name}</button>
        ))}
      </div>
      <div className="card" style={{ padding: "1rem", borderLeft: `4px solid ${r.colour}` }}>
        <div style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 4 }}>{r.name}</div>
        <div className="muted" style={{ marginBottom: 8 }}>Location: {r.location}</div>
        <div style={{ marginBottom: 8 }}>Key product: <strong>{r.product}</strong></div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: "0.8rem", marginBottom: 4 }} className="muted">Annual production: {r.prod} {r.unit}</div>
          <div style={{ background: "var(--surface-2)", borderRadius: 8, height: 14, overflow: "hidden" }}>
            <div style={{ width: `${Math.max(2, (r.prod / maxProd) * 100)}%`, height: "100%", background: r.colour, borderRadius: 8, transition: "width 0.5s" }}/>
          </div>
        </div>
        <Callout kind="fact" title="Did you know?">{r.fact}</Callout>
      </div>
    </Interactive>
  );
}

/* ============================================================
   SECTION 3.2 BONDING -- Custom Interactive: Atom Shell Builder
   ============================================================ */
function AtomShellBuilder() {
  const elements = [
    { sym: "H",  name: "Hydrogen",   z: 1,  shells: [1],       group: 1,  valency: 1, bond: "loses/shares 1" },
    { sym: "He", name: "Helium",     z: 2,  shells: [2],       group: 18, valency: 0, bond: "already stable" },
    { sym: "Li", name: "Lithium",    z: 3,  shells: [2,1],     group: 1,  valency: 1, bond: "loses 1" },
    { sym: "C",  name: "Carbon",     z: 6,  shells: [2,4],     group: 14, valency: 4, bond: "shares 4" },
    { sym: "N",  name: "Nitrogen",   z: 7,  shells: [2,5],     group: 15, valency: 3, bond: "gains/shares 3" },
    { sym: "O",  name: "Oxygen",     z: 8,  shells: [2,6],     group: 16, valency: 2, bond: "gains/shares 2" },
    { sym: "F",  name: "Fluorine",   z: 9,  shells: [2,7],     group: 17, valency: 1, bond: "gains 1" },
    { sym: "Ne", name: "Neon",       z: 10, shells: [2,8],     group: 18, valency: 0, bond: "already stable" },
    { sym: "Na", name: "Sodium",     z: 11, shells: [2,8,1],   group: 1,  valency: 1, bond: "loses 1" },
    { sym: "Mg", name: "Magnesium",  z: 12, shells: [2,8,2],   group: 2,  valency: 2, bond: "loses 2" },
    { sym: "Al", name: "Aluminium",  z: 13, shells: [2,8,3],   group: 13, valency: 3, bond: "loses 3" },
    { sym: "Cl", name: "Chlorine",   z: 17, shells: [2,8,7],   group: 17, valency: 1, bond: "gains 1" },
    { sym: "Ar", name: "Argon",      z: 18, shells: [2,8,8],   group: 18, valency: 0, bond: "already stable" },
    { sym: "Ca", name: "Calcium",    z: 20, shells: [2,8,8,2], group: 2,  valency: 2, bond: "loses 2" },
  ];
  const [selIdx, setSelIdx] = useState(8);
  const el = elements[selIdx];
  const radii = [30, 54, 78, 102];
  const cx = 110, cy = 110;
  const colours = ["#7c3aed","#2563eb","#059669","#d97706"];
  function electronPositions(count, r) {
    return Array.from({ length: count }, (_, i) => {
      const angle = (2 * Math.PI * i) / count - Math.PI / 2;
      return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
    });
  }
  return (
    <Interactive title="Atom Shell Builder" subtitle="Select an element to see its electron shells and valency." takeaway="An element's valency is determined by the number of electrons in its outer shell, and atoms bond to gain, lose, or share electrons until they reach the stable full-shell arrangement of a noble gas.">
      <div className="row" style={{ flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
        {elements.map((e, i) => (
          <button key={e.sym} onClick={() => setSelIdx(i)}
            className={`chip${i === selIdx ? " accent" : ""}`}
            style={{ cursor: "pointer", minWidth: 42 }}>{e.sym}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
        <svg viewBox="0 0 220 220" width="220" height="220" style={{ flexShrink: 0 }}>
          {el.shells.map((_, si) => (
            <circle key={si} cx={cx} cy={cy} r={radii[si]} fill="none"
              stroke="var(--border)" strokeWidth="1" strokeDasharray="4 3"/>
          ))}
          <circle cx={cx} cy={cy} r={18} fill="var(--accent-deep)"/>
          <text x={cx} y={cy+1} textAnchor="middle" dominantBaseline="middle"
            fontSize="13" fontWeight="700" fill="#fff">{el.sym}</text>
          {el.shells.map((count, si) =>
            electronPositions(count, radii[si]).map((pos, ei) => (
              <circle key={`${si}-${ei}`} cx={pos.x} cy={pos.y} r={6}
                fill={colours[si % colours.length]} stroke="#fff" strokeWidth="1.5"/>
            ))
          )}
        </svg>
        <div style={{ flex: 1, minWidth: 160 }}>
          <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{el.name} ({el.sym})</div>
          <div className="muted" style={{ fontSize: "0.85rem", marginBottom: 8 }}>Atomic number: {el.z}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div className="card" style={{ padding: "0.5rem 0.75rem" }}>
              <span className="muted">Electron config: </span>
              <strong>{el.shells.join(", ")}</strong>
            </div>
            <div className="card" style={{ padding: "0.5rem 0.75rem" }}>
              <span className="muted">Group: </span>
              <strong>{el.group}</strong>
            </div>
            <div className="card" style={{ padding: "0.5rem 0.75rem" }}>
              <span className="muted">Valency: </span>
              <strong>{el.valency}</strong>
            </div>
            <div className="card" style={{ padding: "0.5rem 0.75rem" }}>
              <span className="muted">To bond it: </span>
              <strong>{el.bond}</strong>
            </div>
          </div>
        </div>
      </div>
    </Interactive>
  );
}

/* ============================================================
   SECTION 3.2 BONDING -- Custom Interactive: Bond Type Visualiser
   ============================================================ */
function BondVisualiser() {
  const [type, setType] = useState("ionic");
  const scenes = {
    ionic: {
      label: "Ionic: NaCl",
      desc: "The sodium atom (1 outer electron) transfers that electron to chlorine (7 outer electrons). Each ion now has a full outer shell. Opposite charges attract, forming a crystal lattice.",
      colours: ["#7c3aed","#16a34a"],
      labels: ["Na+", "Cl-"],
      arrow: true,
    },
    covalent: {
      label: "Covalent: H2O",
      desc: "Oxygen shares one electron pair with each hydrogen. Both shared pairs count for each atom, giving oxygen 8 outer electrons and each hydrogen 2 (matching helium).",
      colours: ["#2563eb","#e11d48","#e11d48"],
      labels: ["O", "H", "H"],
      arrow: false,
    },
    metallic: {
      label: "Metallic: Copper",
      desc: "Positive copper ions sit in a regular lattice. Outer electrons are delocalised, forming a 'sea' of free electrons. This sea holds the lattice together and makes copper an excellent conductor.",
      colours: ["#d97706","#d97706","#d97706","#d97706"],
      labels: ["Cu+", "Cu+", "Cu+", "Cu+"],
      arrow: false,
    },
  };
  const sc = scenes[type];
  return (
    <Interactive title="Bond Type Visualiser" subtitle="Switch between bond types to compare electron behaviour." takeaway="Ionic bonds transfer electrons between metal and non-metal atoms, covalent bonds share electrons between non-metals, and metallic bonds involve a 'sea' of delocalised electrons, and each bond type produces materials with very different properties.">
      <SegToggle
        options={[{value:"ionic",label:"Ionic"},{value:"covalent",label:"Covalent"},{value:"metallic",label:"Metallic"}]}
        value={type} onChange={setType}/>
      <div style={{ marginTop: 16 }}>
        <svg viewBox="0 0 360 140" width="100%" style={{ maxWidth: 360 }}>
          {type === "ionic" && <>
            <circle cx={90} cy={70} r={32} fill="#7c3aed" opacity={0.85}/>
            <text x={90} y={68} textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="700" fill="#fff">Na</text>
            <text x={90} y={88} textAnchor="middle" fontSize="11" fill="#fff">2,8,1</text>
            <circle cx={90} cy={38} r={7} fill="#fbbf24" stroke="#fff" strokeWidth="2"/>
            <text x={140} y={74} textAnchor="middle" fontSize="22" fill="var(--accent-deep)">&#8594;</text>
            <circle cx={270} cy={70} r={36} fill="#16a34a" opacity={0.85}/>
            <text x={270} y={68} textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="700" fill="#fff">Cl</text>
            <text x={270} y={88} textAnchor="middle" fontSize="11" fill="#fff">2,8,7</text>
            <circle cx={270} cy={34} r={7} fill="#fbbf24" stroke="#fff" strokeWidth="2"/>
            <text x={90} y={118} textAnchor="middle" fontSize="13" fill="var(--ink)">Na+</text>
            <text x={270} y={118} textAnchor="middle" fontSize="13" fill="var(--ink)">Cl-</text>
            <text x={180} y={118} textAnchor="middle" fontSize="11" fill="var(--muted)">electron transferred</text>
          </>}
          {type === "covalent" && <>
            <circle cx={180} cy={65} r={38} fill="#e11d48" opacity={0.85}/>
            <text x={180} y={63} textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="700" fill="#fff">O</text>
            <text x={180} y={82} textAnchor="middle" fontSize="11" fill="#fff">2,6</text>
            <circle cx={80} cy={65} r={24} fill="#2563eb" opacity={0.85}/>
            <text x={80} y={65} textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="700" fill="#fff">H</text>
            <circle cx={280} cy={65} r={24} fill="#2563eb" opacity={0.85}/>
            <text x={280} y={65} textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="700" fill="#fff">H</text>
            <line x1={104} y1={65} x2={142} y2={65} stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/>
            <line x1={218} y1={65} x2={256} y2={65} stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/>
            <text x={180} y={118} textAnchor="middle" fontSize="11" fill="var(--muted)">shared electron pairs (bonds)</text>
          </>}
          {type === "metallic" && <>
            {[[80,50],[180,50],[280,50],[80,110],[180,110],[280,110]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={22} fill="#d97706" opacity={0.9}/>
            ))}
            {[[80,50],[180,50],[280,50],[80,110],[180,110],[280,110]].map(([cx,cy],i) => (
              <text key={i} x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill="#fff">Cu+</text>
            ))}
            {[50,110,170,230,290,130,195,255,145,245].map((x,i) => (
              <circle key={i} cx={x} cy={20 + (i%3)*40} r={4} fill="#fbbf24" opacity={0.9}/>
            ))}
            <text x={180} y={134} textAnchor="middle" fontSize="11" fill="var(--muted)">delocalised electrons (sea)</text>
          </>}
        </svg>
        <p style={{ margin: "12px 0 0", fontSize: "0.9rem" }}>{sc.desc}</p>
      </div>
    </Interactive>
  );
}

/* ============================================================
   SECTION 3.3 ORGANIC -- Custom Interactive: Fractional Distillation Column
   ============================================================ */
function FractionColumn() {
  const fractions = [
    { name: "Refinery gas (LPG)", bp: "Below 40 C", chain: "C1 to C4", use: "Cooking, plastics", y: 12, height: 22, colour: "#e11d48" },
    { name: "Petrol",            bp: "40 to 175 C",  chain: "C5 to C10", use: "Car fuel",         y: 36, height: 26, colour: "#f97316" },
    { name: "Naphtha",           bp: "40 to 180 C",  chain: "C5 to C10", use: "Chemical feedstock", y: 64, height: 20, colour: "#eab308" },
    { name: "Kerosene",          bp: "175 to 325 C", chain: "C10 to C16", use: "Aviation fuel",    y: 86, height: 24, colour: "#84cc16" },
    { name: "Diesel",            bp: "250 to 350 C", chain: "C14 to C20", use: "Trucks, trains",   y: 112, height: 24, colour: "#22d3ee" },
    { name: "Fuel oil",          bp: "350 to 500 C", chain: "C20 to C50", use: "Ships, boilers",   y: 138, height: 24, colour: "#6366f1" },
    { name: "Bitumen",           bp: "Above 500 C",  chain: "Above C70", use: "Road surfaces",     y: 164, height: 28, colour: "#374151" },
  ];
  const [sel, setSel] = useState(null);
  return (
    <Interactive title="Fractional Distillation Column" subtitle="Tap a fraction to learn its boiling point range, chain length and uses." takeaway="Fractional distillation separates crude oil by boiling point: shorter carbon chains have lower boiling points and condense near the top of the column, while longer chains condense lower down.">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ position: "relative", width: 160, flexShrink: 0 }}>
          <svg viewBox="0 0 160 210" width="160" height="210">
            <rect x={40} y={8} width={80} height={196} rx="6" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="2"/>
            <text x={80} y={215} textAnchor="middle" fontSize="10" fill="var(--muted)">Cooler top</text>
            <text x={80} y={4} textAnchor="middle" fontSize="10" fill="var(--muted)">Hotter bottom</text>
            {fractions.map((f, i) => (
              <g key={f.name} style={{ cursor: "pointer" }} onClick={() => setSel(i === sel ? null : i)}>
                <rect x={42} y={f.y} width={76} height={f.height} rx="3"
                  fill={f.colour} opacity={i === sel ? 1 : 0.65}
                  stroke={i === sel ? "#fff" : "none"} strokeWidth="2"/>
                <text x={80} y={f.y + f.height/2 + 1} textAnchor="middle" dominantBaseline="middle"
                  fontSize="9" fill="#fff" fontWeight="600">{f.name.split(" ")[0]}</text>
              </g>
            ))}
            <text x={20} y={16} textAnchor="middle" fontSize="9" fill="var(--muted)" transform="rotate(-90,20,110)">Temperature</text>
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 160 }}>
          {sel !== null ? (
            <div className="card" style={{ padding: "0.75rem", borderLeft: `4px solid ${fractions[sel].colour}` }}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{fractions[sel].name}</div>
              <div style={{ fontSize: "0.85rem" }}><span className="muted">Boiling point: </span>{fractions[sel].bp}</div>
              <div style={{ fontSize: "0.85rem" }}><span className="muted">Chain length: </span>{fractions[sel].chain}</div>
              <div style={{ fontSize: "0.85rem", marginTop: 4 }}><span className="muted">Uses: </span>{fractions[sel].use}</div>
            </div>
          ) : (
            <div className="card" style={{ padding: "0.75rem" }}>
              <p className="muted" style={{ margin: 0 }}>Tap a fraction on the column to see its details.</p>
              <p style={{ margin: "8px 0 0", fontSize: "0.85rem" }}>Shorter chains (fewer carbons) rise higher because they have lower boiling points. Longer chains collect at the bottom.</p>
            </div>
          )}
          <Callout kind="key" title="Key idea" style={{ marginTop: 12 }}>Fractional distillation separates crude oil using differences in boiling point, not chemical reactions.</Callout>
        </div>
      </div>
    </Interactive>
  );
}

/* ============================================================
   SECTION 3.3 ORGANIC -- Custom Interactive: Alkane Builder
   ============================================================ */
function AlkaneBuilder() {
  const alkanes = [
    { n: 1, name: "Methane",  bp: -161, state: "Gas",    use: "Natural gas fuel" },
    { n: 2, name: "Ethane",   bp: -89,  state: "Gas",    use: "LPG component" },
    { n: 3, name: "Propane",  bp: -42,  state: "Gas",    use: "BBQ gas" },
    { n: 4, name: "Butane",   bp: -1,   state: "Gas",    use: "Lighter fuel" },
    { n: 5, name: "Pentane",  bp: 36,   state: "Liquid", use: "Solvent" },
    { n: 6, name: "Hexane",   bp: 69,   state: "Liquid", use: "Solvent" },
    { n: 7, name: "Heptane",  bp: 98,   state: "Liquid", use: "Fuel testing" },
    { n: 8, name: "Octane",   bp: 126,  state: "Liquid", use: "Petrol component" },
  ];
  const [n, setN] = useState(1);
  const al = alkanes[n - 1];
  const formula = `C${n}H${2*n+2}`;
  const bpMin = -161, bpMax = 126;
  const pct = (al.bp - bpMin) / (bpMax - bpMin);
  const cx = 20 + pct * 280;
  return (
    <Interactive title="Alkane Builder" subtitle="Use the slider to build alkanes from C1 (methane) to C8 (octane) and watch the formula, boiling point and state change." takeaway="As alkane chain length increases, boiling point rises and state changes from gas to liquid because larger molecules have stronger intermolecular forces.">
      <Slider label="Carbon atoms (n)" min={1} max={8} step={1} value={n} onChange={v => setN(v)} unit=""/>
      <div className="stat-readout">
        <Stat value={al.name} label="IUPAC name"/>
        <Stat value={formula} label="Molecular formula"/>
        <Stat value={`${al.bp} °C`} label="Boiling point"/>
        <Stat value={al.state} label="State at 25 °C"/>
      </div>
      <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: "0.8rem", marginBottom: 4 }} className="muted">Boiling point trend: methane to octane</div>
        <svg viewBox="0 0 320 56" width="100%" style={{ maxWidth: 320 }}>
          <rect x={20} y={20} width={280} height={16} rx={8} fill="var(--surface-2)" stroke="var(--border)"/>
          <defs>
            <linearGradient id="bpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa"/>
              <stop offset="100%" stopColor="#f97316"/>
            </linearGradient>
          </defs>
          <rect x={20} y={20} width={pct * 280} height={16} rx={8} fill="url(#bpGrad)"/>
          <circle cx={cx} cy={28} r={9} fill="var(--accent-deep)" stroke="#fff" strokeWidth="2"/>
          <text x={cx} y={52} textAnchor="middle" fontSize="11" fill="var(--ink)">{al.bp} C</text>
          <text x={20} y={12} fontSize="10" fill="var(--muted)">-161 C</text>
          <text x={280} y={12} textAnchor="end" fontSize="10" fill="var(--muted)">126 C</text>
        </svg>
      </div>
      <p style={{ margin: "8px 0 0", fontSize: "0.85rem" }}>Use: {al.use}</p>
    </Interactive>
  );
}

/* ============================================================
   SECTION 3.4 POLYMERS -- Custom Interactive: Polymer Properties Comparison
   ============================================================ */
function PolymerComparison() {
  const polymers = [
    { name: "LDPE",  full: "Low-density polyethylene", flex: 5, strength: 2, heatRes: 2, waterRes: 5, conduct: 1, recyclable: true,  type: "Thermoplastic", use: "Plastic bags, squeeze bottles" },
    { name: "HDPE",  full: "High-density polyethylene", flex: 3, strength: 4, heatRes: 3, waterRes: 5, conduct: 1, recyclable: true,  type: "Thermoplastic", use: "Milk bottles, pipes" },
    { name: "PET",   full: "Polyethylene terephthalate", flex: 3, strength: 4, heatRes: 3, waterRes: 5, conduct: 1, recyclable: true,  type: "Thermoplastic", use: "Drink bottles, food trays" },
    { name: "PP",    full: "Polypropylene",              flex: 3, strength: 4, heatRes: 4, waterRes: 5, conduct: 1, recyclable: true,  type: "Thermoplastic", use: "Food containers, rope" },
    { name: "Nylon", full: "Polyamide (Nylon)",          flex: 4, strength: 5, heatRes: 4, waterRes: 3, conduct: 1, recyclable: false, type: "Thermoplastic", use: "Clothing fibres, gears" },
    { name: "PLA",   full: "Polylactic acid",            flex: 2, strength: 3, heatRes: 2, waterRes: 3, conduct: 1, recyclable: false, type: "Bio-based",     use: "Compostable packaging" },
    { name: "Epoxy", full: "Epoxy resin (thermoset)",   flex: 1, strength: 5, heatRes: 5, waterRes: 5, conduct: 1, recyclable: false, type: "Thermoset",     use: "Adhesives, circuit boards" },
  ];
  const [sel, setSel] = useState(0);
  const p = polymers[sel];
  const props = [
    { key: "flex",     label: "Flexibility" },
    { key: "strength", label: "Strength" },
    { key: "heatRes",  label: "Heat resistance" },
    { key: "waterRes", label: "Water resistance" },
  ];
  const colours = ["#7c3aed","#2563eb","#059669","#d97706","#e11d48","#84cc16","#374151"];
  return (
    <Interactive title="Polymer Properties Comparison" subtitle="Select a polymer to compare its key properties." takeaway="Different polymers have very different combinations of flexibility, strength, heat resistance, and recyclability depending on their chain structure, so selecting the right polymer requires matching its properties to the intended use.">
      <div className="row" style={{ flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
        {polymers.map((po, i) => (
          <button key={po.name} onClick={() => setSel(i)}
            className={`chip${i === sel ? " accent" : ""}`}
            style={{ cursor: "pointer" }}>{po.name}</button>
        ))}
      </div>
      <div className="card" style={{ padding: "0.75rem", borderLeft: `4px solid ${colours[sel]}` }}>
        <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 2 }}>{p.full}</div>
        <div style={{ fontSize: "0.8rem", marginBottom: 10 }} className="muted">Type: {p.type} | {p.recyclable ? "Recyclable" : "Not recyclable by melting"}</div>
        {props.map(pr => (
          <div key={pr.key} style={{ marginBottom: 8 }}>
            <div style={{ fontSize: "0.8rem", display: "flex", justifyContent: "space-between" }}>
              <span>{pr.label}</span>
              <span className="muted">{p[pr.key]}/5</span>
            </div>
            <div style={{ background: "var(--surface-2)", borderRadius: 6, height: 10, marginTop: 2 }}>
              <div style={{ width: `${p[pr.key] * 20}%`, height: "100%", background: colours[sel], borderRadius: 6, transition: "width 0.4s" }}/>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 8, fontSize: "0.85rem" }}><span className="muted">Common use: </span>{p.use}</div>
      </div>
    </Interactive>
  );
}

/* ============================================================
   SECTION 3.5 MATERIALS IN CONTEXT -- Custom Interactive: Life Cycle Assessment Tool
   ============================================================ */
function LCATool() {
  const pairs = [
    {
      label: "Cotton bag vs Polyethylene bag",
      alt: "Cotton bag",
      conv: "Polyethylene bag",
      stages: [
        { stage: "Raw materials",  alt: 3, conv: 1, note: "Cotton uses land and water; PE uses crude oil." },
        { stage: "Manufacturing",  alt: 4, conv: 2, note: "Cotton processing is energy and water intensive." },
        { stage: "Transport",      alt: 2, conv: 2, note: "Similar distances for both." },
        { stage: "Use",            alt: 1, conv: 3, note: "Cotton bag replaces 100+ single-use bags." },
        { stage: "End of life",    alt: 1, conv: 4, note: "Cotton biodegrades; PE persists for centuries." },
      ],
    },
    {
      label: "Glass bottle vs PET bottle",
      alt: "Glass bottle",
      conv: "PET bottle",
      stages: [
        { stage: "Raw materials",  alt: 2, conv: 2, note: "Sand/limestone vs crude oil feedstock." },
        { stage: "Manufacturing",  alt: 4, conv: 2, note: "Glass melting is very energy intensive." },
        { stage: "Transport",      alt: 4, conv: 2, note: "Glass is much heavier, raising transport emissions." },
        { stage: "Use",            alt: 1, conv: 2, note: "Glass reusable; PET single-use typically." },
        { stage: "End of life",    alt: 1, conv: 3, note: "Glass infinitely recyclable; PET recycling loses quality." },
      ],
    },
    {
      label: "PLA cup vs Polystyrene cup",
      alt: "PLA cup",
      conv: "Polystyrene cup",
      stages: [
        { stage: "Raw materials",  alt: 2, conv: 3, note: "PLA from plant sugars; PS from crude oil." },
        { stage: "Manufacturing",  alt: 2, conv: 2, note: "Both require processing; PLA uses fermentation." },
        { stage: "Transport",      alt: 2, conv: 2, note: "Both lightweight; similar distances." },
        { stage: "Use",            alt: 2, conv: 2, note: "Both single-use; similar function." },
        { stage: "End of life",    alt: 2, conv: 4, note: "PLA composts industrially; PS is not recyclable." },
      ],
    },
  ];
  const [pairIdx, setPairIdx] = useState(0);
  const pair = pairs[pairIdx];
  const colours = { alt: "#7c3aed", conv: "#e11d48" };
  return (
    <Interactive title="Life Cycle Assessment (LCA) Tool" subtitle="Compare the environmental impact of two packaging options at each life cycle stage. Lower score = lower impact." takeaway="A material that looks environmentally friendly at one stage, such as end-of-life, may have much higher impacts at another stage such as manufacturing, so a full life cycle assessment across all stages is needed for an honest comparison.">
      <SegToggle options={pairs.map((p, i) => ({ value: i, label: p.label.split(" vs ")[0] + " vs..." }))}
        value={pairIdx} onChange={v => setPairIdx(Number(v))}/>
      <div style={{ marginTop: 12, fontWeight: 600, fontSize: "0.9rem", marginBottom: 8 }}>{pair.label}</div>
      <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
        <span style={{ color: colours.alt, fontWeight: 600, fontSize: "0.85rem" }}>Purple: {pair.alt}</span>
        <span style={{ color: colours.conv, fontWeight: 600, fontSize: "0.85rem" }}>Red: {pair.conv}</span>
      </div>
      {pair.stages.map(st => (
        <div key={st.stage} style={{ marginBottom: 10 }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 600, marginBottom: 3 }}>{st.stage}</div>
          <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 2 }}>
            <span style={{ fontSize: "0.7rem", width: 80, color: colours.alt }}>{pair.alt}</span>
            <div style={{ flex: 1, background: "var(--surface-2)", borderRadius: 4, height: 10 }}>
              <div style={{ width: `${st.alt * 20}%`, height: "100%", background: colours.alt, borderRadius: 4, transition: "width 0.4s" }}/>
            </div>
            <span style={{ fontSize: "0.7rem", width: 20, textAlign: "right" }}>{st.alt}/5</span>
          </div>
          <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 2 }}>
            <span style={{ fontSize: "0.7rem", width: 80, color: colours.conv }}>{pair.conv}</span>
            <div style={{ flex: 1, background: "var(--surface-2)", borderRadius: 4, height: 10 }}>
              <div style={{ width: `${st.conv * 20}%`, height: "100%", background: colours.conv, borderRadius: 4, transition: "width 0.4s" }}/>
            </div>
            <span style={{ fontSize: "0.7rem", width: 20, textAlign: "right" }}>{st.conv}/5</span>
          </div>
          <div style={{ fontSize: "0.75rem" }} className="muted">{st.note}</div>
        </div>
      ))}
    </Interactive>
  );
}

/* ============================================================
   SECTION 3.1: RESOURCES
   ============================================================ */
function Section31({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">3.1 Resources</div>
        <h1>Earth's finite treasure</h1>
        <p className="lead">Australia sits on enormous mineral wealth, but every deposit is finite and every tonne extracted carries a cost to the environment.</p>
      </div>

      <DotPoint id="3.1.1" title="Finite nature of minerals and resources" progress={progress} setProgress={setProgress}>
        <p>Australia is one of the world's great mining nations. You would know the red iron ore dust of the Pilbara, the bauxite red soils of Queensland, and the coal seams threading through the Hunter Valley. These resources underpin Australia's economy, but they all share one critical feature: they are <Term def="A resource that exists in a limited, fixed quantity and cannot be replenished on a human timescale.">finite</Term>.</p>
        <p>Every mineral deposit was created over millions to billions of years through <Term def="Geological processes including heat, pressure, volcanic activity and sedimentation that form rocks and minerals.">geological processes</Term>. Once a deposit is mined, it is gone. Companies mine the richest, most accessible ores first. As those run out, they must dig deeper and process lower-grade rock, using more energy and generating more waste for every tonne of metal recovered.</p>
        <p>The table below summarises major Australian resources. Notice that all of them are listed as finite. Even lithium, in high demand for electric vehicle batteries, exists in fixed quantities. Understanding this drives decisions about recycling, substitution, and how quickly we use these materials.</p>
        <Figure caption="Major Australian mineral resources and their finite nature.">
          <div className="data-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
              <thead><tr style={{ background: "var(--accent-soft)" }}>
                <th style={{ padding: "6px 10px", textAlign: "left" }}>Resource</th>
                <th style={{ padding: "6px 10px", textAlign: "left" }}>Main location</th>
                <th style={{ padding: "6px 10px", textAlign: "left" }}>Primary use</th>
                <th style={{ padding: "6px 10px", textAlign: "left" }}>Finite?</th>
              </tr></thead>
              <tbody>
                {[["Iron ore","Pilbara, WA","Steel production","Yes"],["Bauxite","Qld, NT, WA","Aluminium production","Yes"],["Coal (black)","NSW, Qld","Electricity, steel","Yes"],["Copper","SA, Qld","Wiring, pipes","Yes"],["Lithium","WA","EV batteries","Yes"],["Gold","WA, Vic, NSW","Electronics, jewellery","Yes"]].map(row => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, i) => <td key={i} style={{ padding: "5px 10px" }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
        <Callout kind="key" title="Key idea">Finite resources cannot be replenished on a human timescale. Once extracted and used, they are gone. This is why recycling, efficiency and finding alternatives all matter.</Callout>
        <ResourceExplorer/>
        <QGroup title="Check yourself">
          <MCQ num={1} question="What does it mean to say a mineral resource is 'finite'?" options={["It is very valuable","It exists in a limited quantity and cannot be replenished on a human timescale","It can be recycled indefinitely","It only occurs in Australia"]} correct={1} explain="Finite means the total quantity in the Earth is fixed. It forms over millions of years, far too slow to replace what we extract."/>
          <WrittenQ num={2} question="Explain why mining companies must use more energy per tonne of metal as high-grade deposits run out." model="High-grade deposits contain a higher concentration of the useful mineral. As these are exhausted, companies must process more rock to obtain the same amount of metal, which requires more crushing, refining and chemical treatment, increasing energy use and waste per tonne produced."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.1.2" title="Products produced from Australian minerals and resources" progress={progress} setProgress={setProgress}>
        <p>Raw minerals are rarely useful as dug from the ground. They must pass through a chain of chemical and physical steps before they become the steel in a building or the aluminium in a can. Iron ore, for example, is <Term def="The chemical removal of oxygen from an ore using carbon or hydrogen at high temperatures.">smelted</Term> with <Term def="A nearly pure form of carbon made by heating coal without air; used as a reducing agent in blast furnaces.">coke</Term> and limestone in a blast furnace at temperatures above 1500 degrees Celsius to produce molten iron, which is then refined to produce steel.</p>
        <p>Bauxite follows a different path. First the <Term def="A process that dissolves aluminium oxide from bauxite using hot sodium hydroxide solution, leaving impurities behind.">Bayer process</Term> purifies it into alumina (aluminium oxide, Al2O3). Then electrolysis, using enormous amounts of electricity, reduces alumina to aluminium metal. Because this second step is so energy-hungry, recycling aluminium cans saves about 95% of the energy compared with making aluminium from scratch.</p>
        <p>Lithium is processed into <Term def="A lithium compound used as a cathode material in lithium-ion batteries.">lithium hydroxide</Term> or lithium carbonate, exported to battery manufacturers, and ends up in the phone in your pocket. Every step from mine to product involves chemistry you are learning in this course.</p>
        <Callout kind="fact" title="Energy saving">Recycling aluminium uses about 95% less energy than producing aluminium from bauxite. That is the equivalent of leaving your TV on for over 3 hours versus 3 minutes for every can.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={3} question="Which process converts bauxite (aluminium ore) into alumina (Al2O3)?" options={["Blast furnace smelting","The Bayer process","Fractional distillation","The Haber process"]} correct={1} explain="The Bayer process uses hot sodium hydroxide to dissolve aluminium oxide out of bauxite. Blast furnaces are used for iron."/>
          <WrittenQ num={4} question="Trace the journey of lithium from an Australian mine to a battery in a smartphone." model="Lithium spodumene ore is mined in Western Australia, then chemically processed to produce battery-grade lithium hydroxide or lithium carbonate. These compounds are exported (commonly to East Asia), where they are used to manufacture cathode materials for lithium-ion cells. The cells are assembled into battery packs and placed inside smartphones by device manufacturers."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.1.3" title="Aboriginal and Torres Strait Islander Peoples' use of minerals and resources" progress={progress} setProgress={setProgress}>
        <p>Aboriginal and Torres Strait Islander Peoples developed deep, sophisticated knowledge of minerals, rocks and natural materials over tens of thousands of years. This knowledge was grounded in careful observation of Country and passed across generations through oral tradition, ceremony and practical teaching. <Term def="Iron oxide minerals (haematite and goethite) occurring in shades of red, yellow and white, used as pigments.">Ochres</Term> were among the most widely used minerals: ground to fine powder and mixed with water, animal fats or plant resins to create pigments for body decoration, rock art and ceremony. Evidence of ochre use in Australia extends back at least 50,000 years, making it one of the earliest known uses of a mineral pigment anywhere on Earth.</p>
        <p>Hard, fine-grained rocks such as <Term def="A fine-grained silica-rich rock that fractures with a sharp, curved (conchoidal) surface, ideal for making cutting tools.">silcrete</Term>, chert and quartzite were <Term def="The process of shaping stone by striking it with another stone or hard object to produce sharp-edged flakes.">knapped</Term> into cutting tools, scrapers and spear points. Quarry sites were culturally significant places where groups met, traded tools and maintained relationships over hundreds of kilometres. Clay was used for waterproofing, cooking methods and skin treatments. Torres Strait Islander Peoples used coral and shell for tools, ornaments and navigational purposes. This knowledge represents a rich scientific tradition built on millennia of systematic observation.</p>
        <Callout kind="tip" title="Cultural respect">When learning about traditional uses of minerals, recognise these as part of living cultures, not historical artefacts. Many communities continue these practices today.</Callout>
        <MatchBuckets
          items={[
            { id: "a", label: "Ochre (ground iron oxide)", bucket: "pigment" },
            { id: "b", label: "Silcrete (fine-grained rock)", bucket: "tool" },
            { id: "c", label: "Clay (waterproofing)", bucket: "other" },
            { id: "d", label: "Chert (knapped flakes)", bucket: "tool" },
            { id: "e", label: "Red ochre (body decoration)", bucket: "pigment" },
            { id: "f", label: "Shell (Torres Strait Islander)", bucket: "other" },
          ]}
          buckets={[
            { id: "pigment", label: "Pigment use" },
            { id: "tool",    label: "Stone tool" },
            { id: "other",   label: "Other use" },
          ]}
        />
        <QGroup title="Check yourself">
          <MCQ num={5} question="What property makes silcrete and chert ideal for making sharp cutting tools?" options={["They are the hardest minerals known","They fracture in a predictable, sharp-edged (conchoidal) way when struck","They are found only in Australia","They do not corrode in water"]} correct={1} explain="Both rocks fracture conchoidally, producing very sharp edges that hold a cutting edge. This made them perfect for knapping into tools."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.1.4" title="Environmental impact of extracting and using a named resource" progress={progress} setProgress={setProgress}>
        <p>Extracting minerals causes impacts at every scale. <Term def="Mining that removes the surface layer of soil and rock to expose ore below.">Open-cut mining</Term> destroys local habitat, removes soil and vegetation, and leaves behind huge volumes of <Term def="The waste rock and crushed material remaining after the valuable ore has been extracted.">tailings</Term>. When sulfide minerals in exposed rock react with water and oxygen, they produce sulfuric acid, creating <Term def="The flow of acidic, metal-contaminated water from exposed mine waste that leaches into streams and groundwater.">acid mine drainage</Term>, which poisons local waterways.</p>
        <p>The use of extracted resources also has consequences. Burning coal releases <Term def="A greenhouse gas produced by burning fossil fuels; a major driver of climate change.">carbon dioxide</Term> and sulfur dioxide. Steel production accounts for approximately 7 to 9 percent of global CO2 emissions. Aluminium smelting, if powered by coal-fired electricity, has a very large carbon footprint. These downstream impacts extend the environmental assessment far beyond the mine gate. In Australia, mining companies must legally rehabilitate mined land after closure, restoring topsoil and replanting native vegetation, though full ecological recovery takes decades.</p>
        <Callout kind="warn" title="Life cycle thinking">Assessing only extraction impacts misses the full picture. A complete evaluation covers raw material extraction, processing, use, and disposal or recycling. This is called a life cycle approach.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={6} question="What is acid mine drainage?" options={["Water used to cool blast furnace equipment","Acidic, metal-contaminated water formed when sulfide minerals in exposed rock react with water and oxygen","Rainwater that collects in open-cut mine pits","The wastewater from aluminium smelting"]} correct={1} explain="Acid mine drainage forms when sulfide minerals oxidise in air and water, producing sulfuric acid that dissolves heavy metals from surrounding rock and flows into waterways."/>
          <WrittenQ num={7} question="Evaluate whether the environmental cost of coal mining and use outweighs the economic benefit. Use evidence from both sides." model="Economic benefits include export income, jobs, taxes, and energy generation. Environmental costs include habitat destruction from open-cut mining, acid mine drainage, large CO2 and SO2 emissions from combustion, and contribution to climate change. Both are real and significant. The weight given to each depends on values and time frame, but the accumulating environmental damage and international pressure to reduce emissions suggest the costs are becoming harder to justify economically in the long term."/>
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 3.2: BONDING
   ============================================================ */
function Section32({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">3.2 Bonding</div>
        <h1>How atoms stick together</h1>
        <p className="lead">Valency, noble gas configurations and three types of chemical bond explain the properties of every material from table salt to diamond.</p>
      </div>

      <Figure src="img/bonding.png" caption="Atoms share or transfer electrons to form chemical bonds." />
      <DotPoint id="3.2.1" title="Valency and electron configuration" progress={progress} setProgress={setProgress}>
        <p>The <Term def="The number of electrons an atom must gain, lose or share to reach a stable (full outer shell) electron configuration.">valency</Term> of an element tells you how many electrons it needs to gain, lose or share to become stable. Stability means reaching a full outer shell, matching the electron arrangement of a noble gas. This is called the <Term def="The tendency of atoms to seek 8 electrons in their outer shell, matching noble gas configurations.">octet rule</Term> (or the duet rule for hydrogen, which needs only 2 electrons to match helium).</p>
        <p>Valency is directly linked to an element's group in the periodic table. Group 1 elements (like sodium) have one outer electron and a valency of 1. Group 17 elements (like chlorine) have seven outer electrons and also a valency of 1, but they gain rather than lose electrons. Carbon, in Group 14, has four outer electrons and a valency of 4. It shares all four to form covalent bonds with other atoms.</p>
        <AtomShellBuilder/>
        <Figure caption="Valency of selected elements, showing electrons gained or lost to reach a full outer shell.">
          <div className="data-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead><tr style={{ background: "var(--accent-soft)" }}>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Element</th>
                <th style={{ padding: "5px 8px" }}>Group</th>
                <th style={{ padding: "5px 8px" }}>Outer electrons</th>
                <th style={{ padding: "5px 8px" }}>Electrons gained/lost/shared</th>
                <th style={{ padding: "5px 8px" }}>Valency</th>
              </tr></thead>
              <tbody>
                {[["H","1","1","Loses or shares 1","1"],["Na","1","1","Loses 1","1"],["Mg","2","2","Loses 2","2"],["Al","13","3","Loses 3","3"],["C","14","4","Shares 4","4"],["O","16","6","Gains or shares 2","2"],["Cl","17","7","Gains or shares 1","1"],["Ne","18","8","None (already stable)","0"]].map(row => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, i) => <td key={i} style={{ padding: "4px 8px", textAlign: i === 0 ? "left" : "center" }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={1} question="Oxygen has 6 outer electrons. What is its valency?" options={["6","4","2","0"]} correct={2} explain="Oxygen needs to gain 2 electrons to complete its outer shell to 8, so its valency is 2."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.2.2" title="Noble gas configuration and chemical bonding" progress={progress} setProgress={setProgress}>
        <p>Noble gases (Group 18: helium, neon, argon, krypton, xenon and radon) are almost completely unreactive. Their outer electron shells are already full, helium with 2 electrons and all others with 8. This complete arrangement is the most stable possible for any element. Because they are already stable, noble gases have virtually no tendency to gain, lose or share electrons, which is why they rarely form compounds under normal conditions.</p>
        <p>When other atoms bond, they rearrange their electrons to reach these same <Term def="An electron arrangement identical to that of a noble gas, with a completely filled outer electron shell.">noble gas configurations</Term>. Sodium (configuration 2, 8, 1) loses its one outer electron to become Na+ with the configuration 2, 8 (matching neon). Chlorine (2, 8, 7) gains that electron to become Cl- with configuration 2, 8, 8 (matching argon). In covalent bonding, atoms share electrons rather than transfer them, but each atom counts the shared electrons as its own, giving the same stable full-shell result.</p>
        <Callout kind="key" title="Key idea">All chemical bonding is driven by atoms trying to reach the stable, full-shell electron arrangement of a noble gas.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={2} question="When sodium bonds with chlorine, the resulting Na+ ion has the same electron configuration as which noble gas?" options={["Helium","Neon","Argon","Krypton"]} correct={1} explain="Na+ has 10 electrons arranged as 2, 8. Neon also has 10 electrons in a 2, 8 arrangement. Na+ matches neon."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.2.3" title="Types of chemical bonds: ionic, covalent and metallic" progress={progress} setProgress={setProgress}>
        <p>A <Term def="A force of attraction between atoms or ions that holds them together in a substance.">chemical bond</Term> is an electrostatic attraction that holds atoms together. Three main bond types arise depending on which elements are involved. <Term def="A bond formed by the complete transfer of electrons from a metal atom to a non-metal atom, creating oppositely charged ions that attract each other.">Ionic bonds</Term> form between metal and non-metal atoms. <Term def="A bond formed when two non-metal atoms share one or more pairs of electrons.">Covalent bonds</Term> form between non-metal atoms. <Term def="A bond formed in metals where positive metal ions are held together by a surrounding sea of delocalised (mobile) electrons.">Metallic bonds</Term> form between metal atoms.</p>
        <p>Each bond type creates structures with very different physical properties. Ionic compounds form rigid crystal lattices with high melting points. Covalent molecules are often gases or liquids at room temperature with low melting points, though giant covalent networks (like diamond) have extremely high melting points. Metals are malleable, ductile and conduct electricity well because of their mobile electron sea.</p>
        <BondVisualiser/>
        <Figure caption="Summary of three bond types, the elements involved, electron behaviour and typical properties.">
          <div className="data-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead><tr style={{ background: "var(--accent-soft)" }}>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Bond type</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Elements</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Electron behaviour</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Example</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Typical properties</th>
              </tr></thead>
              <tbody>
                {[
                  ["Ionic","Metal + non-metal","Transferred","NaCl, MgO","High melting point; conducts when dissolved"],
                  ["Covalent (molecular)","Non-metal + non-metal","Shared","H2O, CO2, CH4","Low melting point; poor conductor"],
                  ["Covalent (network)","Non-metal + non-metal","Shared throughout","Diamond, SiO2","Very high melting point; very hard"],
                  ["Metallic","Metal + metal","Delocalised (sea)","Cu, Fe, Al","Conducts; malleable; ductile"],
                ].map(row => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, i) => <td key={i} style={{ padding: "4px 8px" }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={3} question="Which bond type forms between metal and non-metal atoms?" options={["Covalent","Metallic","Ionic","Hydrogen"]} correct={2} explain="Ionic bonds form when a metal atom transfers electrons to a non-metal, creating oppositely charged ions that attract each other."/>
          <WrittenQ num={4} question="Explain why metals can conduct electricity but solid sodium chloride cannot, using your knowledge of bonding." model="Metals contain delocalised electrons that move freely throughout the structure, carrying charge and enabling electrical conduction. In solid NaCl, all ions are fixed in the crystal lattice and cannot move, so there is no charge flow. When dissolved in water or melted, the ions become free to move and carry charge."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.2.4" title="Formation of cations and anions" progress={progress} setProgress={setProgress}>
        <p>When atoms undergo ionic bonding, they form charged particles called <Term def="Charged atoms or groups of atoms formed by gaining or losing electrons.">ions</Term>. A <Term def="A positively charged ion formed when an atom loses one or more electrons.">cation</Term> forms when an atom loses electrons. Because electrons carry negative charge, removing them leaves more protons than electrons, giving a net positive charge. Metal atoms typically form cations. Sodium (11 protons, 11 electrons) loses one electron to become Na+ with 11 protons and 10 electrons.</p>
        <p>An <Term def="A negatively charged ion formed when an atom gains one or more electrons.">anion</Term> forms when an atom gains electrons. Extra electrons mean more negative charge than protons, giving a net negative charge. Non-metal atoms typically form anions. Chlorine (17 protons, 17 electrons) gains one electron to become Cl- with 17 protons and 18 electrons.</p>
        <p><Term def="A diagram using dots and crosses to represent outer-shell electrons, showing which electrons are transferred in ionic bonding.">Dot-and-cross diagrams</Term> are models that make this process visible. They show which electrons belong to which atom and how the charges on the resulting ions arise from the electron transfers. The key point is that the positive charge on Na+ comes not from gaining protons, but from losing electrons.</p>
        <Figure caption="Cation and anion formation showing proton and electron counts, resulting charge and noble gas configuration achieved.">
          <div className="data-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead><tr style={{ background: "var(--accent-soft)" }}>
                <th style={{ padding: "5px 8px" }}>Atom</th>
                <th style={{ padding: "5px 8px" }}>Protons</th>
                <th style={{ padding: "5px 8px" }}>Electrons (atom)</th>
                <th style={{ padding: "5px 8px" }}>Change</th>
                <th style={{ padding: "5px 8px" }}>Ion</th>
                <th style={{ padding: "5px 8px" }}>Electrons (ion)</th>
                <th style={{ padding: "5px 8px" }}>Charge</th>
              </tr></thead>
              <tbody>
                {[["Na","11","11","Loses 1","Na+","10","+1"],["Mg","12","12","Loses 2","Mg2+","10","+2"],["Al","13","13","Loses 3","Al3+","10","+3"],["Cl","17","17","Gains 1","Cl-","18","-1"],["O","8","8","Gains 2","O2-","10","-2"],["N","7","7","Gains 3","N3-","10","-3"]].map(row => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, i) => <td key={i} style={{ padding: "4px 8px", textAlign: "center" }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={5} question="A magnesium atom has 12 protons and 12 electrons. How many electrons does the Mg2+ ion have?" options={["14","12","10","8"]} correct={2} explain="Mg2+ loses 2 electrons: 12 minus 2 equals 10 electrons. The ion still has 12 protons, giving a net charge of plus 2."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.2.5" title="Diatomic elements" progress={progress} setProgress={setProgress}>
        <p>Most elements exist as single atoms at standard conditions, but seven non-metals are only stable as pairs. These <Term def="Molecules consisting of exactly two atoms of the same element bonded by a covalent bond.">diatomic elements</Term> are hydrogen (H2), nitrogen (N2), oxygen (O2), fluorine (F2), chlorine (Cl2), bromine (Br2) and iodine (I2). A handy mnemonic is "Have No Fear Of Ice Cold Beer" for H, N, F, O, I, Cl, Br.</p>
        <p>Each pair shares electron pairs so both atoms achieve a full outer shell. Nitrogen (N2) forms a triple bond (three shared pairs), making it exceptionally stable and unreactive. This is why nitrogen makes up 78% of the atmosphere but rarely takes part in reactions under normal conditions. Recognising diatomic elements is essential for writing correct chemical equations: when oxygen is involved, write O2, not O, or your equations will not balance.</p>
        <Callout kind="tip" title="Mnemonic">Have No Fear Of Ice Cold Beer: H2, N2, F2, O2, I2, Cl2, Br2. Learn this list and you will never forget a diatomic element.</Callout>
        <MatchBuckets
          items={[
            { id: "h2", label: "H2 (hydrogen)", bucket: "diatomic" },
            { id: "na", label: "Na (sodium)",   bucket: "monatomic" },
            { id: "o2", label: "O2 (oxygen)",   bucket: "diatomic" },
            { id: "fe", label: "Fe (iron)",     bucket: "monatomic" },
            { id: "cl", label: "Cl2 (chlorine)", bucket: "diatomic" },
            { id: "cu", label: "Cu (copper)",   bucket: "monatomic" },
            { id: "n2", label: "N2 (nitrogen)", bucket: "diatomic" },
          ]}
          buckets={[
            { id: "diatomic",  label: "Diatomic element" },
            { id: "monatomic", label: "Monatomic element" },
          ]}
        />
        <QGroup title="Check yourself">
          <MCQ num={6} question="Which of the following is the correct formula for chlorine gas?" options={["Cl","Cl2","2Cl","Cl3"]} correct={1} explain="Chlorine is a diatomic element. Its correct formula is Cl2, showing two chlorine atoms bonded together."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.2.6" title="Chemical formulas of ionic compounds and covalent molecules" progress={progress} setProgress={setProgress}>
        <p>A <Term def="A representation using element symbols and subscript numbers showing the types and ratios of atoms in a substance.">chemical formula</Term> tells you what atoms are in a substance and in what ratio. For ionic compounds, you must balance the charges of each ion so the overall compound is electrically neutral. The <Term def="A method for finding the formula of an ionic compound by swapping the charge numbers of each ion to become the subscript of the other.">cross-over rule</Term> makes this straightforward: write the charge of each ion as the subscript of the other, then simplify.</p>
        <p>For example, calcium (Ca2+) and chloride (Cl-): swap to get CaCl2. Check: +2 + 2(-1) = 0. For aluminium oxide: Al3+ and O2-, swap to get Al2O3. Check: 2(+3) + 3(-2) = 0. For covalent molecules, the formula reflects how many atoms share electrons to satisfy each element's valency. Water (H2O) has two hydrogen atoms (valency 1) and one oxygen atom (valency 2). For <Term def="Charged groups of atoms that act as a single unit in a formula, such as sulfate (SO42-) and nitrate (NO3-).">polyatomic ions</Term> like nitrate (NO3-), use brackets when more than one group is needed: calcium nitrate is Ca(NO3)2.</p>
        <Callout kind="key" title="Cross-over rule">To find an ionic formula: write the charge of the cation as the subscript of the anion, and the charge of the anion as the subscript of the cation. Simplify if both subscripts share a common factor. Always check that charges sum to zero.</Callout>
        <Figure caption="Applying the cross-over rule to derive common ionic compound formulas.">
          <div className="data-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead><tr style={{ background: "var(--accent-soft)" }}>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Compound</th>
                <th style={{ padding: "5px 8px" }}>Cation</th>
                <th style={{ padding: "5px 8px" }}>Anion</th>
                <th style={{ padding: "5px 8px" }}>Formula</th>
                <th style={{ padding: "5px 8px" }}>Type</th>
              </tr></thead>
              <tbody>
                {[["Sodium chloride","Na+ (+1)","Cl- (-1)","NaCl","Ionic"],["Magnesium oxide","Mg2+ (+2)","O2- (-2)","MgO","Ionic"],["Calcium chloride","Ca2+ (+2)","Cl- (-1)","CaCl2","Ionic"],["Aluminium oxide","Al3+ (+3)","O2- (-2)","Al2O3","Ionic"],["Water","H (val. 1)","O (val. 2)","H2O","Covalent"],["Carbon dioxide","C (val. 4)","O (val. 2)","CO2","Covalent"],["Ammonia","N (val. 3)","H (val. 1)","NH3","Covalent"]].map(row => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, i) => <td key={i} style={{ padding: "4px 8px", textAlign: i === 0 ? "left" : "center" }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={7} question="Using the cross-over rule, what is the formula for the ionic compound formed between aluminium (Al3+) and oxide (O2-)?" options={["AlO","Al2O3","Al3O2","AlO3"]} correct={1} explain="Al3+ has charge +3 and O2- has charge -2. Cross over: Al2O3. Check: 2(+3) + 3(-2) = +6 - 6 = 0."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.2.7" title="Properties of ionic, covalent and metallic substances" progress={progress} setProgress={setProgress}>
        <p>The bond type in a substance directly determines its properties. Ionic compounds form rigid <Term def="A regular three-dimensional arrangement of ions held together by electrostatic forces.">crystal lattices</Term> with strong attractions between every ion and its neighbours. This gives them high melting points, hardness, brittleness (the lattice shatters when like-charged ions align after shifting), and the ability to conduct electricity when dissolved or melted (free ions carry charge). In the solid state, ionic compounds are non-conductors because ions are fixed in place.</p>
        <p>Covalent molecular substances (water, sugar, carbon dioxide) have only weak forces between their molecules, giving low melting points and poor conductivity. Covalent network solids (diamond, silicon dioxide) are exceptions: covalent bonds extend throughout the whole structure, requiring enormous energy to break, giving very high melting points. Metals are <Term def="The ability of a material to be beaten or pressed into thin sheets without breaking.">malleable</Term> and <Term def="The ability of a material to be drawn into thin wires without breaking.">ductile</Term> because metal ion layers can slide without breaking the metallic bond, and conduct electricity and heat well because of their mobile electron sea.</p>
        <QGroup title="Check yourself">
          <MCQ num={8} question="Why is diamond extremely hard with a very high melting point, even though it contains only covalent bonds?" options={["Diamond contains ionic bonds that are very strong","Diamond is a giant covalent network where every carbon atom is bonded to four others throughout the whole structure, requiring huge energy to break all bonds","Diamond's intermolecular forces are exceptionally strong","Diamond contains metallic bonds that make it hard"]} correct={1} explain="Diamond is a giant covalent network lattice. Every carbon bonds to four others in 3D. To melt diamond you must break ALL these covalent bonds simultaneously, requiring enormous energy."/>
          <WrittenQ num={9} question="A technician needs a material that conducts electricity, can be drawn into a thin wire, and resists corrosion. Using bonding theory, suggest the best material type and a specific example." model="A metal is the best choice. Metals contain delocalised electrons that conduct electricity, and metal ion layers can slide past each other (making them ductile, so they can be drawn into wire). For corrosion resistance, copper or gold would work well. Copper is the standard choice for electrical wiring because it is an excellent conductor, highly ductile and only slowly corrodes."/>
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 3.3: ORGANIC CHEMISTRY
   ============================================================ */
function Section33({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">3.3 Chemistry of Organic Compounds</div>
        <h1>Carbon: the backbone of life and fuel</h1>
        <p className="lead">Organic chemistry explains the fuels in your car, the plastics around you, and the molecules in every living cell.</p>
      </div>

      <DotPoint id="3.3.1" title="Organic vs inorganic compounds" progress={progress} setProgress={setProgress}>
        <p>Modern chemistry defines <Term def="Compounds that contain carbon atoms bonded to hydrogen (C-H bonds), often also bonded to oxygen, nitrogen and other elements.">organic compounds</Term> as those containing carbon bonded to hydrogen. The carbon skeleton can chain, branch and ring in countless ways because carbon has a valency of 4. This structural flexibility explains why over 60 million organic compounds are known. By contrast, <Term def="Compounds that generally do not contain C-H bonds; includes minerals, salts, oxides and most acids.">inorganic compounds</Term> do not contain C-H bonds. Sodium chloride, iron oxide, and water are all inorganic.</p>
        <p>A few carbon-containing compounds are classified as inorganic because they lack C-H bonds: carbon dioxide (CO2), carbon monoxide (CO) and carbonates are treated as inorganic by convention. All living organisms are built from organic molecules, and so are most fuels and plastics, making organic chemistry central to understanding both life and modern materials.</p>
        <Callout kind="fact" title="Why so many organic compounds?">Carbon's valency of 4 lets it chain to itself in straight lines, branches, and rings of almost any length. No other element matches this versatility, which is why life is carbon-based.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={1} question="Which of the following is classified as an organic compound?" options={["NaCl","CO2","CH4","H2O"]} correct={2} explain="CH4 (methane) contains C-H bonds, making it organic. CO2 has no C-H bonds and is classified as inorganic by convention."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.3.2" title="Hydrocarbons from crude oil and their uses" progress={progress} setProgress={setProgress}>
        <p><Term def="A complex mixture of hydrocarbons (compounds of carbon and hydrogen only) formed from ancient marine organisms over millions of years.">Crude oil</Term> is a mixture of hundreds of <Term def="Compounds containing only carbon and hydrogen atoms.">hydrocarbons</Term> with different chain lengths. Because chain length determines <Term def="The temperature at which a liquid turns to gas.">boiling point</Term>, the components can be separated by <Term def="An industrial process that separates crude oil into fractions based on their different boiling points in a tall fractionating column.">fractional distillation</Term>. Crude oil is heated to around 350 to 400 degrees Celsius. Vapours rise up the column, which is cooler at the top, and each fraction condenses at the height matching its boiling point. Short chains condense near the top (low boiling points) and long chains near the bottom (high boiling points).</p>
        <p>Each fraction has different properties and uses. Short-chain fractions (petrol, LPG) are volatile and flammable, making them ideal vehicle and cooking fuels. Longer fractions (fuel oil, bitumen) are thicker, less volatile, and used for ships, power stations and road surfaces. Demand for short-chain fuels often exceeds what distillation alone provides, so longer chains are chemically broken down in a process called <Term def="An industrial process that breaks long-chain hydrocarbons into shorter, more useful ones by heating with a catalyst.">cracking</Term>.</p>
        <FractionColumn/>
        <QGroup title="Check yourself">
          <MCQ num={2} question="Why do shorter-chain hydrocarbons condense near the top of the fractionating column?" options={["They are heavier and rise more slowly","They have lower boiling points and only condense at the cooler temperatures found higher in the column","They are produced last in the distillation","They have the most carbon atoms"]} correct={1} explain="Shorter chains have weaker intermolecular forces and lower boiling points, so they remain as vapour until reaching the cooler upper section of the column."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.3.3" title="IUPAC naming of organic compounds" progress={progress} setProgress={setProgress}>
        <p><Term def="The International Union of Pure and Applied Chemistry, which developed the systematic naming rules for chemical compounds used worldwide.">IUPAC</Term> developed a universal naming system so every organic compound has one unique, internationally recognised name. Without it, the same compound might have dozens of trivial names in different countries, causing confusion in science.</p>
        <p>IUPAC names combine a <Term def="A word fragment indicating the number of carbon atoms in the longest chain: meth=1, eth=2, prop=3, but=4, pent=5, hex=6, hept=7, oct=8.">carbon-count prefix</Term> with a family suffix: "-ane" for <Term def="Hydrocarbons with only single carbon-carbon bonds; general formula CnH(2n+2).">alkanes</Term>, "-ene" for <Term def="Hydrocarbons containing at least one carbon-carbon double bond.">alkenes</Term>, and "-ol" for alcohols. So the alkane with three carbons is propane (prop- + -ane), the two-carbon alcohol is ethanol (eth- + -anol). These rules work internationally for anyone who knows them.</p>
        <Figure caption="IUPAC naming: carbon-count prefixes and family suffixes for simple organic compounds.">
          <div className="data-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead><tr style={{ background: "var(--accent-soft)" }}>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>IUPAC name</th>
                <th style={{ padding: "5px 8px" }}>Formula</th>
                <th style={{ padding: "5px 8px" }}>Family</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Common use</th>
              </tr></thead>
              <tbody>
                {[["Methane","CH4","Alkane","Natural gas, heating"],["Ethane","C2H6","Alkane","LPG component"],["Propane","C3H8","Alkane","BBQ gas"],["Butane","C4H10","Alkane","Lighter fuel"],["Ethene","C2H4","Alkene","Plastics feedstock"],["Methanol","CH3OH","Alcohol","Solvent, antifreeze"],["Ethanol","C2H5OH","Alcohol","Beverages, sanitiser"]].map(row => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, i) => <td key={i} style={{ padding: "4px 8px", textAlign: i === 0 || i === 3 ? "left" : "center" }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={3} question="What is the IUPAC name for a 4-carbon alkane (C4H10)?" options={["Butene","Propane","Butane","Pentane"]} correct={2} explain="4 carbons = but-; single bonds only = -ane; so butane (C4H10)."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.3.4" title="Structures of simple alkanes C1 to C8" progress={progress} setProgress={setProgress}>
        <p>Alkanes are a <Term def="A family of organic compounds with the same general formula and similar chemical properties, where each member differs by one CH2 unit.">homologous series</Term> following the general formula CnH(2n+2). All carbon-carbon bonds are single, and each carbon forms exactly four bonds. As chain length increases by one CH2 unit, boiling point rises because larger molecules have stronger <Term def="Weak attractive forces between molecules that arise from temporary uneven distribution of electrons; stronger in larger molecules.">London dispersion forces</Term> between them. Methane to butane are gases at 25 degrees Celsius; pentane upwards are liquids.</p>
        <p>From butane (C4H10) onward, alkanes can also be <Term def="Molecules with the same molecular formula but different arrangements of atoms, giving different structures and slightly different properties.">structural isomers</Term>. n-Butane has a straight chain while isobutane has a branched structure. Both are C4H10 but isobutane's more compact shape means slightly weaker intermolecular forces and a lower boiling point.</p>
        <AlkaneBuilder/>
        <QGroup title="Check yourself">
          <MCQ num={4} question="Using the general formula CnH(2n+2), how many hydrogen atoms are in octane (C8H18)?" options={["16","18","20","10"]} correct={1} explain="For n=8: H = 2(8)+2 = 18. Octane is C8H18 with 18 hydrogen atoms."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.3.5" title="Complete and incomplete combustion of hydrocarbons" progress={progress} setProgress={setProgress}>
        <p><Term def="The chemical reaction between a fuel and oxygen that releases energy as heat and light.">Combustion</Term> of a hydrocarbon in a plentiful oxygen supply produces only carbon dioxide and water. This is <Term def="Combustion in excess oxygen; produces only CO2 and H2O; releases maximum energy.">complete combustion</Term> and it releases the maximum possible energy from the fuel. The complete combustion of methane is: CH4 + 2O2 produces CO2 + 2H2O. Complete combustion gives a blue flame in a Bunsen burner or gas stove.</p>
        <p>When oxygen is limited, <Term def="Combustion in a restricted oxygen supply; produces carbon monoxide (CO) and/or soot (C) as well as water; releases less energy.">incomplete combustion</Term> occurs. Instead of all carbon becoming CO2, some becomes <Term def="A colourless, odourless, highly toxic gas that prevents oxygen transport in the blood by binding to haemoglobin 200 times more strongly than oxygen.">carbon monoxide (CO)</Term> or solid carbon (soot). Incomplete combustion releases less energy, produces a yellow or orange flame, and deposits black soot. Carbon monoxide is particularly dangerous: it is colourless, odourless, and binds to haemoglobin 200 times more strongly than oxygen, preventing oxygen delivery to cells.</p>
        <Figure caption="Comparison of complete and incomplete combustion: oxygen supply, products, energy and safety.">
          <div className="data-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead><tr style={{ background: "var(--accent-soft)" }}>
                <th style={{ padding: "5px 8px" }}>Feature</th>
                <th style={{ padding: "5px 8px" }}>Complete combustion</th>
                <th style={{ padding: "5px 8px" }}>Incomplete combustion</th>
              </tr></thead>
              <tbody>
                {[["Oxygen supply","Plentiful","Limited"],["Carbon products","CO2 only","CO and/or soot (C)"],["Hydrogen products","H2O","H2O"],["Energy released","Maximum","Less than maximum"],["Flame colour","Blue","Yellow/orange"],["Safety concern","CO2 (greenhouse gas)","CO (toxic); soot (air pollution)"]].map(row => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, i) => <td key={i} style={{ padding: "4px 8px", textAlign: "center" }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
        <Callout kind="warn" title="Carbon monoxide danger">An unflued gas heater in a small, poorly ventilated room can accumulate CO to dangerous levels as oxygen in the room is consumed and combustion becomes increasingly incomplete. Always ensure adequate ventilation.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={5} question="What are the only products of the complete combustion of a hydrocarbon?" options={["Carbon monoxide and water","Carbon dioxide and water","Carbon and water","Carbon monoxide and carbon dioxide"]} correct={1} explain="Complete combustion (in excess oxygen) oxidises all carbon to CO2 and all hydrogen to H2O. No CO or soot is produced."/>
          <WrittenQ num={6} question="Write a balanced chemical equation for the complete combustion of propane (C3H8) and explain how you know it is balanced." model="Balanced equation: C3H8 + 5O2 produces 3CO2 + 4H2O. Check: C: 3=3; H: 8=8; O: 10=10. The equation is balanced because the number of each type of atom is the same on both sides."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.3.6" title="Changing uses of hydrocarbon compounds over time" progress={progress} setProgress={setProgress}>
        <p>The dominant uses of hydrocarbons have changed dramatically over 200 years. In the 19th century, coal powered steam engines and heated homes. The discovery of petroleum and invention of the internal combustion engine shifted demand toward liquid fuels in the 20th century. By mid-century, <Term def="Chemicals derived from petroleum or natural gas, used as feedstocks to manufacture plastics, pharmaceuticals, fertilisers and synthetic fibres.">petrochemicals</Term> became feedstocks for plastics, pharmaceuticals, synthetic fibres and fertilisers, transforming everyday life.</p>
        <p>In the 21st century, growing awareness of climate change is reshaping these uses again. Renewable energy sources are replacing coal in electricity generation. Electric vehicles are beginning to displace petrol and diesel cars. Natural gas (methane) is used as a <Term def="A fuel that produces fewer greenhouse gas emissions than coal or oil, used during the transition from fossil fuels to renewables.">transition fuel</Term> while renewable capacity grows. However, hydrocarbons remain essential as chemical feedstocks for materials where no direct renewable substitute yet exists. The challenge ahead is reducing combustion of hydrocarbons while retaining access to their chemical versatility.</p>
        <Figure caption="Timeline of changing hydrocarbon uses from coal-dominated 19th century to renewables-transitioning 21st century.">
          <svg viewBox="0 0 560 70" width="100%" style={{ maxWidth: 560 }}>
            {[
              { x: 20,  label: "1800s", desc: "Coal, steam" },
              { x: 155, label: "1900s", desc: "Petroleum, cars" },
              { x: 290, label: "1950s", desc: "Petrochemicals" },
              { x: 420, label: "2000s", desc: "Renewables begin" },
              { x: 530, label: "Now", desc: "EVs, solar" },
            ].map((step, i, arr) => (
              <g key={step.label}>
                {i < arr.length - 1 && <line x1={step.x + 20} y1={26} x2={arr[i+1].x - 10} y2={26} stroke="var(--accent-deep)" strokeWidth="2"/>}
                <circle cx={step.x} cy={26} r={9} fill="var(--accent-deep)"/>
                <text x={step.x} y={48} textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--ink)">{step.label}</text>
                <text x={step.x} y={62} textAnchor="middle" fontSize="9" fill="var(--muted)">{step.desc}</text>
              </g>
            ))}
          </svg>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={7} question="Why is natural gas sometimes called a 'transition fuel'?" options={["It can be converted directly into solar energy","It produces less CO2 per unit of energy than coal or oil, making it a bridging fuel while renewable capacity is built","It is a renewable resource","It produces no greenhouse gases at all"]} correct={1} explain="Natural gas (methane) releases less CO2 per unit of energy than coal or oil when burned, but it is still a fossil fuel. It is a short-term bridge while renewable energy capacity is developed."/>
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 3.4: POLYMERS
   ============================================================ */
function Section34({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">3.4 Polymers</div>
        <h1>Giant molecules in everyday life</h1>
        <p className="lead">From the bag in your lunch box to the fibres in your sportswear, polymers are built from thousands of repeating small units called monomers.</p>
      </div>

      <Figure src="img/polymers.png" caption="Many small monomers join into a long polymer chain." />
      <DotPoint id="3.4.1" title="Raw materials for polymer production" progress={progress} setProgress={setProgress}>
        <p>A <Term def="A large molecule made of many repeating smaller units (monomers) joined by covalent bonds.">polymer</Term> is a giant molecule built from thousands of small, identical (or similar) units called <Term def="The small, reactive molecules that join together to form a polymer chain.">monomers</Term>. Most synthetic polymers come from monomers derived from crude oil. Cracking of petroleum produces reactive alkenes, especially <Term def="The simplest alkene, CH2=CH2, used as the monomer for polyethylene.">ethene</Term>, which polymerises to make polyethylene (PE), one of the world's most-used plastics. Propene becomes polypropylene (PP), vinyl chloride becomes PVC, and styrene becomes polystyrene.</p>
        <p>Not all polymers come from petroleum. Natural polymers have always existed in living organisms: <Term def="A natural polymer of glucose forming the structural material in plant cell walls.">cellulose</Term>, starch, proteins, DNA and natural rubber are all biological polymers. Bio-based synthetic polymers are a growing category. <Term def="Polylactic acid: a bio-based, potentially compostable polymer made from lactic acid derived from fermenting plant sugars.">PLA (polylactic acid)</Term> is made from sugarcane or corn starch. As society moves away from petroleum dependency, these renewable monomers offer lower-carbon alternatives.</p>
        <Callout kind="key" title="Key idea">A polymer is named by adding "poly-" to the monomer name: ethene becomes polyethylene, propene becomes polypropylene, styrene becomes polystyrene.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={1} question="What is the monomer used to make polyethylene?" options={["Propene","Ethene","Styrene","Vinyl chloride"]} correct={1} explain="Polyethylene is made by polymerising ethene (CH2=CH2). The name confirms this: poly + ethene = polyethylene."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.4.2" title="Properties of a range of polymers" progress={progress} setProgress={setProgress}>
        <p>Polymer properties depend on chain length, degree of branching, cross-linking, and additives. <Term def="Plastics that soften when heated and can be re-moulded; chains are held by weak intermolecular forces.">Thermoplastics</Term> (polyethylene, polypropylene, PET) soften when heated because heat overcomes the weak intermolecular forces between chains. They can be recycled by melting. <Term def="Plastics that form permanent covalent cross-links between chains when first cured; cannot be re-melted.">Thermosets</Term> (Bakelite, epoxy resin) form permanent covalent cross-links when cured; heating decomposes rather than melts them. This makes thermosets harder and more heat-resistant, but non-recyclable by melting.</p>
        <p>Within thermoplastics, branching matters. <Term def="Low-density polyethylene: a branched polymer with chains that cannot pack tightly, giving a soft, flexible material.">LDPE</Term> (low-density polyethylene) has more branched chains that cannot pack tightly, giving a soft, flexible material used for plastic bags. <Term def="High-density polyethylene: an unbranched polymer whose tightly packed chains give a stiff, strong material.">HDPE</Term> (high-density polyethylene) has mostly unbranched chains that pack closely together, giving stiffness and strength for milk bottles and pipes. Nylon has strong hydrogen bonds between chains, giving it high tensile strength for fibres and ropes.</p>
        <PolymerComparison/>
        <QGroup title="Check yourself">
          <MCQ num={2} question="Why can thermoplastics be recycled by melting but thermosets cannot?" options={["Thermosets are made from more expensive monomers","Thermoplastic chains are held by weak intermolecular forces that heat can overcome; thermoset chains are joined by permanent covalent cross-links that decompose rather than melt","Thermoplastics contain more carbon","Thermosets are always coloured"]} correct={1} explain="Thermoplastic chains are held by weak intermolecular forces disrupted by heat, allowing flow. Thermoset chains are joined by permanent covalent bonds; heating destroys the material chemically."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.4.3" title="Survey of polymer waste in the local environment" progress={progress} setProgress={setProgress}>
        <p>Plastic pollution is one of the most visible environmental issues in Australia. Most common plastics are not <Term def="The ability of a material to be broken down by microorganisms into simpler natural substances within a reasonable timeframe.">biodegradable</Term>. Discarded items persist for decades to centuries, gradually fragmenting through UV exposure, weathering and abrasion into smaller pieces, but retaining their chemical structure. A physical survey of a local area provides direct evidence of the scale and types of polymer waste present.</p>
        <p>Surveys should be conducted systematically. Using a <Term def="A defined straight-line path along which observations or collections are made.">transect</Term> (a set path with items collected within a defined width) or a <Term def="A defined rectangular area within which all items are counted.">quadrat</Term> (a defined area fully searched) makes results comparable between locations and times. Items are identified by the <Term def="The number (1 to 7) in a recycling triangle stamped on plastic products to identify the polymer type.">Resin Identification Code</Term> (recycling number) where visible, or by appearance and flexibility. Data expressed as items per 100 square metres can be compared between sites and over time.</p>
        <Callout kind="warn" title="Small fragments matter">Fragments smaller than 5 mm are called microplastics. They are too small to collect easily, can be ingested by a wide range of animals, and are nearly impossible to remove once they enter soil or water. Preventing large plastic items from entering the environment is far more effective than trying to remove fragments later.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={3} question="What does a high proportion of very small plastic fragments (below 2 cm) in a survey suggest?" options={["The plastic arrived recently","The plastic has been in the environment a long time and has been weathered and broken down from larger items","There is a recycling facility nearby","The survey was conducted in winter"]} correct={1} explain="Small fragments form when larger plastic items are broken down by UV, weathering and abrasion over months or years. A high proportion of fragments indicates chronic, persistent, long-term pollution."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.4.4" title="Biodegradability of packaging materials" progress={progress} setProgress={setProgress}>
        <p>Biodegradability is the ability of a material to be broken down by microorganisms (bacteria and fungi) into water, carbon dioxide and organic matter within a reasonable timeframe. Paper and cardboard biodegrade in weeks to months in moist soil because microorganisms have enzymes to break down cellulose. Most synthetic plastics take decades to centuries because their long carbon-chain structure is not recognised by any natural enzyme.</p>
        <p>A classroom biodegradation investigation buries samples of different packaging materials in moist soil and measures percentage mass loss over 2 to 4 weeks. Controlling variables such as soil moisture and temperature ensures differences in mass loss reflect the material's properties, not the conditions. Photographing samples before and after burial provides qualitative evidence alongside the quantitative mass data.</p>
        <p>PLA is marketed as biodegradable, but only under <Term def="Industrial composting conditions: sustained temperatures above 58 degrees Celsius with high humidity and specific microbial populations.">industrial composting</Term> conditions (above 58 degrees Celsius). In home compost bins, normal soil or seawater, PLA degrades very slowly. Labelling a material "biodegradable" without specifying the conditions needed can mislead consumers and policy makers.</p>
        <Callout kind="key" title="Biodegradation needs conditions">PLA will not biodegrade usefully in landfill, cold soil or seawater. It needs an industrial composting facility. Always ask: biodegradable WHERE and HOW FAST?</Callout>
        <QGroup title="Check yourself">
          <MCQ num={4} question="Why does a synthetic plastic bag show little or no mass loss when buried in moist soil for 4 weeks?" options={["It is too wet in the soil","Soil microorganisms do not have the enzymes needed to break down the long carbon-chain polymer backbone","It is too cold for any reaction","The bag floats to the surface"]} correct={1} explain="Synthetic plastics like LDPE have a long polycarbon backbone with no sites that microbial enzymes can attack. Without microbial degradation, negligible mass is lost in a short period."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="3.4.5" title="Bioaccumulation of microplastics in the environment" progress={progress} setProgress={setProgress}>
        <p><Term def="Plastic particles smaller than 5 mm in diameter.">Microplastics</Term> enter the environment from two sources. Primary microplastics are manufactured at small size: nurdles (industrial plastic pellets), microbeads in cosmetics, and fibres shed from synthetic clothing during washing. Secondary microplastics form when larger plastic items break down through UV exposure, weathering and abrasion. Microplastics are now found everywhere: ocean water, deep sea sediments, freshwater, soil, air, and even in human blood, lungs and placentas.</p>
        <p><Term def="The buildup of a substance in an organism's tissues at a concentration higher than in its surrounding environment.">Bioaccumulation</Term> occurs when an organism takes in microplastics faster than it can eliminate them. <Term def="The increase in concentration of a pollutant at each successive level of a food chain.">Biomagnification</Term> amplifies this at each level of a food chain: phytoplankton absorb microplastics, small fish eat many phytoplankton and accumulate higher concentrations, larger fish eat many small fish, and apex predators (including humans) at the top face the highest concentrations. The chemicals adsorbed onto plastic surfaces (persistent organic pollutants, or POPs) also biomagnify and are known toxins.</p>
        <Figure caption="Biomagnification of microplastics through a simplified marine food chain.">
          <svg viewBox="0 0 560 80" width="100%" style={{ maxWidth: 560 }}>
            {[
              { x: 20,  w: 60,  label: "Ocean water", sub: "Low conc.", colour: "#bfdbfe" },
              { x: 110, w: 70,  label: "Phytoplankton", sub: "Higher", colour: "#93c5fd" },
              { x: 210, w: 80,  label: "Small fish", sub: "Higher still", colour: "#60a5fa" },
              { x: 320, w: 90,  label: "Large fish", sub: "Much higher", colour: "#2563eb" },
              { x: 440, w: 100, label: "Apex predator", sub: "Highest", colour: "#1e40af" },
            ].map((s, i, arr) => (
              <g key={s.label}>
                <rect x={s.x} y={20} width={s.w} height={30} rx="6" fill={s.colour}/>
                <text x={s.x + s.w/2} y={38} textAnchor="middle" fontSize="9.5" fontWeight="600" fill={i > 2 ? "#fff" : "#1e40af"}>{s.label}</text>
                <text x={s.x + s.w/2} y={62} textAnchor="middle" fontSize="8.5" fill="var(--muted)">{s.sub}</text>
                {i < arr.length - 1 && <text x={s.x + s.w + 4} y={38} fontSize="13" fill="var(--accent-deep)">&#8594;</text>}
              </g>
            ))}
          </svg>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={5} question="Why are apex predators such as large tuna or dolphins potentially more exposed to microplastic-associated pollutants than small fish?" options={["They live deeper in the ocean","They eat many individuals from lower trophic levels, each already containing accumulated pollutants, so concentration multiplies up the food chain","They are larger and absorb more through their skin","They drink more water"]} correct={1} explain="Biomagnification means that at each step in the food chain, a predator eats many prey, each already containing the pollutant. By the time you reach apex predators, concentrations can be thousands of times higher than in the surrounding water."/>
          <WrittenQ num={6} question="A scientist argues that microplastics are not directly toxic; it is the chemicals on their surfaces that cause harm. Explain why this distinction matters for environmental management." model="If physical particles cause most harm, the priority is reducing plastic litter and preventing fragmentation. If adsorbed chemicals (POPs) cause most harm, the priority also includes reducing industrial chemical pollution. In reality, both physical (gut blockage, reduced feeding) and chemical (toxic POPs) effects occur. The distinction matters because different management strategies are needed to address each, so both must be tackled together."/>
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 3.5: MATERIALS IN CONTEXT
   ============================================================ */
function Section35({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">3.5 Materials in Context</div>
        <h1>Beyond crude oil</h1>
        <p className="lead">Every alternative to a petroleum-derived material comes with its own set of trade-offs. Life cycle thinking is the only honest way to compare them.</p>
      </div>

      <DotPoint id="3.5.1" title="Environmental impacts of alternatives to petroleum-derived materials" progress={progress} setProgress={setProgress}>
        <p>Materials derived from crude oil include conventional plastics (polyethylene, PET, PVC, polystyrene), synthetic fibres (nylon, polyester) and synthetic rubber. Growing concerns about plastic pollution, greenhouse gas emissions and the finite nature of oil have driven development of alternatives: bio-based plastics and fibres, natural materials (cotton, wool, bamboo), recycled materials, and entirely new material classes. However, every alternative also has environmental impacts that must be honestly evaluated.</p>
        <p>A <Term def="A systematic evaluation of the environmental impacts of a product or material at every stage from raw material extraction through manufacturing, transport, use, and end-of-life.">life cycle assessment (LCA)</Term> evaluates impact across five stages: raw material extraction, manufacturing, transport, use, and end of life. LCA considers multiple impact categories: greenhouse gas emissions, water consumption, land use, biodiversity impacts, energy use and pollution. A material might have a lower carbon footprint than petroleum plastic but require far more water or land. Focusing on a single measure like biodegradability alone gives a misleading picture.</p>
        <LCATool/>
        <Figure caption="Selected alternative materials compared with their petroleum-derived equivalents across key environmental impact categories.">
          <div className="data-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead><tr style={{ background: "var(--accent-soft)" }}>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Alternative</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Replaces</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Environmental advantage</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>Environmental concern</th>
              </tr></thead>
              <tbody>
                {[
                  ["PLA","PET plastic","Bio-based; potentially compostable","Needs industrial composting; land and water for crops"],
                  ["Recycled polyester","Virgin polyester","Reduces oil use; diverts plastic waste","Still releases microplastic fibres in washing"],
                  ["Cotton fabric","Synthetic fleece","Biodegradable; renewable","High water and pesticide use"],
                  ["Bamboo products","Timber and plastic","Rapid growth; sequesters CO2","Processing chemicals; transport emissions"],
                  ["Glass (reusable)","Single-use plastic","Infinitely recyclable; no microplastics","Heavier; more energy to manufacture"],
                  ["Aluminium (reusable)","Single-use plastic","Highly recyclable; durable","Energy-intensive primary production"],
                ].map(row => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, i) => <td key={i} style={{ padding: "4px 8px" }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
        <Callout kind="key" title="LCA principle">Always evaluate alternatives across their entire life cycle, not just one stage. A material that biodegrades easily at end-of-life might have a very high water or carbon footprint during production.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={1} question="A supermarket claims its bamboo packaging is 'green'. Which of the following is the best question to ask before accepting this claim?" options={["What colour is the packaging?","How much does it cost?","What are the environmental impacts at every life cycle stage, including how it was processed and what happens at end of life?","Is it waterproof?"]} correct={2} explain="A life cycle approach asks about all stages: raw material extraction (was the bamboo sustainably grown?), manufacturing (what chemicals and energy were used?), transport, use and end-of-life (does it actually biodegrade in available conditions?)."/>
          <WrittenQ num={2} question="Using life cycle thinking, explain why a reusable cotton shopping bag must be used many times before its total environmental impact becomes less than that of using single-use polyethylene bags." model="Manufacturing a cotton bag requires significantly more energy and water than manufacturing one polyethylene bag, because cotton growing and processing are resource-intensive. This gives the cotton bag a higher environmental 'debt' at the start. Only after the bag has replaced hundreds of single-use bags does its accumulated saving (avoiding production of those bags) outweigh its initial manufacturing cost. Studies suggest a cotton bag may need to replace 100 or more single-use bags before its life cycle climate impact becomes comparable."/>
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   MOUNT
   ============================================================ */
mountTopicApp({
  year: 9,
  topicTitle: "Materials",
  branch: "chemistry",
  heroImage: "img/hero.png",
  strand: "Stage 5 · NSW Science",
  accent: "violet",
  storageKey: "y9.materials",
  hubHref: "../",
  intro: "Matter is made of atoms, and the way atoms bond together determines the properties of every material on Earth. In this topic you will explore Australia's finite mineral resources and their environmental costs, investigate how ionic, covalent and metallic bonds explain material properties, dive into organic chemistry and the hydrocarbons that fuel and feed modern society, examine the polymers that have transformed everyday life, and critically evaluate alternatives to petroleum-derived materials using life cycle thinking.",
  glossary: {
    "finite resource": "A resource that exists in a limited quantity and cannot be replenished on a human timescale.",
    "smelting": "The chemical removal of oxygen from an ore at high temperatures, usually using carbon or hydrogen as a reducing agent.",
    "tailings": "The waste rock and crushed material remaining after the valuable ore has been extracted from mined rock.",
    "acid mine drainage": "Acidic, metal-contaminated water formed when sulfide minerals in exposed rock react with water and oxygen.",
    "valency": "The number of electrons an atom must gain, lose or share to reach a stable (full outer shell) electron configuration.",
    "octet rule": "The tendency of atoms to seek 8 electrons in their outer shell, matching the electron configuration of the nearest noble gas.",
    "noble gas configuration": "An electron arrangement identical to that of a noble gas, with a completely filled outer electron shell.",
    "ionic bond": "A bond formed by the complete transfer of electrons from a metal atom to a non-metal atom, creating oppositely charged ions that attract each other.",
    "covalent bond": "A bond formed when two non-metal atoms share one or more pairs of electrons.",
    "metallic bond": "A bond in metals where positive metal ions are held together by a surrounding sea of delocalised (mobile) electrons.",
    "cation": "A positively charged ion formed when an atom loses one or more electrons.",
    "anion": "A negatively charged ion formed when an atom gains one or more electrons.",
    "diatomic molecule": "A molecule consisting of exactly two atoms of the same element bonded by a covalent bond; e.g. H2, N2, O2.",
    "cross-over rule": "A method for finding the formula of an ionic compound: swap the charge numbers of each ion to become the subscripts of the other, then simplify.",
    "crystal lattice": "A regular three-dimensional arrangement of ions or atoms held together by electrostatic forces.",
    "organic compound": "A compound containing carbon atoms bonded to hydrogen (C-H bonds), often also bonded to other elements.",
    "hydrocarbon": "A compound containing only carbon and hydrogen atoms.",
    "crude oil": "A complex mixture of hydrocarbons formed from ancient marine organisms over millions of years.",
    "fractional distillation": "An industrial process that separates crude oil into fractions based on their different boiling points in a tall fractionating column.",
    "alkane": "A hydrocarbon with only single carbon-carbon bonds; follows the general formula CnH(2n+2).",
    "IUPAC": "The International Union of Pure and Applied Chemistry, which develops systematic naming rules for chemical compounds.",
    "complete combustion": "Combustion in excess oxygen producing only CO2 and H2O; releases maximum energy.",
    "incomplete combustion": "Combustion in restricted oxygen producing CO and/or soot as well as H2O; releases less energy.",
    "carbon monoxide": "A colourless, odourless, highly toxic gas produced by incomplete combustion; binds to haemoglobin preventing oxygen transport.",
    "polymer": "A large molecule made of many repeating smaller units (monomers) joined by covalent bonds.",
    "monomer": "The small, reactive molecule that joins with many others to form a polymer chain.",
    "thermoplastic": "A plastic that softens when heated and can be re-moulded; chains held by weak intermolecular forces.",
    "thermoset": "A plastic with permanent covalent cross-links between chains; cannot be re-melted once cured.",
    "microplastic": "A plastic particle smaller than 5 mm in diameter, either manufactured at that size or formed by breakdown of larger plastics.",
    "bioaccumulation": "The buildup of a substance in an organism's tissues at a concentration higher than in its surrounding environment.",
    "biomagnification": "The increase in concentration of a pollutant at each successive level of a food chain.",
    "life cycle assessment": "A systematic evaluation of the total environmental impacts of a product or material from raw material extraction through to end-of-life disposal or recycling.",
  },
  sections: [
    {
      id: "3.1",
      label: "Resources",
      accent: "amber",
      blurb: "Australia's finite minerals: what they are, how they are used, and what they cost the environment.",
      points: ["3.1.1","3.1.2","3.1.3","3.1.4"],
      render: (p) => <Section31 {...p}/>,
    },
    {
      id: "3.2",
      label: "Bonding",
      accent: "violet",
      blurb: "Valency, noble gas configurations, and three types of chemical bond that explain material properties.",
      points: ["3.2.1","3.2.2","3.2.3","3.2.4","3.2.5","3.2.6","3.2.7"],
      render: (p) => <Section32 {...p}/>,
    },
    {
      id: "3.3",
      label: "Organic Chemistry",
      accent: "orange",
      blurb: "Carbon compounds: crude oil fractions, IUPAC naming, alkane structures, and combustion.",
      points: ["3.3.1","3.3.2","3.3.3","3.3.4","3.3.5","3.3.6"],
      render: (p) => <Section33 {...p}/>,
    },
    {
      id: "3.4",
      label: "Polymers",
      accent: "teal",
      blurb: "Monomers to polymers: properties, plastic pollution surveys, biodegradability, and microplastics.",
      points: ["3.4.1","3.4.2","3.4.3","3.4.4","3.4.5"],
      render: (p) => <Section34 {...p}/>,
    },
    {
      id: "3.5",
      label: "Materials in Context",
      accent: "green",
      blurb: "Life cycle assessment and evaluating alternatives to petroleum-derived materials.",
      points: ["3.5.1"],
      render: (p) => <Section35 {...p}/>,
    },
  ],
});
