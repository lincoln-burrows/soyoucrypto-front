import React, { Component } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import "../../App.css";
import "../css/Momentum.css";
import Button from "../assets/Button.js";
import Button3 from "../assets/Button3";
import App from "../../App";
import { connect } from "react-redux";


class StableOnlyGraph extends Component {
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
  //     if (arg === "datetime") {
  //       let i =
  //         "'" + item.toString().slice(2, 10);
  //       res.push(i);
  //     } else {
  //       res.push(parseFloat(data[i][arg]));
  //     }
  //   }
  //   return res;
  // };

  extractDataToList = (data) => {
    const res = [];
    console.log("???Stable", data)
    for (let i in data) {
      let time = data[i].datetime.toString().replace(/-/g,'');
      let value = data[i].cum_return_ma;
        res.push([new Date(time.slice(0,4), time.slice(4,6)-1, time.slice(6,8)), value]);
      }
    return res;
  };

  componentDidMount = () => {
    document.title = "SOYOU CRYPTO";
    
  };

  render() {
    const { stableData } = this.props.stableData;
    // const dates = this.extractDataToList("datetime", stableData);
    const stableOnly = this.extractDataToList(stableData);
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
        data: ["Stable Only"],
        textStyle: {
          fontSize: 16
        },
        itemStyle: {
          borderType:"solid",
          
        }
      },
      grid: {
        left: "1%",
        right: "4%",
        bottom: "3%",
        top: "10%",
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
        splitNumber:5,
        axisLabel: {
          color: "#9396a4",
          fontSize:16,
          rotate: 0,
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
      series: [
        {
          name: "Stable Only",
          type: "line",
          lineStyle:{
            normal: {width: 4},
          },
          smooth: true,
          data: stableOnly,
          symbol: "none",
          color: "#000000",
          tooltip: {
            valueFormatter: value => Math.round(value*10000)/100 +' %'
          },
            
              
            
          
        },
      ]
    };
  
    return (
      
      <div className="graphLocation">
        <ReactEcharts 
          style={{
            height: "300px",
            // height: "369px",
            // 369
            // width: "100%"
            width: "97%"
            
          }}
          option={data}
          />
      </div>
      
    );
  } 
}

const mapStateToProps = (state) => ({
  stableData : state.stableData
});
  
export default connect(mapStateToProps)(StableOnlyGraph);