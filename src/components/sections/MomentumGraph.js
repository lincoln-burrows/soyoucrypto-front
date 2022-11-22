import React, { Component } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col, Label } from 'reactstrap';
import "../../App.css";
import "../css/Momentum.css";
import Button from "../assets/Button.js";
import Button3 from "../assets/Button3";
import App from "../../App";
import { connect } from "react-redux";

class MomentumGraph extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
  
  extractDataToList = (arg, data) => {
    const res = [];
    
    for (let i in data) {
      let time = data[i].time.toString().replace(/-/g,'');
      if (arg==="cum_return_ma") {
      let value = data[i].cum_return_ma;
        res.push([new Date(time.slice(0,4), time.slice(4,6)-1, time.slice(6,8)), value]);
      } else if (arg==="cum_return_btc"){
        let value = data[i].cum_return_btc;
        res.push([new Date(time.slice(0,4), time.slice(4,6)-1, time.slice(6,8)), value]);
      }
      }
    return res;
  };

  

  componentDidMount = () => {
    document.title = "SOYOU CRYPTO";
    
  };

  render() {
    const { momentumData } = this.props.momentumData;
    const momentum_algo = this.extractDataToList("cum_return_ma", momentumData);
    const btc_usdt = this.extractDataToList("cum_return_btc", momentumData);
    const data = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            formatter: function (params) {

              if (
                params?.seriesData[0]?.data[0] !== undefined &&
                params?.seriesData.length > 0
              ) {
                return params.seriesData[0]?.data[0]
                  ?.toISOString()
                  .split("T")[0];
              } else {
                return Math.round(params.value * 10000) / 100 + " %";
              }
            }
            }
          }
        },
      legend: {
        data: ["Momentum Algo.", "BTC_USDT Hodl"],
        padding:[1, 0, 10, 0,],
        textStyle: {
          fontSize: 14
        },
      
        itemStyle: {
          borderType:"solid",
        }
      },
      grid: {
        left: "1%",
        right: "4%",
        bottom: "3%",
        top: "15%",
        containLabel: true
      },
      xAxis: {
        type: "time",
        show: true,
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "#6E7078"
          }
        },
        splitNumber: 5,
        axisLabel: {
          color: "#9396a4",
          fontSize:16,
          rotate: 0,
          interval: 200,
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#9396a4",
          inside: false,
          fontSize:16,
          formatter: value => value*100 + ' %'
        },
      },
      notMerge:true,
      series: [
        {
          name: "Momentum Algo.",
          type: "line",
          smooth: true,
          data: momentum_algo,
          symbol: "none",
          color: "#000000",
          lineStyle:{
            normal: {width: 4},
          },
          tooltip: {
            valueFormatter: value => Math.round(value*10000)/100 +' %'
          },

        },
        {
          name: "BTC_USDT Hodl",
          type: "line",
          smooth: true,
          data: btc_usdt,
          symbol: "none",
          color: "#b2b2b2",
          lineStyle:{
            normal: {width: 3},
          },
          tooltip: {
            valueFormatter: value => Math.round(value*10000)/100 +' %'
          },
        },
        
      ],
    };
    return (
      
      <div>
        <ReactEcharts 
          style={{
            height: "300px",
            // height: "369px",
            // 369
            width: "97%",
            // width: "900px"
          }}
          option={data} 
          notMerge={true}
          lazyUpdate={true}
          
          />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  momentumData : state.momentumData
});

export default connect(mapStateToProps)(MomentumGraph);