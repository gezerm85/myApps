import { View, Image, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import InputCard from "../../components/cards/InputCard/InputCard";
import { Formik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import styles from "./SignUpPages.style";

const SignUpPages = ({ navigation }) => {
  const handleSignUp = async (values, { resetForm }) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      resetForm();
      showMessage({
        message: "SignUp",
        description: "Kayıt Oldun :)",
        type: "success",
      });
    } catch (error) {
      showMessage({
        message: "SignUp",
        description: "Bir şeyler ters gitti :(",
        type: "danger",
      });
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
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formikContainer}>
            <View style={styles.InputContainer}>
              <InputCard
                placeholderText={"İsim Giriniz"}
                handleChangeText={handleChange("name")}
                handleValue={values.name}
                secureText={false}
                handleBlur={handleBlur("name")}
              />
              <InputCard
                placeholderText={"E-Posta Giriniz"}
                handleChangeText={handleChange("email")}
                handleValue={values.email}
                secureText={false}
                handleBlur={handleBlur("email")}
              />
              <InputCard
                placeholderText={"Paralo Oluştur"}
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
                title={"Kayıt Ol"}
                setWidth={"100%"}
                setColor={"#000"}
                onPress={handleSubmit}
              />
              <CustomButton
                title={"Giriş Yap"}
                btnPressColor={"#FFC805"}
                setWidth={"100%"}
                setColor={"#fff"}
                setPressColor={"#FFF"}
                setBorder={1}
                setBorderColor={"#FFF"}
                onPress={() => navigation.navigate("Login")}
                setTextColor={"#fff"}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpPages;
