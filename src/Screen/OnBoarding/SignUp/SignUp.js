import React, { useState } from "react";

//Importing the basics Component
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Divider, Input } from "react-native-elements";

//importing Components
import FAB from '../../../Component/Buttons/FAB'

//importing Icons, style and animation
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import styles from "./SignUp.style";
import {COLORS} from '../../../utils/GlobalStyle'

//Api functions
import { signUp } from "../../../API/APIFunctions";


export default function SignUp({ navigation }) {
  const [User, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [errMes, setErrMes] = useState("");
  const disable = !User.email || !User.password || !User.confirmPassword;
  const signUpAction = async () => {
    setLoading(true);
    if (User.password.match(User.confirmPassword)) {
      await signUp(User.email.trim(), User.password.trim())
        .then(async (user) => {
          user.user.updateProfile({ displayName: User.username }).then(() => {
            setLoading(false);
            navigation.replace("Home");
          });
        })
        .catch((err) => {
          setErrMes("Votre e-mail est pas correct");
          setLoading(false);
        });
    } else {
      setErrMes("Les mots de pass sont pas identique");
      setLoading(false);
    }
  };
  return (
    <ScrollView style={styles.cotainer}>
        <FAB onClick={() => navigation.replace("SignIn")}/>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headline}>S'inscrire</Text>
          <Text style={styles.subline}>
            Apprentissage academy, votre academy
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.errorMessage}> {errMes} </Text>
        <Animatable.View animation="fadeInUp" duration={1500}>
          <Input
            placeholder="Nom et prénom"
            label="Nom et prénom"
            leftIcon={
              <Icon name="card-account-details" size={20} color={COLORS.primary} />
            }
            onChangeText={(e) => setUser({ ...User, username: e })}
          />
          <Input
            placeholder="votre-mail@gmail.com"
            label="E-mail"
            leftIcon={<Icon name="email" size={20} color={COLORS.primary} />}
            onChangeText={(e) => setUser({ ...User, email: e })}
          />

          <Input
            label="Mot de passe"
            placeholder="un grand secret"
            secureTextEntry={true}
            leftIcon={
              <Icon name="lock-open-outline" size={20} color={COLORS.primary} />
            }
            onChangeText={(e) => setUser({ ...User, password: e })}
          />

          <Input
            label="Confirmer votre Mot de passe"
            placeholder="un grand secret"
            secureTextEntry={true}
            errorStyle={{ color: "red" }}
            leftIcon={
              <Icon name="lock-open-outline" size={20} color={COLORS.primary} />
            }
            onChangeText={(e) => setUser({ ...User, confirmPassword: e })}
          />
        </Animatable.View>

        <Divider style={{ marginVertical: 9 }} />

        <TouchableOpacity
          style={disable ? styles.btnDisable : styles.btn}
          onPress={signUpAction}
          disabled={disable}
        >
          {loading ? (
            <ActivityIndicator
              style={styles.indicator}
              color="white"
              size="large"
            />
          ) : null}
          <Text style={styles.btnText}>Crée compte</Text>
        </TouchableOpacity>

        <Text style={styles.caption}>
          Avez vous déjà un compte ?{" "}
          <Text
            onPress={() => navigation.replace("SignInEmail")}
            style={{ color: COLORS.primary }}
          >
            {" "}
            S'identifier
          </Text>
        </Text>
        <Text></Text>

        <Text style={styles.caption}>
          en créant un compte avec nous, vous acceptez notre{" "}
          <Text
            onPress={() => navigation.navigate("politique de confidentialité")}
            style={{ color: COLORS.primary }}
          >
            {" "}
            politique de confidentialité
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
