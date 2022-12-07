---
title: "Allow and Block Images"
slug: "allow-and-block-images"
date: "2019-06-20T15:55:19.521Z"
position: 17
---

## Introduction

As explained in <a href="/">Reactive Risk Management (TODO: "SaaS-reactive-risk-management")</a>, you can allow or block an image. You can also remove images from the respective lists of allowed and blocked images.

While the processes related to allowing and blocking images are quite similar, each is explained separately.

:::caution

These actions were called "Whitelist" and "Blacklist", respectively, in earlier versions of Aqua CSP.

:::

# Allow

## Allow image(s)

1. Select one or more images, as described in <a href="/">View the List of Repositories and Images (Select images for further actions) (TODO: "SaaS-view-list-of-repositories-and-images#section-select-images-for-further-actions")</a>. Once you have made your selection, the **Allow** action (and others) will appear for application to the images selected.

:::info

You can select any image for allowing, whether non-compliant, compliant, blocked, or already allowed. Since you will probably be allowing non-compliant images, it might be helpful to filter the list to show only repositories with non-compliant images; this was done before the following screenshot was taken.

:::

<img src="/img/c319e58-01_5.3_Allow_images_selection.png" alt="01 5.3 Allow images selection.png" width="1719px" height="800px" />

2. Click the **Allow** action.
3. Add a comment to the Warning box (required) and click **OK**. The mention "(allowed)" will appear next to the names of the image(s) you have allowed.

<img src="/img/11b5960-02_5.3_Allow_images_done.png" alt="02 5.3 Allow images done.png" width="1731px" height="789px" />

Allowing an image is recorded as an audit event. It is visible either in the <a href="/">Audit tab (TODO: "SaaS-audit-tab")</a> of the image, or in the <a href="/">Audit (TODO: "SaaS-view-audit-events")</a> screen of the UI, as shown here:

<img src="/img/ece0a4f-03_5.3_Allow_images_audit_events.png" alt="03 5.3 Allow images audit events.png" width="1248px" height="244px" />

## Remove image(s) from the list of allowed images

All allowed images appear in the "Allowed Images" control of the Default Image Assurance Policy.

1. Open the <a href="/">Default Image Assurance Policy (TODO: "SaaS-image-assurance-policies-basic-info#section-the-default-policy")</a>.
2. In the "Images Allowed" control, remove an image by clicking the blue dot on the right side of its row. Repeat this for each image you want to remove from the list of allowed images.

<img src="/img/7543cff-04_5.3_Allow_images_removal.png" alt="04 5.3 Allow images removal.png" width="644px" height="263px" />

3. Click **Save** to save the changes to the Default Image Assurance Policy (otherwise, the image(s) will remain in the list of allowed images).

# Block

## Block image(s)

1. Select one or more images, as described in <a href="/">View the List of Repositories and Images (Select images for further actions) (TODO: "SaaS-view-list-of-repositories-and-images#section-select-images-for-further-actions")</a>. Once you have made your selection, the **Block** action (and others) will appear for application to the images selected.

:::info

You can select any image for blocking, whether compliant, non-compliant, allowed, or already blocked.

:::

<img src="/img/5fb235e-11_5.3_Block_images_selection.png" alt="11 5.3 Block images selection.png" width="1723px" height="640px" />

2. Click the **Block** action.
3. Add a comment to the Warning box (required) and click **OK**. The mention <span style={{color: '#FF0000'}}>(blocked)</span> will appear next to the names of the image(s) you have blocked.

<img src="/img/759ac37-12_5.3_Block_images_done.png" alt="12 5.3 Block images done.png" width="1726px" height="640px" />

Blocking an image is recorded as an audit event. It is visible either in the <a href="/">Audit tab (TODO: "SaaS-audit-tab")</a> of the image (as shown here), or in the <a href="/">Audit (TODO: "SaaS-view-audit-events")</a> screen of the UI:

<img src="/img/7bb676a-13_5.3_Block_images_audit_event.png" alt="13 5.3 Block images audit event.png" width="1218px" height="71px" />

## Remove image(s) from the list of blocked images

All blocked images will appear in the **Blocked Images** control of the Default Image Assurance Policy.

1. Open the <a href="/">Default Image Assurance Policy (TODO: "SaaS-image-assurance-policies-basic-info#section-the-default-policy")</a> for editing (refer to <a href="/">Image Assurance Policy Operations (TODO: "SaaS-image-assurance-policies-operations")</a>).
2. In the "Images Blocked" control, remove an image by clicking the blue dot on the right side of its row. Repeat this for each image you want to remove from the list of blocked images.

<img src="/img/054db92-14_5.3_Block_images_removal.png" alt="14 5.3 Block images removal.png" width="641px" height="236px" />

3. Click **Save** to save the changes to the Default Image Assurance Policy (otherwise, the image(s) will remain in the list of blocked images).
