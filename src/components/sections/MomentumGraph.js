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
      // data2: {},
    };
  }

  // extractDataToList = (arg, data) => {
  //   const res = [];
  //   for (let i in data) {
  //     let item = data[i][arg];
  //     if (arg === "time") {
  //       let i =
  //         "'" + item.toString().slice(2, 10);
  //       res.push(i);
  //     } else {
  //       res.push(parseFloat(data[i][arg]));
  //     }
  //   }
  //   return res;
  // };
  
  extractDataToList = (arg, data) => {
    const res = [];
    console.log("???", data)
    for (let i in data) {
      let time = data[i].time.toString().replace(/-/g,'');
      // let time = data[i].time.replace(/-/g,'');
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
    // const momentumData = JSON.parse(localStorage.getItem("momentumData")) || [];
    // let splitNum = 0;
    // if(dataSize<120){
    //   splitNum=3;
    // } else {
    //   splitNum = 5;
    // }
    console.log("??2",momentumData)
    const momentum_algo = this.extractDataToList("cum_return_ma", momentumData);
    const btc_usdt = this.extractDataToList("cum_return_btc", momentumData);
    // var duration = 1500;
    const data = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            formatter: function (params) {
              return (
                (params.seriesData.length ? params.seriesData[0].data[0].toISOString().split("T")[0] :  Math.round(params.value*10000)/100 +' %')
              )
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
        // axisLine:false,
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "#6E7078"
          }
        },
        // splitNumber: value => (momentumData.length >120 ? 5 : 1),
        splitNumber: 5,
          // console.log("포맷밸류",value)
          
        
        // maxInterval:100,
        // splitNumber: function (params) {
        //   console.log("splitParam", params)
        //   return (
        //     (params.seriesData.length ? )
        //   )
        // },
        axisLabel: {
          color: "#9396a4",
          fontSize:16,
          rotate: 0,
          interval: 200,
          // formatter: function (value, index) {
          //   console.log("포맷밸류",value)
          //   console.log("포맷인덱스",index)
          // }
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
        //   animationEasing: 'linear',
        //   animationEasingUpdate: 'linear',
        //   animationDelay: function (i) {
        //     if (i == null) {
        //         return null;
        //     }
        //     else {
        //         // cubicIn is x=t^3 so t=x^(1/3)
        //         return (Math.pow((i + 0.5) / data.length, 1 / 3)) * duration;
        //     }
        // }
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
        //   animationEasing: 'linear',
        //   animationEasingUpdate: 'linear',
        //   animationDelay: function (i) {
        //     if (i == null) {
        //         return null;
        //     }
        //     else {
        //         // cubicIn is x=t^3 so t=x^(1/3)
        //         return (Math.pow((i + 0.5) / data.length, 1 / 3)) * duration;
        //     }
        // },
        // animationDelayUpdate: 1000,
        },
        
      ],
      // animationDuration: duration,
      // animationDurationUpdate: 250,
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