import { replaceStory } from './lib';
import { IdeaGen } from './types';

const endpoint = 'https://raw.githubusercontent.com/Minehut/storyteller/refs/heads/main/idea_gen.json';

export default {
    async fetch(request, env, ctx): Promise<Response> {
        const { combinations, sentences } = await fetch(endpoint).then(res => res.json()) as IdeaGen;

        const data = await replaceStory(request, combinations, sentences);

        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' },
        });
    },
} satisfies ExportedHandler<Env>;