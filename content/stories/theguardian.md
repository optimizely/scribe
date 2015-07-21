---
title: The Guardian Optimizely Case Study
category: mobile
hero:
  title: The Guardian Tests to Boost Sign-ups to its Online Dating Site
  subtitle: Optimizing landing pages, navigation, and the homepage grew subscriptions
  background: https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/the-guardian/theguardian-hero.jpg
recommended:
  1:
    story: french-girls
  2:
    story: secret-escapes
  3:
    story: obama2012
---
{% include "case-study-box.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/the-guardian/logo-the-guardian.png',
    metadata: {
      1: {
        value: 'Media',
        title: 'Industry'
      },
      3: {
        value: 'London, UK',
        title: 'Location'
      }
    }
  }
%}

[[intro]]

With more than 6 million weekly readers, The Guardian is the third most popular newspaper globally. The paper’s strength lies in its strong “digital-first” approach and data-driven culture. They have been testing with Optimizely since early 2012 to grow online readership.

[[/]]

The Guardian uses A/B testing across many of its webpages and properties. Product managers like Kerstin Exner are encouraged to run A/B tests whenever possible, as long as a strong business case can be made for each experiment.

One property The Guardian optimizes frequently is its dating site, Soulmates. Launched in 2004, Soulmates monetizes via paid monthly subscriptions that allow members to interact with other members.

## Challenge

As a dating site, Soulmates’ primary goal is to convert visitors into paid subscribers. They drive a majority of their traffic directly from ads placed on The Guardian’s news pages. But while Kerstin found these ads performed well in terms of overall click-throughs, she noticed that the majority of these visitors were not converting into subscribers.

Kerstin wanted to learn what site changes would drive more visitors to subscribe to Soulmates’ dating services. She aimed to gather learnings through a combination of qualitative data from user research and quantitative data from A/B testing.

## Hypothesis

Working closely with the UX team, Kerstin frequently employs user research to shape her A/B testing hypotheses. Based on insights gleaned from research, Kerstin hypothesized that showing more information upfront, like a wider variety of profiles and more facts about existing users, would increase subscriptions. Kerstin coined this approach, a “people first” strategy. Using Optimizely, she built several experiments to test it out.

## Test 1 - Landing Page Optimization

Kerstin opted to start with one of Soulmates’ main entry points – landing pages visitors entered upon clicking through an ad on The Guardian’s website. The ad feature photos of various Soulmates users; when a visitor clicks on a photo, they are directed to a landing page displaying the user’s profile and a “Join today for free” call-to-action (CTA).

Kerstin wondered if the current landing page was confusing first time visitors. Using Optimizely, she tested the “people first” strategy on these landing pages, giving users more options and a wider variety of information. The variation landing pages still showed the profile from the ad, but also displayed a few similar profiles of the same age range and gender. The variation pages also showed a sidebar with search functionality and customer testimonials.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/the-guardian/landingpg-control.png',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/the-guardian/landngpg-variation.png'
    ],
    caption: 'The original landing page displayed the user’s profile with a large yellow call-to-action box in the center of the page. The variation gave site visitors more options by showing the user’s profile, similar profiles, search functionality, and user testimonials.'
  }
%}

*The variation landing page, which included search functionality, user testimonials, and related profiles, improved conversions by more than 46%.* Once Kerstin realized there was a statistically significant winner, she used Optimizely’s traffic allocation feature to push 100% of site traffic to the winning variation while the engineering team built the changes into the site’s code.

## Test 2 - Navigation Testing

After the success of Soulmate’s first test using the “people first” strategy, Kerstin decided to run a second test on the site’s navigation bar.

The original navigation bar displayed six default tabs. Because a site visitor’s “Top matches” do not change frequently, Kerstin hypothesized that visitors thought the site looked stale and lifeless. She wondered if changing “Top matches” to “Newly joined members” would garner more engagement and increase click-throughs to individual profiles.

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/the-guardian/nav-winningvariation.png',
    caption: 'The variation that replaced “Top matches” with “Newly joined members” increased conversions by 137%.',
  }
%}

After running the test for just a few days, *Soulmates saw a staggering 137% increase in click-throughs from the “Newly joined members” variation.*

## Test 3 - Homepage Optimization

Additional user research around Kerstin’s “people first” hypothesis revealed that many site visitors craved more information on Soulmates’ homepage – which displayed photos and quirky taglines for several single men and women on the site.

Kerstin pitted the original homepage carousel against one that replaced the quirky taglines with the age and location of each featured user.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/the-guardian/guardian-homepg-control.png',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/the-guardian/guardian-homepg-variation.png'
    ],
    caption: 'The original homepage carousel displayed photos and quirky taglines for several single men and women on the site. The variation homepage carousel replaced the quirky taglines with the age and location of each featured user.'
  }
%}

The homepage test provided surprising insights. After running the test for just a few days, she found the primary conversion goal of site subscriptions actually decreased with the new variation. Additionally, the difference in profile click-throughs between the original page and the variation was so small that it never reached statistical significance.

Rather than archive this as a failed test, however, Kerstin found the learnings to be just as valuable as those from the two prior experiments. The negative and insignificant results helped her plan for future tests by honing in on new ways to increase conversions.

[[callout]]

#### Takeaways

- *COMMUNICATION IS KEY:* Like Ujjwal and his team, successful testing organizations put a high focus on information sharing, communicating goals, strategy, and outcomes to their colleagues on a regular basis. This helps validate optimization spend, secure buy-in from stakeholders, and engrain experimentation and data into company culture.

- *TEST FOR HIGH IMPACT:* When it comes to optimization, the possibilities of what to test are endless. Buy taking stock of key challenges in the purchase funnel and assessing which changes will drive the most impact, Ujjwal and his team were able to prioritize in a smart way and garner some critical wins for their business. They also take into account how long it will take to build and run each experiment, ensuring they’re spending time and resources on optimization initiatives that will move the needle.

[[/]]

