/* Topic 2.4 Disease in context */
function Topic24({ progress, setProgress }) {
  const items = [
    { id:"2.4.1", title:"Research developments in understanding diseases that have been made by Australians" },
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
    <div data-topic="2.4">
      <div className="hero">
        <div className="hero-eyebrow">Sub-topic 2.4</div>
        <h1>Disease in context</h1>
        <p className="hero-lede">Australian researchers have made discoveries that changed global medicine — from the cause of stomach ulcers to one of the most widely used cancer vaccines in the world. This section is about the people, the evidence and the impact.</p>
      </div>

      <SubNav items={items} progress={progress} activeId={active} />

      <DotPoint id="2.4.1" title={items[0].title} progress={progress} setProgress={setProgress}>
        <p>Science is a human activity. Australian researchers have been behind several transformational discoveries — often by challenging accepted wisdom and following the evidence.</p>

        <Interactive title="Australian medical innovations explorer" subtitle="Click any card to read the full story.">
          <AusInnovations />
        </Interactive>

        <div className="callout"><strong>Research task:</strong> choose one Australian contribution to understanding or treating disease. Produce a 400–600 word scientific biography covering: the problem, the person(s), the evidence they gathered, how the discovery was received, and its impact today. Cite at least three sources.</div>

        <Questions title="2.4.1">
          <MCQ num="C1" question="Which Australians won a Nobel Prize for showing that a bacterium (H. pylori) causes most stomach ulcers?" correct={2}
            options={["Frank Fenner & Macfarlane Burnet","Ian Frazer & Jian Zhou","Barry Marshall & Robin Warren","Howard Florey & Ernst Chain"]}
            explain="Marshall and Warren won the 2005 Nobel Prize in Physiology or Medicine. Marshall famously drank a culture of H. pylori himself to prove the link."/>
          <MCQ num="C2" question="Which cancer does the HPV vaccine (Gardasil) mainly prevent?" correct={1}
            options={["Lung cancer","Cervical cancer","Skin cancer","Stomach cancer"]}
            explain="HPV causes most cervical cancers. The Gardasil vaccine, co-invented by Ian Frazer and Jian Zhou at UQ, has dramatically reduced rates worldwide."/>
          <WrittenQ num="A1" question="Why was Marshall's discovery initially rejected by the medical community?"
            model="The accepted view was that stomach ulcers were caused by stress and diet, and that no bacterium could survive in stomach acid. Marshall and Warren's idea contradicted both. It took years — and Marshall drinking a dose of H. pylori to give himself gastritis — before the mainstream accepted the evidence. It's a classic example of how scientific consensus updates: slowly, but in response to reproducible evidence."/>
          <WrittenQ num="R1" question="Research: choose one Australian researcher listed in the explorer (or find another) and write a 200-word summary of their work and why it matters."
            model="Good answers name the person, the specific problem they worked on, their key method or evidence, when the work happened, and one concrete impact it has today (lives saved, a vaccine used, a treatment that exists because of them)."/>
        </Questions>
      </DotPoint>
    </div>
  );
}
window.Topic24 = Topic24;
