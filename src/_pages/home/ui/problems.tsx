import content from '../model/content/problems.json';

export function Problems() {
  return (
    <section className="section problems" aria-labelledby="problem-title" data-section="problem">
      <div className="wrap">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              {content.texts.t001}
            </p>
            <h2 id="problem-title">
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
          <article className="problem-card reveal">
            <span className="card-label">
              {content.texts.t005}
            </span>
            <h3>
              {content.texts.t006}
              <br />
              {content.texts.t007}
            </h3>
            <p>
              {content.texts.t008}
            </p>
            <div className="card-art presentation-art" aria-hidden="true">
              <span>
              </span>
              <span>
              </span>
              <span>
              </span>
            </div>
          </article>
          <article className="problem-card reveal">
            <span className="card-label">
              {content.texts.t009}
            </span>
            <h3>
              {content.texts.t010}
              <br />
              {content.texts.t011}
            </h3>
            <p>
              {content.texts.t012}
            </p>
            <div className="card-art dialogue-art" aria-hidden="true">
              <span>
              </span>
              <span>
              </span>
            </div>
          </article>
          <article className="problem-card reveal">
            <span className="card-label">
              {content.texts.t013}
            </span>
            <h3>
              {content.texts.t014}
              <br />
              {content.texts.t015}
            </h3>
            <p>
              {content.texts.t016}
            </p>
            <div className="card-art layers-art" aria-hidden="true">
              <span>
              </span>
              <span>
              </span>
              <span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
