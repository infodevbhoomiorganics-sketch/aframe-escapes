<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep each content page in its own TanStack route and share only site chrome/editorial primitives; this preserves distinct navigation and search metadata.
- Keep the owner's optimized photographs as direct ES module imports in page/components, never an image manifest; the photography is the site's primary identity.
- Send enquiries through a prefilled WhatsApp link rather than persisting a form; no booking backend is requested or connected.
