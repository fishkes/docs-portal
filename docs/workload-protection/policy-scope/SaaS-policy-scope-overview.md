---
title: "Policy Scope Overview"
slug: "policy-scope-overview"
position: 1
---

# Overview

For this discussion, the term "policy" refers to both security policies and Aqua services. The complete list is found on this page.

There are three kinds of scope in Aqua Enterprise:

- **Application scopes** have several uses, including for use with policies. This topic deals only with their use with policies.
- **Additional scope criteria** apply specifically to policies.
- **Global Policy Scope**, which applies only to containers during runtime.

## Application scope(s)

Application scopes are an essential part of <a href="/">Role-Based Access Control (RBAC) (TODO: "SaaS-AM-rbac-overview" >)</a>. They determine which system resources (application artifacts, workloads, and infrastructure elements) any given user can view or edit (create, modify, and delete) inside Aqua Enterprise. A user's application scope(s) are associated with the user's assigned role(s). See <a href="/">Application Scopes (TODO: "SaaS-AM-application-scopes" >)</a> for a detailed explanation and examples, including the creation of application scopes.

Let's consider the effect of application scopes on Aqua policies.

When a user defines a policy, the policy is associated with any or all of the user's application scopes. Unless the application scope is **Global**, the application scopes typically impose restrictions on the objects the policy applies to.

For example: Image Assurance Policy ABC might restrict policy compliance evaluation to container images in the **alpine** and **nginx** repositories. Similarly, Function Runtime Policy XYZ might be restricted to AWS Lambda serverless functions with the Aqua label **payroll**. Again, all of this is determined by the application scope(s) associated with the respective policies.

## Additional scope criteria

You can optionally configure a policy with additional scope criteria (for that policy only). Their purpose is to further limit the set of objects the policy applies to. (They might have no effect, but they cannot broaden the set of objects.)

So, reconsidering the first example given above, Image Assurance Policy ABC might be further restricted to apply only to container images in the **nginx** repository, or perhaps **alpine** images with only a specific image tag. But the additional scope criteria could not, for example, cause ABC to be applied to **mongo** images.

## Global Bypass Scope

The <a href="/">Global Bypass Scope (TODO: "SaaS-bypass-scope" >)</a> applies only to containers at runtime. It defines the containers to which Aqua will **not:**

- Apply any <a href="/">Kubernetes Assurance Policies (TODO: "SaaS-kubernetes-assurance-policies" >)</a>
- Apply any [Container Runtime Policies](../runtime-policies/SaaS-container-runtime-policies.md)
- Apply any service definitions; therefore, <a href="/">Firewall Policies (TODO: "SaaS-firewall-policies" >)</a> are not enforced
- Perform <a href="/">auditing (TODO: "SaaS-view-audit-events" >)</a>

The Global Bypass Scope **overrides** all application scopes and additional scope restrictions.

# Policy impact on in-scope objects

The following tables describe how the various types of Aqua policies (including services) affect the objects that fall within their cumulative scopes.

## Assurance Policies

<table><tr><th>Assurance Policy type</th><th>Effects of policy scope</th></tr><tr>
<td><p><a href="/">Image Assurance Policies (TODO: "SaaS-image-assurance-policies" >)</a></p></td>

<td><p>Determines the images that the policy applies to. After scanning a given image, Aqua will apply all Image Assurance Policies whose scope includes the image, in order to determine image compliance.</p></td>
</tr><tr>
<td><p><a href="/">VMware Tanzu Application Assurance Policies (TODO: "SaaS-image-assurance-policies" >)</a></p></td>

<td><p>Determines the VMware Tanzu applications that the policy applies to. After scanning a given Tanzu application, Aqua will apply all Tanzu Application Assurance Policies whose scope includes the application, in order to determine compliance.</p></td>
</tr><tr>
<td><p><a href="/">Function Assurance Policies (TODO: "SaaS-function-assurance-policies" >)</a></p></td>

<td><p>Determines the (serverless) functions that the policy applies to. After scanning a given function, Aqua will apply all Function Assurance Policies whose scope includes the function, in order to determine compliance.</p></td>
</tr><tr>
<td><p><a href="/">Host Assurance Policies (TODO: "SaaS-host-assurance-policies" >)</a></p></td>

<td><p>Determines the hosts that the policy applies to. After scanning a given host, Aqua will apply all Host Assurance Policies whose scope includes the host, in order to determine compliance.</p></td>
</tr><tr>
<td><p><a href="/">Kubernetes Assurance Policies (TODO: "SaaS-kubernetes-assurance-policies" >)</a></p></td>

<td><p>Determines the containers that the policy applies to. Before deploying a container, Aqua will apply all Kubernetes Assurance Policies whose scope includes the container, in order to determine compliance.</p>
<hr class="hr-table" />

<p>See <a href="/">Global Bypass Scope (TODO: "#section-global-bypass-scope" >)</a> above.</p></td>
</tr></table>

## Runtime Policies

