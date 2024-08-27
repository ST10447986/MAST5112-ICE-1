import {useState} from 'react'

import {

  View,

  Text,

  TextInput,

  TouchableOpacity,

  StyleSheet,

} from 'react-native'
 
function Calculator(){

const [num1,setNum1] = useState();

const [num2,setNum2] = useState();

const [answer,setAnswer] = useState("")
 
const Add = ()=> {

  let ans = 0

  ans = Number(num1) + Number(num2)

  setAnswer(ans);

}

const Subtract = ()=> {

  let ans = 0

  ans = Number(num1) - Number(num2)

  setAnswer(ans);

}

const Divide =  ()=> {

  let ans = 0

  Number1 = Number(num1)

  Number2 = Number(num2)
 
  if(Number1 == 0 || Number2 == 0){

      setAnswer ("Cannot divide by 0")

  }else{

    ans = Number(num1) / Number(num2)

    setAnswer(ans);

  }

}
 
const Multiply = ()=> {

  let ans = 0

  ans = Number(num1) * Number(num2)

  setAnswer(ans);

}
 
const Sqrt = () => {

  let ans = 0

  ans = Math.sqrt(Number(num1), Number(num2))

  setAnswer(ans)

}
 
const Pow = () => {

   let ans = 0

  ans = Math.pow(Number(num1), Number(num2))

  setAnswer(ans)

}
 
return(
<View style = {Styles.container}>
<Text style={Styles.heading}>Calculator</Text>
 
    <View style = {Styles.inputContainer}>
<TextInput

        style={Styles.input}

        onChangeText = {setNum1}

        value = {num1}

        placeholder="Enter the first number"

      />
</View>
<View style={Styles.inputContainer}>
<TextInput

        style={Styles.input}

        onChangeText = {setNum2}

        value = {num2}

        placeholder="Enter the first number"

      />
</View>
<View style={Styles.inputContainer} >
<TouchableOpacity style={Styles.addButton} onPress={Add}>
<Text>+</Text>
</TouchableOpacity>
 
    <TouchableOpacity style={Styles.addButton} onPress={Subtract}>
<Text>-</Text>
</TouchableOpacity>
 
    <TouchableOpacity style={Styles.addButton} onPress={Sqrt}>
<Text>√</Text>
</TouchableOpacity>
 
    </View>
 
    <View style={Styles.inputContainer}>
<TouchableOpacity style={Styles.addButton} onPress={Multiply}>
<Text>x</Text>
</TouchableOpacity>
 
    <TouchableOpacity style={Styles.addButton} onPress = {Divide}>
<Text>/</Text>
</TouchableOpacity>
 
 
     <TouchableOpacity style={Styles.addButton} onPress={Pow}>
<Text>^</Text>
</TouchableOpacity>
 
    </View>
<View style={Styles.tasksContainer}>
<Text style = {Styles.heading}>Answer: {answer}</Text>
</View>
 
 
  </View>
 
);//return

}//Function TaskApp

const Styles = StyleSheet.create({
 
container:{

  flex:1,

  padding:20,

},

heading:{

  fontSize:24,

  marginBottom:10,

},

inputContainer:{

  flexDirection:'row',

  alignItems:'center',

  marginTop:20,
 
},

input:{

  flex:1,

  height:40,

  borderColor:'grey',

  borderWidth:1,

  paddingHorizontal:10,

},

addButton:{

  width:40,

  height:40,

  backgroundColor:'#ADD8E6',

  justifyContent:'center',

  alignItems:'center',

  marginLeft:20,

  marginRight:20,

  marginBottom:20

},

addButtonText:{

  fontSize:24,

  color:"#fff",

},

tasksContainer:{

  marginTop:20,

},

task:{

  fontSize:18,

  marginBottom:10,

},
 
});
 
export default Calculator;
 