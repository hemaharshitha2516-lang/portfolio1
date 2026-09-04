import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="content-section tinted-section">
      <div className="section-container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">Project</span>
          <h2 className="font-cal">Putting learning <span className="grad-text">into practice</span></h2>
        </motion.div>
        <motion.article className="project-card" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ y: -4 }}>
          <div className="stack-visual" aria-hidden="true">
            <span className="game-caption">STACK / BUILD / REPEAT</span>
            <div className="block-tower">{[0, 1, 2, 3, 4, 5].map((block) => <div className="stack-block" key={block} style={{ width: `${180 - block * 17}px`, marginLeft: `${block % 2 ? 20 : 0}px`, opacity: 1 - block * 0.07 }} />)}</div>
            <span className="game-caption">A GAME OF TIMING &amp; BALANCE</span>
          </div>
          <div className="project-copy">
            <span className="eyebrow">2D arcade game</span>
            <h3 className="font-cal">Stack Game</h3>
            <p className="muted">Drop moving blocks on top of one another and try to build the highest tower possible without missing the edges.</p>
            <h4>My contribution</h4>
            <p className="muted">Designed the core game loop, built the block movement mechanics, and implemented the scoring logic.</p>
            <h4>What I learned</h4>
            <p className="muted">How to handle real-time keyboard input and manage game-state logic efficiently.</p>
            <ul className="tag-list">{["Python", "HTML", "CSS", "JavaScript"].map((tech) => <li key={tech}>{tech}</li>)}</ul>
            <div className="project-actions">
              <motion.a className="primary-button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://blah-blah-square.bytexl.live/" target="_blank" rel="noreferrer">Play live demo ↗</motion.a>
              <a className="secondary-button" href="https://github.com/hemaharshitha2516-lang" target="_blank" rel="noreferrer">GitHub Profile ↗</a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
