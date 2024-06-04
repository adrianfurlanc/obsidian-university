---
aliases: 🏫 My School Dashboard
modified: 2024-03-13T19:25:14+01:00
---
Tags:: 
Links:: [[🏠 My Home]]
___

## Assignments
Go to [[My Assignments]] to see all

```dataview
table Deadline, Course
from #assignment AND !"Extras"
sort Deadline asc
```

## Current Courses
```dataview
table 
from #course AND !"Extras"
where Year = 2 AND Semester = 2
```
## Others
- [[My Concepts]]
- [[My Inputs]]
- [[My Lectures]]
- [[My Units]]