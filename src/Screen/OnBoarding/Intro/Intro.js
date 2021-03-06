import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import * as Animatable from "react-native-animatable";
import {COLORS} from '../../../utils/GlobalStyle'
import { auth } from "../../../API/firebase";
import { LinearGradient } from 'expo-linear-gradient';


import styles from "./Intro.style";
export default function Intro({ navigation }) {
  const [loading, setloading] = useState(true);
  
  useEffect(() => {
    const __unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user found ");
        navigation.replace("Home");
      } else setloading(false);
    });
    return () => {
      __unsub();
    };
  }, []);

  const animation = {
    0: {
      scale: 1,
    },
    0.3: {
      scale: 1.1,
    },
    0.5: {
      scale: 1.2,
    },
    0.6: {
      scale: 1.3,
    },
    1: {
      scale: 1.4,
    },
  };

  const LoadingLogo = () => {
    return (
      <Animatable.View
        onAnimationEnd={() => setloading(false)}
        style={styles.animatableContainer}
        animation={animation}
        duration={2500}
        easing="linear"
      >
        <Image
          source={require("../../../../assets/icon.png")}
          style={styles.imageSt}
          resizeMode="contain"
        />
      </Animatable.View>
    );
  };
  
  return (
    <View style={styles.container}>

      {!loading ? (
        <Onboarding
        transitionAnimationDuration={300}
        controlStatusBar={false}
          onSkip={() => {
            navigation.replace("SignIn");
          }}
          onDone={() => {
            navigation.replace("SignIn");
          }}
          nextLabel="Suivant"
          skipLabel="Passer"
          pages={[
            {
              backgroundColor: COLORS.primary ,
              image: (
                <Image
                  source={require("../../../../assets/icon.png")}
                  style={styles.ImageStSwiper}
                  resizeMode="contain"
                />
              ),
              title: "Bienvenue",
              subtitle: "Apprentissage Academy votre application pour une meilleure expérience d'apprentissage",
            },

            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require("../../../../assets/icon2.png")}
                  style={styles.ImageStSwiper}
                  resizeMode="contain"
                />
              ),
              title: "Efficacité & Rapidité",
              subtitle: "vous pouvez accéder aux cours du collège à l'université en un seul clic",
            },

            {
              backgroundColor: "#343a40",
              image: (
                <Image
                  source={require("../../../../assets/icon3.png")}
                  style={styles.ImageStSwiper}
                  resizeMode="contain"
                />
              ),
              title: "Nous sommes les meilleurs",
              subtitle: "nous avons les meilleurs professeurs, vous donnant les meilleurs cours avec PDF et vidéo pour chaque cours",
            },
          ]}
        />
      ) : (
        <LoadingLogo />
      )}
    </View>
  );
}
