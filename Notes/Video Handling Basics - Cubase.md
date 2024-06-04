---
tags:
  - yamaha
modified: 2024-01-24T19:04:17+01:00
---
- The video has been imported directly to our timeline based on our cursor position.
- I see a single Video Track and the digital audio file from the video’s file extracted into it’s own separate track
- Select audio and video tracks and group them
- If I don’t have the timecode burned in and want to apply them : Studio \> Studio Setup \> Video Player \> Show Timecode
- I can have 2 different formats (a primary and a secondary time display)
- If I always want a timecode displayed click Studio \> More Options \> Time Display
- To match the timecode off Cubase and the imported video: 
	- Select bars and beats
	- Go to the very beginning of the video
	- Grid = Grid and Bar = Bar
	- Project \> Set timecode at cursor
	- Input the correct timecode
	- The video starts at second 4 yet the cursor is off the grid and it starts in 1:1:1. To align them: Project Setup \> Project Start Time and choose 4 seconds
	- Say yes in the dialog
	- If I switch to my time display I can see that the Video Player and Cubase’s are not aligned. Project \> Project Setup \> Display Time Offset. Input the number of hours, minutes, seconds and frames so they match. (Math)
	- Say no to the dialog

- I may not get my marker exactly where I want. Go to Transport \> make sure you have Use Video Follows Edit Mode
- With the grid disabled I can adjust the marker to fall into very specific times
- If I want a specific number of bars between markers: Add a Tempo Track
- Tempo Tracks has 2 modes. 
	- One is musical mode, elements and tracks that are in Musical Mode will base their timing based on the bar in beat.
	- In linear mode elements will base it based upon the timecode value
- If I want the markers to maintain the position that they are: The Marker Track should be in linear mode (the clock)
- Right click on the track header and select Track Control Settings and make sure that Toggle Time Base is activated

	- I want to make sure that my music is aligned directly to my different elements.
	- If I want to make a phrase exactly 8 bars. I need the ninth bar to end up at the marker. This is a scenario where I would use Time Warp
	- Time warp lets me drag from a measure to wherever I wish. When this happens there are tempo changes that are reflected in the Tempo Track
	- If I wanted that element to be aligned to that moment in time I would place that in linear mode as I adjust tempo values the audio would align with that timecode position
	- If I want to delete a scene: Command + Shift and select the scene. Then go Edit \> Range \> Delete Time
