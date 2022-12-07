---
title: "2022 October SaaS Update Release"
slug: "2022-october-SaaS-update-release"
draft: false
position: 2
---

The October 2022 SaaS Update Release includes the following changes with respect to the previous SaaS product release. Unless otherwise stated, all updates were made available on October 23.

# Aqua Platform

## Notifications Integrations page has been moved to the Aqua Hub module

The Integrations page for the external notification systems required for the configuration of Response Policies has been moved from the Workload Protection module > Administration > Integrations > **Notifications** to the Aqua Hub module > Integrations > **Notifications**.

## Response Policies page has been moved to the Aqua Hub module

The [Response Policies](../../aqua-hub/SaaS-aqua-hub-response-policies.md) page has been moved from the Workload Protection module to the Aqua Hub module.

## Add Aqua Hub Insights in the Response Policy triggers

When creating a [Response Policy](../../aqua-hub/SaaS-aqua-hub-response-policies.md), it is possible to add [Aqua Hub Insights](../../aqua-hub/SaaS-aqua-hub-insights.md) as the predefined and custom triggers.

## Enhancements to Jira integration for the configuration of Response Policies

In the Aqua Hub module > Integrations > [Jira Integration](https://docs.aquasec.com/v2022.4/platform/integrations/integrations-notifications/#integrate-a-notification-system), all the optional Jira fields are organized in the drop-down menu. From this menu, you can add any custom field and its value which is supported in your Jira project.

## Enhancements to Set Action in the Response Policy configuration

In the configuration of a **[Response Policy](../../aqua-hub/SaaS-aqua-hub-response-policies.md) > Select Action**:

- A drop-down menu **Template** has been added to select the format in which you want to receive notifications. From the Template menu: Default, raw JSON, raw HTML templates; one or multiple templates are supported depending on the integrated notification system selected.
- A new button **Simulate** has been added to receive test notifications in the selected integration instances of a notification system.

# Supply Chain Security

## Introducing Aqua's **Supply Chain Security** module

The Aqua SaaS Platform offers a new module, Supply Chain Security, which protects the code development process through the commit, build, and production deployment against attacks and the unintentional introduction of security risks such as vulnerabilities, sensitive data, and misconfigurations. This module ensures security of the source code management tools and CI/CD pipelines. Introducing this module further strengthens Aqua's industry-leading **Cloud Native Application Protection Platform (CNAPP)** offering, which offers end-to-end security coverage of your applications. Learn more about this from our [official announcement](https://www.techtarget.com/searchitoperations/news/252525175/Aqua-adds-software-supply-chain-security-to-DevSecOps-mix).

To use Supply Chain Security, you first integrate your source code management tools and CI/CD pipelines. Aqua then detects security issues in code repositories, CI/CD pipelines, dependencies, release artifacts, and tool chains. You can then remediate these security issues. For detailed information on Supply Chain Security, refer to our [product documentation](https://support.aquasec.com/support/solutions/16000061639).

# Workload Protection and Image Scanning

## Deprecation plan for Classic Scanner

Aqua Security will deprecate the Classic (Legacy) Scanner on December 31, 2023. Beginning January 1, 2024, Aqua's next generation Trivy Premium Scanner will completely replace the Classic Scanner. For more information on the deprecation plan of the Classic Scanner, refer to [Aqua Trivy Premium Scanner](https://support.aquasec.com/support/solutions/articles/16000127587).

## Enhancements to Aqua Trivy Premium Scanner

- When [Trivy Premium Scanner](https://support.aquasec.com/support/solutions/articles/16000127587) is enabled, the following new scanning settings are available:

  - Suggest fixes based on a newer OS version
  - Fast Scanning

  These options are already available when "Classic Scanner" is selected. For more information on these settings, refer to [Configure Scan Options](https://docs.aquasec.com/v2022.4/platform/image-assurance/image-assurance-configuration/configure-scan-options/).

- Aqua Trivy Premium scanner supports scanning Windows images

## Integrate Azure Container Registry with the Service Principal connection type

It is possible to [integrate with Azure Container Registry](https://support.aquasec.com/support/solutions/articles/16000120188) using the "Service Principal" connection type (as well as Credentials and Token).

## Legacy Scanner is renamed Classic Scanner

In the Settings > [**Scanning**](https://support.aquasec.com/support/solutions/articles/16000120202) page, Legacy Scanner has been renamed to **Classic Scanner**.

## Enhancement of programming languages supported by image scanning

Aqua has improved searching JAR files in the Java programming language components in your images by using the SHA ID of JAR files, to detect security issues in all JAR files. For more information, refer to [Image Scanning](https://support.aquasec.com/support/solutions/articles/16000120343).

## Enhancements to the Vulnerabilities tab in the Image detailed view

In the Images screen > any image detailed view > **Vulnerabilities** tab:

- The Application Scope column has been added to each vulnerability record to show application scopes which are applied to the image in which the vulnerability is detected
- Export: A new button has been added to export the vulnerabilities detected in the specific image to a csv file

## Enhancement to the Approved Base Image control in Image Assurance Policies

In the [Image Assurance Policy](https://support.aquasec.com/support/solutions/articles/16000120197) > **Approved Base Image** control, you can add any base image of the current image (on which Policy will apply) in the hierarchy up to ten levels (not only immediate base image) to determine the current image as compliant.

## New Aqua Security Scanner plugin version for Bamboo CI/CD

The new version **2.0.24** for the Aqua Security Scanner plugin has been released in [Bamboo CI/CD](https://support.aquasec.com/support/solutions/articles/16000121479). It includes the following enhancements:

- In the Aqua Scanner Plugin Global Configuration > Aqua Scanner Addition Data section: A new checkbox, **Enforce Aqua image assurance policy and override local settings for build failure**, is added to allow administrators to control build failures and enforce Aqua’s Image Assurance Policy failures at a global level. This checkbox is not selected by default.
- In the Aqua Scanner Task Configuration > Aqua Scanner Additional Options section: The checkbox **Never fail builds: Return 0 exit code even if image fails assurance policy** has been renamed to **Never fail builds: Return 0 exit code unless overridden in the plugin’s Aqua Global configuration**. This checkbox is disabled when you select the **Enforce Aqua image assurance policy and override local settings for build failure** checkbox in the global configuration.

# Workload Protection

## Enhancements to Aqua Trivy Premium Scanner

The Aqua Trivy Premium Scanner supports scanning the following artifacts:

- [Serverless functions](https://docs.aquasec.com/v2022.4/platform/function-serverless-assurance/function-assurance-overview/) after integrating with the respective cloud accounts (Previously, Aqua used the Classic Scanner for function scanning even when the Trivy Premium scanner was enabled)
- [VMware Tanzu applications](https://docs.aquasec.com/v2022.4/platform/image-assurance/image-assurance-overview/image-scanning/#vmware-tanzu-applications) after integrating with VMware Tanzu blobstores

## Manual suppression of Behavioral Detection Incidents

You can suppress behavioral detection incidents by configuring rules for exception management of the incidents. For more information, refer to [Incidents](https://docs.aquasec.com/v2022.4/platform/behavioral-detection-and-incidents/incidents/).

## All Vulnerabilities page supports filtering vulnerabilities by multiple namespaces

In the Security Reports > Vulnerabilities page > [All Vulnerabilities](https://docs.aquasec.com/v2022.4/platform/image-assurance/vulnerabilities-screen-operations/view-the-list-of-vulnerabilities/#filter-the-list) mode, the Namespace filter supports multi-selection; this allows viewing vulnerabilities from multiple namespaces simultaneously.

## Compliance status of unscanned VMs is shown as "Not Scanned"

In the Workloads > [VMs](https://docs.aquasec.com/v2022.4/platform/workloads/workloads-vms/) page, the compliance status of VMs which have not been scanned by Aqua is shown as "Not Scanned".

## Changes to the severities of selected Kubernetes Assurance Policy controls

In [Kubernetes Assurance Policies](https://docs.aquasec.com/v2022.4/platform/kubernetes-assurance/kubernetes-assurance-policies/):

- From Medium to High
  - Specific capabilities added
- From Low to Medium
  - Image tag ":latest" used
- From Medium to Low:
  - Runtime/Default AppArmor profile not set
  - Can elevate its own privileges
  - Runs with GID <= 10000
  - Runs with UID <= 10000

## Enhancements to Aqua KubeEnforcer

- Starboard version has been upgraded to 0.15.10 to evaluate workload compliance results with respect to [Kubernetes Assurance Policies](https://docs.aquasec.com/v2022.4/platform/kubernetes-assurance/kubernetes-assurance-policies/) without triggering the "configuration audit" scan jobs
- Version **v1** of the Kubernetes admission control webhook is supported by [Aqua KubeEnforcer](https://docs.aquasec.com/v2022.4/platform/aqua-enforcement/kubeenforcer/)
- [KubeEnforcer](https://docs.aquasec.com/v2022.4/platform/aqua-enforcement/kubeenforcer/) supports protecting ephemeral containers using the Kubernetes admission controller

## Enhancement to Kubernetes Assurance Policy control Access to host process

In [Kubernetes Assurance Policy](https://docs.aquasec.com/v2022.4/platform/kubernetes-assurance/kubernetes-assurance-policies/) control "Access to host process", detection of Windows host processes has been added.

## UI Enhancements to the Kubernetes Resources page

The following enhancements have been made to the **Workloads > Kubernetes Resources page > Failed Checks** tab:

- A new section has been added at the top of the page to display the summary of failed checks by their severity: Critical, High, Medium, or Low.
- Failed checks are displayed for Kubernetes workload-level resources. A new checkbox **Show checks for cluster level resources has been added**; when this is selected, failed checks for cluster-level resources are displayed in the UI.
