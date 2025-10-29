---
title: "Micro reviews: Bun, Cursor, Cloudflare Pages, and more"
date: 2023-10-14
sharing: false
---

I occasionally work on toy software projects on weekends.
I use these projects as an opportunity to try out tools, frameworks, and languages that I'm interested in or that I think might be useful at work.

This is a collection of micro-reviews of things that I used on [json-space-analyzer](https://json-space-analyzer.com), my most recent weekend project.

# Contents

- [Bun](#bun)
- [Cursor](#cursor)
- [Cloudflare Pages](#cloudflare-pages)
- [GitHub Codespaces](#github-codespaces)
- [Not using React](#not-using-react)
- [Not using Tailwind](#not-using-tailwind)
- [Using a package runner rather than `devDependencies`](#using-a-package-runner-rather-than-devdependencies)

# Reviews

## Bun

https://bun.sh/

I used Bun as a package manager, a bundler, and a package runner on this project.
It feels delightfully snappy compared to other tools that I use.

I was worried that installing during CI and deployments might be slow,
so I was happy to find that the [`setup-bun`](https://github.com/oven-sh/setup-bun) action is [super fast](https://github.com/jamesbvaughan/json-space-analyzer/actions/runs/6520487509/job/17708087410) and the Cloudflare Pages deployment environment has Bun pre-installed.

I'm happy with Bun!
I love having a single tool with good implementations of the core tools necessary for working with a language.
I hope that it gets a built-in formatter like `cargo fmt` or `go fmt`.

## Cursor

https://cursor.sh/

I've been seeing Cursor more and more on Twitter lately so I finally gave it a try.
It's kind of cool, but not game-changing enough to pull me away from Neovim.

Don't get me wrong, I'm not opposed to AI-powered dev tools.
I use Copilot (via [copilot.lua](https://github.com/zbirenbaum/copilot.lua)) and ChatGPT pretty heavily.
The in-editor interactivity of Cursor just hasn't clicked for me yet.
Somehow feels less fluid than just having a long-running project-specific chat open with ChatGPT.

I may give Cursor another chance, but at this point it feels like what I gain from switching to Cursor (even with Vim bindings) doesn't make up for what I lose by switching away from Neovim.

## Cloudflare Pages

https://pages.cloudflare.com/

I'm using Cloudflare Pages to deploy and host the site, and I have no complaints.
Deployments are _fast_.
Updates are live within about 15 seconds of merging to `main`.
That might have more to do with the fact that this is a tiny project with a simple build step and few dependencies than with anything Cloudflare-specific though.

I moved all of my domains to Cloudflare's registrar after Google [killed Google Domains](https://9to5google.com/2023/06/15/google-domains-squarespace/) and it's nice to manage my domain registration, site deployments, DNS, and CDN on the same platform now.

I've written and deployed a lot of static sites using Netlify, Vercel, and GitHub Pages.
For simple sites, they're all good enough that I'm happy using any of them.

## GitHub Codespaces

https://github.com/features/codespaces

I only used Codespaces on this project to get quick access to a Linux terminal in the cloud. (My motivation for that deserves its own blog post.)

I think remote development is cool conceptually, and Codespaces seems like a nice implementation.
I really like the stability and snappiness of local development though,
so I don't see myself actually using Codespaces unless I have a specific need for a remote dev environment.

## Not using React

https://vanilla-js.com/

This project was small enough that it felt like using any JavaScript UI library would be overkill.
The app only has one external dependency: [sunburst-chart](https://github.com/vasturiano/sunburst-chart), a package that provides functions for constructing a D3-based sunburst chart.

I enjoy writing small web apps with few dependencies and without React.
It's satisfying to see how tiny the final bundle can be after being so immersed in apps with many dependencies.

That said, this project has now grown large enough that there's enough implicit global state in the DOM that it would be nice to have _some_ framework to manage it.
Maybe I'll finally try out Svelte or HTMX on my next project.

## Not using Tailwind

https://developer.mozilla.org/en-US/docs/Web/CSS

I've become a believer in Tailwind after using it for years and on dozens of projects,
but I'm sympathetic to the arguments against it.

I wanted this site to be as lightweight as possible (both in number of network requests and in total size), and to avoid any change of a [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).
That meant including my styles directly in my HTML.
It's possible to use Tailwind to generate just the class definitions that you need and then to inject those into your HTML, but I wanted to keep things more simple, so I used a combination of inline styles and CSS definitions in a `<style>` tag.

Overall, this works great.
The only downside is that the CSS takes up the majority of lines in my `index.html`.
Maybe I should loosen up about the number of network requests and move the CSS to a separate file?

Realistically, I'll probably continue reaching for Tailwind for any serious projects because I'm familiar with it, it makes it easy to quickly iterate on designs, and it makes certain things simple that are notoriously complicated in vanilla CSS.

## Using a package runner rather than `devDependencies`

I've worked on projects where package installation was a bottleneck in CI.
For this project, I tried using `bun x` (similar to `npx`) to avoid installing packages in CI that aren't actually used.

This is the project's `package.json`:

```json
{
  "name": "json-space-analyzer",
  "scripts": {
    "dev": "bun x concurrently -n server,bun \"bun x lite-server --baseDir public\" \"bun build src/index.ts --watch --outdir=public --sourcemap=external\"",
    "build": "bun build src/index.ts --minify --outdir=public",
    "format": "bun x prettier --write .",
    "lint": "bun x prettier --check .",
    "typecheck": "bun x tsc"
  },
  "dependencies": {
    "sunburst-chart": "^1.19.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.39.0",
    "@types/node": "^20.8.6"
  }
}
```

Here I'm using `bun x` to run `concurrently`, `lite-server`, `prettier`, and `tsc` without having to add them to the `devDependencies` list.

Pros:

- Fewer packages need to be installed.

Cons:

- No version pinning means that behavior could change unexpectedly.
- The `devDependencies` list is slightly misleading.

In this example, almost all of those packages _do_ get used (and therefore installed on first use) in CI, so installation speed isn't a strong selling point.
I'm unlikely to do this on future projects unless a specific package is slow to install and unused in CI.

# Conclusions

This was a successful toy project for me in that I tried tools that will become my new default choices.
Specifically, I'll start using Bun rather than Node+Yarn+Vitest+esbuild on future projects, and I'll start using Cloudflare pages for more static sites.

What languages, tools, or frameworks should I look into on future projects? If you have suggestions, I'm at james@jamesbvaughan.com.
