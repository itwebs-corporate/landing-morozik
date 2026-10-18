import content from '../model/content/sources-dialog.json';

export function SourcesDialog() {
  return (
    <dialog id="sources-dialog" className="modal modal-sources" aria-labelledby="sources-title">
      <div className="modal-top">
        <span className="modal-eyebrow">
          {content.texts.t001}
        </span>
        <button type="button" className="close-button" data-close="">
          {content.texts.t002}
        </button>
      </div>
      <div className="modal-body">
        <h2 id="sources-title">
          {content.texts.t003}
        </h2>
        <p className="modal-intro">
          {content.texts.t004}
        </p>
        <div className="source-list">
          <a href={content.links.link001} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t005}
            </strong>
            <span>
              {content.texts.t006}
            </span>
          </a>
          <a href={content.links.link002} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t007}
            </strong>
            <span>
              {content.texts.t008}
            </span>
          </a>
          <a href={content.links.link003} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t009}
            </strong>
            <span>
              {content.texts.t010}
            </span>
          </a>
          <a href={content.links.link004} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t011}
            </strong>
            <span>
              {content.texts.t012}
            </span>
          </a>
          <a href={content.links.link005} target="_blank" rel="noopener noreferrer">
            <strong>
              {content.texts.t013}
            </strong>
            <span>
              {content.texts.t014}
            </span>
          </a>
        </div>
      </div>
    </dialog>
  );
}
