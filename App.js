import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valorA: 0,
      valorB: 0,
      resultado: undefined
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    let resultadoCalculo = parseInt(this.state.valorA) + parseInt(this.state.valorB);
    this.setState({ resultado: resultadoCalculo });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Valor A?</Text>
        <TextInput
          style={styles.text}
          onChangeText={text => this.setState({ valorA: text })}
        />

        <Text>Valor B?</Text>
        <TextInput
          style={styles.text}
          onChangeText={text => this.setState({ valorB: text })}
        />

        <Button
          onPress={this.onSubmit}
          title="Somar"
          color="#841584"          
        />

        {this.state.resultado != undefined && (
          <Text style={{ padding: 10, fontSize: 42 }}>
            O resultado de {this.state.valorA} + {this.state.valorB} ={" "}
            {this.state.resultado}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 15
  },
  text: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    width: "100%",
    borderWidth: 1
  }
});
