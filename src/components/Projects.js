import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardMenu, CardText, CardActions, Button, IconButton } from 'react-mdl';

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
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="http://github.com/leelsmuth" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 2 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #2</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="#" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 3 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #3</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...</CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="#" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
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
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>Github Finder</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="https://github.com/Leelsmuth/github-finder" target='_blank'>Github</Button>
            <Button colored href="https://github-finder-eta-eosin.now.sh/" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 2 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>Dark Mode</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="https://github.com/Leelsmuth/dark-mode" target='_blank'>Github</Button>
            <Button colored href="https://dark-mode-five-mu.now.sh/" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 3 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #3</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...</CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="#" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
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
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="http://github.com/leelsmuth" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 2 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #2</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="#" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 3 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #3</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...</CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="#" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className='projects-grid'>

        {/*Project 1 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="http://github.com/leelsmuth" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 2 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #2</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="#" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 3 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/28380357/original/de2d5a89046e990809433c81c32c7505699c07f6/fix-html-css-and-bootstrap-errors-for-you.jpg) center / cover' }}>HTML/CSS Project #3</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...</CardText>
          <CardActions border style={{ textAlign: 'center' }}>
            <Button colored href="#" target='_blank'>Github</Button>
            <Button colored href="#" target='_blank'>LiveDemo</Button>
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
          <Tab>HTML/CSS</Tab>
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