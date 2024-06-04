---
Created: 2023-01-16 18:50
---
Status:: 
Tags:: #plugin #flashcards
Links:: [[Obsidian Community Plugins]]
___


> [!INFO] Video
> Here's a [video alternative](https://www.youtube.com/watch?v=jAPn6yqrDxQ&t=985s) showcasing the basics of the plugin

Summary:: Helps implement [[Spaced Repetition]] and [[Active Recall]] into Obsidian using flashcards.
## Creating flashcards
### Structure
#### Tags
For the plugin to use flashcards from a certain note, it must have the `#flashcards` tag (like this note at the top!)

To organize your flashcards, you can add subtags, like 
`#flashcards/COURSE/UNIT/TOPIC`
ex) `#flashcards/Psychology100/UNIT1/LIMITS`
#### Types of Cards
- Inline cards can be used for simple definitions or phrases
- Multi-line cards can be used for paragraphs and bullet-point cards
	- They will end once you add a new line though
- Two-sided cards will create two cards
	- One will have the left-side as the front, and one where the right side has a front
#### Examples
Front of an in-line card ;; back of an in-line card

Front of a two-sided card ;;; Back of a two-sided card

Front of a multi-line card
?
Back of a multi-line card

Front of a multi-line two-sided card
?
Back of a multi-line two-sided card

Add {{curly braces}} to certain words for fill in the blank cards
## Using Flashcards
### View all flashcards
You can view all flashcards you have by using the command:
```button
name Spaced Repetition: Review flashcards from all notes
type command
action Spaced Repetition: Review flashcards from all notes
```
^button-review-all-cards

If you end up entering a flashcard, you can press the back button to see all of them, to which they will be organized based on the nesting of the `flashcards` tag
### View flashcards only from a specific note
You can also only select flashcards from a specific note:
```button
name Spaced Repetition: Review flashcards in this note
type command
action Spaced Repetition: Review flashcards in this note
```
^button-rbu2
### Cram flashcards only from a specific note
Or if you want to cram them (reviewing will not affect the score), then you can:
```button
name Spaced Repetition: Cram flashcards in this note.
type command
action Spaced Repetition: Cram flashcards in this note.
```
^button-qxtv

### Your Turn
![](https://embed.filekitcdn.com/e/ipyk1kAZUAWQreQYS6UoFE/9sJ5rRzrt5h7ykMavk6Nub)
[[Responses to Lesson Action Items#Spaced Repetition Plugin]]


