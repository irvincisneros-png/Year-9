/* global React */
const GLOSSARY = {
  "homeostasis": "The maintenance of stable internal conditions in an organism.",
  "stimulus": "A detectable change in the environment.",
  "receptor": "A structure (cell or molecule) that detects a stimulus.",
  "effector": "A muscle or gland that carries out the body's response.",
  "feedback loop": "A system that uses the result of a change to control that same change.",
  "negative feedback": "A loop that reverses a change to restore stable conditions. Dominant in the body.",
  "positive feedback": "A loop that amplifies a change — used to drive a process to completion (e.g. blood clotting).",
  "nervous system": "Neurons carrying fast electrical signals between brain, spinal cord and body.",
  "endocrine system": "Glands releasing chemical hormones into the bloodstream.",
  "hormone": "A chemical messenger released into the blood by an endocrine gland.",
  "reflex": "A rapid, automatic response to a stimulus that doesn't require conscious thought.",
  "pathogen": "An organism or virus that can cause disease (bacterium, virus, fungus, protozoan, parasite).",
  "infectious disease": "A disease caused by a pathogen that can spread between hosts.",
  "non-infectious disease": "A disease not caused by a pathogen; cannot be passed between people.",
  "bacteria": "Single-celled living organisms; some cause disease.",
  "virus": "A non-cellular infectious agent that requires a host cell to reproduce.",
  "endemic": "A disease constantly present in a population at a low level.",
  "epidemic": "A sudden, larger-than-expected increase in cases of a disease in a region.",
  "pandemic": "An epidemic that spreads across many countries or continents.",
  "incidence": "The number of new cases of a disease in a period of time.",
  "prevalence": "The total number of existing cases of a disease at one time.",
  "antibody": "A Y-shaped protein made by B-cells that binds specifically to an antigen.",
  "antigen": "A molecule (often on a pathogen) that the immune system recognises as non-self.",
  "antibiotic": "A medicine that kills bacteria or slows their growth. Does not work on viruses.",
  "b-cell": "A white blood cell that produces antibodies.",
  "t-cell": "A white blood cell that helps coordinate the immune response or kills infected cells.",
  "memory cell": "A long-lived B- or T-cell that remembers a pathogen for a fast response on re-exposure.",
  "phagocyte": "A white blood cell that engulfs and digests pathogens.",
  "vaccine": "A preparation that stimulates the immune system to develop immunity to a specific pathogen.",
  "herd immunity": "Indirect protection when a high proportion of a population is immune.",
  "vector": "An organism (often an insect) that transmits a pathogen from one host to another.",
  "chronic disease": "A long-lasting, non-infectious disease.",
  "cilia": "Tiny hair-like projections on cells lining the airways that sweep mucus out.",
  "lymphocyte": "A white blood cell (B-cell or T-cell) involved in specific immunity.",
  "adaptive immunity": "The specific immune response involving B- and T-cells that targets a specific pathogen and remembers it.",
  "innate immunity": "The body's general, rapid response to any pathogen (inflammation, phagocytes, fever).",
};

function G({ term, children }) {
  const [pos, setPos] = useState(null);
  const ref = useRef(null);
  const key = (children || term).toString().toLowerCase();
  const def = GLOSSARY[key] || GLOSSARY[term?.toLowerCase()] || "";
  const onEnter = () => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: r.left + r.width / 2, y: r.top - 8 });
  };
  const onLeave = () => setPos(null);
  return (
    <>
      <span ref={ref} className="gloss" tabIndex={0}
        onMouseEnter={onEnter} onMouseLeave={onLeave}
        onFocus={onEnter} onBlur={onLeave}>
        {children || term}
      </span>
      {pos && def && (
        <div className="gloss-tooltip" style={{left: pos.x, top: pos.y, transform: "translate(-50%, -100%)"}}>
          <strong style={{textTransform:"capitalize"}}>{term || children}</strong> — {def}
        </div>
      )}
    </>
  );
}

window.G = G;
window.GLOSSARY = GLOSSARY;
