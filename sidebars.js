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
    "Introduction",
    {
      type: "category",
      label: "Overview",
      items: [
        "1-what-is-suberra",
        "overview/suberra-for-merchants",
        "overview/how-suberra-works",
        "overview/use_cases",
        "overview/features",
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: ["payments/overview", "payments/payment_link"],
    },
    {
      type: "category",
      label: "Subscriptions",
      items: ["subscriptions/subscriptions", "subscriptions/subscription_nft"],
    },
    {
      type: "category",
      label: "Integration",
      items: [
        "integration/getting_started",
        "integration/webhooks",
        "integration/sdk",
      ],
    },
    {
      type: "category",
      label: "Legal",
      items: ["legal/cookie_policy", "legal/terms_and_conditions"],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/subscriber_only"],
    },
  ],
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
