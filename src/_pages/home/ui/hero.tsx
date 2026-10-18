import Image from 'next/image';
import content from '../model/content/hero.json';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title" data-section="hero">
      <div className="hero-glow" aria-hidden="true">
      </div>
      <div className="hero-grain" aria-hidden="true">
      </div>
      <div className="wrap">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              {content.texts.t001}
            </p>
            <h1 id="hero-title">
              <span>
                {content.texts.t002}
              </span>
              <span>
                {content.texts.t003}
              </span>
              <span className="gradient-text">
                {content.texts.t004}
              </span>
            </h1>
            <p className="hero-statement">
              {content.texts.t005}
            </p>
            <p className="hero-description">
              {content.texts.t006}
              <br className="desktop-break" />
              {content.texts.t007}
            </p>
            <div className="button-row">
              <button className="button button-primary" type="button" data-lead="">
                {content.texts.t008}
              </button>
              <a className="button button-secondary" href="#projects">
                {content.texts.t009}
              </a>
            </div>
            <p className="hero-clarification">
              {content.texts.t010}
            </p>
          </div>
          <div className="product-scene" aria-label={content.texts.t011}>
            <span className="scene-word" aria-hidden="true">
              {content.texts.t012}
            </span>
            <div className="scene-orbit" aria-hidden="true">
            </div>
            <div className="scene-orbit second" aria-hidden="true">
            </div>
            <div className="laptop" aria-hidden="true">
              <div className="laptop-shell">
                <div className="laptop-screen">
                  <div className="screen-nav">
                    <span>
                      {content.texts.t013}
                    </span>
                    <span>
                      {content.texts.t014}
                    </span>
                  </div>
                  <p className="screen-title">
                    {content.texts.t015}
                    <br />
                    {content.texts.t016}
                  </p>
                  <div className="screen-cards">
                    <div>
                      {content.texts.t017}
                      <span>
                      </span>
                    </div>
                    <div>
                      {content.texts.t018}
                      <span>
                      </span>
                    </div>
                    <div>
                      {content.texts.t019}
                      <span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="laptop-base">
              </div>
            </div>
            <div className="floating-object code-object" aria-hidden="true">
              <div>
                {content.texts.t020}
              </div>
            </div>
            <div className="floating-object react-object" aria-hidden="true">
              <div>
                {content.texts.t021}
              </div>
            </div>
            <div className="floating-object app-object" aria-hidden="true">
              <div>
                {content.texts.t022}
              </div>
            </div>
            <div className="floating-object node-object" aria-hidden="true">
              <div>
                {content.texts.t023}
              </div>
            </div>
            <div className="scene-caption">
              <span>
                {content.texts.t024}
              </span>
              <span>
                {content.texts.t025}
              </span>
              <span>
                {content.texts.t026}
              </span>
            </div>
          </div>
        </div>
        <div className="hero-signature">
          <Image src={`/images/${content.images.image001}`} alt={content.texts.t027} width={56} height={56} fetchPriority="high" />
          <div>
            <strong>
              {content.texts.t028}
            </strong>
            <span>
              {content.texts.t029}
            </span>
          </div>
          <a className="text-link" href={content.links.link001} target="_blank" rel="noopener noreferrer">
            {content.texts.t030}
          </a>
        </div>
      </div>
    </section>
  );
}
