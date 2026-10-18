import content from './content.json';

export function getNameError(value: string): string {
  return value.trim().length >= 2 ? '' : content.errors.name;
}

export function getContactError(value: string): string {
  const contact = value.trim();
  if (!contact) return content.errors.contactRequired;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact)) return '';
  const username = contact
    .replace(/^https?:\/\/(?:www\.)?t\.me\//i, '')
    .replace(/^@/, '')
    .replace(/\/$/, '');
  return /^[a-z][a-z0-9_]{4,31}$/i.test(username) ? '' : content.errors.contactInvalid;
}

export function prepareMessage(name: string, contact: string, idea: string): string {
  return [
    content.message.greeting,
    '',
    `${content.message.nameLabel} ${name.trim()}`,
    `${content.message.contactLabel} ${contact.trim()}`,
    ...(idea.trim() ? ['', `${content.message.ideaLabel} ${idea.trim()}`] : []),
    '',
    content.message.source,
  ].join('\n');
}
