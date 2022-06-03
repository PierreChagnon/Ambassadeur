import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#127299',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 25,
        width: "100%",
        display: "flex"
    },
    header: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        flex: 5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        textAlign: "center",
    },
    list_container: {
        width: "100%",
        display: "flex",
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    scrollview_container: {
        width: "100%",
        flex: 1,
    },
    scrollview_inner: {
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    floating_button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDFFEC",
        paddingBottom: 2,
        paddingLeft: 2
    },
    floating_button_container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        flex: 0.3,
    },
    button_text: {
        color: "#EDFFEC",
        backgroundColor: "transparent",
        fontSize: 20,
    },
    bottom_button_container: {
        position: "absolute",
        bottom: 30
    },
    bottom_button: {
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E92E2A",
        borderColor: "#EDFFEC",
        borderWidth: 1
    },
    bottom_button_thick: {
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A8211E",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    team_container: {
        flex: 1,
        padding: 20,
    },
    chip_container: {
        alignItems: "center",
        height: 50,
        marginTop: 20,
        borderWidth: 5
    },
    chip: {
        width: 150,
        backgroundColor: "#EDFFEC",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.3,
        zIndex: 2,
        elevation: 2,
    },
    word_input_container: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "space-between",
        width: "100%",
        height: 50,
        alignItems: "center",
        borderBottomColor: "#EDFFEC",
        borderBottomWidth: 2,
    },
    word_input: {
        flex: 7,
        height: 40,
        paddingLeft: 4,
        color: "#EDFFEC",
    },
    word_input_button_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        flex: 4,
    },
    erase_button: {
        height: 40,
        width: 40,
        backgroundColor: "#EDFFEC",
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    erase_button_text: {
        fontSize: 24,
        transform: [{ rotate: "45deg" }],
        paddingLeft: 2,
        paddingBottom: 2,
        color: "#127299"
    },
    shuffle_button: {
        height: 40,
        width: 40,
        backgroundColor: "#127299",
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#EDFFEC"
    },
    shuffle_button_text: {
        fontSize: 24,
        paddingLeft: 2,
        paddingBottom: 2,
        color: "#EDFFEC"
    },
    number_of_words_button: {
        width: 200,
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    active: {
        transform: [{ translateY: 5 }],
    },
    inactive: {
        transform: [{ translateY: 0 }],
    },
    game_UI_container: {
        width: "100%",
        height: "50%",
        justifyContent: "space-around",
        alignItems: "center",
    },
    score_text: {
        fontSize: 96,
        color: "#EDFFEC",
        textAlign: "right",
        display: "flex",
    },
    little_score_text: {
        fontSize: 36,
        color: "#EDFFEC",
    },
    game_UI_score_container: {
        height: "25%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "baseline"
    },
    gameover_bot_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        flex: 1,
        alignItems: "flex-end",
        paddingBottom: 5
    },
    gameover_top_container: {
        width: "100%",
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    help_button: {
        backgroundColor: "#EDFFEC",
        width: 190,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    modal_container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: "center",
        alignItems: "center"
    },
    modal_view: {
        backgroundColor: "white",
        margin: 20,
        padding: 35,
        borderRadius: 4,
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
    },
    page_title: {
        fontSize: 24,
        color: "#EDFFEC"
    },
    start_screen_text_container: {
        height: "70%",
        display: "flex",
        justifyContent: "space-around",
    },
    game_modal_container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },
    game_modal_view: {
        backgroundColor: "white",
        margin: 20,
        padding: 35,
        borderRadius: 4,
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
        width: "80%",
        height: "80%",
    },
    game_modal_input: {
        backgroundColor: "#E92E2A",
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 4,
    },
    game_modal_input_text: {
        fontSize: 20,
        color: "#EDFFEC"
    }
});