---
title: "Basic Information"
slug: "image-assurance-policies-basic-info"
position: 1
---

# Image Assurance Policy components

An Image Assurance Policy consists of:

- **Application scopes** and **Additional scope criteria:** define set(s) of images to which the policy will be applied; see [Policy Scope](../policy-scope/SaaS-policy-scope-overview.md)
- **Actions:** what Aqua will do if an image fails the Image Assurance Policy
- **Exceptions:** items that evaluation of the Image Assurance Policy should ignore
- **Controls:** individual tests that are evaluated on the results of image scans

## Actions

You can select any or all of the following actions to be taken for an image if a given Image Assurance Policy fails:

- **Create an audit message when image failed:** An entry is added to the Audit log, indicating the reason the policy failed
- **Fail the Aqua step in CI/CD:** An image build that is scanned during the CI/CD process will be marked as failed, and cannot be pushed to a repository
- **Mark failed images <span className="tanzu">(VMware Tanzu applications)</span> as non-compliant:** At runtime, if the [Container Runtime Policy](../runtime-policies/SaaS-container-runtime-policies.md) for the container with this image includes the [control](../runtime-policies/container-runtime-policies/container-runtime-policy-components#section-controls) **Block Non-compliant Images**, the Enforcer will prevent the container from running the rejected image.

## Exceptions

You can select any or all the following exceptions to the evaluation of the Image Assurance Policy:

- **Ignore vulnerabilities that have no available fix:** If selected, vulnerabilities for which there is no known solution will not trigger policy failure.
- **Ignore vulnerabilities that were published in the last [nn] days:** Provides a "grace period" of 1-999 days for vulnerabilities that are less likely (due to their newness) to have exploits.
- **Ignore specific vulnerabilities:** If selected, you can list any number of specific vulnerabilities (e.g., **CVE-2019-1234**) on separate lines.
- **Ignore vulnerabilities and malware found in specific path:** If selected, you can list any number of paths (resources) on separate lines. Vulnerabilities and malware found in those paths will not cause policy failure. The paths must be entered in [gitignore](https://git-scm.com/docs/gitignore) syntax (e.g., **/projects/proj1**.
- **Ignore vulnerabilities found in base image:** If selected, current policy ignores vulnerabilities found in its base image layers and fails if vulnerability controls are triggered for vulnerabilities found in an image’s non-base layers.

## Controls

A control is an individual test that is applied to the results of a scan as part of an Assurance Policy. You can include the controls listed below in Image Assurance Policies.

The first column of the table that follows contains icons to indicate support for the relevant control:

- <img src="/img/b3e9a94-Linux.png" className="inline_img" /> Image Assurance Policies on Linux hosts
- <img src="/img/9c10ee2-Tanzu.png" className="inline_img" /> VMware Tanzu Application Assurance Policies (on Linux hosts)
- <img src="/img/49a1d3c-Windows-Server.png" className="inline_img" /> Image Assurance Policies on Windows hosts

:::caution

Note that CF (Cloud Foundry) is a legacy name for VMware Tanzu.

:::

<table>
    <tr>
        <th>Control</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>
            <p>Allowed CF Applications <img src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" /></p>
        </td>
        <td>
            <p>Lists all Tanzu applications that have been <a href="images-screen-operations/allow-and-block-images">allowed </a></p>
            <hr className="hr-table"/>
            <p>This control appears only in the <a href="#the-default-policy">Default Tanzu Application Assurance Policy</a>.
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Approved Base Image
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it has not been built using an approved base image</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Blocked CF Applications
                <img src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
            </p>
        </td>
        <td>
            <p>Lists all Tanzu applications that have been <a href="images-screen-operations/allow-and-block-images">blocked </a></p>
            <hr className="hr-table"/>
            <p>This control appears only in the <a href="#the-default-policy">Default Tanzu Application
                    Assurance Policy</a>.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Custom Compliance Checks
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Allows you to select one or more custom scripts, that you write, to be evaluated as controls. If any
                script returns a zero (Fail), the image fail the policy. </p>
            <hr className="hr-table"/>
            <p>See also <a href="#">Custom Compliance Checks for Assurance Policies (TODO:  "SaaS-custom-compliance-checks-for-assurance-policies">}})</a>.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>CVEs Blocked
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it contains any of the specified vulnerabilities</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Dynamic Threat Analysis
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
            </p>
        </td>
        <td>
            <p>Including this control enables scanning of the image by Aqua Dynamic Threat Analysis (DTA); see <a
                    href="#">this section (TODO: "SaaS-aqua-dynamic-threat-analysis-dta">}})</a> for a full
                description.</p>
            <p>The control fails the image if DTA scanning finds issues of the selected severity (low, medium, high, or
                critical) or higher.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Images Allowed
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Lists all images that have been <a href="#">allowed (TODO:  "SaaS-allow-and-block-images#section-allow">}})</a></p>
            <hr className="hr-table"/>
            <p>This control appears only in the <a href="#">Default Image Assurance Policy (TODO:  "#the-default-policy">}})</a>.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Images Blocked
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Lists all images that have been <a href=" ">blocked</a></p>
            <hr className="hr-table"/>
            <p>This control appears only in the <a href="#">Default Image Assurance Policy (TODO:  "#the-default-policy">}})</a>.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Labels Forbidden
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it contains ANY of the specified <a
                    href="https://docs.docker.com/config/labels-custom-metadata/">Docker object labels</a>. If only a
                key is specified, it must exist on the image, but can have any value. If a key-value pair is specified,
                the key must exist with the value that you specify.</p>
            <p>This is basically the opposite of the "Labels Required" control.</p>
            <p><br/>Note: This control is not related to <a href="#">Aqua Labels (TODO: "SaaS-aqua-labels">}})</a>.
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Labels Required
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it does not contain ALL of the specified <a
                    href="https://docs.docker.com/config/labels-custom-metadata/">Docker object labels</a>. If only a
                key is specified, it must exist on the image, but can have any value. If a key-value pair is specified,
                the key must exist with the value that you specify.</p>
            <p>This is basically the opposite of the "Labels Forbidden" control.</p>
            <p><br/>Note: This control is not related to <a href="#">Aqua Labels (TODO: "SaaS-aqua-labels">}})</a>.
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Malware
                <img src="/img/b3e9a94-Linux.png" className="inline_img" /> <img src="/img/9c10ee2-Tanzu.png"
                    className="inline_img" />
                <img src="/img/49a1d3c-Windows-Server.png" className="inline_img" />
            </p>
        </td>
        <td>
            <p>Fails the image if it contains malware</p>
            <hr className="hr-table" />
            <p>The control will be available in the UI only if scanning for malware is enabled in the Aqua Server. See
                also <a href="#">Scanning for malware and sensitive data (TODO:  "SaaS-configure-scan-options#section-scanning-for-malware-and-sensitive-data">}})</a>.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>MicroEnforcer
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it does not have the Aqua MicroEnforcer installed and set as the image entry point</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>OS Package Manager
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it does not contain one of the OS package managers that Aqua needs in order to
                complete scanning: <a href="https://wiki.alpinelinux.org/wiki/Alpine_Linux_package_management">apk</a>,
                <a href="https://help.ubuntu.com/lts/serverguide/dpkg.html.en">dpkg</a>, or <a
                    href="https://rpm.org/">rpm</a>
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <p>OSS Licenses Allowed
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
            </p>
        </td>
        <td>
            <p>If any of the selected OSS licenses is present in the image, this control will not fail</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>OSS Licenses Blocked
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it requires any of the selected OSS licenses</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Packages Blocked
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it contains any of the specified packages</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Packages Required
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it does not contain ALL of the specified packages</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>SCAP
                <img src="/img/b3e9a94-Linux.png" className="inline_img" />
            </p>
        </td>
        <td>
            <p>Users can add a script in <a href="https://oval.mitre.org/">OVAL</a> (Open Vulnerability and Assessment
                Language) format, which will apply <a
                    href="https://csrc.nist.gov/projects/security-content-automation-protocol/">SCAP</a> (Security
                Content Automation Protocol) scanning to the images to which the script is applied. If any of the
                settings defined in the OVAL file are violated, the results will be included in the scan results.</p>
            <hr className="hr-table"/>
            <p>This control is not supported in <a href="#">direct scanning mode (TODO: "SaaS-scanning-mode">
                        }})</a>.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Sensitive Data
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if it contains sensitive data, such as RSA keys</p>
            <hr className="hr-table"/>
            <p>The control will be available in the UI only if scanning for sensitive data is enabled in the Aqua
                Server. See also <a href="#">Scanning for malware and sensitive data (TODO:  "SaaS-configure-scan-options#section-scanning-for-malware-and-sensitive-data">}})</a>.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Superuser
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails images configured to run as “root” (Linux) (or “Container Administrator” in case of Windows
                containers)</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Vulnerability Exploitability
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if any exploitable vulnerabilities are detected during scanning. This control allows you
                to select the required vulnerability exploit type(s) that can be applied to the image scan results. Aqua
                supports the following exploit types:
                * Remote
                * DoS
                * Local
                * Web Apps</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Vulnerability Score
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if its vulnerability score is greater or equal to the selected value</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Vulnerability Severity
                <img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img
                    src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />
                <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />
            </p>
        </td>
        <td>
            <p>Fails the image if its vulnerability severity is greater or equal to the selected value. See also <a
                    href="#">Custom Vulnerability Severity (TODO: "SaaS-custom-vulnerability-severity">}})</a>.
            </p>
        </td>
    </tr>
</table>

## The Default policy

An Image Assurance Policy named **Default** is predefined in Aqua. This is a global policy; it is applied to all images after they have been scanned.

:::caution

For VMware Tanzu application assurance, use the "Default (CF Application policy)".

:::

Initially, the Default policy has no controls. You can include controls in this policy, in the same manner as for any other policy.

The Default policy is also initially configured with these actions:

- Create an audit message when image failed
- Fail the Aqua step in CI/CD
- Mark failed images as non-compliant

You can reconfigure the actions per your requirements.
