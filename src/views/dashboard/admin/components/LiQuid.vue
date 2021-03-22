<template>
  <div class="wrapper">
    <div class="inner">
      <div id="chart" class="chart" />
      <div class="btm" />
    </div>
    <div class="inner">
      <div id="chart1" class="chart" />
    </div>
  </div>
</template>

<script>
  import { format } from 'path'
  export default {
    data() {
      return {}
    },
    mounted() {
      this.drawChart()
      // this.ciyun()    需要安装vue-wordCloud插件
    },
    methods: {
      drawChart() {
        // 基于准备好的dom，初始化echarts实例
        const chart = this.$echarts.init(document.getElementById('chart'))
        // 监听屏幕变化自动缩放图表
        window.addEventListener('resize', function () {
          chart.resize()
        })
        // 绘制图表
        chart.setOption({
          // 图表主标题
          // title: {
          //   text: '全国就业率', // 主标题文本，支持使用 \n 换行
          //   top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
          //   left: 'center', // 值: 'left', 'center', 'right' 同上
          //   textStyle: { // 文本样式
          //     fontSize: 30,
          //     fontWeight: 600,
          //     color: '#fff'
          //   }
          // },
          // 提示框组件
          tooltip: {
            trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            textStyle: {
              color: '#fff', // 文字颜色
            },
            // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
            // 水球图: {a}（系列名称），{b}（无），{c}（数值）
            // 使用函数模板   传入的数据值 -> value: number|Array,
            formatter: function (value) {
              return value.seriesName + ': ' + value.data * 100 + '%'
            },
          },
          series: [
            {
              type: 'liquidFill',
              name: '全国就业率', // 系列名称，用于tooltip的显示，legend 的图例筛选
              radius: '62%', // 水球图的半径
              center: ['50%', '60%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
              // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形
              // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
              shape: 'circle',
              phase: 0, // 波的相位弧度 不设置  默认自动
              direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
              outline: {
                show: true,
                borderDistance: 0, // 边框线与图表的距离 数字
                itemStyle: {
                  opacity: 1, // 边框的透明度   默认为 1
                  borderWidth: 1, // 边框的宽度
                  shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
                  shadowColor: '#fff', // 边框的阴影颜色,
                  borderColor: '#41dcd8', // 边框颜色
                },
              },
              // 图形样式
              itemStyle: {
                color: 'red', // 水球显示的背景颜色
                opacity: 0.5, // 波浪的透明度
                shadowBlur: 10, // 波浪的阴影范围
              },
              backgroundStyle: {
                color: '#407bf3', // 水球未到的背景颜色
                opacity: 0.5,
              },
              // 图形的高亮样式
              emphasis: {
                itemStyle: {
                  opacity: 0.8, // 鼠标经过波浪颜色的透明度
                },
              },
              // 图形上的文本标签
              label: {
                normal: {
                  formatter(value) {
                    return value.seriesName + ':' + value.data * 100 + '%'
                  },
                  textStyle: {
                    fontSize: 28,
                  },
                },
              },
              data: [0.6, 0.5, 0.3], // 系列中的数据内容数组
            },
          ],
        })
      },
      ciyun() {
        const chart = this.$echarts.init(document.getElementById('chart1'))
        // 监听屏幕变化自动缩放图表
        window.addEventListener('resize', function () {
          chart1.resize()
        })
        chart.setOption({
          backgroundColor: '#031739',
          tooltip: {
            show: true,
            textStyle: {
              fontSize: '16',
              color: '#3c3c3c',
            },
            backgroundColor: '#fff',
            borderColor: '#ddd',
            borderWidth: 1,
          },
          series: [
            {
              name: '积分排行',
              type: 'wordCloud',
              gridSize: 20,
              sizeRange: [12, 50],
              rotationRange: [0, 0],
              shape: 'circle',
              autoSize: {
                enable: true,
                minSize: 18,
              },
              data: [
                {
                  name: '供应商01',
                  value: 200,
                  textStyle: {
                    normal: {
                      color: '#ffe400',
                    },
                  },
                },
                {
                  name: '供应商02',
                  value: 181,
                  textStyle: {
                    normal: {
                      color: '#29a8ed',
                    },
                  },
                },
                {
                  name: '供应商03',
                  value: 386,
                  textStyle: {
                    normal: {
                      color: '#634fd4',
                    },
                  },
                },
                {
                  name: '供应商04',
                  value: 155,
                  textStyle: {
                    normal: {
                      color: '#ffe400',
                    },
                  },
                },
                {
                  name: '供应商05',
                  value: 467,
                  textStyle: {
                    normal: {
                      color: '#634fd4',
                    },
                  },
                },
                {
                  name: '供应商06',
                  value: 244,
                  textStyle: {
                    normal: {
                      color: '#634fd4',
                    },
                  },
                },
                {
                  name: '供应商07',
                  value: 898,
                  textStyle: {
                    normal: {
                      color: '#e75a46',
                    },
                  },
                },
                {
                  name: '供应商08',
                  value: 484,
                  textStyle: {
                    normal: {
                      color: '#e75a46',
                    },
                  },
                },
                {
                  name: '供应商09',
                  value: 112,
                  textStyle: {
                    normal: {
                      color: '#29a8ed',
                    },
                  },
                },
                {
                  name: '供应商10',
                  value: 465,
                  textStyle: {
                    normal: {
                      color: '#ffe400',
                    },
                  },
                },
                {
                  name: '供应商11',
                  value: 447,
                  textStyle: {
                    normal: {
                      color: '#29a8ed',
                    },
                  },
                },
                {
                  name: '供应商12',
                  value: 582,
                  textStyle: {
                    normal: {
                      color: '#29a8ed',
                    },
                  },
                },
                {
                  name: '供应商13',
                  value: 555,
                  textStyle: {
                    normal: {
                      color: '#634fd4',
                    },
                  },
                },
                {
                  name: '供应商14',
                  value: 550,
                  textStyle: {
                    normal: {
                      color: '#29a8ed',
                    },
                  },
                },
                {
                  name: '供应商15',
                  value: 462,
                  textStyle: {
                    normal: {
                      color: '#29a8ed',
                    },
                  },
                },
                {
                  name: '供应商16',
                  value: 366,
                  textStyle: {
                    normal: {
                      color: '#29a8ed',
                    },
                  },
                },
                {
                  name: '供应商17',
                  value: 360,
                  textStyle: {
                    normal: {
                      color: '#634fd4',
                    },
                  },
                },
                {
                  name: '供应商18',
                  value: 282,
                  textStyle: {
                    normal: {
                      color: '#e75a46',
                    },
                  },
                },
                {
                  name: '供应商19',
                  value: 273,
                  textStyle: {
                    normal: {
                      color: '#29a8ed',
                    },
                  },
                },
                {
                  name: '供应商20',
                  value: 265,
                  textStyle: {
                    normal: {
                      color: '#ffe400',
                    },
                  },
                },
                {
                  name: '供应商21',
                  value: 265,
                  textStyle: {
                    normal: {
                      color: '#634fd4',
                    },
                  },
                },
                {
                  name: '供应商22',
                  value: 265,
                  textStyle: {
                    normal: {
                      color: '#634fd4',
                    },
                  },
                },
              ],
            },
          ],
        })
      },
    },
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
  }
  .wrapper .inner {
    position: relative;
    width: 50%;
    height: 500px;
    margin: 100px 50px 0;
    /* background: url(../../../../imgages/shuibo1.png) no-repeat; */
    background-size: 100% 100%;
    border: 1px solid #eeeeee;
  }
  .wrapper .inner .chart {
    width: 400px;
    height: 400px;
    margin: 10px auto 0;
    /* background: url(../../../../imgages/shuibo2.gif) no-repeat center bottom; */
    background-size: 80% 80%;
  }
  .wrapper .inner .btm {
    width: 320px;
    height: 25px;
    margin: 0 auto;
    /* background: url(../../../../imgages/shuibo3.png) no-repeat; */
    background-size: 100% 100%;
  }
</style>
