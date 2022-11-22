import React, { Component } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
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
    };
  }

  extractDataToList = (data) => {
    const res = [];
    
    for (let i in data) {
      let time = data[i].datetime.toString().replace(/-/g, "");
      let value = data[i].cum_return_ma;
      res.push([
        new Date(time.slice(0, 4), time.slice(4, 6) - 1, time.slice(6, 8)),
        value,
      ]);
    }

    return res;
  };

  componentDidMount = () => {
    document.title = "SOYOU CRYPTO";
  };

  render() {
    const { stableData } = this.props.stableData;
    const stableOnly = this.extractDataToList(stableData);

    const data = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            formatter: function (params) {
<<<<<<< HEAD
              if (params.seriesData.length) {
              // console.log("요기가 에러야 stable", params.seriesData[0].data[0].toISOString().split("T")[0])
            }
              return (
                ( params.seriesData && params.seriesData.length ? params.seriesData[0].data[0].toISOString().split("T")[0] :  Math.round(params.value*10000)/100 +' %')
              )
            }
            }
          }
=======

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
            },
          },
        },
>>>>>>> 3556a3c66097d4e79a21ee50ca3165c7cec36f0c
      },
      legend: {
        data: ["Stable Only"],
        textStyle: {
          fontSize: 16,
        },
        itemStyle: {
          borderType: "solid",
        },
      },
      grid: {
        left: "1%",
        right: "4%",
        bottom: "3%",
        top: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "time",
        show: true,
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "#6E7078",
          },
        },
        splitNumber: 5,
        axisLabel: {
          color: "#9396a4",
          fontSize: 16,
          rotate: 0,
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#9396a4",
          inside: false,
          fontSize: 16,
          formatter: (value) => value * 100 + " %",
        },
      },
      notMerge:true,
      series: [
        {
          name: "Stable Only",
          type: "line",
          lineStyle: {
            normal: { width: 4 },
          },
          smooth: true,
          data: stableOnly,
          symbol: "none",
          color: "#000000",
          tooltip: {
            valueFormatter: (value) => Math.round(value * 10000) / 100 + " %",
          },
        },
      ],
    };

    return (
      <div className="graphLocation">
        <ReactEcharts
          style={{
            height: "300px",
            width: "97%",
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
  stableData: state.stableData,
});

export default connect(mapStateToProps)(StableOnlyGraph);
