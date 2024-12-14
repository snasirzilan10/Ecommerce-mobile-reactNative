import {View, Text, FlatList} from 'react-native'
import ProductListItem from '../components/App_Related/ProductListItem'
import products from '../assets/products.json'
export default function HomeScreen(){
    return(

    <View>
        <FlatList
        data={products}
        renderItem={({item})=>(
            
            <ProductListItem product={item}/>
        )}
        />
        <Text style={{ fontSize:30 }}>Home Screen</Text>
    </View>

)
}