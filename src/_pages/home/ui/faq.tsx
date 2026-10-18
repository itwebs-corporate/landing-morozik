import content from '../model/content/faq.json';

export function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title" data-section="faq">
      <div className="wrap faq-layout">
        <div className="reveal">
          <p className="eyebrow">
            {content.texts.t001}
          </p>
          <h2 id="faq-title">
            {content.texts.t002}
            <br />
            {content.texts.t003}
          </h2>
          <p className="section-aside">
            {content.texts.t004}
          </p>
          <button className="button button-secondary" type="button" data-lead="">
            {content.texts.t005}
          </button>
        </div>
        <div className="faq-list reveal">
          <details open>
            <summary>
              {content.texts.t006}
              <span aria-hidden="true">
                <span className="faq-more-label">{content.texts.moreLabel}</span>
                <span className="faq-less-label">{content.texts.lessLabel}</span>
              </span>
            </summary>
            <p>
              {content.texts.t007}
            </p>
          </details>
          <details>
            <summary>
              {content.texts.t008}
              <span aria-hidden="true">
                <span className="faq-more-label">{content.texts.moreLabel}</span>
                <span className="faq-less-label">{content.texts.lessLabel}</span>
              </span>
            </summary>
            <p>
              {content.texts.t009}
            </p>
          </details>
          <details>
            <summary>
              {content.texts.t010}
              <span aria-hidden="true">
                <span className="faq-more-label">{content.texts.moreLabel}</span>
                <span className="faq-less-label">{content.texts.lessLabel}</span>
              </span>
            </summary>
            <p>
              {content.texts.t011}
            </p>
          </details>
          <details>
            <summary>
              {content.texts.t012}
              <span aria-hidden="true">
                <span className="faq-more-label">{content.texts.moreLabel}</span>
                <span className="faq-less-label">{content.texts.lessLabel}</span>
              </span>
            </summary>
            <p>
              {content.texts.t013}
            </p>
          </details>
          <details>
            <summary>
              {content.texts.t014}
              <span aria-hidden="true">
                <span className="faq-more-label">{content.texts.moreLabel}</span>
                <span className="faq-less-label">{content.texts.lessLabel}</span>
              </span>
            </summary>
            <p>
              {content.texts.t015}
            </p>
          </details>
          <details>
            <summary>
              {content.texts.t016}
              <span aria-hidden="true">
                <span className="faq-more-label">{content.texts.moreLabel}</span>
                <span className="faq-less-label">{content.texts.lessLabel}</span>
              </span>
            </summary>
            <p>
              {content.texts.t017}
            </p>
          </details>
          <details>
            <summary>
              {content.texts.t018}
              <span aria-hidden="true">
                <span className="faq-more-label">{content.texts.moreLabel}</span>
                <span className="faq-less-label">{content.texts.lessLabel}</span>
              </span>
            </summary>
            <p>
              {content.texts.t019}
            </p>
          </details>
          <details>
            <summary>
              {content.texts.t020}
              <span aria-hidden="true">
                <span className="faq-more-label">{content.texts.moreLabel}</span>
                <span className="faq-less-label">{content.texts.lessLabel}</span>
              </span>
            </summary>
            <p>
              {content.texts.t021}
              <a href={content.links.link001} target="_blank" rel="noopener noreferrer">
                {content.texts.t022}
              </a>
              {content.texts.t023}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
