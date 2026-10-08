export interface GhEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}

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
