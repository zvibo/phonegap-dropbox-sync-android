# PhoneGap Plugin for the Dropbox Sync API (Android Version) #

A PhoneGap plugin for the [Dropbox Sync API](https://www.DropboxSync.com/developers/sync).

Read my blog post [here](http://rossmartindev.blogspot.com/2013/08/phonegap-plugin-for-dropbox-sync-api.html)

Installation
-----------
This plugin is compatible with [PhoneGap 3.0+ CLI](http://docs.phonegap.com/en/3.0.0/guide_cli_index.md.html#The%20Command-line%20Interface_add_features) and [Cordova Plugman](https://github.com/apache/cordova-plugman), here's how to add it using the CLI:

```
cordova plugin add https://github.com/rossmartin/phonegap-dropbox-sync-android.git
```

Use the [Dropbox Apps Console](https://www.dropbox.com/login?cont=https%3A//www.dropbox.com/developers/apps) to create your own Dropbox application.  Add your Dropbox app key to AndroidManifest.xml.  [Add this app key and secret to the DropboxSync.java class that is acquired when installing the plugin](https://github.com/rossmartin/phonegap-dropbox-sync-android/blob/master/src/Android/DropboxSync.java#l45).

Add these 3 JavaScript functions to your app that handle native callbacks:
```
function dropbox_linked() { }
// called from the onActivityResult method in the plugin when linking is successful.
```
```
function dropbox_onSyncStatusChange(status) { }
// called by observer in the plugin when there's a change to the status of background synchronization (download/upload).
// status is a string variable that will be "sync" or "none".
```
```
function dropbox_fileChange() { }
// called by observer in the plugin when a file is changed.
```

[You can see how these native callbacks are used in the sample app provided](https://github.com/rossmartin/phonegap-dropbox-sync-android/blob/master/sample/www/js/app.js#l236).
Usage
-----------
Link to Dropbox:

```
DropboxSync.link();
```

List a Dropbox folder:
```
var dropboxFolderPath = "/"; // root app dir in this case

DropboxSync.listFolder(dropboxFolderPath).done(function(files) {
    // each object in files have properties: path, modifiedTime, size, and isFolder.
});
```

Upload a file to Dropbox:
```
DropboxSync.uploadFile({
    filePath: "file:///storage/sdcard0/DCIM/Camera/SomeVideo.mp4", // required, local URI
    dropboxPath: "/someFolder" // optional, defaults to root ('/')
}).done(function() {
    // dropboxPath is the Dropbox folder you want to upload the file into.
});
```

Upload a folder to Dropbox:
```
DropboxSync.uploadFolder({
    folderPath: "file:///storage/sdcard0", // required
    dropboxPath: "/someFolder", // optional, defaults to root ('/')
    doRecursive: true // optional, defaults to false
}).done(function() {
    // dropboxFolderPath is the Dropbox folder you want to upload the files/folders into.
    // The folder upload can be done recursively by setting doRecursive to true.
});
```

Open a Dropbox file:
```
var filePath = "/foo/bar.jpg";

DropboxSync.openFile(filePath).done(function() {
    // Android device will either open the file with the proper external application
    // installed on your device or ask you which application to use.
});
```

Create a new folder in Dropbox:
```
var folderPath = "/foo/bar";

DropboxSync.createFolder(folderPath).done(function() {
    // Creates a new folder, including parent folders if necessary.
});
```

Delete a file/folder in Dropbox:
```
var filePath = "/foo/bar.json";

DropboxSync.deleteFile(filePath).done(function() {
    // Deletes a file, or recursively deletes a folder.
});
```

Read a file in Dropbox:
```
var filePath = "/foo/bar.json";

DropboxSync.readString(filePath).done(function(result) {
    // Reads the contents of a file (result is a string).
});
```

Get the Base64 decoded string from an image in Dropbox
(use an image from Dropbox in your app):
```
var filePath = "/foobar.jpg";

DropboxSync.getImageBase64String(filePath).done(function(result) {
    $('#image').attr('src', "data:image/jpeg;base64," + result);
    // result is the Base64-encoded string.
});
```

Unlink from Dropbox:

```
DropboxSync.unlink().done(function() {
    // do something here after deferred resolved
});
```

__Note: This plugin requires jQuery 1.5+ for the Deferred Object.__

Updates
-----------
***```3-8-14```***<br>**- Removed use of the "getImageBase64String" & "readString" methods in the sample app.  Now Android device will either open the file with proper external application installed on your device or ask you which application to use.**<br>

***```3-4-14```***<br>**- Added ability to delete files/folders and create new folders in the Dropbox plugin.**<br>
**- Updated sample app UI with Topcoat Effeckts.  Added Topcoat overlay and off screen nav menu with Effeckt CSS that uses webkit animations and transforms.**<br>
**- Added a fix to the viewport in the sample app for Android 4.4 and higher.**

***```2-24-14```***<br>**- Updated sample app to PhoneGap 3.4.0 and added pull to refresh feature on Dropbox list.**

***```2-15-14```***<br>**- Added iScroll 5 and a scroll caching feature to the sample app.**
 
 ***```1-14-14```***<br>**- The sample app is now using handlebars.js, fastclick.js, and pageslider.js**<br>
**- Only 1 view is in the DOM at a time now, this improved performance a lot**<br>
**- The sample app requires API 19 (Android 4.4.2) SDK to build and run.  This is a result of upgrading to PhoneGap 3.3.1**

License
-----------
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
