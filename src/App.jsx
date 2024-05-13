import React from "react";
import { SafeAreaView } from "react-native";
import FoodList from "./views/FoodList";

export default props => {
    return(
        <SafeAreaView>
           <FoodList/> 
        </SafeAreaView>
    )
}