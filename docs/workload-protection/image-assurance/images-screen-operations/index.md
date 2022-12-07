---
title: "Images Screen: Operations"
slug: images-screen-operations
collapsible: true
position: 11
---

## Effects of RBAC

As influenced by <a href="/">Multi-Application Resource-Based Access Control (RBAC) (TODO: "SaaS-AM-rbac-overview")</a>:

- The Images screen is available to users whose <a href="/">permission set (TODO: "SaaS-AM-permission-sets")</a> includes Assets / Images. Edit (as opposed to View Only) permission is required for operations such as adding or deleting images.
- The logged-in user's <a href="/">application scope (TODO: "SaaS-AM-application-scopes")</a> determines the images listed on the screen.

## Overview

When you select **Images** from the main menu of the Aqua UI, you will see a screen like this:

<img src="/img/638f126-01_2022.4_Images_screen_-_UI_example.png" alt="01 2022.4 Images screen - UI example.png" width="1720px" height="907px" />

:::info

Cloud Foundry (CF) applications appear as images on this screen. Unless otherwise specified, the word **image** refers to both container images and CF applications.

:::

The screen is organized as described below. Follow the embedded links for detailed descriptions.

# Tabs

## General

This is the main display of the Images screen. This tab lists all (or selected) images that have been registered with Aqua, grouped by repository. The contents of the Images screen will depend largely on the number and kinds of repositories and images you have added to Aqua and the results of scanning those images.

In addition, the Images screen shows only the images within the scope of the <a href="/">role (TODO: "SaaS-AM-roles")</a> of the logged-in user.

From this tab, you can:

- Obtain summary and detailed information on the status of security issues found during scanning of these images
- Filter this list by <a href="/">one of your application scopes (TODO: "SaaS-AM-application-scopes")</a>
- Perform operations related to <a href="/">reactive risk management (TODO: "SaaS-reactive-risk-management")</a>:
- <a href="/">Apply and manage security issue acknowledgments (TODO: "SaaS-apply-and-manage-security-issue-acknowledgments")</a>
- <a href="/">Allow and block images (TODO: "SaaS-allow-and-block-images")</a>
- <a href="/">Add images to a repository (TODO: "SaaS-repository-operations#section-add-register-images-to-aqua")</a>
- <a href="/">Delete a repository (TODO: "SaaS-repository-operations#section-delete-a-repository")</a>
- <a href="/">Add images to Aqua (TODO: "SaaS-view-list-of-repositories-and-images#section-add-images")</a>

See <a href="/">View Repositories and Images (General tab) (TODO: "SaaS-view-list-of-repositories-and-images")</a> for details.

## Scan Queue

Aqua maintains a queue of images awaiting scanning. See <a href="/">Scan Queue (tab) (TODO: "SaaS-scan-queue" )</a> for further information.

## Host Images

:::info

RBAC: Access to this tab also requires users to have the permission set Compliance / Host Images.

:::

This tab lists the host images that you can register with Aqua. See <a href="/">Host Images (tab) (TODO: "SaaS-host-images-tab")</a>.

## CI/CD Scans

Aqua scanning can be integrated with several types of third-party CI/CD systems (development tools). This tab shows images that have been scanned, or are awaiting scanning. See <a href="/">CI/CD Scans (tab) (TODO: "SaaS-cicd-scans")</a>.

## Acknowledgements

This tab lists all security issues that have been acknowledged. See <a href="/">Acknowledgements (tab) (TODO: "SaaS-acknowledgements")</a>.

# Other controls

These controls appear in the upper right part of the screen:

<img src="/img/cdd7765-02_2022.4_Images_screen_-_other_controls.png" alt="02 2022.4 Images screen - other controls.png" width="272px" height="184px"/>

- Refresh: Click the <img src="https://files.readme.io/99ee3d5-Refresh.svg" width="15"/> button to refresh the contents of any tab in the Images screen.
- Add Images: See <a href="/">this page (TODO: "SaaS-view-list-of-repositories-and-images#section-add-images")</a> for information.
- Import Images: Click the <img src="https://files.readme.io/81c385f-Import.svg" width="15"/> control to initiate the import of images to Aqua. See <a href="/">Export, Import, and Delete Images (TODO: "SaaS-export-import-and-delete-images")</a>.
- Image Compliance Report: Click the <img src="https://files.readme.io/2455a56-Expor__to_PDF.svg" width="15"/> control to initiate generating this report; see <a href="">Image Compliance Report (TODO: "SaaS-image-compliance-report")</a>.
