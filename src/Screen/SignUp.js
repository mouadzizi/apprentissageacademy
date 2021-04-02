import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

//Api functions
import { signUp } from '../API/APIFunctions'
import { ActivityIndicator } from 'react-native';

const heightScreen = Dimensions.get("window").height;

export default function SignUp({ navigation }) {
    const [User, setUser] = React.useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [loading, setLoading] = React.useState(false)


    const signUpAction = async () => {
        setLoading(true);
        if(User.password.match(User.confirmPassword)){
            await signUp(User.email.trim(), User.password.trim()).then(user => {
                console.log(user);
                setLoading(false)
                navigation.replace('Home')
            })
                .catch(err => {
                    alert(err.message)
                    setLoading(false)
                })

        }
       else {
           alert("Passwords didn't match")
           setLoading(false)
       }
    }
    return (
        <ScrollView
            style={styles.cotainer}>

            <View
                style={{ backgroundColor: '#fff' }}>
                <View
                    style={styles.header}>

                    <Text style={styles.headline}>S'inscrire</Text>
                    <Text style={styles.subline}>Apprentissage academy, votre academy</Text>

                </View>
            </View>

            <View
                style={styles.body}>


                <Animatable.View
                    animation="fadeInUp"
                    duration={1500}>


                    <Input
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
                        onChangeText={(e) => setUser({ ...User, email: e })}
                    />

                    <Input

                        errorMessage='Votre mot de passe est faible '
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
                        onChangeText={(e) => setUser({ ...User, password: e })}
                    />

                    <Input
                        label='Confirmer votre Mot de passe'
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
                        onChangeText={(e) => setUser({ ...User, confirmPassword: e })}
                    />

                </Animatable.View>
                <Divider style={{ marginVertical: 15 }} />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={signUpAction}
                    disabled={!User.email || !User.password || !User.confirmPassword }
                    >
                    { loading? <ActivityIndicator style={styles.indicator} color='white' size='large'  /> : null  }
                    <Text
                        style={styles.btnText}>Crée compte</Text>
                </TouchableOpacity>

                <Text style={styles.caption}>Avez vous déjà un compte ? <Text onPress={() => navigation.replace('SignInEmail')} style={{ color: '#ffc814' }}> S'identifier</Text></Text>
                <Text></Text>

                <Text style={styles.caption}>en créant un compte avec nous, vous acceptez notre <Text onPress={() => navigation.navigate('politique de confidentialité')} style={{ color: '#ffc814' }}> politique de confidentialité</Text></Text>

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
        height: heightScreen * 0.2,
        borderBottomLeftRadius: 100,
        paddingLeft: 55,
        paddingTop: 50,

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
    indicator:{
        position:'absolute',
        top:'10%',
        left:'2%'
    }
})