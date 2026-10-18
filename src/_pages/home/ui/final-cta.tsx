import Image from 'next/image';
import content from '../model/content/final-cta.json';

export function FinalCta() {
  return (
    <section className="section final-cta" id="contact" aria-labelledby="contact-title" data-section="contact">
      <div className="wrap final-layout">
        <div className="final-copy reveal">
          <p className="eyebrow">
            {content.texts.t001}
          </p>
          <h2 id="contact-title">
            {content.texts.t002}
            <br />
            <span className="gradient-text">
              {content.texts.t003}
            </span>
          </h2>
          <p>
            {content.texts.t004}
            <br />
            {content.texts.t005}
          </p>
          <div className="contact-person">
            <Image src={`/images/${content.images.image001}`} alt={content.texts.t006} width={56} height={56} loading="lazy" />
            <div>
              <strong>
                {content.texts.t007}
              </strong>
              <span>
                {content.texts.t008}
              </span>
            </div>
          </div>
          <div className="contact-socials">
            <a href={content.links.link001} target="_blank" rel="noopener noreferrer">
              {content.texts.t009}
            </a>
            <a href={content.links.link002} target="_blank" rel="noopener noreferrer">
              {content.texts.t010}
            </a>
            <a href={content.links.link003}>
              {content.texts.t011}
            </a>
          </div>
        </div>
        <form className="lead-form reveal" data-lead-form="" noValidate>
          <div className="field">
            <input id="contact-name" name="name" autoComplete="name" placeholder={content.texts.t012} maxLength={80} required aria-describedby="contact-name-error" />
            <label htmlFor="contact-name">
              {content.texts.t013}
            </label>
            <span className="field-error" id="contact-name-error" aria-live="polite">
            </span>
          </div>
          <div className="field">
            <input id="contact-channel" name="contact" autoComplete="off" placeholder={content.texts.t014} maxLength={120} required aria-describedby="contact-channel-error" />
            <label htmlFor="contact-channel">
              {content.texts.t015}
            </label>
            <span className="field-error" id="contact-channel-error" aria-live="polite">
            </span>
          </div>
          <div className="field field-textarea">
            <textarea id="contact-idea" name="idea" placeholder={content.texts.t016} rows={4} maxLength={2000} aria-describedby="contact-idea-hint">
            </textarea>
            <label htmlFor="contact-idea">
              {content.texts.t017}
            </label>
            <span className="field-hint" id="contact-idea-hint">
              <span>
                {content.texts.t018}
              </span>
              <span data-counter="">
                {content.texts.t019}
              </span>
            </span>
          </div>
          <button className="button button-primary form-submit" type="submit">
            {content.texts.t020}
          </button>
          <p className="response-time">
            {content.texts.t021}
          </p>
          <p className="form-explanation">
            {content.texts.t022}
          </p>
        </form>
      </div>
    </section>
  );
}
