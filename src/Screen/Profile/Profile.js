import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { Avatar, Divider, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./Profile.style";

import { auth } from "../../API/firebase";

export default function Profile({ navigation }) {
  
    const signOut = async () => {
    await auth.signOut().then(() => {
      navigation.replace("SignInEmail");
    });
  };
  const {currentUser:user}=auth;
  const TwoLettersName = user.displayName.substring(0, 2).toUpperCase();

  return (
      
    <View>
      <StatusBar backgroundColor="#ffc814" />
      <Avatar rounded title={TwoLettersName} size={100} backgroundColor="#ffc814" s
        containerStyle={{alignSelf: 'center', margin: 20}}/>

        <Divider style={{ backgroundColor: "#ffc814", marginBottom: 10 }}/>

        <Input
            label="Nom et prénom"
            value={user.displayName}
            disabled={true}
            leftIcon={
                <Icon
                    name='card-account-details'
                    size={20}
                    color='#ffc814'
                />
            }
        />

        <Input
            label='E-mail'
            value={user.email}
            disabled={true}
            leftIcon={
            <Icon
                name='email'
                size={20}
                color='#ffc814'
            />
            }
        />

        <TouchableOpacity
            style={styles.btn}
            onPress={signOut}>
        <Text style={styles.btnText}>Deconnecter</Text>
        </TouchableOpacity>

    </View>
  );
}
