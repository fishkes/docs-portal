---
title: "Response Policies"
slug: "aqua-hub-response-policies"
draft: false
position: 9
---

# Overview

This topic explains how to create and configure a Response Policy. You can create one or more Response Policies to detect specific events, configured as Trigger in the policy. This event can be a critical vulnerability found on an image, malicious runtime activity on their deployments and so on. Policy configuration also includes sending event notifications based on the predefined application scope to the external notification systems, such as JIRA, Microsoft Teams, Email, Slack, and so on. These notifications can help you take actions to prevent security threats and malicious activities detected in your environment.

:::info

- In the Aqua Self-Hosted edition, to access the Response Policies page, navigate to Policies > Response Policies.
- In the Aqua SaaS edition > Enterprise plan, to access the Response Policies page, navigate to the Aqua Hub module > Response Policies page.

:::

## Use cases

You can create a Response Policy to send event notifications to your:

- Slack channel for the security team when there is an instance of malware or incident with critical severity detected in your environment
- Teams group for the developer team when there are any critical vulnerabilities or sensitive data detected in a specific repository in your Docker Hub registry

## Prerequisite

[Integrate your notification system](https://docs.aquasec.com/v2022.4/platform/integrations/integrations-notifications/) with Aqua to send the event notifications as configured in Response Policy.

# Create a Response Policy

To create a Response Policy:

1. Navigate to **Policies > Response Policies**.
2. In the **Define Rules Basic Data** section, enter title and an optional description. You can also enable or disable a policy in this section at any time.
3. Click **Next**.

<img src="/img/aqua-hub/01_s00_Aqua_hub_response_policies.png" alt="01 s00 Aqua hub response policies.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

4. In the **Select Application Scope(s)** section, select one or multiple application scope(s). You can select **Global** if you do not want to apply any scope.
5. Click **Next**.

<img src="/img/aqua-hub/02_s00_Aqua_hub_response_policies.png" alt="02 s00 Aqua hub response policies.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

6. In the **Select a Trigger** section, select one of the predefined triggers or "Customize Trigger". For more information on customizing a trigger, refer to [Trigger types](./SaaS-aqua-hub-response-policies#trigger-types).

<img src="/img/aqua-hub/03_s00_Aqua_hub_response_policies.png" alt="03 s00 Aqua hub response policies.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

7. Click **Next**.
8. In the **Set Action** section, select the following options:

   a. From the Output dropdown, select the notification system which was already integrated.
   b. From the Integration Instance dropdown, select integration instance from a specific system. An integration instance can be a specific Slack channel or a Teams group.
   c. Click **+ Add Output** to add multiple notification systems or instances to send event notifications.

:::info

If a notification system is not already integrated with Aqua, you can integrate it from the Set Action section, without navigating to the **Integrations > Notifications** page while configuring policy. For more information, refer to [Integrate notification system during the policy configuration](./SaaS-aqua-hub-response-policies#integrate-notification-system-during-the-policy-configuration).

:::

9. Click **Next**.

<img src="/img/aqua-hub/04_s00_Aqua_hub_response_policies.png" alt="04 s00 Aqua hub response policies.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

10. In the **Set Action** section, click **Next**.
11. After you complete configuring the policy, click **Save** at the top right side of the page.

<img src="/img/aqua-hub/05_s00_Aqua_hub_response_policies.png" alt="05 s00 Aqua hub response policies.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

## Trigger types

In the **Select a Trigger** section, you can select one of the predefined triggers or "Customize Trigger". You can customize a trigger, when you do not find the required trigger from the predefined list.

To customize a trigger:

1. Select either **Scan result** or **Incident event** as required to define your trigger.
2. Select attribute name, operation, and value to set up a condition for the trigger.
3. Click **+ Add Condition** to add multiple conditions for the trigger. When you add multiple conditions, AND operation will be applied on them.

<img src="/img/aqua-hub/06_s00_Aqua_hub_response_policies_trigger.png" alt="06 s00 Aqua hub response policies trigger.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

If you use Aqua SaaS Enterprise, you can add [Aqua Hub Insights](./SaaS-aqua-hub-insights.md) as the predefined and custom triggers.

## Integrate notification system during the policy configuration

In the **Set Action** section, you can integrate any notification system and its instance without navigating to the **Integrations > Notifications** page, while configuring policy.

To integrate a notification system from the **Set Action** section:

1. Click **Connect Now** on any notification system which is not already integrated. System integration details dialog appears.

<img src="/img/aqua-hub/07_s00_Aqua_hub_response_policies_integrate.png" alt="07 s00 Aqua hub response policies integrate.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

2. Enter the required details and click **Connect**. For more information, refer to [Notifications](./SaaS-aqua-hub-response-policies.md).

<img src="/img/aqua-hub/08_s00_Aqua_hub_response_policies_integrate.png" alt="08 s00 Aqua hub response policies integrate.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

# Sample response

When any non-compliant image is detected, event notification in a Teams group appears as shown below. If you select any other notification system, similar notification appears.

<img src="/img/aqua-hub/09_s00_Aqua_hub_response_policies_sample_response.png" alt="09 s00 Aqua hub response policies sample response.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />
