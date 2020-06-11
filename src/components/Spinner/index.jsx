import React from "react";
import { Spinner } from "./styles.js";
import { connect } from "react-redux";

const index = ({ loading }) => {
  return loading ? (
    <Spinner>
      <div className="loader">Loading...</div>
    </Spinner>
  ) : null;
};
const mapStateToProps = (state) => ({ loading: state.client.loading });
export default connect(mapStateToProps)(index);
