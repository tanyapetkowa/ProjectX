body {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: skyblue;
    background-image: url('./images/backimg.jpg');
} 
.calculator{
    margin-left: 85px;
    background-color: yellow;
    border-radius: 10%;
    padding: 20px;
    box-shadow: 10px 10px 10px 10px rgba(83, 111, 223, 0.806);
    width: 250px;
    border: red;
    border-style: dashed;
    border-width: 10px;
    animation: pulsateBorder 2s infinite;
}

@keyframes pulsateBorder {
    0%{
        border-color: red;
        background-color: lightseagreen;
    }
    50% {
        border-color: black;
        background-color: lightcoral;
    }
    100% {
        border-color: purple;
        background-color: lightskyblue;
    }
}

#result{
    width: 90%;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 18px;
    background-color: skyblue;
    font-weight: bold;
    margin-top: 10%;
    margin-bottom: 10%;
    border-radius: 10px;
}

.keypad{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
}

button {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    background-color: black;
    color: white;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: 2px 2px 2px 2px rgba(83, 111, 223, 0.806);
}
button:hover {
    background-color: blue;
    color: white;
}
.resetBtn {
    color: red;
    font-weight: bold;
}
.delBtn {
    color: yellow;
    font-weight: bold;
}
.opBtn {
    color: blue;
    font-weight: bold;
}
footer {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    background-color: bisque;
    font-size: 20px;
    animation: pulsateBorder 2s infinite;
    font-weight: bold;
}
