---
title: I created a Markdown web-app!
date: 1-25-22
description: As a side project, I developed a Markdown web-app. With an accessible cloud file-storage, VS code editor, and much more.
---

![editor](/dotmd/editor.png)

[Open dotmd.app](https://dotmd.app)


I have always used Markdown for notes, documentation, etc. For a long time I used [Notable](https://notable.app/), then
I moved to [Typora](https://typora.io/), then moved to start using [StackEdit](https://stackedit.io/). All three
of these are great, and all three of these are the best at something.

* **Notable:** Great tagging system, nice editor/preview window, reliable, buttery smooth.
* **Typora:** I really like the UI/UX, the editor previews the markdown at the same time and I really liked that it did
not prohibit me but made my tying faster.
* **StackEdit:** I switched to StackEdit because I wanted to be able to save my filed in Google Drive and access the
files through Google Drive, but although it was a great App, I did not like the syncing with Google.

***So...***

I decided to make my own Markdown editor. I had a few goals:
1. Web based.
2. Familiar editor.
3. Efficient~*ish* Preview
4. Automatic Saving
5. One Click PDF
6. LaTeX Support
7. Accessible via a quick Google sign in.

I ended up developing what I call `dotmd.app`. After a Google sign in, you are greeted with a file system UI that is 
intuitive with drag & drop moving, editing names, deleting, etc. When clicking a file, you are shown a simple editor 
that makes use of the Monaco Editor (VS Code).

## Tech Stack
* NextJS
* Next-Auth
* TypeScript
* MongoDB
* Monaco Editor
* [silicon](https://github.com/element-ts/silicon/wiki) - a database management package I wrote in TypeScript that
links with JS objects in a typesafe way.

## Landing Page Info

![fs](/dotmd/fs.png)

### Your new Markdown Application!
A web-based markdown editor accessible on any device. Simply sign in with Google and all your files will be synced
automatically. Full markdown support, LaTeX, Github syntax highlighting, and much more!

### Intuitive Cloud File System
Create directories or markdown files on the fly. Rename, delete, or drag and drop. It is just like any other
file system.

### PDF Export Support
Easily export to a PDF by printing the page. The app will handle formatting for you.

### Dark mode
Of course you can't have an editor without dark mode. We didn't forget about it.

### Monaco Editor (VS Code)
The editor is powered by the same editor that runs VS code, use popular keyboard shortcuts, refactoring, etc.
All in the cloud!

### Full Markdown Support
Full markdown support! Lists, tables, headings, formatting. Full LaTeX (KaTeX) support and LaTeX font theme
available. Full syntax highlighting for source code blocks.
