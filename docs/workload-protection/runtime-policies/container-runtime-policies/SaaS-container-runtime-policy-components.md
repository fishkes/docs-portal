---
title: "Policy Components"
slug: "container-runtime-policy-components"
position: 1
---

# Overview

A Container Runtime Policy consists of:

- **Application scopes** and **Additional scope criteria:** define set(s) of containers to which the policy will be applied; see [Policy Scope](../../policy-scope/SaaS-policy-scope-overview.md)
- **Status:** whether the policy is enabled
- **Enforcement Mode:** how Aqua handles Container Runtime Policy violations
- **Controls:** security-related tests that are conducted by an Enforcer (or MicroEnforcer) while your container is running

In addition, you can either enable or disable each Container Runtime Policy individually.

When a container is started, and throughout its lifetime, Aqua applies all **enabled** Container Runtime Policies whose scope includes the container. Each policy will be applied according to controls and Enforcement Mode configured when the container is started.

If the policies applied to any container have conflicting settings or controls, Aqua applies the more stringent settings or controls.

##### Example

Two or more policies include a given control (e.g., Drift Prevention). At least one policy is in Enforce mode, and at least one is in Audit mode. Aqua will apply Enforce mode to the control in question.

#### Global bypass

The scope of all Container Runtime Policies is also affected by the <a href="/">Global Bypass Scope (TODO: "SaaS-bypass-scope" >)</a>, which defines the containers to which no Container Runtime Policies will apply.

