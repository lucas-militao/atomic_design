import React from "react";

import { ImageProps, View } from "react-native";

import { styles } from "./styles";
import { PostDescription } from "../../atoms/PostDescription";
import { PostPhoto } from "../../atoms/PostPhoto";
import { PostAbout } from "../../molecules/PostAbout";
import { PostHeader } from "../../molecules/PostHeader";
import { PostOptions } from "../../molecules/PostOptions";

export type PostProps = {
  id: string;
  username: string;
  location: string;
  likes: string;
  cover: ImageProps;
  description: string;
  lastLiked: Profile;
}

type Profile = {
  id: string;
  name: string;
  avatar: ImageProps;
}

type Props = {
  data: PostProps;
}

export function Post({ data }: Props) {
  return (
    <View style={styles.post}>
      <PostHeader username={data.username} location={data.location} />

      <PostPhoto source={data.cover} />

      <View style={styles.postFooter}>
        <PostOptions />

        <PostAbout avatar={data.lastLiked.avatar} likes={data.likes} />
        
        <PostDescription value={data.description}/>
      </View>
    </View>
  )
}