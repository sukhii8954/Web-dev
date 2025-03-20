$(function(){
    function  adjustPanelWidth() {
        let containerWidth = $('.split-container').width();
        let panelWidth = containerWidth/2;

        $('.panel-left').width(panelWidth);
        $('.panel-right').width(panelWidth);
    }

    adjustPanelWidth();

    $(window).resize(adjustPanelWidth);
})

