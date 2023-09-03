// Delete this if you don't want a help tab :)

let help_data = {
	r1: {
		id: "r1",
		title: "Row 1",
		text: "Do resets, buy Prestige Upgrades, and let your Points grow. There really isn't much to this phase of the game.",
		unlocked() { return player.a.achievements.length>0 },
	},
	r2: {
		id: "r2",
		title: "Row 2",
		text: "At this point, you have a choice between Boosters and Generators, but since you can eventually get both, there is no wrong decision here. Generators involve generating a resource whereas Boosters involve just a flat boost, so if you want to play more actively without waiting, Boosters are probably the choice for you.<br><br>Continue to purchase Booster & Generator Upgrades (stockpile Points beforehand to make buying them back easier), and try to strive for the milestones as much as you can, as they will make the runs more automated and faster. <br><br>Once you unlock both Boosters and Generators, it's smooth sailing to complete this phase of the game, just keep buying upgrades, getting milestones, and getting Boosters & Generators.",
		unlocked() { return player.b.unlocked || player.g.unlocked },
	},
	r3: {
		id: "r3",
		title: "Row 3",
		text: "You have a choice between Time, Enhance, and Space here, and you will be able to unlock them in any order you choose. All combinations are viable, but some are faster than others. Enhance will tend to be the fastest to get milestones, since it is more Point-based, and its milestones involve both Boosters & Generators, so it may be beneficial to go there first.<br><br>Time & Space on the other hand fully automate  Boosters & Generators respectively, so if you're finding Generators more tedious to purchase on every reset than Boosters, maybe go with Space before Time. When it comes to Space specifically, Space Buildings should be purchased where the later buildings are given more priority (prioritize Tertiary Buildings over Secondary Buildings, and those over Primary Buildings).<br><br>Once all three layers are unlocked, just continue to manage all three of them, purchase Upgrades, and strive to unlock Super-Boosters and eventually Super-Generators, which power up Boosters & Generators respectively. From here it's just a push to complete this phase of the game.",
		unlocked() { return player.t.unlocked || player.e.unlocked || player.s.unlocked || player.sb.unlocked || player.sg.unlocked },
	},
	qh: {
		id: "qh",
		title: "Quirks & Hindrances",
		text: "Once you unlock Quirks, just try to get as many Total Quirks as possible, getting Quirk Layers whenever possible (which generate Quirk Energy), and strive for the milestones to make runs faster and more automated, until you can unlock Hindrances. Make sure to get plenty of Hindrance Spirit before even trying the first Hindrance, since its effect is quite useful for the challenge.<br><br>The first Hindrance (Upgrade Desert) can be completed by choosing your Prestige/Booster Upgrades very carefully. For Prestige Upgrades, purchase upgrades 1, 2, 3, and 6, whereas for Booster Upgrades, purchase Upgrades 1, 2, & 4. This should push you through the challenge fairly easily. If you are unable to complete a Hindrance in a reasonable amount of time, you can always exit, push Quirks and Hindrance Spirit a little more, and come back later, as there is no penalty for doing so.<br><br>This will unlock Quirk Upgrades, which increase in cost over time, but the costs reset on a Row 4 reset. This means that you should be striving for more Quirk Layers, and keep an eye on the upgrades for the first 10-20 seconds after a Row 4 reset to see if you can afford any of them during that time.<br><br>Once you've purchased the first few Quirk Upgrades, try out the second Hindrance (Speed Demon) which can be completed with little strategy. If it is not completable within a reasonable amount of time, leave the challenge, grind more Quirks, Hindrance Spirit, Quirk Layers, and Quirk Upgrades and try again until it is possible. This rule will work for most of the following Hindrances, so a good rule of thumb to keep in mind.<br><br>Once you purchase the sixth Quirk Upgrade (Infinite Possibilities), you can most likely beat the third Hindrance (Out of Room) which can be beaten by prioritizing the later Space Buildings as you normally do. Once you purchase the eighth Quirk Upgrade (Exponential Madness), you can most likely beat the fourth Hindrance (Descension), which can be beaten by respeccing Space Buildings before starting the challenge and putting them all into Primary Space Buildings.<br><br>Continue to push as much as you can once you complete the first four Hindrances, and begin to complete the first repeatable Hindrance (Timeless) as many times as you can (purchase all Extra Time Capsules).<br><br>Eventually, you will unlock Quirk Improvements, which will boost various aspects of the game as you get more Quirk Energy. Grind through the last three Quirk Upgrades, continue to get more Timeless completions, and keep going until you can unlock either Solarity or Subspace.",
		unlocked() { return player.q.unlocked || player.h.unlocked },
	},
	oss: {
		id: "oss",
		title: "Solarity & Subspace",
		text: "Once you unlock Solarity/Subspace, you can choose either one, but there is a difference in how they progress. Solarity is more of an active layer, requiring you to be on the game more often, but it is faster than Subspace, which is more idle and requires more waiting. There is no wrong choice here, just go with what works with your playstyle, you'll end up getting the other one later anyway.<br><br>For Solarity, do resets and purchase Solarity buyables, continue this cycle over time and grind up. For Subspace, just let Subspace build up, buy Subspace Upgrades, and do resets. Keep in mind that both of these layers reset Space Buildings, so having that Auto-Space Building milestone in the Quirk tab is very useful in making these runs less painful.<br><br>Eventually, you will unlock both Solarity & Subspace, at which point you continue to grind up as much as possible, remembering to check all relevant layers when you feel stuck to see if you're missing any upgrades or anything else. Continue this push until you can unlock Magic or Balance in Row 5.",
		unlocked() { return player.q.unlocked || player.h.unlocked },
	},
	r5: {
		id: "r5",
		title: "Row 5",
		text: "Once you reach your first Row 5 reset, it does not matter whether you do a Magic or Balance reset first, as long as you do the other layer reset for the second reset. Magic has three Spells, which you can cast (which last 1 minute each at first) but cost 1 Magic each, and give you 1 Hex for casting. Start with the Spell that multiplies the Time base, and cast the others once runs get fast enough to have multiple Spells active at once. Balance Energy generates Positivity and Negativity based on the location of the slider, and there are also Balance Upgrades to buy. Use both ends of the slider at their extremes to get the most out of Positivity & Negativity gains, their nerfs are not important enough to warrant having only one of the resources, so just try to keep their amounts roughly equal.<br><br>Keep grinding both layers until you are able to unlock Phantom Souls, remembering to keep casting Spells when you can put more Magic into them or when they run out, and put the Balance slider to both extremes, but try to keep Positivity & Negativity amounts relatively equal.<br><br>Once you get your first Phantom Soul, keep pushing until you can get your first Wraith. Once you do, try to complete the new Hindrance (Option D) as many times as possible by purchasing all Prestige Upgrades and as many Booster Upgrades as possible. If you get stuck on this challenge, try to use more Primary Space Buildings, as the other ones are much less useful in this challenge.<br><br>Keep going until you can get your second Wraith and unlock the next Hindrance (Central Madness). You can do this one by setting the Balance bar completely negative before starting the challenge. If you still cannot complete it, then switch it to completely positive once your points somewhat stagnate. Continue pushing until you can get the next Wraith, and remember to keep getting Timeless & Option D completions.<br><br>Once you unlock the final Hindrance (Productionless), just go for the completion without any real strategy in mind. If that does not work, try using only Primary Space Buildings, or just grind outside the challenge for more resources to help make it easier. Keep pushing PS, Magic, & Balance Energy, remember to keep getting more Positivity & Negativity, and keep getting Timeless & Option D completions until you unlock Honour.",
		unlocked() { return player.m.unlocked || player.ba.unlocked },
	},
	hn: {
		id: "hn",
		title: "Honour",
		text: "Once you reach your first Honour reset, begin to go for the Honour milestones, and get as many Honour milestones/upgrades as possible. Once you get the first Honour Upgrade, be sure to visit the Prestige tab often to check if you are able to discover any of the new Prestige Upgrades. Keep pushing to get more milestones, and eventually, you will get fully automated Honour runs. In this phase of the game, there isn't really a wrong way to progress, just keep pushing until you unlock Phantom Boosters.<br><br>Phantom Boosters are almost automated, but you do need to purchase Ghost Spirit. If you feel stuck, you're probably missing a possibly discoverable Prestige Upgrade, so be sure to check all of them. Keep on pushing until you can unlock Nebula or Hyperspace.",
		unlocked() { return player.hn.unlocked },
	},
	nhs: {
		id: "nhs",
		title: "Nebula & Hyperspace",
		text: "Once you unlock Nebula & Hyperspace, you have to choose which one you want to unlock first (although eventually you will get both). Nebula is more passive/idle, whereas Hyperspace is more active/strategic.<br><br>For Nebula, begin grinding up Dust amounts, saving up for Stellar Clusters, and repeat. Once you unlock the secondary Dust effects, use the bottom one. Once you're able to have two active at once, use the top & bottom ones to get more points, but use the bottom two whenever you want to get more space energy (for hyperspace).<br><br>For Hyperspace, you'll need to employ a little strategy in choosing which buildings to boost. I would recommend the following priority order: Quinary -> Quaternary -> Secondary -> Primary -> Tertiary. Of course, if you're having trouble, mess around with the buildings and try different combinations, see what works for you. The rule of thumb is that the Tertiary Building is worse than the others, so as long as you keep that in mind, you should be alright.<br><br>Once you unlock both, continue pushing, adjusting your Secondary Dust effect & Hyper Building setups, and grinding all the Row 6 resources until you can unlock Imperium. If you are stuck, make sure you've finished all Hindrance completions if you haven't already, and check any tabs that might be missing something.",
		unlocked() { return player.n.unlocked || player.hs.unlocked },
	},
	i: {
		id: "i",
		title: "Imperium",
		text: "Once you unlock Imperium, the craziness truly begins, since you'll be able to unlock new Space Buildings & upgrades across a bunch of different layers. The new Space Buildings further complicate Hyperspace, so make sure to know this: Senary, Octonary, and Decary Buildings are always worth it to get if possible. The Nonary Building is only useful if you're pushing your Hyperspace Energy, since the Nonary Space Building boosts Hyperspace Energy gain. The Septenary Building is slightly better than the Tertiary Building, but still worse than all the others.<br><br>As for the new discoverable upgrades, make sure that whenever you are required to do a run without a certain resource, do the lowest row reset possible in order to prevent some of your higher row resources from being reset. For example, if you need to reach a certain point amount without Boosters, do a Row 3 reset after disabling the Booster automator so that Row 3+ resources aren't reset, which helps you get to that goal more easily.<br><br>Continue pushing until you unlock the discoverable Quirk Upgrades, with which you should remember that their costs increase over time but also reset on a Quirk reset, so perform a Quirk reset whenever you feel like you are stuck to check if you can afford the next Quirk Upgrade.<br><br>Keep going as far as possible. Once you get close to the requirement to unlock Mastery, there is one last push that requires you to optimize everything as much as possible. Make sure your Hyper Building setup is as good as possible, remember to grind Hyperspace Energy whenever you feel stuck, and keep on pushing until you eventually reach 100 Phantom Souls and unlock Mastery.",
		unlocked() { return player.i.unlocked },
	},
	ma: {
		id: "ma",
		title: "Mastery",
		text: "Once you unlock Mastery, begin to grind your way back to do your second reset. Once that is done, you can begin your first Mastery, which should be fairly straightforward as all you need to do is purchase Prestige Upgrades. Continue to push for more Mastery and Mastery completions. When Mastering Row 2, Mastering Boosters is generally easier, so I would recommend doing that one first. When Mastering Row 3, the order in which you complete them is not necessarily important here, just make a choice and stick with it.<br><br>The first relatively difficult spot here comes when Mastering Hindrances, as you'll need to recomplete all Hindrances, which now have much higher goals. Just stick to the same strategies you used the first time you completed them, and you should be fine. If you feel like doing more active gameplay, Master Solarity before Subspace, otherwise start with Subspace.<br><br>Keep on pushing and Mastering layers until you unlock Gears.",
		unlocked() { return player.ma.unlocked },
	},
	ge: {
		id: "ge",
		title: "Gears",
		text: `Once you unlock Gears, you'll notice that there are two buyables that cost Dust Product, which you will need to figure out which one you want more. At first, the Kinetic Energy upgrade is much stronger than the Tooth Size upgrade, but later on it will require a little calculation. To do this, take the "Multiply Kinetic Energy gain by X" display and compare it to the "Divide Tooth Size by Y". If X>Y^2, then the Kinetic Energy upgrade is more important, otherwise the Tooth Size upgrade is better. In the end, you should be able to get by without this strategy, but this will make things as efficient as possible.<br><br>You'll also be able to Master Phantom Souls during this era, which should be fairly simple to beat. Continue to push Gears and your other layers as much as possible. During this part of the game, achievements are VERY important, some of their rewards being required to progress, so be sure to keep an eye on the achievement tab for powerful achievement rewards that may just be more in reach than you think. Keep going until you eventually can Master Honour.<br><br>Mastering Honour just requires a little patience and a keen eye. Go from upgrade to upgrade, purchasing them all (they are not all possible in the normal order). Once you Master Honour, unlocking Machines should be just another push away.`,
		unlocked() { return player.ge.unlocked },
	},
	mc: {
		id: "mc",
		title: "Machines",
		text: `Once you unlock Machines, you'll see two subtabs. The Shell is something you'll wanna take time to grind out every once in a while (it is always worth it to purchase, regardless of its nerf). The Motherboard requires a little strategy. CPU is good for getting Mech-Energy, which will help get more of the other Motherboard parts. The Port helps with Gear gain, while Northbridge & Southbridge are used for normal progression (points), although Southbridge is more effective at doing so.<br><br>With enough pushing of your Row 7 layers, you'll be able to Master Nebula & Hyperspace. It doesn't matter which you master first, although it's worth mentioning that while Mastering Hyperspace, the Nonary Hyper Building is disabled, so it may be better to start with Nebula. After Mastering these layers, keep pushing (remember that achievements are VERY important in this era as well) until you can unlock The Core.<br><br>At this point, keep in mind that Northbridge is now more effective than Southbridge due to the reward of the achievement "Breaching the Barriers". Begin to purchase Core Levels and continue pushing onwards until you can Master Imperium. Mastering Imperium is a little tricky, since the Imperium Buildings make each other more expensive, but as long as you purchase all of the second building first, it should be fairly easy. At this point, the push for endgame should just be a few short pushes away, and eventually after a little grinding and pushing, you'll be able to unlock some new layers!`,
		unlocked() { return player.mc.unlocked },
	},
	ene: {
		id: "ene",
		title: "Energy & Neurons",
		text: `Once you unlock Energy or Neurons, you must choose one of the two to unlock. Energy is a more active mechanic, whereas Neurons are a more idle mechanic, so choose whichever playstyle you would rather have.<br><br>If you choose Energy, you'll need to try and get as many of each Watt type as possible. The one generated is shown by which title is in all-caps (and brightened), and is switched on every Energy reset. In addition, be sure to continually store Energy in order to get its benefit. Begin pushing for the Energy milestones, and remember to go back to your Row 7 layers and push them every once in a while to ensure you get as much progress as possible. Storing up a lot of energy, releasing it for a few seconds, and then re-storing it is a good strategy to get Watts quickly, however it has the downside of losing Stored Energy, so be aware of that. Once you get the final Energy milestone, begin to push until you can unlock Neurons as well (guide below).<br><br>If you choose Neurons, you'll need to enter The Brain and push for as many Signals & Thoughts as possible. Begin pushing for the Neuron Milestones, and similarly to the Energy path, remember to push your Row 7 layers every once in a while to keep progressing efficiently. Continue pushing Neurons & Row 7 layers until you can unlock Energy (guide above).<br><br>Once you get through both Energy & Neurons, keep pushing for achievements and more progress until you can unlock the new Row 6 layers.`,
		unlocked() { return player.en.unlocked || player.ne.unlocked },
	},
	ridai: {
		id: "ridai",
		title: "Robots, Ideas, & AI",
		text: "Once you unlock Ideas, remember that they do reset Neurons, so you'll have to build that mechanic back up on each reset until you get the Idea milestones. Try to get Reveleations as much as you can, and keep pushing Energy, Neurons, and your Row 7 layers. Push for the Idea milestones, and just keep pushing (there really isn't anything crazy in this era).<br><br>Once you unlock Robots, you'll wanna balance your Robots evenly across all 5 types of Robots to keep your Minibot cycle going well. Remember to do Robot resets every once in a while to have a Minibot active, and push for the Robot milestones. Remember to go for achievements every once in a while as well.<br><br>Once you unlock AI, things get a little trickier. Get AI Networks whenever you can. As for the AI Nodes, you need to start with Node AA at first. Then, go for either Node AB or BA, then the other of those two, and finally BB. Once you have those four, your next goal is Nodes AC & CA, then Nodes BC & CB, and then finally Node CC. If you feel stuck, there's no shame in resetting your AI Nodes and messing around with them to see what sticks though. Continue pushing progress and pushing for achievements until you can unlock Civilizations.",
		unlocked() { return player.id.unlocked },
	},
	civ: {
		id: "civ",
		title: "Civilizations",
		text: "Once you unlock Civilizations, get Civilization Power and begin pushing. You'll also be able to get more AI Nodes here, which you should do in the order: AD -> BD/DB -> CD -> DD -> DA -> DC. As for Population, you should put it into Civs 5, 4, & 3 first, then deal with the earlier ones (but doing this other ways won't punish you all that greatly). Keep going for more Row 7 stuff, and make sure that your new Row 6 layers (Robots & Ideas) are fully automated at this point.<br><br>Go for more and more points, achievements, and progress altogether. If you feel stuck, remember to adjust your AI & civ builds, and check if anything isn't automated or bought that can be. Keep on pushing until you can unlock Planets.",
		unlocked() { return player.c.unlocked },
	},
	plan: {
		id: "plan",
		title: "Planets",
		text: "Once you unlock Planets, there is a penalty that you have to farm it back. You'll need to get Machine Parts and Gears milestone back again. But there are upgrades that pushes Time Capsuales a little bit, continue pushing until you can reach 14 total planets, which automatically unlocks Auto-Mastery. If you feel stuck, you might missing something that Planets got<br><br>If you have the Can't find the Rebcoana? achivement, then you don't have to farm for Gears and Machine milestones, but Cores and Gear Evolutions are still reset, Keep on pushing until you get Contiuum Flatten, which raises the Rotations gain to the power of amount of your Planets, you should get more than 1e10500 Rotations, Keep going until you unlock Ravagers and more Planet milestones.",
		unlocked() { return player.pt.unlocked },
	},
	rava: {
		id: "rava",
		title: "Ravagers",
		text: "Once you unlock Ravagers, begin farming Rotations for more Ravagers and more Planets, You'll also be able to gain one of 3 devastated stuff, which allows you to purchase the Devastated Upgrades. I'll recommend getting the Devastated Upgrade 2I (green devasator) because it cheapens Mastery, Ideas and Subspaces, the first red devasator multiply Hyperspace gain, so be worthy to get it, the first blue devasator give a free level to Gear Evolutions based on Ideas. <br><br> You should push these 3 Devastated Perks, and keep on getting more of them, Just push Ravagers a little bit, until you eventually unlock the III Devasated upgrades. Keep in mind that reaching 1e30 ravagers makes some row 7 and 8 more tricker, Keep on pushing until you can unlock more Ravager milestones, which are making go past e1e17 points, Keep pushing progress and achievements until you unlock Superhindrance spirits.",
		unlocked() { return player.ra.unlocked },
	},
}