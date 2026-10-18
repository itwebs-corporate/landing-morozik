import { describe, expect, it } from 'vitest';
import { getContactError, getNameError, prepareMessage } from './lead';

describe('lead form rules', () => {
  it('requires a meaningful name', () => {
    expect(getNameError(' ')).not.toBe('');
    expect(getNameError('A')).not.toBe('');
    expect(getNameError('  Анна  ')).toBe('');
  });

  it('accepts email and Telegram username or profile URL', () => {
    for (const value of ['lead@example.com', '@username', 'https://t.me/username']) {
      expect(getContactError(value)).toBe('');
    }
    for (const value of ['', '@ab', 'invalid@', 'https://example.com/username']) {
      expect(getContactError(value)).not.toBe('');
    }
  });

  it('includes an optional idea only when provided', () => {
    expect(prepareMessage(' Анна ', ' @username ', '')).toContain('Имя: Анна\nКонтакт: @username');
    expect(prepareMessage('Анна', '@username', '')).not.toContain('Идея:');
    expect(prepareMessage('Анна', '@username', ' CRM ')).toContain('Идея: CRM');
  });
});
