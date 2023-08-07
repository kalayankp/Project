import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import AccountsScreen from './src/AccountsScreen';
import TransactionsScreen from './src/TransactionsScreen';
import ProfileScreen from './src/ProfileScreen';
import Header from './src/Header';
import LoginScreen from './src/LoginScreen';
import MobileScreen from './src/MobileScreen';
import BankScreen from './src/BankScreen';
import SelfScreen from './src/SelfScreen';
import CheckBalanceScreen from './src/CheckBalanceScreen';
import WalletScreen from './src/WalletScreen';
import EmailEdit from './src/EmailEdit';
import AddressScreen from './src/AddressScreen';
import ChangePasswordForm from './src/ChangePasswordForm';
import ForgotTPINForm from './src/ForgotTPINForm';
import ChangeTPINForm from './src/ChangeTPINForm';
import UpdateBankAccountForm from './src/UpdateBankAccountForm';
import LedgerStatement from './src/LedgerStatement';
import PaymentSettings from './src/PaymentSettings';
import LinkPANForm from './src/LinkPANForm';
// import IncomeVerificationForm from './src/IncomeVerificationForm';
import WalletClosureRequest from './src/WalletClosureRequest';
import Mobilenumber from './src/screen/Mobilenumber';
import Otp from './src/screen/Otp';
import Register from './src/screen/Register';
import Pan from './src/screen/Pan';
import Dob from './src/Dob';
import Address from './src/Address';
import PasswordScreen from './src/screen/PasswordScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // Once logged in, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // Once logged out, set isLoggedIn to false
    setIsLoggedIn(false);
  };
  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <Header handleLogout={handleLogin} />,
        }}
      />
    </Stack.Navigator>
  );

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Accounts') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Transactions') {
            iconName = focused ? 'repeat' : 'repeat-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#0078D7',
        showLabel: false,
        style: styles.tabBar,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        elevation: 0,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false}}/>
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
    </Tab.Navigator>
  )
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
  
              headerStyle: {
                backgroundColor: '#0078D7',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            
            }}/>
             <Stack.Screen
            name="TransferScreen"
            component={TransactionsScreen}
            options={{
  
              headerStyle: {
                backgroundColor: '#0078D7',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            
            }}/>
          <Stack.Screen name="MobileScreen" component={MobileScreen} />
          <Stack.Screen name="BankScreen" component={BankScreen} />
          <Stack.Screen name="SelfScreen" component={SelfScreen} />
          <Tab.Screen name="Balance" component={CheckBalanceScreen} />
          <Stack.Screen name="Edit Profile" component={EmailEdit} />
          <Stack.Screen name="Change Password" component={ChangePasswordForm} />
          <Stack.Screen name="Forgot TPIN" component={ForgotTPINForm} />
          <Stack.Screen name="Change" component={ChangeTPINForm} />
          <Stack.Screen name="Update" component={UpdateBankAccountForm} />
          <Stack.Screen name="Wallet" component={WalletClosureRequest} />
          <Stack.Screen name="LinkPANForm" component={LinkPANForm} />
          <Stack.Screen name="Ledger" component={LedgerStatement} />
          {/* <Stack.Screen name="IncomeVerificationForm" component={IncomeVerificationForm} /> */}
          <Stack.Screen name="UpdateAddress" component={AddressScreen} />
          <Stack.Screen name="BankAccount" component={PaymentSettings} />
          
         <Stack.Screen name="Mobile" component={Mobilenumber} options={{
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}/>
 <Stack.Screen name="OTP" component={Otp}   options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
   <Stack.Screen name="Password" component={PasswordScreen} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}} />
  <Stack.Screen name="PAN" component={Pan} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}} />
      <Stack.Screen name="Dob" component={Dob} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>

<Stack.Screen name="Address" component={Address} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/> 
<Stack.Screen name="Register" component={Register} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/> 
        </Stack.Navigator>
      ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
 
  tabBar: {
    borderTopWidth: 4,
    borderTopColor: '#ddd',
    paddingBottom: 5,
    paddingTop: 5,
  },
});
export default App;