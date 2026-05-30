/* global React, DotPoint, Callout, Figure, Term, MCQ, WrittenQ, QGroup, Interactive,
   Slider, SegToggle, Stat, Reveal, FlipCard, MatchBuckets, Ring, mountTopicApp */
const { useState, useEffect, useRef, useMemo } = React;

/* ============================================================
   SECTION 1 INTERACTIVES: Conservation of Energy
   ============================================================ */

function PendulumSim() {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [angle, setAngle] = useState(45);
  const [mass, setMass] = useState(1.0);
  const frameRef = useRef(null);
  const stateRef = useRef({ theta: 0, omega: 0, t: 0 });
  const g = 9.8;
  const L = 1.2;

  useEffect(() => {
    draw(angle * Math.PI / 180, 0);
  }, [angle, mass]);

  function draw(theta, omega) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = 60;
    const scale = 140;
    const px = cx + Math.sin(theta) * scale;
    const py = cy + Math.cos(theta) * scale;
    const h = L * (1 - Math.cos(theta));
    const v = Math.sqrt(2 * g * h) * Math.sign(-omega || 0);
    const ke = 0.5 * mass * v * v;
    const pe = mass * g * h;
    const total = ke + pe;

    ctx.clearRect(0, 0, W, H);
    // pivot
    ctx.fillStyle = "var(--ink, #1a1a2e)";
    ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.fill();
    // rod
    ctx.strokeStyle = "var(--muted, #6b7280)";
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
    // bob with colour by speed
    const speed = Math.abs(v);
    const maxSpeed = Math.sqrt(2 * g * L);
    const hue = Math.round(220 - 180 * (speed / maxSpeed));
    ctx.fillStyle = `hsl(${hue},80%,55%)`;
    ctx.beginPath(); ctx.arc(px, py, 14, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // energy bars
    const barX = 10, barY = H - 110, barH = 90, barW = 24;
    const maxE = mass * g * L;
    const keH = maxE > 0 ? Math.round(barH * ke / maxE) : 0;
    const peH = maxE > 0 ? Math.round(barH * pe / maxE) : 0;
    const labels = [["KE", keH, "#3b82f6"], ["PE", peH, "#10b981"], ["Total", barH, "#8b5cf6"]];
    labels.forEach(([label, fillH, col], i) => {
      const bx = barX + i * 44;
      ctx.fillStyle = "#e5e7eb";
      ctx.fillRect(bx, barY, barW, barH);
      ctx.fillStyle = col;
      ctx.fillRect(bx, barY + barH - fillH, barW, fillH);
      ctx.fillStyle = "var(--ink, #1a1a2e)";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(label, bx + barW / 2, barY + barH + 14);
      ctx.fillText(label === "Total" ? total.toFixed(1) : label === "KE" ? ke.toFixed(1) : pe.toFixed(1), bx + barW / 2, barY - 4);
    });
    ctx.fillStyle = "var(--muted, #6b7280)";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("J", barX + 3 * 44 + barW + 3, barY - 4);
  }

  function start() {
    stateRef.current = { theta: angle * Math.PI / 180, omega: 0, t: 0 };
    setRunning(true);
  }

  function stop() {
    setRunning(false);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    stateRef.current = { theta: angle * Math.PI / 180, omega: 0, t: 0 };
    draw(angle * Math.PI / 180, 0);
  }

  useEffect(() => {
    if (!running) return;
    let last = null;
    function tick(ts) {
      if (!last) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.03);
      last = ts;
      const s = stateRef.current;
      const alpha = -(g / L) * Math.sin(s.theta);
      s.omega += alpha * dt;
      s.omega *= 0.9995;
      s.theta += s.omega * dt;
      stateRef.current = s;
      draw(s.theta, s.omega);
      frameRef.current = requestAnimationFrame(tick);
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [running, mass]);

  return (
    <Interactive title="Pendulum: KE and PE swap" subtitle="Watch kinetic energy (blue) and potential energy (green) trade back and forth while the total (purple) stays constant." takeaway="As the pendulum swings, kinetic and potential energy continually convert into each other, but the total energy stays constant throughout.">
      <div className="ctrl-row">
        <Slider label="Starting angle" min={5} max={80} step={1} value={angle} onChange={v => { setAngle(v); if (!running) draw(v * Math.PI / 180, 0); }} unit="deg"/>
        <Slider label="Bob mass" min={0.2} max={3.0} step={0.1} value={mass} onChange={v => { setMass(v); if (!running) draw(stateRef.current.theta, stateRef.current.omega); }} unit=" kg"/>
      </div>
      <canvas ref={canvasRef} width={380} height={260} style={{ display: "block", margin: "0 auto", borderRadius: 12, background: "var(--surface-2, #f8fafc)" }}/>
      <div className="ctrl-row" style={{ marginTop: 8 }}>
        <button className="btn btn-accent" onClick={start} disabled={running}>Start</button>
        <button className="btn btn-ghost" onClick={stop}>Reset</button>
      </div>
      <p className="muted" style={{ marginBottom: 0 }}>At the highest point all energy is PE. At the bottom all energy is KE. The coloured bars show the split at each moment.</p>
    </Interactive>
  );
}

function EfficiencyCalc() {
  const [inputE, setInputE] = useState(100);
  const [usefulE, setUsefulE] = useState(45);
  const eff = inputE > 0 ? Math.min(100, Math.round((usefulE / inputE) * 1000) / 10) : 0;
  const waste = Math.max(0, inputE - usefulE);

  const devices = [
    { name: "LED globe", input: 100, useful: 45 },
    { name: "Incandescent", input: 100, useful: 5 },
    { name: "Petrol engine", input: 100, useful: 28 },
    { name: "Electric motor", input: 100, useful: 90 },
    { name: "Solar panel", input: 100, useful: 18 },
    { name: "Kettle", input: 100, useful: 90 },
  ];

  function loadDevice(d) {
    setInputE(d.input);
    setUsefulE(d.useful);
  }

  return (
    <Interactive title="Efficiency calculator" subtitle="Set the input and useful output energy to calculate efficiency. Or pick a common device." takeaway="No real device is 100% efficient; some input energy is always wasted, usually as heat, and efficiency = (useful output / total input) x 100.">
      <div className="ctrl-row" style={{ flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
        {devices.map(d => (
          <button key={d.name} className="btn btn-ghost" style={{ fontSize: 12, padding: "4px 10px" }} onClick={() => loadDevice(d)}>{d.name}</button>
        ))}
      </div>
      <div className="ctrl-row">
        <Slider label="Input energy" min={10} max={500} step={5} value={inputE} onChange={v => { setInputE(v); if (usefulE > v) setUsefulE(v); }} unit=" J"/>
        <Slider label="Useful output" min={0} max={inputE} step={1} value={usefulE} onChange={setUsefulE} unit=" J"/>
      </div>
      <div style={{ margin: "12px 0", position: "relative", height: 36, borderRadius: 10, overflow: "hidden", background: "#fee2e2" }}>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${eff}%`, background: "linear-gradient(90deg,#3b82f6,#10b981)", transition: "width 0.3s", borderRadius: 10 }}/>
        <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontWeight: 700, fontSize: 14, color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{eff}% efficient</span>
        <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontWeight: 600, fontSize: 13, color: "#b91c1c" }}>{waste.toFixed(0)} J wasted</span>
      </div>
      <div className="stat-readout">
        <Stat value={`${eff}%`} label="Efficiency"/>
        <Stat value={`${waste} J`} label="Waste energy"/>
        <Stat value={`${usefulE} J`} label="Useful output"/>
      </div>
      <p className="muted" style={{ marginBottom: 0 }}>Formula: Efficiency (%) = (useful output / total input) x 100</p>
    </Interactive>
  );
}

/* ============================================================
   SECTION 2 INTERACTIVES: Sources of Energy
   ============================================================ */

function EnergySourceSorter() {
  return (
    <Interactive title="Sort the energy sources" subtitle="Drag or click each source into the correct category." takeaway="Energy sources are classified as renewable (naturally replenished), non-renewable (finite fossil fuels), or nuclear, which sits in its own category.">
      <MatchBuckets
        items={[
          { id: "coal", label: "Coal", bucket: "nonrenewable" },
          { id: "wind", label: "Wind", bucket: "renewable" },
          { id: "solar", label: "Solar PV", bucket: "renewable" },
          { id: "gas", label: "Natural gas", bucket: "nonrenewable" },
          { id: "hydro", label: "Hydroelectric", bucket: "renewable" },
          { id: "oil", label: "Petroleum", bucket: "nonrenewable" },
          { id: "geo", label: "Geothermal", bucket: "renewable" },
          { id: "nuclear", label: "Nuclear (fission)", bucket: "nuclear" },
          { id: "biomass", label: "Biomass", bucket: "renewable" },
          { id: "tidal", label: "Tidal", bucket: "renewable" },
        ]}
        buckets={[
          { id: "nonrenewable", label: "Non-renewable" },
          { id: "renewable", label: "Renewable" },
          { id: "nuclear", label: "Nuclear (its own category)" },
        ]}
      />
    </Interactive>
  );
}

function PowerStationFlow() {
  const [source, setSource] = useState("coal");
  const flows = {
    coal: { steps: ["Chemical PE (coal burned)", "Thermal energy (steam)", "KE (turbine spins)", "Electrical energy (generator)"], colours: ["#f59e0b","#ef4444","#3b82f6","#8b5cf6"], note: "Four transformation steps. Most energy lost as heat at each stage." },
    hydro: { steps: ["Gravitational PE (water at height)", "KE (falling water)", "KE (turbine)", "Electrical energy (generator)"], colours: ["#10b981","#3b82f6","#3b82f6","#8b5cf6"], note: "No combustion, no steam. Water falling directly spins turbines." },
    solar: { steps: ["Radiant energy (sunlight)", "DC electrical energy (PV cell)", "AC electrical energy (inverter)"], colours: ["#f59e0b","#8b5cf6","#8b5cf6"], note: "Only three steps. No turbine or steam. Most direct path to electricity." },
    wind: { steps: ["KE (moving air)", "KE (turbine blades)", "Electrical energy (generator)"], colours: ["#06b6d4","#3b82f6","#8b5cf6"], note: "Three steps. Moving air directly drives blades. No combustion or steam." },
    nuclear: { steps: ["Nuclear binding energy (fission)", "Thermal energy (steam)", "KE (turbine)", "Electrical energy (generator)"], colours: ["#a3e635","#ef4444","#3b82f6","#8b5cf6"], note: "Same turbine-generator step as coal, but heat comes from splitting uranium atoms." },
  };
  const f = flows[source];
  return (
    <Interactive title="Energy transformation chains" subtitle="Select a power source to see how energy changes form on the way to becoming electricity." takeaway="Every power source transforms energy through a chain of steps to produce electricity, and solar PV has the fewest steps because it converts light directly to electricity with no turbine.">
      <SegToggle
        options={[
          { value: "coal", label: "Coal" },
          { value: "hydro", label: "Hydro" },
          { value: "solar", label: "Solar" },
          { value: "wind", label: "Wind" },
          { value: "nuclear", label: "Nuclear" },
        ]}
        value={source}
        onChange={setSource}
      />
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4, margin: "16px 0", justifyContent: "center" }}>
        {f.steps.map((step, i) => (
          <React.Fragment key={i}>
            <div style={{ background: f.colours[i] + "22", border: `2px solid ${f.colours[i]}`, borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 600, textAlign: "center", color: "var(--ink)", maxWidth: 160 }}>{step}</div>
            {i < f.steps.length - 1 && <span style={{ fontSize: 22, color: f.colours[i], fontWeight: 900 }}>›</span>}
          </React.Fragment>
        ))}
      </div>
      <p className="muted" style={{ marginBottom: 0 }}>{f.note}</p>
    </Interactive>
  );
}

/* ============================================================
   SECTION 3 INTERACTIVES: Electrical Energy
   ============================================================ */

function CircuitBuilder() {
  const [mode, setMode] = useState("series");
  const [battery, setBattery] = useState(6);
  const [r1, setR1] = useState(3);
  const [r2, setR2] = useState(6);
  const [switchOpen, setSwitchOpen] = useState(false);

  const isOn = !switchOpen;
  const rTotal = mode === "series" ? r1 + r2 : (r1 * r2) / (r1 + r2);
  const current = isOn && rTotal > 0 ? battery / rTotal : 0;
  const i1 = mode === "series" ? current : (isOn ? battery / r1 : 0);
  const i2 = mode === "series" ? current : (isOn ? battery / r2 : 0);
  const v1 = mode === "series" ? i1 * r1 : (isOn ? battery : 0);
  const v2 = mode === "series" ? i2 * r2 : (isOn ? battery : 0);
  const brightness1 = Math.min(1, i1 * i1 * r1 / 9);
  const brightness2 = Math.min(1, i2 * i2 * r2 / 9);

  function BulbSVG({ bright, label, voltage, current: ic }) {
    const glow = bright > 0.05;
    const col = glow ? `hsl(45,100%,${Math.round(40 + bright * 55)}%)` : "#9ca3af";
    const glowR = glow ? Math.round(bright * 20) : 0;
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <svg width="56" height="72" viewBox="0 0 56 72">
          {glow && <circle cx="28" cy="28" r={22 + glowR} fill={col} opacity="0.18"/>}
          <circle cx="28" cy="28" r="20" fill={col} stroke="var(--ink)" strokeWidth="2.5" opacity="0.9"/>
          <line x1="16" y1="16" x2="40" y2="40" stroke="var(--ink)" strokeWidth="2.5"/>
          <line x1="40" y1="16" x2="16" y2="40" stroke="var(--ink)" strokeWidth="2.5"/>
          <rect x="21" y="48" width="14" height="8" rx="2" fill="var(--ink)" opacity="0.5"/>
          <rect x="23" y="56" width="10" height="14" rx="2" fill="var(--ink)" opacity="0.3"/>
        </svg>
        <span style={{ fontSize: 12, fontWeight: 700 }}>{label}</span>
        <span style={{ fontSize: 11, color: "var(--muted)" }}>{voltage.toFixed(1)} V</span>
        <span style={{ fontSize: 11, color: "var(--muted)" }}>{ic.toFixed(2)} A</span>
      </div>
    );
  }

  return (
    <Interactive title="Circuit builder" subtitle="Switch between series and parallel, adjust resistances, and watch the bulbs respond. Toggle the switch to break the circuit." takeaway="In a series circuit the same current flows through all components, while in a parallel circuit each branch gets the full supply voltage and operates independently.">
      <div className="ctrl-row" style={{ flexWrap: "wrap" }}>
        <SegToggle options={[{ value: "series", label: "Series" }, { value: "parallel", label: "Parallel" }]} value={mode} onChange={setMode}/>
        <button className="btn btn-ghost" style={{ fontSize: 13 }} onClick={() => setSwitchOpen(!switchOpen)}>
          Switch: {switchOpen ? "OPEN (off)" : "CLOSED (on)"}
        </button>
      </div>
      <div className="ctrl-row">
        <Slider label="Battery" min={1} max={12} step={0.5} value={battery} onChange={setBattery} unit=" V"/>
        <Slider label="Bulb 1 resistance" min={1} max={20} step={1} value={r1} onChange={setR1} unit=" Ω"/>
        <Slider label="Bulb 2 resistance" min={1} max={20} step={1} value={r2} onChange={setR2} unit=" Ω"/>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 32, margin: "12px 0" }}>
        <BulbSVG bright={brightness1} label="Bulb 1" voltage={v1} current={i1}/>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>Battery</div>
          <div style={{ fontWeight: 800, fontSize: 22, color: "var(--accent-deep)" }}>{battery} V</div>
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>Total current</div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>{current.toFixed(2)} A</div>
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>Total R</div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{rTotal.toFixed(1)} Ω</div>
        </div>
        <BulbSVG bright={brightness2} label="Bulb 2" voltage={v2} current={i2}/>
      </div>
      <p className="muted" style={{ marginBottom: 0 }}>
        {mode === "series"
          ? "Series: same current through both bulbs. Voltage is shared. One open switch stops both."
          : "Parallel: same voltage across both bulbs. Current splits. Each bulb operates independently."}
      </p>
    </Interactive>
  );
}

function OhmsLawExplorer() {
  const [knob, setKnob] = useState("R");
  const [vVal, setVVal] = useState(6);
  const [iVal, setIVal] = useState(2);
  const [rVal, setRVal] = useState(3);

  function handleV(v) {
    setVVal(v);
    if (knob === "I") setIVal(parseFloat((v / rVal).toFixed(3)));
    if (knob === "R") setRVal(parseFloat((v / iVal).toFixed(3)));
  }
  function handleI(v) {
    setIVal(v);
    if (knob === "V") setVVal(parseFloat((v * rVal).toFixed(3)));
    if (knob === "R") setRVal(parseFloat((vVal / v).toFixed(3)));
  }
  function handleR(v) {
    setRVal(v);
    if (knob === "V") setVVal(parseFloat((iVal * v).toFixed(3)));
    if (knob === "I") setIVal(parseFloat((vVal / v).toFixed(3)));
  }

  const power = (vVal * iVal).toFixed(1);

  return (
    <Interactive title="Ohm's law explorer" subtitle="Lock one quantity and adjust the other two. V = I x R is always satisfied." takeaway="Ohm's law (V = I x R) means that for a fixed resistance, doubling the voltage doubles the current, and increasing resistance reduces the current for a given voltage.">
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 600, marginRight: 8 }}>Calculate:</span>
        <SegToggle options={[{ value: "V", label: "Find V" }, { value: "I", label: "Find I" }, { value: "R", label: "Find R" }]} value={knob} onChange={setKnob}/>
      </div>
      <div className="ctrl-row">
        <Slider label="Voltage (V)" min={0.5} max={24} step={0.5} value={vVal} onChange={handleV} unit=" V" fmt={v => v.toFixed(1)}/>
        <Slider label="Current (I)" min={0.1} max={10} step={0.1} value={iVal} onChange={handleI} unit=" A" fmt={v => v.toFixed(2)}/>
        <Slider label="Resistance (R)" min={0.5} max={50} step={0.5} value={rVal} onChange={handleR} unit=" Ω" fmt={v => v.toFixed(1)}/>
      </div>
      <div className="stat-readout">
        <Stat value={vVal.toFixed(1)} label="V (volts)"/>
        <Stat value={iVal.toFixed(2)} label="I (amps)"/>
        <Stat value={rVal.toFixed(1)} label="R (ohms)"/>
        <Stat value={power} label="P = VI (watts)"/>
      </div>
      <div style={{ textAlign: "center", padding: "8px 0", fontSize: 14, color: "var(--muted)" }}>
        V = I x R: {vVal.toFixed(1)} = {iVal.toFixed(2)} x {rVal.toFixed(1)} = {(iVal * rVal).toFixed(1)} V
      </div>
    </Interactive>
  );
}

function PowerEnergyCalc() {
  const [voltage, setVoltage] = useState(230);
  const [current, setCurrent] = useState(0.87);
  const [timeMin, setTimeMin] = useState(60);
  const power = (voltage * current).toFixed(1);
  const energyJ = (parseFloat(power) * timeMin * 60).toFixed(0);
  const energyKwh = (parseFloat(power) * timeMin / 60000).toFixed(4);
  const costPerKwh = 0.30;
  const cost = (parseFloat(energyKwh) * costPerKwh).toFixed(4);

  return (
    <Interactive title="Power and energy calculator" subtitle="Adjust voltage, current and time to see power, energy and running cost." takeaway="Electrical power (P = V x I) tells you how fast energy is used, and total energy (E = P x t) determines the running cost of an appliance.">
      <div className="ctrl-row">
        <Slider label="Voltage" min={1} max={240} step={1} value={voltage} onChange={setVoltage} unit=" V"/>
        <Slider label="Current" min={0.01} max={15} step={0.01} value={current} onChange={setCurrent} unit=" A" fmt={v => v.toFixed(2)}/>
        <Slider label="Run time" min={1} max={480} step={1} value={timeMin} onChange={setTimeMin} unit=" min"/>
      </div>
      <div className="stat-readout">
        <Stat value={power} label="Power (W)"/>
        <Stat value={Number(energyJ).toLocaleString()} label="Energy (J)"/>
        <Stat value={energyKwh} label="Energy (kWh)"/>
        <Stat value={`$${cost}`} label="Cost at $0.30/kWh"/>
      </div>
      <p className="muted" style={{ marginBottom: 0 }}>P = V x I, then E = P x t. At 230 V / 0.87 A you have a typical 200 W appliance.</p>
    </Interactive>
  );
}

function StarRatingCompare() {
  const [stars, setStars] = useState(3);
  // Annual kWh for a medium fridge at each star level (representative)
  const kwhData = { 1: 850, 2: 680, 3: 520, 4: 390, 5: 270, 6: 180 };
  const rate = 0.30;
  const kwh = kwhData[stars];
  const annual = (kwh * rate).toFixed(2);
  const vs6star = kwhData[6];
  const saving = ((kwh - vs6star) * rate).toFixed(2);
  const maxKwh = 850;

  return (
    <Interactive title="Energy star rating: refrigerator" subtitle="Move the star slider to see how annual energy and cost change. Compare against the best (6-star) model." takeaway="Higher star-rated appliances use significantly less energy per year, so paying more upfront for a higher-rated model can save money over the appliance's lifetime.">
      <div className="ctrl-row">
        <Slider label="Star rating" min={1} max={6} step={1} value={stars} onChange={setStars} unit=" stars"/>
      </div>
      <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "8px 0" }}>
        {[1,2,3,4,5,6].map(n => (
          <span key={n} style={{ fontSize: 22, color: n <= stars ? "#f59e0b" : "#d1d5db", transition: "color 0.2s" }}>&#9733;</span>
        ))}
      </div>
      <div style={{ margin: "8px 0", background: "#f1f5f9", borderRadius: 10, overflow: "hidden", height: 28, position: "relative" }}>
        <div style={{ height: "100%", width: `${(kwh / maxKwh) * 100}%`, background: "linear-gradient(90deg,#10b981,#f59e0b)", transition: "width 0.4s", borderRadius: 10 }}/>
        <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", fontSize: 13, fontWeight: 700 }}>{kwh} kWh/year</span>
      </div>
      <div className="stat-readout">
        <Stat value={`${kwh}`} label="kWh per year"/>
        <Stat value={`$${annual}`} label="Annual cost"/>
        <Stat value={stars < 6 ? `$${saving}` : "$0"} label="Extra cost vs 6-star"/>
      </div>
      <p className="muted" style={{ marginBottom: 0 }}>A {stars}-star fridge costs ${annual} to run per year. Upgrading to 6 stars would save ${saving} annually.</p>
    </Interactive>
  );
}

/* ============================================================
   SECTION 4 INTERACTIVES: Global Future Energy Needs
   ============================================================ */

function EnergyTrendsChart() {
  const data = [
    { year: "1970", total: 230, perPerson: 62 },
    { year: "1980", total: 285, perPerson: 65 },
    { year: "1990", total: 350, perPerson: 66 },
    { year: "2000", total: 420, perPerson: 69 },
    { year: "2010", total: 520, perPerson: 75 },
    { year: "2020", total: 570, perPerson: 73 },
  ];
  const [view, setView] = useState("total");
  const vals = data.map(d => view === "total" ? d.total : d.perPerson);
  const maxV = Math.max(...vals);
  const W = 340, H = 160, padL = 40, padB = 28, padT = 12, padR = 12;
  const bw = (W - padL - padR) / data.length;

  return (
    <Interactive title="Global energy consumption trends" subtitle="Toggle between total energy and per-person energy to see how demand has changed." takeaway="Global total energy roughly doubled from 1970 to 2020, but per-person use grew much more slowly, showing that efficiency improvements have partially offset population-driven demand growth.">
      <SegToggle
        options={[{ value: "total", label: "Total (EJ)" }, { value: "person", label: "Per person (GJ)" }]}
        value={view}
        onChange={setView}
      />
      <svg viewBox={`0 0 ${W} ${H + padB + padT}`} width="100%" style={{ maxWidth: W, display: "block", margin: "8px auto" }}>
        {vals.map((v, i) => {
          const bh = Math.round(H * v / maxV);
          const bx = padL + i * bw + bw * 0.15;
          const by = padT + H - bh;
          const hue = 200 + i * 22;
          return (
            <g key={i}>
              <rect x={bx} y={by} width={bw * 0.7} height={bh} rx="4" fill={`hsl(${hue},70%,55%)`}/>
              <text x={bx + bw * 0.35} y={by - 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink)">{v}</text>
              <text x={bx + bw * 0.35} y={padT + H + 16} textAnchor="middle" fontSize="11" fill="var(--muted)">{data[i].year}</text>
            </g>
          );
        })}
        <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--ink)" strokeWidth="1.5"/>
        <line x1={padL} y1={padT + H} x2={W - padR} y2={padT + H} stroke="var(--ink)" strokeWidth="1.5"/>
        <text x={padL - 4} y={padT + H / 2} textAnchor="middle" fontSize="10" fill="var(--muted)" transform={`rotate(-90,${padL - 14},${padT + H / 2})`}>{view === "total" ? "EJ" : "GJ"}</text>
      </svg>
      <p className="muted" style={{ marginBottom: 0 }}>Global primary energy roughly doubled from 1970 to 2020. Per-person use grew more slowly, showing efficiency gains offset some demand growth.</p>
    </Interactive>
  );
}

function EnergyCriteriaEval() {
  const sources = ["Solar PV", "Offshore wind", "Pumped hydro", "Nuclear"];
  const criteria = ["CO2 emissions", "Cost (LCOE)", "Reliability", "Build time", "Australia suitability"];
  const scores = {
    "Solar PV":     [5, 5, 2, 5, 5],
    "Offshore wind":[5, 4, 2, 4, 4],
    "Pumped hydro": [5, 4, 5, 2, 3],
    "Nuclear":      [5, 1, 5, 1, 2],
  };
  const colours = { "Solar PV": "#f59e0b", "Offshore wind": "#06b6d4", "Pumped hydro": "#10b981", "Nuclear": "#8b5cf6" };
  const [sel, setSel] = useState("Solar PV");

  return (
    <Interactive title="Evaluate alternative energy sources" subtitle="Select a source to see how it scores on five key criteria for Australia (1 = poor, 5 = excellent)." takeaway="No single energy source scores perfectly on all criteria, so a mix of complementary sources is a more robust strategy than relying on just one.">
      <SegToggle
        options={sources.map(s => ({ value: s, label: s }))}
        value={sel}
        onChange={setSel}
      />
      <div style={{ margin: "12px 0" }}>
        {criteria.map((c, i) => {
          const score = scores[sel][i];
          return (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ width: 170, fontSize: 13, fontWeight: 600 }}>{c}</span>
              <div style={{ flex: 1, height: 18, background: "#e5e7eb", borderRadius: 6, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${score * 20}%`, background: colours[sel], borderRadius: 6, transition: "width 0.4s" }}/>
              </div>
              <span style={{ width: 20, fontSize: 13, fontWeight: 700, color: colours[sel] }}>{score}/5</span>
            </div>
          );
        })}
      </div>
      <p className="muted" style={{ marginBottom: 0 }}>No single source scores 5 on all criteria. A portfolio approach combining multiple sources is the most robust strategy.</p>
    </Interactive>
  );
}

