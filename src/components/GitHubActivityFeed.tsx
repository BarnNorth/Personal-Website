import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { profile } from '@/data/profile';
import { ExternalLink } from 'lucide-react';

const CACHE_KEY_PREFIX = 'github-activity-';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

function getGithubUsername(): string {
  try {
    const pathname = new URL(profile.socialLinks.github).pathname;
    return pathname.replace(/^\//, '').trim() || 'BarnNorth';
  } catch {
    return 'BarnNorth';
  }
}

interface GitHubEvent {
  type: string;
  repo?: { name: string };
  created_at: string;
  payload?: Record<string, unknown>;
}

interface FeedItem {
  type: string;
  label: string;
  url: string;
  createdAt: string;
}

function mapEventToFeedItem(event: GitHubEvent): FeedItem | null {
  const repoName = event.repo?.name;
  if (!repoName || !event.created_at) return null;
  const repoUrl = `https://github.com/${repoName}`;

  const labels: Record<string, string> = {
    PushEvent: `Pushed to ${repoName}`,
    CreateEvent: `Created ${repoName}`,
    ForkEvent: `Forked ${repoName}`,
    IssueCommentEvent: `Issue activity in ${repoName}`,
    IssuesEvent: `Issue activity in ${repoName}`,
    WatchEvent: `Starred ${repoName}`,
  };
  const label = labels[event.type] ?? `Activity in ${repoName}`;

  return {
    type: event.type,
    label,
    url: repoUrl,
    createdAt: event.created_at,
  };
}

export function GitHubActivityFeed({ username: usernameProp }: { username?: string }) {
  const username = usernameProp ?? getGithubUsername();
  const [items, setItems] = useState<FeedItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const clearCache = () => {
    const cacheKey = `${CACHE_KEY_PREFIX}${username}`;
    const cacheTimeKey = `${cacheKey}-time`;
    localStorage.removeItem(cacheKey);
    localStorage.removeItem(cacheTimeKey);
    setItems(null);
    setLoading(true);
    setRefreshTrigger((t) => t + 1);
  };

  useEffect(() => {
    const cacheKey = `${CACHE_KEY_PREFIX}${username}`;
    const cacheTimeKey = `${cacheKey}-time`;

    const cached = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    if (cached && cachedTime) {
      const age = Date.now() - Number(cachedTime);
      if (age < CACHE_TTL_MS) {
        try {
          const parsed = JSON.parse(cached) as FeedItem[];
          setItems(parsed);
          setLoading(false);
          return;
        } catch {
          // invalid cache, fetch
        }
      }
    }

    setLoading(true);
    setError(false);
    fetch(`https://api.github.com/users/${username}/events`)
      .then((res) => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.json();
      })
      .then((data: unknown) => {
        if (!Array.isArray(data)) throw new Error('Invalid response');
        const feedItems = (data as GitHubEvent[])
          .map(mapEventToFeedItem)
          .filter((item): item is FeedItem => item !== null)
          .slice(0, 10);
        setItems(feedItems);
        localStorage.setItem(cacheKey, JSON.stringify(feedItems));
        localStorage.setItem(cacheTimeKey, String(Date.now()));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [username, refreshTrigger]);

  const profileUrl = profile.socialLinks.github;

  if (loading) {
    return (
      <div className="bg-surface-portfolio backdrop-blur-md border border-accent-border rounded-lg p-6 shadow-elevated h-full min-h-[200px] flex flex-col">
        <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide text-white mb-2 text-center">
          Check out what I&apos;m up to
        </h2>
        <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-3">
          GitHub
        </div>
        <ul className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className="h-5 rounded bg-white/10 animate-pulse" />
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-surface-portfolio backdrop-blur-md border border-accent-border rounded-lg p-6 shadow-elevated h-full min-h-[200px] flex flex-col">
        <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide text-white mb-2 text-center">
          Check out what I&apos;m up to
        </h2>
        <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-3">
          GitHub
        </div>
        <p className="text-white/70 text-sm mb-3">Couldn&apos;t load activity.</p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 text-sm font-medium hover:text-white inline-flex items-center gap-1"
        >
          View profile <ExternalLink className="size-3" />
        </a>
      </div>
    );
  }

  if (!items?.length) {
    return (
      <div className="bg-surface-portfolio backdrop-blur-md border border-accent-border rounded-lg p-6 shadow-elevated h-full min-h-[200px] flex flex-col">
        <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide text-white mb-2 text-center">
          Check out what I&apos;m up to
        </h2>
        <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-3">
          GitHub
        </div>
        <p className="text-white/70 text-sm mb-3">
          No public activity in the last 90 days. GitHub only shows pushes, new repos, stars, and similar events.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={clearCache}
            className="text-white/90 text-sm font-medium hover:text-white underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
          >
            Try again
          </button>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 text-sm font-medium hover:text-white inline-flex items-center gap-1"
          >
            View profile <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-portfolio backdrop-blur-md border border-accent-border rounded-lg p-6 shadow-elevated h-full min-h-0 flex flex-col">
      <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide text-white mb-2 shrink-0 text-center">
        Check out what I&apos;m up to
      </h2>
      <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-3 shrink-0">
        GitHub
      </div>
      <div className="min-h-0 overflow-y-auto flex-1">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={`${item.url}-${item.createdAt}-${index}`}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <span className="min-w-0 flex-1">{item.label}</span>
                <span className="shrink-0 text-white/60 text-xs whitespace-nowrap">
                  {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                </span>
                <ExternalLink className="size-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 shrink-0 inline-flex items-center gap-1 text-sm text-white/70 hover:text-white font-medium transition-colors"
      >
        View profile <ExternalLink className="size-3" />
      </a>
    </div>
  );
}
