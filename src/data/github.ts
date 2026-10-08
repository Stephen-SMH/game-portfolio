const USER = 'Stephen-SMH';
const token = import.meta.env.GITHUB_TOKEN as string | undefined;

export interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  updated_at: string;
}

export interface GhUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  location: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export interface Day {
  date: string;
  count: number;
  level: number;
}

export interface GhEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}

async function gh<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'stephen-portfolio',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) throw new Error(`${res.status}`);
    return (await res.json()) as T;
  } catch (e) {
    console.warn(`[github] ${path} failed: ${(e as Error).message}`);
    return null;
  }
}

async function contributions(): Promise<{ total: number; days: Day[] }> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`);
    if (!res.ok) throw new Error(`${res.status}`);
    const json = await res.json();
    return { total: json.total?.lastYear ?? 0, days: json.contributions as Day[] };
  } catch (e) {
    console.warn(`[github] contributions failed: ${(e as Error).message}`);
    return { total: 0, days: [] };
  }
}

const fallbackUser: GhUser = {
  login: USER,
  name: 'Stephen',
  bio: null,
  avatar_url: `https://github.com/${USER}.png`,
  location: null,
  followers: 0,
  following: 0,
  public_repos: 0,
  html_url: `https://github.com/${USER}`,
};

export async function getData() {
  const [user, repos, events, contrib] = await Promise.all([
    gh<GhUser>(`/users/${USER}`),
    gh<Repo[]>(`/users/${USER}/repos?per_page=100&sort=pushed`),
    gh<GhEvent[]>(`/users/${USER}/events/public?per_page=30`),
    contributions(),
  ]);
  return {
    user: user ?? fallbackUser,
    repos: (repos ?? []).sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at)),
    events: events ?? [],
    contrib,
  };
}

export const langColors: Record<string, string> = {
  Dart: '#38bdf8',
  TypeScript: '#60a5fa',
  JavaScript: '#facc15',
  Python: '#34d399',
  Go: '#22d3ee',
  Rust: '#fb923c',
  'C++': '#f472b6',
  C: '#94a3b8',
  'C#': '#a78bfa',
  Java: '#f87171',
  HTML: '#fb7185',
  Makefile: '#a3a3a3',
};

export const colorOf = (lang: string | null) => (lang && langColors[lang]) || '#737373';

export function ago(iso: string) {
  const s = (Date.now() - +new Date(iso)) / 1000;
  const units: [number, string][] = [
    [31536000, 'year'],
    [2592000, 'month'],
    [86400, 'day'],
    [3600, 'hour'],
    [60, 'minute'],
  ];
  for (const [n, label] of units) {
    if (s >= n) {
      const v = Math.floor(s / n);
      return `${v} ${label}${v > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
}

export function describe(e: GhEvent): { verb: string; detail?: string } | null {
  const p = e.payload ?? {};
  switch (e.type) {
    case 'PushEvent': {
      const n = p.size ?? p.commits?.length ?? 1;
      return { verb: `Pushed ${n} commit${n === 1 ? '' : 's'} to`, detail: p.commits?.[p.commits.length - 1]?.message?.split('\n')[0] };
    }
    case 'CreateEvent':
      return { verb: `Created ${p.ref_type}${p.ref ? ` ${p.ref}` : ''} in` };
    case 'WatchEvent':
      return { verb: 'Starred' };
    case 'ForkEvent':
      return { verb: 'Forked' };
    case 'IssuesEvent':
      return { verb: `${p.action} an issue in`, detail: p.issue?.title };
    case 'PullRequestEvent':
      return { verb: `${p.action} a pull request in`, detail: p.pull_request?.title };
    case 'ReleaseEvent':
      return { verb: 'Released in', detail: p.release?.name };
    default:
      return null;
  }
}
