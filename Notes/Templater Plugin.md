---
Created: 2023-01-16 22:10
modified: 2024-06-04T19:42:36+02:00
---
 Status:: 
Tags:: #plugin
Links:: [[Obsidian Community Plugins]]
___
  
Summary:: Template customization and automation using code snippets which look like `<% bla bla bla %>`

Templater Explained

![](https://youtube.com/watch?v=QpJbeP8f55A)

### Why?

By using templates, we can spend less time setting up generic links, [[Metadata]], tags, and titles so we can focus fully on note taking and writing :)

You can set up different templates to support the different note-taking, writing, or organization methods you have, and have tools like templater variables to widen the possibilities.

For example, one of these commands is `<%tp.file.title%>`, which gets turned into the note title upon file creation.

## Questions
### How to add templates into vault?
Watch this video to learn how to import and use John's specific templates:
https://youtu.be/7JMRrskgw7I?t=67

### How to use templates?
- To keep things simple I use the [[QuickAdd Plugin]]
	- To create a new type of note (lecture, etc), open command palette and run the `Quickadd: Run Quickadd` command via `Ctrl + Shift + P`
- Alternatively, you can use `Ctrl + Shift + T` to add a template to the current file

### What is the default template used on a new note?
In `Settings > Templater > Folder Settings`, it is set so any new note created in the folder of the Obsidian vault (denoted with the `/`) will use the `Note Template`
### How to modify existing templates?
- To edit the content of the templates themselves, find  the  go to folder `Extras/templates` and just edit to your liking :)
### How to create a new template?
- Create a new note in the folder `Extras/Templates` or any other subfolders inside
- Fill out the note (use existing ones like [[Note Template]] as a reference)
	- Add a Templater variable like <% tp.file.title %>
	- Add [[Metadata]] fields
## Anatomy
### tp.file.cursor
`<% tp.file.cursor %>` are jump points for the cursor, which you can jump to by pressing `Alt+8` or using the command `Jump to next cursor location`.

It will jump to the one with the lowest number first, so `<% tp.file.cursor(1) %>` would be jumped to before <% tp.file.cursor(2) %>

You can put these in your notes to quickly fill out different sections of a note when you create it for the first time.
### What do I put for status, tags, and links?
*Disclaimer: This is my personal interpretation and use case. Aidan has his own metadata system which you can check out in [[How To Identify Note Type And Status]].*
#### Status
Denotes the development of a note, which can then be used to query and create kanban boards to visualize progress (whether a lecture note is still unprocessed or if it's been converted into conceptual notes)
##### Examples
[[My Lectures#By Status]]
- Most notes will use basic colored emojis like 🟥 🟨 🟩 to tell whether something is not yet started, in progress, or finished
#### Tags
- Tags that may be used for querying different kind of notes together
	- ex) the different kinds of inputs like `i/articles` and `i/book`
#### Links
- Links to parent notes of the current note, both conceptually and in relation to your own life
- ex) A `Soccer` note could have a `Sports` link or a `My Hobbies` link
### Why are there double colons?
- It converts the text after the colon into [[Metadata]], which can then be displayed and used in [[Dataview Plugin]] queries. See the [[MOC Template]] queries for examples
### Why are notes sorted by file.mtime?
- Tables will show the date of creation, but will be sorted at their latest modified time to allow for notes that were created a long time ago but are still used frequently
## Troubleshooting
### Templater commands aren't loading fully
ex) `<%tp.file.title%>` and `<%tp.date.now("YYYY-MM-DD")%>`

If the templates don't automatically load upon note creation, be sure to enable the `Trigger Templater file on new file creation` setting in the `Templater` community plugin

If you manually import the templates each time via hotkey, then you might need to run a command to trigger the templates (you can manually do it by opening command pallete `Ctrl/Cmd + P` and then typing in `Replace templates in the active file`)

### Your Turn
![](https://embed.filekitcdn.com/e/ipyk1kAZUAWQreQYS6UoFE/9sJ5rRzrt5h7ykMavk6Nub)
[[Responses to Lesson Action Items#Templater Plugin]]

Once you have finished with the action items move onto the next lesson in [[Module - The Seven Obsidian Plug Ins That Will Explode Your Notetaking]].