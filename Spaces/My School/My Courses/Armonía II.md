---
tags:
  - "#course"
Professor: Manuel Martínez
Semester: 1
Year: 2
modified: 2024-12-17T12:19:04+01:00
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Info
\_Year:: 2 
\_Semester:: 1
\_Professor:: 

## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs" AND #armonia
```

## Lectures
```dataview
table Created, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```

