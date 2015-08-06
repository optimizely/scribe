---
shortname: trunkclub-mobile
title: Trunk Club Scales Personalized Shopping with a Stylist in Your Pocket
category: e-commerce
hero:
  title: Trunk Club Scales Personalized Shopping with a Stylist in Your Pocket
  subtitle: How the tech-savvy retailer increased stylist productivity 90% through mobile app optimization
stats:
  1:
    value: 43%
    title: Increase in Stylist-Member Connections
  2:
    value: 90%
    title: Increase in Stylist Efficiency
  3:
    value: 10%
    title: User Engagement with New Feature
recommended:
  1:
    story: smartwool
  2:
    story: secret-escapes
  3:
    story: veggietales
---
{% include "case-study-box.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/trunkclub-mobile/trunkclub-logo.png',
    metadata: {
      1: {
        value: 'Retail',
        title: 'Industry'
      },
      2: {
        value: 'Chicago, IL',
        title: 'Location'
      }
    }
  }
%}

[[intro]]

Trunk Club is a consumer service that helps men shop without shopping. 

It matches its members with a personal stylist who compiles a “trunk” of clothing based on each individual’s preferences and style to help savvy men find clothes that are perfect for them without ever setting foot in a store. 

[[/]]

The company takes pride in cultivating strong personal relationships between the customer and his stylist. “We want to help these guys get dressed with confidence every day,” says Mike Cruz, Trunk Club’s Vice President of Engineering. To that end, Trunk Club makes its web and mobile experiences as personal as possible, collecting information on preferences and habits to tailor their engagements. 

## The Challenge

The Trunk Club stylists need to provide top-notch, personal service efficiently in order for the company to scale its business. 

“If members are just there to window shop, it really cuts into our stylists’ time,” says Justin Hughes, Director of Product at Trunk Club. “We have a lot of people sign up and immediately request a bunch of things via the [Trunk Club] app. That requesting process can be painful for the stylist because it generates a lot of noise, when a lot of the guys aren’t actually interested in receiving the product.” 

So they wondered: As the company grows, how can they scale their customer-stylist interactions and make them as efficient as possible? And what are the mobile-specific behaviors that Trunk Club can incorporate into their data-driven portrait of a qualified customer? With these questions in mind, Justin and the Trunk Club engineering team used Optimizely to run two experiments on their mobile app experience. 

[[callout callout--big]]

#### Business Impact of Experiments:

* *43% increased likelihood* that a member and stylist would connect and ship a trunk
* *90% increase* in Trunk Club stylists' efficiency
* Safely introduced a “liking” user behavior that *engaged 10% of active users*
* Increased featured merchandise requests *by 8.6%*

[[/]]

## Credit Card Gating Experiment

Since mobile users are often in more of an exploratory state, the Trunk Club team wanted to experiment with different app mechanics that would help them to separate window shoppers from serious buyers. Requiring a credit card was one potential option for separating the browsing user from a user with strong purchase intent.

This experiment tested requiring credit card information versus not requiring credit card information at all before requesting a trunk. In either case, the card isn’t charged until a member decides to keep an item of clothing in their trunk.

#### Hypotheses

1. Would stylists would be quicker to respond if they received fewer leads that were better qualified and purchase-ready? 
2. Would requiring members to take the extra step of entering their credit card information before requesting a ‘trunk’ lead to more productive leads for the stylists to pursue?

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/trunkclub-mobile/cc-experiment-control.png',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/trunkclub-mobile/cc-experiment-variation.png'
    ],
    caption: 'Requesting a trunk: No credit card required (Left) versus requiring payment information (Right)
'
  }
%}

#### Results

* The stylist and customer were *43% more likely to connect and ship a trunk of clothing*, a key step in Trunk Club’s customer conversion funnel
* Due to higher quality of leads from the app, *stylist productivity improved 90%*

Requiring credit card information led to fewer overall conversions, but the users that requested a trunk were more qualified and converted to purchases at a higher rate. The experiment provided stylists with more productive leads. “We saw about half as many trunk requests come through—but then *we were twice as likely to actually convert those trunk requests [to shipments]*,” says Hughes. 

This was a tremendous win both for the stylists, who are focused on offering a high level of service to thousands of new members each day, and for the Trunk Club customer, who was more likely to understand that requesting a trunk was an action that required a purchase intent, and more likely to move further down the purchase funnel after requesting a trunk in the app.

## The Liking Experiment

Just like with the credit card experiment, the Trunk Club mobile team wanted to find a way to allow users to engage with the app in a way that wouldn’t inundate stylists with requests—but that also wouldn’t reduce the number of qualified trunk requests they were receiving through the app.

They wanted to experiment with how users could indicate style preferences. Trunk Club app users at first communicated their style preferences only by requesting clothes. The team wanted a low-risk way introduce a new action that would fill the gap between browsing and requesting clothing that would both engage users and provide useful data to the stylists.

Using Optimizely, the team was able to validate the introduction of a new “like” button feature. They first tested the feature a limited amount of their app traffic to ensure that key metrics like trunk requests remained stable. 

#### Hypotheses

1. Would a softer form of preference indication—likes—be used?
2. Would like cannibalize purchase requests in the app? 

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/trunkclub-mobile/trunkclub-no-feature.jpg',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/trunkclub-mobile/trunkclub-new-feature.jpg'
    ],
    caption: 'Liking: Users add choices to their trunks versus users like/heart their style preferences (Right).
.
'
  }
%}

#### Results

* *10% of users in the experimental treatment engaged with the feature*
* Merchandise requests *increased by almost 9%*

The new like button was an immediate success, and the Trunk Club team began to “double up” on the amount of traffic included in the “like” treatment of the app.

Members would “like” products 10-12 times in a sitting, shattering engagement expectations and offering a great window into the member’s wardrobe preferences and style. “We also found that people were more likely to submit a trunk request when we got them to like things in the app,” says Hughes. 

By testing the introduction of the “like” feature, the team was able to ensure that clothing requests were not cannibalized by the new behavior, and proved that introducing liking was actually beneficial for both user engagement and trunk requests, the team’s top-line metric.

## Business Impact

The credit card gate and liking experiments brought the Trunk Club product team and stylists invaluable information that helps both groups up their games. The product team now has data to ensure that introducing a new feature that positively impacts user engagement while still leading to qualified trunk requests, and the stylists have the qualified leads they need to offer exceptional—and 90% more efficient—personal service. 

{% include "blockquote.html"
  {
    size: 'full',
    quote: 'We’re trying to take a stressful, painful experience and make it as easy as possible, and Optimizely helps us do that.',
    attribution: 'Mike Cruz, VP of Engineering, Trunk Club'
  }
%}

Trunk Club continues to run experiments that refine their product experience and validate their overall technology strategy of offering personal, on-the-go service to their customers. “We’re trying to take a stressful, painful experience and make it as easy as possible,” says Mike Cruz, Trunk Club's VP of Engineering. “And Optimizely helps us do that.” 

Now that they’ve shared the value of testing across the company, other departments are getting involved. “We don't even think of it as a third-party solution—we call [Optimizely] our testing tool. Everyone’s familiar with the dashboard and how to add test flags. People get excited about running tests and checking results. It’s become part of our culture,” adds Cruz.





