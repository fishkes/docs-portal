---
title: "Incidents"
slug: "incidents"
position: 2
---

## Overview

While developing a signature for each [Behavioral Detection](./SaaS-behavioral-detection.md) finding, Aqua Security Research assigns a severity to each. The severity reflects the level of confidence that the observed behavior is malicious, and not simply part of benign application flow: 5 (critical), 4 (high), 3 (medium), 2 (low), or 1 (negligible).

The Incidents page of the UI displays all behavioral detection events of severity critical and high. You may want to focus your attention on the events of the highest severity first.

## Behavioral Detection logs

To view the Behavioral Detection logs in the Incidents page, navigate to **Incidents** in the left-hand menu. You will see the list of incidents of critical and high severity.

To filter results by time interval, select an option from the Time Interval drop-down menu. You can also select Custom to define the time interval of your choice.

<img src="/img/8ccdab0-02_2022.4_Incidents_List_time_interval.png" alt="02 2022.4 Incidents List time interval.png" width="708px" height="408px" />

## Incident details

If you click any incident, you can see the description of the incident, events summary, and timeline of the event as explained below. You can also see the incident details in the full screen, by clicking **View Incident**.

- **Incident Description:** has information that could help you choose an appropriate remediation action. You can create your own rules in external systems by looking at the severity of the events.
- **Event Summary:** contains evidence for remediating the event, and displays many details categorized as event data and scope. Attacker behaviors are mapped to Mitre Cyber Analytics Repository, which has methods for describing behavioral intrusion detection analytics. This repository is publicly available to the information security community. Click **View raw data** to see event summary in another window (in JSON format). This raw data shows what is collected around the event by the enforcers and this is used as part of the investigation to understand the root cause of the incident.

<img src="/img/0949d41-11_2022.4_Incident_Details.png" alt="11 2022.4 Incident Details.png" width="779px" height="433px" />

- **Timeline:** includes up to 30 events that happened before the incident, within the same source of the inspected incident. In the full-screen view of the incident details, in the Timeline tab, you can filter events in a timeline, by searching the event or filtering with event type or time interval.

<img src="/img/eda8be8-12_2022.4_Incidents_Timeline.png" alt="12 2022.4 Incidents Timeline.png" width="1484px" height="585px" />

When Aqua detects malicious activity from the applications, it creates an alert and logs a “Detect” action in the Audit and Incidents reports.

## Automatic suppression of incidents

If the same incidents are detected repeatedly, duplicate incidents will be suppressed for 12 hours. If the duplicate incidents are detected even after 12 hours from its detection for the first time, they will be displayed again.

## Manual suppression of incidents

You can suppress any incident manually for exception management. You may suppress an incident for any reason, e.g. to acknowledge Aqua that this incident is noted, and steps will be taken to resolve the respective issues in the workloads or to mark the incident as not significant to cause security threat to the workloads. When an incident is suppressed, Aqua will prevent reporting the same incident for a few days, as configured by you. After an incident is suppressed, you may work with different teams such as developer teams to resolve security issues in the workloads.

To suppress an incident manually:

1. Navigate to any Incident detailed view > **Timeline** tab.
2. Click **Create Suppression Rule** at the bottom right side of the page. Create Suppression Rule dialog appears.

<img src="/img/d5f1901-41_2022.4_Create_Suppression_Rule_button.png" alt="41 2022.4 Create Suppression Rule button.png" width="1684px" height="934px" />

3. For Event Selection, select either **current incident** or **All Events**, as required.
4. For Resource Selection, select either a **Custom** resource or **All Resources**, as required. The custom resource can be a specific image, container, VM, Enforcer group, or a Kubernetes cluster. By selecting one of these options, you can suppress incidents detected in all or the selected custom resource(s).
5. When you select the option **Custom** in the previous step, select the resource type such as an image or container and a value for the selected resource.
6. Click **+ Add Resource** to add the selected custom resource to the rule. You can add multiple custom resources, as required.
7. Enter values for **Suppression Rule Name** and **Reason**.
8. Enable the **Suppression Rule Enabled** toggle if you want to suppress the incident, as configured in this dialog.
9. (_Optional_) Select the check box to delete this rule after specific days and assign the number of days to delete the rule. If you do not select this check box, this suppression rule will never be deleted.
10. Click **Create**.

When you suppress incidents manually, all the respective suppression rules are added to the Incidents page > **Suppression Rules** tab.

<img src="/img/21a65f0-42_2022.4_Create_Suppression_Rule_dialog.png" alt="42 2022.4 Create Suppression Rule dialog.png" width="570px" height="640px" />

## Suppression Rules tab

You can see all the suppression rules which were added to suppress the specific incidents in the Incidents page > **Suppression Rules** tab. In this page, you can either edit or delete any suppression rule. While editing any suppression rule, you can edit values in all the fields that were added while creating the rule.

<img src="/img/81b51a0-51_2022.4_edit__delete_suppression_rule.png" alt="51 2022.4 edit & delete suppression rule.png" width="1662px" height="375px" />

## Integration of incident notifications

When incidents are created in Aqua, you can receive notifications for these events in external applications such as Slack, Teams, and so on.

<!-- (PagerDuty temporarily removed) -->

To integrate with an external application for notifications, refer to [Notifications](../integrations/integrations-notifications).

## Behavioral Detection logs on the Audit screen

The Audit screen displays a complete list of events detected by Behavioral Detection. For more information, refer to [View Audit Events](../audit/view-audit-events#section-behavioral-detection-logs-on-the-audit-screen).
