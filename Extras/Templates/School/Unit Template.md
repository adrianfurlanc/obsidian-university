---
Links: '[[My Units]]'
Status: 
Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---
Status:: 
Tags:: #unit
Links::  [[My Units]]

Course:: <% tp.file.cursor(3) %>
## Concepts


### Retrospective Timetable
| Note | Revision 1 | Revision 2 | Revision 3 | Revision 4 |
| ---- | ---------- | ---------- | ---------- | ---------- |
|      |            |            |            |            |

### Unordered
```dataview
table Status from #concept
where contains(Unit, [[]])
sort Created asc
```
