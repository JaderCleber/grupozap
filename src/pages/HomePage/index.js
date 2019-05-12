import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actionsHome from '../../store/actions/home'
import TemplateAppBar from '../../templates/TemplateAppBar'
import { Label } from '../../atoms'

class HomePage extends React.Component {
  
  render() {
    return (
      <TemplateAppBar>
        <Label>Label content</Label>
      </TemplateAppBar>)
  }
}


const mapStateToProps = (state) => ({
  
})


const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    ...actionsHome
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)