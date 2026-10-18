import content from '../model/content/lead-dialog.json';

export function LeadDialog() {
  return (
    <dialog id="lead-dialog" className="modal modal-lead" aria-labelledby="lead-dialog-title">
      <div className="modal-top">
        <span className="modal-eyebrow">
          {content.texts.t001}
        </span>
        <button type="button" className="close-button" data-close="">
          {content.texts.t002}
        </button>
      </div>
      <div className="modal-body">
        <p className="eyebrow">
          {content.texts.t003}
        </p>
        <h2 id="lead-dialog-title">
          {content.texts.t004}
          <br />
          {content.texts.t005}
        </h2>
        <p className="modal-intro">
          {content.texts.t006}
        </p>
        <form className="lead-form" data-lead-form="" noValidate>
          <div className="field">
            <input id="modal-name" name="name" autoComplete="name" placeholder={content.texts.t007} maxLength={80} required aria-describedby="modal-name-error" />
            <label htmlFor="modal-name">
              {content.texts.t008}
            </label>
            <span className="field-error" id="modal-name-error" aria-live="polite">
            </span>
          </div>
          <div className="field">
            <input id="modal-contact" name="contact" placeholder={content.texts.t009} maxLength={120} required aria-describedby="modal-contact-error" />
            <label htmlFor="modal-contact">
              {content.texts.t010}
            </label>
            <span className="field-error" id="modal-contact-error" aria-live="polite">
            </span>
          </div>
          <div className="field field-textarea">
            <textarea id="modal-idea" name="idea" placeholder={content.texts.t011} rows={3} maxLength={2000} aria-describedby="modal-idea-hint">
            </textarea>
            <label htmlFor="modal-idea">
              {content.texts.t012}
            </label>
            <span className="field-hint" id="modal-idea-hint">
              <span>
                {content.texts.t013}
              </span>
              <span data-counter="">
                {content.texts.t014}
              </span>
            </span>
          </div>
          <button className="button button-primary form-submit" type="submit">
            {content.texts.t015}
          </button>
          <p className="response-time">
            {content.texts.t016}
          </p>
          <p className="form-explanation">
            {content.texts.t017}
          </p>
        </form>
      </div>
    </dialog>
  );
}
