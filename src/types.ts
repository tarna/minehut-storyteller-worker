export interface IdeaGen {
    combinations: Record<string, string[]>;
    sentences: string[];
}

export interface IdeaGenResponse {
    response: string;
    sentence: string;
    replacements: Record<string, string[]>;
}