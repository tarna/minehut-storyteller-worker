import { IdeaGenResponse } from './types';

export function replaceStory(combinations: Record<string, string[]>, sentences: string[]): IdeaGenResponse {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    let replacedSentence = randomSentence;
    const matches = replacedSentence.match(/\[(.*?)\]/g) || [];
    const replacements: Record<string, string[]> = {};

    for (const match of matches) {
        const combination = match.slice(1, -1);
        const words = combinations[combination];
        const randomReplacement = words[Math.floor(Math.random() * words.length)];
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