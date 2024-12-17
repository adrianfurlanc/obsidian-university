---
Summary:
  - - <%tp.file.title%>
Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: 2024-12-17T12:30:36+01:00
---
Tags:: #reviews/weekly
Links:: [[My Periodic Reviews]]
___

[[Calendar/WeeklyNotes/<% moment(tp.file.title, "YYYY-[W]WW").add(-1, 'weeks').format("YYYY-[W]WW") %>|<% moment(tp.file.title, "YYYY-[W]WW").add(-1, 'weeks').format("YYYY-[W]WW") %>]] ⬅️ [[Calendar/MonthlyNotes/<% moment(tp.file.title,'YYYY-[W]WW').format('YYYY-[M]MM') %>|<% moment(tp.file.title,'YYYY-[W]WW').format('YYYY-[M]MM') %>]] ➡️ [[Calendar/WeeklyNotes/<% moment(tp.file.title, "YYYY-[W]WW").add(1, 'weeks').format("YYYY-[W]WW") %>|<% moment(tp.file.title, "YYYY-[W]WW").add(1, 'weeks').format("YYYY-[W]WW") %>]]
## Recap
### Assignments
- 
### New Notes Created
```dataview
TABLE Tags as Note_Type, Created
from ""
WHERE contains(Created, "<% moment(tp.file.title,'YYYY-[W]WW').day(1).format("YYYY-MM-DD") %>") OR   
contains(Created, "<% moment(tp.file.title,'YYYY-[W]WW').day(2).format("YYYY-MM-DD") %>") OR 
contains(Created, "<% moment(tp.file.title,'YYYY-[W]WW').day(3).format("YYYY-MM-DD") %>") OR 
contains(Created, "<% moment(tp.file.title,'YYYY-[W]WW').day(4).format("YYYY-MM-DD") %>") OR 
contains(Created, "<% moment(tp.file.title,'YYYY-[W]WW').day(5).format("YYYY-MM-DD") %>") OR 
contains(Created, "<% moment(tp.file.title,'YYYY-[W]WW').day(6).format("YYYY-MM-DD") %>") OR
contains(Created, "<% moment(tp.file.title,'YYYY-[W]WW').add(1,'weeks').day(0).format("YYYY-MM-DD") %>")

SORT Created asc
```
## Reflection
Rating:: 
### Review
**3 great things that happened to me last week were**
- 

**The two most fascinating things I learned this week were...**
- 

**My favorite connection I made this week was...**
- 

**The main struggle I faced this week was...**
- 

**and if I were advising or mentoring someone dealing with the same struggle, I'd advise them to...**
- 
### Troubleshooting
#### Systems
**Have I had a healthy balance of collecting and connecting? Why or why not?**

#### Focus
**What did I get distracted by? How can I stay focused next time?**

**Could you have spent more time on something?**

**Could you have spent less time on something?**

**What steps will you take to implement the above into your schedule next week?**