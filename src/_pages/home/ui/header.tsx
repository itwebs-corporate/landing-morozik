import content from '../model/content/header.json';

export function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="nav-shell wrap">
        <a className="identity" href="#top" aria-label={content.texts.t001}>
          <span className="monogram" aria-hidden="true">
            {content.texts.t002}
          </span>
          <span>
            <strong>
              {content.texts.t003}
            </strong>
            <small>
              {content.texts.t004}
            </small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label={content.texts.t005}>
          <a href="#approach">
            {content.texts.t006}
          </a>
          <a href="#projects">
            {content.texts.t007}
          </a>
          <a href="#pricing">
            {content.texts.t008}
          </a>
          <a href="#reviews">
            {content.texts.t009}
          </a>
        </nav>
        <button className="button button-small button-subtle header-cta" type="button" data-lead="">
          {content.texts.t010}
        </button>
        <button className="menu-button" type="button" data-open-menu="" aria-haspopup="dialog">
          {content.texts.t011}
        </button>
      </div>
    </header>
  );
}
