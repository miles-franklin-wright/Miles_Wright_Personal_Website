import React from 'react';


function Hundred_Days() {
  return (
    <div>
      <div>
        <h1>Hundred Days of Code</h1>
        <h2>My journey to full stack development</h2>
      </div>
      <div>
        <h3>Day One</h3>
        <h4>July 15th, 2022</h4>
        <p>Although I began learning how to code two years ago, I have failed to produce a personal website. Until now, I have doubted myself and my ability to consistently craft myself into a strong coder. I have had my achievements thus far, but have had triple the failures preceding them. Sometimes the most difficult tasks in life are those that prove to ourselves that we can be the people we imagine ourselves as.</p>
        <p>The point of this exercise is going to be to create a great personal website. The commitment is that I code something every day, no matter how little. In the past I have had issues with overcommitting to projects or deadlines that are simply too difficult. To combat this, every 10th day, I will be giving myself two goals set five and ten days away that must be pushed regardless of how poorly I implement them. Lastly, I would like to become better at being proud of my work, so at the beginning of each 10 day period, I will take a moment to highlight one aspect of the process I thought I did really well. These are the only rules and requirements.</p>
        <p>The Day 1 contribution is this entry, and the new section containing it.</p>
        <p>Since today is the first day of the 10 day period, I'll set out the goals for day 5 and day 10. The day 5 goal will be to have the published github hosted version of the site. It doesn't matter how good or bad it looks. Just to have that done will be enough. The day 10 contribution will be to take the published site and put it on my CV, LinkedIn, and all of my other platforms. This website is not just an exercise; it's a core project and I need accountability if I'm going to do that.</p>
        <p>We'll see what tomorrow holds.</p>
      </div>
      <div>
        <h3>Day Two</h3>
        <h4>July 16th, 2022</h4>
        <p>Ok, my strategy for today is to try to meet my Day 5 goal, today. Once it's live, I know that github will automatically update the website based off of my pushes, or at least I hope it does. I have to check. Even if not, I can always make a habit of reloading the site with the most recent updates. So today I will do my research again on how to make that work, and then try to execute. Hopefully in less than an hour. We'll see!</p>
        <p>
          So I made some progress. In the past I have used github pages to deploy, and today is no different. However the previous method likely will not work in this case. I'll have to deploy to pages using the vite package that's used for Replit. It's good this process was started now instead of Day 5, or else I wouldn't have enought time to figure this out!
        </p>
      </div>
      <div>
        <h3>Day Three</h3>
        <h4>July 17th, 2022</h4>
        <p>
          Today I made little progress. The main issue was with replit and github, because I was not able to execute certain commands. Instead, I think I have a new strategy that should work. Since the dist pushes are now possible thanks to editing the gitignore file, at the end of each day I can take the new dist build and manually add it to a gh-pages section of the directory, and update the pages that way. This is absolutely not ideal. However, until I reconfigure my desktop environment or start working with a different hosting system other than gh pages, it will just have to do. Additionally, time is a constraining factor. I can reasonably give more than an hour per day to this, often times I'll only be able to manage half an hour. This was an ok day of work, but I'll need to hit tasks faster if I want an ok website by Day 10.
        </p>
      </div>
      <div>
        <h3>Day Four</h3>
        <h4>July 18th, 2022</h4>
        <p>
          I had a really bad day all around today, and the solution I wanted of manually creating a distribution for github pages and the rest of that did not really work. I took some time to think about, if I want to get this up tomorrow, how would I do it? I realized that it might make sense to use Digital Ocean's App platform, and so I watched a video on how this could be done. I also wanted to continue to program in Replit, which I think I should be able to do with this method. Tomorrow I will watch the video that's out there on how that's done. Then, I will likely create a new GitHub repository and then work out of that repository. Or not. I need to write down the most logical plan to minimize errors (as errors are my big issue right now, not efficiency), and then go from there. Here's to sticking with it.
        </p>
      </div>
    </div>
  );
}

export default Hundred_Days;