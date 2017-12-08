angular.module('Sensors')
    .controller('DevicesController', function ($scope, $http, cfg, NgMap) {
        $scope.message = "I'm Device."
        var dc = this;
        dc.image = {
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            size: [20, 32],
            origin: [0, 0],
            anchor: [0, 32]
        };

        dc.shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
        };

        dc.positions = [
            ['SADFWE5', 39.990981, -75.576952, 4],
            ['CZXCWQW4', 39.990694, -75.578626, 5],
            ['VDFRTh3', 39.990127, -75.581641, 3],
            ['ASDWE2', 39.989724, -75.584108, 2],
            ['QWEASD1', 39.989280, -75.586576, 1]
        ];

        dc.click = function(event){
            console.log('yo', this);
        }

        dc.labels = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
        dc.series = ['Red Sensor', 'Trident Sensor','Contigo Sensor', 'Upper Limit', 'Lower Limit'];
        dc.data = [
            [2.5, 2.6, 1.8, 1.5, 3, 2.8, 1.4, 2.5, 2.6, 1.8, 1.5, 3, 2.8, 1.4],
            [4, 3.7, 3.8, 2, 2.5, 1.7, 2.4, 4, 3.7, 3.8, 2, 2.5, 1.7, 2.4],
            [4, 3, 5, 2, 3, 20, 2, 4, 3, 5, 2, 3, 10, 2],
            Array.apply(null, new Array(14)).map(Number.prototype.valueOf, 5.5),
            Array.apply(null, new Array(14)).map(Number.prototype.valueOf, -0.5),
        ];
        dc.onClick = function (points, evt) {
            console.log(points, evt);
        };
        dc.colors = [
            {
                borderColor: "Blue",
                backgroundColor: "rgba(0, 0, 0, 0)",
                //fill: true,
            },
            {
                borderDash: [10, 5],
                borderColor: "#4D5360",
                backgroundColor: "rgba(0, 0, 0, 0)",
            },
            {
                borderColor: "green",
                backgroundColor: "rgba(0, 0, 0, 0)",
            },
            {
                borderColor: "Red",
                backgroundColor: "rgba(0, 0, 0, 0)",
            },
            {
                borderColor: "Red",
                backgroundColor: "rgba(0, 0, 0, 0)",
            }
           
        ];

        dc.datasetOverride = [/*{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }*/
            //{
            //    //label:'Red Sensor',
            //    //borderDash: [10, 5]
            //},
            //{
            //    //label: 'Trident Sensor',
            //    //borderDash: [10, 5]
            //},
            //{
            //    //label: 'Contigo Sensor',
            //    //borderDash: [10, 5]
            //}


        ];
        dc.options = {
            legend: { display: true },

            title: {
                display: false,
                text: 'Sensors Data',
                position: 'top',
            },

            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time (Hours)'
                    }
                }],
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            suggestedMin: 0 ,
                            suggestedMax: 7
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'X-Axis Angle (Degrees)'
                        }
                    }
                ]
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
        };

    });