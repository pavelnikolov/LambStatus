import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchIncidentUpdates } from 'actions/incidents'
import IncidentItem from './IncidentItem'

const mapStateToProps = (state, ownProps) => {
  let focusedIncident
  state.incidents.incidents.forEach((incident) => {
    if (incident.incidentID === ownProps.incidentID) {
      focusedIncident = incident
    }
  })
  return {
    incident: focusedIncident
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchIncidentUpdates}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentItem)
