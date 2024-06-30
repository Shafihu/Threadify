import { ScrollView, StyleSheet, Button, Platform, RefreshControl } from 'react-native';
import * as React from "react";
import Lottie from 'lottie-react-native';

import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createRandomUser } from '@/utils/generate-dummy-data';
import { ThreadsContext } from '@/context/thread-context';
import ThreadsItem from '@/components/ThreadsItem';

export default function TabOneScreen() {

  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadsContext)

  return (
    <SafeAreaView>
      <ScrollView 
        contentContainerStyle={{
          // backgroundColor: 'gray',
          paddingHorizontal: 10,
          paddingTop: Platform.select({android: 10})
        }}
        refreshControl={
          <RefreshControl 
            refreshing={false}
            onRefresh={()=>{animationRef.current?.play()}}
            tintColor={"transparent"}
          />
        }
      >
      <Lottie 
        ref = {animationRef}
         autoPlay
         source={require('../../lottie-animations/threads.json')}
         loop={false}
         style={{
          width: 90,
          height: 90,
          alignSelf: 'center',
         }}
        //  onAnimationFinish={()=>{alert("Finished")}}
      />
 
      {threads.map((thread)=>
        <ThreadsItem key={thread.id} {...thread} />
      )}
  
      </ScrollView>
    </SafeAreaView>
  );
}
