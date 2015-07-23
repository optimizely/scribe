---
short_name: iron_mountain
title: Iron Mountain iProspect Optimizely Case Study
category: b2b
hero:
  title: Iron Mountain Optimizes Lead Generation Process
  subtitle: Partnering with iProspect improves lead quality by 140%
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
    image: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/iron-mountain/logo_iron_mountain.png',
    metadata: {
      1: {
        value: 'Technology',
        title: 'Industry'
      },
      3: {
        value: 'Boston, MA',
        title: 'Location'
      }
    }
  }
%}

[[intro]]

As a large B2B company, Iron Mountain is constantly striving to drive sales and improve lead conversion on its website. Its marketing team works closely with the digital performance agency iProspect to drive online strategy – particularly when it comes to website optimization.

[[/]]

Iron Mountain wanted to increase the quality of inbound leads acquired from the lead generation form on its website. Many site visitors were completing the form, but most submissions contained incomplete or irrelevant information. While the goal was to gather information from site visitors interested in Iron Mountain’s business solutions, some visitors used the form fields to inquire about career opportunities or customer support. Others provided phone numbers in a format incompatible with the way the sales team captured and measure online activity.

{% include "blockquote.html"
  {
    size: 'full',
    quote: 'Ensuring that sales teams have solid leads to follow is fundamental in the B2B marketplace. We wanted a way to deliver better leads without burdening our busy internal IT team.',
    attribution: 'Nimesh Parmar, Online Manager, Iron Mountain'
  }
%}

Iron Mountain wanted to find a way to make the form more efficient, providing complete information and higher quality leads to its sales team.

## Hypothesis

The team hypothesized that revamping the lead generation form would improve lead quality and drive more revenue. They partnered with iProspect, a digital marketing agency, to test out this hypothesis. iProspect first performed an audit of the current form to identify major pain points. Then, they hypothesized ways they could address each one with testing.

Challenge  | Hypothesis
---------- | -------------
Form completion is unclear; users are leaving required fields incomplete. | Visual form validation will guide users to complete the form correctly.
Phone numbers are incompatible with Salesforce.com, the platform Iron Mountain’s sales team uses to capture lead information. | A modified phone number field will ensure numbers match the correct format.
Site visitors do not understand the overall purpose of the form – to inquire about Iron Mountain’s business solutions. | Changes to the headline will help visitors understand the form’s purpose.

## Test

Using Optimizely, iProspect created a modified version of the lead generation form. The variation form differed from the original in a number of ways. To clarify what information was needed in each form field, the team replaced the descriptions above each field with descriptions located inside each field.

They changed the form’s headline from “Contact us today” to “Request a quote” to clarify the form’s purpose. They used the custom JavaScript editor to code new validation functionality for each form field. For example, an error message was displayed if an incompatible phone number was entered, ensuring the prospective customer corrected the information before submitting.

{% include "side-by-side.html"
  {
    images: [
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/iron-mountain/original.png',
      'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/iron-mountain/variation.png'
    ],
    caption: 'The purpose of the original form was unclear to many site visitors, which caused a decrease in quality of overall leads generated. The variation made the form’s purpose more clear. It displayed a new headline, form field descriptions in each text box, and improved validation functionality.'
  }
%}

They measured lead quality as the primary metric for success. For Iron Mountain’s sales team, a high quality lead is someone who will become a paying customer quickly. Having complete information from the form fields is important because it saves them time tracking down missing contact information and helps them understand exactly what solutions the customer is looking for and how much they are willing to pay.

To measure lead quality for this test, they calculated the number of high quality leads (i.e. those who submitted complete, relevant information) in comparison to the total number of leads generated (i.e. total number of forms submitted).

## Results

The variation form resulted in a *140% improvement in lead quality, representing the highest lead quality Iron Mountain’s sales team had ever seen.* The improved form freed up time for the sales team to focus on selling to highly qualified prospects, increasing revenue significantly across the board. After seeing such significant improvements to their business’s bottom line from this test, Iron Mountain will continue to optimize other lead generation aspects of their site.

## Takeaways

* Think beyond traditional conversions. Define the ultimate goal you’re trying to achieve with your website and keep this in mind when formulating your hypotheses. While many businesses focus on the quantity of leads, measuring the quality of leads had an even greater impact on Iron Mountain’s business. According to Nimesh Parmar, Iron Mountain’s online manager, “The impressive and immediate jump in lead quality has more than repaid the resources we invested to get this right.”
* Tighten your testing strategy with each test. Use insights from past tests to develop follow-up tests that will continue to boost conversions. After seeing a major increase in lead quality from their initial test, iProspect and Iron Mountain are building follow-ups to improve other key lead generation areas on the site, including the contact information page.