<table><tr><th>Runtime Policy type</th><th>Effects of policy scope</th></tr><tr>
<td><p><a href="/">Container Runtime Policies (TODO: "SaaS-container-runtime-policies" >)</a></p></td>

<td><p>Determines the containers that the policy applies to. Throughout the lifetime of a given container, Aqua will apply all Container Runtime Policies whose scope includes the container, in order to monitor, block, and audit harmful runtime activities.</p>
<hr class="hr-table" />

<p>See <a href="/">Global Bypass Scope (TODO: "#section-global-bypass-scope" >)</a> above.</p></td>
</tr><tr>
<td><p><a href="/">Function Runtime Policies (TODO: "SaaS-function-runtime-policies" >)</a></p></td>

<td><p>Determines the (serverless) functions that the policy applies to. Throughout the lifetime of a given function (when invoked), Aqua will apply all Function Runtime Policies whose scope includes the function, in order to monitor, block, and audit harmful runtime activities.</p></td>
</tr><tr>
<td><p><a href="/">Host Runtime Policies (TODO: "SaaS-host-runtime-policies" >)</a></p></td>

<td><p>Determines the VM hosts that the policy applies to. Aqua will apply all Host Runtime Policies whose scope includes the host, in order to monitor, block, and audit harmful activities.</p></td>
</tr></table>

## Aqua services

<table><tr><th>Aqua services</th><th>Effects of policy scope</th></tr><tr>
<td><p><a href="/">Aqua services with container workloads (TODO: "SaaS-aqua-services-overview#section-services-with-container-workloads" >)</a></p></td>

<td><p>Determines the containers that are included in a service. During the runtime of these containers, Aqua will apply and enforce the Firewall Policies that have been specified for the service.</p></td>
</tr><tr>
<td><p><a href="/">Aqua services with host workloads (TODO: "SaaS-aqua-services-overview#section-services-with-host-workloads" >)</a></p></td>

<td><p>Determines the hosts that are included in a service. During the runtime of these containers, Aqua will apply and enforce the Firewall Policies that have been specified for the service.</p></td>
</tr></table>

# Policy scope contents and syntax

## Application scopes

See <a href="/">Application Scopes (TODO: "SaaS-AM-application-scopes" >)</a>.

## Additional scope criteria and Global Bypass Scope

A common syntax is used for the definition of additional scope criteria and the Global Policy Scope.

- A scope definition comprises one or more terms. Each term consists of a category, an attribute, and its value (in a few cases, two values must be specified).
- The category and attribute depend on the kind of policy being defined; see <a href="/">Specific Scope Definitions (TODO: "SaaS-specific-scope-definitions" >)</a>. For the Global Bypass Scope, refer to <a href="/">this topic (TODO: "SaaS-bypass-scope" >)</a>.
- The value(s) can incorporate an asterisk (**\***) for use as a wildcard (representing zero or more characters). Values cannot contain embedded spaces; you can use an asterisk to represent one or more characters, including spaces.

Examples of scope terms (from a Container Runtime Policy):

- **container, image, nginx**
- **image, label, lab1, _blue_** (there are two values in this case)

- To form a complete scope definition, you can use the following to form a regular expression:
- Logical operators: **AND**, **AND NOT**, **OR**, and **OR NOT**
- Parentheses, which can change the order of evaluation (which is normally from left to right)

Example:

<table><tr></tr><tr>
<td><p><strong>(container.image.nginx AND image.label."lab1"."<em>blue</em>") OR (aqua.service.Service_A)</strong></p></td>
</tr></table>

# Policy scope editing

When configuring a policy, follow this procedure to associate one or more application scopes and, optionally, additional scope criteria. This screenshot is from an Image Assurance Policy, but the process is the same for all kinds of policies.

<img src="/img/policy/6eb76a7-01_5.3_Define_policy_scope.png" alt="01 5.3 Define policy scope.png" width="890px" height="723px" />

## Application scopes

1. If more than one application scope is available, use the drop-down list to select one or more of them. (Otherwise, the drop-down arrow will be greyed out and non-selectable.)
2. If more than one application scope has been added, you can delete it by clicking the **x** on its box.

## Additional scope criteria (optional)

See <a href="/">Specific Scope Definitions (TODO: "SaaS-specific-scope-definitions" >)</a> for attributes and values relevant to the type of policy you are defining.

1. Under "Additional Scope Criteria", define a scope term by using the drop-down lists, and the text boxes to enter the related value(s). Click "Add".
2. As you add each term, it will be added to the complete scope definition in the text box. By default, each new term is added with **AND**. You can edit the text in the box manually to change this to a different logical operator, add parentheses, or change the scope definition in other ways. For example:

<img src="/images/9f921fa-02_5.3_Define_additional_scope_criteria.png" alt="02 5.3 Define additional scope criteria.png" width="851px" height="337px" />

## Global Policy Scope

This is done in the same manner as for the additional scope criteria. However, the scope editor is found under System > Settings > **Enforcer**. See <a href="/">Global Bypass Scope (TODO: "SaaS-bypass-scope" >)</a>.
