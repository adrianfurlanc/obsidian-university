---
Links: '[[My Courses]]'
Tags: '#course'
Professor: 
Semester: 
Year: 
Summary: 
Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
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

## Assignments 
```dataview
table Deadline, Status
FROM #assignment and !"Extras"
where contains(Course, [[]])
SORT Deadline asc
```
