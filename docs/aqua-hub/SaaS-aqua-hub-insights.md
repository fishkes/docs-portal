---
title: "Aqua Hub Insights"
slug: "aqua-hub-insights"
draft: false
date: "2022-11-07T08:47:21.372Z"
weight: 3
lastmod: "2022-08-15T13:28:10.666Z"
---

# Overview

Aqua Insights page is an entity that displays risks detected by different Aqua products to help security teams improve their security posture from one central location. It analyzes a wide range of findings and derives meaningful insights to detect potential threats and connections between various scanning results. It helps you interpret and analyze the security posture of your environment, and mitigate negative effects caused by these threats.

Aqua Insights are derived from risks on the attack surface based on cloud, Kubernetes infrastructure and workloads such as Virtual Machines (VM), cloud workloads, and serverless functions.

Aqua platform has different scanning capabilities and security findings. Aqua is designed to create insights on the critical and high severity risks. Hence, some security findings in Aqua are not considered for deriving insights. For example: medium severity vulnerabilities are not used to derive insights.

# Insights Screen

The **Insights** screen enables you to see insights in the decreasing order of their [priorities](./SaaS-aqua-hub-insights#insights-priority) and act on them. It lists the prioritized insights based on various categories, along with the affected resources.

To see the Insights screen, navigate to mega menu, select **Aqua Hub** and from the left pane, select **Insights**.

<img src="/img/aqua-hub/01_s00_Aqua_hub_insights.png" alt="01 s00 Aqua hub insights.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

## Insights categories

For each insight is classified into one of the following categories:

- **Compound risk:** running workloads with a combination of security findings that can create a significant impact when found together. Compound risk gives a detailed story about the relationship between various components.

  An insight can be classified as compound risk when a running workload has a remote exploit vulnerability and uses a role that allows users to get access to a database. If the running workload has this combination of security findings, then an attacker can get inside the workload and access the database which may cause a significant impact on the environment.

- **Malware:** running workloads with malware detected in the scanning phase by the Aqua Build protection service
- **Vulnerabilities:** running workloads with critical vulnerabilities such as Network attack vector or exploit available
- **Sensitive data:** resources with sensitive data detected in the scanning phase by the Aqua Build protection service

## Insights priority

Insights are displayed in the decreasing order of their priorities, from P0 to P2. Each insight has a unique predefined importance rank as defined by Aqua, which determines a matching priority for each insight from P0 to P2.

## Affected resources

Each insight includes resources discovered by Aqua that have one or more security findings of a particular type, such as malware detected in the running workload. The service name for each resource is shown below the resource name. Affected resources can be one of the following:

- Serverless functions
- Kubernetes workloads
- VMs
- AWS ec2 instances

## Search and filter insights

You can search insights by entering one of the following details in the search box:

- Resource name or ARN (Amazon Resource Names)
- Insight description or ID
- Image name

You can filter insights by selecting the following filters:

- General Filters

  - Resource found date

- Cloud Filters

  - Cloud Provider
  - Cloud Account
  - Region
  - Service

- Kubernetes Filters

  - Cluster
  - Namespace

<img src="/img/aqua-hub/02_s00_Aqua_hub_insights.png" alt="02 s00 Aqua hub insights.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

# Detailed Insights screen

On selecting a particular affected resource for an insight, you will see the detailed insights screen that has the following details and actions:

1. **Evidence:** the actual security finding that triggered insight on this resource
2. **Recommendations:** on how to mitigate the risks
3. **Export:** On clicking the **Export** button at the top right side of the page, the affected resource details are exported as an HTML file
4. **Suppress:** On clicking the **Suppress** button at the top right side of the page, you can tag the affected resource as suppressed for exception management. When you click this button, the **New Suppression Rule** dialog is displayed to create a snooze rule for suppressing the resource for a specific period.

<img src="/img/aqua-hub/03_s00_Aqua_hub_insights_detailed.png" alt="03 s00 Aqua hub insights detailed.png" width="1706px" height="932px" style={{border: "1px solid #dedfe3"}} />

# FAQs on Insights

**Why can't I see insights?**

Ensure that you meet the following conditions to see insights:

- Connect cloud accounts from the **[Aqua Hub](./SaaS-aqua-hub-integrations.md)** page to detect vulnerable artifacts such as VMs, serverless functions, and container img/aqua-hub or discover vulnerable workloads by deploying the required [enforcers](https://docs.aquasec.com/docs/enforcers-overview)
- Connect to both the Workload Protection and CSPM modules to see insights of the Compound Risk category
- After resources are discovered and scanned in the Workload Protection module, it takes a maximum of 15 minutes for insights to appear
  If you meet all the above conditions but still cannot see insights, please contact Aqua support.

**How can I suppress a specific vulnerability?**

Use the "Acknowledge" action in the img/aqua-hub scanning feature on a specific vulnerability, from the **img/aqua-hub > General > Image detailed view > Vulnerabilities** tab or **Security Reports > Vulnerabilities** page. This action will make the insights disappear from the **Aqua Hub > Insights** page.

**How can I create custom insights?**

Aqua does not support custom insights currently. If you have a requirement for any custom insights which are not supported by Aqua, please contact Aqua support and submit an enhancement request.

**Do insights include runtime events?**

Purpose of the Insights feature to improve the security posture to prevent the next runtime incident. Runtime events are not tracked by Insights.

**Do insights include CSPM findings?**

Most insights of the compound risk category are derived from the CSPM IAM misconfigurations and Workload Protection findings. Other CSPM findings can be found under the Aqua CSPM service.
