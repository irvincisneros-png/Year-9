/* Topic 2.1 Homeostasis */
function Topic21({ progress, setProgress }) {
  const items = [
    { id:"2.1.1", title:"Identify the importance of maintaining stable internal conditions in the body" },
    { id:"2.1.2", title:"Investigate examples of an organism's observable response to a stimulus" },
    { id:"2.1.3", title:"Identify the role of feedback loops in maintaining homeostasis" },
    { id:"2.1.4", title:"Compare and contrast the responses of the nervous and endocrine systems" },
    { id:"2.1.5", title:"Describe how the nervous and endocrine systems coordinate the body's response to stimuli" },
  ];
  const [active, setActive] = useState(items[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id.replace("dp-","")); });
    }, { rootMargin: "-100px 0px -60% 0px" });
    items.forEach(i => { const el = document.getElementById("dp-"+i.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div data-topic="2.1">
      <div className="hero">
        <div className="hero-eyebrow">Sub-topic 2.1</div>
        <h1>Homeostasis</h1>
        <p className="hero-lede">All living organisms must keep their internal conditions within a narrow range in order to survive. This section looks at how the body senses change, what it does about it, and which two control systems carry the signals.</p>
      </div>

      <SubNav items={items} progress={progress} activeId={active} />

      <DotPoint id="2.1.1" title={items[0].title} progress={progress} setProgress={setProgress}>
        <p>The cells of the human body are delicate chemical factories. The <G>enzymes</G> that drive metabolism only work within a narrow range of temperature and pH. If conditions drift too far from their set point, cells stop working and the organism can become very unwell, very quickly.</p>
        <p>The process of keeping internal conditions stable is called <G term="homeostasis">homeostasis</G> (from Greek <em>homios</em> — same, and <em>stasis</em> — standing still). 'Stable' doesn't mean 'never changing'; conditions always fluctuate a little. Homeostasis means the fluctuations stay within a safe range.</p>

        <h3>Key variables controlled by homeostasis</h3>
        <table className="data-table">
          <thead><tr><th>Variable</th><th>Set point</th><th>What happens if it drifts too far</th></tr></thead>
          <tbody>
            <tr><td>Core body temperature</td><td>~37 °C</td><td>&lt;35 °C: hypothermia. &gt;40 °C: enzymes denature, seizures.</td></tr>
            <tr><td>Blood glucose</td><td>4–8 mmol/L</td><td>Low: confusion, coma. High: thirst, long-term organ damage.</td></tr>
            <tr><td>Blood pH</td><td>7.35–7.45</td><td>Small changes disrupt enzymes; life-threatening below 6.9 or above 7.8.</td></tr>
            <tr><td>Water / salt balance</td><td>~60% body mass water</td><td>Dehydration or over-hydration can both be dangerous.</td></tr>
            <tr><td>Blood O₂ / CO₂</td><td>O₂ ≥ 95%</td><td>Low O₂: cells can't respire. High CO₂: blood acidic.</td></tr>
          </tbody>
        </table>

        <div className="callout"><strong>The big idea:</strong> every organ is working together to keep the internal environment constant enough for cells to survive. When this system breaks down, we call it a disease.</div>

        <Figure num="2.1" src="images/raw-01.jpg" alt="Homeostasis infographic showing body temperature, blood glucose and water balance regulation" caption="The body controls many variables at once — temperature, blood glucose, and water balance are three of the most important. Each has its own set point and its own correction mechanism, but they all share the same basic feedback-loop design." />

        <Questions title="2.1.1">
          <MCQ num="C1" question="Which best defines homeostasis?" correct={2}
            options={[
              "The body staying exactly the same at all times",
              "The body reacting only to external danger",
              "Maintaining stable internal conditions within a safe range",
              "The process of digesting food",
            ]}
            explain="Homeostasis means stable — not unchanging. Values fluctuate within a safe range."/>
          <MCQ num="C2" question="Normal core body temperature is approximately:" correct={1}
            options={["35 °C","37 °C","39 °C","41 °C"]}
            explain="37 °C is the set point; normal range is about 35.5–37.5 °C."/>
          <WrittenQ num="A1" question="A marathon runner's core temp rises to 38.5 °C during a race but returns to 37 °C overnight. Does this count as homeostasis?"
            model="Yes. Homeostasis means fluctuations return to the set point. Temperature rose briefly with exercise, then effectors (sweating, vasodilation) and rest brought it back — a successful negative feedback response."/>
          <WrittenQ num="R1" question="Research: name one disease that occurs when homeostasis fails (e.g. Type 1 diabetes, heat stroke). Describe the variable that is no longer being controlled."
            model="Type 1 diabetes: the pancreas stops producing insulin, so blood glucose is no longer controlled. Glucose stays high after meals, damaging blood vessels, kidneys and nerves over time."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.1.2" title={items[1].title} progress={progress} setProgress={setProgress}>
        <p>A <G term="stimulus">stimulus</G> is any detectable change in the environment. An organism's response is anything observable it does as a result. Both plants and animals respond to stimuli — plants more slowly.</p>
        <table className="data-table">
          <thead><tr><th>Stimulus</th><th>Receptor</th><th>Observable response</th></tr></thead>
          <tbody>
            <tr><td>Bright light</td><td>Photoreceptors in retina</td><td>Pupil constricts</td></tr>
            <tr><td>Loud sound</td><td>Hair cells in cochlea</td><td>Head turns; startle</td></tr>
            <tr><td>Cold air on skin</td><td>Thermoreceptors in skin</td><td>Shivering; goose bumps; vasoconstriction</td></tr>
            <tr><td>Pinprick</td><td>Nociceptors</td><td>Hand pulls away (reflex arc)</td></tr>
            <tr><td>Light on leaves (plant)</td><td>Phytochromes</td><td>Stem grows towards light (phototropism)</td></tr>
            <tr><td>Touch on Venus flytrap</td><td>Trigger hairs</td><td>Leaf snaps shut (thigmotropism)</td></tr>
          </tbody>
        </table>

        <h3>Reflexes vs. conscious responses</h3>
        <p>Some responses are <G term="reflex">reflexes</G>: fast, automatic, handled by the spinal cord — touching something sharp and pulling your hand away. Others are conscious: you see a ball coming and decide to catch it. Different pathways, both still triggered by a stimulus.</p>

        <Figure num="2.2" src="images/raw-02.jpg" alt="Two students doing the ruler-drop reaction-time experiment in a science lab" caption="The ruler-drop practical. A shorter catch distance means a faster reaction. The stimulus is seeing the ruler move; the receptor is the retina; the effector is the muscles of the hand." />

        <Interactive title="Practical 2.1.2 — Reaction time tester" subtitle="Measures your conscious response to a visual stimulus — just like the ruler-drop practical.">
          <ReactionTimer />
        </Interactive>

        <Questions title="2.1.2">
          <MCQ num="C1" question="A stimulus is best described as:" correct={1}
            options={["A muscle contraction","A detectable change in the environment","An organ that produces hormones","A disease"]}
            explain="A stimulus is any detectable environmental change — something a receptor can detect."/>
          <MCQ num="A1" question="Which is FASTER?" correct={0}
            options={["Reflex response (spinal cord)","Conscious response (brain)","They are identical","Conscious is always faster"]}
            explain="Reflexes skip the brain, so they're faster — the signal only travels to the spinal cord and back."/>
          <WrittenQ num="A2" question="A jellyfish has no brain, yet responds to touch. How is this possible?"
            model="Jellyfish have a nerve net — a diffuse network of nerve cells that can trigger muscle contraction in response to touch without needing a central brain. Simple reflex-like behaviour is possible with distributed nervous tissue."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.1.3" title={items[2].title} progress={progress} setProgress={setProgress}>
        <p>A <G term="feedback loop">feedback loop</G> uses information about the result of a change to adjust its behaviour. Almost every homeostatic process relies on one.</p>
        <h3>Negative feedback</h3>
        <p>In <G term="negative feedback">negative feedback</G>, a change away from the set point triggers a response that <strong>reverses</strong> the change. 'Negative' means 'opposing', not 'bad'. Negative feedback keeps variables stable: temperature, blood glucose, blood pressure, water balance.</p>
        <h3>Positive feedback</h3>
        <p>In <G term="positive feedback">positive feedback</G>, a change triggers a response that <strong>amplifies</strong> it. Rare in the body — used to drive a process to completion (blood clotting, childbirth contractions).</p>

        <div className="figure-row">
          <Figure num="2.3a" src="images/raw-03.jpg" alt="Negative feedback loop diagram with stimulus, receptor, control centre, effector, response, return to set point" caption="Negative feedback: the response reduces the original change. The body uses this to hold temperature, glucose and water balance near their set points." />
          <Figure num="2.3b" src="images/raw-04.jpg" alt="Positive feedback loop diagram using childbirth as an example" caption="Positive feedback: the response amplifies the original change. Rare in the body — used to drive processes like childbirth to completion." />
        </div>

        <Interactive title="Negative feedback simulator" subtitle="Change the ambient temperature and see the body defend 37 °C. Toggle homeostasis OFF to see what would happen without it.">
          <FeedbackLoopSim />
        </Interactive>

        <table className="data-table">
          <thead><tr><th>Feature</th><th>Negative feedback</th><th>Positive feedback</th></tr></thead>
          <tbody>
            <tr><td>Effect</td><td>Reverses the change</td><td>Amplifies the change</td></tr>
            <tr><td>Purpose</td><td>Restore stable conditions</td><td>Drive a process to completion</td></tr>
            <tr><td>Common?</td><td>Very common</td><td>Rare</td></tr>
            <tr><td>Example</td><td>Temperature regulation</td><td>Blood clotting, childbirth</td></tr>
          </tbody>
        </table>

        <Questions title="2.1.3">
          <MCQ num="C1" question="Negative feedback means:" correct={1}
            options={["A bad response","A response that opposes the change","A response that speeds up the change","Feedback from a disease"]}
            explain="Negative here means 'opposing'. A response opposes the change to restore stability."/>
          <MCQ num="A1" question="Why would it be DANGEROUS if body temperature used positive feedback?" correct={2}
            options={["Positive feedback is too slow","Positive feedback can't detect heat","Any small change would amplify until cells were destroyed","It would use too much energy"]}
            explain="Positive feedback amplifies the change. A small rise in temperature would spiral upward, denaturing enzymes and killing cells."/>
          <WrittenQ num="A2" question="A thermostat keeps a house at 22 °C. Identify the stimulus, receptor, control centre, effector and response."
            model="Stimulus: air drops below 22 °C. Receptor: thermometer inside thermostat. Control centre: thermostat's switching circuit. Effector: the heater. Response: heater turns on, warming air back to 22 °C."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.1.4" title={items[3].title} progress={progress} setProgress={setProgress}>
        <p>The body has two systems that carry signals from receptors to effectors: the <G term="nervous system">nervous system</G> and the <G term="endocrine system">endocrine system</G>. They work together but are very different.</p>

        <Figure num="2.4" src="images/raw-07.jpg" alt="Nervous system and endocrine system comparison poster" caption="Two communication networks running in parallel. The nervous system is the body's 'internet' — fast, electrical, dedicated wiring. The endocrine system is the body's 'mail service' — slower, chemical, delivered through the bloodstream." />

        <div className="grid grid-2">
          <div style={{padding:16,background:"var(--emerald-soft)",borderRadius:"var(--radius)",color:"var(--emerald-ink)"}}>
            <strong style={{fontSize:14}}>⚡ Nervous system</strong>
            <ul style={{margin:"8px 0 0",paddingLeft:18,fontSize:13,lineHeight:1.7}}>
              <li>Electrical signals (nerve impulses)</li>
              <li>Extremely fast — milliseconds</li>
              <li>Travels along dedicated 'wires' (neurons)</li>
              <li>Short-lived effect</li>
              <li>Reaches only the muscle/gland the nerve connects to</li>
            </ul>
          </div>
          <div style={{padding:16,background:"var(--orange-soft)",borderRadius:"var(--radius)",color:"var(--orange-ink)"}}>
            <strong style={{fontSize:14}}>🧪 Endocrine system</strong>
            <ul style={{margin:"8px 0 0",paddingLeft:18,fontSize:13,lineHeight:1.7}}>
              <li>Chemical signals (<G term="hormone">hormones</G>)</li>
              <li>Slower — seconds to hours</li>
              <li>Travels through the bloodstream</li>
              <li>Long-lasting effect</li>
              <li>Only cells with matching receptors respond</li>
            </ul>
          </div>
        </div>

        <Questions title="2.1.4">
          <MCQ num="C1" question="Which system uses chemical messengers?" correct={1}
            options={["Nervous system","Endocrine system","Digestive system","Both use chemicals equally"]}
            explain="Endocrine = chemicals (hormones) through the blood. Nervous = electrical signals through neurons."/>
          <MCQ num="A1" question="Hormones travel everywhere in the blood but only affect certain cells. Why?" correct={2}
            options={["The blood filters them out","Only some cells are alive","Only cells with matching receptors respond","Hormones disappear quickly"]}
            explain="Each hormone fits a specific receptor — like a key in a lock. Cells without the right receptor ignore the signal."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.1.5" title={items[4].title} progress={progress} setProgress={setProgress}>
        <p>The two systems rarely work alone. Nervous = fast initial response; endocrine = longer sustained response.</p>

        <h3>Worked example: fight-or-flight</h3>
        <p>A car swerves towards you. Your eyes signal your brain via the nervous system. Within a fraction of a second, motor neurons make your legs leap away (<strong>nervous</strong>). Simultaneously, the brain signals the adrenal glands to release <strong>adrenaline</strong> — heart beats faster, breathing speeds up, blood is diverted to muscles (<strong>endocrine</strong>). Immediate escape + sustained energy boost.</p>

        <Figure num="2.5" src="images/raw-09.jpg" alt="Fight or flight response diagram — threat, brain detects, adrenaline, body responses" caption="The fight-or-flight sequence. Nervous signals trigger instant responses (leaping out of the way). Endocrine signals — adrenaline — sustain the body in a heightened state for longer." />

        <h3>Worked example: blood glucose</h3>
        <p>After a meal, blood glucose rises. The pancreas (endocrine) releases <strong>insulin</strong>, telling cells to absorb glucose. Between meals, glucose drops; the pancreas releases <strong>glucagon</strong>, telling the liver to release stored glucose. The two hormones act as opposites, holding glucose in a safe range.</p>

        <Figure num="2.6" src="images/raw-08.jpg" alt="Thermoregulation diagram showing too hot and too cold responses meeting at set point" caption="Thermoregulation — two negative-feedback branches that both aim at the same 37 °C set point. Too hot: sweat + vasodilation. Too cold: shiver + vasoconstriction." />

        <Questions title="2.1.5">
          <MCQ num="C1" question="Which hormone is released when blood glucose is HIGH?" correct={0}
            options={["Insulin","Glucagon","Adrenaline","Thyroxine"]}
            explain="Insulin tells cells to absorb glucose and the liver to store it as glycogen, lowering blood glucose."/>
          <MCQ num="C2" question="Fight-or-flight hormone?" correct={2}
            options={["Insulin","Thyroxine","Adrenaline","Glucagon"]}
            explain="Adrenaline from the adrenal glands triggers the fight-or-flight response."/>
          <WrittenQ num="A1" question="Why wouldn't an endocrine-only response be fast enough to dodge a swerving car?"
            model="Endocrine responses take seconds to hours because hormones must travel through the bloodstream. Dodging a car needs a response in a fraction of a second — only the nervous system's electrical impulses are fast enough."/>
        </Questions>
      </DotPoint>
    </div>
  );
}
window.Topic21 = Topic21;
