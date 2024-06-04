---
tags:
  - yamaha
modified: 2024-01-24T19:03:01+01:00
---
 - Media part of right section shows all the VST plugins I have installed
-  Add VST instruments from the Media area in the right zone and dragging them to the grid or track header
- Press the attribute filter area and I can filter down by library, Category, SubCategory and SubStyle. Click the preset to the right to preview the sound and double click to confirm my selection
- I can also right click the track list and select Instrument Track
- Press shift+delete to remove a track from the track list

- Go to the VSTi tab
- Select track for single timbre instruments and rack instrument for multiple timbre instruments (like HALion Sonic SE)
- Only the first program is being triggered and that is because I am using a MIDI channel and not an instrument track
- MIDI tracks will only transmit MIDI on one channel . (This is why only the first program is triggered, the MIDI track has selected channel 1)
- If I add another MIDI track Cubase is going to auto route to the last plugin that I worked with and increase the MIDI channel by one
- By default all instruments loaded will be output from a single output on the mixer

## Recording in Cubase
- Create an instrument track and load a preset
- Activate the metronome by tapping c on the keyboard or the button on the lower right
- Change the tempo by click and dragging up or down and double click to set an exact value
- To set the metronome according to taps click on Project -\> Beat Calculator and then tap on the spacebar. Then tap At Tempo Track Start
- Locators are used to define the cycle range that I am working within. I can select them by clicking and dragging on the top ruler or command click to set the left locator and option click on the ruler to set the right locator
-  The loop can be activated with the button on the bottom or tapping the button /
	- To go back to the left locator press b on the keyboard or use the button on the transport (The first set of numbers 1.1.0)
- Record by clicking on the record button 
- To quantize a recording press the q key
- To activate AutoQuantize press the right most button on the bottom (it has an AQ symbol). Just like on Live
- The resolution that is quantized to is set on the top in Quantize Presets (to change the time signatures)
- To change the count in at record click Transport -\> Metronome Setup. Change in the count in section

