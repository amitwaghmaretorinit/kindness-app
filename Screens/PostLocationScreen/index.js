import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import AppLayout from '../../components/AppLayout';
import GradientButton from '../../components/GradientButton';
import PageHeader from '../../components/PageHeader';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';

const PostLocationScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    const navigation = useNavigation()

    const onPost = () => {
        setShowAlert(true)
    }

    const onBack = () => {
        setSelectedLocation(null)
        navigation.goBack()
    }

    const onLocationSelect = (e) => {
        setSelectedLocation(e.nativeEvent.coordinate)
    }

    return (
        <AppLayout>

            {showAlert && <View style={styles.alert}>
                <View onTouchEnd={() => setShowAlert(false)} style={{ position: 'absolute', top: 0, right: 0, marginTop: 5, marginRight: 5 }}>
                    <Icon name={'closecircleo'} size={18} />
                </View>
                <Text style={{ fontWeight: '600', fontSize: 16 }}>Your Act has been posted!</Text>

            </View>}

            <View style={styles.contianer}>
                <PageHeader onBack={onBack}>
                    <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600', fontSize: 16 }}> Click to drop a pin on the map where this Act of Kindness happened </Text>
                </PageHeader>
                <GradientButton
                    disabled={!selectedLocation}
                    colors={selectedLocation ? false : ['#D8D8D8', '#D8D8D8']}
                    onPress={() => { setShowAlert(true) }} text={'POST'} />

            </View>
            <View style={styles.mapContainer}>
                <MapView
                    onPress={onLocationSelect}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}

                >
                    {
                        selectedLocation && [selectedLocation].map((marker, i) => {
                            const key = marker.longitude + marker.latitude + i
                            return (<Marker key={key} coordinate={{ ...marker }} >

                            </Marker>)
                        })
                    }
                </MapView>
            </View>
        </AppLayout>
    )
}
const styles = StyleSheet.create({
    alert: {
        elevation: 2,
        position: 'absolute',
        zIndex: 111,
        marginTop: SCREEN_HEIGHT / 4,
        marginLeft: SCREEN_WIDTH / 4,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        height: 100,
        justifyContent: 'center',
        shadowColor: "black"
    },
    contianer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    mapContainer: {
        height: 400,

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 5
    },
    circle: {
        borderRadius: 20,
        borderWidth: 1,
        padding: 2
    },
    subtitle: {
        fontSize: 12, color: '#777373', fontWeight: '100'
    }
})


export default PostLocationScreen

