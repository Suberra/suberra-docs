---
sidebar_position: 2
---

# Pre-requisites

Integration with Suberra involves the following:
1. Creating a *product subscriptions* contract that would keep track of product and prices
2. Set up access controls by checking if a user has valid access to the product subscriptions

## Option 1: Direct on-chain query

This option is more suitable for developers who wants to use the automation and subscription storage on Suberra without going through Suberra's centralised Webhook services.

Information about the membership is stored as a Proof-of-Membership. The contract interfaces are similar to a standard ERC-721 contract.