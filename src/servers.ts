import { ServerListResponse } from './types';

export const featuredServers = [
    'SunRealms',
    'DireSkies',
    'mulm',
    'wildprison',
    'HorizonMines',
    'Torrent',
    'CapeCraft',
    'GenBrawl',
    'MHContest',
    'Quiz',
    'SurvivalGG',
    'Warzone',
    'Labs',
    'Glowcrft',
    'LeoneMC',
    'ZedarMC',
    'LightSkies',
    'Gratopia',
    'Mineshaft',
    'DungeonDodge',
    'SynthCraft',
    'ImpendMC',
    'BlzeSteal',
    'Celestial',
    'Lifesteal',
    'Golf',
    'Cropied'
];

export async function getRandomServer(featured: boolean = false) {
    if (featured) return featuredServers[Math.floor(Math.random() * featuredServers.length)];

    const request = await fetch('https://api.minehut.com/servers').then(res => res.json()) as ServerListResponse;
    const servers = request.servers;
    return servers[Math.floor(Math.random() * servers.length)].name;
}