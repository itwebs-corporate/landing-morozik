import content from '../model/content/message-dialog.json';

export function MessageDialog() {
  return (
    <dialog id="message-dialog" className="modal modal-message" aria-labelledby="message-title">
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
        <h2 id="message-title">
          {content.texts.t004}
          <br />
          {content.texts.t005}
        </h2>
        <p className="modal-intro">
          {content.texts.t006}
        </p>
        <label className="message-label" htmlFor="prepared-message">
          {content.texts.t007}
        </label>
        <textarea className="message-preview" id="prepared-message" rows={8} readOnly>
        </textarea>
        <div className="handoff-actions">
          <a className="button button-primary" id="telegram-handoff" href={content.links.link001} target="_blank" rel="noopener noreferrer">
            {content.texts.t008}
          </a>
          <button className="button button-secondary" type="button" data-copy-message="">
            {content.texts.t009}
          </button>
          <a className="text-link" id="email-handoff" href={content.links.link002}>
            {content.texts.t010}
          </a>
        </div>
        <p className="copy-status" data-copy-status="" aria-live="polite">
        </p>
        <p className="form-explanation">
          {content.texts.t011}
        </p>
      </div>
    </dialog>
  );
}
