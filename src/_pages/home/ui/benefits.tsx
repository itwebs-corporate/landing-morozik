import content from '../model/content/benefits.json';

export function Benefits() {
  return (
    <section className="section benefits" aria-labelledby="benefits-title" data-section="benefits">
      <div className="wrap">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              {content.texts.t001}
            </p>
            <h2 id="benefits-title">
              {content.texts.t002}
              <br />
              {content.texts.t003}
            </h2>
          </div>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card reveal">
            <span className="benefit-symbol" aria-hidden="true">
              <span className="symbol-layout">
              </span>
            </span>
            <h3>
              {content.texts.t004}
            </h3>
            <p>
              {content.texts.t005}
            </p>
          </article>
          <article className="benefit-card reveal">
            <span className="benefit-symbol" aria-hidden="true">
              <span className="symbol-motion">
              </span>
            </span>
            <h3>
              {content.texts.t006}
            </h3>
            <p>
              {content.texts.t007}
            </p>
          </article>
          <article className="benefit-card reveal">
            <span className="benefit-symbol" aria-hidden="true">
              <span className="symbol-search">
              </span>
            </span>
            <h3>
              {content.texts.t008}
            </h3>
            <p>
              {content.texts.t009}
            </p>
          </article>
          <article className="benefit-card reveal">
            <span className="benefit-symbol" aria-hidden="true">
              <span className="symbol-adaptive">
              </span>
            </span>
            <h3>
              {content.texts.t010}
            </h3>
            <p>
              {content.texts.t011}
            </p>
          </article>
          <article className="benefit-card reveal">
            <span className="benefit-symbol" aria-hidden="true">
              <span className="symbol-code">
                {content.texts.t012}
              </span>
            </span>
            <h3>
              {content.texts.t013}
            </h3>
            <p>
              {content.texts.t014}
            </p>
          </article>
          <article className="benefit-card reveal">
            <span className="benefit-symbol" aria-hidden="true">
              <span className="symbol-idea">
              </span>
            </span>
            <h3>
              {content.texts.t015}
            </h3>
            <p>
              {content.texts.t016}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
