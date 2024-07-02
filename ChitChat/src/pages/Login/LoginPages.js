import { View, Image, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import InputCard from "../../components/cards/InputCard/InputCard";
import { Formik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import styles from "./LoginPages.style";

const LoginPages = ({ navigation }) => {
  useEffect(() => {
    checkAutoLogin();
  }, []);

  const checkAutoLogin = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    if (userToken) {
      const { email, password } = JSON.parse(userToken);
      signIn(email, password);
    }
  };

  const handleLogin = async (values, { resetForm }) => {
    const { email, password } = values;
    signIn(email, password, resetForm);
  };

  const signIn = async (email, password, resetForm) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      await AsyncStorage.setItem(
        "userToken",
        JSON.stringify({ email, password })
      );
      showMessage({
        message: "Login",
        description: "Giriş Başarılı :)",
        type: "success",
      });
    } catch (error) {
      showMessage({
        message: "Hatalı Giriş",
        description: "Bir şeyler ters gitti :(",
        type: "danger",
      });
    } finally {
      if (resetForm) {
        resetForm();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.imageBox}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formikContainer}>
            <View style={styles.InputContainer}>
              <InputCard
                placeholderText={"E-posta Giriniz"}
                handleChangeText={handleChange("email")}
                handleValue={values.email}
                secureText={false}
                handleBlur={handleBlur("email")}
              />
              <InputCard
                placeholderText={"Şifre"}
                handleChangeText={handleChange("password")}
                handleValue={values.password}
                handleBlur={handleBlur("password")}
                secureText={true}
              />
            </View>
            <View style={styles.ButtonContainer}>
              <CustomButton
                btnColor={"#FFC805"}
                btnPressColor={"#CCA004"}
                setWidth={"100%"}
                onPress={handleSubmit}
                title={"Giriş Yap"}
              />
              <CustomButton
                btnPressColor={"#FFC805"}
                setWidth={"100%"}
                onPress={() => navigation.navigate("SignUp")}
                title={"Kayıt Ol"}
                setBorder={1}
                setBorderColor={"#fff"}
                setTextColor={"#fff"}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginPages;
