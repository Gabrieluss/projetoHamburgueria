import React, {useState} from "react";
import { FlatList, Text, View,StyleSheet, Pressable, Alert } from "react-native";
import { ListItem,Avatar,ThemeProvider} from "@rneui/themed";

import Icon  from "react-native-vector-icons/Ionicons";
import users from "../data/users";

export default props => {

    const [num, setNum] = useState(0);


    function aumentar(){
        setNum(num + 1);
        console.log(num);
    }

    function diminuir(){
        setNum(num - 1);
        console.log(num);
    }


    function  getFoodItem({item: food}){
        return(
            <ThemeProvider>
                <ListItem
                
                    style={style.body}
                    
                >

                <Avatar source={{uri: food.img}}
                size={65}
                rounded
                />

                <ListItem.Content>
                    <ListItem.Title style={style.titulo}>{food.nome}</ListItem.Title>
                    <ListItem.Title >{food.descricao}</ListItem.Title>
                    <ListItem.Title style={style.preco}>{food.preco}</ListItem.Title>
                </ListItem.Content>

                <ListItem.Chevron
                    name="remove"
                    color="#FFF"
                    size={30}
                    backgroundColor="#FFA725"
                    borderRadius={20}
                    onPress={diminuir}
                />
                
                <Text style={style.textItem}>{num}</Text>
                <ListItem.Chevron
                    name="add"
                    color="#FFF"
                    size={30}
                    backgroundColor="#FFA725"
                    borderRadius={20}
                    onPress={aumentar}
                />

                </ListItem>
            </ThemeProvider>
            
        )
    }
    return(
        <View style={style.button}>

             <FlatList
                keyExtractor={food => food.id.toString()}
                data={users}
                renderItem={getFoodItem}
            />
            <Pressable 
             style={({pressed}) => [
                {
                    backgroundColor: pressed ? 'orange' : 'green',
                },
                style.button,
            ]}
            onPress={() => {Alert.alert('Pedido enviado')}} 
            >
                <Text style={style.buttonText}>Continue</Text>
            </Pressable>
           
        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            backgroundColor:"#FFFFFF",
            borderRadius:2,
            elevation: 20,
            margin:15
           
        },
        titulo:{
            fontSize:20,
            color: "black",
            fontFamily: "Radio Canada Big",
            fontWeight: "bold"
        },
        preco:{
            fontSize:20,
            color: "#43AA48",
            fontFamily: "Platypi",
            fontWeight: "bold"
        },
        textItem:{
            fontSize:25,
            color: "black",
            fontFamily: "Platypi",
            fontWeight: "bold"
        },
        buttonText:{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: 'white'
        },
        button:{
            borderRadius: 8,
            
        }
       
    }
)