import content from '../model/content/process.json';

export function Process() {
  return (
    <section className="section process" aria-labelledby="process-title" data-section="process">
      <div className="wrap">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              {content.texts.t001}
            </p>
            <h2 id="process-title">
              {content.texts.t002}
              <br />
              {content.texts.t003}
            </h2>
          </div>
          <p className="section-aside">
            {content.texts.t004}
          </p>
        </div>
        <div className="steps">
          <article className="step reveal">
            <span>
              {content.texts.t005}
            </span>
            <h3>
              {content.texts.t006}
            </h3>
            <p>
              {content.texts.t007}
            </p>
          </article>
          <article className="step reveal">
            <span>
              {content.texts.t008}
            </span>
            <h3>
              {content.texts.t009}
            </h3>
            <p>
              {content.texts.t010}
            </p>
          </article>
          <article className="step reveal">
            <span>
              {content.texts.t011}
            </span>
            <h3>
              {content.texts.t012}
            </h3>
            <p>
              {content.texts.t013}
            </p>
          </article>
          <article className="step reveal">
            <span>
              {content.texts.t014}
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
