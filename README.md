**What it does:**
**Catalog Viewer** is a powerful and flexible app designed to bring your digital content directly to your iPhone or iPad anytime, anywhere, even without an internet connection.

With Catalog Viewer, you can download and store websites packaged in .zip format from an online repository—no authentication required. 

Once downloaded, your content is instantly accessible offline, ensuring a smooth and reliable viewing experience wherever you are.

Originally conceived as a modern alternative to now subscription-based solutions like Adobe DPS and Twixl, Catalog Viewer is ideal for businesses, designers, and publishers looking for a cost-effective way to distribute interactive digital catalogs.

Whether you are working with HTML websites or exporting stunning presentations from InDesign in HTML5 format, Catalog Viewer delivers excellent performance and compatibility. 
It is especially powerful when used alongside the in5 extension by Ajar Productions*, enabling you to transform your InDesign layouts into fully interactive digital experiences.

**Key Features:**

* Download and store .zip-packaged websites locally on your device
* Fully offline access to your catalogs and presentations
* No login or authentication required for content access
* Optimized for HTML5 content, including InDesign exports
* Ideal replacement for costly digital publishing platforms
* Smooth and responsive viewing experience on iPhone and iPad

Catalog Viewer gives you full control over your digital publishing workflow—simple, efficient, and accessible.

Transform your content into a portable, offline-ready experience with Catalog Viewer.

How to use the App:
To download the sites locally, you can proceed in two ways:
1.
Save the site(s) in .zip format in a repository that doesn't require authentication and edit a json file pointing to the site URLs like this:

[
    {
        "id": "UniqueID",
        "name": "the name of the presetation",
        "version": "1.0",
        "zipUrl": "https://URL_TO_THE_ZIP_FILE",
        "thumbnail": "https://URL_TO_THE_THUMBANIL(optional)",
        "fileSize": 5488344,
        "updatedAt": "2026-04-14"
    }
]

Save the .json in a free repository too, then enter the URL to the JSON file in the app settings:

<img width="300" height="566" alt="viewer_settings01" src="https://github.com/user-attachments/assets/f33cc317-bd9e-441d-ba1a-f73890a51c63" />

Using a Json file with correct id and version let you manage the update of the same site.

2.
Share the .zip file via email using the form found here: https://areatestrepository.github.io/html5catalogs/link-generator.html. 
Once generated the link you can edit and modify the message and copy and paste it in your preferred mail client.

ALERT:
*in5 Ajar Productions

Exporting to HTML5 using the in5 extension works perfectly for all multimedia content, but if you use buttons that start videos in fullscreen mode you need to take these precautions: 

add 2 files (video.css and in5-fix-ipad.js) in the "in5 -> Export HTML5 with in5 -> Resources" menu and flag Append to Exiting for both.

<img width="400" height="327" alt="in5_panel01" src="https://github.com/user-attachments/assets/30bb039c-bfac-4b15-bb6a-6a2df1b681c2" />


You can find the 2 files to download in this repository

2) The videos must not be hidden under the buttons but must be left above by setting the opacity to 0.5%.
 
<img width="400" height="244" alt="inDesign_settings01" src="https://github.com/user-attachments/assets/98757b42-61e3-4c7c-bbf4-8ae0cbea43b1" />

This operation is necessary due to how WebKit manages the "User Gesture" on iPadOS devices.




