import React, { Component } from 'react';
import axios from 'axios';
import { Container, 
         Header, 
         Spinner, 
         Content, 
         Footer, 
         Title, 
         Icon, 
         Left,
         View,
         Fab, 
         Right, 
         Button, 
         Body,
         Text,
         Form,
         Item,
         Input,
         Label,
         Thumbnail } from 'native-base';
        
class App extends Component {
    constructor(){
        super();
        this.state = {pedagang:[], form:''};
    }

    klik =()=> {
    var url='http://192.168.169.2:1111/data';
    axios.get(url).then((ambilData)=>{
        console.log(ambilData.data);
        this.setState({
            pedagang: ambilData.data,
        })
    })
    }
    
  render() {
      const data = this.state.pedagang.map((item,index)=>{
            var daftar = [item.nama,item.usia,item.alamat].join(' - ');
              return <Text key={index}>{daftar}</Text>
          }
        )

    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Input placeholder="Find in here" onChangeText={(x)=>{this.setState({form:x})}} />
            <Icon name="search" onPress={()=>{this.klik()}}/>
          </Item>
        </Header>
        <Content>
         <Text>Daftar Pedagang KQ5 :</Text>
         <Text></Text>
         {data}
        </Content>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App;