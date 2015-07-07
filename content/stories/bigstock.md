---
title: Bigstock Optimizely Customer Story
hero:
  title: New Search Algorithm Improves Bigstock's Entire Download Funnel
  subtitle: Running a simple test with Optimizely led to a 10% increase in conversions
  background: https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/bigstock/bigstock-hero.jpg
stats:
  1:
    value: 10%
    title: More Search Conversions
  2:
    value: 7%
    title: More Images Added to Cart
  3:
    value: 3%
    title: More Images Downloaded
---
{% include "case-study-box.html"
  {
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/bigstock/bigstock-logo.png',
    metadata: {
      1: {
        value: 'Online Commerce',
        title: 'Industry'
      },
      3: {
        value: 'New York, NY',
        title: 'Location'
      }
    }
  }
%}

[[intro]]

Since “falling in love with Optimizely”, Boris Masis, a product manager at Bigstock says that testing now has a significant impact on their product rollout strategy.

As a stock image website, Bigstock aims to provide an intuitive and fluid experience for finding appropriate images of all types. Every potential customer’s experience typically begins with a search. The easier it is to find the right image, the better Bigstock’s bottom line and customer happiness.

[[/]]

How can Bigstock improve the search experience for users to rapidly find the image they are looking for?

## Hypothesis

The success of an image search on Bigstock depends on the search term and the search algorithm. Since the method a visitor uses to arrive at the perfect image is subjective, Bigstock examined the search algorithm, a static code that controls the results a user sees. They thought trying a different search algorithm might improve overall user experience and lead to more downloaded images.

{% include "blockquote.html"
  {
    size: 'half',
    quote: 'We try to run every large project through A/B testing before we call it done to make sure it’s actually helping.',
    attribution: 'Boris Masis, Product Manager, Bigstock'
  }
%}

## The Test

The original search algorithm – an exact auto suggest – populated results based exactly off the word entered in the search field. For example, when entering “c-a-l-a,” the top result would be “calamari.” Most often, people searching “c-a-l-a” were actually searching for images of a calendar and just misspelling the word. Showing users top results for calamari instead of calendars might deter people from finding the perfect image, Bigstock thought. 

One of their developers created a “fuzzy auto suggest” algorithm that predicted the intended search term for commonly misspelled words. Now, “c-a-l-a” would populate “calendar” as the first search result, since it’s such a common search term. Bigstock needed to determine if their site visitors would be more likely to select results with the fuzzy or the exact search algorithm.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/bigstock/autocomplete-before.png',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/bigstock/autocomplete-after.png'
    ],
    caption: 'Before: Exact Autosuggest (Left), After: Fuzzy Autosuggest (Right).'
  }
%}

## Solution

Optimizely provided the platform for Bigstock to set up an A/B test that bucketed all their live site visitors onto either the fuzzy or exact search page. They were then able to set up a tracking goal with Optimizely to measure how many times a visitor in each bucket selected a search result. Whichever algorithm received more result selections would be the winning variation, taking the guesswork completely out of the equation. Integrating Optimizely with Bigstock’s Google Analytics account provided even deeper insight about how each algorithm impacted conversions further down the down-load funnel.

## Results

On Optimizely’s results page, Bigstock could clearly see that visitors selected results from the the fuzzy auto suggest 9.6% more often.

With Google Analytics, they were also able to see significant improvements throughout, including a 6.52% increase in the number of images added to the cart, and a 3.2% increase in downloaded images. In under a week, Bigstock used Optimizely to solve a business challenge that enhanced user experience and increased revenue.

{% include "blockquote.html"
  {
    size: 'full',
    quote: 'Testing ensures that the work is adding value and quantifes that value. Of course, we also do testing when we are unsure of which path to take.',
    attribution: 'Boris Masis, Product Manager, Bigstock'
  }
%}

[[callout]]

#### Takways

- *TEST CONTINUOUSLY:* Each change, improvement or new feature roll-out on your site presents an opportunity to test and measure.
- *EXPLORE, THEN REFINE:* Test the big pieces first and do exploratory work before optimization work. For example, try out entirely new algorithms or page layouts first, and then do smaller tests like tweaking buttons.

[[/]]

