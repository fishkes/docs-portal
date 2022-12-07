---
title: "Behavioral Detection"
slug: "behavioral-detection"
position: 1
---

## Overview

Behavioral Detection is run-time monitoring of an environment for any signs of malicious behaviors that could indicate an attack on the environment. It offers better and continuous protection against unusual events or threats. It is a part of the CNDR solution that quickly identifies, and issues alerts related to. any activities deviating from the normal range.

The [Aqua CyberCenter](../aqua-cybercenter/SaaS-cybercenter-description.md) contains a sequence of actions, taken by applications and users, which Aqua classifies as abnormal. If any application or user activity matches any [behavior stream signature](../behavioral-detection-and-incidents/SaaS-signature-list-for-behavioral-detection.md), Aqua detects that behavior and warns the users of incidents by reporting them on the [Incidents](./SaaS-incidents.md) page. Examples for Behavioral Detection include identifying and alerting events such as deletion of system logs, DDoS tool usage, kernel module loading, and so on.

Behavioral Detection is enabled in both the Aqua Enforcer and VM Enforcer group settings, and runs in Audit mode.

## Functioning of Behavioral Detection

Behavioral Detection is a robust global setting in Aqua Enforcer and VM Enforcer groups for enabling runtime protection for containers and virtual machines. The behavioral detection component collects data on the actions of users and applications running in your containers and virtual machines. All events collected from the user environment are continuously tested with the predefined behavior stream signatures that are classified as dangerous. When suspicious behavioral patterns that match a behavior stream signature are detected, Aqua alerts the users to the presence of potential threats within the environment. Aqua updates the behavior stream signature list continually.

When Aqua detects malicious activity from the applications, an alert is created, and it logs an entry as the Detect action in Audit and Incidents reports. Refer to the Behavioral Detection Logs section below for a detailed explanation on viewing results.

## Enable Behavioral Detection in Aqua Enforcer group settings

By default, the Behavioral Detection setting is disabled. Once enabled, it runs in Audit mode only.

To enable Behavioral Detection in the Enforcer group, perform the following actions:

1. In the left-hand menu, navigate to Administration > **Enforcers**.
2. Locate the desired Aqua Enforcer or VM Enforcer group and open the menu by clicking the three vertical dots to the right of the Enforcer group name.

<img src="/img/fa8169b-01_2022.4_Behav_Det_Enforcer_Group_Settings_a.png" alt="01 2022.4 Behav Det Enforcer Group Settings a.png" width="1890px" height="669px" />

**Note:**  Clicking the > to the left of a group name will show all Enforcers in each group.

3. Click **Edit Group**.
4. At the bottom of the page, in Advanced Settings, click **Show Settings**.

<img src="/img/7ae3048-02_2022.4_Behav_Det_Enforcer_Group_Settings_b.png" alt="02 2022.4 Behav Det Enforcer Group Settings b.png" width="828px" height="909px" />

5. Turn on the Enabled toggle for Behavioral Detection in Container Protection and/or Host Protection as required for Aqua to use behavioral stream signatures to detect suspicious activity in your containers and/or VMs.

#### Advanced settings for Container Protection

<img src="/img/9497700-03_2022.4_Behav_Det_Enforcer_Group_Settings_container_protection.png" alt="03 2022.4 Behav Det Enforcer Group Settings container protection.png" width="839px" height="379px" />

#### Advanced settings for Host Protection

<img src="/img/3a656a7-04_2022.4_Behav_Det_Enforcer_Group_Settings_host_protection.png" alt="04 2022.4 Behav Det Enforcer Group Settings host protection.png" width="678px" height="293px" />

6. Click **Set**.
7. In the Enforcer group page, click **Save**.
8. In the confirmation dialog, click **Yes**.

In case you want to disable the Behavioral Detection setting for a particular Enforcer group, perform the steps above and disable the toggle instead of enabling it.

:::danger

Disabling Behavioral Detection is not recommended unless necessary, as doing so would reduce the effectiveness of the overall security solution.

:::

## Enforcer health

To view the status of an Aqua Enforcer or VM Enforcer enabled with Behavioral Detection:

1. Click the Name of the desired Aqua Enforcer or VM Enforcer to expand it.

<img src="/img/4f7149d-11_2022.4_Behav_Det_Enforcer_health_a.png" alt="11 2022.4 Behav Det Enforcer health a.png" width="1654px" height="246px" />

2. Click **Logical Name**.
3. Select the **Health** tab. Check if "eBPF Behavioral Engine Supported" and "eBPF Container Behavioral Detection Enabled" are set to true. If so, perform the steps in [Enable Behavioral Detection in Aqua Enforcer group settings](./behavioral-detection#enable-behavioral-detection-in-aqua-enforcer-group-settings) above to enable Behavioral Detection.

<img src="/img/abdd1f9-12_2022.4_Behav_Det_Enforcer_health_b.png" alt="12 2022.4 Behav Det Enforcer health b.png" width="588px" height="39px" style={{border: "1px solid #102e36"}} />

## Behavioral Detection logs

Any malicious activity detected by Behavioral Detection is logged as an entry in both Audit and Incidents reports. The Incidents screen displays both the behavioral and runtime detections, as well as the results of specific host scanning events (advanced malware protection events). There is also an Audit screen entry for all these events.

Major differences between Audit and Incident reports:

- Audit reports include Behavioral Detection logs of all severities; the Incidents page lists only incidents of severity 3 (high) and 4 (critical).
- Audit reports include runtime control events of all severities; the Incidents page lists only events of severity 2 (medium), 3 (high), and 4 (critical).

To learn more about Behavioral Detection events in the Audit screen, refer to [Behavioral Detection logs on the Audit screen](./incidents#section-behavioral-detection-logs-on-the-audit-screen).
