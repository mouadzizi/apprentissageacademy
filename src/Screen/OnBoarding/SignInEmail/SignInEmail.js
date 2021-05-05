import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Input } from 'react-native-elements';
import { signIn } from '../../../API/APIFunctions'
import {EvilIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable';

const heightScreen = Dimensions.get("window").height;

export default function SignInEmail({ navigation }) {

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [errMes, setErrMes] = useState('')
    const input = React.useRef();
    const signInAction = () => {
        setLoading(true)
        signIn(data.email.trim(), data.password.trim()).then(user => {
            if (user != null) navigation.replace('Home')

        }).catch(err => {
            setLoading(false)
            switch (err.code) {
                case 'auth/invalid-email':
                    setErrMes("Votre Email est inccorect")
                    break;
                case 'auth/wrong-password':
                    setErrMes("Mot de Pass ou bien Email est incorrect")
                    break;
            }
        })
    }

    return (
        <View
            style={styles.cotainer}>

                <TouchableOpacity
                style={styles.FAB}
                onPress={()=> navigation.navigate('SignIn')}>
                    <EvilIcons name="arrow-left" size={50} color="white"/>
                </TouchableOpacity>

            <View style={styles.headerContainer}>
                <View
                    style={styles.header}>

                    <Text style={styles.headline}>S'identifier</Text>
                    <Text style={styles.subline}>Apprentissage academy, votre academy</Text>

                </View>
            </View>

            <View
                style={styles.body}>

                <Text
                style={styles.errorMessage}>{errMes}</Text>
                <Animatable.View
                    animation="fadeInUp"
                    duration={2000}>


                    <Input
                        onChangeText={(e) => setData({ ...data, email: e })}
                        placeholder='votre-mail@gmail.com'
                        label='E-mail'
                        leftIcon={
                            <Icon
                                name='email'
                                size={20}
                                color='#ffc814'
                            />
                        }
                        keyboardType='email-address'
                        returnKeyType='next'
                        onSubmitEditing={() => input.current.focus()}
                    />

                    <Input
                        onChangeText={(e) => setData({ ...data, password: e })}
                        label='Mot de passe'
                        placeholder='un grand secret'
                        secureTextEntry={true}
                        errorStyle={{ color: 'red' }}
                        leftIcon={
                            <Icon
                                name='lock-open-outline'
                                size={20}
                                color='#ffc814'
                            />
                        }
                        autoCapitalize='none'
                        onSubmitEditing={() => signInAction()}
                        ref={input}

                    />

                    <Text
                        onPress={() => Alert.alert('Mot de pass oublie', 'fonction will be availble on production')}
                        style={styles.captionImportant}> Mot de passe oublié </Text>
                </Animatable.View>


                <Divider style={{ marginVertical: 15 }} />

                <TouchableOpacity
                    onPress={signInAction}
                    style={styles.btn}

                    disabled={!data.email || !data.password || loading}>
                    {loading ? <ActivityIndicator style={styles.indicator} color='white' size='large' animating /> : null}
                    <Text
                        style={styles.btnText}>S'identifier</Text>
                </TouchableOpacity>
  
                <Text style={styles.caption}>Avez vous avez pas un compte ? <Text onPress={() => navigation.replace('SignUp')} style={{ color: '#ffc814' }}> S'inscrire</Text></Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        backgroundColor: '#ffc814'
    },
    headerContainer:{
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: '#ffc814',
        height: heightScreen*0.23,
        borderBottomLeftRadius: 100,
        paddingLeft: 55,
        paddingTop: 70,

    },
    headline: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white'
    },
    subline: {
        fontWeight: 'bold',
        color: 'black'
    },
    body: {
        backgroundColor: '#fff',
        height: heightScreen * 0.8,
        borderTopEndRadius: 75,
        padding: 20,
    },
    errorMessage:{
        color: 'red',
        textAlign: 'center'
    },  
    btn: {
        marginVertical: 25,
        backgroundColor: '#ffc814',
        width: '60%',
        elevation: 10,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 15
    },
    btnText: {
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    captionImportant: {
        color: '#ffc814',
        textAlign: 'right',
    },
    caption: {
        textAlign: 'center',
        color: '#c2c2c2'
    },
    indicator: {
        position: 'absolute',
        top: '10%',
        left: '2%'
    },
    FAB:{
        position : 'absolute',
        top: 20,
        left: 20,
        zIndex: 1
    }
})