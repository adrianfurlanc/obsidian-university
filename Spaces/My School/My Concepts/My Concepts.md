Tags:: #🔍 
Links:: [[🏠 My Home]]
___

All the ideas in this world are yours to explore ;)
```button
name QuickAdd: Create Concept Note
type command
action QuickAdd: Create Concept Note
```
^button-muao
## By Status
### No Status
```dataview
table Created
from #concept AND !"Extras"
where !Status
sort Created desc
```
### Backlog 🟥
*An idea I need to expand upon*
```dataview
table Created
from #concept AND !"Extras" AND #🟥
sort Created desc
```
### In Progress 🟨
*Currently expanding, connecting, and making flashcards inside (if necessary)*
```dataview
table Created
from #concept AND !"Extras" AND #🟨
sort Created desc
```
### Finished 🟩
*A expanded, connected upon atomic note*
```dataview
table Created
from #concept AND !"Extras" AND #🟩
sort Created desc
```