## Working with MIDI parts
- To zoom out press g
- To zoom in press h
- Hold Shift and the keys g or h to zoom vertically in or out
- Press and hold middle mouse button to pan left or right
- Alternatively I can hold shift and the scroll wheel
- Click and drag events on the grid to move them. They can also be moved between tracks.
- Option drag to copy to another place in the grid
- Press command + D to duplicate or click and drag the button located at the center right of the event
- Clips can be resized by click and drag the buttons in the lower corners
- There is an info bar that allows me to set attributes for the MIDI part directly
	- Name (changes the clips label)
	- Start (determines where the part begins =\> Bars / Beats / Sixteenths / Ticks)
	- End (determines where the part ends)
	- Length (changes the length of the clip)
	- Offset (Allows me to move the contents of a MIDI part without moving the part itself
	- Mute (allows me to mute on or more midi parts)
	- Lock (restrict several things)
	- Transpose applies realtime nondestructive transposition to the selected MIDI part. Command click to reset
	- Global Transpose
	- Velocity (change the velocity of the MIDI part)
	- Root Key

## Using tools in the Arranger
- The toolbar at the top has 13 buttons
	- Object Selection. Press it twice to reveal a menu. 
		- Sizing moves contents
			- If I were to resize from the beginning or the end of a MIDI part than its contents will be shifted along as I do so.
			-Sizing applies Time Stretch
			- Allows me to compress or expand the timing of the part by clicking and dragging
	- Range allows me to choose a range with in the MIDI part or multiple MIDI parts. (Useful for moving and copying the MIDI parts)
	- Pencil (Draws blank MIDI parts)
	- Eraser (Erases MIDI part)
	- Scissors (Make cuts within a MIDI part) I can also do this by choosing the Object Selection tool and holding option and clicking. Hold option and clicking the MIDI part. Cubase will subdivide the part according to the distance between the beginning of the part and the first cut that I make
	- With adapt to zoom turned on I can zoom in and then subdivide the part in smaller (or bigger) chunks
	- Glue. (Joins split parts) Click on the MIDI part or select multiple events and then click. Option clicking will join all the parts of a track.
	- Mute  (mute a MIDI part). Shift + m mutes the MIDI part/s. Shift + u unmutes them
	- Zoom (allows me to zoom into areas of the arrangement either by clicking and dragging. Or single clicking. Option clicking will zoom out. (Not very useful)
	- Comp
	- Time Warp / Warp Grid
	- Line
	- Play (allows me to preview MIDI and audio clips by clicking and holding on the MIDI part. If I click on Play a second time I can choose scrub mode. (The play head is repositioned as I scrub)
	- Color
	- Right click anywhere to change tools. To reveal menus click and hold the left mouse button while right clicking

## The Key Editor
- Double click any MIDI part (top) to view the Key Editor in the lower zone
- Dragging up and down on a MIDI note to change it’s velocity
- Press the right arrow key to cycle forward through the remaining MIDI notes
- Press command and the right or left arrow key to change the length of a note 
- Use the draw tool to enter a MIDI note. This can also be done by holding option and clicking with the selection tool
- The trim tool acts like a kind of scalpel for note lengths. Hold option to click and drag (removing the beginning).  ??

## Editing Velocities
-  With the default selection tool if I click and drag in the velocity lane I can draw new velocities for all the events
- Apply changes to certain notes only. Select the notes and hold shift while drawing new velocities
- Press command and a note in the piano roll to select all events of the same pitch
- Additional controls
	- Move the velocities vertically
	- Tilt them (by click-dragging the top right button)
	- Or scale along a center point
- Line tool allows me to draw a straight line across velocity events. Click and hold on the line tool button to change it’s shape.
- With the line tool I can draw MIDI notes in the piano roll. The resolution is the quantize resolution

## Editing Controllers
- I can adjust MIDI CC’s
- I can use the same methods as with velocity to enter values in the controller lane
-  MIDI CC can be selected and manipulated as any other event
- To access other CC’s click on the button in the controller lane and select setup. This brings up a hidden list where I can add the controller that I need

## The Drum Editor

- To open the Drum Editor add an event and then click MIDI \> Open Drum Editor
- Events in the Drum Editor don’t need length but instead need pitch and position
- Click to add a percussive note
- Click and drag up or down to set the velocity
- I can also set different drum lanes to different resolutions. The default is 1/16
	- Click and drag horizontally to add a series of notes 
- I can change the default velocity that notes are inputed at the top
- Use the erase tool to remove a note or the drumstick tool and click on the note
- Press shift while adding a note to enter a single note 

## MIDI Functions
- I can edit individual notes by hand but it is preferable to use MIDI functions to apply the changes 
- They are stored in MIDI \> Functions
- There are s everal functions
	- Legato: Join all the notes together
	- Fixed Lengths: Fix the length to the current quantize value
	- Delete Overlaps (mono or poly): If it is only it will remove the overlaps between notes
	- Velocity:
		- Add / Subtract: I can Add or subtract by a fixed amount
			- Compress / Expand is useful for exaggerating or reducing the differences in velocity between different notes. If the ratio is set to 100% the existing velocities would be preserved. Any less than 100% then the contrast between loud and soft becomes less noticeable. If I select a ratio of more than 100% it accentuates the differences between the velocities.
		- Limit allows me to set an absolute lower and upper limit
	- If I want to even out and make it completely uniform I can click Fixed Velocity
	- If I have two events in the same part of the grid the volume of that note will increase even if the second note is not showing. To fix this select Delete Doubles
	- Delete Notes: 
		- Each square represents 1/16. This helps me delete notes 1/6 or shorter
		- If I want to delete notes that are softer then what I want I use Minimum Velocity
		- Delete Controllers: Delete all MIDI CC data
		- Thin Out Data: Some legacy hardware won’t respond well to a large number of MIDI events in a short span of time, that can cause timing problems or MIDI overloads.
		- Extract MIDI automation: Convert MIDI data into automation data. 

## Track Versions
- Go to lefthand zone, Expand Track Versions and press New Version. The MIDI data disappears and the v2 is created. Click on v1 to change the track to that specific version. Change the name by double clicking on it.

## MIDI Record Modes
- To overdub a Ride cymbal, for example, I could record directly on top of the event and the default behavior is that those notes will be merged into the existing MIDI part.
- At the bottom left of the screen there is a button called Set Up MIDI Record Modes.
	- Merge is the default behavior
	- New Parts: The crosshatch pattern indicates that there are two tracks on top of each other. If I press the Show Lanes button my new MIDI is in it’s own lane. I can mute a lane by clicking on the bottom of the event.
	- Replace: Useful when using punch-in and punch-out markers. When I record in this manner any existing MIDI data is erased.
	- To the left of the bottom track controls there are two buttons, the punch in and the punch out. By clicking them and also clicking the Lock Punch to Locators button to change the punch-in or out separately from the loop I can record in only the range that I wish

- Cycle Record Modes
	- Mix is the default behavior. With each new pass of the playhead within the cycle range the MIDI data would just be added to the same part. Make sure to set the Merge mode 
	- Overwrite: If I want to record in a cycle range along my other instruments and improvise new ideas

- Keep last:
	- Only the last cycle is kept

- Stacked:
	- Works a little bit like New Parts in linear mode, except in this mode. All takes are muted and only the most recent is heard.

- Mixed Stack: 
	- Behaves very similarly to New Parts. This just puts subsequent overdubs onto there own note lanes

## MIDI Modifiers & Inserts
- Right click on the left zone and make sure MIDI modifiers tab is checked.
- MIDI Modifiers
	- Transpose: It’s possible to transpose MIDI in a part in real time without altering the source notes. This can also be done in the Transpose slider in the MIDI modifiers. Changes are applied to the entire track. Useful to play in a scale that is easier for me to play.
	- Randomization: 
		- MIDI Modi
		- Enable Random Position and set a minimum and a maximum value in ticks.
		- To make the effect permanent click MIDI \> Freeze MIDI modifiers
- MIDI Inserts
	- Add FX to events (arpeggiators, etc.)
	- There is a real time quantizer. Adds non destructive swing or quantization to my MIDI parts
	- As with the MIDI Modifiers the actual MIDI data itself isn’t being changed.

# Audio

## Recording Audio
- Right click on the track list and select Add Audio Track
- The track dialogue allow me to choose the input source
- Mono and Stereo 
- To deal with latency select Studio \> Studio Setup \> Audio Driver \> Control Panel \> Buffer Size
- Once I record a track the playback is muted and that is because track monitoring is enabled (button next to record)
- Click preferences and select VST. There is a drop down with monitoring style.
	- With While-Record: enabled monitoring will be active so long as the track is armed for recording
	- While-Running enabled: Monitoring is disabled while stopped or while playing. Monitoring is activated when recording. 
	- Tape Machine Style: Monitoring is automatically activated when the song is stopped.

- To set a basic FX mix
	- From Arrange view enter Inserts section and choose a plug-in
	- To bypass the plug-in press the button to the far left of the plug-in.


## Audio Record Modes
- Click the button on the very bottom left:
	- Keep History: 
		- When I have two events at the same time the most recent one is the one that plays
		- To choose which part I want to play I click on the arrow at the middle bottom (Take 1, Take 2, etc.)
		- I can also choose show lanes, click on the middle bottom arrow and select which take will be played
	- Cycle History + Replace
		- It will override what is already there
	- Replace
		- Will override any existing data at the point the recording begins
		- Useful for punching in and out



## Importing Audio
- I can add loops and samples from in the Media tab of the right zone
- To add to the Arrangement click and drag the loop or sound into the arranger
- To sync to the tempo of the song enable Musical in Mode at the top bar
- In Media \> Home \> File Browser. Navigate the file system and go where the samples are stored
- If I import audio that has a different sample rate and bit depth, Cubase will give me an option to Convert and Copy to project if needed. This will create duplicate files in the new sample rate and bit depth
- Define the tempo of the audio files.
	- Access the pool (Ctrl + p) or Project \> Pool
	- Expand the audio folder.
	- Select all the out of tempo loops
	- Double click on the tempo and set the correct one


## Audio Parts
- There are extra controls on my parts in the arranger
- Increase or decrease the volume of the sound or loop by dragging the middle top arrow of the part
- Fade ins and fade outs are made by dragging the handles in the top left and top right corners of the part. Can also be done in the info bar (top)
- Crossfading is done by selecting the overlapping MIDI parts and clicking on either part and pressing x.
- I can choose the algorithm that is used to apply the real time stretching and pitch shifting. There are very many modes available by clicking on Algorithm in the info bar.
- In tape algorithm playback speed is linked to pitch (old school sample sound)
- Formant modes are used for vocals


## Audio Comping
- Comping is assemble the best parts of many different takes to create one master take
- Show lanes. The most recent take is shown at the bottom
- Go to the first take and work my way down through them.
-  Use the split tool or option click with the select tool to create a cut
- Then move on to the next take.
-  Out of all the different parts I can create one overall take that combines the best of all of them
- Click on hide lanes and I have only the one take
- If a particular take is ahead or behind of the click but otherwise good I can slide the content of each part by holding control + option and then dragging the waveform
- While comping it is possible to have pops and clicks where the different parts connect. To correct, select them all and then press x.
- To finish select the finished part and choose Audio \> Bounce Selection and choose Replace Events

## Pitch Edit
- Double click on the event. This opens up the lower zone and it has also changed the left zone. The important one in this zone is VariAudio
- By clicking on Edit VariAudio Cubase will calculate all the pitches in the audio. This makes the lower zone resemble the MIDI editor.
- The different blocks can be dragged and moved up to raise the pitch or move down to decrease the pitch
- To hear the blocks when they are clicked, the Acoustic Feedback button must be active.
- I can adjust the phrasing of audio by dragging the warp points (at the sides of the block) . Neighboring audio is affected
-  To quantize the pitch of the song select all events and slide the Quantize Pitch slider up or down to change the pitch
- If I hear to much vibrato I can slide the Straighten the Curve which will flat the notes out
- The lower arrow if moved changes the Pitch Quantization while the top one will change the Straighten 
- When I hover over the note event the tool changes into the scissors tool and this allows me to create new note segments which can then be repitched to create new melodies.
- To change the formant of a part, select the blocks I want to change and then slide the Shift Formant
- I can option click and drag from the sides to change the boundary of the block.
- To offset a group of notes, then click on Relative Mode (in Pitch Snap Mode to the top left)


## Offline Processing
- Click Direct Offline Processing
- This opens up a dialogue where I can apply plug-ins and processes to my audio clips. They are destructive permanent edits. The reality is I can edit or move them at any time
- After adding a process or plugin a button is displayed in the top right of the event. To by pass these changes click the button to the left of the effect
- I can add more then one process at a time
- If I choose Pitch Shift in Offline Processing I save CPU level (from regular shift pitching in the info bar). This is good to change the pitch non-destructively 
- To remove a process, right click and then delete
- The same happens with the VST Plugins


## Render MIDI to Audio in Place
- Select the MIDI part (event) and while holding down the control key, right click it and choose Render in Place
- Render Settings
- If I had multiple splits or multiple parts selected I can choose to render them as separate events or combine them into a single file
- I can choose whether or not to render with any inserts (dry)
- If I use inserts that have a long decay times, reverbs or delays, they will be included in the render
- When I press enter the MIDI will turn into an Audio track
- Render in Place \> Source Event Settings \> Keep Source Events Unchanged the MIDI data will remain unmuted
- To reverse an audio part command + right click and then choose Reverse from the list.

### The Sampler Track ?
- I can also change MIDI to audio from the Sampler Track
- Make sure the bottom zone is visible
- Click on the sampler control tab at the bottom (next to the Editor)
- Click and drag the MIDI part to this Sampler zone
- Cubase creates a new Instrument track that has created a render of the MIDI part with in it 
- Things Sampler can do:
	- Reverse
	- Basic Repitching 
	- Specify loop mode (continuous)
	- The green L markers are the loop borders and can be resized accordingly
	- Enable Realtime Audio Warping. It is used for creative time stretching or compression effects
	- It has a filter with an editable filter curve
	- An Amp Envelope
	- I can set a preset from the menu

## Automation
- Open the plug-in and enable Write Automation
- As I play I can change the parameter I want while recording
- As Write Automation is enabled I can do the same thing to any other parameter in the plug-in
- For every automation I introduced it has created an Automation Lane
- Suspend automation by disabling Read (green button to the left of Write)
- I can draw automation by hand. Click on Append Automation Track then click on the dropdown and by default it will show me some common channel parameters. If I click on more then the folder for my VST instrument and choose a parameter to automate.
- I can draw in single points and then manipulate them or press option and drag them to freehand draw
- Add a curve by clicking in between the single points
- Automation points can be manipulated as I’d expect (select, move, drag, tilt controls)
- The same is true for the bottom of the mix console
- All this data can be attached to the event by enabling Automation Follows Events. (To the right of suspending animation). This means that if the part is moved the automation moves with it. (It includes duplication)
- If I don’t enable Automation Follows Events than I can move the part without the automation
- To delete automation, select and then press delete
- To delete automation lanes, select them, right click and select Remove Selected Tracks
- I can also view animation on a track by right clicking on it and choose Show Used Automation


## Audio Inserts
- Go to the right zone, click the Media tab \> VST Effects and click and drag Audio or Instrument track that I want to put the effect on.
- Another way to go about it is to select the channel instrument, insert it into  a blank spot in the Insert dropdown and then browse to the effect that I want.
- In the Mixer there is an Insert Rack. Here I can see which effects have been added.
- Bypass all the inserts by clicking on the blue circle or bypass a single insert by clicking the button to the left of the insert.
- I can click an empty slot and choose an effect.
- Inserts can be moved or copied (option drag) between tracks

### Link Groups and VCAs ?
- If I shift select two or more faders (in the mix console) Qlink is enabled. This means I can move both faders at the same time
- I can create a permanent link group by pressing link (at the top in the toolbar). I can name it and choose what properties I want to be linked between them
- Now I can move the faders without pressing the modifier keys. This also means that I EQ is added to both channels 
- Shift select the drum tracks, create a link group, rename it and click on “Use VCA fader” (it disables the volume link). Now I can use one master fader to control the volume of all selected tracks and the difference between them is scaled proportionally. And I can make individual adjustments to each fader.

## Group Busses
- With all the selected channels (drums) = right click and choose “Add Group Channel to Selected Channels”
	- Decide if it’s stereo or mono, set the audio outputs and rename the Group
	- Groups differ from VCA faders in that audio actually passes through the group channel. If I expand the routing tab instead of going to Stereo Output, the channels go to the drum group
	- Any inserts I make on the group will affect the audio that is summed into it.
	- I can create nested groups

## EQ and the Pre Section
- To EQ I can use the EQ rack in the mix console
	- The EQ section gives me access to 4 filters
	- Hi-Shelf, Low-Shelf, and two Parametrics. The filter type can be changed by pressing on the icon in the top right of each filter band
	- If I click on the visual field I will open a large editor window where I can directly manipulate the EQ curve. 
	- I can adjust the Q by using the mouse scroll-wheel on the visual display or using the Q control (below the frequency in the EQ rack)

	- Another way of EQing is by using the “Edit Channel Settings”
	- I can see all 16 insert slots in the left panel, a bigger visual display, the EQ controls at the bottom
	- I can click on the “Show Equalizer Knob Controls” to change the controls to a more console style EQ. It also gives me access to the High Cut and Low Cut filters. 
	- The EQ is applied before the inserts

## The Channel Strip
- In the rack there is a row of Strips
	- It gives me access to several different types of effects useful for mixing
	- If I solo and choose the snare drum, I can go to the tools (at the bottom) and use the envelope shaper to add more sustain
	- Choose the limiter to limit peaks that have been occurring
	- I can also see this view by clicking on the channel settings and then clicking on the Channel Strip tab
	- Gate, Compression, EQ, Env Shaper, Saturator and Maximizer are available

## Send, Pre & Post Effects ?
- Sends are especially useful when adding Reverbs and Delays
- If I want to put a reverb on a snare and toms. So rather than using the same reverb in both channels as an insert, I can right click on the blank Send slot and choose “Add FX Channel to Send 1…”. After this choose the plugin I want to use (it can be multiple plugins)
- The dry / wet setting must be set at 100%
- Pre -/ Post Fader
	- The default behavior (Post Fader) is if I bring the fader of a source track up and down, the level of the send effect will go up and down with it. This is because the signal is being sent to the reverb after the fader. If I switch to Pre Fader mode, this send level remains constant regardless of the level of the fader. ?
	- An example of Pre Fader: Automate the dry signal to come slowly into the mix, allowing me to hear the reverb on it’s own.
	- Insert Effects can also be Pre or Post Fader. There is a green line in the Insert FX list. Everything above the green line is Pre Fader and everything below it is Post Fader. If I put a distortion effect after the fader, then the fader would effectively be controlling the amount of signal that goes into the plugin.
	- To have more Pos t Fader Fx channels, move the green line to whichever place in the insert slots.

## Track visibility, Snapshots and History
- There are Track Visibility controls in a tab of the left sidebar. Simply uncheck the track that I want to hide.
- The next tab is a complete History of any changes that I make in the mix console.
- To undo changes I made, simply click above the change that I want to make.
- The final tab is the Snapshots tab. Snapshots capture my mix as it is in any given moment in time. Click the camera above the tab to capture a Snapshot. I can rename it. 
- There are snapshot notes if I need them (by writing the changes I’ve made
- Recall snapshots by clicking on them in the sidebar
- At the top toolbar
	- I can Bypass all inserts
	- I can Bypass all EQs
	- I can Bypass the Channel Strip
	- I can Bypass all Send Effects
- To Bypass, long press on one of these buttons
-  I can change the width of the channels by using the reduce channel width or increase channel width with the buttons to the right of Q-link. Or set a specific number of channels to be displayed (keyboard shortcuts g and h


## Sidechaining ?
- I want to sidechain the bass to the kick drum
- On the bass channel I click on an “Audio Inserts” slot and add a compressor
- At the top of the plugin window click Activate Sidechain and then use the Set Up Side-Chain Inputs. 
- Click on Side-Chain input button and select the Kick 


## Parallel Processing ?
- It’s one I take 2 or more copies of the same audio signal, process them independently and combine the result together
- Click on “Racks” at the top right of the toolbar and make sure that “Direct Routing” is visible
- Direct slots appear below the send slots
- Click on the functions button and enable “Direct Routing: Summing Mode On”. The color tells me if it’s working. Green is good. If it’s blue then check that the function is enabled.
- Right click on the mix console and choose “Add Group Track”
- In the blank slot in on the Direct Routing Route I add the group I just created and click it to enable
- Turn off Stereo out on the “dry” track and add an insert to the “wet” one (like a compressor)
- Turn on the dry track and lower the fader to the bottom and then slowly raise it back up.


## Multiple VST Outputs ?
- Rack instruments everything is going to come out of one audio channel by default
- Right click on the header of the instrument and select “Activate Outputs” then click the output that I want to be active or click the output channel on the VSTi section on the right
- Change the VST output (4 tracks = 4 outputs)

	## Time Signatures, Metronomes & Tempo Changes  
- Add a Time Signature track (the default it’s 4/4)
- To change, click on the small tab and then set my time signature on the upper left corner
- To add a new Time Signature with the default tool active =\> option + click to add a change in Time Signature (I can also draw it in with the pencil tool)
- Input or change the value of the time signature directly on the tag as I create it.
- Change the metronome clicks by clicking “Click Pattern Edit” and choosing the metronome accents the way I want them
- Add Tempo Track. With the selection tool selected, option click where I want to start the tempo change.
- Set the Type at the top left corner. The values it has is Jump and Ramp. The difference is that ramp makes the change more gradual

## Exporting
- File \> Export \>  Audio Mixdown
- The dialog box appears
	- Choose name
	- Change export location
	- Change the other parameters and click on “Perform Audio Export”
	- To add the export back into Cubase select the “Add to Project” dropdown and click “Audio Track”. “Pool” is added by default. This way the rendered file is part of the project
	- To extract multiple tracks in the project as separate files. First, select  “Export Multiple Channels” and then choose in the “Channel Selection” which the channel should be exported. Unclick Pool and Audio Track.


## Chord Pads & Tracks
- Chord Pads is a button at the bottom left, next to Sampler Control, Editor, etc.
- They exist to add a chord with a single key press
- There are many presets to choose from. Click the “Chord Pad Presets” button (3rd down in the left column. Click on load and choose the scale I want to use (Major and minor, and modal chords)
- The voicing of the chords is adapting as I can see on the small display at the bottom of every pad. It’s called Adaptive Voicing and is signified by the AV at the top right of the pad.
- To lock a pad to a particular voicing, use the voice controls (arrows up and down) on the right of the pad.
- I can disable a chord pad by right clicking and unticking “Adaptive Voicing”
- On the left edge of the pad there is an Open Editor button. A menu appears. It allows me to use the root note, chord style, tensions and bass note
- They can be reordered by clicking and dragging or copied by option dragging
- I can drag the chord of the pad into the Arranger
- These chord pads can use midi inserts 
- I have 2 octaves of chord pads. To set this, click on the “Chord Pads Setup” button \> “Pad Layout” and then set the number of octaves for the chord pad

- Chord Tracks
	- Right click on the track menu and click “Add Chord Track”
	- Route the Chord Track to a specific instrument by clicking on “Use Monitored Track”
	- Option click to add a Chord Event, then double click it to open the editor. It has pretty much the same controls as the Chord Pads (root note, styles, etc.)
	- When I make another Chord Event I can select the right tab “Chord Assistant”. It is a vast library of chords which are presented in terms of suitability and complexity based on the previous chord. The farther down I go the further removed I am from that initial chord.
	- Press the left and right arrow to preview the chords in the Arranger.
	- I can also choose chords based on proximity to the previous chord or by using the circle of fifths
	- Set the Midi area and drag an area through the arranger with the pencil. 
	- In the sidebar there is a dropdown called chords and in this dropdown select “Follow Chord Track” and change it to chords and scales. In the menu that appears click “Synchronize Track Data with Chords First”. If there are notes present in the Midi area I created earlier these are conformed to the chords on the chord track
	- I can also extract chord information from pre-existing midi. Just select the midi data, right click it and choose “Create Chord Symbols” and then press ok.
	- If I select an instrument track I can click on “Live Transform” in the sidebar and choose “Chords”. Now anything I play in this track will be conformed for my chord track. This also works with audio tracks = Click on “Audio” \> “Generate Harmony Voices”. As long as there is a chord track present I can generate up to 4 harmony voices and cubase will figure out the rest for me.

## Organization and Arranging ? 
- If I want to be more organized and have the parts reflect the correct name of the track =\> Double click the track name and press Enter while holding Commandl. After this, all the parts in the track will have that name.
	- I can also use folder tracks to be more organized. Select one or more tracks then right click and choose “Move Selected Tracks to New Folder” 
	- Adding color to tracks also helps be organized
	- To remove color altogether =\> Choose Track Color \> Use Default Track Color
	- I can use marker tracks which are created by right clicking in the track list. Rename them. By option clicking I can create single point markers. Add names to the markers with the description field in the top left toolbar
	- I can use multiple marker tracks
	- When holding command and option dragging in a marker track it creates marker ranges. (Useful to view song structure)
	- In the track head I can jump to single markers (locate), or cycle marker ranges or zoom in them.

	- The Arranger Track 
		- Option click and drag to mark a part of a song (song section block)
		- They can be renamed the same way markers are renamed
		- In the Arranger Track the song section blocks can be dragged into a playlist. Change the number of the row repeats the song section twice.
		- I can choose what happens when at the end of a section. Click on the button at the right of the repeat number and choose between “Normal”, “Repeat Forever” and “Pause After Repeats”
		- I can create multiple playlists by clicking on the Arranger Chain dropdown and choose “Create New Chain”. This allows me to create multiple versions or edits of the same song
		- I can flatten these playlists to a permanent arrangement. Click on the Arranger dropdown and choosing “Flatten Chain”

# Groove Agent as a Sampler and Padshop
- Groove Agent
	- Add samples to each pad.
	- When dragging and dropping in this way I have three options: 
		- I can layer multiple samples in different velocities
		- I can add samples to existing ones
		- I can replace existing ones
		- Or I can map samples across pads automatically
	- Each pad is a simpler with Pitch, Filter, Amp Envelopes, Sample and Slice options
	- Each pad is capable of real time audio warping
	- In the Slice section click the button “Create Slices”
	- By default grooveAgent will detect the transients in the audio and slice it that way. There are different modes: 
		- Grid (1/1, 1/2, 1/4, etc)
	- Command + a selects all pads, then go to sample and in audio warp choose “Music” and tempo sync. The slice will perform to the tempo of the project
	- If I add a musical instrument I can click pitch and set the key range for the whole keyboard. Also go to sample instead of “One Shot Mode” I can use another mode.
	- There is a Mixer tab (next to edit at the top)

- Pad Shop
	- It is a granular synth it creates small sample grains or slices of the sound to create everything from time stretch effects to infinite freezes
	- Add the sample in the plugin
	- Set position, duration, number of grains, randomization, spread, etc.

#tutorial 