---
modified: 2024-05-07T18:27:57+02:00
---
Tags:: #🔍 
Links:: [[My School|🏫 My School]]
___

```button
name QuickAdd: Create Course Note
type command
action QuickAdd: Create Course Note
```
^button-clsz
## Current Courses

```dataview
table Professor
from #course AND !"Extras"
where Year = 2 AND Semester = 2 SORT file.name
```

## All Courses
*Sorted by most recently taken*
```dataview
TABLE Year, Semester
FROM #course AND !"Extras"
SORT Year desc, Semester desc
```



