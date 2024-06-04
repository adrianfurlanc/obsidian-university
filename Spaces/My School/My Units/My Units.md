Tags:: #🔍 
Links:: [[My School|🏫 My School]]
___

*Shows all the units across all course you're in*
```button
name QuickAdd: Create Unit Note
type command
action QuickAdd: Create Unit Note
```
^button-6a62
## All Units
```dataview
table Course
from #unit and !"Extras"
sort file.ctime desc
```
