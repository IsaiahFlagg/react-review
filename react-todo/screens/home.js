import React, { useState } from "react";
import {
    StyleSheet, View, Text, TouchableOpacity, Modal,
    TouchableWithoutFeedback, Keyboard
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm'

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch em All', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
        { title: 'Rocket League, one of a kind.', rating: 5, body: 'I have played Rocket League on and off since the year 2017 and it is by far the most challenging and rewarding game I have played by far. Rocket League is one of the most unique games on the market and I love every part of it. In the beginning it will be tough to catch on but in the end sticking with it and putting in the effort will be worth it!! Would give more stars if I could.', key: '4' }
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType={'slide'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    },
})