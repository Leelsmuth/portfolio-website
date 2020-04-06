import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardMenu, CardText, CardActions, Button, IconButton } from 'react-mdl';
import githubFinder from '../images/githubfinder.JPG';
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            <CardActions style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
              <Button colored href="https://github.com/Leelsmuth/github-finder" target='_blank'>Github</Button>
              <Button colored href="https://github-finder-eta-eosin.now.sh/" target='_blank'>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2 */}
          <Card shadow={5} style={{ width: '30%', margin: 'auto' }}>
            <CardTitle style={{ color: 'white', height: '300px', background: `url(${darkMode}) center / cover` }}>Dark Mode</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            <CardActions style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
              <Button colored href="https://github.com/Leelsmuth/dark-mode" target='_blank'>Github</Button>
              <Button colored href="https://dark-mode-five-mu.now.sh/" target='_blank'>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            <CardActions style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
              <Button colored href="https://github.com/buildsprint-topnine/web-application" target='_blank'>Github</Button>
              <Button colored href="https://web-application.my-top-nine.now.sh/" target='_blank'>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            <CardActions style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
              <Button colored href="https://github.com/LABS-EU3/wt_backend" target='_blank'>Github</Button>
              <Button colored href="https://trackdrills.com/" target='_blank'>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }
  }

  render() {

    return (
      <div className='category-tabs'>
        <Tabs activeTab={this.state.active} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Redux</Tab>
          <Tab>NodeJS</Tab>
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