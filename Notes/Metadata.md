Status::
Tags:: 
Links:: [[🗺 Obsidian MOC]]

Metadata is information about a note.

Useful for building customizable [[Dataview Plugin|Dataview queries]]
### Types of Metadata
#### Frontmatter Metadata
If I wanted to add the data `hoursSlept` with a value of 8, I can add a property at the top of my note:
```button
type command
name Add file property (Ctrl/Cmd+;)
action Add file property
```
^button-805f

Frontmatter usually looks something like this:
```
---
hoursSlept: 8
---
```

But as of August 31 2023, Obsidian made it more user friendly by making it similar to Notion's properties 😁 
If you need to learn more, you can watch my video on it here
#### Inline Metadata Fields
Another way to create fields to have it inline in the text, with two colons after the name
- An example are the `Status, Tags, Links` fields at the top of the note

Make sure there's a space between the `::` and the value and the field is at the start of it's own line, or else it won't work. It should look something like:
\_`Field:: Value`

Having it after a bullet point also works.

If you do want to include it after some text though, you can use square brackets like so: [inTextField:: Value]

Here's proof 🤪
```dataview
table inTextField
where file.name = "Metadata"
```
#### Why to use one over the other
Frontmatter metadata (also known as properties), is useful for things that are easy to add.

But there's still some missing features that I personally need, and am using [[Metadata Menu Plugin]] to solve.

- Reason 1: Different types of notes have different set values for different fields
	- ex. For a note's status, [[My Lectures]] has 3 statuses while [[My Inputs]] has 4)
	- But thanks to [[Metadata Menu Plugin#FileClass Fields]], you can define what values can be for each type of note type you have by assigning it the tag.
		- If you look at [[i]]
- Reason 2: There's no way to automatically suggest property values unless you have already set it in a previous note
	- But with [[Metadata Menu Plugin]], you can customize what you suggest. For example, in the `Course` field of the [[Unit Template]], it will search through all courses you have in your vault, even if you haven't necessarily used that unit as a value for the `Unit` field yet in a different note
- Reason 3: You can only access the properties of a note when you have it actively open, via the top menu or the sidebar pane
	- I'm sounding like a broken record, but with [[Metadata Menu Plugin]], you can access it via link or anything! Check out any note's icon to the right like [[Psychology 100]], there is a clipboard icon you can use to adjust the fields
### Types
- Can be your average variable types found in programming languages like numbers, text, and checkboxes (true/false booleans)
### Uses
- Can view this data in [[Dataview Plugin|Dataview queries]] for a semi-automatic way to sort your notes and resurface them when you need
### Common Metadata
`Status` helps with [[Managing the different note types#Viewing|keeping track of notes you need to work on]]
`Tags` gives you a place to put hashtags to classify the note type it is, which is useful for plugins like [[Metadata Menu Plugin]]
`Links` help you link things to a parent note
`Course ` is used to link to it's parent course note
`Unit` is used to link to it's parent unit note
`Deadline ` should be formatted in `YYYY-MM-DD`
### Plugins
To help make classifying metadata per note easier based on the type of note it is, I personally use [[Metadata Menu Plugin#FileClass Fields]], which lets me classify a note using a tag.
