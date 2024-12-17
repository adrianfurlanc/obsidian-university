---
Links: "[[My Courses]]"
Tags: "#course"
Professor: José Luis Centeno
Semester: 1
Year: 2
Created: 2023-10-16 11:42
modified: 2024-12-17T12:17:33+01:00
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Info
\_Year:: 2
\_Semester:: 1
\_Professor:: José Luis Centeno

## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs" AND #composicion
```



## Lectures
```dataview
table Created, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```

