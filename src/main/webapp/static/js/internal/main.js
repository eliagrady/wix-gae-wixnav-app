var WidgetWidth = {
    expanded: 300,
    hidden: 50
};

if(document) {
    document.addEventListener("DOMContentLoaded", function () {
        var resizeWindow = function (width,onComplete) {
            Wix.getBoundingRectAndOffsets(function(data){
                var height = data.offsets.y + data.rect.height;
                Wix.resizeWindow(width, height, onComplete);
            });
        };

        resizeWindow(WidgetWidth);

        $(window).mouseover(resizeWindow(WidgetWidth.expanded));
        $(window).mouseout(resizeWindow(WidgetWidth.hidden));
    });
}