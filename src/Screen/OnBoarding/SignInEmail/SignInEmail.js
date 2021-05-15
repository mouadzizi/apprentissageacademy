import React, { useState } from "react";
//importing Basics components 
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard
} from "react-native";
import { Divider, Input } from "react-native-elements";
import { TouchableWithoutFeedback} from "react-native-gesture-handler";

//importing components 
import FAB from '../../../Component/Buttons/FAB'


//importing Icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//importing APIs
import { signIn } from "../../../API/APIFunctions";

//Importing animation and style
import * as Animatable from "react-native-animatable";
import styles from "./SignInEmail.style";
import {COLORS} from '../../../utils/GlobalStyle'

export default function SignInEmail({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errMes, setErrMes] = useState("");
  const input = React.useRef();
  const disable = !data.email || !data.password || loading ;

  const signInAction = () => {
    setLoading(true);
    signIn(data.email.trim(), data.password.trim()).then((user) => {
      if (user != null) navigation.navigation("Home");
    }).catch((err) => {
        setLoading(false);
        switch (err.code) {
          case "auth/invalid-email":
            setErrMes("Votre Email est inccorect");
            break;
          case "auth/wrong-password":
            setErrMes("Mot de Pass ou bien Email est incorrect");
            break;
          default :
            setErrMes("il n'y a aucun utilisateur avec cette adresse e-mail");

        }
      });
  };

  return (
    <TouchableWithoutFeedback style={styles.cotainer} onPress={Keyboard.dismiss}>

      <View style={styles.headerContainer}>
      <FAB onClick={()=> navigation.replace('SignIn')}/>
        <View style={styles.header}>
          <Text style={styles.headline}>S'identifier</Text>
          <Text style={styles.subline}>
            Apprentissage academy, votre academy
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.errorMessage}>{errMes}</Text>
        <Animatable.View animation="fadeInUp" duration={2000}>
          <Input
            onChangeText={(e) => setData({ ...data, email: e })}
            placeholder="votre-mail@gmail.com"
            label="E-mail"
            leftIcon={<Icon name="email" size={20} color={COLORS.primary} />}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => input.current.focus()}
          />

          <Input
            onChangeText={(e) => setData({ ...data, password: e })}
            label="Mot de passe"
            placeholder="un grand secret"
            secureTextEntry={true}
            errorStyle={{ color: "red" }}
            leftIcon={
              <Icon name="lock-open-outline" size={20} color={COLORS.primary}/>
            }
            autoCapitalize="none"
            onSubmitEditing={() => signInAction()}
            ref={input}
          />

        </Animatable.View>

        <Divider style={{ marginVertical: 15 }} />

        <TouchableOpacity
          onPress={signInAction}
          style={disable ? styles.btnDisable : styles.btn}
          disabled={disable}
        >
          {loading ? (
            <ActivityIndicator
              style={styles.indicator}
              color="white"
              size="large"
              animating
            />
          ) : null}
          <Text style={styles.btnText}>S'identifier</Text>
        </TouchableOpacity>

        <Text style={styles.caption}>
          Avez vous avez pas un compte ?{" "}
          <Text
            onPress={() => navigation.replace("SignUp")}
            style={{ color: COLORS.primary }}
          >
            {" "}
            S'inscrire
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
