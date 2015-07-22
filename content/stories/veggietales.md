---
short_name: veggietales
title: VeggieTales Optimizely Case Study
category: mobile
hero:
  title: VeggieTales Optimizes Online Sales with Blue Acorn
  subtitle: Continuous testing increased RPV by 38%
stats:
  1:
    value: 38%
    title: Increase in Revenue per Visitor
  2:
    value: 42%
    title: Increase in Conversion Rate
  3:
    value: 28%
    title: Increase in Mobile Revenue
  4:
    value: Blue Acorn
    title: Optimizely Solutions Partner
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
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/veggietales_logo.svg.png',
    metadata: {
      1: {
        value: 'Retail',
        title: 'Industry'
      },
      3: {
        value: 'Nashville, TN',
        title: 'Location'
      }
    }
  }
%}

[[intro]]

VeggieTales is an animated children’s TV series, hugely popular with pre-schoolers in the United States. Since 1993, they have sold over 70 million videos, 15 million books, 7 million CDs, and all sorts of accessories touting the iconic vegetable characters.

[[/]]

VeggieTales wanted to systematically optimize the design of their entire e-commerce site, store.veggietales.com, so they got in touch with my optimization strategy team at Blue Acorn for direction and results.

Their initial research initated experiments with subtle design changes that, after reaching statistical significance through A/B testing, now receive 100% of the traffic as permanent design changes. All together, these subtle changes led to significant changes in revenue and growth:

* 38% increase year-over-year in sitewide revenue per visitor
* 42% increase year-over-year in sitewide conversion rate

By first examining their analytics, the Blue Acorn team was able to determine where to start testing and what to test.

At a glance, here are the results they produced for the VeggieTales store:

* 17.4% increase in revenue per category page visitor
* 13.9% increase in revenue per product page visitor
* 14.3% increase in revenue per checkout page visitor
* 36.8% increase in revenue per homepage visitor with social media changes
* 28.1% increase in revenue per mobile visitor

<!-- {% include "video.html"
  {
    api_key: 'vdN2hbWk8V8pPVYGb4eSFg'
  }
%}
 -->

Let’s look at the hypotheses and variations that produced these results.

## Primary conversion metric: RPV

The truest metric for measuring the success of optimization testing for an e-commerce site is Revenue Per Visitor (RPV). Increasing conversion rates is easy if heavy discounting is employed, but that would kill company revenue. Constantly attempting to improving conversion rate is still a smart idea. However, e-commerce merchants should focus on RPV their primary Key Performance Indicator (KPI).

## The Tests

Together, Blue Acorn and Veggie Tales set out to iteratively test many locations in their website conversion funnel. Here are some of the successful experiments they ran across the site's homepage, category pages, product pages, checkout flow, and mobile site:

### Category Page

VeggieTales’ category pages had featured very large, bright, distracting banners. Customers landing on the page didn’t have general guidance on where to go, and they were getting distracted from finding products they wanted and continuing to the product page.

*Hypothesis:* Dropping the banners would result in a higher RPV.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/vt-category-page-original.jpg',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/veggietales-category-page-variation-music.jpg'
    ],
    caption: 'The variation category page (Right) drops the category page banner.'
  }
%}

*Results:* Without the banner, VeggieTales’ category pages produced a 17.4% increase in RPV.

*Statistical Confidence Level:* 95.3%

### Product Page

Using custom heat mapping tools, the Blue Acorn team confirmed that VeggieTales’ current product pages had very poor spacing, distracting attributes, and lacked organization. They weren’t awful by any means, but they weren’t optimal either.

*Hypothesis:* Improving the spacing and increasing the prominence of the primary call-to-action will result in a higher RPV.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/vt-product-page-original.jpg',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/vt-product-page-variation.jpg'
    ],
    caption: 'The variation product page (Right) highlights the CTA and minimizes other elements.'
  }
%}

*Results:* The product page variation produced a 13.9% increase in RPV.

*Statistical Confidence Level:* 96.1%

### Checkout Page

This is where eCommerce conversions happen. However, VeggieTales’ checkout page included all of the same header and footer elements that were found on every other page of the site. They’re good elements, but they serve as unnecessary distractions to a visitor trying to convert to a customer, and can be eliminated using a website optimization tool like Optimizely.

*Hypothesis:* Simplifying the checkout by removing all of the distractions in the header and footer – except those designed to act as confidence builders—will result in a higher RPV.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/vt-checkout-original.jpg',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/vt-checkout-variaiton.jpg'
    ],
    caption: 'The variation checkout funnel (Right) removes navigation elements from the top of the page.'
  }
%}

*Results:* The more streamlined checkout page variation produced a 14.3% increase in RPV.

*Statistical Confidence Level:* 98.1%

### Homepage

The original homepage had a strong callout for free shipping, which is never a bad idea for converting visitors, but it overshadowed the site’s social icons.

However, we didn’t just want to move the social icons to the header, we wanted visitors to be aware of the immense size of the VeggieTales community, which serves as a confidence builder.

*Hypothesis:* By adding social icons to the header and making visitors aware of the size of the VeggieTales community, visitors will be more likely to have social interactions within the community and consumer confidence will increase.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/veggietales-hp-original.jpg',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/veggietales-hp-winning-variation.jpg'
    ],
    caption: 'The variation category page (Right) removes the shipping offer and promotes the social following buttons.'
  }
%}

*Results:* Not only has VeggieTales gained more fans and followers, but the variation homepage produced an astounding 36.8% increase in RPV.

*Statistical Confidence Level:* 95.7%

### Mobile Site

There’s actually nothing mobile about this UI. It is simply the desktop UI viewed on a mobile device. It’s nice in that it doesn’t rely on Flash, which is still not supported on iOS, but it requires a tremendous amount of effort to navigate the site on a smartphone.

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/vt-non-mobile-ui.jpg',
    caption: 'VeggieTales Store original mobile experience',
  }
%}

*Hypothesis:* Sending mobile traffic to a mobile-themed UI will increase the mobile conversion rate and revenue per visitor.

{% include "figure.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/veggietales/vt-mobile-ui.jpg',
    caption: 'VeggieTales Store mobile-optimized user experience, tested against the original above',
  }
%}

*Results:* Thanks to testing, VeggieTales now knows they can be generating a lot more revenue from their mobile visitors, as this quick, non-customized, mobile-themed UI saw a 28.1% increase in revenue per visitor.

*Statistical Confidence Level:* 99.1%

[[callout]]

#### TAKEAWAYS

- *FOCUS ON REVENUE:* Treat revenue, not conversions, as the key KPI for your testing. Changes, promotions, and other iterations from testing may improve conversions while negatively impacting your bottom ROI. Make sure that both metrics are always increasing.
- *KEEP AN EYE ON STATISTICAL SIGNIFICANCE:* All of the experiments on VeggieTales' store pages reached 95% or greater statistical significance, which is the industry-recommended standard for testing.
- *JUST THE BEGINNING:* The improvements VeggieTales has experienced thus far are just the beginning. Once the changes to the homepage variation are applied to the rest of the site, Blue Acorn expects that number to grow even higher. These experiments focused on the lowest of the low-hanging fruit (or should we say vegetable) in order to produce the quickest gains for their client.

[[/]]