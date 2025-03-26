export interface IdeaGen {
    combinations: Record<string, string[]>;
    sentences: string[];
}

export interface IdeaGenResponse {
    response: string;
    sentence: string;
    replacements: Record<string, string[]>;
}

export interface ServerListResponse {
    total_players: number;
    total_servers: number;
    total_search_results: number;
    servers: Server[];
}

export interface Server {
    staticInfo: {
        _id: string;
        serverPlan: string;
        serviceStartDate: number;
        platform: string;
        planMaxPlayers: number | null;
        planRam: number | null;
        alwaysOnline: boolean;
        rawPlan: string;
        connectedServers: string[];
    };
    maxPlayers: number;
    name: string;
    motd: string;
    icon: string;
    playerData: {
        timeNoPlayers: number;
        playerCount: number;
    };
    connectable: boolean;
    visibility: boolean;
    allCategories: string[];
    usingCosmetics: boolean;
    author: string;
    authorRank: string;
}