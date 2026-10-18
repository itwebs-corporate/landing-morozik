import content from '../model/content/pricing.json';

export function Pricing() {
  return (
    <section className="section pricing" id="pricing" aria-labelledby="pricing-title" data-section="pricing">
      <div className="wrap">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              {content.texts.t001}
            </p>
            <h2 id="pricing-title">
              {content.texts.t002}
              <br />
              {content.texts.t003}
            </h2>
          </div>
          <p className="section-aside">
            {content.texts.t004}
            <br />
            {content.texts.t005}
          </p>
        </div>
        <div className="price-list reveal">
          <article className="price-row">
            <div>
              <h3>
                {content.texts.t006}
              </h3>
              <p>
                {content.texts.t007}
              </p>
            </div>
            <strong>
              {content.texts.t008}
            </strong>
            <button className="text-button" type="button" data-lead={content.texts.t009}>
              {content.texts.t010}
            </button>
          </article>
          <article className="price-row">
            <div>
              <h3>
                {content.texts.t011}
              </h3>
              <p>
                {content.texts.t012}
              </p>
            </div>
            <strong>
              {content.texts.t013}
            </strong>
            <button className="text-button" type="button" data-lead={content.texts.t014}>
              {content.texts.t015}
            </button>
          </article>
          <article className="price-row">
            <div>
              <h3>
                {content.texts.t016}
              </h3>
              <p>
                {content.texts.t017}
              </p>
            </div>
            <strong>
              {content.texts.t018}
            </strong>
            <button className="text-button" type="button" data-lead={content.texts.t019}>
              {content.texts.t020}
            </button>
          </article>
          <article className="price-row">
            <div>
              <h3>
                {content.texts.t021}
              </h3>
              <p>
                {content.texts.t022}
              </p>
            </div>
            <strong>
              {content.texts.t023}
            </strong>
            <button className="text-button" type="button" data-lead={content.texts.t024}>
              {content.texts.t025}
            </button>
          </article>
        </div>
        <p className="pricing-note">
          {content.texts.t026}
        </p>
      </div>
    </section>
  );
}
