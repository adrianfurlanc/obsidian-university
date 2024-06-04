---
Created: 2023-02-09 19:42
---
Status::
Tags:: #plugin
Links:: [[Obsidian Community Plugins]]
___

**Dataview Explained**

![](https://www.youtube.com/watch?v=8yjNuiSBSAM&list=PL7oLu8NfQd86ZT19TSjZHreCztRnsY2VV&index=2)


> [!INFO] Video
> If you want to better understand how Dataview works, check out how I use queries to sort my school notes [here](https://youtu.be/0UTzpIdLbVo?t=98)

> [!INFO] Documentation
> If you want to see a complete list of Dataview's features, you can check their [documentation](https://blacksmithgu.github.io/obsidian-dataview/)

Summary: Turns your vault into a database you can extract certain notes and data from

## Uses
Let's say you had a note to keep track of all your assignments in a note like [[My Assignments]].

If you were to keep track of all assignments manually, you would have to add a link to each new assignment, or view them all through the backlinks pane.

I mean, that works fine for a couple, but what about semesters upon semesters of assignments? Would you have the patience to continue adding those links each time? And what about the other places in which you need to see them, like from the course note the assignment is from? And what if you wanted to see them a different way, like sorting them by deadline or by grade you got?

You would then have to manually type out these links again and again, which is a huge waste of time.

Instead, we can let code automate this process for us ;) As soon as we make a note, we will be able to find it where it's relevant.

For example, the [[Course Template]] lets us see all related assignments, lectures, and concepts related to a course.
## Types
Dataview lets you see these notes through queries. Each query is made of different expressions to help determine what notes you want to show and why. And there are two main types used throughout the course:
### Lists
- Only show a link to the queried notes
	- (ex. see [[Course Template#Concepts]])
### Tables
Let you also see the [[Metadata]] of a note as columns.
- The use cases for this include
	- categorizing notes like in [[My Assignments]] based on completion, while also showing its started/finished dates
- ex) See [[Obsidian Community Plugins#List]] and how the `Summary` value is being shown in the table

## Query Anatomy
When there is a Dataview query in a note, you can hover over it and look to the left of it for a `</>` icon that you can click to view the code.

Alternatively, you can also reach the code by putting your selector near it, then using your arrow keys.

````
```dataview

TABLE|LIST <field> [AS "Column Name"], <field>, ..., <field>

FROM <source> (like #tag or "folder")

WHERE <expression> (like 'field = value')

SORT <expression> [ASC/DESC] (like 'field ASC')

... other data commands

````
`FROM`
- It selects certain notes based on its characteristics like:
	- What folder it's in
	- If it's linked to a certain note
	- What tags it has (see [[Obsidian Community Plugins#List]])
	- Whether it has certain metadata, etc

`WHERE`
- Usually used for filtering out notes based on their [[Metadata]]

`SORT`
- Used to show the order in which notes are displayed

### Vault-Specific
To prevent templates, `fileClass` notes, and other setup-related notes to be shown in these queries, we remove them  by adding `AND !Extras`

## Creating Your Own

If you're not really into programming then it might take some time to get used to, and manual search is always an option.

I would recommend just looking at the existing queries in this vault to see how notes are found.

If you need help creating your own queries, you can visit https://s-blu.github.io/basic-dataview-query-builder/ for a step-by-step survey on what kind of form you want to make, or watch my video at the top of the note.

## Your Turn
![](https://embed.filekitcdn.com/e/ipyk1kAZUAWQreQYS6UoFE/9sJ5rRzrt5h7ykMavk6Nub)
[[Responses to Lesson Action Items#Dataview Plugin]]

Once you have finished with the action items move onto the next lesson in [[Module - The Seven Obsidian Plug Ins That Will Explode Your Notetaking]].