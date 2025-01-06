
import React from 'react'
import {Redirect} from "expo-router";

const Home = () => {
    // @ts-ignore
    return  <Redirect href="/(auth)/welcome" />;
}
export default Home
