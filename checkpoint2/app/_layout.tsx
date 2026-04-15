import { Drawer } from 'expo-router/drawer'
import {Feather} from "@expo/vector-icons"

export default function TabLayout() {
    return(
        <Drawer>
            <Drawer.Screen name='cadastro' options={{drawerIcon:()=> <Feather name='user-plus'/>, title:"Cadastro"}}/>
            <Drawer.Screen name='perfil' options={{drawerIcon:()=> <Feather name='user'/>, title:"Perfil"}}/>
        </Drawer>
    );
}