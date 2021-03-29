import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';


const heightScreen = Dimensions.get("window").height

export default function SignIn({navigation}) {

    return (
        <ScrollView style={styles.container}>

        <View 
        style={{marginBottom: 50}}>

        <Animatable.Image 
        animation="pulse" iterationCount={5}
                source={require('../../assets/icon.png')}
                resizeMode='contain'
                style={styles.imageIntro}
            />

            <Text style={styles.headline1}>Apprentissage</Text>
            <Text style={styles.headline2}>Academy</Text>

        </View>

        <View>
        <Button
        icon={
            <Icon
            name="facebook"
            size={20}
            color="white"
            style={{marginRight: 25}}
            />
        }
        onPress={()=>Alert.alert('facebook Authentification', 'will be availble in production')}
        title="Continue avec Facebook"
        buttonStyle={{marginVertical: 25}}
        />

        <Divider/>

        <Text style={styles.caption}>Vous pouvez choisir d'utiliser votre email</Text>

        <TouchableOpacity
        style={styles.signInBtn}
        onPress={()=>navigation.replace('SignInEmail')}>
            <Text
            style={styles.signInBtnText}>S'identifier</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.signUpBtn}
        onPress={()=>navigation.push('SignUp')}>
            <Text
            style={styles.signUnBtnText}>S'inscrire</Text>
        </TouchableOpacity>

        </View>

        


            
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: heightScreen, 
        padding: 20
    },
    imageIntro: {
        width: '80%', 
        height: heightScreen*0.25, 
        alignSelf: 'center',
        marginVertical: 25,
    },
    headline1:{
        fontWeight:'bold',
        color: '#ffc814',
        textAlign: 'center',
        fontSize: 35,
    },
    headline2:{
        color: '#ffc814',
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'monospace'
    },
    caption:{
        fontSize: 12,
        color: '#c4c4c4',
        textAlign: 'center'
    },
    signInBtn:{
        marginVertical: 25,
        backgroundColor: '#ffc814',
        padding: 10,
        borderRadius: 15
    },
    signInBtnText:{
         textAlign: 'center',
         fontSize: 17,
         color: 'white',
         fontWeight: 'bold'
    },
    signUpBtn:{
        borderWidth: 1,
        borderColor: '#ffc814',
        padding: 10,
        borderRadius: 15
    },
    signUnBtnText:{
        textAlign: 'center',
        fontSize: 17,
        color: '#ffc814',
        fontWeight: 'bold'
   },
})
