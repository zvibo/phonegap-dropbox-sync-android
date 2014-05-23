var pluginName = "DropboxSync",
    exec = cordova.require("cordova/exec");
    
function DropboxSync() {
}

DropboxSync.prototype.link = function() {
    var deferred = $.Deferred();
    exec(
        function(result) {
            setTimeout(function() {
                deferred.resolve(result);
            }, 1000);
        },
        function(error) {
            deferred.reject(error);
        },
        pluginName, "link", [""]);
    return deferred.promise();
};

DropboxSync.prototype.checkLink = function() {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject(error);
        },
        pluginName, "checkLink", [""]);
    return deferred.promise();
};

DropboxSync.prototype.unlink = function() {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject(error);
        },
        pluginName, "unlink", [""]);
    return deferred.promise();
};

DropboxSync.prototype.listFolder = function(dropboxPath) {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject(error);
        },
        pluginName, "listFolder", [dropboxPath]);
    return deferred.promise();
};

DropboxSync.prototype.addObserver = function(dropboxPath) {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject(error);
        },
        pluginName, "addObserver", [dropboxPath]);
    return deferred.promise();
};

DropboxSync.prototype.getImageBase64String = function(dropboxFilePath) {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject();
        },
        pluginName, "getImageBase64String", [dropboxFilePath]);
    return deferred.promise();
};

DropboxSync.prototype.readString = function(dropboxFilePath) {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject();
        },
        pluginName, "readString", [dropboxFilePath]);
    return deferred.promise();
};

DropboxSync.prototype.uploadFile = function(options) {
    var deferred = $.Deferred(),
        defaults = {
            dropboxPath: '/'
        }, 
        options = $.extend({}, defaults, options);
    if (! options.filePath) {
        alert('Specify local file path for upload.');
        return deferred.reject();
    }
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject();
        },
        pluginName, "uploadFile", 
        [options.filePath, options.dropboxPath]
    );
    return deferred.promise();
};

DropboxSync.prototype.uploadFolder = function(options) {
    var deferred = $.Deferred(),
        defaults = {
            dropboxPath: '/',
            doRecursive: false
        }, 
        options = $.extend({}, defaults, options);
    if (! options.folderPath) {
        alert('Specify local folder path for upload.');
        return deferred.reject();
    }
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject();
        },
        pluginName, "uploadFolder", 
        [options.folderPath, options.dropboxPath, options.doRecursive]
    );
    return deferred.promise();
};

DropboxSync.prototype.deleteFile = function(dropboxFilePath) {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject();
        },
        pluginName, "deleteFile", [dropboxFilePath]);
    return deferred.promise();
};

DropboxSync.prototype.createFolder = function(dropboxFilePath) {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject();
        },
        pluginName, "createFolder", [dropboxFilePath]);
    return deferred.promise();
};

DropboxSync.prototype.openFile = function(dropboxFilePath) {
    var deferred = $.Deferred();
    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(error) {
            deferred.reject();
        },
        pluginName, "openFile", [dropboxFilePath]);
    return deferred.promise();
};

module.exports = new DropboxSync();