

// chart options for Chart 1
const chart1Options = {
    chart: {
        marginTop: 50
    },
    // defs: {
    //     gradient0: {
    //         tagName: 'linearGradient',
    //         id: 'gradient-0',
    //         x1: 0,
    //         y1: 0,
    //         x2: 0,
    //         y2: 1,
    //         children: [
    //             {
    //                 tagName: 'stop',
    //                 offset: 0
    //             },
    //             {
    //                 tagName: 'stop',
    //                 offset: 1
    //             }
    //         ]
    //     }
    // },
    credits: {
        enabled: false
    },
    
    title: {
        text: 'Workers by Location'
    },
    // legend: {
    //     enabled: false
    // },
    xAxis: {
        categories: ['Office', 'Remote', 'Flexible']
    },
    yAxis: [
        {
            title: '',
            labels: {
                format: '{value} '
            }
        }
    ],
    series: [
        {
            type: 'areaspline',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-12M',
            data: [110, 100, 230]
        },
        {
            type: 'areaspline',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-6M',
            data: [150, 500, 200]
        },
        {
            type: 'areaspline',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-12Days',
            data: [522, 172, 109]
        },
        {
            type: 'areaspline',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-24Hours',
            data: [132, 412, 203]
        }
    ]
};
  
  // chart options for Chart 2
  const chart2Options = {
    chart: {
        marginTop: 50
    },
    defs: {
        
        gradient0: {
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [
                {
                    tagName: 'stop',
                    offset: 0
                },
                {
                    tagName: 'stop',
                    offset: 1
                }
            ]
        }
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Users By Country in Thousands'
    },
    // legend: {
    //     enabled: false
    // },
    xAxis: {
        categories: ['Jpan', 'USA', 'India', 'Brazil', 'UK', 'China']
    },
    yAxis: [
        {
            title: '',
            labels: {
                format: '{value} k'
            }
        }
    ],
    series: [
        {
            type: 'line',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-12M',
            data: [10, 20, 30, 40, 12, 11]
        },
        {
            type: 'line',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-6M',
            data: [5, 10, 10, 20, 2, 10]
        },
        {
            type: 'line',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-12Days',
            data: [5, 7, 10, 10, 2, 8]
        },
        {
            type: 'line',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-24Hours',
            data: [2, 3, 4, 6, 1, 4]
        }
    ],
    tooltip: {
        enabled: true,
        formatter: function() {
          return '<b>' + this.series.name + '</b><br>' + this.x + ': ' + this.y;
        }
      },
};

 // chart options for Chart 3
 const chart3Options = {
    chart: {
        marginTop: 50
    },
    defs: {
        gradient0: {
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [
                {
                    tagName: 'stop',
                    offset: 0
                },
                {
                    tagName: 'stop',
                    offset: 1
                }
            ]
        }
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Active Users in Thousands'
    },
    // legend: {
    //     enabled: false
    // },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: [
        {
            title: '',
            labels: {
                format: '{value} k'
            }
        }
    ],
    series: [
        {
            type: 'area',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-12M',
            data: [10, 20, 30, 40, 12, 11, 10, 23, 4, 34, 50, 20]
        },
        {
            type: 'area',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-6M',
            data: [5, 10, 10, 20, 2, 10, 5, 20, 4, 24, 20, 15]
        },
        {
            type: 'area',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-12Days',
            data: [5, 7, 10, 10, 2, 8, 3, 13, 2, 14, 16, 9]
        },
        {
            type: 'area',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-24Hours',
            data: [2, 3, 4, 6, 1, 4, 2, 5, 1, 10, 11, 3]
        }
    ]
};
  
// chart options for Chart 3
const chart4Options = {
    chart: {
        marginTop: 50
    },
    defs: {
        gradient0: {
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [
                {
                    tagName: 'stop',
                    offset: 0
                },
                {
                    tagName: 'stop',
                    offset: 1
                }
            ]
        }
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Revenue Generated in millions'
    },
    // legend: {
    //     enabled: false
    // },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: [
        {
            title: '',
            labels: {
                format: '{value} mn'
            }
        }
    ],
    series: [
        {
            type: 'spline',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-12M',
            data: [10, 20, 30, 40, 12, 11, 10, 23, 4, 34, 50, 20]
        },
        {
            type: 'spline',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-6M',
            data: [5, 10, 10, 20, 2, 10, 5, 20, 4, 24, 20, 15]
        },
        {
            type: 'spline',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-12Days',
            data: [5, 7, 10, 10, 2, 8, 3, 13, 2, 14, 16, 9]
        },
        {
            type: 'spline',
            dataLabels: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            name: 'Earnings-24Hours',
            data: [2, 3, 4, 6, 1, 4, 2, 5, 1, 10, 11, 3]
        }
    ]
};
  // Create Chart 1
  const chart1 = Highcharts.chart('chart1', chart1Options);
  
  // Create Chart 2
  const chart2 = Highcharts.chart('chart2', chart2Options);

  // Create Chart 3
  const chart3 = Highcharts.chart('chart3', chart3Options);
  
  // Create Chart 4
  const chart4 = Highcharts.chart('chart4', chart4Options);


  // Add toggle functionality to each toggle button
  document.querySelectorAll('.toggle-button').forEach(function(button) {
    button.addEventListener('click', function() {
      const targetChartId = this.getAttribute('data-target');
      const targetChart = Highcharts.charts.find(chart => chart.renderTo.id === targetChartId);
      
      if (targetChart) {
        targetChart.series.forEach(function(series) {
          series.setVisible(!series.visible, false);
        });
        targetChart.redraw();
      }
    });
  });


  