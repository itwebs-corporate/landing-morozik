import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = process.cwd();
const contentDir = join(root, 'src/_pages/home/model/content');
const imageDir = join(root, 'public/images');

describe('landing content files', () => {
  it('keep every referenced image in the dedicated public folder', () => {
    const contentFiles = readdirSync(contentDir).filter((name) => name.endsWith('.json'));
    expect(contentFiles).toHaveLength(20);

    for (const file of contentFiles) {
      const content = JSON.parse(readFileSync(join(contentDir, file), 'utf8')) as {
        images: Record<string, string>;
      };
      for (const imageName of Object.values(content.images)) {
        expect(imageName).toMatch(/^[a-z0-9-]+\.(?:webp|png|svg)$/);
        expect(existsSync(join(imageDir, imageName))).toBe(true);
      }
    }
  });
});
