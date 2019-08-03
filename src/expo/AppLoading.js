import React from 'react'
import { ActivityIndicator, View } from 'react-native'

class AppLoading extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  
            isLoading: false
        };
    }

    componentDidMount(){
        this.startLoading(this.props)
        this.setState({ isLoading:true })
    }

    async startLoading(props){
        const {
            startAsync,
            onError,
            onFinish,
        } = props

        const self = this

        try {
            await startAsync()
            setTimeout(() => onFinish())
        }
        catch(e) {
            if (__DEV__){
                console.error(e)    
            }
            else {
                console.log(e)
            }

            onError(e)
        }
        finally {
            self.setState({isLoading:false})
        }
    }

    render() {
        return (
        <View style={{flex:1, width:'100%', height:'100%'}}>
        <ActivityIndicator animating={this.state.isLoading} color='#FFF' />
        </View>
        );
    }
}

export default AppLoading;