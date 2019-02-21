import React from "react";
import "./crimeListComponent.scss";

import InfiniteScroll from "react-infinite-scroll-component";
import CrimeService from "../../crimeServices/crimeServices";

let crimes = CrimeService.getCrimes();

// let fakeArr = [];
// for (let i = 0; i < 20; i++) {
//   fakeArr.push({
//     id: i,
//     cdatetime: "",
//     address: "",
//     district: Number,
//     beat: "",
//     grid: Number,
//     crimedescr: "",
//     ucr_ncic_code: Number,
//     latitude: Number,
//     longitude: Number
//   });
// }

// let crimes = fakeArr;

class CrimeListPage extends React.Component {
  state = {
    items: Array.from({ length: 3 }, i => crimes)
  };

  fetchMoreData = () => {
    this.setState({
      items: this.state.items.concat(
        Array.from({ length: 20 }, i => this.props.crimesListFromCSV)
      )
    });
  };

  render() {
    console.log(this.props.crimesListFromCSV);
    return (
      <div className="column-element">
        <div id="scrollableDiv" className="scrollableDiv">
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            <div className="styledScrollbar">
              <table className="crimeTable">
                <tbody className="tbody">
                  {this.state.items.map((item, index) => (
                    <tr
                      className={item[index].id % 2 ? "light" : "dark"}
                      onClick={() =>
                        this.props.handleChangeGeo(
                          item[index].latitude,
                          item[index].longitude,
                          item[index].cdatetime,
                          item[index].address,
                          item[index].district,
                          item[index].crimedescr
                        )
                      }
                      key={item[index].id}
                    >
                      <td>
                        <p>cdatetime: {item[index].cdatetime}</p>
                        <p>address: {item[index].address}</p>
                        <p>district: {item[index].district}</p>
                        <p>beat: {item[index].beat}</p>
                        <p>grid: {item[index].grid}</p>
                        <p>crimedescr: {item[index].crimedescr}</p>
                        <p>ucr_ncic_code: {item[index].ucr_ncic_code}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default CrimeListPage;
