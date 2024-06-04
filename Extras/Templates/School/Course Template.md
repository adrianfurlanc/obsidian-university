---
Links: "[[My Courses]]"
Tags: "#course"
Professor: 
Semester: 
Year: 
Summary: 
Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: 2024-06-04T19:26:57+02:00
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Info
\_Summary::  
\_Year:: 
\_Semester:: 
\_Professor:: 

## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs" AND #
```



## Lectures
```dataview
table Created, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```
