/* Topic 2.3 Disease control and prevention */
function Topic23({ progress, setProgress }) {
  const items = [
    { id:"2.3.1", title:"Describe ways to reduce the incidence of non-infectious diseases" },
    { id:"2.3.2", title:"Assess ways to reduce the incidence and spread of infectious diseases" },
    { id:"2.3.3", title:"Investigate Aboriginal and/or Torres Strait Islander Peoples' use of plants to prevent or control disease" },
    { id:"2.3.4", title:"Analyse data about immunisation programs and the occurrence of infectious diseases" },
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
    <div data-topic="2.3">
      <div className="hero">
        <div className="hero-eyebrow">Sub-topic 2.3</div>
        <h1>Disease control & prevention</h1>
        <p className="hero-lede">Preventing disease is almost always easier, cheaper and more effective than treating it. Individuals, governments, communities — and the long-established plant medicine knowledge of Aboriginal and Torres Strait Islander Peoples — all play a role.</p>
      </div>

      <SubNav items={items} progress={progress} activeId={active} />

      <DotPoint id="2.3.1" title={items[0].title} progress={progress} setProgress={setProgress}>
        <p>Around half the risk of the most common chronic diseases in Australia is linked to modifiable lifestyle factors. Genetic factors can't be changed; lifestyle and environmental ones can.</p>
        <h3>Individual action</h3>
        <ul>
          <li><strong>Eat a balanced diet</strong> — vegetables, fruit, wholegrains; limit saturated fat, sugar, salt.</li>
          <li><strong>Be active</strong> — Australian guidelines: ≥60 min moderate-vigorous activity per day for teens.</li>
          <li><strong>Avoid tobacco</strong> — smoking is the single largest preventable cause of disease in Australia.</li>
          <li><strong>Limit alcohol</strong> — none for under-18s; ≤10 standard drinks/week for adults.</li>
          <li><strong>Protect skin from UV</strong> — hat, SPF 50+, shade, clothing.</li>
          <li><strong>Manage stress & sleep</strong>.</li>
          <li><strong>Regular health checks</strong> — early detection of BP, cholesterol, pre-cancerous changes.</li>
        </ul>
        <h3>Community & government action</h3>
        <ul>
          <li>Taxing tobacco & sugary drinks</li>
          <li>Food labelling (Health Star Rating)</li>
          <li>Campaigns (LiveLighter, Slip-Slop-Slap-Seek-Slide)</li>
          <li>Bike lanes, parks, safe footpaths</li>
          <li>Screening programs (BreastScreen, bowel, cervical)</li>
          <li>Banning harmful substances (asbestos, lead in paint)</li>
        </ul>

        <Questions title="2.3.1">
          <MCQ num="C1" question="Which is the single largest preventable cause of disease in Australia?" correct={1}
            options={["Inactivity","Smoking","Poor diet","UV exposure"]}
            explain="Smoking causes the greatest disease burden in Australia — heart disease, lung cancer, COPD, stroke."/>
          <WrittenQ num="A1" question="Justify the Australian government's heavy taxation of cigarettes."
            model="Smoking causes enormous preventable disease burden and health-system cost. Raising prices reduces uptake (especially in young people) and encourages quitting. Tax revenue can fund anti-smoking programs. Net public health and economic benefit."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.3.2" title={items[1].title} progress={progress} setProgress={setProgress}>
        <p>To reduce spread of an infectious disease we <strong>break the chain of infection</strong>. Different actions target different links.</p>

        <Interactive title="Break the chain of infection" subtitle="Click any link to break it. Breaking any one link stops the chain.">
          <ChainOfInfection />
        </Interactive>

        <div className="figure-row">
          <Figure num="2.11a" src="images/raw-17.jpg" alt="Break the chain of infection poster showing six prevention actions" caption="Each everyday action targets a different link in the chain. You don't have to stop all of them — breaking any one link stops the spread." />
          <Figure num="2.11b" src="images/raw-22.jpg" alt="Quarantine and isolation illustration with sick students going to an isolation area" caption="Quarantine and isolation remove infected or exposed people from the transmission pathway. A small cost to the individual for a much bigger benefit to the community." />
        </div>

        <h3>Layers of defence</h3>
        <ol>
          <li><strong>Personal hygiene</strong> — handwashing with soap (one of the most effective public-health measures ever).</li>
          <li><strong>Safe water & sanitation</strong> — prevented more disease than any medical treatment.</li>
          <li><strong>Safe food</strong> — refrigeration, cooking, handling rules.</li>
          <li><strong>Physical barriers</strong> — masks, gloves, mosquito nets.</li>
          <li><strong>Isolation & quarantine</strong>.</li>
          <li><strong>Vector control</strong> — spraying, draining standing water, repellent.</li>
          <li><strong>Vaccination</strong> — strongest long-term tool for most viral diseases.</li>
          <li><strong>Antibiotics & antivirals</strong> — but resistance is a growing problem.</li>
          <li><strong>Contact tracing & surveillance</strong>.</li>
        </ol>

        <div className="callout"><strong>Effectiveness depends on the disease.</strong> Masks help for droplet/airborne diseases but not mosquito-borne ones. Vaccines work brilliantly for stable viruses (measles) but less well for rapidly mutating ones (flu). Antibiotics kill bacteria but are useless against viruses — and overuse drives resistance.</div>

        <Questions title="2.3.2">
          <MCQ num="C1" question="Which measure would be MOST effective against malaria?" correct={2}
            options={["A mask","Handwashing","Vector control (mosquito nets, draining water)","An antibiotic"]}
            explain="Malaria is spread by mosquitoes — blocking the vector is the key intervention."/>
          <WrittenQ num="A1" question="Why is overuse of antibiotics dangerous for public health?"
            model="When antibiotics are overused, bacteria with resistant mutations survive and pass on resistance. Over time populations of resistant bacteria grow, and common infections become untreatable. Hospitals are particularly at risk of superbugs like MRSA."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.3.3" title={items[2].title} progress={progress} setProgress={setProgress}>
        <p>Aboriginal and Torres Strait Islander Peoples have lived continuously on this continent for at least <strong>65,000 years</strong>. Over that time, different Nations developed extensive and sophisticated knowledge of local plants and their medicinal uses. This knowledge is held by specific communities and passed down through generations — always name the specific Country and Peoples rather than referring to all Aboriginal and Torres Strait Islander Peoples as one group.</p>

        <div className="callout"><strong>A note on cultural knowledge.</strong> Much traditional medicinal knowledge — in particular the exact methods of preparation — remains the cultural intellectual property of the relevant Nation. The examples here include only information that has been publicly shared by Traditional Custodians or is documented in published sources. Deeper study should be led by Aboriginal and Torres Strait Islander voices.</div>

        <Interactive title="Bush medicine plants across Australia" subtitle="Click a pin or a plant name to explore.">
          <BushMedicineMap />
        </Interactive>

        <h3>What was special about this knowledge?</h3>
        <ul>
          <li><strong>Place-based</strong> — each Nation developed detailed knowledge of the plants of their own Country.</li>
          <li><strong>Holistic</strong> — 'medicine' often included food, song, ceremony and care for Country, not only a chemical effect.</li>
          <li><strong>Empirical</strong> — plants were selected and refined over many thousands of generations of observation.</li>
          <li>Many preparations have since been shown to contain genuinely active compounds — antimicrobial essential oils, anti-inflammatory saponins, wound-healing flavonoids.</li>
        </ul>

        <Questions title="2.3.3">
          <MCQ num="C1" question="Why is it important to name the specific Nation / Country when discussing traditional plant medicines?" correct={1}
            options={["Because each Nation owns all knowledge","Because knowledge is place-based and belongs to specific Peoples, not a single group","Because it makes the name easier to remember","Because scientists need to know the location"]}
            explain="Aboriginal and Torres Strait Islander Peoples are many distinct Nations with their own Countries and knowledge. Respectful practice names the specific Nation."/>
          <WrittenQ num="A1" question="Laboratory studies show that tea tree oil kills bacteria. Does this mean Bundjalung knowledge of tea tree is now 'scientific'?"
            model="Bundjalung knowledge of tea tree was already empirical — developed over thousands of generations of careful observation of what worked. Laboratory science has since confirmed one mechanism (terpinen-4-ol's antimicrobial action), but the knowledge didn't become valid by being verified in a lab — it was always valid. Western science and Bundjalung knowledge are different traditions that can sit alongside each other."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.3.4" title={items[3].title} progress={progress} setProgress={setProgress}>
        <p>Immunisation programs have transformed the pattern of infectious disease in Australia. Measles cases were very high before 1969, fell sharply after vaccination began, and dropped further once the MMR vaccine was added. High coverage (around 95% for two doses) is needed to stop the spread.</p>

        <Figure num="2.12" src="images/raw-24.jpg" alt="Stop Measles poster with vaccination and community protection" caption="Measles is one of the most contagious diseases known. Australia eliminated endemic measles in 2014, but outbreaks still happen when coverage falls below the herd-immunity threshold (~95%)." />

        <h3>How to analyse disease-and-vaccination data</h3>
        <ol>
          <li>Identify the variables (usually time on x-axis, cases and/or coverage on y-axis).</li>
          <li>Describe the trend in cases <em>before</em> the vaccine.</li>
          <li>Identify when vaccination was introduced.</li>
          <li>Describe what happens to cases <em>after</em>.</li>
          <li>Describe the relationship between coverage and cases.</li>
          <li>Look for brief case rises — often linked to drops in coverage.</li>
        </ol>

        <table className="data-table">
          <thead><tr><th>Disease</th><th>Before vaccination (Australia)</th><th>Now (Australia)</th></tr></thead>
          <tbody>
            <tr><td>Smallpox</td><td>Major epidemics 18–19th century</td><td>Eradicated globally (1980)</td></tr>
            <tr><td>Polio</td><td>Hundreds of cases/year, many paralytic</td><td>No locally acquired cases since 2000</td></tr>
            <tr><td>Measles</td><td>Tens of thousands of cases/year</td><td>&lt; 200 cases/year (mostly travel-linked)</td></tr>
            <tr><td>Diphtheria</td><td>A leading killer of children</td><td>&lt; 10 cases/year</td></tr>
            <tr><td>Whooping cough</td><td>Thousands of cases; infant deaths</td><td>Outbreaks in unvaccinated communities</td></tr>
          </tbody>
        </table>

        <div className="callout"><strong>Data task:</strong> write a 250–400 word scientific report using data from the Australian Immunisation Handbook or AIHW. Identify the disease, describe trends before and after vaccination, describe the coverage–cases relationship, explain using ideas from 2.2.7 and 2.3.2, and draw a clear conclusion.</div>

        <Questions title="2.3.4">
          <MCQ num="C1" question="What disease has been eradicated globally by vaccination?" correct={2}
            options={["Measles","Polio","Smallpox","Influenza"]}
            explain="Smallpox was declared eradicated by WHO in 1980 — the only human disease eradicated by vaccination so far."/>
          <WrittenQ num="A1" question="Predict what would happen if vaccination coverage in Australia fell to 50%. Justify."
            model="Herd immunity thresholds for most vaccine-preventable diseases are 75–95%. At 50% coverage, pathogens could circulate freely. Measles outbreaks would return (95% threshold); whooping cough deaths in infants would rise. Unvaccinated people and vulnerable groups (newborns, chemotherapy patients) would be at serious risk."/>
        </Questions>
      </DotPoint>
    </div>
  );
}
window.Topic23 = Topic23;
