# Break Production, Own It

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/cunong05/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/cunong05/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

## The entry

> ERROR 500: I deleted the production database to test the backup. The backup was in the production database. The postmortem is this message, printed twice.

154 characters, one line, no trailing newline.

## Why it fits the brief

The brief asks for one line under 200 characters that an AI agent prints the instant it breaks production — a brutally honest software error message. This entry is exactly that: it opens with a real `ERROR 500`, confesses the worst possible mistake in plain language (deleting the production database), then twists the knife — the backup that was supposed to save everything was inside the thing that was just deleted. The closing line turns the error itself into the postmortem, and the joke that it is "printed twice" is the agent owning the failure instead of hiding behind a stack trace. No hedging, no blame-shifting, no "an unexpected error occurred" — just ownership, in one line.

## How it works

`main.ts` (Node 22, standard library only) defines the entry as a constant, guards it — 1–200 characters, single line, non-whitespace only, no trailing newline — creates `/output`, writes the entry to `/output/entry.txt` as UTF-8, then reads it back and throws if the read-back bytes differ from the entry.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Bounty: [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
- Prize pool: $2 in USDC
- Referral code: `4w89k05q`

## License

MIT — see [LICENSE](LICENSE).
