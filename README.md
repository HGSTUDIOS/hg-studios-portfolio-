# HG Studios Portfolio

A responsive multi-page portfolio for Halleluyah Adesanya / Hallgo Tech Studios.

## Pages
- `index.html` — Home
- `projects.html` — Projects, filters and media viewer
- `about.html` — HG Studios + the creative behind the studio
- `contact.html` — Contact and social links

## Adding / removing projects
Open `projects.js`.

Each project is one object in `PROJECTS`:

```js
{title:'Project name', category:'still', label:'Still / Design', type:'image', src:'assets/project-name.webp'}
```

Supported `type` values:
- `image` — image project
- `video` — local MP4 project
- `youtube` — YouTube project; `src` is the YouTube video ID

Supported categories:
- `still`
- `motion`
- `video-editing`
- `3d`
- `uiux`
- `front-end`

### To add a project
1. Put the asset inside `assets/` (or a subfolder).
2. Add a project object to `PROJECTS`.
3. Refresh `projects.html`.

### To remove a project
Delete its object from `PROJECTS`.

No database or build process is required; this is a static website.
