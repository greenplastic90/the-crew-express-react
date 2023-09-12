const planetNine = [
	{
		number: 1,
		tasks: 1,
		description:
			'Congratulations! You have been chosen from a vast array of applicants to participate in the most important, and dangerous adventure that mankind has ever faced: the search for Planet Nine. You barely arrive at the training facility before you have already begun your first training phase: team building.',
	},
	{
		number: 2,
		tasks: 2,
		description:
			"It is apparent that you are a perfectly matched crew. Above all, is your mental connection - this so-called drift compatibility bodes well for an ongoing successful collaboration. It's time for training phases two and three: control technology and weightlessness.",
	},
	{
		number: 3,
		tasks: 2,
		taskTokens: [{ value: '1' }, { value: '2' }],
		description:
			'The training phases each build on the lessons learned in the previous phase. This combined energy supply and emergency prioritization course will require a high degree of logical thinking to understand and make the appropriate connections. Your education in mathematics will certainly come in handy for this.',
	},
	{
		number: 4,
		tasks: 3,
		description:
			'You are nearing completion of the preparation phase. These last training phases are focused on the recalibration of the control modules, and the reorientation of the communicators and the advanced auxiliary systems on the spacesuits. You should be ready to launch soon.',
	},
	{
		number: 5,
		description:
			'Celebrated too soon! One of you is sick in bed. [b]After everyone has looked at his or her cards, your commander asks everyone how he or she feels. It may only be answered with "good" or "bad." Your commander then decides who is ill. The sick crew member must not win any tricks.[/b]',
	},
	{
		number: 6,
		tasks: 3,
		taskTokens: [{ value: '>' }, { value: '>>' }],
		description:
			"After this minor setback, your final training phase lies ahead: Learning what to do in the case of restricted communication. In order to do so, a [b]dead zone[/b] will be simulated, these can occur in space for a number of reasons, so it's important to train for them. Strengthen your mental connections to pass the final tests.",
	},
	{
		number: 7,
		tasks: 3,
		taskTokens: [{ value: 'Ω' }],
		description:
			'This will be a memorable day! You are now prepared for launch. The completion of training, however, is only just the beginning of your adventure. 10-9-8-7-6-5-4-3-2-1-LIFT OFF! A massive force presses you into your seats - now there is no going back. with a deafening noise, you leave the ground, the country, the continent, and the planet.',
	},
	{
		number: 8,
		tasks: 3,
		taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }],
		description:
			"You have reached lunar orbit, weightlessness sets in - it's an indescribable feeling. You've completed numerous tests and training for this moment and yet joy overwhelms you every time. You look back at Earth, which was your entire cosmos so far and already you can cover it with just your thumb.",
	},
	{
		number: 9,
		description:
			'You are abruptly torn from your thoughts, as the onboard analysis module NAVI deafeningly sounds an alarm, demanding your attention. A tiny piece of metal has become wedged in the electronic drive unit. A steady hand will be needed in order to not damage the circuit boards. [b]At least one color card with a value of one must win a trick.[/b]',
	},
	{
		number: 10,
		tasks: 4,
		description:
			'After all this excitement right at the beginning of your mission you are now ready to leave the moon behind. You send your status back to Earth, activate the flight control and measurements instruments, and ignite the engines. This will truly be one giant leap. For you and for humankind',
	},
	{
		number: 11,
		tasks: 4,
		taskTokens: [{ value: '1' }],
		description:
			'Your radar systems report a dense meteorite field that will soon intercept your course. [b]The commander designates a crew member who must complete the recalculation of the course. This task will require a high level of concentration, thus the chosen crew member must not communicate during this part of the mission.[/b]',
	},
	{
		number: 12,
		tasks: 4,
		taskTokens: [{ value: 'Ω' }],
		description:
			'You watch tensely as you pass remarkably close to the meteorites. In all of the excitement, you have messed up your records, causing a few minutes of confusion. [b]Immediately after the first trick, each of you must draw a random card from the crew member to your right and add it to your hand. Then continue playing normally.[/b]',
	},
	{
		number: 13,
		description:
			'You have been hit by some small space debris despite having previously altered course. The control modules are indicating a malfunction in the drive. You will need to perform a thrust test on all drives to further isolate the problem. [b]You have to win a trick with each rocket card.[/b]',
	},
	{
		number: 14,
		tasks: 4,
		taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		description:
			"You are now already close enough to Mars that you can see Olympus Mons, the highest volcano in our solar system, with the naked eye. You use this opportunity to first photograph it and then the Mars moons Phobos and Deimos. The sight makes up for the fact that right now you're in a [b]dead zone.[/b]",
	},
	{
		number: 15,
		tasks: 4,
		taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }],
		description:
			'You pass Mars and exit the dead zone. Your thoughts start to randomly drift to chocolate bars when suddenly your collision module sounds an alarm. Before you can even react appropriately, you are hit by a meteoroid. Immediately isolate the four damaged modules and begin making repairs.',
	},
	{
		number: 16,
		description:
			"Overall, the shock was worse than the actual damage, and you were able to fix most of it in a timely manner. However, the ninth control module, which monitors your suits' life support systems, has been severely damaged in the collision and has failed. [b]You must not win a trick with a nine.[/b]",
	},
	{
		number: 17,
		tasks: 2,
		taskTokens: [{ value: '>' }],
		description:
			'The damage to the ninth control module is even worse than originally thought, so you will have to invest significantly more time in making the repair. At the same time, however, you still have to track your course and send a message back to Earth where they are eagerly awaiting your status. [b]You still must not win a trick with a nine.[/b]',
	},
	{
		number: 18,
		tasks: 5,
		description:
			"You set course for Jupiter, as you fly into a dust cloud. At almost the same time there is something strange going on with your communication module. It initially indicates there's an astonishingly good connection, but only seconds later it appears to be in a total blackout. [b]You are only allowed to communicate from the second trick on.[/b]",
	},
	{
		number: 19,
		tasks: 5,
		taskTokens: [{ value: '1' }],
		description:
			'The dust cloud is surprising in magnitude and the longer you are in it, the stranger your communication module reacts. It fluctuates between being as clear as glass to being completely incomprehensible. However, the severely impaired time periods are becoming longer. [b]You are only allowed to communicate from the third trick on.[/b]',
	},
	{
		number: 20,
		tasks: 2,
		description:
			'Finally, the dust cloud clears and the wild swings of the communication module have noticeably reduced. Before you appears Jupiter in all its splendor. The gas giant is clearly appropriately named. Your absolute awe is interrupted when you notice the two damaged radar sensors. [b]Your commander determines who receives the tasks and carries out the repair, the commander cannot choose himself or herself.[/b]',
	},
	{
		number: 21,
		tasks: 5,
		taskTokens: [{ value: '1' }, { value: '2' }],
		description:
			'After making the repairs you ascertain that you were clearly too close to Jupiter while you were passing through the cloud. Its gravitational force of around two and a half times that of Earth has drastically affected your course. In order to counteract the effect, you will have concentrate and work in a precise manner to reach the ideal exit point. During this, you hardly notice the [b]faulty radio communication.[/b]',
	},
	{
		number: 22,
		tasks: 5,
		taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }, { value: '>>>>' }],
		description:
			"You're just barely out of the woods, when the temperature drops suddenly. All of the control systems alarms go off and you have to immediately start putting on your suits. The control module is struggling to keep up with the adjustments needed. Bypass the energy supply of the other modules successively in order to avoid a total blackout of the system.",
	},
	{
		number: 23,
		tasks: 5,
		taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
		description:
			'Most of the modules are still on emergency back-up supply while you puzzle over the cause of the rapid cooling. Callisto, one of the 79 moons of Jupiter, passes by, the moment you appear to escape the frost field. [b]Before you select the task cards, you can swap the position of two task tokens. Decide together but do not reveal anything about your own cards.[/b]',
	},
	{
		number: 24,
		tasks: 6,
		description:
			'The incident has made a mess of your normal processes. There is a lot to do at the moment and none of you know where to start. Your commander takes the initiative and devises a plan in order to proceed in a organized manner. [b]Once everyone has looked at their cards, the commander asks each crew member about their willingness to take on the task. This may only be answered "yes" or "no." The commander distributes the tasks.[/b]',
	},
	{
		number: 25,
		fivePlayerRule: true,
		tasks: 6,
		taskTokens: [{ value: '>' }, { value: '>>' }],
		description:
			"You've reached Saturn and pause to admire the magnificent spectacle of the rocky rings that constantly revolve around it. It is not without reason that they call it the ringed planet. Almost apathetically, you focus solely on the on-board analysis and collapse in exhaustion. Because of the dead zone, you won't be disturbed. [b]If you are playing with five, you can now use the additional rule for five crew members.[/b]",
	},
	{
		number: 26,
		description:
			"A loud bang interrupts your introspective mood. Two space rocks that were in the vicinity of Saturn have torn holes in your ship's hull. The on-board analysis module has immediately sealed off the affected storage area. Both rocks are still stuck in the shell of the hull. You must carefully remove them without further increasing the damage done. [b]At least two color cards, each with a value of one, must win one trick each.[/b]",
	},
	{
		number: 27,
		fivePlayerRule: true,
		tasks: 3,
		description:
			'You determine that the tear in the hull was not without consequences. A review of the modules associated with the area indicates damage to the flux capacitor. Although currently this is not a major problem, repairs will be necessary in the long-run, if you want to make it home. [b]Your commander specifies who should carry out the repair.(Tasks are face down)[/b]',
	},
	{
		number: 28,
		fivePlayerRule: true,
		tasks: 6,
		taskTokens: [{ value: '1' }, { value: 'Ω' }],
		description:
			'Readings are indicating an unusually high magnitude of cosmic rays in the area. You continue your flight oblivious, uninterrupted, and unaware that your radio messages are either not transmitting, or arriving with a great deal of time delay. This is not going to make working easy. [b]You are only allowed to communicate from the third trick on.[/b]',
	},
	{
		number: 29,
		description:
			'Your communication module appears to have suffered more damage than you initially thought. The repair requires a series of tests and calibrations that you must carry out together and with precision. [b]At no time may a crew member have won two tricks more than another crew member. Communication is down.[/b]',
	},
	{
		number: 30,
		fivePlayerRule: true,
		tasks: 6,
		taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		description:
			'One part is done, but you postpone the rest of the repairs, as you are heading straight for Uranus. Its smooth, pale blue surface makes it look almost artificial. You tear yourself away from this fascinating view, because there are still repairs to be made. [b]You are only allowed to communicate from the second trick on.[/b]',
	},
	{
		number: 31,
		fivePlayerRule: true,
		tasks: 6,
		taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }],
		description:
			'As you slowly move away from Uranus, you receive a message from Earth requesting the collection of metadata from the moons of Uranus. Unfortunately, due to the radio interference, it arrived too late, you can only see three of the 27 moons - Rosalind, Belinda, and Puck. That will have to suffice for the time being.',
	},
	{
		number: 32,
		fivePlayerRule: true,
		tasks: 7,
		description:
			'In the meantime, despite the favorable conditions, it is obvious how long you have been on the road together and the inevitable human characteristics begin to come to light. In order to avoid a heated conflict, everyone delves into his or her work. [b]Your commander takes over the organization and distributes the individual tasks.[/b]',
	},
	{
		number: 33,
		description:
			'A space walk is imminent! One of the hatches is broken and needs to be repaired. But leaving the ship always poses a risk. [b]After everyone has looked at his or her cards, your commander asks about his or her willingness to volunteer. It may only be answered with a "yes" or "no." Your commander then selects another crew member. The chosen crew member must win exactly one trick, but not with a rocket card.[/b]',
	},
	{
		number: 34,
		description:
			'Neptune is already in sight as your ship begins to waver. Man the stabilizers so as not to lose control. In the meantime your commander must realign the gravitation module. [b]At no time may a crew member have won two tricks more than another crew member. In addition, your commander must win the first and last trick.[/b]',
	},
	{
		number: 35,
		fivePlayerRule: true,
		tasks: 7,
		taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		description:
			'Cautiously you reach the outermost planet of our solar system: the ice giant Neptune. Its deep blue makes you shiver. As you slowly pass Neptune, you receive another message from Earth. The space probe Alpha 5 is orbiting Neptune, but has damaged sensors. Find it and fix them.',
	},
	{
		number: 36,
		fivePlayerRule: true,
		tasks: 7,
		taskTokens: [{ value: '1' }, { value: '2' }],
		description:
			"You take advantage of one of the rare moments of calm to socialize with each other. With all the minor and more major emergencies, the responsibility on your shoulders, and the uncertainty about the outcome of your adventure, tension has built up in every single crew member. So it's good to just sit together, and talk. Relieved you re-dedicate yourselves to the coming challenges. [b]Your commander distributes the individual tasks.[/b]",
	},
	{
		number: 37,
		fivePlayerRule: true,
		tasks: 4,
		description:
			'You reach the dwarf planet Pluto. Many years ago it would have been the ninth planet. You take a moment to reminisce about how your very educated mother used to serve you noodles, and talk to you about the planets while you reflect on the changeability of things. Nevertheless, the ship must be kept on course. [b]The commander decides who should take care of it.(Tasks are face down)[/b]',
	},
	{
		number: 38,
		fivePlayerRule: true,
		tasks: 8,
		description:
			'You reach the heliopause, the border area of our solar system. If the calculations prove correct, the ninth planet cannot be far away. A feeling of excitement spreads, the hour of truth approaches. As your instruments react, you almost jump out of your seats. But unfortunately it is just a false alarm. [b]You are only allowed to communicate from the third trick on.[/b]',
	},
	{
		number: 39,
		fivePlayerRule: true,
		tasks: 8,
		taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		description:
			"This has to be it! The readings indicated on your modules can only be produced by a truly gigantic object. The effects are so massive that even your [b]radio communication is interrupted[/b]. Recalibrate your instruments and find out what's really going on.",
	},
	{
		number: 40,
		fivePlayerRule: true,
		tasks: 8,
		taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }],
		description:
			"You are now paying very close attention to the object, but are still uncertain what it might be. What appears in front of you could be a moon of Pluto. No wait, that's no moon! You have found it! Planet Nine! Euphoria spreads among you and all the hardships are quickly forgotten. A surface scan of the planet suggests a solid crust. That would mean this is not another gas giant, it's traversable. A fantastic opportunity is opening up. [b]Before you begin to distribute the task cards, you may move a task token to another task card that currently has no task tokens. Decide together but do not reveal anything about your own cards.[/b]",
	},
	{
		number: 41,
		description:
			"You regulate the engines to prepare for landing. Due to the completely new conditions, one of you has to take over the coordination of the landing. [b]After everyone has looked at his or her hand, your commander asks everyone about his or her readiness. It may only be answered with a 'yes' or 'no.' Your commander then selects another crew member for the task. This crew member's task is to only win the first and last tricks. Since only the thrusters are used for correcting the position, neither trick may be won with rocket cards.[/b]",
	},
	{
		number: 42,
		fivePlayerRule: true,
		tasks: 9,
		description:
			'The planet is extremely cold and inhospitable but seems to be habitable. During your investigation you notice an area that appears to be moving away from your instruments. The closer you get to this anomaly, the more blatant the measurement errors become. What this means defies scientific explanation. At least you can narrow in on the phenomenon, because the results normalize when you move away.',
	},
	{
		number: 43,
		fivePlayerRule: true,
		tasks: 9,
		description:
			"In the name of science, you venture closer. The gravitational laws seem to invert the closer you get to the anomaly and you need to anchor yourself to the planet's surface using vibranium hooks for safety. [b]Your commander secures the rest of the crew and distributes the individual tasks.[/b] The data you are collecting allows for only one conclusion: You have discovered a wormhole.",
	},
	{
		number: 44,
		description:
			'Up until now, wormholes have been at most theoretical constructs and now here you are, standing right in front of one. It overshadows you like a black monolith - incomprehensible, but with a huge attraction. You send a message to Earth and prepare the engines for the jump. [b]Every rocket card must win a trick. First the one rocket card, then the two, the three, and finally the four.[/b]',
	},
	{
		number: 45,
		fivePlayerRule: true,
		tasks: 9,
		taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		description:
			"The effect is monumental! You are strapped into your seats but feel like you're everywhere at the same time. Colors and shapes change, and light feels like a swirling mass that behaves like an intelligent being and ensnares you. You focus on your instruments and try not to lose your mind.",
	},
	{
		number: 46,
		description:
			'while you are being assailed with an overwhelming amount of information, you find you are still able to instinctively react to danger. Suddenly the main modules of the ship shut down during the jump, and red warning lights and alarms tear you from of your previously trance-like state. [b]Your task is that the crew member to the left of the member with the pink nine must win all pink cards. Say who has pink nine.[/b]',
	},
	{
		number: 47,
		fivePlayerRule: true,
		tasks: 10,
		description:
			'You are exhausted, at the end of your rope. The jump feels like a jail now, in which you can no longer distinguish between reality and fantasy. Your body screams that you can barely stand even ten more seconds of this, but your mind questions how long ten seconds actually is. You begin to count them down - and suddenly burst out of the wormhole.',
	},
	{
		number: 48,
		fivePlayerRule: true,
		tasks: 3,
		taskTokens: [{ value: 'Ω' }],
		description:
			'You barely have time to orient yourself. It is suddenly extremely hot everywhere. The on-board analysis module instantly shifts the entire ship into the highest danger level. The first of the modules begin to fall victim to the radical temperature fluctuations. Even in your regulated suits, you break into a sweat within seconds. You need to activate the emergency protocol, extend the heat shields, and get away from the heat source as quickly as possible. [b]The Ω task must be won in the last trick.[/b]',
	},
	{
		number: 49,
		fivePlayerRule: true,
		tasks: 10,
		taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		description:
			'When you finally come to your senses, the situation has almost normalized. You just barely managed to take the necessary steps before you collapsed from exhaustion. Determining your current location you can hardly believe it. You are orbiting Venus! The wormhole is a direct link between Planet Nine and Venus, the second planet. This also explains the extreme heat, because Venus is significantly closer to the Sun than Earth. It takes a moment for the realization to dawn on you: You can go home! Check all ten main modules, focusing on life support, engines, and communication. Set course for Earth.',
	},
	{
		number: 50,
		description:
			"The way back is much more complicated than expected. Some modules have been permanently damaged during the trip and you will have to fight against the immense gravitational pull of the Sun. With your reserves depleted, you cannot allow yourself any mistakes - the voyage home must be executed precisely. You must first take advantage of a gravitational catapult. Then, the ship's modules must be kept under control and the approach to Earth initiated. In the end, landing on Earth will require no less attention than any other maneuver you've performed so far. [b]Everyone looks at his or her cards. A crew member must win the first four tricks. Another crew member has to win the last trick. The remaining crew members must win all the tricks in between. Your commander asks everyone for his or her preferred task, you then decide together as a crew who should assume which role. Do not say anything about your cards.[/b]",
	},
]
module.exports = { planetNine }
