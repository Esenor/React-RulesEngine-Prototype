import Application from '../presentationals/Application'
import { connect } from 'react-redux'

export default connect(
  function mapStateToProps (state) {
    return {
      infoMessage: state.message.info
    }
  }
)(Application)
