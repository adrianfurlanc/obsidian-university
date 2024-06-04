---
Links: '[[My Courses]]'
Tags: '#course'
Professor: 'Manuel Martínez'
Semester: 2
Year: 1
Summary: 'Principios de armonía'
Created: 2023-10-11 19:02
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Info
\_Summary::  Principios de armonía
\_Year::  1
\_Semester::  2
\_Professor:: Manuel Martínez

[[Acordes]]
[[Bajo Cifrado]]
[[Conducción de Voces]]
[[Séptima de Dominante]]
[[Cadencias]]
[[Acordes de cuarta y sexta]]
[[Notas de Adorno]]
[[Dominantes Secundarias]]
[[Acordes de Séptima]]
[[Modo Menor]]
[[Sexta Napolitana]]
[[Modulación]]
[[Tonalidad Expandida]]

## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs/Armonía I"
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
