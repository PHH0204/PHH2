// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#FFFF00'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' ,// 默认为直线，可选为：'line' | 'shadow'
      }
    },
    
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '15%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ['2001年', '2002年', '2003年', '2004年', 
      '2005年', '2006年', '2007年', '2008年', '2009年', '2010年',
       '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', 
       '2017年', '2018年', '2019年', '2020年'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      name:'单位：元',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [
    {
      name: '人均国内生产总值',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data:[8717, 9506, 10666, 12487, 14368,
         16738, 20494, 24100, 26180, 30808, 36277,
          39771, 43497, 46912, 49922, 53783, 59592, 
          65534, 70078, 71828],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#D2691E"];
  // 2.指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' ,// 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: "15%",
      left: '12%',
      right:'0%',
      bottom: '8%',
      // containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ['2001年', '2002年', '2003年', '2004年', 
      '2005年', '2006年', '2007年', '2008年', '2009年', '2010年',
       '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', 
       '2017年', '2018年', '2019年', '2020年'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      name:'单位：元',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    series: [
      {
        name: '城镇人均可支配收入',
        type: 'bar',
        barWidth: '35%',
        color:"#A52A2A",
        // ajax传动态数据
        data:[6824, 7652, 8406, 9335, 10382, 11620, 13603, 15549,
           16901, 18779, 21427, 24127, 26467, 28844, 31195, 33616, 
           36396, 39251, 42359, 43834],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      },
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块1
(function () {
  // 年份对应数据
  var yearData = [{
      year: "城市（1986-2000）", // 年份
      data: [
        // 两个数组是因为有两条线
        [1.6, 1.6, 1.6, 1.6, 1.7, 1.8, 1.8, 1.8, 1.9, 2.1, 2.1, 2.2, 2.3, 2.4, 2.6, 2.8, 2.9],//每千人医生数
      
      ]
    },
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: "15%",
      left: '2%',
      right: '3.8%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: [
        '2004年', '2005年', '2006年', '2007年', '2008年', '2009年', '2010年',
         '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', 
         '2017年', '2018年', '2019年', '2020年'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      name:'单位：人',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#4c9bfb"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '每千人医生数',
        data: yearData[0].data[0]
      },
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换2020 和 2021 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 折线图模块2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));

  // 声明颜色数组
  var myColor = [ "#D2691E"];
  // 2.指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' ,// 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: "15%",
      left: '12%',
      right:'3%',
      bottom: '8%',
      // containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ['2001年', '2002年', '2003年', '2004年', 
      '2005年', '2006年', '2007年', '2008年', '2009年', '2010年',
       '2011年', '2012年', '2013年', '2014年', '2015年'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      name:'单位：元',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    series: [
      {
        name: '农村人均纯收入',
        type: 'bar',
        barWidth: '35%',
        color:"#D2691E",
        // ajax传动态数据
        data:[2366.4, 2475.6, 2622.2, 2936.4, 3254.9, 3587, 
          4140.4, 4760.6, 5153.2, 5919, 6977.3, 7916.6, 8895.9, 
          9892, 10772],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      },
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图1
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置项和数据
  {
    // 年份对应数据
    var yearData = [{
        year: "城镇人均住房建筑面积", // 年份
        data: [
          // 两个数组是因为有两条线
          [20.8, 24.5, 25.3, 26.4, 27.8, 28.5, 30.1, 30.6, 31.3, 31.6, 32.7, 32.9, 36.6, 38.6],//城镇人均住房建筑面积
        ]
      },
    ];
    var option = {
      // 修改两条线的颜色
      color: ['#E77471','#00f2f1' ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top: "0%",
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      grid: {
        top: "15%",
        left: '2%',
        right: '5%',
        bottom: '0%',
        containLabel: true,
        show: true, // 显示边框
        borderColor: '#012f4a' // 边框颜色
      },
      xAxis: {
        type: 'category',
        boundaryGap: false, // 去除轴间距
        data: [
          '2001年', '2002年', '2003年', '2004年', 
          '2005年', '2006年', '2007年', '2008年', '2009年', '2010年',
           '2011年', '2012年',  '2016年', 
            '2020年'],
        // 去除刻度线
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfb" // x轴文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      },
      yAxis: {
        type: 'value',
        name:'单位：m²',
        // 去除刻度线
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfb" // x轴文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#4c9bfb"
          }
        }
      },
      series: [{
          type: 'line',
          smooth: true, // 圆滑的线
          name: '城镇人均住房建筑面积',
          data: yearData[0].data[0]
        },
      ]
    }
    };
  
    myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  // 年份对应数据
  var yearData = [{
    year: "各项数据", // 年份
    data: [
      // 两个数组是因为有两条线
      [40.5, 39.2, 38.1, 38.8, 37.3, 35.5, 35.6, 36.3, 34.3, 33.4, 33.6, 33, 31.2, 31, 30.6, 30.1, 29.3, 28.4, 28.2, 30.2],//恩格尔系数
      [13.3, 15, 17, 19, 21, 22, 23, 23.3, 24.2, 26.5, 26.9, 30, 34.5, 37.5, 40, 42.7, 45.7, 48.1, 51.6, 54.4],//高等教育毛入学率
      [37.66, 39.09, 40.53, 41.76, 42.99, 44.34, 45.89, 46.99, 48.34, 49.95, 51.27, 52.57, 53.73, 54.77, 56.1, 57.35, 58.52, 59.58, 60.6, 63.89],//城镇化率
    ]
  },
]

var option = {
  // 修改两条线的颜色
  color: ['#00FA9A', '#0000FF','#7B68EE'],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: "15%",
    right:"5%",
    textStyle: {
      color: "rgba(255,255,255,.5)",
      fontSize: "12"
    }
  },
  grid: {
    top: "30%",
    left: '2%',
    right: '5%',
    bottom: '0%',
    containLabel: true,
    show: true, // 显示边框
    borderColor: '#012f4a' // 边框颜色
  },
  xAxis: {
    type: 'category',
    boundaryGap: false, // 去除轴间距
    data:['2001年', '2002年', '2003年', '2004年', 
    '2005年', '2006年', '2007年', '2008年', '2009年', '2010年',
     '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', 
     '2017年', '2018年', '2019年', '2020年'],
    // 去除刻度线
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#4c9bfb" // x轴文本颜色
    },
    axisLine: {
      show: false // 去除轴线
    }
  },
  yAxis: {
    type: 'value',
    name:'单位：%',
    // 去除刻度线
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#4c9bfb" // x轴文本颜色
    },
    axisLine: {
      show: false // 去除轴线
    },
    splitLine: {
      lineStyle: {
        color: "#4c9bfb"
      }
    }
  },
  series: [{
      type: 'line',
      smooth: true, // 圆滑的线
      name: '恩格尔系数',
      data: yearData[0].data[0]
    },
    {
      type: 'line',
      smooth: true, // 圆滑的线
      name: '高等教育毛入学率',
      data: yearData[0].data[1]
    },
    {
      type: 'line',
      smooth: true, // 圆滑的线
      name: '城镇化率',
      data: yearData[0].data[2]
    }
  ]
};

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();