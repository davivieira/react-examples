import React from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.currentStream) return <div>Loading...</div>;

    const { title, description } = this.props.currentStream;

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{ title, description }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentStream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { editStream, fetchStream }
)(StreamEdit);
