import { getRandomServer } from './servers';
import { IdeaGenResponse } from './types';

export async function replaceStory(request: Request, combinations: Record<string, string[]>, sentences: string[]): Promise<IdeaGenResponse> {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    let replacedSentence = randomSentence;
    const matches = replacedSentence.match(/\[(.*?)\]/g) || [];
    const replacements: Record<string, string[]> = {};

    for (const match of matches) {
        const combination = match.slice(1, -1);

        let randomReplacement: string;

        if (combination === 'server') {
            const random = new URL(request.url).searchParams.get('random_server') === 'true';
            randomReplacement = await getRandomServer(!random);
        } else {
            const words = combinations[combination];
            if (!words) continue;

            randomReplacement = words[Math.floor(Math.random() * words.length)];
        }

        replacedSentence = replacedSentence.replace(match, randomReplacement);

        if (!replacements[combination]) {
            replacements[combination] = [];
        }
        replacements[combination].push(randomReplacement);
    }

    return {
        response: replacedSentence,
        sentence: randomSentence,
        replacements,
    };
}