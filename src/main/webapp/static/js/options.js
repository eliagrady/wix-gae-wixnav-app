/**
 * Created by Elia on 11/07/2015.
 */
var settings = settings || {};
settings.user_info = settings.user_info || {};

function save_options() {
    var settings = settings || {};

    chrome.storage.sync.set(settings,
        function() {
            //Callback after save
            console.log("Settings saved");
        });

}

function restore_options() {
    chrome.storage.sync.get({}, function(items) {
        console.log("Got items:",items);
    });
}