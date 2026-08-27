import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await cp('apps/scroll-to-space/dist', 'dist', { recursive: true });
await mkdir('dist/server', { recursive: true });
await cp('scripts/static-worker.js', 'dist/server/index.js');
await mkdir('dist/.openai', { recursive: true });
await cp('.openai/hosting.json', 'dist/.openai/hosting.json');
