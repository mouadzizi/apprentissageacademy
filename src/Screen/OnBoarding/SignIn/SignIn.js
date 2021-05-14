import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  InteractionManager,
} from "react-native";
import { Button, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { signInWithFacebook } from "../../../API/APIFunctions";
import * as Updates from "expo-updates";
import styles from "./SignIn.style";
import ButtonSt from "../../../Component/Buttons/Button";

export default function SignIn({ navigation }) {
  const [loading, setLoading] = useState(false);

  const facebookLogin = async () => {
    setLoading(true);
    await signInWithFacebook().then((facebookUser) => {
      if (facebookUser) {
        navigation.replace("Home");
        setLoading(false);
      } else setLoading(false);
    });
  };
  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert("Information", "Nouveau version ", [
          {
            text: "Télécharger",
            onPress: async () => {
              await Updates.fetchUpdateAsync();
              await Updates.reloadAsync();
            },
          },
        ]);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      checkForUpdates();
    });
  }, []);
  return (
    <View style={styles.containerGlobal}>
      <View>
        <Animatable.Image
          animation="pulse"
          iterationCount={5}
          source={require("../../../../assets/icon.png")}
          resizeMode="contain"
          style={styles.imageIntro}
        />

      </View>

      <View>
        <Button
          loading={loading}
          icon={
            <Icon
              name="facebook"
              size={20}
              color="white"
              style={{ marginRight: 25 }}
            />
          }
          onPress={() => facebookLogin()}
          title="Continue avec Facebook"
          buttonStyle={{ marginVertical: 25 }}
        />

        <Divider />

        <Text style={styles.caption}>
          Vous pouvez choisir d'utiliser votre email
        </Text>

        <ButtonSt
          text="S'identifier"
          onClick={() => navigation.navigate("SignInEmail")}
          outlined={true}
        />
        <ButtonSt
          text="S'inscrire"
          onClick={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
}
