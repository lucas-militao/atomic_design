import React from "react";

import { View } from "react-native";
import { ProfileIcon } from "../../../global/styles/icons";
import { styles } from "./styles";
import { PostAvatar } from "../../atoms/PostAvatar";
import { PostLocation } from "../../atoms/PostLocation";
import { PostUsername } from "../../atoms/PostUsername";

type Props = {
  username: string;
  location: string;
}

export function PostHeader({ username, location }: Props) {
  
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon}/>
      <View>
        <PostUsername value={username}/>
        <PostLocation value={location}/>
      </View>
    </View>
  )
}