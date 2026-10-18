import content from '../model/content/skip-link.json';

export function SkipLink() {
  return (
    <a className="skip-link" href="#main">
      {content.texts.t001}
    </a>
  );
}
