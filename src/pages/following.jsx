import React, { useContext } from 'react';

import Container from '../components/container';
import FollowingPic from '../components/following';
import HomeButton from '../components/homeBtn';


import { context } from '../context';


const Following = () => {
    const ctx = useContext(context);

    return (

        <Container>
            <HomeButton></HomeButton> {console.log(ctx)}
            <FollowingPic following={ctx.following} nameProfile={ctx.userData.login}></FollowingPic>
        </Container >

    );

}


export default Following;



