import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { newRecipeImg } from "../utils/constants";
import MaterialChip from "react-native-material-chip";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import OneButton from "./OneButton";

const AddRecipeStep1 = ({ textbtn, bool, ph, handleChange, handleBoolean, textbtn2, handleBackBoolean, value, openImage, image }) => {
  {
    if (bool) {
      return (
        <View style={{ marginTop: 100 }}>
          <Text style={styles.title}>Ingresa tu propia receta</Text>
          
          {ph == "Imagen de la receta"?
          <TouchableOpacity onPress={openImage} >
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{ uri: image ? image : newRecipeImg }}
            />
            <Text>Selecciona una imagen de tu galeria</Text>
          </View>
        </TouchableOpacity>
        :
          <TextInput
            style={styles.input}
            placeholder={ph}
            onChangeText={(evt) => handleChange(evt)}
            value={value}
          />

          }

        
          {ph=="Titulo de la receta"?  
          <OneButton handleBoolean={handleBoolean} textbtn={textbtn} />
          :
          <View> 
          <OneButton handleBoolean={handleBackBoolean} textbtn={textbtn2} />
          <OneButton handleBoolean={handleBoolean} textbtn={textbtn} />
          </View>
          }  
          
        
        </View>
      );
    } else {
      return null;
    }
  }

  /* <InputDataRecipe  title={"Ingredientes"}/>
        <InputDataRecipe  title={"Paso a paso"}/>
        <InputDataRecipe  title={"Categoria (solo 1?)"}/> */
  /* <MaterialChip
        text="Example"
        onPress={() => console.log('press')}
        onDelete={() => console.log('delete')}
        style={{borderStartColor: "green", borderTopColor: "green", borderBottomColor: "green", borderEndColor: "green"}}
        //style={{borderColor:"green"}}
        rightIcon={
          <View
              style={{
                  height: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                  width: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                  borderRadius: MaterialChip.CHIP_RIGHT_ICON_RADIUS,
                  //backgroundColor: 'black',
                  borderWidth: 0,
                  default: true
              }}
              ><MaterialCommunityIcons name="close-circle-outline" size={20} /></View>}
        /> */
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    //backgroundColor: '#000000',
    fontSize: 20,
    borderBottomColor: "#35b056",
    borderBottomWidth: 2,
    marginTop: 25,
    padding: 10,
    marginHorizontal: 40,
  },
  avatarContainer: {
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4,
    alignItems: "center",
    marginTop: "3%"
  },
  avatarPlaceholder: {
    width: 136,
    height: 136,
    backgroundColor: "#E1E2E6",
    borderRadius: 100,
  },
  avatar: {
    width: 250,
    height: 150,
    borderRadius: 15,

  },
});

export default AddRecipeStep1;
