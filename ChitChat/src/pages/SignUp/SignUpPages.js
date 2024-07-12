import { View, Image, SafeAreaView, Dimensions,  } from "react-native";
import React, {useState} from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import InputCard from "../../components/cards/InputCard/InputCard";
import { Formik } from "formik";
import styles from "./SignUpPages.style";
import { useDispatch } from "react-redux";
import { signup, setEmail, setPassword, } from "../../redux/userSlice";
import { AntDesign, Ionicons } from '@expo/vector-icons';

const SignUpPages = ({ navigation }) => {
  const [openEye, setOpenEye] = useState(false)

  const dispatch = useDispatch()


  const handleSignUp = async (values, { resetForm }) => {
    const {email, password, displayName} = values
    dispatch(setEmail(email))
    dispatch(setPassword(password))
    dispatch(signup({email, password, displayName}))
    resetForm()
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
        initialValues={{ displayName: "", email: "", password: "" }}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, resetForm }) => (
          <View style={styles.formikContainer}>
            <View style={styles.InputContainer}>
              <InputCard
                placeholderText={"İsim Giriniz"}
                handleChangeText={handleChange("displayName")}
                handleValue={values.displayName}
                secureText={false}
                handleBlur={handleBlur("displayName")}
                inputIcon={<AntDesign onPress={()=>resetForm(values.displayName)} name="close" size={20} color="#fff" />}
              />
              <InputCard
                placeholderText={"E-Posta Giriniz"}
                handleChangeText={handleChange("email")}
                handleValue={values.email}
                secureText={false}
                handleBlur={handleBlur("email")}
                inputIcon={<AntDesign onPress={()=>resetForm(values.email)} name="close" size={20} color="#fff" />}
              />
              <InputCard
                placeholderText={"Paralo Oluştur"}
                handleChangeText={handleChange("password")}
                handleValue={values.password}
                handleBlur={handleBlur("password")}
                secureText={!openEye}
                inputIcon={
                  openEye == false
                  ?  <Ionicons onPress={()=> setOpenEye(!openEye)} name="eye" size={20} color="#fff" />
                  : <Ionicons onPress={()=> setOpenEye(!openEye)} name="eye-off" size={20} color="#fff" />
                }
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
