import React from "react";
import "./crimeListComponent.scss";

import InfiniteScroll from "react-infinite-scroll-component";
// import CrimeService from "../../crimeServices/crimeServices";

// let crimes = CrimeService.getCrimes();

class CrimeListPage extends React.Component {
  state = {
    items: Array.from({ length: 20 }, i => this.props.crimesListFromCSV.state)
  };

  fetchMoreData = () => {
    this.setState({
      items: this.state.items.concat(
        Array.from({ length: 20 }, i => this.props.crimesListFromCSV.state)
      )
    });
  };

  render() {
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
                      className={[index] % 2 ? "light" : "dark"}
                      onClick={() =>
                        this.props.handleChangeGeo(
                          item[index].lat,
                          item[index].lng,
                          item[index].cdatetime,
                          item[index].address,
                          item[index].district,
                          item[index].crimedescr
                        )
                      }
                      key={[index]}
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
