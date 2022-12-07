---
title: "CyberCenter Description"
slug: "cybercenter-description"
position: 1
---

# Introduction

Aqua’s CyberCenter is a cloud-based cyber-intelligence knowledge base, maintained and operated by Aqua Security. The CyberCenter:

- Constantly monitors various security trackers, software vendors' security-related information, websites, and other threat intelligence sources
- Builds an up-to-date, dynamic, and comprehensive database of known vulnerabilities and malware that could impact images, containers, and their hosts
- Maintains an IP address blacklist, consisting of IP addresses with known reputations for inadequate security

Aqua uses the CyberCenter threat intelligence database when scanning images, containers, and hosts for security exposures (vulnerabilities and malware). During scanning, the Aqua Scanner checks each package in a scanned image or on a host against the CyberCenter database. As such, scanning requires that Aqua send selected image identification information to the CyberCenter. Refer to <a href="#">Information Sent to CyberCenter (TODO: "SaaS-info-sent-to-cybercenter")</a> for further information.

The remaining sections on this page describe specific features of the Aqua CyberCenter.

# Accuracy of results

The CyberCenter obtains information on security vulnerabilities from:

- [NVD](https://nvd.nist.gov/)/[Mitre](http://cwe.mitre.org/)
- The security trackers of operating system vendors, especially for severity ratings and [CVSS](https://www.first.org/cvss/) scores

Because the CyberCenter knowledge base is constantly updated, it may contain information that is more up-to-date and complete than the information available from software vendors at the time you selected their packages.

This greatly increases the accuracy of results, since vulnerabilities are often mitigated by vendors, greatly reducing (if not completely removing) the exposure. This is not necessarily updated or reflected in NVD.

See also <a href="/">Vulnerability Severity and Score (TODO: "SaaS-vulnerability-severity-and-score")</a>.

# Verbose vendor statements

The CyberCenter provides the vendor's full statements regarding vulnerabilities, if available. This extended information often includes links to relevant discussions and references.

# Improved software detection

A big part of vulnerability assessment is accurately detecting the installed software in the image. In many cases a wrong software detection will result in false positives in the vulnerabilities results.

Examples:

- While scanning Docker's **debian:jessie** image, some scanners may detect **gcc-4.9** and report a medium-severity vulnerability. However, this package is not actually installed in the Debian image!
- While scanning **CentOS:7**, some scanners may correctly detect bind-license, and report a high-severity vulnerability. On the other hand, this image includes only a simple text file which doesn't really constitute any vulnerability.

Detecting vulnerabilities in installed software is a complex subject. The Aqua CyberCenter features enhanced detection mechanisms, supporting OS packages, programming language package managers, and stand-alone files deployed in the image.

# Red Hat vulnerabilities with no available fixes

[Red Hat](https://www.redhat.com/en) issues advisories in separate feeds for:

- Fixed vulnerabilities
- Vulnerabilities with no available fixes

Therefore, many other scanners miss Red Hat vulnerabilities that have no available fixes, or list them with incorrect scores or severity ratings.

(\*\*) For example, Red Hat acknowledges [CVE-2017-8804](https://access.redhat.com/security/cve/cve-2017-8804) as a vulnerability of moderate impact, but no fix is available. This CVE might not be detected by some scanners, but will be reported in CyberCenter.

This issue also applies to dependent distributions such as CentOS.

(\*\*) This information is correct as of December 5, 2018.

# Vulnerabilities in \"will not fix\" state

Certain Linux distributions (mostly Red Hat) often mark vulnerabilities as "Will not fix", which usually means that the relevant packages will never be upgraded to a version that fixes these vulnerabilities in the specific branch of the distribution.

For example, the **curl** package in CentOS:7 is currently at version 7.29.0, which is vulnerable with [CVE-2016-8616](https://access.redhat.com/security/cve/cve-2016-8616).

This vulnerability was fixed upstream in curl 7.51.0, but Red Hat 7 will probably never reach this version.

These vulnerabilities are generally not fixable, and should be taken into account when selecting base images. However, since users do not have much control over these vulnerabilities, the CyberCenter gives them the ability to toggle the display of such "Will not fix" vulnerabilities on or off.
