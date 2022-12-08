---
title: "2022 November SaaS Update Release"
slug: "2022-november-SaaS-update-release"
position: 1
---

The November 2022 SaaS Update Release includes the following changes with respect to the previous SaaS product release. Unless otherwise stated, all updates were made available on November 20.

# Aqua Platform

## Enhancements to Jira integration for Response Policies

- When a [Response Policy](../../aqua-hub/SaaS-aqua-hub-response-policies.md) is configured with trigger type "Aqua Hub Insights" and set action to Jira integration, the specific resources in [Aqua Hub Insights](../../aqua-hub/SaaS-aqua-hub-insights.md) will display the matching Jira tickets.
- You can now define ticket status in the Jira integration to consider the associated ticket as closed and unlink from the affected resources in Aqua Hub Insights.

# Supply Chain Security

## Dependencies tab in the Code Repository detailed view

In each code repository detailed view, a new tab [Dependencies](https://support.aquasec.com/support/solutions/articles/16000136561) shows details of the dependencies used in building the application code in the code repository.

## Aqua now supports displaying misconfigurations detected in the build pipelines

- A new screen "[Build Pipelines](https://support.aquasec.com/support/solutions/articles/16000144348)" displays all the pipelines connected to the code repositories and misconfigurations detected in these pipelines.
- In the [code repository detailed view](https://support.aquasec.com/support/solutions/articles/16000136561), a new tab "Pipelines" displays all the misconfigurations detected in the pipelines connected to the specific code repository.

## Enhancements to the Integrations page

- The [Integrations](https://support.aquasec.com/support/solutions/articles/16000136300) page now displays all the connections established with the source code management tools and CI integrations.
- Aqua now supports connecting to the [CircleCI platform](https://support.aquasec.com/support/solutions/articles/16000136300) to discover and scan code repositories hosted on it.

# Workload Protection

## Express Runtime Protection Mode: kernel rootkit detection

When running in Express Runtime Protection Mode, the VM Workload Protection Policy can be configured to detect kernel rootkits on hosts and in workloads.

## Behavioral Detection: kernel rootkit detection

[Behavioral Detection](../../workload-protection/behavioral-detection-and-incidents/SaaS-behavioral-detection.md) provides run-time monitoring of an environment for any signs of malicious behaviors that could indicate an attack on the environment. This feature now includes kernel rootkit detection.

## Effects of Application Scope on Behavioral Detection Incidents

In the [Incidents](../../workload-protection/behavioral-detection-and-incidents/SaaS-incidents.md) page, the events displayed are now filtered by the user's [application scope(s)](https://support.aquasec.com/support/solutions/articles/16000122395); only events relevant to the scope(s) are displayed.

## VMware Tanzu Application Assurance Policies: Vulnerability Exploitability control

VMware Tanzu Application Assurance Policies support the [Vulnerability Exploitability](../../workload-protection/image-assurance/image-assurance-policies-basic-info#controls) control. If included in a policy, this control will fail the VMware Tanzu application if any exploitable vulnerabilities are detected during scanning.
