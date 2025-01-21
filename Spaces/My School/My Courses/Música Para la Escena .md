---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - escena
Professor: Carolina Fontecha
Semester: 1
Year: 3
Created: 2024-10-11 14:57
modified: 2025-01-07T17:59:14+01:00
---
\_Links::  [[My Courses]]
___

## Inputs
```dataview
TABLE Source, Tema, Status
FROM "Spaces/My School/My Inputs" AND #escena 
SORT Tema asc
```
Explicación del Examen en la clase de Viernes 20 de diciembre. (Actividad Spot Publicitario - Tema 12)


## Lectures
```dataview
table Created, Tema, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Tema asc
```
