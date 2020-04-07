import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import githubFinder from '../images/githubfinder.gif';
import darkMode from '../images/darkmode.JPG';
import topNine from '../images/mytopnine.JPG';
import trackDrills from '../images/logo.png';

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>

          {/*Project 1 */}
          <Card shadow={5} style={{ width: '30%', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '300px', background: `url(${githubFinder}) center / cover` }}>Github Finder</CardTitle>
            <CardText>
              React Project to search github Users, check their details and their latest projects
            </CardText>
            <CardActions style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
              <Button colored href="https://github.com/Leelsmuth/github-finder" target='_blank' style={{ fontWeight: 'bold' }}>Github</Button>
              <Button colored href="https://github-finder-eta-eosin.now.sh/" target='_blank' style={{ fontWeight: 'bold' }}>LiveDemo</Button>
            </CardActions>
          </Card>

          {/*Project 2 */}
          <Card shadow={5} style={{ width: '30%', margin: 'auto' }}>
            <CardTitle style={{ color: 'white', height: '300px', background: `url(${darkMode}) center / cover` }}>Dark Mode</CardTitle>
            <CardText>
              Simple React Project using Context API and custom hooks to manipulate the DOM.
            </CardText>
            <CardActions style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
              <Button colored href="https://github.com/Leelsmuth/dark-mode" target='_blank' style={{ fontWeight: 'bold' }}>Github</Button>
              <Button colored href="https://dark-mode-five-mu.now.sh/" target='_blank' style={{ fontWeight: 'bold' }}>LiveDemo</Button>
            </CardActions>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>

          {/*Project 1 */}
          <Card shadow={5} style={{ width: '30%', margin: 'auto' }}>
            <CardTitle style={{ color: '', height: '300px', background: `url(${topNine}) center / cover` }}>My Top Nine</CardTitle>
            <CardText>
              Simple Redux project that lets you pick your top nine Favourite things in the World (at the moment).
        </CardText>
            <CardActions style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
              <Button colored href="https://github.com/buildsprint-topnine/web-application" target='_blank' style={{ fontWeight: 'bold' }}>Github</Button>
              <Button colored href="https://web-application.my-top-nine.now.sh/" target='_blank' style={{ fontWeight: 'bold' }}>LiveDemo</Button>
            </CardActions>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>

          {/*Project 1 */}
          <Card shadow={5} style={{ width: '30%', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '300px', background: `url(${trackDrills}) center / cover` }}>Track Drills</CardTitle>
            <CardText>
              A website that inspires you to live a healthier lifestyle and tracks your fitness goals
        </CardText>
            <CardActions style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
              <Button colored href="https://github.com/LABS-EU3/wt_backend" target='_blank' style={{ fontWeight: 'bold' }}>Github</Button>
              <Button colored href="https://trackdrills.com/" target='_blank' style={{ fontWeight: 'bold' }}>LiveDemo</Button>
            </CardActions>
          </Card>

        </div>
      )
    }
  }

  render() {

    return (
      <div className='category-tabs'>
        <Tabs activeTab={this.state.active} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><strong>React</strong></Tab>
          <Tab><strong>Redux</strong></Tab>
          <Tab><strong>NodeJS</strong></Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Project;