import React from "react";
import { connect } from "react-redux";
import GitCard from "./gitCard";
class ListMaker extends React.Component {
  constructor() {
    super();
    this.state = {
      followers : []
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      followers : props.allFollowers
    })
  }
    render() {
      return(
        <div className="container">
            <div className="row  justify-content-center">
                {this.state.followers ? this.state.followers.map( (item, index) => <GitCard details={item} key={index} />) : <p>Not found</p>}
            </div>
        </div>
      )
    };
};

const mapStateToProps = (state) => ({
  allFollowers : state.followers
})
export default connect(mapStateToProps, null)(ListMaker);
