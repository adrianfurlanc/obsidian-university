---
semester: 4
tags:
  - "#🔍"
modified: 2024-05-23T17:41:03+02:00
---
\_Tags::  #🔍 
Links:: [[My School|🏫 My School]]
___

```button
name QuickAdd: Create Lecture Note
type command
action QuickAdd: Create Lecture Note
```
^button-x2o8


### Backlog 🟥

```dataview
table Course, Tema, Status
from #lecture AND !"Extras" 
where semester = 4 AND Status = "🟥"
sort Tema DESC
```

### In Progress 🟨

```dataview
table Course, Tema, Status
from #lecture AND !"Extras" 
where semester = 4 AND Status = "🟨"
sort Created desc, Tema desc
```

### Finished 🟩
```dataview
table Course, Tema
from #lecture AND !"Extras" AND #🟩
sort Created desc
```

Refer to [[My Step By Step Process For Taking Conceptual Lecture Notes In Obsidian]] to understand this view.
