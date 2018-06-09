<template>
    <div class="m-t2">
        <h3>echarts</h3>
        <div class="city">
            <label for="beijing">北京</label>
            <input id="beijing" value="beijing" type="radio" name="city"  @click="changeCity" checked/>
            <label for="shanghai">上海</label>
            <input id="shanghai"  value="shanghai" type="radio" name="city" @click="changeCity"/>
        </div>
        <div class="chart" :ref="chartRefName" :style="{width: '100%', height: '300px'}"></div>        
    </div>
</template>
<script>
    import moment from 'moment';
    import WeatherService from '@/services/weather.js';
    import '@/containers/test/t2-echarts/index.scss';

    export default {
        name: 'test2',
        data(){
            return {
                chartRefName: 'weather-chart',
                chartData:[],
                city: 'beijing'
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                this.chartObj = echarts.init(this.$refs[this.chartRefName]);
                this.setChartOption();
                this.setChartSeries();
                this.getChartData();
            },
            changeCity(e){
                this.city = e.target.value;
                this.getChartData();

            },
            getChartData(){
                WeatherService.getWeatcher(this.city).then((data) => {
                    this.chartData = (data && data.result) || []
                    this.updateSerieData();
                }, (error) => {
                    console.log('get weacher error: ', error);
                });                
            },
            formatData(data, key) {
                const arr = (!!data && data[key]) || [];
                let result = [];
                arr.map((d) => {
                    result.push([new Date(d.x), d.y]);
                });
                return result;
            },            
            updateSerieData() {
                let series = this.chartObj.getOption().series;
                let newSeriesData = [];
                let dataKeys = Object.keys(this.chartData);
                for (let i = 0; i < dataKeys.length; i++) {
                    newSeriesData.push({
                        ...series[i],
                        data: this.formatData(this.chartData, dataKeys[i])
                    })
                }
                this.chartObj.setOption({
                    series: newSeriesData
                });
            },              
            setChartOption() {                
                const options = {
                    // 图例 不同颜色曲线对应的含义
                    legend: { show: true, x: 'center', y: 'bottom', data: ['温度', '湿度']},
                    // 设置canvas的边距
                    grid:{ x:'80px',y:'50px',x2:'80px',y2:'50px'},
                    // hover显示的面板
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        borderColor: 'rgb(124, 181, 236)',
                        borderRadius: 8,
                        borderWidth: 1,
                        textStyle: {color: '#000'},
                        padding: 10,
                        formatter: function(params) {
                            let xValue = moment(params[0].axisValue).format('YYYY-MM-D HH:mm:ss') + '<br/>';
                            let data = [xValue];
                            let seriesName = null;
                            let yValue = null;
                            params.forEach((item) => {
                                data.push(`<span class="tooltip-color-icon" style="background-color:${item.color}"></span>${item.seriesName}: ${item.value[1]}<br/>`);
                            });
                            return data.join('');
                        }
                    },
                    // x轴
                    xAxis: {
                        type: "time",
                        splitLine: {show: false},
                        splitNumber: 10,
                        axisLabel: {formatter: function(v) {return moment(v).format('YYYY-MM-D HH:mm:ss');}}
                    },
                    // y轴
                    yAxis: [
                        {name: '温度',nameLocation: 'middle',nameGap: 55,type: 'value'},
                        {name: '湿度',nameLocation: 'middle',nameGap: 55,type: 'value'}
                    ]
                };
                // console.log(options);
                this.chartObj.setOption(options);
            },
            setChartSeries() {
                const seriesConfig = {
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    hoverAnimation: false,
                    lineStyle: {normal: {width: 1}}
                };
                let newSeriesConfig = [
                    {...seriesConfig, 
                        name: '温度',
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        },
                    },{...seriesConfig, 
                        name: '湿度',
                        yAxisIndex: 1,                        
                        itemStyle: {
                            normal: {
                                color: 'blue'
                            }
                        },
                    }];

                let seriesOptions = {series: newSeriesConfig};
                // console.log(seriesOptions);
                this.chartObj.setOption(seriesOptions);
            },      
        }
    }
</script>