---
short_name: sony
title: Sony Optimizely Case Study
category: mobile
hero:
  title: Electronics Giant Unlocks Suprising Wins with Segmentation
  subtitle: Sony optimizes to drive 20% more visitors through the configuration checkout funnel
stats:
  1:
    value: 6%
    title: Increase in Banner Ad Clicks
  2:
    value: 21%
    title: More Shoppers Engage with Cart
  3:
    value: 20%
    title: Increase in Checkout Conversions
recommended:
  1:
    story: french_girls
  2:
    story: secret_escapes
  3:
    story: obama2012
---

{% include "case-study-box.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/sony/sony.png',
    metadata: {
      1: {
        value: 'Retail',
        title: 'Industry'
      },
      3: {
        value: 'Brussels, Belgium',
        title: 'Location'
      }
    }
  }
%}

[[intro]]

As a leading global electronics company, Sony knows providing the right experience for online shoppers is critical to business. The company uses many different marketing tactics to personalize the customer journey to increase purchases on its online store.

[[/]]

Evelien Geerens is a web merchandiser at Sony who uses Optimizely to increase conversions across the company’s web merchandising platforms. During a recent site audit, Evelien discovered that banner ads promoting customizable laptops on Sony’s homepage and product pages were underperforming – clickthroughs and purchases from the banners were extremely low. Evelien set out to fix this conversion problem with A/B testing.

## CHALLENGE #1: Low Banner Ad Conversion

The banner ads in question presented two different calls-to-action – one advertising the customizable Sony Vaio notebooks and one promoting a recent sitewide offer for a free memory upgrade.

Evelien hypothesized that displaying dual CTA messages was confusing and overwhelming to site visitors, making them less likely to click through on
the banner. However, her team’s usability research suggested otherwise. In Sony’s UX tests, Evelien learned that some site visitors were actually put off by the customizable laptop option. These visitors believed the customization process would be too timeintensive and not worth the outcome.

Faced with contradicting opinions, Evelien
turned to Optimizely to let data make
the final decision.

## Test

Using Optimizely, Evelien built an A/B/C test to test two different variations of the banner against the original. With
Optimizely’s targeting feature, Evelien targeted the experiment only to site visitors from the Netherlands and the United Kingdom – two of Sony’s largest
markets for the customizable laptop campaign. One variation focused entirely on the customizable laptops, while the other focused only on the sitewide offer.


{% include "blockquote.html"
  {
    size: 'full',
    quote: 'Testing helps you make decisions based on objective results, not subjective guesses. It’s a good way to be in touch with how the customers react to the content of your website.',
    attribution: 'Evelien Geerens, Web Merchandiser, Sony'
  }
%}

Evelien’s goal was to measure how each banner impacted the number of visitors who clicked through the banner and then eventually entered the checkout funnel. She measured this by setting two goals – a click goal on the banner itself and a pageview goal to measure each time site visitors reached shopping cart landing pages after clicking through the banners.

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/sony/original-banner.jpg',
    caption: 'The original banner displayed messaging around the personalization campaign and the promotion.',
  }
%}

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/sony/variation-1-banner.jpg',
    caption: 'Variation 1 focused entirely on the idea of customization. The banner included a “Vaio by you” logo, and a call-to-action to create and customize a laptop. The banner did not reference the sitewide offer.',
  }
%}

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/sony/variation-2-banner.jpg',
    caption: 'Variation 2 focused on the promotional aspect, showing specific messaging to create urgency around the offer. This variation made no reference to personalization. ',
  }
%}

## Results

*Variation 1, the banner focused
on customization, saw a 6% increase
in banner click-throughs and an uplift
of 21.3% in visitors that reached the
shopping cart compared to the original
banner.* Variation 2, the banner focused
on the sitewide promotion, only increased
click-throughs by 1.8% and actually
performed worse than the original in
terms of shopping cart views, decreasing
conversions by 2.9%.

## Post-Test Segmentation

