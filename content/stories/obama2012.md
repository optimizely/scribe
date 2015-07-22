---
short_name: obama2012
title: Obama 2012 Campaign Optimizely Case Study
category: mobile
hero:
  title: Obama for America’s Digital Fundraising Machine
  subtitle: The Obama Digital team optimized to increase donation conversions 49% over 20 months
stats:
  1:
    value: 500+
    title: A/B Tests Run
  2:
    value: 49%
    title: Increase in Donations
  3:
    value: 161%
    title: Improvement in Email Sign Ups
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
      image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/obama2012/obama2012-logo.png',
      metadata: {
        1: {
          value: 'Political Campaign',
          title: 'Industry'
        },
        3: {
          value: 'Chicago, IL',
          title: 'Location'
        }
      }
    }
  %}

[[intro]]

The 2012 presidential election was a tight race. To fuel the campaign, the Obama Digital team optimized just about every aspect of the campaign’s fundraising strategy, from web pages to emails. Over the course of 20 months, the team executed about 500 A/B tests that increased donation conversions by 49% and sign-up conversions by 161%.

[[/]]

Their optimization success is a testament to the perseverance and iteration required to achieve huge conversion gains. The team focused on cultivating a detailed understanding of their users’ behavior, looking for influences in variables like imagery, copy, design, usability, and website performance.

Kyle Rush, Obama for America’s Deputy Director of Frontend Web Development, steered the team’s testing roadmap, ensuring that there was always a queue of ideas and experiments waiting to be tested. Optimizely was their A/B testing platform of choice.

{% include "blockquote.html"
  {
    size: 'full',
    quote: 'Always be running an A/B test. If you are really serious about your A/B testing operation, then there’s no reason why you wouldn’t. You might have some instances where a variation bombs and reduces conversion rates, but you have to be willing to take that risk.',
    attribution: 'Kyle Rush, Deputy Director of Frontend Web Development, Obama for America'
  }
%}


Their scientific method for testing centered on strong hypotheses, and on creating multiple experiments to try to prove or disprove each hypothesis. In some cases, multiple testing was helpful in determining whether the team had uncovered a true winner or a statistical false positive in their results.

To uncover conversion improvements that would convert visitors to email subscribers and email subscribers to donors, the team focused on quantifiable measurement of their users’ behavior using Google Analytics, paired with user research insights and hypotheses based on consumer psychology.

## Test 1: Restaurant Menu Psychology

Optimizing donation forms was a constant testing theme on the campaign. Many hypotheses were tested to gauge which triggers potential donors were most sensitive to.

A member of the Obama Digital team had learned that high-end restaurants remove dollar signs from their menus because diners tend to spend more money without them. The team decided to test omitting dollar signs from the site’s donation form to determine whether the change would positively impact donation conversions.

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/obama2012/obama2012-dollarsign-test.png',
    caption: 'The variation (Right) removed dollar signs from the amounts on the donation form.',
  }
%}

The result of the experiment was a statistical tie. The team then moved on to test other hypotheses on this same donation form.

## Test 2: Mobile Web Insights

One promotion that the Obama Digital team ran was an opportunity for supporters to win dinner with the President. Just like with the original donation form, their goal was to increase conversions on the sweepstakes donation form.

When designing the form’s mobile web experience, the team thought keeping the form as simple as possible and removing all unnecessary elements would be best. They decided to remove the image of the President found on the desktop website experience since it wasn’t essential to the donation.

However, in other experiments with imagery, the Obama Digital team had found that donors responded positively to imagery of the President. They decided to test adding an image back into the mobile experience.

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/obama2012/mobile-donate-test.png',
    caption: 'The variation experience (Right) tested adding imagery of the president to the mobile experience to try to increase donations.
',
  }
%}

Adding the photo of the president produced a *6.9% lift in donations* to enter the sweepstakes.

## Test 3: The ‘Gradual Incline’ Donation Form

Late in the campaign, the donation forms on the Obama 2012 website had already been optimized past the point of low-hanging fruit. The team decided to double down on optimizing the form by investing in a more technically complex test.

Kyle Rush calls this test the “gradual incline versus the steep slope.”

The donation form was a long, multi-step process that required visitors to input lots of information. The Obama Digital team knew from usability best practices that they were losing potential donors from the long form.

But when it comes to donations, federal law requires specific information, which meant the team couldn’t just throw out unnecessary form fields. Instead, they set about making the form appear shorter by breaking it into pieces. And rather than just making the order of fields arbitrary, they went the extra step by analyzing validation errors of each field in order to put the easiest ones first.

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/obama2012/obama-sequential.png',
    caption: 'The “sequential” donation form placed donation amount first, then built up to payment information in the final step.',
  }
%}

The team then proved their hypotheses were correct through testing. Breaking the form into four smaller parts *increased the donation conversion rate by more than 5%*.

The team successfully identified a usability issue, implemented a solution, and proved that their solution worked through testing. To squeeze out a 5% lift on the campaign’s primary donation form was a big accomplishment for a matured testing organization and roadmap. It’s an important reminder that with a little creativity and effort, there are always conversion improvements to be found on your own site.

## Takeaways

* Be prepared: The Obama Digital team always had a test running, and always had a backlog of experiment ideas. The traffic coming to the campaign website was a tremendous opportunity for testing, just like the traffic coming to your site right now.
* Focus on understanding user psychology: Instead of adopting a “test everything” mentality, encourage members of your testing organization to craft hypotheses that draw on a deep understanding of your user’s motivations, desires, and behavioral quirks.


