import Image from 'next/image';
import content from '../model/content/projects.json';

export function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title" data-section="projects">
      <div className="wrap">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              {content.texts.t001}
            </p>
            <h2 id="projects-title">
              {content.texts.t002}
              <br />
              {content.texts.t003}
            </h2>
          </div>
          <p className="section-aside">
            {content.texts.t004}
          </p>
        </div>
        <div className="grid grid-three">
          <article className="project-card reveal">
            <button type="button" className="project-cover" data-project="integrations" aria-label={content.texts.t005}>
              <Image src={`/images/${content.images.image001}`} alt={content.texts.t006} width={640} height={480} loading="lazy" />
              <span>
                {content.texts.t007}
              </span>
            </button>
            <div className="project-copy">
              <p className="card-label">
                {content.texts.t008}
              </p>
              <h3>
                {content.texts.t009}
                <br />
                {content.texts.t010}
              </h3>
              <p>
                {content.texts.t011}
              </p>
              <div className="project-bottom">
                <span>
                  {content.texts.t012}
                </span>
                <button className="text-button" type="button" data-project="integrations">
                  {content.texts.t013}
                </button>
              </div>
            </div>
          </article>
          <article className="project-card reveal">
            <button type="button" className="project-cover" data-project="paint" aria-label={content.texts.t014}>
              <Image src={`/images/${content.images.image002}`} alt={content.texts.t015} width={640} height={480} loading="lazy" />
              <span>
                {content.texts.t016}
              </span>
            </button>
            <div className="project-copy">
              <p className="card-label">
                {content.texts.t017}
              </p>
              <h3>
                {content.texts.t018}
                <br />
                {content.texts.t019}
              </h3>
              <p>
                {content.texts.t020}
              </p>
              <div className="project-bottom">
                <span>
                  {content.texts.t021}
                </span>
                <button className="text-button" type="button" data-project="paint">
                  {content.texts.t022}
                </button>
              </div>
            </div>
          </article>
          <article className="project-card reveal">
            <button type="button" className="project-cover" data-project="english" aria-label={content.texts.t023}>
              <Image src={`/images/${content.images.image003}`} alt={content.texts.t024} width={640} height={480} loading="lazy" />
              <span>
                {content.texts.t025}
              </span>
            </button>
            <div className="project-copy">
              <p className="card-label">
                {content.texts.t026}
              </p>
              <h3>
                {content.texts.t027}
                <br />
                {content.texts.t028}
              </h3>
              <p>
                {content.texts.t029}
              </p>
              <div className="project-bottom">
                <span>
                  {content.texts.t030}
                </span>
                <button className="text-button" type="button" data-project="english">
                  {content.texts.t031}
                </button>
              </div>
            </div>
          </article>
        </div>
        <div className="section-tail reveal">
          <p>
            {content.texts.t032}
            <br />
            {content.texts.t033}
          </p>
          <a className="text-link" href={content.links.link001} target="_blank" rel="noopener noreferrer">
            {content.texts.t034}
          </a>
        </div>
      </div>
    </section>
  );
}
