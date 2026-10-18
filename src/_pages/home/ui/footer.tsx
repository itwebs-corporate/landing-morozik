import content from '../model/content/footer.json';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <a href="#top" className="footer-name">
          {content.texts.t001}
          <span>
            {content.texts.t002}
          </span>
        </a>
        <div>
          <a href={content.links.link001} target="_blank" rel="noopener noreferrer">
            {content.texts.t003}
          </a>
          <button type="button" className="text-button" data-open-sources="">
            {content.texts.t004}
          </button>
          <button type="button" className="text-button" data-open-data="">
            {content.texts.t005}
          </button>
        </div>
        <a className="text-link" href="#top">
          {content.texts.t006}
        </a>
      </div>
      <div className="wrap footer-bottom">
        <span>
          {content.texts.t007}
        </span>
        <span>
          {content.texts.t008}
        </span>
      </div>
    </footer>
  );
}
