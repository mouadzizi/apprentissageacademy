import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {EvilIcons} from 'react-native-vector-icons'

//styles 
import styles from './SignUp.style';

//Api functions
import { signUp } from '../../../API/APIFunctions'
import { ActivityIndicator } from 'react-native';

const heightScreen = Dimensions.get("window").height;

export default function SignUp({ navigation }) {

    const [User, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [loading, setLoading] = useState(false)
    const [errMes, setErrMes] = useState('')

    const signUpAction = async () => {
        setLoading(true);
        if(User.password.match(User.confirmPassword)){
            await signUp(User.email.trim(), User.password.trim()).then(user => {
                console.log(user);
                setLoading(false)
                navigation.replace('Home')
            })
                .catch(err => {    
                    setErrMes("Votre e-mail est pas correct")
                    setLoading(false)
                })

        }
       else {
           setErrMes("Les mots de pass sont pas identique")
           setLoading(false)
       }
    }
    return (
        <View
            style={styles.cotainer}>

                <TouchableOpacity
                style={styles.FAB}
                onPress={()=> navigation.navigate('SignIn')}>
                    <EvilIcons name="arrow-left" size={50} color="white"/>
                </TouchableOpacity>

            <View
                style={styles.headerContainer}>
                <View
                    style={[styles.header, {height: heightScreen * 0.23}]}>

                    <Text style={styles.headline}>S'inscrire</Text>
                    <Text style={styles.subline}>Apprentissage academy, votre academy</Text>

                </View>
            </View>

            <View
                style={[styles.body, {height: heightScreen * 0.8}]}>

                    <Text
                    style={styles.errorMessage}> {errMes} </Text>
                <Animatable.View
                    animation="fadeInUp"
                    duration={1500}>


                    <Input
                        placeholder='votre-mail@gmail.com'
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
                        label='Mot de passe'
                        placeholder='un grand secret'
                        secureTextEntry={true}
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
                    { loading ? <ActivityIndicator style={styles.indicator} color='white' size='large'  /> : null  }
                    <Text
                        style={styles.btnText}>Crée compte</Text>
                </TouchableOpacity>

                <Text style={styles.caption}>Avez vous déjà un compte ? <Text onPress={() => navigation.replace('SignInEmail')} style={{ color: '#ffc814' }}> S'identifier</Text></Text>
                <Text></Text>

                <Text style={styles.caption}>en créant un compte avec nous, vous acceptez notre <Text onPress={() => navigation.navigate('politique de confidentialité')} style={{ color: '#ffc814' }}> politique de confidentialité</Text></Text>

            </View>

        </View>
    )
}