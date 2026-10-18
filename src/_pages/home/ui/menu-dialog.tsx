import content from '../model/content/menu-dialog.json';

export function MenuDialog() {
  return (
    <dialog id="menu-dialog" className="modal modal-menu" aria-labelledby="menu-title">
      <div className="modal-top">
        <strong id="menu-title">
          {content.texts.t001}
        </strong>
        <button type="button" className="close-button" data-close="">
          {content.texts.t002}
        </button>
      </div>
      <nav className="mobile-nav" aria-label={content.texts.t003}>
        <a href="#approach" data-menu-link="">
          {content.texts.t004}
        </a>
        <a href="#projects" data-menu-link="">
          {content.texts.t005}
        </a>
        <a href="#pricing" data-menu-link="">
          {content.texts.t006}
        </a>
        <a href="#reviews" data-menu-link="">
          {content.texts.t007}
        </a>
        <a href="#faq" data-menu-link="">
          {content.texts.t008}
        </a>
        <a href="#contact" data-menu-link="">
          {content.texts.t009}
        </a>
      </nav>
      <a className="button button-primary" href={content.links.link001} target="_blank" rel="noopener noreferrer">
        {content.texts.t010}
      </a>
    </dialog>
  );
}
