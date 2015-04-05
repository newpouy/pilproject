
$(function() {
    Morris.Bar({
        element: 'my-bar-chart',
        data: [{
            y: '태임',
            a: 1
        }, {
            y: '예원',
            a: 1
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['짱짱걸'],
        hideHover: 'auto',
        resize: true,
        barColors: function (row, series, type) {
            if (row.x == 0) { 
              return '#d9534f';
            }
            else {
              return '#337ab7';
            }
        }
    });

    Morris.Donut({
        element: 'my-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });
});
