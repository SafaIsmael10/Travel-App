import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const HeartIcon = ({ color, size = 30 }) => {
    return <Icon name="heart" size ={size} color={color}/>;
};

export default HeartIcon;