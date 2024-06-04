---
semester: 3
Links: "[[My School|🏫 My School]]"
Tags: "#🔍"
modified: 2024-05-21T12:58:56+02:00
---
\_Tags::  #🔍 
\_Links::  [[My School|🏫 My School]]
___
```button
name QuickAdd: Create Input Note
type command
action QuickAdd: Create Input Note
```


## By Status

### Backlog 🟥
```dataview
table Course, Tema, Status
from #i/unir  AND !"Extras" 
where semester = 4 AND Status = "🟥"
sort Tema DESC
```

### Reading 🟧
```dataview
table Course, Tema, Status from "Spaces/My School/My Inputs" AND #i/unir where Status = "🟧"
AND Semester = 4 
SORT Tema DESC
```

### Note Making 🟨
```dataview
table Course, Semester, Tema, Status from "Spaces/My School/My Inputs" where Status = "🟨" AND Semester = 4
SORT Tema DESC
```

### Finished 🟩
```dataview
table Course, Semester, Tema, Status from "Spaces/My School/My Inputs" where Status = "🟩" AND Semester = 4
SORT Tema DESC
```

## By Book
```dataview
table Course, Tema, Status from "Spaces/My School/My Inputs" AND #i/book  where Status = "🟧"
AND Semester = 4 SORT Tema DESC
```
