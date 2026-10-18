import content from '../model/content/reputation.json';

export function Reputation() {
  return (
    <section className="section reputation" id="reviews" aria-labelledby="reviews-title" data-section="proof">
      <div className="wrap">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              {content.texts.t001}
            </p>
            <h2 id="reviews-title">
              {content.texts.t002}
              <br />
              {content.texts.t003}
            </h2>
          </div>
          <a className="rating-main" href={content.links.link001} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t004}
              <span>
                {content.texts.t005}
              </span>
            </strong>
            <span>
              {content.texts.t006}
            </span>
          </a>
        </div>
        <div className="grid grid-three">
          <article className="review-card reveal">
            <p className="card-label">
              {content.texts.t007}
            </p>
            <h3>
              {content.texts.t008}
              <br />
              {content.texts.t009}
            </h3>
            <p>
              {content.texts.t010}
            </p>
            <div className="review-author">
              <strong>
                {content.texts.t011}
              </strong>
              <span>
                {content.texts.t012}
              </span>
            </div>
            <a className="text-link" href={content.links.link002} target="_blank" rel="noopener noreferrer">
              {content.texts.t013}
            </a>
          </article>
          <article className="review-card reveal">
            <p className="card-label">
              {content.texts.t014}
            </p>
            <h3>
              {content.texts.t015}
              <br />
              {content.texts.t016}
            </h3>
            <p>
              {content.texts.t017}
            </p>
            <div className="review-author">
              <strong>
                {content.texts.t018}
              </strong>
              <span>
                {content.texts.t019}
              </span>
            </div>
            <a className="text-link" href={content.links.link003} target="_blank" rel="noopener noreferrer">
              {content.texts.t020}
            </a>
          </article>
          <article className="review-card profile-card reveal">
            <p className="card-label">
              {content.texts.t021}
            </p>
            <h3>
              {content.texts.t022}
              <br />
              {content.texts.t023}
            </h3>
            <p>
              {content.texts.t024}
            </p>
            <div className="profile-links">
              <a href={content.links.link004} target="_blank" rel="noopener noreferrer">
                {content.texts.t025}
              </a>
              <a href={content.links.link005} target="_blank" rel="noopener noreferrer">
                {content.texts.t026}
              </a>
              <a href={content.links.link006} target="_blank" rel="noopener noreferrer">
                {content.texts.t027}
              </a>
            </div>
          </article>
        </div>
        <div className="client-names reveal">
          <span>
            {content.texts.t028}
          </span>
          <a href={content.links.link007} target="_blank" rel="noopener noreferrer">
            {content.texts.t029}
          </a>
          <a href={content.links.link008} target="_blank" rel="noopener noreferrer">
            {content.texts.t030}
          </a>
          <a href={content.links.link009} target="_blank" rel="noopener noreferrer">
            {content.texts.t031}
          </a>
        </div>
        <div className="directory-row reveal">
          <a href={content.links.link010} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t032}
            </strong>
            <span>
              {content.texts.t033}
            </span>
          </a>
          <a href={content.links.link011} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t034}
            </strong>
            <span>
              {content.texts.t035}
            </span>
          </a>
          <a href={content.links.link012} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t036}
            </strong>
            <span>
              {content.texts.t037}
            </span>
          </a>
        </div>
        <p className="source-note">
          {content.texts.t038}
        </p>
      </div>
    </section>
  );
}
