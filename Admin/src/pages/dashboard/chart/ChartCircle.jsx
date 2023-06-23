import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsCicle extends React.Component {
state = {
  dataDoughnut: {
    labels: ["Hot", "Regular", "Top seller", "Irregular", "Top pick"],
    datasets: [
      {
        data: [120, 250, 100, 40, 120],
        backgroundColor: ["#E74C3C", "#1ABC9C", "#3498DB", "#2C3E50", "#8E44AD"],
        hoverBackgroundColor: [
          "#F1948A",
          "#A3E4D7",
          "#AED6F1",
          "#ABB2B9",
          "#D2B4DE"
        ]
      }
    ]
  }
}

render() {
    return (
    <MDBContainer>
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default ChartsCicle;