As the data came in, Evelien used Optimizely’s segmentation
feature to dig deeper – breaking down
the test results by key user segments to
understand where there might be gaps or
outlying data. Segmentation paints a more
complete picture of test results and helps
testers like Evelien pinpoint areas to test next.

First, Evelien segmented based on
geolocation – the Netherlands versus the
United Kingdom – to ensure both key
markets were performing comparably
throughout the test. The results were
similar, indicating that the customization
banner experience was a strong choice to
increase conversions in both markets.

Next, she segmented the results based on
device type – mobile versus desktop. In
these segments, she uncovered surprising
results around the banner click-through
rates. The trend toward customization
was reversed for mobile visitors, who
were more interested in clicking on the
promotional banner. Variation 2, the
banner that focused solely on the sitewide
promotion, increased mobile click-through
conversions by 21% compared to the
original, while variation 1, the banner
focused on customization, only increased
click-throughs by only 16%.

Based on this insight, Evelien’s team is
currently developing a series of followup
tests targeting different promotional
options to Sony’s mobile audience to
maximize revenue from visitors
on all devices.

## CHALLENGE #2: High Bounce Rates in the Checkout Funnel

With a clear understanding of how to best
drive mobile and desktop visitors into the
checkout funnel, Evelien ran several followup
tests to learn what would keep them
there and compel them to make a final
purchase.

Her first test focused on customers
traveling through the customized laptop
checkout process. Using analytics to
gather metrics from each step in the
funnel, Evelien found out that after
the second step – the configuration of
customizable components for each laptop
– 39% of all visitors abandoned the buying
process. She hoped to find a way to keep
these users from bouncing.

## Hypothesis

Evelien believed that shorter
product descriptions would make it
easier and faster for customers to make
an informed choice on the customizable components page. This, in turn, would
drive more visitors to continue through the
checkout funnel.

## Test

Using Optimizely, Evelien set up an
A/B test, pitting the original funnel page
against a variation with shorter, more
digestible product descriptions. In addition
to this change, the variation page changed
the term “configuration” to “components”,
added top seller tags to indicate popular
choices, and highlighted promotions on the
page. To track purchases from each variation,
Evelien set a pageview goal on the order
acknowledgment page – where customers
land after making a successful purchase.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/sony/original-funnel-page.png',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/sony/variation-funnel-page.png'
    ],
    caption: 'The original funnel page (Left) displayed long product descriptions, and did not highlight top-sellers or promotions. The variation funnel page displayed shorter product descriptions. It also changed the term “configuration” to “components”, included top seller tags, and highlighted promotions.'
  }
%}

RESULTS: The variation page outperformed
the original – with *20.6% more visitors
reaching the order acknowledgement page.*
This meant a measurable increase
in revenue for Sony.

{% include "blockquote.html"
  {
    size: 'full',
    quote: 'By changing our website based on test results, we can better meet the online expectations of our customers and, at the same time, increase conversions.',
    attribution: 'Evelien Geerens, Web Merchandiser, Sony'
  }
%}


## TESTING TAKEAWAYS

* DIVE DEEPER INTO TEST RESULTS WITH SEGMENTATION. No two site visitors are the
same. Understanding how specific visitor segments interact with your site will help you
provide a more personalized experience to maximize conversions. Evelien segmented her
results based on device type. Segmentation is also available based on a number of other
parameters, such as browser type, campaign, referral source, custom segments, and more.
* CHALLENGE ASSUMPTIONS. Sony’s qualitative user research suggested that customers
were not interested in the laptop customization campaign but Evelien’s instinct told her
otherwise. Testing the options against each other provided clear, quantitative data to
back up Evelien’s hypothesis and convince her team to keep the campaign running.
* SOMETIMES LESS IS MORE. REDUCE CHOICES TO INCREASE CONVERSIONS. Evelien’s tests
on Sony’s webstore revealed that paring down options and information throughout the
checkout funnel can actually provide a more clear path for site visitors. Test different
options to understand how much information your site visitors prefer.
