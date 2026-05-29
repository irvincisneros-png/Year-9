/* global React, DotPoint, Callout, Figure, Term, MCQ, WrittenQ, QGroup, Interactive,
   Slider, SegToggle, Stat, Reveal, FlipCard, MatchBuckets, Ring, mountTopicApp */
const { useState, useEffect, useRef, useMemo } = React;

/* ============================================================
   SECTION 1 INTERACTIVES: Sustainability Pillars Explorer
   ============================================================ */
function PillarsExplorer() {
  const [active, setActive] = useState(null);
  const pillars = [
    {
      id: "env", label: "Environmental", colour: "#22c55e",
      icon: "🌿",
      desc: "Maintaining healthy ecosystems, biodiversity, and natural resources so they can support life now and in the future.",
      examples: ["Protecting native bushland", "Reducing greenhouse gas emissions", "Treating wastewater before discharge", "Conserving biodiversity hotspots"]
    },
    {
      id: "eco", label: "Economic", colour: "#f59e0b",
      icon: "⚙️",
      desc: "Using resources efficiently so economic activity can continue without destroying the resource base it depends on.",
      examples: ["Transitioning to renewable energy jobs", "Sustainable agriculture", "Circular economy manufacturing", "Green building design"]
    },
    {
      id: "soc", label: "Social", colour: "#3b82f6",
      icon: "🤝",
      desc: "Ensuring all communities have equitable access to resources, opportunities, and a healthy environment now and in future.",
      examples: ["Clean water access for all", "Affordable energy programs", "Community land rights", "Education about sustainability"]
    }
  ];
  const sel = active ? pillars.find(p => p.id === active) : null;
  return (
    <Interactive title="Three Pillars of Sustainability" subtitle="Tap a pillar to explore its goals and examples.">
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
        {pillars.map(p => (
          <button key={p.id} onClick={() => setActive(active === p.id ? null : p.id)}
            style={{
              padding: "14px 22px", borderRadius: 14, border: `3px solid ${p.colour}`,
              background: active === p.id ? p.colour : "var(--surface)",
              color: active === p.id ? "#fff" : "var(--ink)",
              fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "all .2s",
              minWidth: 130, display: "flex", flexDirection: "column", alignItems: "center", gap: 6
            }}>
            <span style={{ fontSize: 28 }}>{p.icon}</span>
            {p.label}
          </button>
        ))}
      </div>
      {sel && (
        <div style={{ background: "var(--surface-alt)", borderRadius: 12, padding: 18, border: `2px solid ${sel.colour}` }}>
          <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: sel.colour }}>{sel.label} Sustainability</p>
          <p style={{ marginBottom: 12 }}>{sel.desc}</p>
          <p style={{ fontWeight: 600, marginBottom: 6 }}>Real-world examples:</p>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {sel.examples.map((e, i) => <li key={i} style={{ marginBottom: 4 }}>{e}</li>)}
          </ul>
        </div>
      )}
      {!sel && <p className="muted" style={{ textAlign: "center" }}>Select a pillar above to see details.</p>}
    </Interactive>
  );
}

/* Solution Evaluator */
function SolutionEvaluator() {
  const scenarios = [
    {
      label: "Coal to Solar Power",
      env: 5, eco: 4, soc: 3,
      envNote: "Near-zero direct emissions; greatly reduces air pollution.",
      ecoNote: "Solar costs have fallen over 90% since 2010; creates new jobs.",
      socNote: "Intermittent supply needs storage; may affect energy prices short-term."
    },
    {
      label: "Drip Irrigation",
      env: 4, eco: 4, soc: 4,
      envNote: "Reduces water extraction by up to 50%; protects river ecosystems.",
      ecoNote: "Capital cost recovered by water savings over time.",
      socNote: "Farmers need training and support; widely accepted when benefits clear."
    },
    {
      label: "Deforestation for Mining",
      env: 1, eco: 3, soc: 2,
      envNote: "Destroys habitat; reduces biodiversity; removes carbon storage.",
      ecoNote: "Short-term profit; long-term ecosystem service losses may exceed gains.",
      socNote: "Local communities lose forest access; cultural and livelihood impacts."
    },
    {
      label: "Kerbside Recycling",
      env: 4, eco: 3, soc: 4,
      envNote: "Diverts waste from landfill; recovers raw materials.",
      ecoNote: "Saves energy vs virgin production; contamination reduces viability.",
      socNote: "Widely accepted; easy for households; requires public education."
    }
  ];
  const [idx, setIdx] = useState(0);
  const s = scenarios[idx];
  const barColour = v => v >= 4 ? "#22c55e" : v >= 3 ? "#f59e0b" : "#ef4444";
  const Bar = ({ value, label, note }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ fontWeight: 700, color: barColour(value) }}>{value}/5</span>
      </div>
      <div style={{ height: 14, background: "var(--surface-alt)", borderRadius: 7, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${value * 20}%`, background: barColour(value), borderRadius: 7, transition: "width .5s" }} />
      </div>
      <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{note}</p>
    </div>
  );
  return (
    <Interactive title="Sustainability Solution Evaluator" subtitle="Pick a real-world scenario and see how it scores across all three pillars.">
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18, justifyContent: "center" }}>
        {scenarios.map((sc, i) => (
          <button key={i} onClick={() => setIdx(i)}
            style={{ padding: "8px 14px", borderRadius: 8, border: "2px solid var(--accent)", cursor: "pointer",
              background: i === idx ? "var(--accent)" : "var(--surface)", color: i === idx ? "#fff" : "var(--ink)",
              fontWeight: 600, fontSize: 13 }}>
            {sc.label}
          </button>
        ))}
      </div>
      <Bar value={s.env} label="Environmental" note={s.envNote} />
      <Bar value={s.eco} label="Economic" note={s.ecoNote} />
      <Bar value={s.soc} label="Social" note={s.socNote} />
    </Interactive>
  );
}

/* ============================================================
   SECTION 1
   ============================================================ */
function Section1({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">4.1 Sustainability</div>
        <h1>Principles and Goals of Sustainability</h1>
        <p className="lead">What does it actually mean to live sustainably, and how does science help us get there?</p>
      </div>

      <DotPoint id="4.1.1" title="Identify the principles and goals of sustainability" progress={progress} setProgress={setProgress}>
        <p>
          <Term def="The capacity of natural and human systems to continue functioning over the long term, meeting present needs without reducing the ability of future generations to meet theirs.">Sustainability</Term> was given its most widely used definition by the 1987 Brundtland Report: development that meets the needs of the present without compromising the ability of future generations to meet their own needs. This means recognising that humans depend on Earth's natural systems for food, clean water, air, materials, and energy, and those systems have limits.
        </p>
        <p>
          Scientists and policymakers use a framework of three interconnected pillars. <Term def="Maintaining the health and resilience of ecosystems and natural resources.">Environmental sustainability</Term> focuses on keeping ecosystems healthy. <Term def="Using resources efficiently so economic activity can continue without exhausting its own resource base.">Economic sustainability</Term> ensures long-term productive capacity. <Term def="Ensuring communities have equitable access to resources and opportunities now and in the future.">Social sustainability</Term> means fairness across communities. These pillars reinforce each other: healthy ecosystems underpin economic activity, and equitable societies are better placed to protect their environments.
        </p>
        <Callout kind="key" title="Brundtland Definition">
          Sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs.
        </Callout>
        <p>
          Several key principles guide sustainability decisions. The <Term def="When an action risks environmental harm, precautionary measures should be taken even if the science is not fully established.">precautionary principle</Term> means acting to prevent harm even before certainty. <Term def="The current generation must not use resources at a rate that prevents future generations from meeting their own needs.">Intergenerational equity</Term> means today's choices must leave something for tomorrow. Biodiversity conservation, waste reduction, and renewable energy transitions round out the core principles. All decisions should consider environmental, economic, and social factors together.
        </p>
        <PillarsExplorer />
        <QGroup title="Check yourself">
          <MCQ num={1} question="Which definition of sustainability comes from the 1987 Brundtland Report?" options={["Using resources as efficiently as possible today","Meeting present needs without compromising future generations' ability to meet theirs","Protecting biodiversity in all ecosystems","Switching from fossil fuels to renewable energy"]} correct={1} explain="The Brundtland Report defined sustainable development as meeting today's needs without reducing future generations' ability to meet theirs." />
          <MCQ num={2} question="The precautionary principle states that:" options={["All environmental risks must be proven before action","Protective measures should be taken even when scientific evidence is incomplete","Biodiversity must always take priority over economic growth","Economic sustainability is more important than environmental sustainability"]} correct={1} explain="The precautionary principle supports taking action to prevent environmental harm even when certainty does not yet exist." />
          <WrittenQ num={3} question="Explain why scientists say the three pillars of sustainability reinforce each other. Give one specific example." model="Healthy ecosystems underpin economic activity by providing resources such as clean water and fertile soil. Equitable societies are better positioned to protect and manage environments. For example, a community with secure land rights and income is more likely to invest in sustainable land management than one facing poverty." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.1.2" title="Apply scientific understanding to propose valid solutions to identified problems" progress={progress} setProgress={setProgress}>
        <p>
          Scientists play a central role in identifying sustainability problems and developing evidence-based solutions. A valid scientific solution must be supported by data, feasible with available technology, and evaluated for both benefits and <Term def="Effects of a solution that were not intended and may create new problems.">unintended consequences</Term>. The process starts with defining the problem clearly, gathering data, generating possible solutions, then evaluating each against environmental, economic, and social criteria.
        </p>
        <p>
          Take over-extraction of freshwater as an example. Monitoring shows many rivers worldwide no longer reach the sea during dry seasons. Valid solutions include <Term def="A method of delivering water directly to plant roots through small tubes, reducing evaporation and runoff by up to 50% compared with flood irrigation.">drip irrigation</Term>, treating and reusing wastewater, rainwater harvesting, and restoring <Term def="Vegetation growing along river banks that slows runoff and recharges groundwater.">riparian vegetation</Term>. Each involves trade-offs between cost, ease of implementation, and effectiveness, which is why evidence-based comparison is essential.
        </p>
        <Callout kind="tip" title="Evaluating solutions">
          Ask: Does it reduce the problem? Can it be done with current technology? Is the cost reasonable long-term? Is it fair to communities? Can it scale up? Does it create new problems?
        </Callout>
        <SolutionEvaluator />
        <QGroup title="Check yourself">
          <MCQ num={4} question="What makes a proposed sustainability solution 'valid'?" options={["It is the cheapest option available","It is supported by evidence, is technically feasible, and has been evaluated for unintended consequences","It addresses only the environmental pillar","It was developed by a government agency"]} correct={1} explain="A valid solution must be evidence-based, technically achievable, and carefully evaluated for benefits and potential new problems." />
          <WrittenQ num={5} question="A coastal town is losing fish stocks due to overfishing. Using the five-step scientific process, outline how scientists might develop a valid solution." model="Step 1: Define the problem by quantifying declining fish stocks and identifying the species and areas affected. Step 2: Gather data on catch rates, population trends, and ecosystem impacts. Step 3: Generate solutions such as fishing quotas, marine reserves, and seasonal bans. Step 4: Evaluate each for effectiveness, economic impact, and social equity. Step 5: Implement the best combination and monitor fish populations annually to adjust." />
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 2 INTERACTIVES: Climate Science
   ============================================================ */
function WeatherClimateSorter() {
  const items = [
    { id: "a", label: "It is 34 degrees in Sydney today", bucket: "weather" },
    { id: "b", label: "Darwin has a tropical climate with a distinct wet season", bucket: "climate" },
    { id: "c", label: "A thunderstorm hit Melbourne this afternoon", bucket: "weather" },
    { id: "d", label: "Perth receives about 730 mm of rain per year on average", bucket: "climate" },
    { id: "e", label: "It snowed in the Blue Mountains last night", bucket: "weather" },
    { id: "f", label: "Central Australia has an arid climate with hot summers", bucket: "climate" },
  ];
  return (
    <Interactive title="Weather or Climate?" subtitle="Sort each statement into the correct category.">
      <MatchBuckets
        items={items}
        buckets={[{ id: "weather", label: "Weather" }, { id: "climate", label: "Climate" }]}
      />
    </Interactive>
  );
}

function GreenhouseSimulator() {
  const [co2Level, setCo2Level] = useState(280);
  const withoutGHE = -18;
  const naturalGHE = 33;
  const extraWarming = ((co2Level - 280) / 280) * 2.5;
  const surfaceTemp = (withoutGHE + naturalGHE + extraWarming).toFixed(1);
  const anomaly = (surfaceTemp - 15).toFixed(1);
  const col = anomaly > 0.5 ? "#ef4444" : anomaly > 0 ? "#f59e0b" : "#22c55e";
  return (
    <Interactive title="Greenhouse Effect Simulator" subtitle="Drag the CO2 slider and see how atmospheric concentration affects surface temperature.">
      <div className="ctrl-row">
        <Slider label="Atmospheric CO2" min={180} max={560} step={10} value={co2Level} onChange={setCo2Level} unit=" ppm" />
      </div>
      <div className="stat-readout">
        <Stat value={co2Level} label="CO2 (ppm)" />
        <Stat value={surfaceTemp} label="Surface Temp (C)" />
        <Stat value={anomaly > 0 ? "+" + anomaly : anomaly} label="Anomaly vs +15 C" />
      </div>
      <div style={{ background: "var(--surface-alt)", borderRadius: 10, padding: 12, marginTop: 8 }}>
        <p style={{ margin: 0, fontSize: 14 }}>
          Pre-industrial CO2 was <strong>280 ppm</strong>. Without any greenhouse effect Earth would be <strong>-18 C</strong>. The natural greenhouse effect adds <strong>+33 C</strong> of warming. Each additional 280 ppm above baseline adds roughly <strong>+2.5 C</strong> of enhanced warming in this model.
        </p>
        {co2Level > 280 && <p style={{ margin: "8px 0 0", fontSize: 14, color: col }}>
          At {co2Level} ppm, the enhanced greenhouse effect adds approximately {extraWarming.toFixed(1)} C above natural baseline.
        </p>}
        {co2Level === 180 && <p style={{ margin: "8px 0 0", fontSize: 14, color: "#3b82f6" }}>180 ppm corresponds to glacial (ice age) conditions in ice core records.</p>}
      </div>
    </Interactive>
  );
}

function EmissionsBreakdown() {
  const sectors = [
    { name: "Energy (electricity/heat)", pct: 34, col: "#ef4444" },
    { name: "Industry", pct: 24, col: "#f97316" },
    { name: "Transport", pct: 16, col: "#eab308" },
    { name: "Agriculture", pct: 11, col: "#22c55e" },
    { name: "Other", pct: 9, col: "#6366f1" },
    { name: "Buildings", pct: 6, col: "#3b82f6" },
  ];
  const [hover, setHover] = useState(null);
  const total = sectors.reduce((s, x) => s + x.pct, 0);
  let cumAngle = 0;
  const cx = 90, cy = 90, r = 75;
  const slices = sectors.map((s, i) => {
    const angle = (s.pct / total) * 360;
    const startAngle = cumAngle;
    cumAngle += angle;
    const r2a = (deg) => (deg - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(r2a(startAngle));
    const y1 = cy + r * Math.sin(r2a(startAngle));
    const x2 = cx + r * Math.cos(r2a(cumAngle));
    const y2 = cy + r * Math.sin(r2a(cumAngle));
    const large = angle > 180 ? 1 : 0;
    return { ...s, d: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`, idx: i };
  });
  return (
    <Interactive title="Global Emissions by Sector" subtitle="Hover or tap a slice to see the sector's contribution. Energy and industry together account for 58% of emissions.">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start", justifyContent: "center" }}>
        <svg viewBox="0 0 180 180" width={180} height={180} style={{ flexShrink: 0 }}>
          {slices.map(sl => (
            <path key={sl.name} d={sl.d}
              fill={sl.col}
              opacity={hover === null || hover === sl.idx ? 1 : 0.4}
              stroke="#fff" strokeWidth={2}
              style={{ cursor: "pointer", transition: "opacity .2s" }}
              onMouseEnter={() => setHover(sl.idx)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setHover(hover === sl.idx ? null : sl.idx)}
            />
          ))}
        </svg>
        <div style={{ minWidth: 160 }}>
          {sectors.map((s, i) => (
            <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7, opacity: hover === null || hover === i ? 1 : 0.4, transition: "opacity .2s", cursor: "pointer" }}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onClick={() => setHover(hover === i ? null : i)}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: s.col, flexShrink: 0 }} />
              <span style={{ fontSize: 13 }}>{s.name}</span>
              <span style={{ marginLeft: "auto", fontWeight: 700, fontSize: 13 }}>{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      {hover !== null && (
        <Callout kind="fact" title={sectors[hover].name}>
          Contributes {sectors[hover].pct}% of global greenhouse gas emissions. {hover === 0 ? "The single largest source globally." : hover === 2 ? "Includes cars, trucks, ships, and aviation." : hover === 3 ? "Includes livestock, rice, and fertilisers." : ""}
        </Callout>
      )}
    </Interactive>
  );
}

