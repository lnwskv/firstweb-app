import { View , Text,Button,TextInput,StyleSheet,ImageBackground } from "react-native";
import bg from "../assets/w2.jpg";
import BouncyCheckbox from "react-native-bouncy-checkbox";
export default function LoginBox(props){
    return (
        <View style={style.contrainerLogin}>
            <ImageBackground source={bg} resizeMode="repeat" >
            
                <Text style={style.textTitle}> Login</Text>
                <View style={style.contrainerInnerBox}>
                    <Text style={style.TextInnerBox}>
                        Email:
                    </Text>
                    <TextInput style={style.inputText} placeholder="ป้อนที่อยู่อีเมลของคุณ"/>
                    <Text style={style.TextInnerBox}>
                        Password:
                    </Text>
                    <TextInput style={style.inputText} placeholder="ป้อนที่รหัสของคุณ" secureTextEntry={true}/>
                    <BouncyCheckbox text="จดจำการเข้าระบบไว้" textStyle={{textDecorationLine: "none"}}/>
                    <Button title="ล็อกอิน"/>                 


                </View>
            </ImageBackground>
        </View>
    );
}
const style = StyleSheet.create({
    contrainerLogin:{
        padding:20,
        width:"100%",
        borderRadius:20,
        gap:20
    },
    textTitle:{
        fontSize:35,
        fontWeight:"800",
        color:"rgb(255, 190, 242)"
    },
    contrainerInnerBox:{
        padding:10,
        gap:10
    },
    TextInnerBox:{
        color:"rgb(33, 213, 228)",
        fontSize:20
    },
    inputText:{
        borderRadius:5,
        width:"100%",
        backgroundColor:"rgb(255,255,255)",
        padding:5,
        fontSize:16
    },
    
});