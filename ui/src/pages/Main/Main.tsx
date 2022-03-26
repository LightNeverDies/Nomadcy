import React from 'react'
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import { connect } from 'react-redux'
import { appChecker } from '../../reduxStore/AppChecker/actions/appChecker'

class Main extends React.Component <any, any> {

  constructor(props: any) {
      super(props)
  }

  componentDidMount = async() => {
    await this.props.appChecker()
  }

  render() {
      return (
      <>
        <Header type={this.props.type}/>
        <Body type={this.props.type}/>
      </>
    )
  }
   
}

const mapDispatchToProps = (dispatch: any) => ({
  appChecker: () => dispatch(appChecker())
})

export default connect(null, mapDispatchToProps) (Main)