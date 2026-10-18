import Image from 'next/image';
import content from '../model/content/approach.json';

export function Approach() {
  return (
    <section className="section approach" id="approach" aria-labelledby="approach-title" data-section="solution">
      <div className="wrap">
        <div className="approach-layout">
          <div className="reveal">
            <p className="eyebrow">
              {content.texts.t001}
            </p>
            <h2 id="approach-title">
              {content.texts.t002}
              <br />
              <span className="gradient-text">
                {content.texts.t003}
              </span>
            </h2>
            <p className="lead-text">
              {content.texts.t004}
            </p>
            <p className="muted small">
              {content.texts.t005}
            </p>
          </div>
          <div className="day-object reveal" aria-label={content.texts.t006}>
            <span>
              {content.texts.t007}
            </span>
            <p>
              {content.texts.t008}
              <br />
              {content.texts.t009}
            </p>
          </div>
        </div>
        <article className="personal-panel reveal">
          <div className="portrait">
            <Image src={`/images/${content.images.image001}`} alt={content.texts.t010} width={280} height={308} loading="lazy" />
            <span>
              {content.texts.t011}
            </span>
          </div>
          <div className="personal-copy">
            <p className="eyebrow">
              {content.texts.t012}
            </p>
            <h3>
              {content.texts.t013}
              <br />
              {content.texts.t014}
            </h3>
            <p>
              {content.texts.t015}
            </p>
            <div className="perspectives">
              <span>
                {content.texts.t016}
              </span>
              <span>
                {content.texts.t017}
              </span>
              <span>
                {content.texts.t018}
              </span>
            </div>
            <div className="personal-links">
              <a className="text-link" href={content.links.link001} target="_blank" rel="noopener noreferrer">
                {content.texts.t019}
              </a>
              <a className="text-link" href={content.links.link002} target="_blank" rel="noopener noreferrer">
                {content.texts.t020}
              </a>
            </div>
          </div>
        </article>
        <div className="company-facts reveal">
          <div>
            <strong>
              {content.texts.t021}
            </strong>
            <span>
              {content.texts.t022}
            </span>
          </div>
          <div>
            <strong>
              {content.texts.t023}
            </strong>
            <span>
              {content.texts.t024}
            </span>
          </div>
          <div>
            <strong>
              {content.texts.t025}
            </strong>
            <span>
              {content.texts.t026}
            </span>
          </div>
          <a href={content.links.link003} className="text-link" target="_blank" rel="noopener noreferrer">
            {content.texts.t027}
          </a>
        </div>
      </div>
    </section>
  );
}