/* ============================================================
   SECTION 2
   ============================================================ */
function Section2({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">4.2 Climate Science</div>
        <h1>Climate Science and the Greenhouse Effect</h1>
        <p className="lead">From daily weather to centuries of warming, the atmosphere shapes life on Earth.</p>
      </div>

      <Figure src="img/greenhouse.png" caption="Greenhouse gases trap some of the heat radiating from Earth." />
      <DotPoint id="4.2.1" title="Distinguish between climate and weather" progress={progress} setProgress={setProgress}>
        <p>
          <Term def="The short-term atmospheric conditions at a specific place and time, including temperature, rainfall, wind, and cloud cover. Changes hour to hour.">Weather</Term> is what is happening in the atmosphere right now or over the next few days. It is often unpredictable beyond about two weeks. <Term def="The long-term average pattern of weather conditions typical for a region, calculated over at least 30 years of data.">Climate</Term> is the long-term pattern built from decades of weather records. A handy way to remember: weather is what you wear today; climate is what you keep in your wardrobe.
        </p>
        <p>
          The <Term def="The World Meteorological Organization, which sets international standards for climate data collection and analysis.">World Meteorological Organization (WMO)</Term> defines the standard climate period as 30 years (currently 1991 to 2020). Australia has diverse climate zones: tropical in the north, arid across the interior, temperate in the south-east and south-west, and alpine in the Australian Alps. Climate data comes from weather stations, ocean buoys, weather balloons, satellites, and <Term def="Indirect records of past climate stored in ice cores, tree rings, coral, and sediments.">climate proxies</Term> such as ice cores.
        </p>
        <Callout kind="warn" title="Common misconception">
          A single cold winter does not disprove global warming. Weather events at one location do not contradict long-term global climate trends based on decades of data from thousands of locations.
        </Callout>
        <WeatherClimateSorter />
        <QGroup title="Check yourself">
          <MCQ num={1} question="How many years of data does the WMO use to define a standard climate period?" options={["10 years","30 years","50 years","100 years"]} correct={1} explain="The WMO uses a 30-year standard climate period, currently 1991 to 2020." />
          <WrittenQ num={2} question="A student says 'It was very cold last winter, so global warming cannot be real.' Explain the scientific error in this statement." model="The student is confusing weather with climate. A single cold winter at one location is a short-term weather event. Global warming describes a long-term upward trend in average global temperatures based on decades of data from thousands of locations worldwide. One regional weather event does not contradict a global climate trend." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.2.2" title="Investigate data to determine what trends are evident in the world's climate" progress={progress} setProgress={setProgress}>
        <p>
          Analysis of global temperature records reveals clear trends. Global average surface temperature has risen by approximately 1.1 degrees Celsius above <Term def="The average temperature calculated from 1850 to 1900, before large-scale industrial greenhouse gas emissions began.">pre-industrial levels</Term>. The 2011 to 2020 decade was the warmest on record. Sea surface temperatures have also risen, contributing to more intense tropical cyclones and coral bleaching events. <Term def="The phenomenon where polar regions warm two to four times faster than the global average.">Polar amplification</Term> means the Arctic is warming fastest of all.
        </p>
        <p>
          Beyond temperature, scientists have documented sea levels rising approximately 20 centimetres since 1900, Arctic summer sea ice declining about 13 percent per decade since satellite records began in 1979, and extreme heat events increasing in frequency. These changes appear consistently across multiple <Term def="Sets of data collected and analysed independently by different organisations, which strengthen confidence when they show the same result.">independent data sets</Term> from organisations worldwide.
        </p>

        <Figure caption="Global average surface temperature anomaly by decade above the 1850 to 1900 pre-industrial baseline, showing an accelerating warming trend.">
          <svg viewBox="0 0 520 200" width="100%" style={{ maxWidth: 520 }}>
            {(() => {
              const data = [
                { label: "1880s", val: -0.15 }, { label: "1910s", val: -0.20 },
                { label: "1940s", val: 0.05 }, { label: "1970s", val: 0.05 },
                { label: "1990s", val: 0.35 }, { label: "2010s", val: 0.87 }
              ];
              const pad = { l: 52, r: 16, t: 20, b: 36 };
              const W = 520 - pad.l - pad.r;
              const H = 200 - pad.t - pad.b;
              const minV = -0.3, maxV = 1.0;
              const scaleY = v => pad.t + H - ((v - minV) / (maxV - minV)) * H;
              const bw = W / data.length - 8;
              const zero = scaleY(0);
              return (
                <g>
                  <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + H} stroke="var(--border)" strokeWidth={1} />
                  <line x1={pad.l} y1={zero} x2={pad.l + W} y2={zero} stroke="var(--muted)" strokeWidth={1} strokeDasharray="4 3" />
                  {[-0.2, 0, 0.2, 0.4, 0.6, 0.8, 1.0].map(v => (
                    <text key={v} x={pad.l - 4} y={scaleY(v) + 4} textAnchor="end" fontSize={10} fill="var(--muted)">{v.toFixed(1)}</text>
                  ))}
                  <text x={12} y={pad.t + H / 2} textAnchor="middle" fontSize={10} fill="var(--muted)" transform={`rotate(-90,12,${pad.t + H / 2})`}>Anomaly (C)</text>
                  {data.map((d, i) => {
                    const x = pad.l + i * (W / data.length) + 4;
                    const col = d.val > 0 ? "#ef4444" : "#3b82f6";
                    const barH = Math.abs(d.val) / (maxV - minV) * H;
                    const y = d.val >= 0 ? zero - barH : zero;
                    return (
                      <g key={d.label}>
                        <rect x={x} y={y} width={bw} height={barH} fill={col} rx={3} opacity={0.85} />
                        <text x={x + bw / 2} y={pad.t + H + 16} textAnchor="middle" fontSize={10} fill="var(--ink)">{d.label}</text>
                      </g>
                    );
                  })}
                </g>
              );
            })()}
          </svg>
        </Figure>
        <Callout kind="fact" title="Key data point">
          The 2010s had a temperature anomaly of +0.87 C above pre-industrial levels, the highest decade on record at the time.
        </Callout>
        <QGroup title="Check yourself">
          <MCQ num={3} question="By approximately how much has global average temperature risen above pre-industrial levels?" options={["0.3 C","1.1 C","2.0 C","3.5 C"]} correct={1} explain="Global average surface temperature has risen approximately 1.1 degrees Celsius above the pre-industrial (1850 to 1900) baseline." />
          <WrittenQ num={4} question="Explain why scientists use multiple independent data sets to confirm climate trends." model="If the same trend appears in data sets collected by different organisations using different methods, it is very unlikely to be caused by an error in one data set. Agreement across independent sources provides strong scientific confidence that the observed trend is real." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.2.3" title="Explain how the natural greenhouse effect influences global climate" progress={progress} setProgress={setProgress}>
        <p>
          The <Term def="The warming of Earth's surface caused by greenhouse gases in the atmosphere absorbing outgoing infrared radiation and re-emitting it back toward the surface.">natural greenhouse effect</Term> is essential for life. Without it, Earth's average surface temperature would be approximately -18 degrees Celsius rather than the current +15 degrees Celsius, a difference of 33 degrees. The Sun emits short-wavelength visible light that passes through the atmosphere and warms Earth's surface. The warmed surface then re-emits energy as longer-wavelength <Term def="Electromagnetic radiation emitted by warm objects, detected as heat.">infrared radiation</Term> directed upward.
        </p>
        <p>
          <Term def="Gases in the atmosphere, including water vapour, CO2, CH4, N2O, and ozone, that absorb outgoing infrared radiation and re-emit it in all directions, keeping Earth's surface warm.">Greenhouse gases</Term> including water vapour (H2O), carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O) absorb this outgoing infrared radiation. They then re-emit energy in all directions, including back toward Earth's surface. This is not quite the same as a garden greenhouse: a real greenhouse traps warm air physically, while the atmospheric process involves absorption and re-emission of radiation.
        </p>
        <Callout kind="key" title="Greenhouse gases at a glance">
          Water vapour is the most abundant greenhouse gas but acts as a feedback amplifier. CO2 is the main long-lived driver. Methane (CH4) has a warming potential about 28 times that of CO2 over 100 years.
        </Callout>
        <GreenhouseSimulator />
        <QGroup title="Check yourself">
          <MCQ num={5} question="What would Earth's average surface temperature be without the natural greenhouse effect?" options={["-18 C","+5 C","+15 C","+33 C"]} correct={0} explain="Without the natural greenhouse effect, Earth would average approximately -18 C rather than the current +15 C." />
          <WrittenQ num={6} question="Explain in your own words how greenhouse gases warm Earth's surface." model="Greenhouse gases absorb the long-wavelength infrared radiation emitted by Earth's surface, preventing it from escaping directly to space. The gases then re-emit this energy in all directions, including downward toward Earth's surface, keeping it warmer than it would otherwise be." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.2.4" title="Analyse data on global emissions and temperatures to explain the enhanced greenhouse effect" progress={progress} setProgress={setProgress}>
        <p>
          The <Term def="The intensification of the natural greenhouse warming caused by human activities increasing greenhouse gas concentrations beyond their natural levels.">enhanced greenhouse effect</Term> occurs when human activities raise greenhouse gas concentrations above natural levels. Since 1750, atmospheric CO2 has risen from approximately 280 ppm to over 420 ppm, an increase of about 50 percent, driven mainly by <Term def="The burning of coal, oil, and natural gas, which releases stored carbon as CO2.">fossil fuel combustion</Term>, deforestation, cement production, and agriculture.
        </p>
        <p>
          The impacts extend across climate and ecosystems. More intense and frequent extreme heat events, altered rainfall patterns, accelerating glacier melt, and rising sea levels are all measured consequences. In ecosystems, species ranges are shifting poleward, seasonal events are shifting in timing (<Term def="Changes in the timing of seasonal biological events such as flowering, migration, and breeding, caused by climate change.">phenological shifts</Term>), and mass coral bleaching events are increasing. <Term def="The reduction in ocean pH caused by CO2 dissolving in seawater to form carbonic acid, which harms marine organisms that build calcium carbonate shells.">Ocean acidification</Term> is a separate chemical threat from CO2 dissolving into seawater.
        </p>
        <EmissionsBreakdown />
        <QGroup title="Check yourself">
          <MCQ num={7} question="By approximately how much has atmospheric CO2 increased since pre-industrial times?" options={["10 percent","50 percent","100 percent","200 percent"]} correct={1} explain="CO2 has risen from about 280 ppm to over 420 ppm, an increase of approximately 50 percent." />
          <WrittenQ num={8} question="Explain why ocean acidification is a separate concern from warming, even though both are caused by rising CO2." model="Warming affects organisms through thermal stress and habitat change. Acidification directly reduces the concentration of carbonate ions in seawater, chemically preventing shell and skeleton formation in corals, molluscs, and sea urchins. Even if temperatures were controlled, continued CO2 emissions would still acidify the ocean. The two effects harm different sets of organisms through completely different mechanisms." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.2.5" title="Identify the advantages and limitations of methods used to reduce greenhouse gas emissions" progress={progress} setProgress={setProgress}>
        <p>
          Reducing emissions requires multiple strategies. <Term def="Energy sources that are naturally replenished, such as solar, wind, and hydro, producing near-zero direct emissions.">Renewable energy</Term> technologies have seen solar PV costs fall over 90 percent since 2010, making it the cheapest source of new electricity generation in most countries. However, solar and wind are <Term def="Energy sources that only generate when the natural resource (sun or wind) is available, not continuously.">intermittent</Term>, requiring battery storage, pumped hydro, or grid interconnection to maintain reliable supply.
        </p>
        <p>
          <Term def="Technology that captures CO2 from industrial exhaust gases or directly from the air and stores it permanently underground.">Carbon capture and storage (CCS)</Term> can decarbonise heavy industry but is expensive and unproven at large scale. Reforestation sequesters CO2 cheaply and boosts biodiversity, but is slow, requires land, and forests are vulnerable to fire and drought. Improving energy efficiency reduces how much energy is needed in the first place, cutting emissions without requiring new infrastructure.
        </p>
        <Callout kind="tip" title="No single solution is enough">
          Reducing emissions fast enough requires combining renewable energy, efficiency, electrifying transport, better land use, and where necessary, CCS. Each method has genuine trade-offs.
        </Callout>
        <Interactive title="Emission Reduction Method Comparison" subtitle="Compare four key strategies by their key strengths and weaknesses.">
          <div className="grid-2" style={{ gap: 12 }}>
            {[
              { name: "Solar PV", pro: "Cheapest new electricity; rapidly scalable; near-zero emissions.", con: "Intermittent; needs storage or backup to be reliable around the clock." },
              { name: "Wind Power", pro: "Large capacity available offshore and onshore; commercial proven.", con: "Intermittent; visual impact; requires grid integration and transmission." },
              { name: "Carbon Capture (CCS)", pro: "Can decarbonise hard-to-abate industry like steel and cement.", con: "Very expensive; large-scale geological storage not yet proven reliably." },
              { name: "Reforestation", pro: "Low cost; biodiversity co-benefits; widely deployable.", con: "Slow; land competition; forests can burn, releasing stored carbon." },
            ].map(m => (
              <div key={m.name} style={{ background: "var(--surface-alt)", borderRadius: 10, padding: 14 }}>
                <p style={{ fontWeight: 700, marginBottom: 6 }}>{m.name}</p>
                <p style={{ fontSize: 13, marginBottom: 4 }}><span style={{ color: "#22c55e", fontWeight: 600 }}>Advantage:</span> {m.pro}</p>
                <p style={{ fontSize: 13, margin: 0 }}><span style={{ color: "#ef4444", fontWeight: 600 }}>Limitation:</span> {m.con}</p>
              </div>
            ))}
          </div>
        </Interactive>
        <QGroup title="Check yourself">
          <MCQ num={9} question="What is the main limitation of solar and wind power as electricity sources?" options={["They produce too many greenhouse gases","Their supply is intermittent and depends on weather conditions","They are more expensive than coal","They can only be installed in remote areas"]} correct={1} explain="Solar and wind are intermittent sources. They only generate when sunlight or wind is available, requiring storage or backup for 24-hour supply." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.2.6" title="Analyse data showing the relationship between industrialisation and the rise in global temperatures" progress={progress} setProgress={setProgress}>
        <p>
          The <Term def="The period beginning around 1750 in Britain, during which coal-powered machinery and large-scale fossil fuel combustion began, producing a steep rise in CO2 emissions.">Industrial Revolution</Term> began the steep rise in fossil fuel use. Ice core records show CO2 remained between 180 and 280 ppm for the past 800,000 years before 1750. The rapid increase to over 420 ppm today is entirely outside the natural range for at least 800,000 years and coincides precisely with industrial civilisation.
        </p>
        <p>
          Global temperature records from NASA, NOAA, the UK Met Office, and the Japanese Meteorological Agency all show the same pattern: stable temperatures from 1850 to roughly 1900, then slow rise, then accelerating warming from the mid-20th century as post-war industrial expansion and fossil fuel use surged. Statistical analysis shows a <Term def="A statistical measure of how closely two variables are related. A value of 0.97 indicates a very strong positive relationship.">correlation coefficient</Term> of approximately 0.97 between cumulative CO2 emissions and global mean temperature since 1850. Climate models that include only natural forcing factors cannot reproduce the observed warming; adding human emissions does.
        </p>
        <Callout kind="fact" title="Ice core evidence">
          Antarctic ice cores extend climate records back approximately 800,000 years. Trapped air bubbles preserve ancient atmosphere, allowing scientists to measure past CO2 concentrations and infer temperature from oxygen isotope ratios.
        </Callout>
        <QGroup title="Check yourself">
          <MCQ num={10} question="Which line of evidence most directly shows that post-industrial CO2 levels are unusual in Earth's recent history?" options={["Coral bleaching records","Ice core data showing CO2 stayed between 180 and 280 ppm for 800,000 years","Weather station temperature records since 1850","Satellite sea level measurements"]} correct={1} explain="Ice core records covering 800,000 years show CO2 remained between 180 and 280 ppm before the Industrial Revolution. The rapid rise to over 420 ppm is entirely outside this natural range." />
          <WrittenQ num={11} question="Explain why correlation between CO2 and temperature, on its own, does not prove causation, and what additional evidence scientists use to establish a causal link." model="Correlation alone does not prove causation because the relationship might be coincidental or driven by a third factor. Additional evidence includes: the atmospheric physics mechanism by which CO2 absorbs infrared radiation (understood since the 19th century); isotopic analysis showing the CO2 increase is from burning ancient fossil carbon; climate models that only reproduce observed warming when human emissions are included; and the agreement of multiple independent lines of evidence." />
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 3 INTERACTIVES: Climate Change Impacts
   ============================================================ */
