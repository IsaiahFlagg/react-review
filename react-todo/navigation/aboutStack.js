import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
        }
    },
    // ReviewDetails: {
    //     screen: ReviewDetails,
    //     navigationOptions: {
    //         title: 'Review Details'
    //     }
    // }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee' }
    }
});

export default AboutStack;