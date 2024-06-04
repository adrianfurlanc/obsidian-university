---
Summary: 'Have more control and customizability over the characteristics of your notes'
Created: 2022-10-29 16:31
---
Status:: 
Tags:: #plugin
Links:: [[Metadata]] - [[Obsidian Community Plugins]]
___

Metadata Menu Explained

![](https://www.youtube.com/watch?v=6HZ3Cc10HS8)

\_Summary::   Have more control and customizability over the characteristics of your notes

> [!INFO] An outdated video showcasing the plugin's features
> https://www.youtube.com/watch?v=7o9j7WJfhi0

## Why I'm using this plugin
See my reasons in [[Metadata#Why to use one over the other]]
## FileClasses
The usefulness of this plugin comes from the main feature, `fileClasses`.

A `fileClass` outlines the [[Metadata]] fields of a note, and to apply this structure, you can add a tag with the `fileClass` name

Whenever you add the tag (ex. `#assignment`), it will refer to the `fileClass` with the same name, [[assignment]]

	[[assignment]]'s fields are, but also adds on the additional fields `Course` so you can assign what course the assignment is related to, and `Deadline` for the date

## Setting up a fileClass
- [Video](https://www.youtube.com/watch?v=QxXSuh7HUZY&ab_channel=MathieuDelobelle)

### Making a fileClass
- I have set the folder to store all fileClasses in `Extras/FileClass`
- Create a new note inside the folder with the name of the new fileClass then clear out the content to make the note empty
	- On the tab of the note, there should be a menu icon you can click to access the settings of the fileClass
	- ![](https://i.imgur.com/zz2fDzM.png)

In the menu, be sure to do the following:
- Go to `Fileclass settings`
	- Enable `Map with tag`
	- Add parent fileClass `all` to get the default values for Status, Tags, and Links
If there's overlap of metadata from using multiple `fileClasses` in one note, then it will prioritize the last tag you add to it.

### Adding fields to a fileClass
- Can click on the clipboard icon, which at the bottom will show all related fileClasses
	- Click the add icon to the right of the fileClass you want to add a field to
- There's a lot of customizability, but for the most part, you can just create your own selections
- Sometimes it will ask for a [[DataviewJS]] query (ex. links), which gives you the opportunity to dynamically choose what links are possible

### Overriding fields
For the inputs fileClass [[i]], I added a Status field with different options to override the default Status.

Once you set up your fields, you can try it out on a note!
## Usage
### Applying two fileClasses to a note
Just create another note like `friend` and add both tags.

### Editing Fields
Once you have a few fields for a fileClass and have tagged a note with it, there are two ways to edit the field:
####  Via Field Menu
- If you set up the fileClass, you will be able to see a new button beside the name of  the note in the:
	- tab
	- file explorer
	- link to the note
#### Inside your note via inline field
Whenever there is [[Metadata#Inline Metadata Fields]], you can press space to the right of the field and it will show up with suggested values (if configured to do so). This is most useful for fields like `Status` where there are only a few allowed values, or `Course` where you will only want to link it to a specific course
## View fields
And now, to see and use these fields, you can use [[Dataview Plugin]]. The following code:
````
```dataview
table Deadline
from #assignment AND !"Extras"
```
````
Will result in the following table
```dataview
table Course, Deadline
from #assignment AND !"Extras"
```

### fileClass Menu View
There should be an icon beside the title of a fileClass note, which should open a view to manage that specific fileClass.
#### Table View
One of the options is "Table View", to which you can easily modify metadata and search for notes.
#### FileClass Fields
Another way to create fields
### Field Options
#### Suggest based on dataviewJS query
- If you set a field to be a link, you can use a dataviewjs query to filter out options for the suggestion
- If you have a `Course` field for an `Assignment` note, you  can make the field only take in `Course` notes by setting the suggested dataview query to `dv.pages('#course')`
#### "Will" Options
`Accept a link`
- Create a dataviewJS query to find all relevant notes based on dataview
#### Lookup Fields
> [Example](https://www.youtube.com/watch?v=ad0nJf8TZP8&ab_channel=MathieuDelobelle)
- Created a field called `boys`, which found all notes that had a `#student` tag with `gender` set to `male`

Automatic queries that are run whenever you create a new inline field in your notes.

Essentially, you can attach a dataviewJS query onto a field so as soon as you create it, it automatically prints something.

In his video example, he uses it to get the averages of days.

### Your Turn
![](https://embed.filekitcdn.com/e/ipyk1kAZUAWQreQYS6UoFE/9sJ5rRzrt5h7ykMavk6Nub)
Once you finished this lesson check out the next one in [[Module - The Seven Obsidian Plug Ins That Will Explode Your Notetaking]].