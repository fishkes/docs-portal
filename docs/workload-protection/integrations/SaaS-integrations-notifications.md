---
title: "Notifications"
slug: "integrations-notifications"
position: 13
---

# Overview

This topic explains the process to integrate external notification systems such as Slack, Teams, Webhook, Email, and so on, to send event notifications which may require an action. The event can be a critical vulnerability found on an image, malicious runtime activity on their deployments, and so on. Detection of these events can be configured in a <a href="/">Response Policy (TODO: "SaaS-response-policies")</a>, based on which notifications will be sent to the integrated systems.

# Integrate a notification system

You can configure the supported notification system by entering required details. These details are different for each system. There can be multiple instances in a specific system such as different Slack channels, Teams groups, and so on. You can create different integrations for multiple instances in a system, as required.

To integrate a notification system:

1. Navigate to **Administration > Integrations > Notifications**.
2. Click **+ Add New** on the system that you want to integrate. Integration details page appears.

<img src="/img/bfc532c-01_Admin_Notifications_page.png" alt="01 Admin Notifications page.png" width="1497px" height="606px" />

3. Enter the required details, as determined by the integration type. Refer to the table below; entering all details is mandatory, unless noted as optional.

<table><tr><th>Integration type</th><th>Details</th></tr><tr>
<td><p>Email</p></td>

<td><ul>
<li>Name</li>
<li>User</li>
<li>Password</li>
<li>Host</li>
<li>Port</li>
<li>Sender</li>
<li>Recipients</li>
</ul></td>
</tr><tr>
<td><p>Jira</p></td>

<td><ul>
<li>Name</li>
<li>URL</li>
<li>Project key</li>
</ul>
<p><br/></p>
<p>The parameters depend on the login method selected:</p>
<p><br/></p>
<p><strong>Credentials</strong>
User; Password</p>
<p><br/></p>
<p><strong>Token</strong>
Token</p></td>
</tr><tr>
<td><p>ServiceNow</p></td>

<td><ul>
<li>Name</li>
<li>User</li>
<li>Password</li>
<li>Instance Name</li>
<li>Table <em>(optional)</em> </li>
</ul></td>
</tr><tr>
<td><p>Slack</p></td>

<td><ul>
<li>Name</li>
<li>URL</li>
</ul></td>
</tr><tr>
<td><p>Splunk</p></td>

<td><ul>
<li>Name</li>
<li>URL</li>
<li>Token</li>
</ul></td>
</tr><tr>
<td><p>Teams</p></td>

<td><ul>
<li>Name</li>
<li>URL</li>
</ul></td>
</tr><tr>
<td><p>Webhook</p></td>

<td><ul>
<li>Name</li>
<li>URL</li>
</ul></td>
</tr></table>

4. Click **Test Connection** to check validity of the connection. It is recommended that you test the connection between Aqua and your notification system. Aqua Server will attempt to connect to notification system and validate the connection.
5. Click **Save** to complete the integration. Slack integration page is shown below for reference.

<img src="/img/671f0d5-02_Integration_details.png" alt="02 Integration details.png" width="1490px" height="439px" />
