jQuery(document).ready(function() {

    var current_yyyymm_ = moment().format("YYYYMM");

    $("#pb-calendar").pb_calendar({
        schedule_list: function(callback_, yyyymm_) {
            var temp_schedule_list_ = {};

            temp_schedule_list_[current_yyyymm_ + "03"] = [{
                'ID': 1,
                style: "red"
            }];

            temp_schedule_list_[current_yyyymm_ + "10"] = [{
                'ID': 2,
                style: "red"
            }, {
                'ID': 3,
                style: "blue"
            }, ];

            temp_schedule_list_[current_yyyymm_ + "20"] = [{
                'ID': 4,
                style: "red"
            }, {
                'ID': 5,
                style: "blue"
            }, {
                'ID': 6,
                style: "green"
            }, ];
            callback_(temp_schedule_list_);
        },
        schedule_dot_item_render: function(dot_item_el_, schedule_data_) {
            dot_item_el_.addClass(schedule_data_['style'], true);
            return dot_item_el_;
        }
    });
});









var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();