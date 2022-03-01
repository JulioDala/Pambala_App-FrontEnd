import styled from "styled-components";
import { mobile } from "./Responsive";


export const Container = styled.div`
width: 90%;
max-width: 1620px;
margin: 0 auto;
`

export const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
${mobile({flexDirection: "column"})};
`

export const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
export const Logo = styled.div`
`
export const Title = styled.h1`
`
export const Desc = styled.p`
margin: 20px 0;
`
export const SocialContainer = styled.div`
display: flex;
`
export const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
cursor: pointer;
`

export const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})};
`
export const TitleMd = styled.h3`
`
export const List = styled.ul`
display: flex;
flex-wrap: wrap;
text-align: left;
margin: 0;
padding: 0;
@media screen and (max-width: 765px){
    flex-direction: column;
}
`

export const ListItem = styled.li`
width: 50%;
list-style: none;
margin-top: 8px;
cursor: pointer;
`
export const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#f7f7f7", padding: "10px"})};
`
export const ContactItem = styled.div`
display: flex;
margin-bottom: 10px;
align-items: center;
`