/* ============================================================
   SECTION 1: Conservation of Energy and Efficiency
   ============================================================ */
function Section1({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">1.1 Law of conservation of energy</div>
        <h1>Energy is never created or destroyed</h1>
        <p className="lead">No matter how dramatic the explosion or how quiet the glow, the total energy in a closed system stays exactly the same.</p>
      </div>

      <Figure src="img/efficiency.png" caption="Input energy splits into useful output and wasted heat." />
      <DotPoint id="1.1.1" title="Conservation of energy and calculations" progress={progress} setProgress={setProgress}>
        <p>The <Term def="Energy cannot be created or destroyed; it can only change form or transfer between objects. Total energy in a closed system is constant.">law of conservation of energy</Term> is one of physics's most powerful ideas. Energy does not pop into existence and it does not vanish. It simply changes form or moves from one object to another.</p>
        <p>A <Term def="A system in which no energy or matter is exchanged with the surroundings.">closed system</Term> is one where nothing leaks in or out. Drop a ball from rest and all the <Term def="Energy stored due to an object's position in a gravitational field. GPE = mgh.">gravitational potential energy (GPE)</Term> converts to <Term def="Energy of a moving object. KE = 0.5 x mass x speed squared.">kinetic energy (KE)</Term> by the time it hits the ground. Even with air resistance, the total energy is still conserved; some just ends up as thermal energy in the air instead of KE in the ball.</p>
        <p>You can calculate the speed at the bottom of a fall using GPE = KE: mgh = 0.5mv^2, so v = sqrt(2gh). If some energy is lost to friction, subtract that from the GPE to find the remaining KE. The total always balances.</p>
        <Callout kind="key" title="The core rule">Total energy in = Total energy out. Energy changes form, never amount. In a 100 J system, every joule must be accounted for at every moment.</Callout>
        <PendulumSim/>
        <Callout kind="fact" title="Real-world calculation">A 2 kg ball dropped from 5 m has GPE = 2 x 10 x 5 = 100 J. If 20 J is lost to air resistance, KE at the bottom = 80 J. Speed = sqrt(2 x 80 / 2) = sqrt(80) = about 8.9 m/s. Total energy: 80 J KE + 20 J thermal = 100 J. Always.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={1} question="A 3 kg ball is held 4 m above the ground. What is its gravitational potential energy? (Use g = 10 m/s squared)" options={["12 J","120 J","30 J","40 J"]} correct={1} explain="GPE = mgh = 3 x 10 x 4 = 120 J."/>
          <WrittenQ num={2} question="A student says a bouncing ball eventually stops, so energy is destroyed. Evaluate this claim." model="The claim is incorrect. Each bounce converts some KE into thermal energy and sound, which spread into the surroundings. The energy is not destroyed; it is redistributed into forms that are no longer useful for bouncing. Conservation of energy is never violated."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.1.2" title="Energy efficiency in transfers" progress={progress} setProgress={setProgress}>
        <p>In any real energy transfer, some input energy is converted into forms that are not useful for the intended purpose, almost always <Term def="Energy stored in the random motion of particles; commonly called heat.">thermal energy</Term> that disperses into the surroundings. <Term def="The proportion of input energy that becomes useful output energy, expressed as a percentage.">Efficiency</Term> measures how much of the input becomes useful output: Efficiency (%) = (useful energy output / total energy input) x 100.</p>
        <p>An <Term def="A traditional light globe that produces light by heating a thin wire filament to glow.">incandescent globe</Term> converts only about 5% of its electrical input to light; the other 95% becomes waste heat. A modern <Term def="Light-emitting diode: a semiconductor device that produces light very efficiently with minimal heat.">LED</Term> globe converts about 45% to light, making it roughly 9 times more efficient. A petrol engine operates at about 25 to 30% efficiency; an electric motor reaches 85 to 95%.</p>
        <Callout kind="tip" title="Worked example">A kettle uses 150,000 J of electrical energy. The water gains 135,000 J of thermal energy. Efficiency = (135,000 / 150,000) x 100 = 90%. The remaining 10,000 J escapes through the kettle casing.</Callout>
        <EfficiencyCalc/>
        <QGroup title="Check yourself">
          <MCQ num={3} question="A lamp uses 100 J of electrical energy and produces 8 J of light. What is its efficiency?" options={["8%","80%","92%","0.8%"]} correct={0} explain="Efficiency = (8 / 100) x 100 = 8%."/>
          <WrittenQ num={4} question="Explain why 100% efficiency is impossible in any real energy transfer." model="In any real transfer, some energy is always converted to thermal energy through friction, air resistance, or electrical resistance. This thermal energy disperses and cannot be fully recovered, so efficiency is always less than 100%."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.1.3" title="Improving energy efficiency" progress={progress} setProgress={setProgress}>
        <p>Because waste energy is almost always thermal energy produced by <Term def="A force that opposes relative motion between surfaces in contact, converting KE to thermal energy.">friction</Term>, electrical resistance, or heat loss, most strategies for improving efficiency target these causes directly. Reducing friction using <Term def="A substance (such as oil or grease) placed between moving surfaces to reduce friction.">lubricants</Term>, improving <Term def="Material that slows the transfer of thermal energy, keeping heat where it is wanted.">insulation</Term>, using materials with lower electrical resistance, and redesigning systems to minimise the number of transformation steps all help.</p>
        <p>Technology improvements have produced dramatic gains. Replacing incandescent globes with LEDs, designing aerodynamic car bodies to cut air resistance, double-glazed windows that trap still air, and <Term def="A system that captures kinetic energy from braking and stores it as electrical energy, instead of wasting it as heat.">regenerative braking</Term> in electric vehicles are all practical examples of efficiency improvements that reduce energy waste without changing the useful output.</p>
        <Callout kind="key" title="Four key strategies">1. Reduce friction (lubricants, bearings). 2. Improve insulation (foam, fibreglass, double glazing). 3. Use lower-resistance materials (copper wires, efficient motors). 4. Reduce the number of transformation steps (fewer steps = fewer losses).</Callout>
        <Callout kind="warn" title="Why this matters">A NSW household that insulates its ceiling can cut heating and cooling energy by 30 to 50%. A school that replaces halogen lamps with LEDs might cut lighting energy by 85%. These savings mean less fossil fuel burned and lower greenhouse gas emissions.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={5} question="Which strategy reduces friction losses in a car engine?" options={["Adding insulation","Using lubricating oil","Installing double glazing","Regenerative braking"]} correct={1} explain="Lubricating oil reduces friction between moving engine parts, converting less KE to waste thermal energy."/>
          <WrittenQ num={6} question="A school replaces 200 x 60 W halogen lamps with 200 x 9 W LEDs, used 8 hours per day for 200 days. Calculate the annual energy saving in kWh." model="Halogens: 200 x 0.06 kW x 1600 h = 19,200 kWh. LEDs: 200 x 0.009 x 1600 = 2,880 kWh. Saving = 19,200 - 2,880 = 16,320 kWh per year."/>
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 2: Sources of Energy
   ============================================================ */
function Section2({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">1.2 Sources of energy</div>
        <h1>Where does our energy come from?</h1>
        <p className="lead">From ancient sunlight locked in coal to today's silicon solar panels, energy sources differ enormously in where they come from and what they cost the planet.</p>
      </div>

      <Figure src="img/sources.png" caption="Renewable sources (sun, wind, water) compared with non-renewable fuels." />
      <DotPoint id="1.2.1" title="Types of energy sources" progress={progress} setProgress={setProgress}>
        <p>An <Term def="Any store of energy that humans can extract and use to do useful work, generate heat, or produce electricity.">energy source</Term> is classified as <Term def="An energy source formed over millions of years that is consumed faster than it is replenished; once used, it is effectively gone.">non-renewable</Term> or <Term def="An energy source replenished naturally on human timescales; theoretically inexhaustible as long as the natural process driving it continues.">renewable</Term>. The three main <Term def="Coal, petroleum, and natural gas: formed from ancient organisms buried and compressed over hundreds of millions of years.">fossil fuels</Term> are coal, petroleum, and natural gas, all storing <Term def="Energy stored in chemical bonds, released by combustion or other chemical reactions.">chemical potential energy</Term> released by combustion. Renewable sources include solar, wind, hydroelectric, geothermal, tidal, wave, and biomass energy.</p>
        <p>Nuclear energy sits in its own category: it uses finite uranium ore, but a tiny mass of fuel releases an enormous amount of energy and produces no direct combustion emissions. Understanding which category each source belongs to helps you evaluate its long-term sustainability.</p>
        <Callout kind="fact" title="Fossil fuels and the Sun">All fossil fuels ultimately trace their energy back to the Sun. Ancient plants and marine organisms captured solar energy through photosynthesis and stored it as chemical energy. Millions of years later, that ancient sunlight is what you release when you burn coal or petrol.</Callout>
        <EnergySourceSorter/>
        <QGroup title="Check yourself">
          <MCQ num={7} question="Which of the following is a renewable energy source?" options={["Natural gas","Nuclear (uranium)","Geothermal","Petroleum"]} correct={2} explain="Geothermal energy is continuously replenished by heat from Earth's interior. The others are either fossil fuels or use finite ore."/>
          <WrittenQ num={8} question="Explain why biomass is only considered renewable if it is managed sustainably." model="Biomass is renewable if new plants are grown to replace those harvested at the same rate they are consumed. If forests are cleared faster than they regrow, more CO2 is released than is absorbed, so it is not truly renewable in that situation."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.2.2" title="Producing electrical energy from different sources" progress={progress} setProgress={setProgress}>
        <p>Almost all large-scale electricity generation relies on <Term def="The process by which a changing magnetic field through a conductor induces an electric current in that conductor.">electromagnetic induction</Term>: a coil of wire rotating in a magnetic field produces an alternating current (AC). A <Term def="A set of large blades connected to a generator shaft, spun by steam, water, or wind to generate electricity.">turbine</Term> drives the generator shaft. Whatever the energy source, the final step to electricity is usually the same rotating coil in a magnetic field.</p>
        <p>Solar <Term def="Photovoltaic: a technology that directly converts light (photons) into electrical energy using semiconductor materials such as silicon.">PV</Term> panels are the exception. They convert light directly to DC electricity using semiconductor materials, with no turbine or moving parts. DC is then converted to AC by an inverter for grid use. Solar PV has far fewer transformation steps than thermal power stations, which is part of why it can be so efficient and low-cost to operate.</p>
        <Callout kind="key" title="Transformation chains matter">A coal station: Chemical PE to Thermal to KE to Electrical (4 steps, large losses). Hydro: GPE to KE to Electrical (3 steps, small losses). Solar PV: Radiant to Electrical DC to Electrical AC (2 steps, minimal losses).</Callout>
        <PowerStationFlow/>
        <QGroup title="Check yourself">
          <MCQ num={9} question="How is solar PV electricity generation fundamentally different from a coal, wind, or hydroelectric power station?" options={["It produces DC instead of AC at the generator","It has no turbine; photons directly release electrons in a semiconductor","It burns hydrogen instead of carbon","It uses the magnetic field of the Earth"]} correct={1} explain="Solar PV generates electricity directly from light striking semiconductor material, with no turbine or moving parts. All other listed methods use a spinning turbine connected to a generator."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.2.3" title="Advantages and disadvantages of energy sources" progress={progress} setProgress={setProgress}>
        <p>Choosing an energy source for electricity generation means weighing efficiency, environmental impact, cost, and reliability. The <Term def="Levelised cost of electricity: the average cost per unit of electricity generated over the lifetime of a plant, including all construction, fuel, and operating costs.">LCOE</Term> allows fair comparison of sources with different cost structures. Fossil fuels are reliable and energy-dense but release <Term def="Gases such as CO2 and methane that trap heat in the atmosphere, contributing to global warming.">greenhouse gases</Term> when burned and their supply is finite. Solar and wind are now among the cheapest sources for new electricity in Australia, but they are <Term def="Describes an energy source that only produces energy when natural conditions allow (sun shining or wind blowing), not on demand.">intermittent</Term>.</p>
        <p>Coal emits about 820 gCO2/kWh over its lifecycle; wind and nuclear emit about 11 to 12 gCO2/kWh. Economic factors include capital cost, fuel cost, construction time, and the cost of storage or grid upgrades needed to integrate variable renewables. Nuclear offers reliable baseload power but has very high capital costs, long build times (10 to 20 years), and challenges around radioactive waste management.</p>
        <Callout kind="tip" title="Australia's situation">Australia has some of the best solar and wind resources in the world. Over the past decade, the LCOE of solar PV and wind has fallen dramatically, making them cheaper than new coal or gas for electricity generation. Pumped hydro (like Snowy 2.0) provides storage to smooth the variability of renewables.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={10} question="What is 'intermittency' in relation to renewable energy?" options={["Renewables produce electricity continuously","Renewables only produce when natural conditions allow (sun or wind)","Renewables are always more expensive than fossil fuels","Renewables cannot be connected to the main electricity grid"]} correct={1} explain="Intermittency means output varies with natural conditions. Solar only works when sunlight falls on the panels; wind only when wind is blowing. This is a key limitation that requires storage or backup systems."/>
          <WrittenQ num={11} question="A government is choosing between a new coal power station and a solar farm with battery storage. List three factors beyond capital cost that should influence this decision." model="1. Carbon emissions: coal releases about 820 gCO2/kWh; solar with storage has near-zero operational emissions. 2. Fuel cost: coal requires continuous fuel purchases; solar has no ongoing fuel cost. 3. Reliability: coal is dispatchable; solar is intermittent, though batteries can address this. Other valid factors include construction time, social acceptance, and long-term energy security."/>
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 3: Electrical Energy
   ============================================================ */
function Section3({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">1.3 Electrical energy</div>
        <h1>Circuits, current, and Ohm's law</h1>
        <p className="lead">Electricity flows in loops. Understanding voltage, current, and resistance lets you predict and control how any circuit behaves.</p>
      </div>

      <Figure src="img/circuit.png" caption="A simple circuit — battery, switch and globe connected by wires." />
      <DotPoint id="1.3.1" title="Elements of a complete circuit" progress={progress} setProgress={setProgress}>
        <p>An <Term def="A flow of charged particles (electrons) through a conductor.">electric current</Term> needs a complete, unbroken conducting path to flow. Break it anywhere and current stops instantly, everywhere in the circuit. A complete circuit has four essentials: an energy source (battery or power supply), conducting wires, at least one <Term def="A component that converts electrical energy into another form, such as a lamp (light) or motor (kinetic energy).">load</Term>, and usually a switch.</p>
        <p>A <Term def="A single electrochemical unit that converts chemical potential energy into electrical energy.">cell</Term> is a single unit; a battery is two or more cells joined together. Current flows from the positive terminal, through the external circuit, back to the negative terminal. Inside the battery, chemical reactions push charge from negative to positive, maintaining the <Term def="Potential difference: the energy transferred per unit of charge between two points in a circuit, measured in volts (V).">potential difference</Term> that drives the current.</p>
        <Callout kind="key" title="The four essentials">Energy source, conducting wires, at least one load, and a closed path. Remove any one and current stops.</Callout>
        <Figure caption="Standard circuit symbols and their functions.">
          <svg viewBox="0 0 520 100" width="100%" style={{ maxWidth: 520 }}>
            {[
              ["Battery", 26, "long/short lines"],
              ["Switch", 104, "gap in line"],
              ["Lamp", 182, "circle + X"],
              ["Resistor", 260, "rectangle"],
              ["Ammeter", 338, "circle A"],
              ["Voltmeter", 416, "circle V"],
            ].map(([name, x]) => (
              <g key={name} transform={`translate(${x},4)`}>
                <rect width="72" height="54" rx="8" fill="var(--accent-soft)" stroke="var(--accent-deep)" strokeWidth="1.5"/>
                <text x="36" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink)">{name}</text>
              </g>
            ))}
          </svg>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={12} question="What happens when a switch in a series circuit is opened?" options={["Only components after the switch stop","Current slows down","Current stops everywhere in the circuit instantly","The battery drains faster"]} correct={2} explain="Opening a switch breaks the conducting path. There is no complete loop for electrons to follow, so current stops everywhere instantly."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.3.2" title="Series and parallel circuits" progress={progress} setProgress={setProgress}>
        <p>In a <Term def="A circuit where all components are connected one after another in a single loop. The same current flows through every component.">series circuit</Term>, there is only one path for current to follow. If any component fails, the entire circuit breaks. Old-style Christmas lights were wired in series. In a <Term def="A circuit where components are on separate branches, each between the same two points. Each branch gets the full supply voltage.">parallel circuit</Term>, current splits between multiple branches. Each branch operates independently; if one fails, the rest keep working. Household wiring is parallel so each appliance receives the full mains voltage and can be switched off independently.</p>
        <p>Key comparison: in series, total resistance adds up (R_total = R1 + R2). In parallel, adding more branches lowers total resistance and increases total current drawn from the battery. This is why plugging more appliances into a household circuit can trip a circuit breaker.</p>
        <Callout kind="tip" title="Household vs series">Your home is wired in parallel so every appliance gets 230 V and works independently. Series wiring would share voltage and one blown fuse would cut power to everything.</Callout>
        <CircuitBuilder/>
        <QGroup title="Check yourself">
          <MCQ num={13} question="In a parallel circuit with a 12 V supply, what voltage does each branch receive?" options={["Less than 12 V","12 V divided by the number of branches","12 V","Only the first branch gets 12 V"]} correct={2} explain="In a parallel circuit, every branch is connected directly across the supply terminals, so each branch receives the full supply voltage of 12 V."/>
          <WrittenQ num={14} question="A circuit has three identical 4-ohm lamps in series with a 12 V battery. Calculate the total resistance, the current, and the voltage across each lamp." model="R_total = 4 + 4 + 4 = 12 ohms. Current I = V / R = 12 / 12 = 1 A. Voltage across each lamp = I x R = 1 x 4 = 4 V. Check: 4 + 4 + 4 = 12 V."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.3.3" title="Measuring voltage and current in circuits" progress={progress} setProgress={setProgress}>
        <p><Term def="Potential difference: the energy transferred per unit of charge between two points in a circuit. Measured in volts (V) with a voltmeter connected in parallel.">Voltage (V)</Term> is the energy transferred per unit charge between two points. <Term def="The rate of flow of charge through a conductor. Measured in amperes (A) with an ammeter connected in series.">Current (I)</Term> is the rate of charge flow, measured in amperes (A). The rules differ between series and parallel arrangements.</p>
        <p>In series: I is the same at every point (I1 = I2 = I_total); V_supply = V1 + V2 (voltages share). In parallel: V is the same across every branch (V1 = V2 = V_supply); I_total = I1 + I2 (currents add). These rules come directly from conservation of charge and conservation of energy.</p>
        <Callout kind="key" title="The golden rules">Series: same current, shared voltage. Parallel: same voltage, shared current. Remember by thinking about the paths: one path = same current; each branch gets full voltage.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={15} question="In a series circuit with a 9 V battery, the voltage across R1 is 3 V. What is the voltage across R2 (the only other component)?" options={["9 V","3 V","6 V","12 V"]} correct={2} explain="V_R2 = 9 - 3 = 6 V. In series, voltages across components add up to the supply voltage."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.3.4" title="Ohm's law: V = IR" progress={progress} setProgress={setProgress}>
        <p><Term def="The relationship V = IR: the current through a conductor is directly proportional to the voltage across it, provided temperature stays constant.">Ohm's law</Term> states that V = I x R, where V is voltage in volts, I is current in amperes, and R is <Term def="Opposition to current flow in a conductor. Measured in ohms (symbol: omega).">resistance</Term> in ohms (symbol omega). It can be rearranged as I = V/R or R = V/I. A component that obeys this relationship perfectly is an <Term def="A conductor whose resistance stays constant regardless of the voltage applied (at constant temperature).">ohmic conductor</Term>. Its V-I graph is a straight line through the origin; the gradient equals R.</p>
        <p>Not all components are ohmic. A filament lamp heats up as current increases, so its resistance rises; its V-I graph curves upward. A diode allows current in one direction only, producing a highly non-linear graph. For most practical resistors at constant temperature, though, Ohm's law gives accurate predictions and is essential for circuit design.</p>
        <Callout kind="fact" title="Georg Ohm">Georg Ohm published his law in 1827 after careful experiments measuring current and voltage in metal wires. His work was initially criticised but eventually earned him the Copley Medal from the Royal Society of London in 1841.</Callout>
        <OhmsLawExplorer/>
        <QGroup title="Check yourself">
          <MCQ num={16} question="A resistor has 12 V across it and 3 A through it. What is its resistance?" options={["36 ohms","4 ohms","0.25 ohms","9 ohms"]} correct={1} explain="R = V / I = 12 / 3 = 4 ohms."/>
          <WrittenQ num={17} question="A student graphs V against I for a resistor and gets a straight line through the origin with gradient 5. What does this tell you about the resistor?" model="The straight line through the origin confirms the resistor is ohmic: current is proportional to voltage (Ohm's law is obeyed at constant temperature). The gradient of a V-I graph equals resistance, so R = 5 ohms."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.3.5" title="Electrical power and energy over time" progress={progress} setProgress={setProgress}>
        <p>Electrical <Term def="The rate at which energy is transformed. P = V x I. Measured in watts (W).">power</Term> (P) is calculated as P = V x I (watts). Combined with Ohm's law this gives P = I^2 x R and P = V^2 / R. Total electrical energy transformed is E = P x t, where t is time in seconds and E is energy in joules. For household bills, energy is measured in <Term def="The energy used by a 1,000 W (1 kW) device running for one hour. 1 kWh = 3.6 MJ.">kilowatt-hours (kWh)</Term>: 1 kWh = 3,600,000 J.</p>
        <p>Comparing power ratings tells you which appliances cost more to run. A 2,000 W kettle running for 3 minutes uses 360,000 J; a 60 W lamp running for an hour uses 216,000 J. The high-power appliance uses more energy even though it runs for less time. These calculations directly support choices about energy efficiency and household running costs.</p>
        <PowerEnergyCalc/>
        <QGroup title="Check yourself">
          <MCQ num={18} question="A 1,200 W microwave runs for 5 minutes. How much energy does it transform?" options={["6,000 J","360,000 J","72,000 J","1,200 J"]} correct={1} explain="E = P x t = 1,200 x (5 x 60) = 1,200 x 300 = 360,000 J."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.3.6" title="Energy star ratings" progress={progress} setProgress={setProgress}>
        <p>In Australia and New Zealand, most household appliances display an <Term def="A label on Australian appliances showing a star rating (1 to 6 or more) and annual kWh consumption, allowing efficiency comparisons.">Energy Rating Label</Term> showing a star rating and estimated annual electricity consumption (kWh). More stars means less energy used for the same function. Star ratings are calculated using standardised tests; for a refrigerator, testers measure electricity consumed over 24 hours under controlled conditions.</p>
        <p>The scale is updated regularly as technology improves, keeping stars meaningful. Products that significantly exceed 6 stars earn super-efficiency ratings. Choosing a higher-rated appliance costs more to buy but saves money over its lifetime. Understanding the label helps you calculate the payback period for a more efficient model.</p>
        <Callout kind="tip" title="Worked example">Model A: $600 purchase, 450 kWh/year. Model B: $900 purchase, 220 kWh/year. At $0.30/kWh, Model A costs $135/year and Model B $66/year. Annual saving = $69. Payback = ($900 - $600) / $69 = about 4.3 years. After that, Model B saves money every year.</Callout>
        <StarRatingCompare/>
        <QGroup title="Check yourself">
          <MCQ num={19} question="Why are energy star rating scales updated regularly?" options={["To increase government revenue","Because technology improves over time, otherwise all newer models cluster at the top and comparisons become meaningless","Because older appliances become more efficient with age","To match international standards"]} correct={1} explain="As technology improves, most models would eventually hit 6 stars. Updating the scale keeps it meaningful by ensuring stars reflect relative performance among current models."/>
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 4: Global Future Energy Needs and Energy in Context
   ============================================================ */
function Section4({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">1.4 Global future energy needs + Energy in context</div>
        <h1>Energy for a sustainable future</h1>
        <p className="lead">Global energy demand keeps rising. Meeting it cleanly and fairly is one of the defining challenges of your generation.</p>
      </div>

      <DotPoint id="1.4.1" title="Optimising current energy use" progress={progress} setProgress={setProgress}>
        <p>Optimising energy use means achieving the same or better outcomes while consuming less energy. Scientists and engineers call this the <Term def="Energy efficiency improvements and demand reduction: saving a unit of energy is almost always cheaper than generating a new unit.">first fuel</Term> of the energy transition because saving energy costs less than generating it. Strategies operate at three scales: individual behaviour, industrial processes, and national policy.</p>
        <p>At the individual level, switching off unused devices, choosing high-star appliances, and insulating homes all reduce energy demand. At the industrial level, <Term def="A system that uses waste thermal energy from electricity generation to heat buildings or industrial processes, raising overall efficiency from about 35% to over 80%.">combined heat and power (CHP)</Term> and variable speed drives on motors cut waste. At the national level, building energy codes, vehicle fuel standards, and <Term def="Electricity pricing that is cheaper during off-peak hours, encouraging large users to shift loads away from peak times.">demand-side management</Term> reduce the need for new generating capacity.</p>
        <Callout kind="key" title="Passive solar design">Orienting a building so north-facing windows capture winter sunlight and roof overhangs shade summer sun reduces heating and cooling loads without any active technology. This is a no-cost efficiency gain built into the building's design.</Callout>
        <Callout kind="fact" title="The numbers">Replacing 200 halogen lamps with LEDs in a school (8 hours per day, 200 days per year) saves about 16,320 kWh per year and roughly $4,900 at $0.30/kWh, with a payback period of about 3 months on the extra lamp cost.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={20} question="Why is saving energy sometimes called the 'first fuel'?" options={["It was the first fuel humans ever used","Saving a unit of energy is almost always cheaper than generating a new unit","It refers to wood burning","It is the most common fuel globally"]} correct={1} explain="Efficiency gains and demand reduction are called the 'first fuel' because avoiding the need for energy is nearly always cheaper and less polluting than producing it from any source."/>
          <WrittenQ num={21} question="Compare demand-side management with building a new gas power plant as strategies for addressing peak electricity demand. Consider cost, environmental impact, and implementation time." model="Demand-side management: implemented quickly through smart meters and time-of-use pricing, low cost, minimal environmental impact, reduces peak demand without new infrastructure. New gas plant: takes 3 to 7 years to build, costs hundreds of millions of dollars, emits CO2, but provides reliable dispatchable power. DSM is preferred as a first response; new generation is needed only when demand optimisation cannot meet the remaining gap."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.4.2" title="Past trends and future energy demand" progress={progress} setProgress={setProgress}>
        <p>Global energy consumption roughly doubled from 1970 to 2020, rising from about 230 to 570 <Term def="Exajoule: one billion billion (10 to the power of 18) joules. Used to measure national or global energy consumption.">exajoules (EJ)</Term> per year. Population growth was the dominant driver; per-person energy use grew only modestly, from about 62 to 73 GJ, showing that efficiency gains in developed countries partially offset rising consumption in developing nations.</p>
        <p>In Australia, <Term def="Energy used per dollar of economic output (GDP). It has been declining as the Australian economy becomes more service-oriented and efficiency improves.">energy intensity</Term> has been declining even as total energy use grows. NSW and Victoria are the largest electricity consumers due to their population size. The <Term def="International Energy Agency: a Paris-based organisation that provides data and analysis on global energy.">IEA</Term> projects that global energy demand will continue to grow, particularly in Asia and Africa. Understanding past trends helps planners model future demand and ensure sufficient generating capacity, transmission, and storage are built in time.</p>
        <EnergyTrendsChart/>
        <QGroup title="Check yourself">
          <MCQ num={22} question="Using the data table, what was the percentage increase in global energy consumption from 1970 to 2020?" options={["About 50%","About 148%","About 300%","About 18%"]} correct={1} explain="(570 - 230) / 230 x 100 = 340 / 230 x 100 = approximately 148%."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.4.3" title="Reasons for developing alternative energy sources" progress={progress} setProgress={setProgress}>
        <p>Three interconnected reasons drive the development of alternative energy sources. First, <Term def="The situation when an energy resource is used up faster than it is naturally replenished. Fossil fuels are being depleted faster than they formed.">resource depletion</Term>: fossil fuels are finite. As the most accessible deposits are exhausted, extraction becomes more expensive and risky, requiring drilling in deeper water or more remote locations. Second, environmental harm: burning fossil fuels releases <Term def="Carbon dioxide (CO2): a greenhouse gas released when fossil fuels are burned, which accumulates in the atmosphere and drives global warming.">CO2</Term> and other <Term def="Gases that absorb and re-emit infrared radiation, warming Earth's atmosphere. Include CO2, methane, and nitrous oxide.">greenhouse gases</Term> driving climate change, as well as sulfur dioxide and nitrogen oxides causing acid rain and air pollution.</p>
        <p>Third, <Term def="Having reliable access to affordable energy, free from the risk of price volatility or supply disruption caused by dependence on imported fuels.">energy security</Term>: countries that import fossil fuels are vulnerable to price shocks and geopolitical supply disruptions. Domestic renewable resources (sunshine, wind, rivers) are free, abundant, and cannot be embargoed. The <Term def="Intergovernmental Panel on Climate Change: the leading UN body summarising scientific evidence on climate change.">IPCC</Term> has concluded that limiting global warming to 1.5 degrees Celsius requires rapid and deep reductions in fossil fuel use.</p>
        <Callout kind="warn" title="Urgency">The IPCC concluded that limiting global warming to 1.5 degrees Celsius requires near-complete phase-out of unabated fossil fuel use for electricity and heat. Every year of delay makes the required transition faster and more costly.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={23} question="Which of the following is NOT one of the three main reasons for developing alternative energy sources?" options={["Resource depletion (fossil fuels are finite)","Environmental harm from greenhouse gas emissions","Energy security (reducing dependence on imports)","Increasing the number of cars on the road"]} correct={3} explain="The three key reasons are resource depletion, environmental harm, and energy security. Increasing car ownership is a driver of energy demand, not a reason to develop alternatives."/>
          <WrittenQ num={24} question="Compare the energy security situations of Australia (a fossil fuel exporter) and Japan (which imports nearly all its fossil fuels). How does this difference affect each country's incentive to develop renewable energy?" model="Japan is highly vulnerable to price shocks and supply disruptions because it imports nearly all fossil fuels. Its energy security is directly threatened, giving it a strong incentive to develop domestic renewable energy. Australia exports coal and LNG, generating significant revenue, which reduces its short-term economic incentive to move away from fossil fuels. However, Australia still faces energy security concerns around domestic gas prices tied to global markets, and has exceptional renewable resources that could provide long-term energy independence."/>
        </QGroup>
      </DotPoint>

      <DotPoint id="1.6.1" title="Evaluating alternative energy sources using data and evidence" progress={progress} setProgress={setProgress}>
        <p>A well-reasoned evaluation of alternative energy sources uses quantitative data, compares sources across multiple criteria, and acknowledges uncertainty and trade-offs. Key criteria include: resource availability, technical <Term def="The proportion of the primary energy resource that is converted to useful electricity. Solar PV: 15 to 22%. Wind: 35 to 45%. Pumped hydro (round-trip): 70 to 85%.">efficiency</Term>, environmental impact (lifecycle emissions), <Term def="Levelised Cost of Electricity: the average cost per unit generated over a plant's lifetime, including capital, fuel, and operating costs.">LCOE</Term>, reliability and <Term def="Describes a power source that can generate electricity on demand at any time, regardless of weather or time of day.">dispatchability</Term>, and social factors.</p>
        <p>No single source is ideal across all criteria. Solar PV has an exceptional resource in Australia and rapidly falling costs, but is intermittent. Pumped hydro is dispatchable and stores energy, but needs suitable geography. A portfolio approach combining multiple complementary sources is generally more robust and reliable than dependence on any one technology. Australia's combination of world-class solar and wind with Snowy 2.0 pumped hydro and grid-scale batteries represents this portfolio strategy.</p>
        <Callout kind="key" title="Evidence-based evaluation">A credible evaluation: defines criteria, gathers quantitative data, compares sources against each criterion, identifies trade-offs, weighs the evidence, draws a justified conclusion, and acknowledges limitations. This is exactly how scientists and engineers make real energy decisions.</Callout>
        <EnergyCriteriaEval/>
        <Callout kind="tip" title="Australia as a case study">Australia has world-class solar and wind resources, substantial hydroelectric capacity, and export-oriented fossil fuel industries. Evidence from the CSIRO GenCost report shows that large-scale solar PV and wind are now the cheapest forms of new electricity generation in Australia, a complete reversal from 10 years ago when new gas was cheapest.</Callout>
        <QGroup title="Check yourself">
          <MCQ num={25} question="What does LCOE stand for, and what does it measure?" options={["Lowest Carbon Output Equivalent; the emissions per kWh","Levelised Cost of Electricity; average cost per unit of electricity generated over a plant's lifetime","Local Cost of Energy; what households pay per kWh on their bill","Lifecycle CO2 Estimate; grams of CO2 per kWh"]} correct={1} explain="LCOE stands for Levelised Cost of Electricity. It measures the average cost per unit of electricity generated over the plant's lifetime, including all capital, fuel, and operating costs."/>
          <WrittenQ num={26} question="Explain why a combination of multiple alternative energy sources is generally a more robust strategy than relying on just one." model="No single source is ideal across all criteria. Solar only generates during the day; wind may be calm for days. Combining solar, wind, and dispatchable storage (pumped hydro or batteries) means when one source is unavailable, others compensate. This improves overall grid reliability, reduces risk from technical failures, and provides cost stability. A diverse portfolio is more resilient than depending on a single technology."/>
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
  topicTitle: "Energy",
  heroImage: "img/hero.png",
  strand: "Stage 5 · NSW Science",
  accent: "blue",
  storageKey: "y9.energy",
  hubHref: "../",
  intro: "Energy is the ability to make things happen. In this topic you will investigate the law of conservation of energy, calculate efficiency in real devices, build and analyse electric circuits using Ohm's law, explore where our electricity comes from, and evaluate the evidence for transitioning to renewable sources to meet global energy needs sustainably.",
  glossary: {
    "energy": "The capacity to do work or cause change. Measured in joules (J).",
    "kinetic energy (KE)": "Energy of a moving object. KE = 0.5 x mass x speed squared.",
    "gravitational potential energy (GPE)": "Energy stored due to position in a gravitational field. GPE = mgh.",
    "elastic potential energy": "Energy stored in a stretched or compressed material.",
    "thermal energy": "Energy stored in the random motion of particles; commonly called heat.",
    "conservation of energy": "Energy cannot be created or destroyed; it can only change form or transfer between objects.",
    "closed system": "A system in which no energy or matter is exchanged with the surroundings.",
    "efficiency": "Proportion of input energy that becomes useful output energy. Efficiency (%) = (useful output / total input) x 100.",
    "friction": "A force opposing relative motion between surfaces, converting kinetic energy to thermal energy.",
    "insulation": "Material that slows the transfer of thermal energy.",
    "fossil fuels": "Coal, petroleum, and natural gas: finite fuels formed from ancient organisms over millions of years.",
    "renewable energy": "Energy from sources naturally replenished on human timescales (solar, wind, hydro, geothermal, tidal, biomass).",
    "non-renewable energy": "Energy from sources consumed faster than they are replenished; once used, effectively gone.",
    "photovoltaic (PV)": "Technology that converts light directly to electrical energy using semiconductor materials.",
    "electromagnetic induction": "The process of generating a current by moving a conductor in a magnetic field.",
    "turbine": "A device with rotating blades driven by steam, water, or wind to spin a generator shaft.",
    "intermittency": "The property of an energy source that only produces output when natural conditions allow.",
    "LCOE": "Levelised Cost of Electricity: average cost per unit of electricity generated over a plant's lifetime.",
    "electric current (I)": "Rate of flow of charge through a conductor. Measured in amperes (A).",
    "voltage (V)": "Potential difference: energy transferred per unit of charge between two points. Measured in volts (V).",
    "resistance (R)": "Opposition to current flow in a conductor. Measured in ohms (omega).",
    "Ohm's law": "V = I x R: current through a conductor is directly proportional to the voltage across it (at constant temperature).",
    "series circuit": "Circuit where all components share one path; same current flows through all.",
    "parallel circuit": "Circuit with multiple branches; each branch gets the full supply voltage.",
    "power (P)": "Rate of energy transformation. P = V x I. Measured in watts (W).",
    "kilowatt-hour (kWh)": "Energy used by a 1 kW device running for one hour. 1 kWh = 3.6 MJ.",
    "energy rating label": "Australian label showing star rating and annual kWh for household appliances.",
    "greenhouse gas": "A gas such as CO2 or methane that traps heat in the atmosphere, contributing to climate change.",
    "energy security": "Reliable access to affordable energy, free from vulnerability to supply disruption or price shocks.",
    "demand-side management": "Shifting large electricity loads to off-peak times using pricing signals, reducing peak demand.",
  },
  sections: [
    {
      id: "1.1",
      label: "Conservation and Efficiency",
      accent: "blue",
      points: ["1.1.1", "1.1.2", "1.1.3"],
      blurb: "The law of conservation of energy, calculating efficiency, and strategies to reduce waste.",
      render: (p) => <Section1 {...p}/>,
    },
    {
      id: "1.2",
      label: "Sources of Energy",
      accent: "amber",
      points: ["1.2.1", "1.2.2", "1.2.3"],
      blurb: "Renewable and non-renewable sources, how electricity is generated, and comparing advantages and disadvantages.",
      render: (p) => <Section2 {...p}/>,
    },
    {
      id: "1.3",
      label: "Electrical Energy",
      accent: "blue",
      points: ["1.3.1", "1.3.2", "1.3.3", "1.3.4", "1.3.5", "1.3.6"],
      blurb: "Circuits, voltage, current, Ohm's law, power, energy calculations, and star ratings.",
      render: (p) => <Section3 {...p}/>,
    },
    {
      id: "1.4",
      label: "Global Energy Futures",
      accent: "teal",
      points: ["1.4.1", "1.4.2", "1.4.3", "1.6.1"],
      blurb: "Optimising energy use, global trends, reasons for alternatives, and evidence-based evaluation.",
      render: (p) => <Section4 {...p}/>,
    },
  ],
});
