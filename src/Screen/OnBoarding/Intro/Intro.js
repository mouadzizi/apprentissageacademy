import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import * as Animatable from "react-native-animatable";

import { auth } from "../../../API/firebase";

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
          source={require("../../../../assets/logo.png")}
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
              backgroundColor: "#1a1a1a",
              image: (
                <Image
                  source={require("../../../../assets/logo.png")}
                  style={styles.ImageStSwiper}
                  resizeMode="contain"
                />
              ),
              title: "Onboarding",
              subtitle: "Done with React Native Onboarding Swiper",
            },

            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require("../../../../assets/slide1.png")}
                  style={styles.ImageStSwiper}
                  resizeMode="contain"
                />
              ),
              title: "Onboarding",
              subtitle: "Done with React Native Onboarding Swiper",
            },

            {
              backgroundColor: "#ffc814",
              image: (
                <Image
                  source={require("../../../../assets/slide2.png")}
                  style={styles.ImageStSwiper}
                  resizeMode="contain"
                />
              ),
              title: "Onboarding",
              subtitle: "Done with React Native Onboarding Swiper",
            },
          ]}
        />
      ) : (
        <LoadingLogo />
      )}
    </View>
  );
}
