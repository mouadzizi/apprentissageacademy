import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Input } from 'react-native-elements';
import { signIn } from '../API/APIFunctions'

import * as Animatable from 'react-native-animatable';

const heightScreen = Dimensions.get("window").height;

export default function SignInEmail({ navigation }) {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const input = React.useRef();
    const signInAction = () => {
        setLoading(true)
        signIn(data.email.trim(), data.password.trim()).then(user => {
            if (user != null) navigation.replace('Home')

        }).catch(err => {
            setLoading(false)
            switch (err.code) {
                case 'auth/invalid-email':
                    alert(err.message)
                    break;

                case 'auth/wrong-password':
                    alert('Mot de pass incorrect')
                    break;
            }
        })

    }
    return (
        <ScrollView
            style={styles.cotainer}>

            <View
                style={{ backgroundColor: '#fff' }}>
                <View
                    style={styles.header}>

                    <Text style={styles.headline}>S'identifier</Text>
                    <Text style={styles.subline}>Apprentissage academy, votre academy</Text>

                </View>
            </View>

            <View
                style={styles.body}>


                <Animatable.View
                    animation="fadeInUp"
                    duration={2000}>


                    <Input
                        onChangeText={(e) => setData({ ...data, email: e })}
                        errorMessage='Entrer une adresse email valide'
                        placeholder='votre-mail@gmail.com'
                        errorStyle={{ color: 'red' }}
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.btn}

                >

                    <Text
                        style={styles.btnText}>Just Go</Text>
                </TouchableOpacity>

                <Text style={styles.caption}>Avez vous avez pas  un compte ? <Text onPress={() => navigation.replace('SignUp')} style={{ color: '#ffc814' }}> S'inscrire</Text></Text>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        backgroundColor: '#ffc814'
    },
    header: {
        backgroundColor: '#ffc814',
        height: heightScreen * 0.3,
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
        height: heightScreen * 0.7,
        borderTopEndRadius: 75,
        padding: 20,
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
    }
})