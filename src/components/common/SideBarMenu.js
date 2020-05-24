import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuSettingComponent from './MenuSetting.component';
import HeaderComponent from './Header.component';

class SideBarMenuComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            open : true,
        }
    }

    handleDrawer = () => {
        this.setState({
            open : !this.state.open
        })
    }

    render() {

        var { open } = this.state
        let { children } = this.props

        return (
            <div className='aaa'>

                <HeaderComponent open={ open } handleDrawer={ this.handleDrawer } />

                <Drawer
                    className='drawer'
                    variant="persistent"
                    anchor="left"
                    open='true'
                    classes = { open === true ? {paper: 'paperDrawer'} : {paper: 'paperSmallDrawer'} }
                    
                >
                    <div className='drawerHeader'>
                        <IconButton onClick={ this.handleDrawer } >
                            {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>

                        <MenuSettingComponent />

                    </List>
                </Drawer>
                <main
                    className={ open === true ? 'content contentShift' : 'content' }
                >                    
                   { children }
                </main>
            </div>
        )
    }
}

export default SideBarMenuComponent;
