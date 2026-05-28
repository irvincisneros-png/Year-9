/* Topic 2.2 Infectious and non-infectious diseases */
function Topic22({ progress, setProgress }) {
  const items = [
    { id:"2.2.1", title:"Distinguish between infectious and non-infectious diseases" },
    { id:"2.2.2", title:"Identify causes of non-infectious and infectious diseases" },
    { id:"2.2.3", title:"Compare the features and incidences of epidemics, endemics and pandemics" },
    { id:"2.2.4", title:"Investigate data relating to a common non-infectious disease affecting Australians today" },
    { id:"2.2.5", title:"Use modelling to investigate how infectious diseases can be spread" },
    { id:"2.2.6", title:"Identify how the body prevents the entry of pathogens and responds to those that enter" },
    { id:"2.2.7", title:"Outline how a vaccination stimulates the body to produce antibodies" },
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
    <div data-topic="2.2">
      <div className="hero">
        <div className="hero-eyebrow">Sub-topic 2.2</div>
        <h1>Infectious & non-infectious diseases</h1>
        <p className="hero-lede">A disease is any condition that stops the body from functioning normally. Some can be passed between people (infectious); others cannot. Both are major health problems, but they are caused, spread and prevented in different ways.</p>
      </div>

      <SubNav items={items} progress={progress} activeId={active} />

      <DotPoint id="2.2.1" title={items[0].title} progress={progress} setProgress={setProgress}>
        <p><G term="infectious disease">Infectious diseases</G> are caused by a <G term="pathogen">pathogen</G> — a living organism (or virus) that enters the body and causes harm. Because the pathogen can move to another person, infectious diseases can spread. Examples: influenza, COVID-19, chickenpox, tuberculosis, food poisoning.</p>
        <p><G term="non-infectious disease">Non-infectious diseases</G> are not caused by a pathogen and cannot be passed from person to person. They are caused by genetics, lifestyle, environment or age. Examples: type 2 diabetes, most cancers, cardiovascular disease, asthma, dementia. Also called <G term="chronic disease">chronic</G> or non-communicable diseases (NCDs).</p>

        <table className="data-table">
          <thead><tr><th>Feature</th><th>Infectious</th><th>Non-infectious</th></tr></thead>
          <tbody>
            <tr><td>Cause</td><td>Pathogen</td><td>Genetic, lifestyle, environment, age</td></tr>
            <tr><td>Contagious?</td><td>Yes</td><td>No</td></tr>
            <tr><td>Onset</td><td>Often sudden (hours–days)</td><td>Often slow (months–years)</td></tr>
            <tr><td>Duration</td><td>Short (days–weeks)</td><td>Long-term or lifelong</td></tr>
            <tr><td>Examples</td><td>Influenza, COVID-19, measles</td><td>Heart disease, type 2 diabetes, asthma</td></tr>
          </tbody>
        </table>

        <Interactive title="Pathogen sorter" subtitle="Drag each disease into the correct bucket (or click-then-click on mobile).">
          <PathogenSorter />
        </Interactive>

        <Figure num="2.7" src="images/raw-12.jpg" alt="Immune system illustration showing white blood cells, antibodies, T cells defending against germs" caption="The immune system as a defence team: white blood cells patrol for invaders, antibodies lock onto specific pathogens, and T cells coordinate the response. Non-infectious diseases sit outside this story — there is no pathogen to attack." />

        <Questions title="2.2.1">
          <MCQ num="C1" question="Which disease is INFECTIOUS?" correct={1}
            options={["Type 2 diabetes","Measles","Asthma","Dementia"]}
            explain="Measles is caused by the measles virus — a pathogen that spreads between people."/>
          <MCQ num="A1" question="Why do infectious diseases often appear suddenly?" correct={0}
            options={["The pathogen replicates rapidly once inside","They are always genetic","The immune system ignores them","They are caused by old age"]}
            explain="Pathogens reproduce quickly; symptoms appear once the pathogen population is large enough to cause damage."/>
          <WrittenQ num="A2" question="A student says 'all diseases can be caught from someone else.' Why is this wrong?"
            model="Non-infectious diseases like cancer, heart disease and asthma are not caused by a pathogen and cannot be passed between people. Many of the most common diseases in Australia are non-infectious."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.2.2" title={items[1].title} progress={progress} setProgress={setProgress}>
        <h3>Five main groups of pathogens</h3>
        <table className="data-table">
          <thead><tr><th>Pathogen</th><th>Living?</th><th>Example disease</th></tr></thead>
          <tbody>
            <tr><td><G term="bacteria">Bacteria</G></td><td>Living, single-celled</td><td>Tuberculosis, strep throat, Salmonella food poisoning</td></tr>
            <tr><td><G term="virus">Viruses</G></td><td>Non-living (need a host cell)</td><td>Influenza, COVID-19, measles, HIV</td></tr>
            <tr><td>Fungi</td><td>Living, uni/multicellular</td><td>Tinea, thrush, ringworm</td></tr>
            <tr><td>Protozoa</td><td>Living, single-celled</td><td>Malaria, giardia</td></tr>
            <tr><td>Parasitic worms</td><td>Living, multicellular</td><td>Tapeworm, hookworm</td></tr>
          </tbody>
        </table>

        <h3>Causes of non-infectious diseases</h3>
        <p>Non-infectious diseases have <strong>risk factors</strong> rather than a single cause — conditions that make a person more likely to develop the disease. Most have more than one.</p>
        <table className="data-table">
          <thead><tr><th>Category</th><th>Risk factors</th><th>Example diseases</th></tr></thead>
          <tbody>
            <tr><td>Genetic</td><td>Faulty gene, family history</td><td>Cystic fibrosis, haemophilia</td></tr>
            <tr><td>Lifestyle</td><td>Smoking, poor diet, inactivity, alcohol</td><td>Heart disease, type 2 diabetes, lung cancer</td></tr>
            <tr><td>Environmental</td><td>Air pollution, UV, chemicals</td><td>Skin cancer, asthma, mesothelioma</td></tr>
            <tr><td>Age / developmental</td><td>Ageing cells, hormonal change</td><td>Osteoporosis, dementia</td></tr>
            <tr><td>Nutritional</td><td>Missing nutrients</td><td>Anaemia, goitre, rickets</td></tr>
          </tbody>
        </table>

        <Questions title="2.2.2">
          <MCQ num="C1" question="Which pathogen group is NOT made of cells?" correct={1}
            options={["Bacteria","Viruses","Fungi","Protozoa"]}
            explain="Viruses are not cellular — they are just genetic material in a protein coat, needing a host cell to reproduce."/>
          <WrittenQ num="A1" question="Why are antibiotics useless against viruses?"
            model="Antibiotics target features of bacterial cells (cell walls, bacterial ribosomes, bacterial DNA replication). Viruses don't have these — they hijack the host's own cells. So antibiotics have nothing to attack on a virus."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.2.3" title={items[2].title} progress={progress} setProgress={setProgress}>
        <p>Three terms describe disease spread: <G term="endemic">endemic</G>, <G term="epidemic">epidemic</G>, <G term="pandemic">pandemic</G>. The same disease can be described differently depending on where and when you look — flu is <em>endemic</em> in Australia most years, <em>epidemic</em> in a bad winter, and was <em>pandemic</em> in 2009 (H1N1).</p>
        <p><strong><G term="incidence">Incidence</G></strong> = new cases in a period. <strong><G term="prevalence">Prevalence</G></strong> = total existing cases. HIV has low incidence but high prevalence because it lasts a long time.</p>

        <Interactive title="Endemic vs epidemic vs pandemic" subtitle="Watch the case curves evolve over time.">
          <EpidemicCurves />
        </Interactive>

        <Questions title="2.2.3">
          <MCQ num="C1" question="An endemic disease is:" correct={1}
            options={["A disease that has disappeared","Constantly present in a region at a low level","A sudden spike in cases","A disease that crosses continents"]}
            explain="Endemic = steady, constant presence in a population — like malaria in parts of sub-Saharan Africa."/>
          <MCQ num="A1" question="COVID-19 was declared a pandemic in March 2020 because:" correct={2}
            options={["It was very severe","It originated in Asia","It had spread across many countries and continents","It was caused by a new virus"]}
            explain="The defining feature of a pandemic is geographic spread across many countries/continents."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.2.4" title={items[3].title} progress={progress} setProgress={setProgress}>
        <p>Chronic diseases are responsible for roughly <strong>9 out of every 10 deaths</strong> in Australia (AIHW). The big four: cardiovascular disease, cancer, type 2 diabetes, chronic respiratory disease.</p>

        <h3>Case study: cardiovascular disease (CVD)</h3>
        <table className="data-table">
          <tbody>
            <tr><td>Proportion of Australian deaths</td><td>~1 in 4</td></tr>
            <tr><td>Australians living with CVD</td><td>~1.2 million</td></tr>
            <tr><td>Annual cost to health system</td><td>&gt; $12 billion</td></tr>
            <tr><td>Highest-risk age group</td><td>Over 65</td></tr>
            <tr><td>Modifiable risk factors</td><td>Smoking, BP, cholesterol, obesity, inactivity, diet</td></tr>
            <tr><td>Non-modifiable risk factors</td><td>Age, sex, family history</td></tr>
          </tbody>
        </table>

        <div className="callout"><strong>Data task:</strong> using AIHW (aihw.gov.au) or ABS (abs.gov.au), investigate one non-infectious disease. Collect: number affected, age group, risk factors, 20-year trend, personal risk reduction. Present as a one-page poster or infographic.</div>

        <Questions title="2.2.4">
          <MCQ num="C1" question="CVD stands for:" correct={1}
            options={["Coronary viral disease","Cardiovascular disease","Chronic venous disorder","Cell-vessel disease"]}
            explain="Cardiovascular disease — conditions of the heart and blood vessels."/>
          <WrittenQ num="A1" question="Explain the difference between modifiable and non-modifiable risk factors."
            model="Modifiable risk factors can be changed by an individual's behaviour (smoking, diet, exercise). Non-modifiable risk factors cannot be changed (age, sex, family history). Public health focuses on modifiable factors."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.2.5" title={items[4].title} progress={progress} setProgress={setProgress}>
        <h3>Modes of transmission</h3>
        <table className="data-table">
          <thead><tr><th>Mode</th><th>How it works</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>Droplet</td><td>Cough/sneeze droplets land on mucous membranes</td><td>Flu, COVID-19</td></tr>
            <tr><td>Airborne</td><td>Tiny particles remain in the air</td><td>TB, measles</td></tr>
            <tr><td>Direct contact</td><td>Skin-to-skin or fluid contact</td><td>Cold sores, Ebola</td></tr>
            <tr><td>Indirect (fomite)</td><td>Pathogen on a surface then touched</td><td>Gastro, flu</td></tr>
            <tr><td>Food / water</td><td>Contaminated food or water</td><td>Salmonella, cholera</td></tr>
            <tr><td>Vector-borne</td><td>Animal (often insect) carries pathogen</td><td>Malaria, dengue</td></tr>
            <tr><td>Mother to baby</td><td>Placenta, birth, breast milk</td><td>HIV, rubella</td></tr>
          </tbody>
        </table>

        <Interactive title="Practical 2.2.5 — Model a disease outbreak" subtitle="Like the NaOH-cup practical, but you can run it many times. Adjust vaccination and hygiene to see how spread changes.">
          <SpreadSim />
        </Interactive>

        <Questions title="2.2.5">
          <MCQ num="C1" question="A vector is:" correct={2}
            options={["A person who is immune","A surface that carries pathogens","An organism (often insect) that carries a pathogen","A type of antibody"]}
            explain="Vectors transport pathogens between hosts. Mosquitoes are the classic vector (malaria, dengue)."/>
          <WrittenQ num="A1" question="Explain why 'vaccinating' 25% of students in the spread model reduced spread even for unvaccinated students."
            model="Vaccinated people don't pass on the pathogen, breaking chains of transmission. Even unvaccinated students become less likely to contact an infected person — this is the beginning of herd immunity."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.2.6" title={items[5].title} progress={progress} setProgress={setProgress}>
        <p>The human body has <strong>three lines of defence</strong>. The first keeps pathogens out. The second responds fast but non-specifically if they get in. The third mounts a specific, targeted attack — and remembers.</p>

        <Interactive title="Three lines of defence" subtitle="Click each line to explore what's happening.">
          <ThreeLines />
        </Interactive>

        <Figure num="2.8" src="images/raw-19.jpg" alt="Phagocytosis diagram showing five steps: recognition, attachment, engulfment, digestion, elimination" caption="Phagocytosis — the second line of defence in action. A white blood cell recognises a pathogen, engulfs it, digests it with enzymes, and expels the waste. This happens without any knowledge of which pathogen it is." />

        <Questions title="2.2.6">
          <MCQ num="C1" question="Phagocytosis is:" correct={1}
            options={["The making of antibodies","White blood cells engulfing and digesting pathogens","A type of vaccine","The inflammation response"]}
            explain="Phagocytes (macrophages, neutrophils) engulf and digest pathogens. Part of the non-specific (second) line."/>
          <MCQ num="C2" question="What does a B-cell do?" correct={0}
            options={["Produces antibodies","Engulfs pathogens","Raises body temperature","Lines the airways"]}
            explain="B-cells produce antibodies — Y-shaped proteins that bind specifically to antigens."/>
          <WrittenQ num="A1" question="Why is swelling/redness/heat at a wound actually a sign the immune system is working?"
            model="These are signs of inflammation — the second line of defence. Blood vessels widen (redness, heat) and become leaky (swelling), letting immune cells into the area to destroy pathogens and repair damage."/>
        </Questions>
      </DotPoint>

      <DotPoint id="2.2.7" title={items[6].title} progress={progress} setProgress={setProgress}>
        <p>A <G term="vaccine">vaccine</G> contains a weakened, inactive or fragmentary form of a pathogen. The immune system mounts a full specific response and forms <G term="memory cell">memory cells</G>, but the person doesn't get sick.</p>

        <Interactive title="Primary vs secondary immune response" subtitle="Press play to see why the second response is much larger and faster.">
          <VaccineResponse />
        </Interactive>

        <Figure num="2.9" src="images/raw-14.jpg" alt="Nurse giving a vaccination with posters showing vaccines are safe and effective" caption="A vaccine is a controlled rehearsal — it gives the immune system a safe copy of the pathogen so it can build memory without you ever getting sick from the disease itself." />

        <h3>Types of vaccines</h3>
        <table className="data-table">
          <thead><tr><th>Type</th><th>What's in it</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>Live attenuated</td><td>Weakened pathogen</td><td>MMR</td></tr>
            <tr><td>Inactivated</td><td>Killed pathogen</td><td>Hepatitis A, rabies</td></tr>
            <tr><td>Subunit</td><td>Part of the pathogen</td><td>Hep B, HPV (Gardasil)</td></tr>
            <tr><td>mRNA</td><td>Instructions for body to build antigen</td><td>Pfizer & Moderna COVID vaccines</td></tr>
            <tr><td>Viral vector</td><td>Harmless virus carrying antigen gene</td><td>AstraZeneca COVID vaccine</td></tr>
          </tbody>
        </table>

        <Interactive title="Herd immunity simulator" subtitle="Try different vaccination rates for different diseases.">
          <HerdImmunity />
        </Interactive>

        <div className="figure-row">
          <Figure num="2.10a" src="images/raw-21.jpg" alt="Herd immunity poster showing a ring of vaccinated people protecting a baby" caption="Herd immunity: when enough of the surrounding population is immune, the pathogen cannot find enough susceptible hosts to spread. The vulnerable person in the middle is protected by the ring." />
          <Figure num="2.10b" src="images/raw-26.jpg" alt="Graph showing vaccination rate rising while disease rate falls over time" caption="The real-world evidence. As vaccination rate rises, the disease rate falls. This is the pattern seen for measles, polio, whooping cough and many others." />
        </div>

        <Questions title="2.2.7">
          <MCQ num="C1" question="Herd immunity means:" correct={2}
            options={["Only herd animals can be immune","Everyone must be vaccinated","When enough of a population is immune, even unvaccinated people are protected","A vaccine given to livestock"]}
            explain="When a high proportion is immune, the pathogen can't find enough hosts to spread — protecting people who can't be vaccinated."/>
          <WrittenQ num="A1" question="A friend says 'I don't need the flu shot — I never get sick.' Give two reasons why they should still get vaccinated."
            model="1) They could still catch and spread flu to vulnerable people (newborns, elderly, immunocompromised). 2) Past luck doesn't guarantee future immunity — flu strains change every year, and a severe season could still make them seriously ill."/>
        </Questions>
      </DotPoint>
    </div>
  );
}
window.Topic22 = Topic22;
