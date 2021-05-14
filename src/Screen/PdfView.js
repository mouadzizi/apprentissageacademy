import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Pdf from "rn-pdf-reader-js";

export default function PdfView({ route }) {
  const [isReady, setIsReady] = useState(false);
  const url = route.params.link;

  useEffect(() => {}, []);
  return (
    <View style={styles.pageContainer}>
      <ActivityIndicator
        style={styles.indicator}
        color="red"
        size="large"
        animating={!isReady}
      />
      <View>
        <Pdf
          onLoadEnd={() => setIsReady(true)}
          withScroll
          withPinchZoom
          source={{
            uri: url,
          }}
          style={styles.pdf}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  indicator: {
    position: "absolute",
  },
});
