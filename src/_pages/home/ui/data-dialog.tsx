import content from '../model/content/data-dialog.json';

export function DataDialog() {
  return (
    <dialog id="data-dialog" className="modal" aria-labelledby="data-title">
      <div className="modal-top">
        <span className="modal-eyebrow">
          {content.texts.t001}
        </span>
        <button type="button" className="close-button" data-close="">
          {content.texts.t002}
        </button>
      </div>
      <div className="modal-body prose">
        <h2 id="data-title">
          {content.texts.t003}
        </h2>
        <p>
          {content.texts.t004}
        </p>
        <p>
          {content.texts.t005}
        </p>
        <p>
          {content.texts.t006}
        </p>
        <p>
          {content.texts.t007}
        </p>
      </div>
    </dialog>
  );
}
