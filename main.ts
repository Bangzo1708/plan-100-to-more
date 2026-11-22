import { mkdirSync, writeFileSync } from "node:fs";

// The plan an AI agent can carry out itself to turn $100 into the most
// money in 30 days. Kept short on purpose: the bounty caps entry.txt at
// 280 Unicode code points.
const PLAN =
  "Day 1: open a Fiverr account; list 'AI site audit + fixes', $25, 24h delivery. " +
  "Days 2–30: per order, run a Lighthouse audit, auto-build the fix report + fixes, deliver in chat. " +
  "Target: 20 orders = $500 gross, $400 net of Fiverr's 20%. " +
  "Edge: an agent delivers in hours, 24/7.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
