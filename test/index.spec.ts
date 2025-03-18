// test/index.spec.ts
import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';
import { IdeaGenResponse } from '../src/types';
import { replaceStory } from '../src/lib';

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('Minehut Storyteller Worker', () => {
	it('responds with correct replacements', async () => {
		const request = new IncomingRequest('http://example.com');
		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx).then(res => res.json()) as IdeaGenResponse;
		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
        const data = replaceStory(response.replacements, [response.sentence]);
        expect(data.response).toMatchInlineSnapshot(`"${data.response}"`);
	});
});
