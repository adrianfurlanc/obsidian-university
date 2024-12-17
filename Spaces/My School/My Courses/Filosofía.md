---
Links:
  - "[[My Courses]]"
tags:
  - course
  - "#extra"
Professor: Juan González-Castelao
Semester: 1
Year: 2
Created: 2023-10-11 15:28
modified: 2024-12-17T12:28:40+01:00
---
\_Tags::  course
\_Links::  [[My Courses]]
___

## Info
\_Year::  2
\_Semester::  1
\_Professor:: Juan González-Castelao 

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