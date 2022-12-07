---
title: "Container Runtime Policies"
slug: "container-runtime-policies"
position: 2
hide: true
---

:::caution

Container Runtime Policies apply to containers based on either container images or Tanzu applications.

:::

# Overview

You can configure one or more **Container Runtime Policies** to audit and restrict the runtime activities of containers, according to the security requirements of your organization. A restriction can mean either or both of the following:

- Preventing a container from running. For example, you can configure a Container Runtime Policy to block the running of a container based on an image that has been found to be non-compliant during <a href="#">Image Assurance (TODO: < ref "SaaS-image-assurance-overview" >)</a> (including Tanzu Application Assurance).
- Preventing a container from executing certain runtime activities. For example, a Container Runtime Policy could block running a blocked executable in a container, or prevent particular volumes from being mounted by a container.

In addition, you can configure Container Runtime Policies to provide real-time protection of containers against malware. For more information, refer to [Real-time Malware Protection](./container-runtime-policies/SaaS-container-runtime-policy-components#section-real-time-malware-protection).

Different Enforcers can be used to enforce Container Runtime Policies:

- In Kubernetes clusters, an <a href="#">Aqua KubeEnforcer (TODO: < ref "SaaS-kubeenforcer" >)</a> can be used to prevent non-compliant and unregistered images, as well as non-compliant workloads, from running as a container.
- When a container engine (e.g., Docker) is being used, an <a href="#">Aqua Enforcer (TODO: < ref "SaaS-aqua-enforcer" >)</a> must be deployed on the host where the container(s) are running.
- When a managed container service (CaaS) (e.g., AWS Fargate) is being used, an <a href="#">Aqua MicroEnforcer (TODO: < ref "SaaS-microenforcer" >)</a> must generally be used.

# Effects of Container Runtime Policy enforcement

When the container orchestrator or cloud platform attempts to start a container, Aqua searches for all Container Runtime Policies whose scope includes the container. There may be zero or more such policies.

:::caution

The scope is a combination of one or more RBAC application scopes and the general policy scope in the policy. For further information, see <a href="#">Policy and Aqua service scopes (TODO: < ref "SaaS-AM-effects-of-rbac#section-policy-and-aqua-service-scopes" >)</a>.

:::

If any of these policies contains a control (security restriction) that prevents running the container, Aqua will cause deployment of the container to be blocked. Otherwise, the container is allowed to run and, during the runtime of the container, Aqua enforces the applicable Container Runtime Policies.

When a container attempts to perform an activity that is prohibited by any such policy, and the relevant policy is in **Enforce** mode (not in Audit mode), Aqua will prevent the specific activity from occurring. However, Aqua will **not** terminate the container, or stop it from running.

If the relevant policy is in either Enforce or Audit mode, Aqua will log an <a href="#">audit event (TODO: < ref "SaaS-view-audit-events" >)</a> with the "Runtime" event type.

# Policy changes during container runtime

You can change a Container Runtime Policy at any time: its description, scope, enabled/disabled status, Enforcement Mode, and/or its controls. When you do, Aqua applies the new policy definitions immediately to all running containers within the scope of the policy.

#### Restriction: "Requires container restart"

Aqua cannot enforce changes to the following controls on containers that are already running:

- Capabilities Block
- Limit New Privileges
- Volumes Blocked

In the Aqua UI, these controls are labeled "Requires container restart"; for example:

<img src="/img/policy/fe88808-01_6.2_Example_-_requires_container_restart.png" alt="01 6.2 Example - requires container restart.png" width="655px" height="243px" />

# Predefined Container Runtime Policies

Aqua includes several predefined Container Runtime Policies. They are supported by the Aqua Enforcer, MicroEnforcer, and Pod Enforcer. They are not supported by the KubeEnforcer; see <a href="#">KubeEnforcer design restrictions (TODO: < ref "SaaS-kubeenforcer#section-kubeenforcer-design-restrictions" >)</a>.

You cannot delete these predefined policies. However, as with any user-defined Container Runtime Policy, you can:

- Disable them
- Change their Enforcement Mode
- Reconfigure their controls

The predefined Container Runtime Policies are also subject to the <a href="#">Global Bypass Scope (TODO: < ref "SaaS-bypass-scope" >)</a>, which defines the set of containers that will be not be affected.

The predefined policies can be seen on the **Runtime Policies** page of the Aqua UI after Aqua is first deployed. In the picture below, the list has been sorted by clicking on **Workload Type** to bring the Container Runtime Policies to the top.

<img src="/img/policy/72b55c9-02_6.2_Predefined_Runtime_Policies_Container_on_top.png" alt="02 6.2 Predefined Runtime Policies (Container on top).png" width="1704px" height="905px" />

## The Default runtime policy

The Default runtime policy does not have a scope of its own; it is applied to all containers. In this sense, it is a global policy.

However, the Default runtime policy can include the optional Bypass Scope control, which defines the containers to which this policy will not apply. See [Controls](./container-runtime-policies/SaaS-container-runtime-policy-components#section-controls).

## Block Non-compliant Images

This basic policy blocks execution of containers based on non-compliant or blocked images.

## Block Unregistered Images

This basic policy blocks execution of containers based on unregistered images.

## Compliance-related policies

Aqua includes the following, which cover relevant parts of several data security standards:

- [CIS](https://www.cisecurity.org/): Center for Internet Security
- [HIPAA](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html): Health Information Privacy (U.S. Department of Health & Human Services)
- [NIST](https://www.nist.gov/cyberframework): US National Institute of Standards and Technology
- [PCI DSS](https://www.pcisecuritystandards.org/pci_security/standards_overview): PCI Data Security Standard

# vShield Container Runtime Policies

The **Show Auto Generated Policies** toggle at the top of the Runtime Policies screen needs to be on to display vShield Container Runtime Policies. Refer to <a href="#">Apply and Manage Vulnerability Shields (vShields) (TODO: < ref "SaaS-apply-and-manage-vulnerability-shields-vshields" >)</a>.
