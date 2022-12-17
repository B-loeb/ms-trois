import styled from 'styled-components';

//background
import background from './../public/images/img16BG.png';

export const colors = {
    white: '#fff',
    light1: '#ffffcd',
    light2: '#feeaa3',
    logoYel: '#ACA600',
    yellow: '#ffca2a',
    sepia: '#b07201',
    orange: '#c52105',
    blood: '#710401',
    dark: '#230b01',
    black: '#000',

}

//styled components
export const StyledContainer = styled.div`
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background});
    background-size: cover;
    background-attatchment: fixed;
`;