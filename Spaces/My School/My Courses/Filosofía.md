---
Links:
  - "[[My Courses]]"
tags:
  - course
  - "#extra"
Professor: Juan González-Castelao
Semester: 1
Year: 2
Summary: Hablar mucho sin decir nada
Created: 2023-10-11 15:28
modified: 2024-08-12T17:23:02+02:00
---
\_Tags::  course
\_Links::  [[My Courses]]
___

## Info
\_Summary::  Hablar mucho sin decir nada
\_Year::  2
\_Semester::  1
\_Professor:: Juan González-Castelao 


## Syllabus
```dataview
table Summary
from #unit and !outgoing([[]])
where contains(Course, [[]])
sort Created asc
```

## Lectures
```dataview
table Created, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```

## Inputs
```dataview
table Source, Status
FROM #i AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```