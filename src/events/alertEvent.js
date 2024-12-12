/**
 * alert events 
 */
function HelloAlert(){
    alert("HELLO EVENT");
};

const HeaderAlert = () => {
    alert("HEADER EVENT");
};

const NavAlert = (id) => {
    alert(id);
};

const HeadEvent = (props, event) => {
    event.preventDefault();
    HelloAlert();
    props.onChangeMode();
}

const NavEvent = (props, event, id) => {
    event.preventDefault();
    props.onChangeMode(id);
}

export { HeaderAlert, HeadEvent, NavEvent, NavAlert };