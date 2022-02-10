import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 25,
        width: "100%"
    },
    text: {
        color: "#F7F0F5",
        fontSize: 24,
        textAlign: "center",
    },
    list_container: {
        backgroundColor: "white",
        width: "90%",
        height: "70%",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.3,
        marginTop: 20,
    },
    scrollview: {
        width: "100%",
        height: 400,
    },
    player_text_input: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        padding: 8,
        margin: 20,
        width: 200,
    },
    floating_button: {
        width: 80,
        height: 80,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 4
    },
    button_text: {
        color: "white",
        backgroundColor: "transparent",
        fontSize: 20,
        fontWeight: "bold"
    },
    bottom_button: {
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    team_text_input: {
        padding: 8,
        margin: 10,
        width: 200,
        backgroundColor: "#E8E8E8",
        height: 50,
        textAlign: "center",
        borderRadius: 4,
        zIndex: -1
    },
    team_container: {
        flex: 1,
        padding: 20,
        elevation: -3,
        zIndex: -3,
    },
    chip_container: {
        alignItems: "center",
        height: 50,
        marginTop: 20,
    },
    chip: {
        width: 150,
        backgroundColor: "#555555",
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
        marginBottom: 10,
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#E8E8E8",
        height: 50,
        alignItems: "center",
        borderRadius: 4,
        padding: 8,
    },
    word_input: {
        backgroundColor: "#fff",
        width: 225,
        height: 40,
        paddingLeft: 4,
        borderRadius: 4
    },
    erase_button: {
        height: 40,
        width: 40,
        backgroundColor: "#555555",
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
        color: "white"
    },
    game_settings_title: {
        backgroundColor: "grey",
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    game_settings_title_text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
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
    game_UI_team_name: {
        backgroundColor: "grey",
        padding: 10,
        borderRadius: 4,
        width: 250,
        alignItems: "center",
    },
    game_UI_text: {
        fontSize: 18,
        color: "white"
    },
    game_UI_score: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
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
    help_button_container: {
        top: 0,
        right: 0,
        position: "absolute",
    },
    help_button: {
        backgroundColor: "#fff",
        width: 50,
        height: 50,
        borderRadius: 25,
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
    },
    modal_text: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "justify"
    },
    dragback: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        position: "absolute",
        top: "50%",
        left: -80,
        transform: [{ translateY: "-50" }, { rotate: "90deg" }],
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        paddingBottom: 65,
        borderWidth: 1,
        borderColor: "black",
        marginTop: 25,

    },
    dragback_line: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 75,
        margin: 1,
    }
});