function SeaLevelRiseModel() {
  const [landIceMelt, setLandIceMelt] = useState(0);
  const [tempRise, setTempRise] = useState(0);
  const thermalExpansion = (tempRise * 0.18).toFixed(2);
  const meltContrib = (landIceMelt * 0.035).toFixed(2);
  const total = (parseFloat(thermalExpansion) + parseFloat(meltContrib)).toFixed(2);
  return (
    <Interactive title="Sea Level Rise Mechanisms" subtitle="Adjust the two main drivers of sea level rise and see how each contributes to the total.">
      <div className="ctrl-row">
        <Slider label="Land ice melt (Gt/yr)" min={0} max={500} step={10} value={landIceMelt} onChange={setLandIceMelt} unit=" Gt/yr" />
        <Slider label="Ocean warming" min={0} max={2} step={0.1} value={tempRise} onChange={setTempRise} unit=" C" />
      </div>
      <div className="stat-readout">
        <Stat value={meltContrib} label="Meltwater rise (mm/yr)" />
        <Stat value={thermalExpansion} label="Thermal expansion (mm/yr)" />
        <Stat value={total} label="Total rise (mm/yr)" />
      </div>
      <p className="muted" style={{ fontSize: 13, marginBottom: 0 }}>
        Currently the world loses about 280 Gt of land ice per year from Greenland and 150 Gt from Antarctica. Ocean warming has contributed roughly 1 mm/yr of thermal expansion. Today's observed total is about 3.7 mm/yr.
      </p>
    </Interactive>
  );
}

