import Image from 'next/image';
import content from '../model/content/project-dialog.json';

export function ProjectDialog() {
  return (
    <dialog id="project-dialog" className="modal modal-project" aria-labelledby="project-modal-title">
      <div className="modal-top">
        <span className="modal-eyebrow">
          {content.texts.t001}
        </span>
        <button type="button" className="close-button" data-close="">
          {content.texts.t002}
        </button>
      </div>
      <Image id="project-modal-image" className="modal-project-image" src={`/images/${content.images.image001}`} alt={content.texts.t003} width={800} height={480} />
      <div className="modal-body">
        <p className="eyebrow" id="project-modal-category">
        </p>
        <h2 id="project-modal-title">
          {content.texts.t004}
        </h2>
        <p className="modal-intro" id="project-modal-description">
        </p>
        <dl className="project-facts">
          <div>
            <dt>
              {content.texts.t005}
            </dt>
            <dd id="project-modal-duration">
            </dd>
          </div>
          <div>
            <dt>
              {content.texts.t006}
            </dt>
            <dd id="project-modal-year">
            </dd>
          </div>
          <div>
            <dt>
              {content.texts.t007}
            </dt>
            <dd>
              {content.texts.t008}
            </dd>
          </div>
        </dl>
        <p className="small muted">
          {content.texts.t009}
        </p>
        <div className="button-row">
          <button type="button" className="button button-primary" id="project-discuss">
            {content.texts.t010}
          </button>
          <a className="button button-secondary" href={content.links.link001} target="_blank" rel="noopener noreferrer">
            {content.texts.t011}
          </a>
        </div>
      </div>
    </dialog>
  );
}