Only the [Default Container Runtime Policy](../SaaS-container-runtime-policies#section-the-default-runtime-policy) can include the optional "Bypass Scope" control, which defines the containers to which this policy will not apply.

# Enforcement Mode

A Container Runtime Policy can be configured in either of the following modes:

- **Audit:** In case of a policy violation when deploying a container, or during its runtime, Aqua will only log an audit event with the **Run Time** event type. Aqua will **not** prevent the deployment of the container or block any prohibited activities from occurring.
- **Enforce:** Aqua will enforce the policy as defined above; see [Effects of Container Runtime Policy enforcement](../SaaS-container-runtime-policies#section-effects-of-container-runtime-policy-enforcement).

# Controls

At the end of this section is a table that defines all Container Runtime Policy controls. It is organized into columns, as explained here.

## Explanations

##### Control

The first column shows the name of the control.

##### Enforcers / restart

- These abbreviations indicate support of the control by these Enforcers: AE (<a href="/">Aqua Enforcer (TODO: "SaaS-aqua-enforcer" >)</a>), ME (<a href="/">MicroEnforcer (TODO: "SaaS-microenforcer" >)</a>), PE (<a href="/">Pod Enforcer (TODO: "SaaS-pod-enforcer" >)</a>), and/or KE (<a href="/">KubeEnforcer (TODO: "SaaS-kubeenforcer" >)</a>).
- The symbol ♻ indicates controls labeled with "Requires container restart" in the UI. Adding or removing these controls to or from a policy will not affect running containers. Such containers must be restarted for these changes to take effect.

##### Workloads

One or more icons to indicate support for different kinds of container workloads.

- <img src="/img/b3e9a94-Linux.png" class="inline_img" /> standard Linux containers
- <img src="/img/9c10ee2-Tanzu.png" class="inline_img" /> VMware Tanzu applications (Linux)
- <img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /> Windows containers with <a href="https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-containers/hyperv-container#process-isolation">process isolation</a>
- <span style={{color: '#00baf6', fontWeight: 'bold'}}>HV</span> Windows containers with <a href="https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-containers/hyperv-container#hyper-v-isolation">Hyper-V isolation</a>

##### Partial support (notation)

Square brackets indicate partial support by only some of the control's elements.

<table><tr><th>Example</th><th>Meaning</th></tr><tr>
<td><p>Package Block 
[<img src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" />] (not ME)</p></td>

<td><p>The MicroEnforcer does not support the Package Block control with <img src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" /> VMware Tanzu applications.</p></td>
</tr><tr>
<td><p>Limit Container Privileges
[<img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />]</p></td>

<td><p>Only some of this control's elements support Windows application workloads.</p></td>
</tr></table>

## List of controls

<table><tr><th>Control</th><th>Enforcers / restart</th><th>Workloads</th><th>Description</th></tr><tr>
<td><p>Block Container Exec</p></td>

<td><p>AE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /> <strong><span style={{color: '#00baf6'}}>HV</span></strong></p></td>

<td><p>Prevents users from exec'ing (running a new command) in a running container; only the application entry point will run</p></td>
</tr><tr>
<td><p>Block Cryptocurrency Mining</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Prevents the container from communicating with DNS/IP addresses known to be used for cryptocurrency mining</p></td>
</tr><tr>
<td><p>Block Fileless Exec</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /></p></td>

<td><p>Prevents the execution of <a href="https://www.mcafee.com/enterprise/en-us/security-awareness/ransomware/what-is-fileless-malware.html">fileless malware</a></p></td>
</tr><tr>
<td><p>Block Non-Compliant Images</p></td>

<td><p>AE, ME, KE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" /> 
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /> <strong><span style={{color: '#00baf6'}}>HV</span></strong></p></td>

<td><p>Prevents the container from running non-compliant images</p></td>
</tr><tr>
<td><p>Block Non-Compliant Resources</p></td>

<td><p>KE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /></p></td>

<td><p>Prevents running non-compliant Kubernetes resources</p></td>
</tr><tr>
<td><p>Block Non-Kubernetes Containers</p></td>

<td><p>AE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /></p></td>

<td><p>Prevents the execution of non-Kubernetes containers</p></td>
</tr><tr>
<td><p>Block Reverse Shell</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /></p></td>

<td><p>Prevent execution of <a href="https://www.acunetix.com/blog/web-security-zone/what-is-reverse-shell/">reverse shells</a> inside containers</p>
<hr class='hr-table'/>

<p>This control is available only in the Default runtime policy.</p></td>
</tr><tr>
<td><p>Block Unregistered Images</p></td>

<td><p>AE, ME, KE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /><img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /> <strong><span style={{color: '#00baf6'}}>HV</span></strong></p></td>

<td><p>Prevents the container from running if the image is not registered in Aqua</p></td>
</tr><tr>
<td><p>Bypass Scope</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Defines containers not subject to enforcement of the <a href="/">Default runtime policy (TODO:  "SaaS-container-runtime-policies#section-the-default-runtime-policy" >)</a></p>
<hr class='hr-table'/>

<p>This control is available only in the Default runtime policy.</p></td>
</tr><tr>
<td><p>Capabilities Block</p></td>

<td><p>AE
♻</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /></p></td>

<td><p>Prevents containers from using specific Unix capabilities (as selected from a drop-down list)</p></td>
</tr><tr>
<td><p>DNS/IP Reputation</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Prevents communication with DNS/IP addresses known to have a bad reputation</p></td>
</tr><tr>
<td><p>Drift Prevention</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" /></p></td>

<td><p>Prevents executables not in the original image from running. You can enter the full path or base name of one or more executable names using the <a href="#section-wildcard-syntax">wildcard syntax</a> described below.</p>
<hr class='hr-table'/>

<p>See <a href="#section-ibm-power-10-support">IBM Power10 support</a> below.</p></td>
</tr><tr>
<td><p>Executables Allowed</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Specifies the executables that can be run by the container; all other executables will be prevented from running. You can enter one or more executable names using the <a href="#section-wildcard-syntax">wildcard syntax</a> described below.</p>
<hr class='hr-table'/>

<p>Linux: To allow executables by their file hashes <strong>along</strong> with their names, use this format:<br/><strong>/bin/uname@SHA256:digest</strong></p></td>
</tr><tr>
<td><p>Executables Blocked</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Prevents specifically named executables from running in the container. You can enter one or more executable names using the <a href="#section-wildcard-syntax">wildcard syntax</a> described below.</p></td>
</tr><tr>
<td><p>File Block</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Prevents the container from reading, writing, or executing specifically named files or directories (but not the contents of directories). You can enter one or more executable names using the <a href="#section-wildcard-syntax">wildcard syntax</a> described below.</p></td>
</tr><tr>
<td><p>File Integrity Monitoring</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Monitors files and directories for read, write, and modify operations. You can enter one or more file or directory names using the <a href="#section-wildcard-syntax">wildcard syntax</a> described below. You can also select one or more of the "presets", which have been pre-configured with file and directory names. See <a href="#section-file-integrity-monitoring">File Integrity Monitoring</a> below. Linux and Windows hosts support different subsets of the functionality.</p>
<hr class="hr-table"/>

<p>This control generates audit events (of type Integrity Monitoring) for the configured operations; it does not block them.</p>
<hr class='hr-table'/>

<p>See <a href="#section-ibm-power-10-support">IBM Power10 support</a> below.</p></td>
</tr><tr>
<td><p>Forensics</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Includes OS user activity and/or full command arguments in the audit log. Options: </p>
<ul>
<li>Audit all process activity (of the container, regardless of Image Profiles)</li>
<li>Audit full command arguments (for commands run inside a container)</li>
<li>Audit all network activity (of the container)</li>
</ul></td>
</tr><tr>
<td><p>Fork Guard</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Prevents fork bombs in the container. In this control, you set the limit for any one process.</p></td>
</tr><tr>
<td><p>Limit Container Privileges</p></td>

<td><p>AE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
[<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" />]</p></td>

<td><p>Prevents the container from running with these privileges (selected from a list):
  * Access to host network 
  * Adding capabilities with --cap-add<br />
  * Configured with “root” user<br />
  * Privileged containers<br />
  * Run in owner's user context (Requires restart)<br />
  * Use the host IPC namespace<br />
  * Use the host PID namespace<br />
  * Use the host user namespace<br />
  * Use the host UTS namespace<br />
  * Port binding lower than 1024 [<img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" />]</p></td>
</tr><tr>
<td><p>Limit New Privileges</p></td>

<td><p>AE
♻</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /></p></td>

<td><p>Prevents the container from obtaining new privileges at runtime</p></td>
</tr><tr>
<td><p>Package Block</p></td>

<td><p>AE, ME</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> 
[<img src="/img/9c10ee2-Tanzu.png" class="inline_img" />] (not ME)</p></td>

<td><p>Prevents the container from reading, writing, or executing any files in the specifically named packages. See <a href=" #section-package-block">Package Block</a> below.</p></td>
</tr><tr>
<td><p>Port Block</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/9c10ee2-Tanzu.png" class="inline_img" />
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Prevents the container from using the specific inbound and/or outbound ports</p></td>
</tr><tr>
<td><p>Port Scanning Detection</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> 
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Detects port scanning behavior in the container</p></td>
</tr><tr>
<td><p>Read-Only Directories and Files</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> 
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Prevents write access to selected files and directories. See <a href="#section-read-only-directories-and-files">Read-Only Directories and Files</a> below.</p></td>
</tr><tr>
<td><p>Real-time Malware Protection</p></td>

<td><p>AE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> 
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>This control allows you to enter specific files or directories and processes to get excluded while scanning containers for the malware.</p>
<hr class='hr-table'/>

<p>Depending on the selection of Enforcement mode: Audit or Enforce, you can select one of the following actions on monitoring or restricting the execution of malware:</p>
<ul>
<li>Alert</li>
<li>Block</li>
<li>Delete</li>
</ul></td>
</tr><tr>
<td><p>Registries Allowed</p></td>

<td><p>AE, ME, PE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> 
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Select registries from which images can be pulled, to run as containers on the host; if blank, all registries are permitted.</p></td>
</tr><tr>
<td><p>System Integrity Monitoring</p></td>

<td><p>AE</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> 
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>This control generates audit events (of type Integrity Monitoring) for Changes made to the system time, but it does not block any operations. Ensure that the "System time" checkbox is checked.</p></td>
</tr><tr>
<td><p>Volumes Blocked</p></td>

<td><p>AE
♻</p></td>

<td><p><img src="/img/b3e9a94-Linux.png" class="inline_img" /> 
<img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Prevents the container from mounting specifically named volumes. You can enter one or more volume names using the <a href="/">wildcard syntax (TODO:  "#section-wildcard-syntax" >)</a> described below.</p></td>
</tr></table>

#### File Integrity Monitoring

When you initially add this control to the policy, only three sections appear: Operations, Monitored Paths, and Presets. All other sections appear once you configure either Monitored Paths or Presets. Specification of all information is optional unless otherwise indicated.

**Note:** Different sections are supported on Linux and Windows hosts, respectively.

<table><tr><th>Section</th><th>Description</th></tr><tr>
<td><p>Operations
<img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" /></p></td>

<td><p>You can individually set any or all of these operations to monitor and audit: 
- Creation, reading, modification, deletion 
- Attributes: any change to the permissions of directories and/or files</p>
<p>The directories and/or files are specified in other sections of this policy control.</p>
<hr class="hr-table"/>

<p>You must select at least one type of operation (unless you want to disable registry monitoring altogether).</p></td>
</tr><tr>
<td><p>Monitored Paths
<img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" /></p></td>

<td><p>Enter one or more directories and/or files that you want Aqua to monitor. Path names can include an asterisk as a wildcard character. For example, <strong>HKEY_LOCAL_MACHINE\SOFTWARE*</strong> will cause recursive monitoring of all sub-paths and keys under *<em>HKEY_LOCAL_MACHINE\SOFTWARE*</em>. Without the asterisk, monitoring will apply only to the named directory itself.</p></td>
</tr><tr>
<td><p>Excluded Paths
<img src="https://files.readme.io/b3e9a94-Linux.png" width="15" /> <img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" /></p></td>

<td><p>Enter one or more directories and/or files to exclude from monitoring. Each should be a subset of a path specified under <strong>Monitored Paths</strong>. This is a form of "whitelisting".</p></td>
</tr><tr>
<td><p>Monitored Processes
<img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" /></p></td>

<td><p>Monitor the specifically named processes for file-related options. If you leave this section empty, all processes will be monitored (except those entered under <strong>Excluded Processes</strong>).</p></td>
</tr><tr>
<td><p>Presets
<img src="/img/b3e9a94-Linux.png" class="inline_img" /> <img src="/img/49a1d3c-Windows-Server.png" class="inline_img" /></p></td>

<td><p>Select one or presets to configure a set of directories and/or files for monitoring. There are different sets of presets available for Linux and Windows hosts, respectively.</p></td>
</tr><tr>
<td><p>Excluded Processes
<img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" /></p></td>

<td><p>Do not monitor file-related operations performed by the specifically named processes.</p></td>
</tr><tr>
<td><p>Monitored Users
<img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" /></p></td>

<td><p>Monitor file-related operations performed only by the named user(s), e.g., <strong>lesliem</strong>. If you leave this section empty, Aqua will monitor file-related operations performed by all users (except those entered under <strong>Excluded Users</strong>).</p></td>
</tr><tr>
<td><p>Excluded Users
<img src="https://files.readme.io/49a1d3c-Windows-Server.png" width="15" /></p></td>

<td><p>Do not monitor file-related operations performed by the specifically named users.</p></td>
</tr></table>

#### Notes on syntax

- Directory path names must be start and end with a slash character; file path names start with a slash, but do not end with one.
- If a directory path name ends with a slash and an asterisk, Aqua will also recursively monitor (or exclude) **all directories and files beneath the directory specified.**
- Directory and file names can include an asterisk as a wildcard character.
- Linux syntax is shown in the example below. For Windows hosts, use standard path names, including backslashes. For example: **C:\Users\jennifer**.

#### Example

This is the upper part of a given File Integrity Monitoring control:

<img src="/img/policy/d97a9f0-01_6.2_CRP_FIM_control_example.png" alt="01 6.2 CRP FIM control example.png" width="671px" height="856px" />

This control (if part of an enabled Container Runtime Policy) will cause Aqua to monitor the following for creation, modifications, and attribute changes:

- The directory **/home/jennifer/** and all of its sub-directories and files; however, all files under **/home/jennifer/**, whose names start with the string **special**, are excluded
- All directories under **/usr/local/** whose names start with the string **user-100-**
- The directories and files in the Common Program Files "preset" group for Linux hosts

#### Package Block

- The MicroEnforcer and Pod Enforcer do not support this control with <img src="https://files.readme.io/9c10ee2-Tanzu.png" width="15" /> VMware Tanzu applications.
- This control does not work on [Fedora](https://getfedora.org/) images.

### Wildcard syntax

You can configure the Drift Prevention (allowed processes), Executables Allowed, Executables Blocked, File Block, and Volumes Blocked controls with one or more terms. Each term can include these wildcard characters:

- Asterisk (\*): a character string of any length
- Question mark (?): a single character

The syntax of each term can be one of the following:

1. A [file | volume] name (without a path): matches files or volumes no matter where they are located in the container file system
2. A path and [file | volume]: matches all files or volumes in the path(s) specified

Examples:

<table><tr><th>Term</th><th>Matches...</th></tr><tr>
<td><p><strong>payroll.exe</strong></p></td>

<td><p>All files named <strong>payroll.exe</strong> anywhere in the container file system</p></td>
</tr><tr>
<td><p><strong>payroll??.exe</strong></p></td>

<td><p>All files named <strong>payroll??.exe</strong> anywhere in the container file system, where <strong>??</strong> means any two characters (exactly)</p></td>
</tr><tr>
<td><p><strong>/usr/lib/Dept0?/Prod<em>/</em></strong></p></td>

<td><p>All files under any path under <strong>usr/lib/</strong>, whose: 
- third path level is <strong>Dept0?</strong> (where <strong>?</strong> means any single character)
- fourth path level is <strong>Prod</strong><em> (where </em>**** means any string of characters)</p></td>
</tr></table>

### Read-Only Directories and Files

This control includes two sections; this is an example:

<img src="/img/policy/b3537aa-02_6.2_CRP_R-O_Directories_and_Files.png" alt="02 6.2 CRP R-O Directories and Files.png" width="728px" height="408px" />

- **Read-Only Directories and Files:** Enter one or more directories or files you would like Aqua to restrict as read-only. Specifying a directory will also impose the restriction on **all directories and files beneath it**.
- **Exclude List:** Enter one or more directories or files to exclude from monitoring; each should be a subset of the directories or files specified under "Read-Only Directories and Files". Specifying a directory will also cause Aqua to **exclude** restrictions of all directories and files beneath it.

Notes on syntax:

- Directories must be enclosed by slash characters.
- Linux syntax is shown. For Windows hosts, use standard path names, including backslashes. For example: **C:\Users\eliana**
- Directory and file names can include the asterisk as a wildcard character.

In the example shown above, Aqua will prevent write access on:

- The directory **/home/eliana/** and all of its sub-directories and files, with exception of files under **/home/eliana/** whose names start with the string **shmoo**
- All directories under **/usr/local/** whose names start with the string **user-100-**

### Real-time Malware Protection

This control is available only when Advanced Malware Protection license is activated. For more information, refer to Advanced Malware Protection.

This control allows you to enter specific files or directories and processes to get excluded while scanning containers for the malware. Specification of all information is optional unless otherwise indicated. You can configure the following options in this control:

<table><tr><th>Section</th><th>Description</th></tr><tr>
<td><p>Excluded Paths</p></td>

<td><p>Enter one or more directories and/or files that you want Aqua to exclude while scanning containers for the malware. Path names can include an asterisk as a wildcard character. For example, <em>HKEY_LOCAL_MACHINE\SOFTWARE</em><em> will cause excluding of all sub-paths under </em>HKEY_LOCAL_MACHINE\SOFTWARE*. Without the asterisk, exclusion will apply only to the named directory itself.</p>
<p>If you do not specify the path, all the directories in the containers will be scanned to find malware.</p></td>
</tr><tr>
<td><p>Excluded Processes</p></td>

<td><p>Some processes may have malware. This option protects containers from attempted changes made by the specifically named processes in this text box. Enter the process name(s), example. <strong>regedit.exe</strong>. Processes that are entered in the text box will be excluded from scanning for malware. If you leave this section empty, all processes in the containers will be allowed, considering they do not have any malware.</p></td>
</tr><tr>
<td><p>Action for Malware Files</p></td>

<td><p>In this option, you can select one of the following:
* Alert
* Block
* Delete</p>
<hr class='hr-table'/>

<p>Selecting this option defines the action that will be applied on the malware files which are found while scanning the containers.</p>
<hr class='hr-table'/>

<p>This option depends on the selection of Enforcement Mode: Audit or Enforce. The Alert option alone appears when the enforcement mode is selected as Audit in the control. All three options appear when the enforcement mode is selected as Enforce.</p>
<hr class='hr-table'/>

<p>Following are the actions executed after selecting the respective option:
* <strong>Alert</strong>: audit logs on finding malware files will be sent to the <strong>Security Reports &gt; Audit</strong> page
* <strong>Block</strong>: malware files will be blocked from execution
* <strong>Delete</strong>: malware files will be deleted from the containers permanently.</p></td>
</tr></table>

#### Notes on wildcard syntax

- Directory path names must start and end with a slash character; file path names start with a slash, but do not end with one.
- If a directory path name ends with a slash and an asterisk, Aqua will exclude all directories and files beneath the directory specified, while scanning for malware.
- Directory and file names can include an asterisk as a wildcard character.
- Syntax is shown in the example below. For Windows hosts, use standard path names, including backslashes. For example: _C:\Users\johndoe_.

Refer to the [Wildcard syntax](#section-wildcard-syntax) section for more information on the wildcard syntax that can be used in the exclude paths and processes.

#### Example

Following is the sample options added to the "Real-time Malware Protection" control.

<img src="/img/policy/6c1c420-11_6.5_Real-time_malware_protection_control.png" alt="11 6.5 Real-time malware protection control.png" width="1654px" height="961px" />

## vShield support

Container Runtime Policies generated for <a href="/">Vulnerability Shields (vShields) (TODO: "SaaS-apply-and-manage-vulnerability-shields-vshields" >)</a> depend on these controls:

- Executables Blocked
- File Block
- Package Block
- Port Block

## IBM Power10 support

The Aqua Enforcer supports OpenShift running on [IBM Power10](https://www.ibm.com/it-infrastructure/power/power10) systems with the ppc64le architecture. This support is limited to these controls:

- Drift Prevention
- File Integrity Monitoring
