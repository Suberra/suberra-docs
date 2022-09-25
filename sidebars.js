/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // we do not need the preceding "1_" because docusaurus automatically strips it away
  docs: [
    {
      type: 'category',
      label: 'Overview',
      link: { type: 'doc', id: 'overview/what_is_suberra' },
      items: [
        'overview/introduction',
        'overview/what_is_suberra',
        'overview/periodic_allowance',
        'overview/use_cases',
      ]
    },
    {
      type: 'category',
      label: 'Payments',
      link: { type: 'doc', id: 'payments/overview' },
      items: [
        'payments/overview',
        'payments/payment_link',
      ]
    },
    {
      type: 'category',
      label: 'Subscriptions',
      link: { type: 'doc', id: 'subscriptions/subscriptions' },
      items: [
        'subscriptions/subscriptions',
        'subscriptions/subscription_nft',
      ]
    },
    {
      type: 'category',
      label: 'Integration',
      items: [
        'integration/getting_started',
        'integration/webhooks',
        'integration/sdk',
      ]
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/cookie_policy',
        'legal/terms_and_conditions',
      ]
    }
  ]
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