function WaterCycleImpact() {
  const [warming, setWarming] = useState(1.1);
  const evapIncrease = (warming * 7).toFixed(0);
  const wetterIntensity = (warming * 8).toFixed(0);
  const drierRisk = (warming * 15).toFixed(0);
  const glacierLoss = (warming * 12).toFixed(0);
  return (
    <Interactive title="Climate Change and the Water Cycle" subtitle="As global temperature rises, the water cycle intensifies. Explore the impacts.">
      <div className="ctrl-row">
        <Slider label="Global temperature rise" min={0.5} max={4} step={0.1} value={warming} onChange={setWarming} unit=" C" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
        {[
          { label: "Evaporation increase", val: evapIncrease + "%", col: "#f97316", desc: "Warmer air holds more water vapour." },
          { label: "Heavy rain intensity", val: "+" + wetterIntensity + "%", col: "#3b82f6", desc: "More atmospheric moisture fuels intense storms." },
          { label: "Drought risk (subtropical)", val: "+" + drierRisk + "%", col: "#eab308", desc: "Increased evaporation dries soils in mid-latitudes." },
          { label: "Glacier retreat risk", val: glacierLoss + "%", col: "#06b6d4", desc: "Reduced dry-season river flows downstream." },
        ].map(item => (
          <div key={item.label} style={{ background: "var(--surface-alt)", borderRadius: 10, padding: 12, borderLeft: `4px solid ${item.col}` }}>
            <p style={{ fontWeight: 700, fontSize: 15, margin: "0 0 2px", color: item.col }}>{item.val}</p>
            <p style={{ fontWeight: 600, fontSize: 12, margin: "0 0 4px" }}>{item.label}</p>
            <p style={{ fontSize: 12, margin: 0, color: "var(--muted)" }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="muted" style={{ fontSize: 12, marginTop: 8 }}>
        Values are simplified indicators based on atmospheric science principles. Actual impacts vary significantly by region.
      </p>
    </Interactive>
  );
}

/* ============================================================
   SECTION 3
   ============================================================ */
function Section3({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">4.3 Impacts of Present-Day Climate Change</div>
        <h1>Climate Change Impacts Today</h1>
        <p className="lead">Climate change is not a future problem. Its fingerprints are already on ecosystems, water supplies, and communities worldwide.</p>
      </div>

      <DotPoint id="4.3.1" title="Identify the characteristics of climate change" progress={progress} setProgress={setProgress}>
        <p>
          Climate change today refers primarily to the long-term shifts in global climate patterns driven by the <Term def="The intensification of the natural greenhouse effect caused by human greenhouse gas emissions.">enhanced greenhouse effect</Term>. Its key measurable characteristics include rising average global temperatures, changes in precipitation patterns, rising sea levels, changes in extreme weather frequency and intensity, shifting seasons, and loss of sea ice and glaciers.
        </p>
        <p>
          A defining characteristic is the speed: past natural climate transitions between ice ages and warm periods took thousands of years, while current warming is occurring over decades. The warming is also global, occurring across all continents and ocean basins simultaneously. The pattern of faster warming over land and in polar regions matches the predicted <Term def="The specific spatial and temporal pattern of changes expected from a particular climate forcing, used to identify the cause.">fingerprint</Term> of greenhouse gas forcing, not solar variation or volcanic activity.
        </p>
        <Callout kind="key" title="Four key climate change characteristics">
          Rising temperatures (global, +1.1 C). Sea level rise (+20 cm since 1900, now 3.7 mm/yr). Declining Arctic sea ice (13% per decade since 1979). More frequent and intense extreme heat events.
        </Callout>
        <Interactive title="Climate Change Characteristics Summary" subtitle="Key measurable indicators of current climate change and their observed trends.">
          <div style={{ overflowX: "auto" }}>
            <table className="data-table" style={{ width: "100%" }}>
              <thead><tr><th>Characteristic</th><th>Observed Change</th><th>Rate</th></tr></thead>
              <tbody>
                {[
                  ["Global average temperature", "+1.1 C above pre-industrial", "Fastest in past 50 years"],
                  ["Sea level", "+20 cm since 1900", "3.7 mm/yr currently"],
                  ["Arctic sea ice (summer)", "13% decline per decade", "Consistent since 1979"],
                  ["Ocean heat content", "Increasing all basins", "Continuous since 1960s"],
                  ["Extreme heat events", "More frequent, hotter", "Frequency roughly doubled since 1950"],
                ].map(([c, o, r]) => <tr key={c}><td>{c}</td><td>{o}</td><td>{r}</td></tr>)}
              </tbody>
            </table>
          </div>
        </Interactive>
        <QGroup title="Check yourself">
          <MCQ num={1} question="What is 'polar amplification' in the context of climate change?" options={["Polar regions cool faster than the tropics","Polar regions warm two to four times faster than the global average","Polar ice acts to amplify storms","Polar oceans absorb most CO2"]} correct={1} explain="Polar amplification describes the phenomenon where polar regions, especially the Arctic, warm two to four times faster than the global average due to feedback mechanisms including ice-albedo feedback." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.3.2" title="Investigate and report on the consequences of climate change" progress={progress} setProgress={setProgress}>
        <p>
          Consequences span natural and human systems. In natural systems, the Greenland Ice Sheet contains enough ice to raise sea levels by approximately 7 metres if completely melted. Mountain glaciers that supply freshwater to rivers used by hundreds of millions of people in Asia and South America are shrinking. <Term def="Permanently frozen ground found in Arctic and sub-Arctic regions. When it thaws, it releases stored carbon as CO2 and methane, accelerating warming.">Permafrost</Term> thawing in Siberia, Alaska, and Canada is destabilising infrastructure and releasing stored carbon.
        </p>
        <p>
          For human communities, the IPCC estimates sea levels could rise 0.6 to 1.0 metres by 2100 under high-emission scenarios, potentially displacing hundreds of millions of people. Food security is threatened as heat stress and changing rainfall reduce crop yields in many regions. Human health faces increased heat mortality, expanding ranges of disease vectors such as mosquitoes carrying dengue fever and malaria, and air pollution from more intense wildfires.
        </p>
        <SeaLevelRiseModel />
        <Callout kind="warn" title="Floating vs land ice">
          Melting Arctic sea ice (floating) does NOT significantly raise sea levels because it already displaces ocean water. Melting land ice (Greenland, Antarctica) DOES raise sea levels because it adds new water to the ocean.
        </Callout>
        <QGroup title="Check yourself">
          <MCQ num={2} question="Why does melting Arctic sea ice NOT significantly raise global sea levels?" options={["Arctic ice is too small to matter","Floating ice already displaces its equivalent volume of water, so melting it adds no net water","Arctic ice melts too slowly to affect sea levels","The Arctic Ocean absorbs the extra water"]} correct={1} explain="Floating ice already displaces an equivalent volume of ocean water. When it melts, it simply replaces the displaced volume with liquid water of the same mass, causing no net change in sea level." />
          <WrittenQ num={3} question="Explain why permafrost thawing is described as a 'positive feedback' for climate change." model="Permafrost contains vast amounts of carbon stored for thousands of years. When temperatures rise and it thaws, it releases this carbon as CO2 and methane, which are potent greenhouse gases. This increases greenhouse gas concentrations, which causes further warming, which thaws more permafrost, releasing more carbon. This self-reinforcing cycle is a positive (amplifying) feedback that accelerates climate change." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.3.3" title="Investigate the effects of climate change on the water cycle and ecosystems" progress={progress} setProgress={setProgress}>
        <p>
          The <Term def="The continuous movement of water between the ocean, atmosphere, and land through evaporation, condensation, precipitation, and runoff.">water cycle (hydrological cycle)</Term> is being altered by climate change. Higher temperatures increase evaporation rates, putting more water vapour into the atmosphere. More atmospheric water vapour means more energy is available for intense precipitation events. However, in regions where evaporation exceeds precipitation, soils become drier, leading to drought. The principle of <Term def="The tendency for wet regions to receive more rainfall and dry regions to receive less as the climate warms, amplifying existing rainfall patterns.">"wet gets wetter, dry gets drier"</Term> broadly describes this redistribution.
        </p>
        <p>
          Coral reef ecosystems are especially vulnerable. When ocean temperatures rise even 1 to 2 degrees above normal seasonal maxima for several weeks, corals expel their <Term def="Microscopic photosynthetic algae that live in coral tissue, providing up to 90% of coral energy through photosynthesis and giving coral its colour.">zooxanthellae</Term>, causing bleaching. Australia's Great Barrier Reef has experienced five mass bleaching events since 1998, with four occurring between 2016 and 2022. Freshwater ecosystems, alpine meadows, and Arctic tundra are also being transformed as temperature and moisture patterns shift.
        </p>
        <WaterCycleImpact />
        <QGroup title="Check yourself">
          <MCQ num={4} question="What is coral bleaching and what triggers it?" options={["Coral turning white due to paint-like algae covering it","Mass expulsion of zooxanthellae when ocean temperature rises 1 to 2 C above normal for several weeks","Coral dying due to ocean acidification dissolving its skeleton","Coral decolourisation caused by reduced sunlight"]} correct={1} explain="Coral bleaching is the mass expulsion of zooxanthellae from coral tissue triggered by ocean temperatures rising 1 to 2 C above seasonal maxima for several weeks. The coral turns white and loses its main energy source." />
          <WrittenQ num={5} question="Explain how a prolonged drought caused by climate change could affect multiple levels of a freshwater river ecosystem." model="Reduced river flow lowers water levels and concentrates pollutants. Lower water volume warms faster and holds less dissolved oxygen. Aquatic invertebrates die or decrease, removing a key food source. Fish face reduced food and may not reach upstream breeding habitats. Waterbirds, platypus, and other wildlife dependent on the river face starvation and displacement. Riparian vegetation may die, causing bank erosion and further degrading habitat. These cascading effects can collapse the whole freshwater ecosystem." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.3.4" title="Investigate how satellites collect global data and how this data evaluates climate change impact" progress={progress} setProgress={setProgress}>
        <p>
          Satellites are among the most powerful climate monitoring tools because they observe the entire planet repeatedly from a consistent vantage point. Unlike ground-based stations, satellites provide continuous data over oceans, polar regions, rainforests, and other areas where ground monitoring is impossible. They use infrared radiometers to measure sea surface temperature, radar altimeters to measure sea level, microwave sensors to map sea ice, and spectrometers to detect vegetation, gases, and ocean colour.
        </p>
        <p>
          <Term def="Sea surface temperature, measured by infrared sensors on satellites, providing daily global maps used to track coral bleaching risk and marine heat waves.">Sea surface temperature (SST)</Term> data from MODIS satellites lets scientists issue coral bleaching alerts weeks in advance. <Term def="Radar altimetry satellites that measure ocean surface height by timing how long radar pulses take to bounce back, detecting sea level change to within about 1 centimetre.">Radar altimetry</Term> satellites (Jason series, Sentinel-6) measure global sea level rise. The Landsat series has tracked deforestation since 1972 using <Term def="Normalised Difference Vegetation Index, a measure of vegetation health calculated from near-infrared and visible light reflectance detected by satellites.">NDVI</Term>. The GRACE mission detects ice mass loss by measuring tiny changes in Earth's gravitational field as ice sheets shrink.
        </p>
        <Callout kind="fact" title="Why satellites beat ground stations">
          A single satellite pass can cover more ground in minutes than thousands of weather stations. Passive microwave sensors can even detect sea ice through clouds, which are always present over polar regions.
        </Callout>
        <Interactive title="Satellite Climate Monitoring: Key Missions" subtitle="Satellites measure variables that cannot be observed globally from the ground.">
          <div style={{ overflowX: "auto" }}>
            <table className="data-table" style={{ width: "100%" }}>
              <thead><tr><th>Mission</th><th>Variable</th><th>Use</th></tr></thead>
              <tbody>
                {[
                  ["Landsat series (NASA/USGS)", "Forest and land cover", "Tracks deforestation globally since 1972"],
                  ["Jason-3 / Sentinel-6", "Sea level", "Measures global sea level rise to 1 cm accuracy"],
                  ["MODIS (Terra/Aqua)", "Sea surface temperature", "Daily global SST; coral bleaching alerts"],
                  ["CryoSat-2 (ESA)", "Ice sheet and sea ice thickness", "Monitors Greenland and Antarctic mass changes"],
                  ["OCO-2 (NASA)", "Atmospheric CO2", "Maps global CO2 sources and sinks"],
                  ["GRACE/GRACE-FO", "Ice mass and groundwater", "Detects ice sheet loss by gravity changes"],
                ].map(([m, v, u]) => <tr key={m}><td>{m}</td><td>{v}</td><td>{u}</td></tr>)}
              </tbody>
            </table>
          </div>
        </Interactive>
        <QGroup title="Check yourself">
          <MCQ num={6} question="How does a radar altimeter satellite measure sea level?" options={["It photographs the ocean surface and compares colour bands","It emits radar pulses toward the ocean and measures the return time to calculate distance","It measures gravitational pull from ice sheets","It uses infrared sensors to detect heat emitted by ocean water"]} correct={1} explain="A radar altimeter emits pulses of radar toward the ocean surface and precisely measures the return time. Using the known speed of radio waves, this converts to a distance between satellite and ocean surface, from which sea level is calculated." />
          <WrittenQ num={7} question="Explain why passive microwave sensors are used to monitor sea ice, rather than optical or infrared sensors." model="Clouds are perpetually present over polar regions, blocking optical (visible) and infrared sensors. Microwave radiation passes through clouds, so passive microwave sensors can detect sea ice regardless of cloud cover. They detect differences in the microwave emission characteristics of sea ice versus open water, allowing continuous monitoring through polar winter and overcast conditions." />
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 4 INTERACTIVES
   ============================================================ */
function PollutionChain() {
  const [step, setStep] = useState(0);
  const steps = [
    { icon: "🌾", title: "Nitrogen fertiliser applied to paddock", desc: "Farmer applies excess nitrogen fertiliser to crops near a river." },
    { icon: "🌧", title: "Rain washes nitrates into river", desc: "Runoff carries dissolved nitrates from the paddock into the waterway." },
    { icon: "🦠", title: "Algal bloom develops (eutrophication)", desc: "Elevated nutrients cause rapid algae growth, blocking sunlight to plants below." },
    { icon: "💀", title: "Bacteria decompose algae; oxygen depletes", desc: "When algae die, bacteria multiply rapidly and consume dissolved oxygen." },
    { icon: "🐟", title: "Fish kill: hypoxia in the river", desc: "Dissolved oxygen drops to near zero. Fish and other aerobic organisms suffocate and die." },
    { icon: "🔬", title: "Scientists measure: eutrophication confirmed", desc: "Water sampling confirms elevated nutrients, depleted oxygen, and ecological collapse." },
  ];
  return (
    <Interactive title="Eutrophication: From Farm to Fish Kill" subtitle="Step through the sequence of events linking agricultural pollution to ecosystem collapse.">
      <div style={{ display: "flex", gap: 6, marginBottom: 16, justifyContent: "center", flexWrap: "wrap" }}>
        {steps.map((s, i) => (
          <button key={i} onClick={() => setStep(i)}
            style={{ width: 36, height: 36, borderRadius: "50%", border: `2px solid var(--accent)`,
              background: i <= step ? "var(--accent)" : "var(--surface)",
              color: i <= step ? "#fff" : "var(--muted)",
              fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            {i + 1}
          </button>
        ))}
      </div>
      <div style={{ background: "var(--surface-alt)", borderRadius: 12, padding: 20, textAlign: "center", minHeight: 120 }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>{steps[step].icon}</div>
        <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{steps[step].title}</p>
        <p style={{ margin: 0 }}>{steps[step].desc}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
        <button className="btn btn-ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>Previous</button>
        <span className="muted" style={{ alignSelf: "center" }}>{step + 1} of {steps.length}</span>
        <button className="btn btn-accent" onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1}>Next</button>
      </div>
    </Interactive>
  );
}

function WasteHierarchyGame() {
  const items = [
    { id: "a", label: "Buy a reusable coffee cup instead of disposable", bucket: "reduce" },
    { id: "b", label: "Donate old clothes to an op shop", bucket: "reuse" },
    { id: "c", label: "Put aluminium cans in the recycling bin", bucket: "recycle" },
    { id: "d", label: "Use waste-to-energy incineration for unsorted rubbish", bucket: "recover" },
    { id: "e", label: "Send unsorted general waste to landfill", bucket: "dispose" },
    { id: "f", label: "Choose a product with less packaging", bucket: "reduce" },
    { id: "g", label: "Repair a broken bicycle instead of buying a new one", bucket: "reuse" },
    { id: "h", label: "Sort glass bottles into the recycling bin", bucket: "recycle" },
  ];
  return (
    <Interactive title="Waste Hierarchy Sorter" subtitle="Sort each action into its correct level of the waste hierarchy, from most to least preferred.">
      <MatchBuckets
        items={items}
        buckets={[
          { id: "reduce", label: "Reduce" },
          { id: "reuse", label: "Reuse" },
          { id: "recycle", label: "Recycle" },
          { id: "recover", label: "Recover" },
          { id: "dispose", label: "Dispose" },
        ]}
      />
    </Interactive>
  );
}

function RecyclingEnergyComparison() {
  const materials = [
    { name: "Aluminium", saving: 95, col: "#6366f1" },
    { name: "Steel", saving: 75, col: "#3b82f6" },
    { name: "PET Plastic", saving: 60, col: "#22c55e" },
    { name: "Paper", saving: 50, col: "#f59e0b" },
    { name: "Glass", saving: 25, col: "#06b6d4" },
  ];
  const [sel, setSel] = useState(null);
  return (
    <Interactive title="Recycling Energy Savings" subtitle="Energy saved by recycling versus producing from virgin raw materials. Tap a bar to see details.">
      <svg viewBox="0 0 460 180" width="100%" style={{ maxWidth: 460 }}>
        {materials.map((m, i) => {
          const barW = (m.saving / 100) * 300;
          const y = i * 34 + 10;
          return (
            <g key={m.name} style={{ cursor: "pointer" }} onClick={() => setSel(sel === i ? null : i)}>
              <rect x={80} y={y} width={barW} height={26} rx={4} fill={m.col} opacity={sel === null || sel === i ? 0.9 : 0.3} />
              <text x={76} y={y + 17} textAnchor="end" fontSize={12} fill="var(--ink)" fontWeight={sel === i ? 700 : 400}>{m.name}</text>
              <text x={84 + barW} y={y + 17} fontSize={12} fontWeight={700} fill={m.col}>{m.saving}%</text>
            </g>
          );
        })}
        <line x1={80} y1={0} x2={80} y2={180} stroke="var(--border)" strokeWidth={1} />
      </svg>
      {sel !== null && (
        <Callout kind="fact" title={`${materials[sel].name} recycling`}>
          Recycling {materials[sel].name} saves approximately {materials[sel].saving}% of the energy needed to produce it from virgin raw materials. {materials[sel].name === "Aluminium" ? "Aluminium smelting from bauxite uses electrolysis, which is extremely energy-intensive. Melting recycled aluminium needs only a fraction of that energy." : materials[sel].name === "Glass" ? "Glass melting from sand requires less electrochemical processing than aluminium, so the energy saving from recycling is smaller in comparison." : ""}
        </Callout>
      )}
    </Interactive>
  );
}

/* ============================================================
   SECTION 4
   ============================================================ */
function Section4({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">4.4 Alternative Resource Use and Recycling</div>
        <h1>Pollution, Resources, and Recycling</h1>
        <p className="lead">From eutrophication to enzyme-powered recycling, science is reshaping how we handle pollution and waste.</p>
      </div>

      <Figure src="img/waste-hierarchy.png" caption="The waste hierarchy, from most preferred (reduce) to least (dispose)." />
      <DotPoint id="4.4.1" title="Describe the causes of environmental pollution and discuss its implications" progress={progress} setProgress={setProgress}>
        <p>
          <Term def="The introduction of substances into the natural environment at concentrations or rates that cause harmful effects on living organisms, ecosystems, or human health.">Environmental pollution</Term> occurs in air, water, and soil. Air pollution from burning fossil fuels produces <Term def="Sulfur dioxide, a gas produced by burning coal and smelting metals that reacts with water vapour to form acid rain.">sulfur dioxide (SO2)</Term>, nitrogen oxides (NOx), and <Term def="Fine particulate matter smaller than 2.5 micrometres that penetrates deep into the lungs and causes cardiovascular and respiratory disease.">PM2.5</Term>. Water pollution comes from agricultural runoff containing fertilisers and pesticides, industrial discharge of heavy metals, sewage, and plastic waste. Soil contamination results from industrial spills, mining waste, and landfill leachate.
        </p>
        <p>
          The implications are wide-ranging. <Term def="The over-enrichment of a water body with nutrients (usually nitrogen and phosphorus from fertiliser runoff), causing algal blooms that deplete oxygen and kill aquatic life.">Eutrophication</Term> of waterways from nitrogen runoff causes algal blooms, oxygen depletion, and fish kills. <Term def="Acidic precipitation formed when SO2 and NOx react with water vapour in the atmosphere to produce sulfuric and nitric acid.">Acid rain</Term> damages forests and acidifies lakes. Heavy metals such as lead and mercury <Term def="The accumulation of a substance in organisms at increasing concentrations through successive levels of a food chain.">bioaccumulate</Term> in food chains. <Term def="Tiny plastic particles less than 5 mm in diameter, produced by fragmentation of larger plastic items or released directly from cosmetics and synthetic textiles.">Microplastics</Term> are now found in marine organisms at every trophic level.
        </p>
        <PollutionChain />
        <QGroup title="Check yourself">
          <MCQ num={1} question="What is eutrophication?" options={["Acidification of rainwater by SO2 and NOx","Over-enrichment of water with nutrients causing algal blooms and oxygen depletion","Bioaccumulation of heavy metals in food chains","Particulate matter settling into waterways"]} correct={1} explain="Eutrophication is the over-enrichment of a water body with nutrients, usually from agricultural fertiliser runoff, causing rapid algal growth. When algae die, decomposing bacteria deplete dissolved oxygen, causing fish kills." />
          <WrittenQ num={2} question="Explain how acid rain forms and describe two types of damage it causes." model="Acid rain forms when SO2 and NOx from burning fossil fuels react with water vapour, oxygen, and other chemicals in the atmosphere to form sulfuric acid and nitric acid. This falls as acidic rain or dry deposition. It damages conifer forests by leaching nutrients from soil and damaging leaf surfaces. It also acidifies lakes and rivers, reducing pH to levels that kill fish and aquatic invertebrates." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.4.2" title="Research how Aboriginal and Torres Strait Islander Peoples have developed sustainable harvesting practices" progress={progress} setProgress={setProgress}>
        <p>
          Aboriginal and Torres Strait Islander Peoples have lived in Australia for more than 65,000 years, developing detailed and sophisticated <Term def="The detailed long-term ecological understanding developed by Indigenous peoples through continuous observation and interaction with their environment over many generations.">Indigenous Ecological Knowledge (IEK)</Term> through continuous observation of the natural environment. This knowledge encompasses seasonal cycles, plant and animal behaviour, ecological relationships, and sustainable resource management. It is embedded in language, ceremony, cultural protocols, and law, and has been refined and transmitted across many generations.
        </p>
        <p>
          <Term def="The practice of using carefully timed, low-intensity fires to manage landscapes, developed and practised by Aboriginal peoples for tens of thousands of years. Also called cool burning or fire-stick farming.">Cultural burning</Term> is one of the most scientifically recognised examples. For tens of thousands of years, Aboriginal peoples used carefully timed, low-intensity burns to manage landscapes: clearing undergrowth, promoting food plants, creating <Term def="A landscape with patches at different stages of vegetation regrowth, created by mosaic burning, which supports greater biodiversity than uniform habitats.">habitat mosaics</Term> for biodiversity, and reducing fuel loads that would otherwise allow catastrophic wildfires. Modern fire scientists and land managers increasingly incorporate cultural burning alongside scientific fire management.
        </p>
        <p>
          Sea country management by Torres Strait Islander communities involves cultural protocols about when, where, and how much of a species may be harvested, based on population knowledge accumulated over generations. Research comparing sea country managed under traditional protocols with adjacent unmanaged areas has found higher fish and invertebrate biomass under traditional management, providing scientific validation of practices developed through millennia of ecological observation.
        </p>
        <Callout kind="key" title="IEK and sustainability principles">
          Cultural burning directly embodies intergenerational equity (practised for 65,000 years for future generations) and biodiversity conservation (habitat mosaics support greater species diversity than unmanaged land). IEK is not separate from science; it is a form of systematic, evidence-based knowledge accumulated over thousands of years.
        </Callout>
        <Interactive title="Indigenous Sustainable Practices" subtitle="Three key examples of Indigenous ecological knowledge applied to sustainable resource management.">
          <div className="grid-2" style={{ gap: 12 }}>
            {[
              { title: "Cultural Burning", icon: "🔥", body: "Low-intensity, timed burns managed biodiversity and reduced fuel loads for tens of thousands of years. Now being reintegrated into modern land management across Australia." },
              { title: "Sea Country Management", icon: "🌊", body: "Cultural protocols restrict when, where, and how much is harvested, protecting breeding populations. Research confirms higher fish biomass in traditionally managed areas." },
              { title: "Plant Harvesting Protocols", icon: "🌱", body: "Rules about seasons, quantities, and methods of gathering ensure plant populations are not depleted and ecosystems remain productive." },
              { title: "Caring for Country", icon: "🗺", body: "The obligation and practice of maintaining the physical and spiritual health of specific Country, aligning with goals of biodiversity conservation and sustainable resource use." },
            ].map(item => (
              <div key={item.title} style={{ background: "var(--surface-alt)", borderRadius: 10, padding: 14 }}>
                <p style={{ fontWeight: 700, marginBottom: 6 }}>{item.icon} {item.title}</p>
                <p style={{ fontSize: 13, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </Interactive>
        <QGroup title="Check yourself">
          <MCQ num={3} question="What is cultural burning?" options={["Burning fossil fuels as a cultural practice","Carefully timed, low-intensity burns used by Aboriginal peoples to manage landscapes for tens of thousands of years","Industrial burning of waste materials in remote areas","A ceremonial fire used during seasonal festivals"]} correct={1} explain="Cultural burning (also called cool burning or fire-stick farming) is the use of carefully timed, low-intensity fires to manage landscapes, a practice developed and refined by Aboriginal peoples over tens of thousands of years." />
          <WrittenQ num={4} question="Explain why it is important to respect Indigenous cultural sovereignty when IEK is used in scientific or land management contexts." model="IEK belongs to the communities that developed it and is linked to specific Country, spiritual obligations, and cultural identity. Using IEK without proper acknowledgement, consent, and benefit-sharing arrangements constitutes cultural appropriation. Proper protocols include seeking free, prior, and informed consent; acknowledging the source community; ensuring benefits flow back to knowledge holders; and respecting restrictions on what knowledge can be shared publicly. Respectful engagement builds trust, enables genuine collaboration, and ensures IEK is used in ways that strengthen rather than undermine Indigenous cultural authority." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.4.3" title="Discuss alternatives to current resource use, including how to reduce, reuse and recycle" progress={progress} setProgress={setProgress}>
        <p>
          The current global economic model is largely linear: raw materials are extracted, processed into products, used, and discarded as waste. This <Term def="A linear economic model in which raw materials are extracted, made into products, used, and discarded as waste. Unsustainable because it depends on continuous extraction of finite resources.">take-make-dispose</Term> model is unsustainable. Global material consumption has more than doubled since 1980. The <Term def="An economic model that keeps materials and products in use as long as possible through design for durability, repairability, and recyclability, minimising waste and reducing the need for new resource extraction.">circular economy</Term> aims to keep materials in use indefinitely by redesigning products for durability and recyclability.
        </p>
        <p>
          The <Term def="A framework prioritising actions to reduce waste's environmental impact: reduce (most preferred), reuse, recycle, recover energy, then dispose (least preferred).">waste hierarchy</Term> guides decision-making. Reduce means using fewer materials and less energy in the first place. Reuse extends product life without reprocessing. Recycle recovers materials. Recover extracts energy from waste. Dispose (landfill) is the last resort. Each step up the hierarchy avoids more environmental impact than the step below, because it prevents impacts closer to the source.
        </p>
        <WasteHierarchyGame />
        <QGroup title="Check yourself">
          <MCQ num={5} question="Why is 'reduce' considered more beneficial than 'recycle' in the waste hierarchy?" options={["Reduce is easier for consumers","Reduce prevents the environmental impact of production in the first place, while recycling still uses energy and resources to reprocess materials","Recycled materials are always lower quality","Reduce applies only to packaging, while recycle applies to all materials"]} correct={1} explain="Reducing prevents the creation of the product and all its associated impacts from the start. Recycling still requires energy to collect, sort, transport, and reprocess materials, and not all materials are fully recovered. Reduce eliminates impacts at the source." />
          <WrittenQ num={6} question="Explain the difference between 'reuse' and 'recycle' and give one example of each." model="Reuse means using a product or component again without reprocessing it. The item keeps its form and no energy is needed to break it down and remake it (example: donating clothing to an op shop). Recycle means collecting used materials, breaking them down by melting, pulping, or chemical processing, and remaking them into new products (example: aluminium cans being melted and cast into new cans). Reuse requires less energy and fewer resources than recycling." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.4.4" title="Describe current processes for recycling materials" progress={progress} setProgress={setProgress}>
        <p>
          Recycling involves collecting used materials, processing them to remove contaminants, and remanufacturing into new products. All processes start with collection, sorting at a <Term def="A specialised plant that receives, sorts, and processes recyclable materials collected from households and businesses, using mechanical systems, magnetic separators, and optical sorters.">materials recovery facility (MRF)</Term>, cleaning, and reprocessing. <Term def="The presence of non-recyclable items or food-soiled materials in recycling bins, which can spoil entire batches of recyclable material and increase processing costs.">Contamination</Term> is a significant challenge.
        </p>
        <p>
          Aluminium is the most economically and environmentally valuable recycling stream. Recycling aluminium uses only about 5 percent of the energy needed to produce new aluminium from bauxite ore, making it 95 percent more energy-efficient. An aluminium can can be recycled and back on a supermarket shelf within 60 days. Paper recycling involves pulping in water, removing inks, and reforming fibres, though fibre length degrades with each cycle. Glass is crushed into <Term def="Crushed, cleaned recycled glass used as feedstock in furnaces; melts at lower temperature than virgin materials, saving energy.">cullet</Term>, melted, and reformed. Plastics are the most complex stream due to the many different polymer types that cannot be mixed.
        </p>
        <RecyclingEnergyComparison />
        <QGroup title="Check yourself">
          <MCQ num={7} question="Why is recycling aluminium particularly valuable compared to producing it from raw materials?" options={["Aluminium cans are the most common item in recycling bins","Recycling aluminium saves approximately 95% of the energy needed to smelt it from bauxite ore","Aluminium is the only metal that can be recycled indefinitely","Aluminium is the most abundant metal in Earth's crust"]} correct={1} explain="Aluminium smelting from bauxite uses energy-intensive electrolysis. Melting recycled aluminium requires only about 5% of that energy, saving approximately 95% of the energy and greatly reducing greenhouse gas emissions." />
          <WrittenQ num={8} question="Explain why recycling plastics is more complex than recycling aluminium or glass." model="There are dozens of different plastic types (PET, HDPE, PVC, LDPE, PP, PS etc) with different melting points, chemical properties, and recyclability. Mixing types produces poor-quality contaminated material. Unlike aluminium or glass, different plastics cannot be melted together usefully. Many plastic types have no recycling market or cannot be collected by kerbside programs. Plastics also degrade in quality with each recycling cycle (downcycling), unlike aluminium which can be recycled indefinitely." />
        </QGroup>
      </DotPoint>

      <DotPoint id="4.4.5" title="Investigate how scientists have developed innovative ways to recycle materials" progress={progress} setProgress={setProgress}>
        <p>
          Traditional mechanical recycling has limitations: it cannot process all materials, often produces lower quality output than virgin inputs, and cannot handle highly mixed or contaminated waste. Scientists are developing new approaches. <Term def="A recycling process that breaks plastic polymers into their constituent monomers or smaller molecules using heat, solvents, or catalysts, without the limitations of mechanical sorting.">Chemical recycling</Term> includes pyrolysis (heating mixed plastics without oxygen to produce oil and gas feedstocks) and depolymerisation (breaking PET back to its original monomers for virgin-quality output).
        </p>
        <p>
          Biological approaches include the use of <Term def="An enzyme discovered in 2016 in bacteria found at a Japanese plastic recycling facility, which naturally breaks down PET plastic. Engineered versions can do this much faster.">PETase</Term>, an enzyme that can break down PET plastic. Engineered PETase versions break down PET far faster than natural degradation and could enable industrial-scale enzymatic recycling that produces high-purity monomers. <Term def="The recovery of valuable metals (gold, silver, rare earth elements) from electronic waste using chemical processes. E-waste often contains metals at concentrations far exceeding natural ore grades.">Urban mining</Term> recovers gold, silver, copper, and rare earth elements from e-waste, with circuit boards containing 200 to 300 times more gold per tonne than natural ore.
        </p>
        <Callout kind="tip" title="Innovation does not replace reduction">
          Even the best recycling technology cannot achieve 100% recovery. Innovative recycling complements but does not replace the reduce and reuse steps at the top of the waste hierarchy. If chemical recycling is used to justify continued single-use plastic production, total plastic waste may still increase.
        </Callout>
        <Interactive title="Innovative Recycling: Comparison" subtitle="Four emerging technologies that go beyond conventional mechanical recycling.">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { name: "Chemical Recycling (Pyrolysis)", detail: "Heats mixed plastics at 300 to 700 C without oxygen. Breaks polymers into oil and gas. Can handle contaminated, mixed plastics that cannot be mechanically recycled. Products used as fuel or feedstocks for new plastic." },
              { name: "Enzymatic Recycling (PETase)", detail: "PETase enzyme discovered 2016 breaks PET back to monomers at near room temperature. Engineered versions are faster. Produces virgin-quality PET monomers with lower energy than pyrolysis." },
              { name: "Urban Mining (E-waste)", detail: "Circuit boards contain gold at 200 to 300 g/tonne versus 1 to 5 g/tonne in best gold ores. Chemical extraction recovers gold, silver, copper, and rare earth elements at higher efficiency than mining primary ores." },
              { name: "Textile-to-Fibre Recycling", detail: "Chemical dissolution breaks cotton or polyester fibres back to monomers. Enables true fibre-to-fibre recycling of clothing without quality loss, addressing the fashion industry's large waste problem." },
            ].map(item => (
              <details key={item.name} style={{ background: "var(--surface-alt)", borderRadius: 10, padding: "10px 14px" }}>
                <summary style={{ fontWeight: 700, cursor: "pointer" }}>{item.name}</summary>
                <p style={{ margin: "8px 0 0", fontSize: 14 }}>{item.detail}</p>
              </details>
            ))}
          </div>
        </Interactive>
        <QGroup title="Check yourself">
          <MCQ num={9} question="What is PETase and why is it scientifically significant?" options={["A chemical solvent for dissolving aluminium cans","An enzyme discovered in 2016 that naturally breaks down PET plastic, with engineered versions enabling potential industrial-scale enzymatic recycling","A type of plastic resin used in soft drink bottles","A catalyst used in pyrolysis to improve oil yield"]} correct={1} explain="PETase is an enzyme discovered in 2016 in bacteria at a Japanese recycling facility. It breaks down PET plastic. Engineered versions are faster and could enable industrial enzymatic recycling producing virgin-quality monomers." />
          <WrittenQ num={10} question="Explain why 'urban mining' of e-waste is described as more efficient than primary mining for some metals." model="Circuit boards from mobile phones may contain 200 to 300 g of gold per tonne and over 1 kg of silver per tonne, plus significant copper, palladium, and rare earth elements. By comparison, natural gold ore typically contains only 1 to 5 g per tonne. This means urban mining needs to process far less material to recover the same mass of metal, potentially using less energy and producing less waste than conventional mining." />
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ============================================================
   SECTION 5 INTERACTIVES
   ============================================================ */
function PlasticPathwayMap() {
  const [active, setActive] = useState(null);
  const nodes = [
    { id: 0, x: 60, y: 20, label: "Plastic\nProduction", icon: "🏭" },
    { id: 1, x: 60, y: 50, label: "Consumer\nUse", icon: "🛍" },
    { id: 2, x: 20, y: 75, label: "Landfill /\nLitter", icon: "🗑" },
    { id: 3, x: 60, y: 75, label: "Stormwater\nDrains", icon: "🌧" },
    { id: 4, x: 90, y: 65, label: "River\nRunoff", icon: "🌊" },
    { id: 5, x: 55, y: 90, label: "Ocean\nEntry", icon: "🌏" },
    { id: 6, x: 25, y: 90, label: "Microplastic\nFragmentation", icon: "🔬" },
    { id: 7, x: 75, y: 90, label: "Ocean\nAccumulation", icon: "🐋" },
  ];
  const edges = [[0,1],[1,2],[1,3],[1,4],[2,5],[3,5],[4,5],[5,6],[5,7]];
  const infos = [
    "Humans produce approximately 400 million tonnes of plastic each year globally.",
    "Single-use plastic is consumed and discarded within minutes to hours of manufacture.",
    "Inadequate waste management; littering; plastic blown from landfill sites near waterways.",
    "Urban plastic waste is carried via stormwater drains directly to rivers and the coast.",
    "Agricultural plastic, industrial packaging, and containers enter rivers as floodwater runoff.",
    "An estimated 8 to 14 million tonnes of plastic enters the ocean annually.",
    "UV, waves, and abrasion fragment plastic into microplastics under 5 mm and nanoplastics.",
    "Ocean gyres concentrate plastic into accumulation zones including the Great Pacific Garbage Patch."
  ];
  const W = 360, H = 220;
  return (
    <Interactive title="Marine Plastic Pollution Pathway" subtitle="Tap a node to explore how plastic travels from production to ocean accumulation.">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }}>
        {edges.map(([a, b]) => {
          const n1 = nodes[a], n2 = nodes[b];
          return <line key={`${a}-${b}`} x1={n1.x * W / 100} y1={n1.y * H / 100} x2={n2.x * W / 100} y2={n2.y * H / 100} stroke="var(--border)" strokeWidth={2} />;
        })}
        {nodes.map(n => {
          const cx = n.x * W / 100, cy = n.y * H / 100;
          const isActive = active === n.id;
          return (
            <g key={n.id} style={{ cursor: "pointer" }} onClick={() => setActive(active === n.id ? null : n.id)}>
              <circle cx={cx} cy={cy} r={18} fill={isActive ? "var(--accent)" : "var(--surface-alt)"} stroke="var(--accent)" strokeWidth={2} />
              <text x={cx} y={cy + 5} textAnchor="middle" fontSize={14}>{n.icon}</text>
              <text x={cx} y={cy + 26} textAnchor="middle" fontSize={9} fill="var(--muted)">{n.label.split("\n")[0]}</text>
            </g>
          );
        })}
      </svg>
      {active !== null && (
        <div style={{ background: "var(--surface-alt)", borderRadius: 10, padding: 14, marginTop: 8, borderLeft: "4px solid var(--accent)" }}>
          <p style={{ fontWeight: 700, marginBottom: 4 }}>{nodes[active].icon} {nodes[active].label.replace("\n", " ")}</p>
          <p style={{ margin: 0, fontSize: 14 }}>{infos[active]}</p>
        </div>
      )}
    </Interactive>
  );
}

function PlasticSolutionAnalyser() {
  const solutions = [
    {
      name: "Ban single-use plastics",
      env: 4, eco: 3, soc: 4, scale: 4,
      note: "Directly reduces one major plastic stream. Works best as part of a broader strategy."
    },
    {
      name: "Improve waste management",
      env: 5, eco: 3, soc: 4, scale: 5,
      note: "Addresses root cause of ocean entry, especially in rapidly industrialising regions. High impact."
    },
    {
      name: "Ocean cleanup (ships/booms)",
      env: 2, eco: 1, soc: 3, scale: 1,
      note: "Removes existing plastic but cannot keep pace with inputs. Very expensive. Cannot collect microplastics."
    },
    {
      name: "Extended producer responsibility",
      env: 4, eco: 4, soc: 3, scale: 4,
      note: "Makes manufacturers responsible for end-of-life management, incentivising better design."
    },
    {
      name: "International plastic treaty",
      env: 5, eco: 3, soc: 4, scale: 5,
      note: "Global coordination needed because plastic pollution crosses national borders. High potential impact."
    },
  ];
  const [sel, setSel] = useState(0);
  const s = solutions[sel];
  const cols = { 1: "#ef4444", 2: "#f97316", 3: "#eab308", 4: "#22c55e", 5: "#16a34a" };
  const ScoreDot = ({ v }) => (
    <div style={{ display: "flex", gap: 3 }}>
      {[1,2,3,4,5].map(i => <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: i <= v ? cols[v] : "var(--border)" }} />)}
    </div>
  );
  return (
    <Interactive title="Marine Plastic: Solution Analyser" subtitle="Select a solution strategy and see how it rates across four sustainability criteria.">
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {solutions.map((sol, i) => (
          <button key={i} onClick={() => setSel(i)}
            style={{ padding: "6px 12px", borderRadius: 8, border: "2px solid var(--accent)", cursor: "pointer",
              background: i === sel ? "var(--accent)" : "var(--surface)",
              color: i === sel ? "#fff" : "var(--ink)", fontWeight: 600, fontSize: 12 }}>
            {sol.name}
          </button>
        ))}
      </div>
      <div style={{ background: "var(--surface-alt)", borderRadius: 10, padding: 14 }}>
        <p style={{ margin: "0 0 12px", fontStyle: "italic", fontSize: 13 }}>{s.note}</p>
        {[["Environmental Effectiveness", s.env], ["Economic Viability", s.eco], ["Social Acceptability", s.soc], ["Scalability", s.scale]].map(([label, val]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontWeight: 600, fontSize: 14 }}>{label}</span>
            <ScoreDot v={val} />
          </div>
        ))}
      </div>
    </Interactive>
  );
}

/* ============================================================
   SECTION 5
   ============================================================ */
function Section5({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">4.5 Environmental Sustainability in Context</div>
        <h1>Marine Plastic Pollution: A Case Study</h1>
        <p className="lead">Plastic in the ocean is one of the clearest examples of human activity driving a measurable environmental crisis, and one that science can help us solve.</p>
      </div>

      <Figure src="img/marine-plastic.png" caption="Marine plastic pollution threatens ocean life such as sea turtles." />
      <DotPoint id="4.5.1" title="Discuss the link between human activity and one specific environmental pollution concern" progress={progress} setProgress={setProgress}>
        <p>
          Humans produce approximately 400 million tonnes of plastic each year globally, of which an estimated 8 to 14 million tonnes enters the ocean annually. The primary human activities responsible include single-use plastic production and consumption, inadequate waste management (uncollected plastic, landfill near waterways, stormwater drains), industrial <Term def="Small pre-production plastic pellets about 3 to 5 mm in diameter used as feedstock for manufacturing plastic products. Spilled during transport, they are mistaken for food by marine wildlife.">nurdle</Term> spillage, and the washing of synthetic textiles which releases <Term def="Plastic fibres under 5 mm shed from synthetic clothing during washing, which pass through wastewater treatment and enter waterways.">microplastic fibres</Term> into wastewater.
        </p>
        <p>
          Once in the ocean, plastics do not biodegrade. Instead they fragment progressively into <Term def="Plastic particles less than 5 mm in diameter formed by the fragmentation of larger plastic items under UV radiation, waves, and abrasion.">microplastics</Term> and <Term def="Plastic particles less than 1 micrometre in diameter, formed by further fragmentation of microplastics.">nanoplastics</Term> under UV radiation, waves, and abrasion. Ocean gyres concentrate floating debris into accumulation zones. The <Term def="A large region of elevated plastic concentration in the North Pacific Ocean, approximately 1.6 million km2, formed by ocean gyres concentrating floating debris.">Great Pacific Garbage Patch</Term> is the most well-known, estimated at approximately 1.6 million km2. Marine animals at all levels are affected: sea turtles mistake bags for jellyfish; seabirds feed plastic to chicks; whales and whale sharks ingest microplastics while filter-feeding. Entanglement in discarded fishing nets and plastic bands injures or kills dolphins, seals, and turtles.
        </p>
        <PlasticPathwayMap />
        <p>
          Scientists have established the link through multiple lines of evidence. Chemical analysis of plastic debris identifies polymer type, manufacturing additives, and geographic origin. Beach and ocean surveys by organisations such as CSIRO document quantities and types of plastic. Ingestion studies on seabirds, fish, and marine mammals demonstrate direct transfer from environment to wildlife tissue. Mass balance modelling estimates global plastic flows.
        </p>
        <p>
          Addressing marine plastic pollution requires action at multiple points: reducing single-use plastic production; improving waste collection globally; redesigning plastics to be more recyclable; <Term def="A policy framework making manufacturers financially responsible for the end-of-life collection and recycling of their products, incentivising better design.">extended producer responsibility (EPR)</Term> schemes; and international agreements for coordinated global action.
        </p>
        <PlasticSolutionAnalyser />
        <Callout kind="key" title="Prevention beats cleanup">
          Ocean cleanup removes plastic already distributed across vast ocean areas, but cannot keep pace with new inputs or collect microplastics. Reducing production and improving waste management at the source is far more effective at solving the root cause.
        </Callout>
        <QGroup title="Check yourself">
          <MCQ num={1} question="Approximately how many million tonnes of plastic enter the ocean each year?" options={["1 to 2 million","8 to 14 million","50 to 80 million","200 to 300 million"]} correct={1} explain="An estimated 8 to 14 million tonnes of plastic enters the ocean annually from various human activities." />
          <MCQ num={2} question="Why is ocean cleanup considered less effective than reducing plastic production at the source?" options={["Ocean cleanup ships produce too many greenhouse gases","Most plastic sinks to the ocean floor immediately","Cleanup only addresses plastic already in the ocean, cannot keep pace with ongoing inputs, and cannot collect microplastics","Ocean cleanup is too expensive for any government to fund"]} correct={2} explain="Ocean cleanup addresses the symptom, not the cause. New plastic enters faster than it can be removed, and once plastic fragments into microplastics, it cannot be collected. Prevention at the source eliminates the problem before it enters the ocean pathway." />
          <WrittenQ num={3} question="Using the causal pathway, explain why improving waste management infrastructure in rapidly industrialising regions is considered a high-priority solution to marine plastic pollution." model="The causal pathway shows that plastic must pass through multiple stages before reaching the ocean, including inadequate disposal, transport via stormwater and rivers, and ocean entry. Improving waste collection and management intercepts plastic early in the pathway before it enters waterways. Regions with high plastic production and poor waste collection are the main sources of ocean plastic inputs according to mass balance modelling. Addressing waste management at this stage prevents vast quantities of plastic from ever reaching the ocean, making it a high-impact, scalable solution." />
          <WrittenQ num={4} question="Evaluate a proposed ban on single-use plastic bags using at least three sustainability solution criteria." model="Environmental effectiveness: directly reduces one major plastic stream; bag litter measurably declines. Score: good, though bags are a small fraction of total plastic by mass. Technical feasibility: alternatives such as reusable bags, paper bags, and compostable bags are commercially available. Score: high. Social acceptability: initial resistance from consumers; quickly normalised as seen in South Australia, Ireland, and the UK. Score: good after transition. Unintended consequences: thicker plastic bags may be classified as reusable but often are not; cotton totes have high water footprints if not used many times. Score: requires monitoring. Overall: a justified and effective policy but must be part of a broader strategy." />
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
  topicTitle: "Environmental Sustainability",
  heroImage: "img/hero.png",
  strand: "Stage 5 · NSW Science",
  accent: "green",
  storageKey: "y9.envsustainability",
  hubHref: "../",
  intro: "From the principles of sustainability to the science of climate change, from the water cycle to marine plastic pollution, this topic connects the systems that keep Earth liveable to the choices humans make every day. You will investigate real data, evaluate solutions, and build the scientific understanding needed to think clearly about the planet's future.",
  glossary: {
    "sustainability": "Meeting the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland, 1987).",
    "precautionary principle": "Taking protective measures to prevent environmental harm even when scientific evidence is not yet fully established.",
    "intergenerational equity": "The principle that the current generation must not use resources at a rate that prevents future generations from meeting their own needs.",
    "circular economy": "An economic model that keeps materials and products in use as long as possible through design for durability, repairability, and recyclability.",
    "waste hierarchy": "A framework ordering waste management strategies from most preferred (reduce) to least preferred (dispose), based on environmental impact.",
    "greenhouse gas": "A gas that absorbs and re-emits infrared radiation, warming Earth's surface. Includes water vapour, CO2, methane, nitrous oxide, and ozone.",
    "enhanced greenhouse effect": "The intensification of natural greenhouse warming caused by human activities increasing greenhouse gas concentrations beyond their natural levels.",
    "climate": "The long-term average pattern of weather conditions for a region, calculated over at least 30 years.",
    "weather": "The short-term atmospheric conditions at a specific place and time, including temperature, rainfall, wind, and cloud cover.",
    "polar amplification": "The phenomenon where polar regions warm two to four times faster than the global average due to feedback mechanisms.",
    "temperature anomaly": "The difference between a measured temperature and the long-term average (baseline) for that period.",
    "ocean acidification": "The reduction in ocean pH caused by CO2 dissolving in seawater to form carbonic acid, harming organisms that build calcium carbonate shells.",
    "eutrophication": "The over-enrichment of a water body with nutrients (usually nitrogen and phosphorus from fertiliser runoff), causing algal blooms and oxygen depletion.",
    "microplastics": "Plastic particles less than 5 mm in diameter, formed by fragmentation of larger plastics or released directly from cosmetics and synthetic textiles.",
    "permafrost": "Permanently frozen ground in Arctic and sub-Arctic regions that, when thawed, releases stored carbon as CO2 and methane.",
    "zooxanthellae": "Microscopic photosynthetic algae living in coral tissue that provide up to 90% of coral energy and give coral its colour.",
    "coral bleaching": "Mass expulsion of zooxanthellae from coral tissue when ocean temperature rises 1 to 2 C above seasonal maxima for several weeks, turning coral white.",
    "Indigenous Ecological Knowledge (IEK)": "The detailed, long-term ecological understanding developed by Indigenous peoples through continuous observation and interaction with their environment across generations.",
    "cultural burning": "The practice of using carefully timed, low-intensity fires to manage landscapes, developed and practised by Aboriginal Australians for tens of thousands of years.",
    "carbon capture and storage (CCS)": "Technology that captures CO2 from industrial exhaust gases or directly from the air and stores it permanently underground in geological formations.",
    "urban mining": "The recovery of valuable metals and materials from electronic waste using chemical processes, taking advantage of high metal concentrations in e-waste.",
    "PETase": "An enzyme discovered in 2016 that naturally breaks down PET plastic; engineered versions can enable industrial-scale enzymatic recycling.",
    "drip irrigation": "A method delivering water directly to plant roots through small tubes, reducing evaporation and runoff by up to 50% compared with flood irrigation.",
    "extended producer responsibility (EPR)": "A policy framework making manufacturers financially responsible for end-of-life collection and recycling of their products.",
    "NDVI": "Normalised Difference Vegetation Index, a satellite-derived measure of vegetation health using near-infrared and visible light reflectance.",
    "radar altimetry": "A satellite technique that measures ocean surface height by timing radar pulse return, detecting sea level change to within about 1 centimetre.",
    "nurdle": "A small pre-production plastic pellet used as feedstock for manufacturing plastic products. Accidental spills release them into waterways where wildlife mistakes them for food.",
    "pyrolysis": "Heating plastics at high temperatures without oxygen to break polymer chains into oil and gas that can be used as fuel or feedstocks for new plastics.",
  },
  sections: [
    {
      id: "4.1",
      label: "Sustainability",
      accent: "green",
      blurb: "Principles, goals, and scientific problem-solving for a sustainable future.",
      points: ["4.1.1", "4.1.2"],
      render: (p) => <Section1 {...p} />
    },
    {
      id: "4.2",
      label: "Climate Science",
      accent: "teal",
      blurb: "Weather, climate, greenhouse effect, global warming, and emission reduction.",
      points: ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6"],
      render: (p) => <Section2 {...p} />
    },
    {
      id: "4.3",
      label: "Climate Impacts",
      accent: "blue",
      blurb: "Consequences of climate change for water, ecosystems, and communities.",
      points: ["4.3.1", "4.3.2", "4.3.3", "4.3.4"],
      render: (p) => <Section3 {...p} />
    },
    {
      id: "4.4",
      label: "Resources and Recycling",
      accent: "amber",
      blurb: "Pollution, Indigenous ecological knowledge, the waste hierarchy, and innovative recycling.",
      points: ["4.4.1", "4.4.2", "4.4.3", "4.4.4", "4.4.5"],
      render: (p) => <Section4 {...p} />
    },
    {
      id: "4.5",
      label: "In Context",
      accent: "cyan",
      blurb: "Marine plastic pollution as a case study linking human activity to ecosystem harm.",
      points: ["4.5.1"],
      render: (p) => <Section5 {...p} />
    },
  ],
});
