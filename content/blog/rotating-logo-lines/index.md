---
title: Rotating Logo Lines, A Journey
topic: Developer Docs
type: Sketchbook
date: "2025-07-18T23:00:00.000Z"
description: How do you make, like, a lot of rotating logo lines?
---

## Rotating Logo Lines

At my day job at [Submittable,](https://www.submittable.com/) we're looking to give the homepage a refresh. One of the things I am looking to implement is a wall of logo love for the hero. There'll be three lines of scrolling logos faded behind the main screenshot. Easy, right?

## The plan

When I first started this, I went down the path (as any modern web developer would) of trying to figure out how to implement this using some sort of pre-built carousel, a framework or fancy JavaScript. But here's the thing - the requirement for this is going to be three lines of scrolling logos, among all the other homepage elements. I wanted to keep this as low-level as possible. That's when I realized I could do it the old-fashioned (modern) CSS way. After a bit of research, I came across this article: [Infinite-Scrolling Logos In Flat HTML And Pure CSS](https://www.smashingmagazine.com/2024/04/infinite-scrolling-logos-html-css/).

Well well well, isn't that just exactly what I need. Shout out to Smashing Magazine, friend to front-end developers everywhere.

I liked that it avoided the CSS duplication problem, because again - and I can't stress this enough - I would be implementing 3 lines of logos, and I liked its method of keeping things somewhat cleaner. However, one of the requirements in the design is that the lines move opposite of each other - top to the right, middle to the left, bottom to the right. This solution was built in one direction. And, after some fiddling around with it, I realized I was having some trouble with the math getting it to move in the opposite direction. I am unfortunately a developer without a lot of time…or other developers to pair with. As the solo member of my team, I decided to move on to other solutions. (TBD on coming back to this solution in a future post, hopefully).

### Pivot (A)

So I decided to instead turn to the original wall of love the author, Silvestar Bistrović, bases the solution off of built by Ryan Mulligan. I found his original article here: [The Infinite Marquee](https://ryanmulligan.dev/blog/css-marquee/)

And this is where talking to your designer is great y'all. I asked about his original vision for the scrolling logo, and he said he wanted 12 logos repeated on each line, just at different points - and that's when I realized I could use the logic of the duplicated logo line, without (as much) of the duplication.

So I drafted my new plan. Spoiler: this initial plan does not work. But go on this journey with me: I split the logos up into four lines - which bonus would make them really easy to stack in mobile view (yes, I can just use CSS Grid, but let me have this):

Here's how it would look:

Logo Set A: 1 2 3 4
Logo Set B: 5 6 7 8
Logo Set C: 9 10 11 12

Then, for each line, I would group them together in alternating sets:

Like so:

Line 1: A B A
Line 2 : B C B
Line 3 C A C

My thinking was this would allow a smaller duplicated set placed at the tail ends of each other so that it had that seamless switch over that you get from the duplication, without having to repeat 12 logos for each line. My page now has 36 logos on it, which would have been the original number if I had 12 logos each, for three lines - vs 72. ((12x12)x3)

And sure, technically speaking, you're not getting the full set of 12 for each line. However, given scroll time and how long a normal average human person spends looking at a homepage hero (I'm guessing it's a lot less time than I do) - it gives the effect we're going for. And triple bonus it also meant each "set" of logos is immediately visible so if someone has motion turned off.

However, and dear reader, if you're more experienced than I am, you may have already seen my problem before we've gotten here. That doesn't work.

I realized the whole point of the duplication was the optical illusion it was creating. When there isn't a full second set moving across the screen, you see the "switch over" because it's not being replaced by itself - which shatters the seamless optical illusion. I tried a few other ways to see if I could get this to work, but, alas - there's a solid reason why duplication, the method above, or JavaScript - is what you'll find there.

### Pivot (B)

That said, after fiddling around with the solution, I realized that between the 12 logos, the three lines, and again - the amount of time a normal human person spends looking at a single website hero - I could fully fake the experience of seeing all 12 while still reducing my number of logos. I could do rotating sets of 4, using the classic duplication method. You "see" the full set of 12, it rotates in a way that you can see each set:

Ok, new plan:

Row 1: 1 2 3 4 (repeated)
Row 2: 5 6 7 8 (repeated)
Row 3: 9 10 11 12 (repeated)

Bonus to this approach, I somehow actually managed to reduce the amount of logos I need on the site. From 36 down to 24! I may try to fiddle with this again in the future just to see if I can get that reverse non-duplication method working. But for my sanity and my deadline - this will work great for now.

See the final solution on my [Codepen here](https://codepen.io/cassigallagher/pen/pvjoVBV) and soon to be on submittable.com
